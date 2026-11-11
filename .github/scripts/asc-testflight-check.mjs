// TestFlight の配り先を読むだけで確かめる（11/11 作成：1.2.2 の確認で、あなたの iPhone に 1.3 が入っていた件の原因調べ）
// 出すのは、ビルドの版・番号・状態・期限切れか・どのグループに入っているか、グループの名前・内部か・全ビルドが届くか・人数だけ。
// メールアドレスや名前は出さない（公開 repo のため）。何も変えない。
import crypto from 'node:crypto';
const BUNDLE_ID = process.env.BUNDLE_ID || 'com.yoshioide2301.michito';
const b64 = b => Buffer.from(b).toString('base64url');
function token() {
  const now = Math.floor(Date.now() / 1000);
  const head = b64(JSON.stringify({ alg: 'ES256', kid: process.env.ASC_KEY_ID, typ: 'JWT' }));
  const body = b64(JSON.stringify({ iss: process.env.ASC_ISSUER_ID, iat: now, exp: now + 600, aud: 'appstoreconnect-v1' }));
  const sig = crypto.sign('sha256', Buffer.from(head + '.' + body), { key: process.env.ASC_KEY_P8, dsaEncoding: 'ieee-p1363' });
  return head + '.' + body + '.' + b64(sig);
}
async function get(path) {
  const r = await fetch('https://api.appstoreconnect.apple.com' + path, { headers: { Authorization: 'Bearer ' + token() } });
  const t = await r.text();
  return { ok: r.ok, status: r.status, json: t ? JSON.parse(t) : null };
}
const app = await get('/v1/apps?filter[bundleId]=' + encodeURIComponent(BUNDLE_ID));
if (!app.ok) { console.log('アプリを読めない', app.status); process.exit(0); }
const appId = app.json.data[0].id;

console.log('== グループ ==');
const groups = await get('/v1/apps/' + appId + '/betaGroups?limit=50');
for (const g of groups.json.data) {
  const t = await get('/v1/betaGroups/' + g.id + '/betaTesters?limit=200');
  const a = g.attributes;
  console.log(`${a.name}｜内部=${a.isInternalGroup}｜全ビルドが自動で届く=${a.hasAccessToAllBuilds}｜人数=${t.ok ? t.json.data.length : '?'}`);
}

console.log('== 最近のビルド ==');
const builds = await get('/v1/builds?filter[app]=' + appId + '&sort=-uploadedDate&limit=8&include=preReleaseVersion,betaGroups');
const inc = builds.json.included || [];
const find = (type, id) => inc.find(x => x.type === type && x.id === id);
for (const b of builds.json.data) {
  const pv = b.relationships.preReleaseVersion.data && find('preReleaseVersions', b.relationships.preReleaseVersion.data.id);
  const gs = (b.relationships.betaGroups && b.relationships.betaGroups.data || []).map(x => (find('betaGroups', x.id) || {}).attributes?.name || x.id);
  const d = await get('/v1/builds/' + b.id + '/buildBetaDetail');
  const det = d.ok ? d.json.data.attributes : {};
  console.log(`版 ${pv ? pv.attributes.version : '?'}（${b.attributes.version}）｜${b.attributes.uploadedDate}｜処理=${b.attributes.processingState}｜期限切れ=${b.attributes.expired}｜内部の状態=${det.internalBuildState}｜外部の状態=${det.externalBuildState}｜グループ=${gs.join('・') || 'なし'}`);
}
