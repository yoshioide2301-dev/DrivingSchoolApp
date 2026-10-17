// ミチト：App Store の掲載情報（文章・画面写真・ビルド）を App Store Connect に登録する（10/17 本人：今日リリースの申請まで）
// MODE=check：今の状態を読むだけ（何も変えない）。MODE=apply：store/store-text.json と store/screenshots-iphone69 を登録する。
// 審査への提出はしない（提出は本人の承認のあと、別に行う）。この repo は公開なので、ログには状態と返事の番号だけを出す（掲載の文章は公開される情報）。
// 必要な環境変数: ASC_KEY_ID / ASC_ISSUER_ID / ASC_KEY_P8 / MODE
import crypto from 'node:crypto';
import fs from 'node:fs';
const MODE = process.env.MODE || 'check';
const T = JSON.parse(fs.readFileSync('store/store-text.json', 'utf8'));
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
    method, headers: { Authorization: 'Bearer ' + token(), 'Content-Type': 'application/json' },
    body: data ? JSON.stringify({ data }) : undefined
  });
  const text = await r.text();
  let json = null; try { json = text ? JSON.parse(text) : null; } catch { }
  if (!r.ok) {
    const errs = (json && json.errors || []).map(e => (e.code || '') + ' ' + (e.detail || e.title || '')).join(' / ');
    console.log('  ×', method, path.split('?')[0], r.status, errs.slice(0, 400));
  }
  return { ok: r.ok, status: r.status, json };
}
const say = (...a) => console.log(...a);

const apps = await api('GET', '/v1/apps?filter[bundleId]=com.yoshioide2301.michito');
const app = apps.json && apps.json.data[0];
if (!app) { say('ミチトが見つからない'); process.exit(1); }
const appId = app.id;
say('アプリ：見つかった', 'contentRightsDeclaration=' + app.attributes.contentRightsDeclaration);

// バージョン
const vers = await api('GET', `/v1/apps/${appId}/appStoreVersions?filter[platform]=IOS&limit=20`);
for (const v of vers.json.data) say('バージョン', v.attributes.versionString, v.attributes.appStoreState, 'copyright=' + (v.attributes.copyright || '-'));
const EDITABLE = ['PREPARE_FOR_SUBMISSION', 'READY_FOR_REVIEW', 'DEVELOPER_REJECTED', 'REJECTED', 'METADATA_REJECTED', 'INVALID_BINARY'];
let ver = vers.json.data.find(v => EDITABLE.includes(v.attributes.appStoreState));

// アプリ情報（名前・サブタイトル・カテゴリ・年齢区分）
const infos = await api('GET', `/v1/apps/${appId}/appInfos?include=primaryCategory,secondaryCategory`);
for (const i of infos.json.data) say('アプリ情報', i.id.slice(0, 6), i.attributes.appStoreState || i.attributes.state, 'カテゴリ=' + ((i.relationships.primaryCategory.data || {}).id || '-') + '/' + ((i.relationships.secondaryCategory.data || {}).id || '-'));
const info = infos.json.data.find(i => !['READY_FOR_SALE', 'READY_FOR_DISTRIBUTION'].includes(i.attributes.appStoreState || i.attributes.state)) || infos.json.data[0];
const infoLocs = await api('GET', `/v1/appInfos/${info.id}/appInfoLocalizations`);
for (const l of infoLocs.json.data) say('名前など', l.attributes.locale, 'name=' + l.attributes.name, 'subtitle=' + (l.attributes.subtitle || '-'), 'privacy=' + (l.attributes.privacyPolicyUrl ? 'あり' : 'なし'));
const age = await api('GET', `/v1/appInfos/${info.id}/ageRatingDeclaration`);
const ageNull = age.json ? Object.entries(age.json.data.attributes).filter(([, v]) => v === null).map(([k]) => k) : [];
say('年齢区分：未回答の項目', ageNull.length, ageNull.join(','));

// 価格
const price = await api('GET', `/v1/apps/${appId}/appPriceSchedule?include=manualPrices`);
say('価格の設定', price.ok ? ((price.json.included || []).length ? 'あり' : 'なし') : '読めない');

// ビルド
let build = null;
for (let i = 0; i < (MODE === 'apply' ? 30 : 1); i++) {
  const builds = await api('GET', `/v1/builds?filter[app]=${appId}&filter[version]=${T.buildNumber}&filter[preReleaseVersion.version]=${T.versionString}&limit=5`);
  build = builds.json && builds.json.data[0];
  if (build && build.attributes.processingState === 'VALID') break;
  if (MODE === 'apply') { say('ビルドの処理を待つ', i + 1); await new Promise(r => setTimeout(r, 60000)); }
}
say('ビルド', T.versionString + ' (' + T.buildNumber + ')', build ? build.attributes.processingState + ' 暗号=' + build.attributes.usesNonExemptEncryption : '見つからない');

if (ver) {
  const vb = await api('GET', `/v1/appStoreVersions/${ver.id}/build`);
  say('今の版のビルド', vb.json && vb.json.data ? vb.json.data.attributes.version : 'なし');
  const locs = await api('GET', `/v1/appStoreVersions/${ver.id}/appStoreVersionLocalizations`);
  for (const l of locs.json.data) {
    const a = l.attributes;
    say('掲載文', a.locale, '説明' + (a.description || '').length + '字', '宣伝' + (a.promotionalText || '').length + '字', 'キーワード' + (a.keywords || '').length + '字', 'サポートURL=' + (a.supportUrl ? 'あり' : 'なし'));
    const sets = await api('GET', `/v1/appStoreVersionLocalizations/${l.id}/appScreenshotSets?include=appScreenshots`);
    for (const s of sets.json.data) say('  画面写真', s.attributes.screenshotDisplayType, (s.relationships.appScreenshots.data || []).length + '枚');
  }
  const rd = await api('GET', `/v1/appStoreVersions/${ver.id}/appStoreReviewDetail`);
  const r = rd.json && rd.json.data;
  say('審査の連絡先', r ? ['contactFirstName', 'contactLastName', 'contactPhone', 'contactEmail'].map(k => k + '=' + (r.attributes[k] ? 'あり' : 'なし')).join(' ') + ' メモ=' + (r.attributes.notes ? 'あり' : 'なし') : 'なし');
} else say('編集できる版：なし');

if (MODE !== 'apply') process.exit(0);
say('--- 登録を始める ---');

// 1) 版（1.1）を用意する
if (!ver) {
  const c = await api('POST', '/v1/appStoreVersions', { type: 'appStoreVersions', attributes: { platform: 'IOS', versionString: T.versionString, copyright: T.copyright }, relationships: { app: { data: { type: 'apps', id: appId } } } });
  if (!c.ok) process.exit(1);
  ver = c.json.data; say('版を作った', T.versionString);
} else {
  const p = await api('PATCH', `/v1/appStoreVersions/${ver.id}`, { type: 'appStoreVersions', id: ver.id, attributes: { versionString: T.versionString, copyright: T.copyright } });
  say('版の番号と著作権', p.ok ? 'OK' : 'NG');
}
// 2) ビルド
if (build) { const b = await api('PATCH', `/v1/appStoreVersions/${ver.id}/relationships/build`, { type: 'builds', id: build.id }); say('ビルドを選ぶ', b.ok ? 'OK' : 'NG'); }
// 3) 掲載文（説明・宣伝・キーワード・サポートURL）
const locs = await api('GET', `/v1/appStoreVersions/${ver.id}/appStoreVersionLocalizations`);
let loc = locs.json.data.find(l => l.attributes.locale === T.locale);
const locAttr = { description: T.description, promotionalText: T.promotional_text, keywords: T.keywords, supportUrl: T.supportUrl };
if (loc) { const p = await api('PATCH', `/v1/appStoreVersionLocalizations/${loc.id}`, { type: 'appStoreVersionLocalizations', id: loc.id, attributes: locAttr }); say('掲載文', p.ok ? 'OK' : 'NG'); }
else { const c = await api('POST', '/v1/appStoreVersionLocalizations', { type: 'appStoreVersionLocalizations', attributes: { locale: T.locale, ...locAttr }, relationships: { appStoreVersion: { data: { type: 'appStoreVersions', id: ver.id } } } }); loc = c.json && c.json.data; say('掲載文（新規）', c.ok ? 'OK' : 'NG'); }
// 4) 名前・サブタイトル・プライバシーURL
let il = infoLocs.json.data.find(l => l.attributes.locale === T.locale);
const ilAttr = { name: T.name, subtitle: T.subtitle, privacyPolicyUrl: T.privacyPolicyUrl };
if (il) { const p = await api('PATCH', `/v1/appInfoLocalizations/${il.id}`, { type: 'appInfoLocalizations', id: il.id, attributes: ilAttr }); say('名前・サブタイトル', p.ok ? 'OK' : 'NG'); }
else { const c = await api('POST', '/v1/appInfoLocalizations', { type: 'appInfoLocalizations', attributes: { locale: T.locale, ...ilAttr }, relationships: { appInfo: { data: { type: 'appInfos', id: info.id } } } }); say('名前・サブタイトル（新規）', c.ok ? 'OK' : 'NG'); }
// 5) カテゴリ
{ const p = await api('PATCH', `/v1/appInfos/${info.id}`, { type: 'appInfos', id: info.id, relationships: { primaryCategory: { data: { type: 'appCategories', id: T.primaryCategory } }, secondaryCategory: { data: { type: 'appCategories', id: T.secondaryCategory } } } }); say('カテゴリ', p.ok ? 'OK' : 'NG'); }
// 6) 年齢区分：未回答の項目だけ「なし」で埋める（文字の項目は NONE、真偽の項目は false）
if (age.json && ageNull.length) {
  let ok = 0, ng = [];
  for (const k of ageNull) {
    if (['kidsAgeBand', 'gracRatingClassificationNumber', 'developerAgeRatingInfoUrl', 'ageRatingOverride', 'ageRatingOverrideV2', 'koreaAgeRatingOverride'].includes(k)) continue;
    let done = false;
    for (const v of ['NONE', false]) {
      const r = await fetch('https://api.appstoreconnect.apple.com/v1/ageRatingDeclarations/' + age.json.data.id, { method: 'PATCH', headers: { Authorization: 'Bearer ' + token(), 'Content-Type': 'application/json' }, body: JSON.stringify({ data: { type: 'ageRatingDeclarations', id: age.json.data.id, attributes: { [k]: v } } }) });
      if (r.ok) { done = true; break; }
    }
    if (done) ok++; else ng.push(k);
  }
  say('年齢区分', ok + '項目を「なし」に', ng.length ? '通らなかった：' + ng.join(',') : '');
}
// 6b) 価格：無料（まだ設定が無いときだけ）
if (!price.ok) {
  const pts = await api('GET', `/v1/apps/${appId}/appPricePoints?filter[territory]=JPN&limit=200`);
  const free = pts.json && pts.json.data.find(p => Number(p.attributes.customerPrice) === 0);
  if (free) {
    const r = await fetch('https://api.appstoreconnect.apple.com/v1/appPriceSchedules', { method: 'POST', headers: { Authorization: 'Bearer ' + token(), 'Content-Type': 'application/json' }, body: JSON.stringify({
      data: { type: 'appPriceSchedules', relationships: { app: { data: { type: 'apps', id: appId } }, baseTerritory: { data: { type: 'territories', id: 'JPN' } }, manualPrices: { data: [{ type: 'appPrices', id: '${p0}' }] } } },
      included: [{ type: 'appPrices', id: '${p0}', attributes: { startDate: null }, relationships: { appPricePoint: { data: { type: 'appPricePoints', id: free.id } } } }] }) });
    say('価格（無料）', r.ok ? 'OK' : 'NG ' + r.status + ' ' + (await r.text()).slice(0, 300));
  } else say('価格（無料）', '無料の価格が見つからない');
}
// 6c) 配信地域：日本だけ（まだ設定が無いときだけ）
{
  const av = await api('GET', `/v1/apps/${appId}/appAvailabilityV2`);
  if (!av.ok) {
    const r = await fetch('https://api.appstoreconnect.apple.com/v2/appAvailabilities', { method: 'POST', headers: { Authorization: 'Bearer ' + token(), 'Content-Type': 'application/json' }, body: JSON.stringify({
      data: { type: 'appAvailabilities', attributes: { availableInNewTerritories: false }, relationships: { app: { data: { type: 'apps', id: appId } }, territoryAvailabilities: { data: [{ type: 'territoryAvailabilities', id: '${jpn}' }] } } },
      included: [{ type: 'territoryAvailabilities', id: '${jpn}', attributes: { available: true, releaseDate: null, preOrderEnabled: false }, relationships: { territory: { data: { type: 'territories', id: 'JPN' } } } }] }) });
    say('配信地域（日本）', r.ok ? 'OK' : 'NG ' + r.status + ' ' + (await r.text()).slice(0, 300));
  } else say('配信地域', '設定済み');
}
// 6d) 第三者のコンテンツ：標識の図（パブリックドメイン）と法令の条文を使っている → 「使っていて、権利がある」
if (!app.attributes.contentRightsDeclaration) { const p = await api('PATCH', `/v1/apps/${appId}`, { type: 'apps', id: appId, attributes: { contentRightsDeclaration: 'USES_THIRD_PARTY_CONTENT' } }); say('第三者のコンテンツの申告', p.ok ? 'OK' : 'NG'); }
// 7) 審査メモ（連絡先は個人情報なので入れない。画面で本人が入れる）
{
  const rd = await api('GET', `/v1/appStoreVersions/${ver.id}/appStoreReviewDetail`);
  if (rd.json && rd.json.data) { const p = await api('PATCH', `/v1/appStoreReviewDetails/${rd.json.data.id}`, { type: 'appStoreReviewDetails', id: rd.json.data.id, attributes: { notes: T.reviewNotes, demoAccountRequired: false } }); say('審査メモ', p.ok ? 'OK' : 'NG'); }
  else { const c = await api('POST', '/v1/appStoreReviewDetails', { type: 'appStoreReviewDetails', attributes: { notes: T.reviewNotes, demoAccountRequired: false }, relationships: { appStoreVersion: { data: { type: 'appStoreVersions', id: ver.id } } } }); say('審査メモ（新規）', c.ok ? 'OK' : 'NG'); }
}
// 8) 画面写真（6.9インチ 1320×2868）。同じ種類の今の写真は消して、入れ直す
if (loc) {
  const DIR = 'store/screenshots-iphone69', TYPE = 'APP_IPHONE_67';
  const files = fs.readdirSync(DIR).filter(f => f.endsWith('.png')).sort();
  const sets = await api('GET', `/v1/appStoreVersionLocalizations/${loc.id}/appScreenshotSets?include=appScreenshots`);
  let set = sets.json.data.find(s => s.attributes.screenshotDisplayType === TYPE);
  if (set) for (const s of set.relationships.appScreenshots.data || []) await api('DELETE', `/v1/appScreenshots/${s.id}`);
  else { const c = await api('POST', '/v1/appScreenshotSets', { type: 'appScreenshotSets', attributes: { screenshotDisplayType: TYPE }, relationships: { appStoreVersionLocalization: { data: { type: 'appStoreVersionLocalizations', id: loc.id } } } }); set = c.json && c.json.data; }
  let n = 0;
  for (const f of files) {
    const buf = fs.readFileSync(DIR + '/' + f);
    const c = await api('POST', '/v1/appScreenshots', { type: 'appScreenshots', attributes: { fileName: f, fileSize: buf.length }, relationships: { appScreenshotSet: { data: { type: 'appScreenshotSets', id: set.id } } } });
    if (!c.ok) continue;
    for (const op of c.json.data.attributes.uploadOperations) {
      const h = {}; for (const x of op.requestHeaders || []) h[x.name] = x.value;
      const r = await fetch(op.url, { method: op.method, headers: h, body: buf.subarray(op.offset, op.offset + op.length) });
      if (!r.ok) say('  × 送信', f, r.status);
    }
    const md5 = crypto.createHash('md5').update(buf).digest('hex');
    const p = await api('PATCH', `/v1/appScreenshots/${c.json.data.id}`, { type: 'appScreenshots', id: c.json.data.id, attributes: { uploaded: true, sourceFileChecksum: md5 } });
    if (p.ok) n++;
  }
  say('画面写真', n + '/' + files.length + '枚');
}
say('--- 登録おわり（審査への提出はしていない） ---');
