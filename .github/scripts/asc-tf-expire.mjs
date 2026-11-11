// TestFlight の古いビルドを期限切れにする（あなたの OK があったものだけ。11/11 作成：1.3（29）が 1.2.2 より上に出ていた件）
// タグ asc-tf-expire-<版>-<ビルド番号>（例 asc-tf-expire-1.3-29）。版とビルド番号の両方が合うときだけ期限切れにする。
import crypto from 'node:crypto';
const BUNDLE_ID = 'com.yoshioide2301.michito';
const m = (process.env.GITHUB_REF_NAME || '').match(/^asc-tf-expire-([\d.]+)-(\d+)$/);
if (!m) { console.log('タグの形が違うので何もしない'); process.exit(0); }
const [, VER, NUM] = m;
const b64 = b => Buffer.from(b).toString('base64url');
function token() {
  const now = Math.floor(Date.now() / 1000);
  const head = b64(JSON.stringify({ alg: 'ES256', kid: process.env.ASC_KEY_ID, typ: 'JWT' }));
  const body = b64(JSON.stringify({ iss: process.env.ASC_ISSUER_ID, iat: now, exp: now + 600, aud: 'appstoreconnect-v1' }));
  const sig = crypto.sign('sha256', Buffer.from(head + '.' + body), { key: process.env.ASC_KEY_P8, dsaEncoding: 'ieee-p1363' });
  return head + '.' + body + '.' + b64(sig);
}
async function api(method, path, data) {
  const r = await fetch('https://api.appstoreconnect.apple.com' + path, { method, headers: { Authorization: 'Bearer ' + token(), 'Content-Type': 'application/json' }, body: data ? JSON.stringify(data) : undefined });
  const t = await r.text(); return { ok: r.ok, status: r.status, json: t ? JSON.parse(t) : null };
}
const app = await api('GET', '/v1/apps?filter[bundleId]=' + BUNDLE_ID);
const appId = app.json.data[0].id;
const b = await api('GET', '/v1/builds?filter[app]=' + appId + '&filter[version]=' + NUM + '&filter[preReleaseVersion.version]=' + VER + '&limit=2');
if (!b.ok || b.json.data.length !== 1) { console.log('版 ' + VER + '（' + NUM + '）がちょうど1つ見つからないので何もしない'); process.exit(1); }
const id = b.json.data[0].id;
const r = await api('PATCH', '/v1/builds/' + id, { data: { type: 'builds', id, attributes: { expired: true } } });
console.log(r.ok ? '版 ' + VER + '（' + NUM + '）を期限切れにした' : '失敗 ' + r.status);
process.exit(r.ok ? 0 : 1);
