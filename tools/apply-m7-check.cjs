// M7 の181問（D-M）に、GPT の独立照合（10/14）を受けた直しを入れる（本人OK 10/14：判断が要る37問はおすすめどおり）。
// 引用：結論まで延ばしたもの（「……」は中略）。根拠欄の直し。設問・解説の直し31問。外す6問は reviewStatus を excluded にする（出題しない）。
// 元：管理repo gpt-tasks/michito-m7-check/work/extended.json と judge-proposals.json（引用はすべて条文と機械照合済み）
// 使い方: node tools/apply-m7-check.cjs <michito-m7-check のフォルダ>　（2回目以降は何もしない）
const fs = require('fs'), path = require('path');
const file = path.join(__dirname, '..', 'questions', 'questions.js');
let src = fs.readFileSync(file, 'utf8');
if (src.includes('M7 独立照合（GPT、2026-10-14）')) { console.log('反映済み'); process.exit(0); }
const dir = process.argv[2];
const X = JSON.parse(fs.readFileSync(path.join(dir, 'work', 'extended.json'), 'utf8'));
const P = JSON.parse(fs.readFileSync(path.join(dir, 'judge-proposals.json'), 'utf8'));
const URL = { '道路交通法': 'https://laws.e-gov.go.jp/law/335AC0000000105', '道路交通法施行令': 'https://laws.e-gov.go.jp/law/335CO0000000270', '道路交通法施行規則': 'https://laws.e-gov.go.jp/law/335M50000002060', '道路標識、区画線及び道路標示に関する命令': 'https://laws.e-gov.go.jp/law/335M50004002003' };
let n = { quote: 0, ref: 0, question: 0, explanation: 0, excluded: 0 };
X.forEach(x => {
  const re = new RegExp('  \\{\\n    "id": "' + x.id + '",[\\s\\S]*?\\n  \\}');
  const m = src.match(re); if (!m) throw new Error('見つからない: ' + x.id);
  const o = JSON.parse(m[0]);
  if (x.quote && x.quote !== o.quote) { o.quote = x.quote; n.quote++; }
  if (x.ref_before) { o.ref = x.ref; o.sourceSection = x.ref; o.source = x.law; o.sourceURL = URL[x.law]; n.ref++; }
  const p = P[x.id];
  if (p && p.rec === '外す') { o.reviewStatus = 'excluded'; o.excludedReason = p.why; n.excluded++; }
  else if (p) { if (p.question) { o.question = p.question; n.question++; } if (p.explanation) { o.explanation = p.explanation; n.explanation++; } }
  o.lastVerifiedDate = '2026-10-14';
  o.reviewMethod += '／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）';
  src = src.replace(m[0], JSON.stringify(o, null, 2).replace(/^/gm, '  '));
});
src = src.replace(/^(\/\/ .*?)M7 の181問（D-M、2026-10-13 本人採用）/m, '$1M7 の181問（D-M、2026-10-13 本人採用。10/14 独立照合を受けて直し、6問は出題しない）');
fs.writeFileSync(file, src);
console.log('反映', n);
