// 図（questions/figures.js）の確認用ページを作る：問題・答え・解説・根拠と図を並べる（本人の確認用。アプリには入らない）
// 使い方: node tools/build-figure-review.cjs <出力するHTML>
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..');
const src = fs.readFileSync(path.join(ROOT, 'questions', 'questions.js'), 'utf8');
const qs = eval(src.slice(src.indexOf('['), src.lastIndexOf(']') + 1));
const FIGURES = new Function(fs.readFileSync(path.join(ROOT, 'questions', 'figures.js'), 'utf8') + ';return FIGURES;')();
const esc = s => String(s || '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const ids = Object.keys(FIGURES);
let html = `<!doctype html><html><head><meta charset="utf-8"><title>ミチト 図の確認</title><style>
body{margin:0;background:#F4F7F9;font-family:"Yu Gothic UI","Meiryo",sans-serif;color:#0A192F}
h1{font-size:22px;margin:20px 16px 4px}.lead{margin:0 16px 14px;font-size:13px;color:#43536a;line-height:1.7}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:14px;padding:0 16px 24px}
.card{background:#fff;border-radius:14px;padding:14px;border:1px solid #d5e3ea}
.id{font-size:12px;color:#43536a}.q{font-size:14.5px;font-weight:700;line-height:1.6;margin:6px 0}
.a{display:inline-block;font-weight:800;color:#fff;background:#0E7C86;border-radius:8px;padding:1px 10px;font-size:14px}
.fig{margin:10px 0 6px;border-radius:10px;overflow:hidden}.fig svg{display:block;width:100%;height:auto}
.cap{font-size:13px;font-weight:800;color:#0E7C86;margin-bottom:6px}.e{font-size:13px;line-height:1.7}.r{font-size:11.5px;color:#43536a;text-align:right;margin-top:4px}
</style></head><body><h1>ミチト 間違えやすい問題の図（${ids.length}問・試作）</h1>
<p class="lead">図は、各問題の解説と根拠の条文に書いてあることだけを描いています。おかしな所・分かりにくい所があれば、問題IDを添えて教えてください。確認が済むまでアプリには出しません。</p><div class="grid">`;
for (const id of ids) {
  const q = qs.find(x => x.id === id), f = FIGURES[id];
  if (!q) { html += `<div class="card">${id}：問題が見つからない</div>`; continue; }
  html += `<div class="card"><div class="id">問題ID：${id}（教習番号${esc(q.kyoshu)}）</div><div class="q">${esc(q.question)}</div><span class="a">答え：${esc(q.choices[q.correct])}</span>
<div class="fig">${f.svg}</div><div class="cap">図：${esc(f.title)}</div><div class="e">${esc(q.explanation)}</div><div class="r">根拠：${esc(q.ref)}</div></div>`;
}
html += '</div></body></html>';
fs.writeFileSync(process.argv[2], html);
console.log('作成', ids.length, '問');
