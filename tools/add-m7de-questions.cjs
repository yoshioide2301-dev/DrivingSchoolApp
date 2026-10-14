// M7 第4弾の直し（m7d-draft-v2 33問）と第5弾（m7e-draft 50問）を、独立照合（GPT 10/14）を受けた直しを入れて questions/questions.js に足す（本人OK 10/14：おすすめどおり、M7E-05-003 は本人の案）。
// 直し：管理repo gpt-tasks/michito-m7-check2/fix-proposals.json（答えの直し1・設問などの直し4・外す1）。引用は「……」で区切った各部分を条文と照合する。
// 使い方: node tools/add-m7de-questions.cjs <管理repo の gpt-tasks のフォルダ>　（2回目以降は何もしない）
const fs = require('fs'), path = require('path');
const file = path.join(__dirname, '..', 'questions', 'questions.js');
let src = fs.readFileSync(file, 'utf8');
if (src.includes('"draftId": "M7E-')) { console.log('追加済み'); process.exit(0); }
const G = process.argv[2];
const ld = p => { const j = JSON.parse(fs.readFileSync(path.join(G, p), 'utf8')); return Array.isArray(j) ? j : Object.values(j).find(Array.isArray); };
const P = JSON.parse(fs.readFileSync(path.join(G, 'michito-m7-check2', 'fix-proposals.json'), 'utf8'));
const FILES = { '道路交通法': 'doukouhou-20260721.txt', '道路交通法施行令': 'sekourei-20260901.txt', '道路交通法施行規則': 'sekoukisoku-20260901.txt', '道路標識、区画線及び道路標示に関する命令': 'hyoshikirei-20260901.txt' };
const LAW = {}; for (const k in FILES) LAW[k] = fs.readFileSync(path.join(G, 'michito-m7', 'law', FILES[k]), 'utf8');
const NAMES = { 1: '運転者の心得', 2: '信号', 3: '標識・標示', 4: '通行するところ', 5: '交差点・踏切', 6: '速度と車間距離', 7: '歩行者の保護', 8: '安全確認・合図・進路変更', 9: '優先・追越し・行き違い', 10: '運転免許制度' };
const URL = { '道路交通法': 'https://laws.e-gov.go.jp/law/335AC0000000105', '道路交通法施行令': 'https://laws.e-gov.go.jp/law/335CO0000000270', '道路交通法施行規則': 'https://laws.e-gov.go.jp/law/335M50000002060', '道路標識、区画線及び道路標示に関する命令': 'https://laws.e-gov.go.jp/law/335M50004002003' };
const qs = [...ld('michito-m7/results/m7d-draft-v2.json'), ...ld('michito-m7/results/m7e-draft.json')]
  .filter(q => !(P[q.draft_id] && P[q.draft_id].rec === '外す'))
  .map(q => Object.assign({}, q, P[q.draft_id] ? { question: P[q.draft_id].question || q.question, answer: P[q.draft_id].answer || q.answer, explanation: P[q.draft_id].explanation || q.explanation, quote: P[q.draft_id].quote || q.quote } : {}));
qs.forEach(q => q.quote.split('……').filter(s => s).forEach(s => { if (!LAW[q.law].includes(s)) throw new Error('引用が条文に無い: ' + q.draft_id + ' ' + s); }));
const last = Math.max(...[...src.matchAll(/"id": "D-M(\d+)"/g)].map(m => +m[1]));
const sorted = qs.sort((a, b) => a.kyoshu - b.kyoshu || a.draft_id.localeCompare(b.draft_id));
const add = sorted.map((q, i) => ({
  id: 'D-M' + String(last + i + 1).padStart(3, '0'),
  reviewStatus: 'reviewed',
  stage: 'first',
  kyoshu: q.kyoshu,
  kyoshuName: NAMES[q.kyoshu],
  category: NAMES[q.kyoshu],
  topic: NAMES[q.kyoshu],
  question: q.question,
  choices: ['○', '×'],
  correct: q.answer === '○' ? 0 : 1,
  explanation: q.explanation,
  ref: q.law + ' ' + q.ref,
  quote: q.quote,
  source: q.law,
  sourceURL: URL[q.law],
  sourceSection: q.law + ' ' + q.ref,
  sourceVersion: 'e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）',
  lastVerifiedDate: '2026-10-14',
  difficulty: 1,
  tags: [NAMES[q.kyoshu], '第1段階'],
  type: 'truefalse',
  draftId: q.draft_id,
  reviewMethod: 'M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）'
}));
const end = src.lastIndexOf(']');
src = src.slice(0, end).replace(/\s*$/, '') + ',\n' + add.map(o => JSON.stringify(o, null, 2).replace(/^/gm, '  ')).join(',\n') + '\n' + src.slice(end);
fs.writeFileSync(file, src);
console.log('追加', add.length, '問（' + add[0].id + '〜' + add[add.length - 1].id + '）', '○', add.filter(o => o.correct === 0).length, '×', add.filter(o => o.correct === 1).length);
