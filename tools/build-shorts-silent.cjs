// 声なしのショート動画（縦 1080×1920、15秒前後）を、ミチトの問題から作る（10/16 本人決定：声なし・文字と効果音だけ。YouTube ショート・Instagram リール・TikTok 用）
// 流れ：つかみ → 問題 → 3・2・1（1秒ずつ、カチッという音）→ 答えと図と解説（正解の音）→ 根拠の条文とアプリ名
// 文は問題・解説・根拠をそのまま使う（新しい説明を足さない）。つかみの言葉も、根拠のない数字（「9割が間違える」など）は使わない。
// 各サービスの画面の下と右にはボタンや説明が重なるので、大事な文字は上から中ほどに置く。
// 使い方: node tools/build-shorts-silent.cjs <出力フォルダ> D-C016 D-C002 ...
const fs = require('fs'), path = require('path'), os = require('os'), { execFileSync } = require('child_process');
const ROOT = path.join(__dirname, '..');
const OUT = process.argv[2], IDS = process.argv.slice(3);
const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const load = (f, name) => new Function(fs.readFileSync(path.join(ROOT, f), 'utf8') + ';return ' + name + ';')();
const src = fs.readFileSync(path.join(ROOT, 'questions', 'questions.js'), 'utf8');
const qs = eval(src.slice(src.indexOf('['), src.lastIndexOf(']') + 1));
const FURIGANA = load('questions/furigana.js', 'FURIGANA'), FIGURES = load('questions/figures.js', 'FIGURES');
const esc = s => String(s || '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const ruby = (q, field) => { const r = FURIGANA[q.id] && FURIGANA[q.id][field]; if (!r || r.replace(/《[^》]*》/g, '') !== q[field]) return esc(q[field]); return esc(r).replace(/([^《》]+?)《([^》]*)》/g, (m, b, rd) => { const k = b.match(/[一-鿿々〆ヶ]+$/); return k ? b.slice(0, b.length - k[0].length) + '<ruby>' + k[0] + '<rt>' + rd + '</rt></ruby>' : m; }); };
const CSS = `*{box-sizing:border-box;margin:0}html,body{width:1080px;height:1920px;overflow:hidden}
body{font-family:"Yu Gothic UI","Meiryo",sans-serif;color:#0A192F;background:linear-gradient(160deg,#0E7C86,#0A3D62);display:flex;flex-direction:column;padding:110px 64px 0}
.top{display:flex;align-items:center;gap:22px;color:#fff;font-size:40px;font-weight:800}.top img{width:96px;height:96px;border-radius:24px}
.card{background:#fff;border-radius:44px;padding:60px 56px;margin-top:56px;box-shadow:0 20px 50px rgba(0,0,0,.25)}
.tag{display:inline-block;background:#FFD66B;border-radius:999px;padding:10px 30px;font-size:40px;font-weight:900}
.q{font-size:66px;font-weight:800;line-height:1.7;margin-top:34px}.q rt{font-size:26px;font-weight:600}
.cd{display:flex;justify-content:center;margin-top:70px}.cd b{display:flex;align-items:center;justify-content:center;width:300px;height:300px;border-radius:50%;background:#FFD66B;font-size:200px;font-weight:900;color:#0A192F}
.ans{display:flex;align-items:center;gap:30px}.mark{font-size:170px;font-weight:900;line-height:1}
.fig{margin-top:30px;border-radius:28px;overflow:hidden}.fig svg{display:block;width:100%;height:auto}
.cap{font-size:44px;font-weight:900;color:#0E7C86;margin-top:20px;line-height:1.4}
.e{font-size:46px;line-height:1.7;margin-top:22px;font-weight:600}.e rt{font-size:20px}
.ref{font-size:42px;font-weight:800;color:#43536a;line-height:1.5}.hook{color:#fff;font-size:100px;font-weight:900;line-height:1.4;margin-top:260px}
.hook em{font-style:normal;color:#FFD66B}.end{color:#fff;text-align:center;margin-top:120px}.end b{display:block;font-size:110px;font-weight:900}.end span{display:block;font-size:50px;margin-top:26px;line-height:1.6}
.note{position:absolute;left:64px;right:64px;top:40px;color:rgba(255,255,255,.7);font-size:28px;text-align:right}`;
const ICON = 'file:///' + path.join(ROOT, 'native-ios', 'assets', 'AppIcon-1024.png').replace(/\\/g, '/');
const head = `<div class="top"><img src="${ICON}">ミチト 仮免学科</div>`;
const page = body => `<!doctype html><html><head><meta charset="utf-8"><style>${CSS}</style></head><body><div class="note">試作（非公開）</div>${body}</body></html>`;
const HOOK = { 'D-C016': '2026年9月から<br><em>変わった</em><br>ルール、<br>知ってる？', default: '仮免の学科<br><em>○か×か？</em>' };
const qCard = q => `<div class="card"><span class="tag">○か×か</span><div class="q">${ruby(q, 'question')}</div></div>`;
fs.mkdirSync(OUT, { recursive: true });
// 効果音（自前で作る音なので、著作権の心配がない）
const tmp0 = fs.mkdtempSync(path.join(os.tmpdir(), 'sfx-'));
const tick = path.join(tmp0, 'tick.wav'), chime = path.join(tmp0, 'chime.wav'), pop = path.join(tmp0, 'pop.wav');
const ff = args => execFileSync('ffmpeg', ['-loglevel', 'error', '-y', ...args]);
ff(['-f', 'lavfi', '-i', 'sine=frequency=1400:duration=0.06', '-af', 'volume=0.5,afade=t=out:st=0.03:d=0.03', tick]);
ff(['-f', 'lavfi', '-i', 'sine=frequency=880:duration=0.18', '-f', 'lavfi', '-i', 'sine=frequency=1320:duration=0.45', '-filter_complex', '[0]volume=0.45[a];[1]volume=0.45,afade=t=out:st=0.1:d=0.35,adelay=150|150[b];[a][b]amix=inputs=2:normalize=0', chime]);
ff(['-f', 'lavfi', '-i', 'sine=frequency=660:duration=0.12', '-af', 'volume=0.4,afade=t=out:st=0.05:d=0.07', pop]);
for (const id of IDS) {
  const q = qs.find(x => x.id === id), f = FIGURES[id];
  if (!q) { console.log('見つからない', id); continue; }
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'shorts-'));
  const ans = q.choices[q.correct];
  const qLen = q.question.length;
  const scenes = [
    { html: head + `<div class="hook">${HOOK[id] || HOOK.default}</div>`, d: 1.6, sfx: pop },
    { html: head + qCard(q), d: Math.min(5, Math.max(3.2, qLen * 0.075)), sfx: pop },
    { html: head + qCard(q) + '<div class="cd"><b>3</b></div>', d: 1, sfx: tick },
    { html: head + qCard(q) + '<div class="cd"><b>2</b></div>', d: 1, sfx: tick },
    { html: head + qCard(q) + '<div class="cd"><b>1</b></div>', d: 1, sfx: tick },
    { html: head + `<div class="card"><div class="ans"><span class="mark" style="color:${ans === '○' ? '#0E7C86' : '#E5243B'}">${ans}</span><span class="tag">答え</span></div>${f ? `<div class="fig">${f.svg}</div><div class="cap">${esc(f.title)}</div>` : ''}<div class="e">${ruby(q, 'explanation')}</div></div>`, d: 5, sfx: chime },
    { html: head + `<div class="card"><div class="ref">根拠：${esc(q.ref)}</div></div><div class="end"><b>ミチト</b><span>仮免学科の○×500問<br>すべてに根拠の条文<br>iPhone アプリ・無料</span></div>`, d: 2.2, sfx: pop }
  ];
  const parts = [];
  scenes.forEach((sc, i) => {
    const html = path.join(tmp, i + '.html'), png = path.join(tmp, i + '.png'), seg = path.join(tmp, i + '.mp4');
    fs.writeFileSync(html, page(sc.html));
    execFileSync(EDGE, ['--headless=new', '--disable-gpu', '--allow-file-access-from-files', '--hide-scrollbars', '--force-device-scale-factor=1', '--window-size=1080,1920', '--virtual-time-budget=2000', '--screenshot=' + png, 'file:///' + html.replace(/\\/g, '/')], { stdio: 'ignore' });
    ff(['-loop', '1', '-i', png, '-i', sc.sfx, '-filter_complex', '[1:a]apad,atrim=0:' + sc.d.toFixed(2) + ',aformat=sample_rates=44100:channel_layouts=stereo[a]', '-map', '0:v', '-map', '[a]', '-t', sc.d.toFixed(2), '-r', '30', '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', '128k', seg]);
    parts.push(seg);
  });
  const list = path.join(tmp, 'list.txt');
  fs.writeFileSync(list, parts.map(p => "file '" + p.replace(/\\/g, '/') + "'").join('\n'));
  const mp4 = path.join(OUT, 'michito-short-silent-' + id + '.mp4');
  ff(['-f', 'concat', '-safe', '0', '-i', list, '-c', 'copy', mp4]);
  fs.copyFileSync(path.join(tmp, '5.png'), path.join(OUT, 'michito-short-silent-' + id + '-answer.png'));
  console.log('作成', path.basename(mp4), scenes.reduce((s, x) => s + x.d, 0).toFixed(1) + '秒');
  fs.rmSync(tmp, { recursive: true, force: true });
}
fs.rmSync(tmp0, { recursive: true, force: true });
