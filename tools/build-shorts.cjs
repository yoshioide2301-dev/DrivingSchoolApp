// ショート動画の試作（縦 1080×1920、20〜30秒）を、ミチトの問題から作る（10/16 本人OK：公開しない試作。息子さん・テスターに見てもらう）
// 流れ：つかみ → 問題（読み上げ）→ 3・2・1 → 答えと図と解説（読み上げ）→ 根拠の条文とアプリ名
// 文は問題・解説・根拠をそのまま使う（新しい説明を足さない）。答えの場面の声は図の見出しだけを読み、解説は画面で読んでもらう（短くするため）。読み上げは questions/furigana.js の読みで漢字をかなにしてから声にする。
// 使い方: node tools/build-shorts.cjs <出力フォルダ> D-C016 D-C002 ...
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
// 読み上げ用：漢字を読みに置き換える（読みのデータがない所はそのまま）
const kana = (q, field) => { const r = FURIGANA[q.id] && FURIGANA[q.id][field]; let s = r && r.replace(/《[^》]*》/g, '') === q[field] ? r.replace(/([一-鿿々〆ヶ]+)《([^》]*)》/g, '$2') : q[field]; return s.replace(/km\/h/g, 'キロ').replace(/1\.5m/g, '1.5メートル').replace(/6m/g, '6メートル').replace(/○/g, 'マル').replace(/×/g, 'バツ'); };
const ffmpeg = 'ffmpeg', ffprobe = 'ffprobe';
const dur = f => parseFloat(execFileSync(ffprobe, ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f], { encoding: 'utf8' }));
const CSS = `*{box-sizing:border-box;margin:0}html,body{width:1080px;height:1920px;overflow:hidden}
body{font-family:"Yu Gothic UI","Meiryo",sans-serif;color:#0A192F;background:linear-gradient(160deg,#0E7C86,#0A3D62);display:flex;flex-direction:column;padding:120px 72px}
.top{display:flex;align-items:center;gap:22px;color:#fff;font-size:40px;font-weight:800}.top img{width:96px;height:96px;border-radius:24px}
.card{background:#fff;border-radius:44px;padding:64px 60px;margin-top:70px;box-shadow:0 20px 50px rgba(0,0,0,.25)}
.tag{display:inline-block;background:#FFD66B;border-radius:999px;padding:10px 30px;font-size:38px;font-weight:900}
.q{font-size:62px;font-weight:800;line-height:1.75;margin-top:36px}.q rt{font-size:24px;font-weight:600}
.big{font-size:150px;font-weight:900;text-align:center;color:#fff;margin-top:200px}
.ans{display:flex;align-items:center;gap:30px}.mark{font-size:170px;font-weight:900;line-height:1}
.fig{margin-top:34px;border-radius:28px;overflow:hidden}.fig svg{display:block;width:100%;height:auto}
.cap{font-size:44px;font-weight:900;color:#0E7C86;margin-top:22px;line-height:1.4}
.e{font-size:44px;line-height:1.75;margin-top:24px;font-weight:600}.e rt{font-size:19px}
.ref{font-size:40px;font-weight:800;margin-top:40px;color:#43536a}.hook{color:#fff;font-size:92px;font-weight:900;line-height:1.4;margin-top:240px}
.hook em{font-style:normal;color:#FFD66B}.end{color:#fff;text-align:center;margin-top:300px}.end b{display:block;font-size:96px;font-weight:900}.end span{display:block;font-size:46px;margin-top:30px;line-height:1.6}
.note{position:absolute;left:72px;right:72px;bottom:70px;color:rgba(255,255,255,.8);font-size:30px;text-align:center}`;
const ICON = 'file:///' + path.join(ROOT, 'native-ios', 'assets', 'AppIcon-1024.png').replace(/\\/g, '/');
const head = `<div class="top"><img src="${ICON}">ミチト 仮免学科</div>`;
const page = body => `<!doctype html><html><head><meta charset="utf-8"><style>${CSS}</style></head><body>${body}<div class="note">試作（非公開）</div></body></html>`;
const HOOK = { 'D-C016': '2026年9月から<br><em>変わった</em>ルール、<br>知ってる？', default: '仮免の学科、<br><em>これ分かる？</em>' };
const HOOK_SAY = { 'D-C016': '2026年9月から変わったルール、知ってる？', default: '仮免の学科、これ分かる？' };
fs.mkdirSync(OUT, { recursive: true });
for (const id of IDS) {
  const q = qs.find(x => x.id === id), f = FIGURES[id];
  if (!q) { console.log('見つからない', id); continue; }
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'short-'));
  const ans = q.choices[q.correct];
  const scenes = [
    { html: head + `<div class="hook">${HOOK[id] || HOOK.default}</div>`, say: HOOK_SAY[id] || HOOK_SAY.default, min: 2.2 },
    { html: head + `<div class="card"><span class="tag">○か×か</span><div class="q">${ruby(q, 'question')}</div></div>`, say: kana(q, 'question') + '。マルか、バツか。', min: 3 },
    { html: head + `<div class="card"><span class="tag">○か×か</span><div class="q">${ruby(q, 'question')}</div></div><div class="big">3・2・1</div>`, say: '', min: 2.4 },
    { html: head + `<div class="card"><div class="ans"><span class="mark" style="color:${ans === '○' ? '#0E7C86' : '#E5243B'}">${ans}</span><span class="tag">答え</span></div>${f ? `<div class="fig">${f.svg}</div><div class="cap">${esc(f.title)}</div>` : ''}<div class="e">${ruby(q, 'explanation')}</div></div>`, say: '答えは、' + (ans === '○' ? 'マル' : 'バツ') + '。' + (f ? f.title.replace(/（[^）]*）/g, '').replace(/km\/h/g, 'キロ').replace(/6m/g, '6メートル') : kana(q, 'explanation')), min: 6 },
    { html: head + `<div class="card"><div class="ref">根拠：${esc(q.ref)}</div><div class="e">ミチトは、500問すべてに、根拠の条文を表示します。</div></div><div class="end"><b>ミチト</b><span>仮免学科の○×500問<br>iPhone アプリ</span></div>`, say: 'ミチト。500問すべてに、根拠の条文。', min: 3 }
  ];
  const parts = [];
  scenes.forEach((sc, i) => {
    const html = path.join(tmp, i + '.html'), png = path.join(tmp, i + '.png'), wav = path.join(tmp, i + '.wav'), seg = path.join(tmp, i + '.mp4');
    fs.writeFileSync(html, page(sc.html));
    execFileSync(EDGE, ['--headless=new', '--disable-gpu', '--allow-file-access-from-files', '--hide-scrollbars', '--force-device-scale-factor=1', '--window-size=1080,1920', '--virtual-time-budget=2000', '--screenshot=' + png, 'file:///' + html.replace(/\\/g, '/')], { stdio: 'ignore' });
    let d = sc.min;
    if (sc.say) {
      const txt = path.join(tmp, i + '.txt'); fs.writeFileSync(txt, sc.say);
      execFileSync('powershell', ['-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', path.join(__dirname, 'tts.ps1'), txt, wav]);
      d = Math.max(sc.min, dur(wav) + 0.6);
      execFileSync(ffmpeg, ['-loglevel', 'error', '-y', '-loop', '1', '-i', png, '-i', wav, '-filter_complex', '[1:a]apad,atrim=0:' + d.toFixed(2) + ',aformat=sample_rates=44100:channel_layouts=stereo[a]', '-map', '0:v', '-map', '[a]', '-t', d.toFixed(2), '-r', '30', '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-c:a', 'aac', seg]);
    } else {
      execFileSync(ffmpeg, ['-loglevel', 'error', '-y', '-loop', '1', '-i', png, '-f', 'lavfi', '-i', 'anullsrc=r=44100:cl=stereo', '-t', d.toFixed(2), '-r', '30', '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-shortest', seg]);
    }
    parts.push(seg);
  });
  const list = path.join(tmp, 'list.txt');
  fs.writeFileSync(list, parts.map(p => "file '" + p.replace(/\\/g, '/') + "'").join('\n'));
  const mp4 = path.join(OUT, 'michito-short-' + id + '.mp4');
  execFileSync(ffmpeg, ['-loglevel', 'error', '-y', '-f', 'concat', '-safe', '0', '-i', list, '-c', 'copy', mp4]);
  fs.copyFileSync(path.join(tmp, '3.png'), path.join(OUT, 'michito-short-' + id + '-answer.png'));
  console.log('作成', path.basename(mp4), dur(mp4).toFixed(1) + '秒');
  fs.rmSync(tmp, { recursive: true, force: true });
}
