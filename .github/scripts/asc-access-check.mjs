// App Store Connect API の鍵で、TestFlight とアナリティクスの数字を「読めるか」だけを確かめる（10/16 本人OK：利用状況のレポートの準備）
// 読み取り（GET）だけで、何も変更しない。この repo は公開なので、ログには「どの窓口が何番で返ったか」だけを出し、人数・名前・メールなどの中身は出さない
// 必要な環境変数: ASC_KEY_ID / ASC_ISSUER_ID / ASC_KEY_P8
import crypto from 'node:crypto';
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
  return { status: r.status, json: r.ok ? await r.json() : null };
}
const apps = await get('/v1/apps?filter[bundleId]=com.yoshioide2301.michito&fields[apps]=bundleId');
console.log('アプリ', apps.status);
const id = apps.json && apps.json.data[0] && apps.json.data[0].id;
if (!id) { console.log('ミチトが見つからないので止めます'); process.exit(0); }
const checks = [
  ['TestFlight のグループ', `/v1/apps/${id}/betaGroups?limit=1&fields[betaGroups]=name`],
  ['TestFlight のテスター', `/v1/betaTesters?filter[apps]=${id}&limit=1&fields[betaTesters]=state`],
  ['TestFlight の利用（テスター別）', `/v1/apps/${id}/metrics/betaTesterUsages?period=P30D&limit=1`],
  ['ビルド', `/v1/builds?filter[app]=${id}&limit=1&fields[builds]=version`],
  ['アナリティクスのレポート依頼', `/v1/apps/${id}/analyticsReportRequests?limit=1`]
];
for (const [name, path] of checks) {
  const r = await get(path);
  console.log(name, r.status, r.status === 200 ? '読める' : r.status === 403 ? '権限が足りない' : '要確認');
}
