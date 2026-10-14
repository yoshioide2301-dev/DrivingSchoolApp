// GPT の500問点検（管理repo gpt-tasks/michito-500-audit、10/15）を受けた直し（本人OK 10/15）。
// - ほぼ同じ文・同じ答えの重複10組から11問を外す
// - 同じ論点の○×の裏返し15組に pairGroup を付ける（模試で同じ回に入れない。app.js の startMock）
// - D-M300（M7F-07-003）を照合3の「直した後」の文に戻す（通行しようとする歩行者もいないこと。D-M255 との食い違いの解消）
// - 第9弾の直し案4問（直角駐車・斜め駐車・車両の種類・距離）を足す
// 足りない7問は第10弾（GPT）で補う。この時点の出題は493問。
// 使い方: node tools/apply-500-audit.cjs <管理repo の gpt-tasks のフォルダ>
const fs = require('fs'), path = require('path');
const file = path.join(__dirname, '..', 'questions', 'questions.js');
const src = fs.readFileSync(file, 'utf8');
if (src.includes('"pairGroup"')) { console.log('反映済み'); process.exit(0); }
const G = process.argv[2];
const ld = p => { const j = JSON.parse(fs.readFileSync(path.join(G, p), 'utf8')); return Array.isArray(j) ? j : Object.values(j).find(Array.isArray); };
const LAW = fs.readFileSync(path.join(G, 'michito-m7', 'law', 'hyoshikirei-20260901.txt'), 'utf8');
const LAWD = fs.readFileSync(path.join(G, 'michito-m7', 'law', 'doukouhou-20260721.txt'), 'utf8');
const TODAY = '2026-10-15';
const head = src.slice(0, src.indexOf('['));
const arr = eval(src.slice(src.indexOf('['), src.lastIndexOf(']') + 1));
const find = k => { const q = arr.find(x => x.id === k || x.draftId === k); if (!q) throw new Error(k + ' が見つからない'); return q; };

const DUP = {  // 外す問題: 残す問題（GPT の案どおり）
  'D-C064': 'D-C063', 'D-C072': 'D-C071', 'D-C162': 'D-C163', 'D-M143': 'D-C163', 'D-C173': 'D-C172', 'D-M012': 'D-C191',
  'D-C155': 'D-M033', 'D-M114': 'D-C043', 'D-M131': 'D-M303', 'D-M235': 'D-M236', 'D-M156': 'D-C115'
};
for (const k in DUP) { const q = find(k); q.reviewStatus = 'excluded'; q.excludedReason = DUP[k] + ' とほぼ同じ問題（GPT の500問点検 10/15、本人OK）'; q.lastVerifiedDate = TODAY; }

const PAIRS = [['D-C181', 'D-C182'], ['D-C089', 'D-C090'], ['D-C152', 'D-M036'], ['D-C151', 'D-M037'], ['D-C165', 'D-C166'], ['D-C169', 'D-M159'], ['D-N008', 'D-N029'], ['D-N019', 'D-M239'],
  ['D-N033', 'D-M175'], ['D-M087', 'D-M103'], ['D-C061', 'D-M072'], ['D-C014', 'D-C062'], ['D-C088', 'D-M151'], ['D-C097', 'D-M162'], ['D-C079', 'D-M062']];
PAIRS.forEach((p, i) => p.forEach(k => { find(k).pairGroup = 'P' + String(i + 1).padStart(2, '0'); }));

// D-M300：照合3の直し案（直した後）に戻す
const F3 = {}; ld('michito-m7-check3/results/full.json').forEach(x => { F3[x.id] = x; });
const s3 = F3['M7F-07-003'].suggestion, q300 = find('M7F-07-003');
q300.question = s3.question; q300.explanation = s3.explanation; q300.lastVerifiedDate = TODAY;
q300.reviewMethod += ' ／ 10/15 照合3の直した後の文に戻す（GPT の500問点検で D-M255 との食い違い、本人OK）';

// 第9弾の直し案4問
const F6 = {}; ld('michito-m7-check6/results/full.json').forEach(x => { F6[x.id] = x; });
const NAMES = { 3: '標識・標示' };
const strip = q => (Array.isArray(q) ? q.join('……') : q).replace(/^[０-９0-9]+[\s　]+/, '');
const add = ld('michito-m7/results/m7i-draft.json').filter(q => ['M7I-03-008', 'M7I-03-009', 'M7I-03-011', 'M7I-03-013'].includes(q.draft_id)).map(q => Object.assign({}, q, F6[q.draft_id].suggestion, { draft_id: q.draft_id, kyoshu: q.kyoshu }));
add.forEach(q => { const qt = strip(q.quote); qt.split('……').filter(t => t).forEach(t => { if (!LAW.includes(t)) throw new Error(q.draft_id + ' 引用が条文に無い: ' + t.slice(0, 40)); }); q.quote = qt; });
const tpl = arr.find(x => x.draftId === 'M7I-03-007');
let last = Math.max(...arr.map(q => (/^D-M(\d+)$/.exec(q.id) || [0, 0])[1] | 0));
add.forEach(q => arr.push(Object.assign({}, tpl, {
  id: 'D-M' + String(++last).padStart(3, '0'), question: q.question, correct: q.answer === '○' ? 0 : 1, explanation: q.explanation,
  ref: tpl.source + ' ' + q.ref, sourceSection: tpl.source + ' ' + q.ref, quote: q.quote, draftId: q.draft_id, lastVerifiedDate: TODAY,
  reviewMethod: 'M7 第9弾：照合6の直し案（500問点検で外した重複の補充、本人OK 2026-10-15）'
})));
[q300].forEach(q => { if (q.quote) q.quote.split('……').filter(t => t).forEach(t => { if (!LAWD.includes(t)) throw new Error(q.id + ' 引用が条文に無い'); }); });

const n = arr.filter(q => q.reviewStatus === 'reviewed').length;
console.log('外す', Object.keys(DUP).length, '組にした', PAIRS.length, '足す', add.length, '（' + add.map(q => q.draft_id).join(' ') + '）', '出題', n);
const body = arr.map(o => JSON.stringify(o, null, 2).replace(/^/gm, '  ')).join(',\n');
fs.writeFileSync(file, head + '[\n' + body + '\n];\n');
