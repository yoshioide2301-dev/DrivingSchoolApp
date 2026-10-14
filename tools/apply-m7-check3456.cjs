// 独立照合3〜6（GPT 10/14）と本人の Excel の判断（10/15 00:38 記入）を questions/questions.js に反映して、出題500問にする。
// - 言い換え：本人が「×言い換える」とした6問は照合3の直し案。「言い換え前も後も分かりづらい」とした10問は本人の例文をもとに Claude が書き直し（CUSTOM）。ほかは今のまま
// - D-M154 は外す（普通乗用車より最高速度が高い車はほぼ無く、普通仮免の場面にならない。同じ条文は D-C085 で問う）。D-M189 は外す（附則で第71条の5第3項は当分の間適用しない）
// - 新しく入れる：M7F 9問（照合3）・M7G 19問（照合4、M7G-04-003 は本人の判断で削除）・M7H 7問（照合5）・M7I 10問（照合6の問題なし8＋直し案2）
// 引用は「……」で区切った各部分を条文と機械照合する。数が500でなければ止める。
// 使い方: node tools/apply-m7-check3456.cjs <管理repo の gpt-tasks のフォルダ> [--dry]
const fs = require('fs'), path = require('path');
const file = path.join(__dirname, '..', 'questions', 'questions.js');
let src = fs.readFileSync(file, 'utf8');
if (src.includes('"draftId": "M7I-')) { console.log('反映済み'); process.exit(0); }
const G = process.argv[2], DRY = process.argv.includes('--dry');
const ld = p => { const j = JSON.parse(fs.readFileSync(path.join(G, p), 'utf8')); return Array.isArray(j) ? j : Object.values(j).find(Array.isArray); };
const byId = (p, k = 'id') => { const o = {}; ld(p).forEach(x => { o[x[k]] = x; }); return o; };
const FILES = { '道路交通法': 'doukouhou-20260721.txt', '道路交通法施行令': 'sekourei-20260901.txt', '道路交通法施行規則': 'sekoukisoku-20260901.txt', '道路標識、区画線及び道路標示に関する命令': 'hyoshikirei-20260901.txt' };
const LAW = {}; for (const k in FILES) LAW[k] = fs.readFileSync(path.join(G, 'michito-m7', 'law', FILES[k]), 'utf8');
const lawOf = n => (n === '道路標識' || /標識令|道路標識、区画線/.test(n)) ? '道路標識、区画線及び道路標示に関する命令' : Object.keys(FILES).sort((a, b) => b.length - a.length).find(k => String(n).startsWith(k));
const NAMES = { 1: '運転者の心得', 2: '信号', 3: '標識・標示', 4: '通行するところ', 5: '交差点・踏切', 6: '速度と車間距離', 7: '歩行者の保護', 8: '安全確認・合図・進路変更', 9: '優先・追越し・行き違い', 10: '運転免許制度' };
const URL = { '道路交通法': 'https://laws.e-gov.go.jp/law/335AC0000000105', '道路交通法施行令': 'https://laws.e-gov.go.jp/law/335CO0000000270', '道路交通法施行規則': 'https://laws.e-gov.go.jp/law/335M50000002060', '道路標識、区画線及び道路標示に関する命令': 'https://laws.e-gov.go.jp/law/335M50004002003' };
const VER = 'e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）';
const TODAY = '2026-10-15';
const strip = q => q.replace(/^[０-９0-9]+[\s　]+/, '');
const qstr = q => Array.isArray(q) ? q.map(strip).join('……') : strip(q);
const errs = [];
const check = (id, law, quote) => {
  const L = LAW[lawOf(law)];
  if (!L) { errs.push(id + ' 法令名: ' + law); return; }
  quote.split('……').filter(t => t).forEach(t => { if (!L.includes(t)) errs.push(id + ' 引用が条文に無い: ' + t.slice(0, 40)); });
};

// ---- 本人の例文をもとに Claude が書き直した10問（10/15）----
const Q27 = '車両（……乗合自動車……及びトロリーバスを除く。）は、……最高速度……が高い車両に追いつかれたときは、その追いついた車両が当該車両の追越しを終わるまで速度を増してはならない。最高速度が同じであるか又は低い車両に追いつかれ、かつ、その追いついた車両の速度よりもおそい速度で引き続き進行しようとするときも、同様とする。';
const CUSTOM = {
  'D-C085': { answer: '×', question: '普通乗用車が後ろの車に追いつかれ、その車より遅い速度で進み続けるときは、後ろの車の追越しが終わる前でも速度を上げてよい。', explanation: '後ろの車に追いつかれ、その車より遅い速度で進み続けるときは、後ろの車が追越しを終えるまで速度を上げてはいけません。', law: '道路交通法', ref: '第27条第1項', quote: Q27 },
  'D-C106': { answer: '×', question: '普通乗用車が一方通行の道路で右折するときは、前もってできるだけ右端に寄り、指定がなければ交差点の中心の外側を徐行する。', explanation: '一方通行の道路で右折するときは、前もってできるだけ道路の右端に寄り、交差点の中心の内側（通行する部分の指定があればその部分）を徐行しなければなりません。外側ではありません。', law: '道路交通法', ref: '第34条第4項', quote: '自動車、一般原動機付自転車又はトロリーバスは、一方通行となつている道路において右折するときは、第二項の規定にかかわらず、あらかじめその前からできる限り道路の右側端に寄り、かつ、交差点の中心の内側（道路標識等により通行すべき部分が指定されているときは、その指定された部分）を徐行しなければならない。' },
  'D-C118': { answer: '○', question: '普通乗用車は、道路の曲がり角付近では、見通しがよくても徐行しなければならない。', explanation: '道路の曲がり角付近は、見通しがよくても徐行しなければならない場所です。', law: '道路交通法', ref: '第42条第2号', quote: '車両等は、道路標識等により徐行すべきことが指定されている道路の部分を通行する場合及び次に掲げるその他の場合においては、徐行しなければならない。……二道路のまがりかど附近、上り坂の頂上附近又は勾こう配の急な下り坂を通行するとき。' },
  'D-M080': { answer: '○', question: '警察署長の許可を受けた場合を除き、道路に接する自動車用の出入口から3m以内の場所には駐車できない。', explanation: '警察署長の許可を受けた場合を除き、自動車用の出入口から3m以内は駐車できません。', law: '道路交通法', ref: '第45条第1項第1号', quote: null },
  'D-M082': { answer: '×', question: '警察署長の許可を受けた場合を除き、火災報知機から3m以内の場所には駐車できない。', explanation: '警察署長の許可を受けた場合を除き、駐車できないのは火災報知機から1m以内の場所です。3mではありません。', law: '道路交通法', ref: '第45条第1項第5号', quote: null },
  'D-M086': { answer: '×', question: 'パーキング・メーターが設置された時間制限駐車区間では、少しであれば、標識に表示された時間を超えて続けて駐車してよい。', explanation: '時間制限駐車区間では、パーキング・メーターが車を感知した時から、標識などに表示された時間を超えて続けて駐車してはいけません。少しであってもできません。', law: '道路交通法', ref: '第49条の3第2項', quote: '車両……は、時間制限駐車区間においては、当該駐車につき第四十九条第一項のパーキング・メーターが車両を感知した時又は同項のパーキング・チケット発給設備によりパーキング・チケットの発給を受けた時から、それぞれ道路標識等により表示されている時間を超えて引き続き駐車してはならない。' },
  'D-M120': { answer: '×', question: '歩道と車道が分かれた道路では、歩行者は、車道を横断するときや道路工事などやむを得ないとき以外でも、車道を通行してよい。', explanation: '歩道と車道が分かれた道路では、歩行者は、車道を横断するときや、道路工事などで歩道を通れないなどやむを得ないときを除き、歩道を通行しなければなりません。', law: '道路交通法', ref: '第10条第2項', quote: '歩行者等は、歩道等と車道の区別のある道路においては、次の各号に掲げる場合を除き、歩道等を通行しなければならない。……一車道を横断するとき。……二道路工事等のため歩道等を通行することができないとき、その他やむを得ないとき。' },
  'D-M138': { answer: '×', question: '運転中に停止するときは、周りにほかの車がいなければ、停止の合図は不要である。', explanation: '停止するときは、周りに車がいなくても合図をし、停止が終わるまで続けます。', law: '道路交通法', ref: '第53条第1項', quote: '車両（自転車以外の軽車両を除く。次項及び第四項において同じ。）の運転者は、左折し、右折し、転回し、徐行し、停止し、後退し、又は同一方向に進行しながら進路を変えるときは、手、方向指示器又は灯火により合図をし、かつ、これらの行為が終わるまで当該合図を継続しなければならない。' },
  'M7D-07-004': { answer: '○', question: '横断歩道や自転車横断帯とその手前30m以内では、前を走っている自動車の横を通って、その前に出てはいけない。', explanation: '横断歩道・自転車横断帯とその手前30m以内の場所では、前を走っている車の横を通り過ぎて、その前に出てはいけません。', law: '道路交通法', ref: '第38条第3項', quote: '車両等は、横断歩道等及びその手前の側端から前に三十メートル以内の道路の部分においては、第三十条第三号の規定に該当する場合のほか、その前方を進行している他の車両等（特定小型原動機付自転車等を除く。）の側方を通過してその前方に出てはならない。' },
  'M7E-05-006': { answer: '×', question: '前の車の状況により停止禁止部分の中で止まってしまうおそれがあるときでも、渋滞していればその中へ入ってよい。', explanation: '前の車の状況により、道路標示で区画された部分（停止禁止部分など）の中で止まってしまうおそれがあるときは、渋滞していてもその部分に入ってはいけません。', law: null, ref: null, quote: null },  // 根拠欄と引用は今のまま
  'M7F-01-005': { answer: '○', question: '救急車など業務中の緊急自動車が事故を起こし、運転を続ける必要があるときは、他の乗務員に救護や報告をさせて運転を続けられる。', explanation: '業務中の緊急自動車で、引き続き運転する必要があるときは、ほかの乗務員に負傷者の救護などの措置をさせたり、警察への報告をさせたりして、運転を続けることができます。', law: '道路交通法', ref: '第72条第4項', quote: '緊急自動車……で当該業務に従事中のものの運転者は、当該業務のため引き続き当該車両等を運転する必要があるときは、第一項の規定にかかわらず、その他の乗務員に第一項前段に規定する措置を講じさせ、又は同項後段に規定する報告をさせて、当該車両等の運転を継続することができる。' }
};
// 本人が「×言い換える」とした6問：照合3の直し案（無ければ GPT の言い換え案）
const REWRITE = ['D-C013', 'D-C033', 'D-C141', 'D-M017', 'D-M084', 'D-M085'];
const EXCLUDE = {
  'D-M154': '普通乗用車より最高速度が高い車はほぼ無く、普通仮免の場面にならない。同じ条文（第27条第1項）は D-C085 で問う（10/15 本人の Excel の判断を受けて Claude が判断）',
  'D-M189': '道路交通法 附則で第71条の5第3項は当分の間適用しないため、答え○は誤り（照合6で GPT が指摘、10/15 本人OK）'
};

const RW = byId('michito-m7-false/results/rewrite.json');
const F3 = byId('michito-m7-check3/results/full.json');
const F4 = byId('michito-m7-check4/results/full.json');
const F6 = byId('michito-m7-check6/results/full.json');

// ---- 今ある問題を直す ----
const head = src.slice(0, src.indexOf('['));
const arr = eval(src.slice(src.indexOf('['), src.lastIndexOf(']') + 1));
const find = k => arr.find(q => q.id === k || q.draftId === k);
const changed = [];
const apply = (k, o, how) => {
  const q = find(k); if (!q) { errs.push(k + ' が見つからない'); return; }
  q.question = o.question;
  q.correct = o.answer === '○' ? 0 : 1;
  q.explanation = o.explanation;
  if (o.law) {
    const law = lawOf(o.law);
    q.ref = law + ' ' + o.ref; q.sourceSection = q.ref;
    if (q.source && q.source.startsWith('道路交通法') && law !== '道路交通法') q.source = law;
  }
  if (o.quote) q.quote = o.quote;
  if (q.quote) check(k, (q.ref || '').split(' ')[0], q.quote);
  q.lastVerifiedDate = TODAY;
  q.reviewMethod = (q.reviewMethod || '') + ' ／ 10/15 ' + how;
  changed.push({ id: q.id, draftId: q.draftId || '', how, answer: o.answer, question: q.question });
};
REWRITE.forEach(k => {
  const s = F3[k] && F3[k].suggestion, r = RW[k];
  const o = s ? { question: s.question, answer: s.answer, explanation: s.explanation, law: s.law, ref: s.ref, quote: qstr(s.quote) } : { question: r.after, answer: '×', explanation: r.explanation, law: r.law, ref: r.ref, quote: qstr(r.quote) };
  apply(k, o, '×の言い換え（照合3の直し案、本人OK）');
});
Object.keys(CUSTOM).filter(k => !k.startsWith('M7F')).forEach(k => apply(k, CUSTOM[k], '本人の例文をもとに書き直し（照合3・本人の Excel の判断）'));
for (const k in EXCLUDE) { const q = find(k); if (!q) { errs.push(k + ' が見つからない'); continue; } q.reviewStatus = 'excluded'; q.excludedReason = EXCLUDE[k]; changed.push({ id: q.id, draftId: q.draftId || '', how: '外す', answer: '', question: q.question }); }

// ---- 新しく入れる問題 ----
const add = [];
const push = (q, o, via) => {
  const law = lawOf(o.law); if (!law) { errs.push(q.draft_id + ' 法令名: ' + o.law); return; }
  const quote = qstr(o.quote); check(q.draft_id, law, quote);
  add.push({ draft_id: q.draft_id, kyoshu: +q.kyoshu || +q.draft_id.split('-')[1], question: o.question, answer: o.answer, explanation: o.explanation, law, ref: o.ref, quote, via });
};
// M7F（○の新問題9問）：照合3の直し案。本人の判断：01-001・07-003 は GPT の設問、01-005 は本人の例文で書き直し
ld('michito-m7-false/results/permit-true-draft.json').forEach(p => {
  const s = F3[p.draft_id].suggestion || {};
  const o = { question: s.question || p.question, answer: s.answer || p.answer, explanation: s.explanation || p.explanation, law: s.law || p.law, ref: s.ref || p.ref, quote: s.quote || p.quote };
  if (p.draft_id === 'M7F-01-001') { o.question = p.question; o.explanation = '貨物を積んだ貨物自動車では、その貨物を見守るために必要な最小限の人を荷台に乗せて運転できます。'; }
  if (p.draft_id === 'M7F-07-003') o.question = p.question;
  if (CUSTOM[p.draft_id]) Object.assign(o, CUSTOM[p.draft_id]);
  push(p, o, 'M7 第6弾（○の新問題）：照合3');
});
// M7G（第7弾）：照合4で「外す」以外。本人の判断：04-003 は削除、02-006・04-002・04-004 は GPT の設問（「歩行者用の路側帯」は標示の「歩行者用路側帯」と紛れるので「歩行者が通る路側帯」に）
ld('michito-m7/results/m7g-draft.json').filter(q => F4[q.draft_id].verdict !== '外す' && q.draft_id !== 'M7G-04-003').forEach(q => {
  const s = F4[q.draft_id].suggestion || {};
  const o = { question: s.question || q.question, answer: s.answer || q.answer, explanation: s.explanation || q.explanation, law: s.law || q.law, ref: s.ref || q.ref, quote: s.quote || q.quote };
  if (['M7G-02-006', 'M7G-04-002', 'M7G-04-004'].includes(q.draft_id)) o.question = q.question.replace('歩行者用の路側帯', '歩行者が通る路側帯');
  push(q, o, 'M7 第7弾：照合4');
});
// M7H（第8弾）：照合5で全問問題なし
ld('michito-m7/results/m7h-draft.json').forEach(q => push(q, q, 'M7 第8弾：照合5'));
// M7I（第9弾 標識の意味）：照合6の問題なし8問＋直し案の2問（平行駐車・規制予告）
const M7I_FIX = ['M7I-03-007', 'M7I-03-010'];
ld('michito-m7/results/m7i-draft.json').forEach(q => {
  const x = F6[q.draft_id];
  if (x.verdict === '問題なし') push(q, q, 'M7 第9弾：照合6');
  else if (M7I_FIX.includes(q.draft_id)) push(q, Object.assign({}, q, x.suggestion), 'M7 第9弾：照合6の直し案');
});

if (errs.length) { console.log(errs.join('\n')); process.exit(1); }
const last = Math.max(...arr.map(q => (/^D-M(\d+)$/.exec(q.id) || [0, 0])[1] | 0));
add.sort((a, b) => a.kyoshu - b.kyoshu || a.draft_id.localeCompare(b.draft_id));
const objs = add.map((q, i) => ({
  id: 'D-M' + String(last + i + 1).padStart(3, '0'),
  reviewStatus: 'reviewed', stage: 'first', kyoshu: q.kyoshu, kyoshuName: NAMES[q.kyoshu], category: NAMES[q.kyoshu], topic: NAMES[q.kyoshu],
  question: q.question, choices: ['○', '×'], correct: q.answer === '○' ? 0 : 1, explanation: q.explanation,
  ref: q.law + ' ' + q.ref, quote: q.quote, source: q.law, sourceURL: URL[q.law], sourceSection: q.law + ' ' + q.ref, sourceVersion: VER,
  lastVerifiedDate: TODAY, difficulty: 1, tags: [NAMES[q.kyoshu], '第1段階'], type: 'truefalse', draftId: q.draft_id,
  reviewMethod: q.via + '：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）'
}));
const all = arr.concat(objs);
const n = all.filter(q => q.reviewStatus === 'reviewed').length;
const ox = [0, 1].map(c => all.filter(q => q.reviewStatus === 'reviewed' && q.correct === c).length);
console.log('直す・外す', changed.length, '新しく入れる', objs.length, '（' + objs[0].id + '〜' + objs[objs.length - 1].id + '）', '出題', n, '○', ox[0], '×', ox[1]);
if (n !== 500) { console.log('500問ではないので止める'); process.exit(1); }
fs.writeFileSync(path.join(__dirname, 'apply-m7-check3456-summary.json'), JSON.stringify({ changed, added: objs.map(o => ({ id: o.id, draftId: o.draftId, answer: o.choices[o.correct], question: o.question, explanation: o.explanation, ref: o.ref })) }, null, 2));
if (DRY) { console.log('（試しの実行。書き込まない）'); process.exit(0); }
const body = all.map(o => JSON.stringify(o, null, 2).replace(/^/gm, '  ')).join(',\n');
fs.writeFileSync(file, head + '[\n' + body + '\n];\n' + src.slice(src.lastIndexOf(']') + 1).replace(/^;\s*/, ''));
console.log('書き込み', file);
