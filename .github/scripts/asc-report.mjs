// ミチトの利用状況（TestFlight とアナリティクス）を App Store Connect API で集め、暗号にして保存する（10/16 本人OK：週1回のレポート）
// この repo は公開なので、ログには「どの窓口が何番で返ったか」だけを出す。集めた数字は .github/asc-report-public.pem で暗号にし、
// 管理者のパソコンにある秘密鍵でしか読めない report.enc にする（中身の集計と日本語のまとめは、非公開の管理 repo で作る）。
// テスターの名前・メールアドレスは取らない（fields で指定しない）。
// 変更するのは1つだけ：アナリティクスの「作り続ける」依頼（ONGOING）が無いときに1回だけ作る（数字を集め始める設定。アプリと利用者には影響なし）
// 必要な環境変数: ASC_KEY_ID / ASC_ISSUER_ID / ASC_KEY_P8
import crypto from 'node:crypto'; import fs from 'node:fs'; import zlib from 'node:zlib';
const b64 = b => Buffer.from(b).toString('base64url');
function token() {
  const now = Math.floor(Date.now() / 1000);
  const head = b64(JSON.stringify({ alg: 'ES256', kid: process.env.ASC_KEY_ID, typ: 'JWT' }));
  const body = b64(JSON.stringify({ iss: process.env.ASC_ISSUER_ID, iat: now, exp: now + 600, aud: 'appstoreconnect-v1' }));
  const sig = crypto.sign('sha256', Buffer.from(head + '.' + body), { key: process.env.ASC_KEY_P8, dsaEncoding: 'ieee-p1363' });
  return head + '.' + body + '.' + b64(sig);
}
const out = { fetchedAt: new Date().toISOString(), status: {} };
async function call(label, path, opts = {}) {
  const r = await fetch(path.startsWith('http') ? path : 'https://api.appstoreconnect.apple.com' + path,
    { method: opts.method || 'GET', headers: { Authorization: 'Bearer ' + token(), 'Content-Type': 'application/json' }, body: opts.body ? JSON.stringify(opts.body) : undefined });
  out.status[label] = r.status;
  console.log(label, r.status);
  if (!r.ok) { out.status[label + '（エラー）'] = (await r.text()).slice(0, 500); return null; }
  return r.status === 204 ? {} : r.json();
}
async function all(label, path) {
  let j = await call(label, path), data = [];
  while (j) { data = data.concat(j.data || []); j = j.links && j.links.next ? await call(label + '（続き）', j.links.next) : null; }
  return data;
}
const apps = await call('アプリ', '/v1/apps?filter[bundleId]=com.yoshioide2301.michito&fields[apps]=bundleId,name');
const id = apps && apps.data[0] && apps.data[0].id;
if (!id) { console.log('ミチトが見つからないので止めます'); process.exit(1); }

// ── TestFlight ──
out.groups = [];
for (const g of await all('グループ', `/v1/apps/${id}/betaGroups?limit=50&fields[betaGroups]=name,isInternalGroup,publicLinkEnabled,publicLinkLimit,publicLinkLimitEnabled,createdDate`)) {
  const testers = await all('グループのテスター', `/v1/betaGroups/${g.id}/betaTesters?limit=200&fields[betaTesters]=state,inviteType`);
  const usage = await call('グループの利用', `/v1/betaGroups/${g.id}/metrics/betaTesterUsages?period=P30D&groupBy=betaTesters&limit=200`);
  const link = g.attributes.publicLinkEnabled ? await call('公開リンクの利用', `/v1/betaGroups/${g.id}/metrics/publicLinkUsages`) : null;
  out.groups.push({ id: g.id, ...g.attributes, testers: testers.map(t => ({ id: t.id, ...t.attributes })), usage30d: usage, publicLinkUsages: link });
}
out.testerUsage = {};
for (const p of ['P7D', 'P30D']) out.testerUsage[p] = await call('テスター別の利用 ' + p, `/v1/apps/${id}/metrics/betaTesterUsages?period=${p}&groupBy=betaTesters&limit=200`);
out.builds = [];
for (const b of ((await call('ビルド', `/v1/builds?filter[app]=${id}&limit=5&sort=-uploadedDate&fields[builds]=version,uploadedDate,expirationDate,expired,processingState`)) || {}).data || []) {
  const m = await call('ビルドの利用', `/v1/builds/${b.id}/metrics/betaBuildUsages`);
  out.builds.push({ id: b.id, ...b.attributes, usage: m });
}

// ── アナリティクス（本番） ──
let reqs = await all('レポート依頼', `/v1/apps/${id}/analyticsReportRequests?limit=50`);
let ongoing = reqs.find(r => r.attributes.accessType === 'ONGOING' && !r.attributes.stoppedDueToInactivity);
if (!ongoing) {
  const made = await call('レポート依頼を作る', '/v1/analyticsReportRequests', { method: 'POST', body: { data: { type: 'analyticsReportRequests', attributes: { accessType: 'ONGOING' }, relationships: { app: { data: { type: 'apps', id } } } } } });
  ongoing = made && made.data;
  out.requestCreatedNow = !!ongoing;
}
out.analytics = [];
const WANT = /^(App Downloads Standard|App Sessions Standard|App Store Discovery and Engagement Standard|App Crashes|App Store Installation and Deletion Standard)$/;
if (ongoing) {
  for (const rep of await all('レポート一覧', `/v1/analyticsReportRequests/${ongoing.id}/reports?limit=200`)) {
    if (!WANT.test(rep.attributes.name)) continue;
    const entry = { name: rep.attributes.name, category: rep.attributes.category, instances: [] };
    const inst = await all('レポートの日付', `/v1/analyticsReports/${rep.id}/instances?filter[granularity]=DAILY&limit=200`);
    for (const i of inst.sort((a, b) => b.attributes.processingDate.localeCompare(a.attributes.processingDate)).slice(0, 14)) {
      const rows = [];
      for (const s of await all('レポートの区切り', `/v1/analyticsReportInstances/${i.id}/segments?limit=50`)) {
        const r = await fetch(s.attributes.url);
        if (r.ok) rows.push(zlib.gunzipSync(Buffer.from(await r.arrayBuffer())).toString('utf8'));
      }
      entry.instances.push({ date: i.attributes.processingDate, csv: rows });
    }
    out.analytics.push(entry);
  }
}

// ── 暗号にして保存（AES-256-GCM の鍵を RSA-OAEP で包む） ──
const key = crypto.randomBytes(32), iv = crypto.randomBytes(12);
const c = crypto.createCipheriv('aes-256-gcm', key, iv);
const enc = Buffer.concat([c.update(zlib.gzipSync(JSON.stringify(out))), c.final()]);
const wrapped = crypto.publicEncrypt({ key: fs.readFileSync('.github/asc-report-public.pem'), padding: crypto.constants.RSA_PKCS1_OAEP_PADDING, oaepHash: 'sha256' }, key);
fs.writeFileSync('report.enc', JSON.stringify({ v: 1, key: wrapped.toString('base64'), iv: iv.toString('base64'), tag: c.getAuthTag().toString('base64'), data: enc.toString('base64') }));
console.log('暗号にして保存しました');
