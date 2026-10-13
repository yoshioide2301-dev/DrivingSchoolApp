// 「覚え方のコツ」のデータ（signs/tips.js）を作る。
// 元：tools/signs-guide-gpt-20261013.json（GPT の原稿。引用75件は Claude が hyo-20260901.txt と照合済み 10/13）。
// 画面に載せる前に本人の承認が必要（教材の反映）。手で signs/tips.js を書き換えない。
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");
const guide = JSON.parse(fs.readFileSync(path.join(__dirname, "signs-guide-gpt-20261013.json"), "utf8"));
// 一語と○×問題：GPT 第2弾（引用36件は Claude が照合済み 10/13）
const pq = JSON.parse(fs.readFileSync(path.join(__dirname, "signs-pairs-quiz-gpt-20261013.json"), "utf8"));
// Claude の修正（組1：肝心の違い＝歩行者が対象かどうかを問う形に。引用は標識令 別表第一の本文そのまま）
const QUIZ_FIX = {
  1: [
    { statement: "通行止めの標識がある道路では、歩行者も通行できない。", answer: "○",
      explanation: "通行止めは、歩行者等（歩行者など）・車両・路面電車の通行を禁止します。",
      quote: "（以下「歩行者等」という。）、車両並びに路面電車の通行を禁止すること。", source: "別表第一・通行止め（３０１）" },
    { statement: "車両通行止めの標識がある道路では、歩行者も通行できない。", answer: "×",
      explanation: "車両通行止めが禁止するのは、車両の通行です。歩行者は対象ではありません。",
      quote: "車両の通行を禁止すること。", source: "別表第一・車両通行止め（３０２）" }
  ]
};
const signsSrc = fs.readFileSync(path.join(root, "signs/signs.js"), "utf8");
const SIGNS = JSON.parse(signsSrc.slice(signsSrc.indexOf("["), signsSrc.lastIndexOf("]") + 1));

// 全角の番号を、signs.js の番号（例 311-A、329の2-A）にそろえる
function toHalf(s) { return s.replace(/[０-９Ａ-Ｚ]/g, c => String.fromCharCode(c.charCodeAt(0) - 0xFEE0)).replace(/[―－‐]/g, "-"); }
function parse(label) {
  const m = label.match(/^(.*)（(.+)）$/);
  if (!m) return null;
  let no = toHalf(m[2]).replace(/[～・].*$/, "");
  return { name: m[1], label: toHalf(m[2]), no: no };
}
function findSign(no) {
  let i = SIGNS.findIndex(x => x.no === no);
  if (i < 0) i = SIGNS.findIndex(x => x.no.indexOf(no + "-") === 0);
  return i;
}

const pairs = [];
const skipped = [];
guide.confusing_pairs.forEach((p, k) => {
  const a = parse(p.a), b = parse(p.b);
  const ia = a ? findSign(a.no) : -1, ib = b ? findSign(b.no) : -1;
  // 名前が合わないもの（道路標示の番号が標識の番号と重なる）と、法令の表で1つの図にまとめられている組（補助標識で区別）は外す
  const why = (ia < 0 || ib < 0) ? "標識の一覧に無い" :
    (SIGNS[ia].name.indexOf(a.name) < 0 || SIGNS[ib].name.indexOf(b.name) < 0) ? "名前が合わない（道路標示など）" :
    ia === ib ? "法令の表で同じ図（補助標識で区別）" : "";
  if (why) { skipped.push(`${k + 1}：${p.a} / ${p.b}（${why}）`); return; }
  pairs.push({
    id: "p" + (k + 1),
    a: { name: a.name, no: a.label, idx: ia },
    b: { name: b.name, no: b.label, idx: ib },
    head: p.tip, diff: p.difference, quotes: p.quotes,
    one: (pq.pairs[k] || {}).one_word || null,
    quiz: QUIZ_FIX[k + 1] || (pq.pairs[k] || {}).quiz || [],
    fixed: !!QUIZ_FIX[k + 1]
  });
});

// 色と形の地図：種類ごとの代表の図（図そのものだけを見せ、色・形の説明文は GPT の第2弾が届いてから）
const MAP = [
  { cat: "規制標識", nos: ["302", "316", "323", "326-A"] },
  { cat: "警戒標識", nos: ["201-A", "208", "212", "214の2"] },
  { cat: "指示標識", nos: ["405", "407-A", "408", "406"] },
  { cat: "案内標識", nos: ["108の2", "106", "101"] },
  { cat: "補助標識", nos: ["503-A", "504", "505", "506"] }
];
const map = MAP.map(g => ({ cat: g.cat, idx: g.nos.map(findSign).filter(i => i >= 0 && SIGNS[i].cat === g.cat) }));

const out = "// 「覚え方のコツ」（v1.1 試作）。tools/build-sign-tips.cjs で生成。手で書き換えない。\n" +
  "// 見分け方の文：GPT の原稿（引用は標識令の本文と照合済み）。画面への反映は本人の承認後。\n" +
  "const SIGN_TIPS = " + JSON.stringify({ pairs, map }) + ";\n";
fs.writeFileSync(path.join(root, "signs/tips.js"), out);
console.log("組", pairs.length, "／外した", skipped.length);
skipped.forEach(s => console.log("  外した", s));
map.forEach(g => console.log(g.cat, g.idx.map(i => SIGNS[i].no + (SIGNS[i].cimg ? "◎" : "□")).join(" ")));
