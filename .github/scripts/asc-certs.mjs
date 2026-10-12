// App Store Connect API で署名用の証明書を一覧・取り消しする（CI が毎回作る証明書が上限に達するのを防ぐ）
// 使い方: node asc-certs.mjs list            … 一覧を表示し、ID の一覧を JSON で標準出力の最後の行に出す
//        node asc-certs.mjs revoke-all       … 開発用・配布用の証明書をすべて取り消す（次のビルドで自動署名が作り直す）
//        node asc-certs.mjs revoke-new FILE  … FILE（ビルド前の ID 一覧）に無い証明書＝この回に作ったものだけを取り消す
// 必要な環境変数: ASC_KEY_ID / ASC_ISSUER_ID / ASC_KEY_P8
import crypto from 'node:crypto'; import fs from 'node:fs';
const b64 = b => Buffer.from(b).toString('base64url');
function token() {
  const now = Math.floor(Date.now() / 1000);
  const head = b64(JSON.stringify({ alg: 'ES256', kid: process.env.ASC_KEY_ID, typ: 'JWT' }));
  const body = b64(JSON.stringify({ iss: process.env.ASC_ISSUER_ID, iat: now, exp: now + 600, aud: 'appstoreconnect-v1' }));
  const sig = crypto.sign('sha256', Buffer.from(head + '.' + body), { key: process.env.ASC_KEY_P8, dsaEncoding: 'ieee-p1363' });
  return head + '.' + body + '.' + b64(sig);
}
async function api(method, path) {
  const r = await fetch('https://api.appstoreconnect.apple.com' + path, { method, headers: { Authorization: 'Bearer ' + token() } });
  if (!r.ok && r.status !== 204) throw new Error(method + ' ' + path + ' → ' + r.status + ' ' + (await r.text()).slice(0, 300));
  return r.status === 204 ? null : r.json();
}
const SIGNING = ['DEVELOPMENT', 'DISTRIBUTION', 'IOS_DEVELOPMENT', 'IOS_DISTRIBUTION'];
async function list() {
  const j = await api('GET', '/v1/certificates?limit=200');
  return j.data.filter(c => SIGNING.includes(c.attributes.certificateType));
}
const [cmd, file] = process.argv.slice(2);
const certs = await list();
for (const c of certs) console.log(`${c.id}  ${c.attributes.certificateType}  ${c.attributes.displayName || c.attributes.name}  期限 ${c.attributes.expirationDate}`);
console.log(`署名用の証明書 ${certs.length}枚`);
if (cmd === 'list') { console.log(JSON.stringify(certs.map(c => c.id))); }
else if (cmd === 'revoke-all' || cmd === 'revoke-new') {
  const before = cmd === 'revoke-new' ? new Set(JSON.parse(fs.readFileSync(file, 'utf8').trim().split('\n').pop())) : new Set();
  const target = certs.filter(c => !before.has(c.id));
  for (const c of target) { await api('DELETE', '/v1/certificates/' + c.id); console.log('取り消し:', c.id, c.attributes.certificateType); }
  console.log(`取り消した証明書 ${target.length}枚`);
} else { console.error('使い方: list | revoke-all | revoke-new FILE'); process.exit(2); }
