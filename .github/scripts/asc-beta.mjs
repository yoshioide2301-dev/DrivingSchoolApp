// App Store Connect API で、アップロードしたビルドを TestFlight の外部グループ（既定「モニター」）に追加し、ベータ版の審査に出す
// 本人承認（2026-10-14）：外の人（友人の知人の知人など）は QR（公開リンク）で外部グループ「モニター」に入る。ビルドのたびに手で追加する手間をなくす
// - App Store での公開・App Review への提出はしない（TestFlight のベータ版の審査だけ）
// - グループが無い・処理が終わらないなどのときは、何もせず正常終了する（ビルドの結果には影響させない）
// 使い方: node asc-beta.mjs   必要な環境変数: ASC_KEY_ID / ASC_ISSUER_ID / ASC_KEY_P8 / BUILD_NUMBER（/ BETA_GROUP / BUNDLE_ID）
import crypto from 'node:crypto';
const BUNDLE_ID = process.env.BUNDLE_ID || 'com.yoshioide2301.michito';
const GROUP = process.env.BETA_GROUP || 'モニター';
const BUILD = String(process.env.BUILD_NUMBER || '');
const b64 = b => Buffer.from(b).toString('base64url');
function token() {
  const now = Math.floor(Date.now() / 1000);
  const head = b64(JSON.stringify({ alg: 'ES256', kid: process.env.ASC_KEY_ID, typ: 'JWT' }));
  const body = b64(JSON.stringify({ iss: process.env.ASC_ISSUER_ID, iat: now, exp: now + 600, aud: 'appstoreconnect-v1' }));
  const sig = crypto.sign('sha256', Buffer.from(head + '.' + body), { key: process.env.ASC_KEY_P8, dsaEncoding: 'ieee-p1363' });
  return head + '.' + body + '.' + b64(sig);
}
async function api(method, path, data) {
  const r = await fetch('https://api.appstoreconnect.apple.com' + path, {
    method, headers: { Authorization: 'Bearer ' + token(), 'Content-Type': 'application/json' }, body: data ? JSON.stringify(data) : undefined
  });
  const text = r.status === 204 ? '' : await r.text();
  return { ok: r.ok, status: r.status, json: text ? JSON.parse(text) : null, text };
}
const sleep = ms => new Promise(f => setTimeout(f, ms));
const done = msg => { console.log(msg); process.exit(0); };

if (!BUILD) done('BUILD_NUMBER が無いので何もしない');
const app = await api('GET', '/v1/apps?filter[bundleId]=' + encodeURIComponent(BUNDLE_ID));
if (!app.ok || !app.json.data.length) done('アプリが見つからない（' + app.status + '）。何もしない');
const appId = app.json.data[0].id;
const groups = await api('GET', '/v1/apps/' + appId + '/betaGroups?limit=100');
const group = groups.ok && groups.json.data.find(g => g.attributes.name === GROUP && !g.attributes.isInternalGroup);
if (!group) done('外部グループ「' + GROUP + '」がまだ無いので何もしない（App Store Connect で作れば、次のビルドから自動で追加する）');

// ビルドの処理が終わる（VALID）まで待つ。最長30分
let build = null;
for (let i = 0; i < 30; i++) {
  const b = await api('GET', '/v1/builds?filter[app]=' + appId + '&filter[version]=' + BUILD + '&limit=1');
  build = b.ok && b.json.data[0];
  const st = build ? build.attributes.processingState : '（まだ見えない）';
  console.log('ビルド ' + BUILD + ' の状態: ' + st);
  if (build && st === 'VALID') break;
  if (build && (st === 'FAILED' || st === 'INVALID')) done('ビルドの処理に失敗しているので何もしない');
  build = null; await sleep(60000);
}
if (!build) done('30分待ってもビルドの処理が終わらないので何もしない（あとで App Store Connect で手で追加できる）');

const add = await api('POST', '/v1/betaGroups/' + group.id + '/relationships/builds', { data: [{ type: 'builds', id: build.id }] });
console.log(add.ok ? '「' + GROUP + '」にビルド ' + BUILD + ' を追加した' : '追加できなかった: ' + add.status + ' ' + add.text.slice(0, 300));
const sub = await api('POST', '/v1/betaAppReviewSubmissions', { data: { type: 'betaAppReviewSubmissions', relationships: { build: { data: { type: 'builds', id: build.id } } } } });
console.log(sub.ok ? 'ベータ版の審査に出した' : 'ベータ版の審査に出せなかった（出し済み・審査不要の場合もある）: ' + sub.status + ' ' + sub.text.slice(0, 300));
