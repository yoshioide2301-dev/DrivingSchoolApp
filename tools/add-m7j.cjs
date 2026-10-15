// M7 第10弾（GPT、管理repo gpt-tasks/michito-m7/results/m7j-draft.json）12問から Claude が選んだ7問を足して、出題500問に戻す（10/15）。
// 選んだ理由：運転する人に身近（霧の灯火・夜間の駐停車の灯火・座席ベルトとチャイルドシートの例外・通行止めの対象）。外した5問は細目（後方50m・車道幅5.5m・補助標識の地名と方向）か、選んだ問題と同じ条（身体の状態）。
// 使い方: node tools/add-m7j.cjs <管理repo の gpt-tasks のフォルダ>
const fs = require('fs'), path = require('path');
const file = path.join(__dirname, '..', 'questions', 'questions.js');
const src = fs.readFileSync(file, 'utf8');
if (src.includes('"draftId": "M7J-')) { console.log('追加済み'); process.exit(0); }
const G = process.argv[2];
const PICK = ['M7J-09-001', 'M7J-09-003', 'M7J-01-001', 'M7J-01-002', 'M7J-01-004', 'M7J-03-003', 'M7J-03-004'];
const j = JSON.parse(fs.readFileSync(path.join(G, 'michito-m7', 'results', 'm7j-draft.json'), 'utf8'));
const D = (Array.isArray(j) ? j : Object.values(j).find(Array.isArray)).filter(q => PICK.includes(q.draft_id));
const FILES = { '道路交通法施行規則': 'sekoukisoku-20260901.txt', '道路交通法施行令': 'sekourei-20260901.txt', '道路交通法': 'doukouhou-20260721.txt', '道路標識、区画線及び道路標示に関する命令': 'hyoshikirei-20260901.txt' };
const URL = { '道路交通法': 'https://laws.e-gov.go.jp/law/335AC0000000105', '道路交通法施行令': 'https://laws.e-gov.go.jp/law/335CO0000000270', '道路交通法施行規則': 'https://laws.e-gov.go.jp/law/335M50000002060', '道路標識、区画線及び道路標示に関する命令': 'https://laws.e-gov.go.jp/law/335M50004002003' };
const NAMES = { 1: '運転者の心得', 2: '信号', 3: '標識・標示', 4: '通行するところ', 5: '交差点・踏切', 6: '速度と車間距離', 7: '歩行者の保護', 8: '安全確認・合図・進路変更', 9: '優先・追越し・行き違い', 10: '運転免許制度' };
const head = src.slice(0, src.indexOf('['));
const arr = eval(src.slice(src.indexOf('['), src.lastIndexOf(']') + 1));
let last = Math.max(...arr.map(q => (/^D-M(\d+)$/.exec(q.id) || [0, 0])[1] | 0));
D.sort((a, b) => a.kyoshu - b.kyoshu || a.draft_id.localeCompare(b.draft_id)).forEach(q => {
  const law = Object.keys(FILES).find(k => q.law.startsWith(k)) || (q.law.includes('標識') ? '道路標識、区画線及び道路標示に関する命令' : null);
  const L = fs.readFileSync(path.join(G, 'michito-m7', 'law', FILES[law]), 'utf8');
  const quote = (Array.isArray(q.quote) ? q.quote.join('……') : q.quote).replace(/^[０-９0-9]+[\s　]+/, '');
  quote.split('……').filter(t => t).forEach(t => { if (!L.includes(t)) throw new Error(q.draft_id + ' 引用が条文に無い: ' + t.slice(0, 30)); });
  const k = +q.kyoshu;
  arr.push({ id: 'D-M' + String(++last).padStart(3, '0'), reviewStatus: 'reviewed', stage: 'first', kyoshu: k, kyoshuName: NAMES[k], category: NAMES[k], topic: NAMES[k],
    question: q.question, choices: ['○', '×'], correct: q.answer === '○' ? 0 : 1, explanation: q.explanation, ref: law + ' ' + q.ref, quote, source: law, sourceURL: URL[law],
    sourceSection: law + ' ' + q.ref, sourceVersion: 'e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）', lastVerifiedDate: '2026-10-15',
    difficulty: 1, tags: [NAMES[k], '第1段階'], type: 'truefalse', draftId: q.draft_id,
    reviewMethod: 'M7 第10弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ（12問から7問を選択）→ 本人の確認と GPT の独立照合（予定）' });
});
const n = arr.filter(q => q.reviewStatus === 'reviewed').length;
console.log('追加', D.length, '出題', n);
if (n !== 500) throw new Error('500問ではない');
fs.writeFileSync(file, head + '[\n' + arr.map(o => JSON.stringify(o, null, 2).replace(/^/gm, '  ')).join(',\n') + '\n];\n');
