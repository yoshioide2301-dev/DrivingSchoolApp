// M7 で本人が採用した問題（GPT の下書き → Claude の機械照合・読み合わせ → 本人の取捨 10/13）を questions/questions.js に足す。
// 元：管理repo gpt-tasks/michito-m7/results-claude/m7-adopted.json（引用はすべて条文と一致を確認済み）
// 使い方: node tools/add-m7-questions.cjs <m7-adopted.json のパス>　（2回目以降は何もしない）
const fs = require('fs'), path = require('path');
const file = path.join(__dirname, '..', 'questions', 'questions.js');
let src = fs.readFileSync(file, 'utf8');
if (src.includes('"D-M001"')) { console.log('追加済み'); process.exit(0); }
const adopted = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const NAMES = { 1: '運転者の心得', 2: '信号', 3: '標識・標示', 4: '通行するところ', 5: '交差点・踏切', 6: '速度と車間距離', 7: '歩行者の保護', 8: '安全確認・合図・進路変更', 9: '優先・追越し・行き違い', 10: '運転免許制度' };
const URL = { '道路交通法': 'https://laws.e-gov.go.jp/law/335AC0000000105', '道路交通法施行令': 'https://laws.e-gov.go.jp/law/335CO0000000270', '道路交通法施行規則': 'https://laws.e-gov.go.jp/law/335M50000002060', '道路標識、区画線及び道路標示に関する命令': 'https://laws.e-gov.go.jp/law/335M50004002003' };
const sorted = adopted.slice().sort((a, b) => a.kyoshu - b.kyoshu || a.draft_id.localeCompare(b.draft_id));
const add = sorted.map((q, i) => ({
  id: 'D-M' + String(i + 1).padStart(3, '0'),
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
  lastVerifiedDate: '2026-10-13',
  difficulty: 1,
  tags: [NAMES[q.kyoshu], '第1段階'],
  type: 'truefalse',
  draftId: q.draft_id,
  reviewMethod: 'M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）'
}));
const end = src.lastIndexOf(']');
const body = add.map(o => JSON.stringify(o, null, 2).replace(/^/gm, '  ')).join(',\n');
src = src.slice(0, end).replace(/\s*$/, '') + ',\n' + body + '\n' + src.slice(end);
fs.writeFileSync(file, src);
console.log('追加', add.length, '問（D-M001〜D-M' + String(add.length).padStart(3, '0') + '）');
