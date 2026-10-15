// 出題する問題の「問題文・解説・根拠」に、ふりがなを付けたデータ（questions/furigana.js）を作る（10/15 本人：本番の試験も教本も、漢字にふりがなが振ってある）。
// 読みは kuromoji（IPA辞書）で出し、tools/furigana-fixes.json の直しを当てる。
// 書き方：「漢字《よみ》」。アプリは、もとの文と一致するときだけ使う（問題を直したのに作り直し忘れたら、ふりがな無しで出る）。
// 照合済みの読み（GPT 依頼11＋Claude）に無い「語と読みの組」が出たら一覧にして止まる。
// 使い方: node tools/build-furigana.cjs <kuromoji を入れたフォルダ> <管理repo の gpt-tasks/michito-furigana>
const fs = require('fs'), path = require('path');
const TOOL = process.argv[2], CHECK = process.argv[3];
const kuromoji = require(path.join(TOOL, 'node_modules', 'kuromoji'));
const FIX = JSON.parse(fs.readFileSync(path.join(__dirname, 'furigana-fixes.json'), 'utf8'));
const kata2hira = s => s.replace(/[ァ-ヶ]/g, c => String.fromCharCode(c.charCodeAt(0) - 0x60));
const KANJI = /[一-鿿々〆ヶ]/;
const plain = s => s.replace(/《[^》]*》/g, '');
// 照合済みの組：自動の一覧のうち「直す」「要確認」でないもの＋直しの辞書で決めた読み
const auto = JSON.parse(fs.readFileSync(path.join(CHECK, 'readings-auto.json'), 'utf8')).words;
const flagged = new Set(JSON.parse(fs.readFileSync(path.join(CHECK, 'results', 'readings-review.json'), 'utf8')).items.map(i => i.no));
const ok = new Set(auto.filter(w => !flagged.has(w.no)).map(w => w.word + '|' + w.reading));
Object.keys(FIX.tokens).forEach(k => ok.add(k.split('|')[0] + '|' + FIX.tokens[k]));
(FIX.accept || []).forEach(k => ok.add(k));
// 語の表記と読みから、漢字のかたまりごとに読みを割り当てる（送りがなは振らない）
function annotate(surface, reading) {
  const parts = []; let i = 0;
  while (i < surface.length) { let j = i; const k = KANJI.test(surface[i]); while (j < surface.length && KANJI.test(surface[j]) === k) j++; parts.push({ t: surface.slice(i, j), k }); i = j; }
  const re = new RegExp('^' + parts.map(p => p.k ? '(.+?)' : '(' + kata2hira(p.t).replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')').join('') + '$');
  const m = reading.match(re);
  if (!m) return parts.filter(p => p.k).length === 1 && parts.length === 1 ? surface + '《' + reading + '》' : null;
  return parts.map((p, n) => p.k ? p.t + '《' + m[n + 1] + '》' : p.t).join('');
}
const PH = FIX.phrases.map(p => ({ base: plain(p), ruby: p })).sort((a, b) => b.base.length - a.base.length);
kuromoji.builder({ dicPath: path.join(TOOL, 'node_modules', 'kuromoji', 'dict') }).build((err, tk) => {
  if (err) throw err;
  const unchecked = {}, problems = [];
  function rubyText(text, where) {
    Object.keys(FIX.cleanup).forEach(k => { text = text.split(k).join(FIX.cleanup[k]); });
    // 言い回しの辞書を先に当て、残りを語に分けて読みを付ける
    let out = '', rest = '';
    const flush = () => {
      if (!rest) return;
      tk.tokenize(rest).forEach(t => {
        const s = t.surface_form;
        if (!KANJI.test(s)) { out += s; return; }
        let r = t.reading ? kata2hira(t.reading) : '';
        const key = s + '|' + r;
        if (FIX.tokens[key]) r = FIX.tokens[key];
        if (!r) { problems.push(where + '：読みが出ない「' + s + '」'); out += s; return; }
        if (!ok.has(s + '|' + r)) (unchecked[s + '|' + r] = unchecked[s + '|' + r] || []).push(where);
        const a = annotate(s, r);
        if (!a) { problems.push(where + '：読みを割り当てられない「' + s + '（' + r + '）」'); out += s; return; }
        out += a;
      });
      rest = '';
    };
    for (let i = 0; i < text.length;) {
      const p = PH.find(x => text.startsWith(x.base, i));
      if (p) { flush(); out += p.ruby; i += p.base.length; } else { rest += text[i]; i++; }
    }
    flush();
    if (plain(out) !== text) problems.push(where + '：文が変わった');
    return out;
  }
  const file = path.join(__dirname, '..', 'questions', 'questions.js');
  const src = fs.readFileSync(file, 'utf8');
  const qs = eval(src.slice(src.indexOf('['), src.lastIndexOf(']') + 1)).filter(q => q.reviewStatus === 'reviewed');
  const data = {};
  qs.forEach(q => {
    const d = {};
    if (q.question) d.question = rubyText(q.question, q.id + ' 問題文');
    if (q.explanation) d.explanation = rubyText(q.explanation, q.id + ' 解説');
    if (q.ref) d.ref = rubyText(q.ref, q.id + ' 根拠');
    data[q.id] = d;
  });
  const un = Object.keys(unchecked);
  if (problems.length || un.length) {
    problems.forEach(p => console.log('問題あり', p));
    un.forEach(k => console.log('照合していない読み', k, unchecked[k].slice(0, 3).join('、')));
    process.exit(1);
  }
  const out = path.join(__dirname, '..', 'questions', 'furigana.js');
  fs.writeFileSync(out, '// ふりがな（自動生成：tools/build-furigana.cjs。手で直さない。直しは tools/furigana-fixes.json）\n// 「漢字《よみ》」の形。もとの文と一致するときだけ使う。\nvar FURIGANA = ' + JSON.stringify(data) + ';\n');
  console.log('作成', qs.length, '問', (fs.statSync(out).size / 1024).toFixed(0) + 'KB');
});
