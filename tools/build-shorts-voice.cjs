// 声入りのショート動画（縦 1080×1920）を、ミチトの問題から作る（10/16 本人：声は必須・声は春日部つむぎ・動画にふりがなは不要・強みとアプリへの導きを目立たせる）
// 流れ：つかみ → 問題（読み上げ）→ 3・2・1（カチッという音）→ 答え・図・解説・根拠の札（解説を読み上げ）→ 強みと「App Store で『ミチト』と検索」
// 文は問題・解説・根拠をそのまま使う（新しい説明を足さない）。つかみも、根拠のない数字（「9割が間違える」など）は使わない。
// 声は VOICEVOX（エンジンを 127.0.0.1:50021 で起動しておく）。読みは questions/furigana.js の照合済みの読みで漢字をかなにして渡す（誤読を防ぐ）。
// クレジット：「VOICEVOX:春日部つむぎ」を動画と投稿の説明に必ず書く（キャラクターの規約）。
// 使い方: node tools/build-shorts-voice.cjs <出力フォルダ> D-C016 D-C002 ...
const fs = require('fs'), path = require('path'), os = require('os'), { execFileSync } = require('child_process');
const ROOT = path.join(__dirname, '..');
const OUT = process.argv[2], IDS = process.argv.slice(3);
const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const VV = 'http://127.0.0.1:50021', SPEAKER = 8, SPEED = 1.2;  // 春日部つむぎ（ノーマル）
const load = (f, name) => new Function(fs.readFileSync(path.join(ROOT, f), 'utf8') + ';return ' + name + ';')();
const src = fs.readFileSync(path.join(ROOT, 'questions', 'questions.js'), 'utf8');
const qs = eval(src.slice(src.indexOf('['), src.lastIndexOf(']') + 1));
const FURIGANA = load('questions/furigana.js', 'FURIGANA'), FIGURES = load('questions/figures.js', 'FIGURES');
const esc = s => String(s || '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const yomi = s => s.replace(/km\/h/g, 'キロ').replace(/(\d+(?:\.\d+)?)m/g, '$1メートル').replace(/○/g, 'マル').replace(/×/g, 'バツ');
const kana = (q, field) => { const r = FURIGANA[q.id] && FURIGANA[q.id][field]; const s = r && r.replace(/《[^》]*》/g, '') === q[field] ? r.replace(/([一-鿿々〆ヶ]+)《([^》]*)》/g, '$2') : q[field]; return yomi(s); };
const CSS = `*{box-sizing:border-box;margin:0}html,body{width:1080px;height:1920px;overflow:hidden}
body{font-family:"Yu Gothic UI","Meiryo",sans-serif;color:#0A192F;background:linear-gradient(160deg,#0E7C86,#0A3D62);display:flex;flex-direction:column;padding:110px 64px 0}
.top{display:flex;align-items:center;gap:22px;color:#fff;font-size:40px;font-weight:800}.top img{width:96px;height:96px;border-radius:24px}
.card{background:#fff;border-radius:44px;padding:60px 56px;margin-top:56px;box-shadow:0 20px 50px rgba(0,0,0,.25)}
.tag{display:inline-block;background:#FFD66B;border-radius:999px;padding:10px 30px;font-size:40px;font-weight:900}
.q{font-size:68px;font-weight:800;line-height:1.55;margin-top:34px}
.cd{display:flex;justify-content:center;margin-top:70px}.cd b{display:flex;align-items:center;justify-content:center;width:300px;height:300px;border-radius:50%;background:#FFD66B;font-size:200px;font-weight:900;color:#0A192F}
.ox{display:flex;align-items:center;justify-content:center;gap:50px;margin-top:80px}.ox b{display:block;line-height:0;filter:drop-shadow(0 10px 18px rgba(0,0,0,.3))}.ox i{font-style:normal;font-size:90px;font-weight:900;color:#FFD66B}
.ans{display:flex;align-items:center;gap:30px}.mark{font-size:160px;font-weight:900;line-height:1}
.fig{margin-top:26px;border-radius:28px;overflow:hidden}.fig svg{display:block;width:100%;height:auto}
.e{font-size:46px;line-height:1.6;margin-top:24px;font-weight:700}
.law{margin-top:30px;background:#0E7C86;color:#fff;border-radius:22px;padding:18px 26px;font-size:36px;font-weight:800;line-height:1.45}.law small{display:block;font-size:28px;color:#FFD66B;margin-bottom:4px}
.hook{color:#fff;font-size:100px;font-weight:900;line-height:1.4;margin-top:260px}.hook em{font-style:normal;color:#FFD66B}
.end{color:#fff;text-align:center;margin-top:70px}.end .name{font-size:120px;font-weight:900;line-height:1.1}.end .sub{font-size:44px;margin-top:10px}
.pts{margin:46px auto 0;display:flex;flex-direction:column;gap:22px;width:900px}.pts div{background:rgba(255,255,255,.14);border:3px solid rgba(255,255,255,.5);border-radius:24px;padding:22px 28px;font-size:48px;font-weight:900;text-align:left;color:#fff}.pts em{font-style:normal;color:#FFD66B}
.btn{margin:56px auto 0;width:900px;background:#FFD66B;color:#0A192F;border-radius:999px;padding:34px 20px;font-size:54px;font-weight:900;text-align:center;box-shadow:0 14px 30px rgba(0,0,0,.3)}
.credit{position:absolute;left:64px;top:1300px;color:rgba(255,255,255,.75);font-size:28px}
.note{position:absolute;left:64px;right:64px;top:40px;color:rgba(255,255,255,.7);font-size:28px;text-align:right}`;
const ICON = 'file:///' + path.join(ROOT, 'native-ios', 'assets', 'AppIcon-1024.png').replace(/\\/g, '/');
const head = `<div class="top"><img src="${ICON}">ミチト 仮免学科</div>`;
const page = body => `<!doctype html><html><head><meta charset="utf-8"><style>${CSS}</style></head><body><div class="note">試作（非公開）</div>${body}</body></html>`;
const HOOK = { 'D-C016': ['2026年9月から<br><em>変わった</em><br>ルール、<br>知ってる？', '2026年9月から変わったルール、知ってる？'], 'D-C017': ['2026年9月から<br><em>変わった</em><br>ルール、<br>知ってる？', '2026年9月から変わったルール、知ってる？'], default: ['仮免の学科<br><em>○か×か？</em>', '仮免の学科、マルかバツか？'] };
const OX_O = '<svg width="250" height="250" viewBox="0 0 250 250"><circle cx="125" cy="125" r="98" fill="none" stroke="#fff" stroke-width="38"/></svg>', OX_X = '<svg width="250" height="250" viewBox="0 0 250 250"><path d="M40 40L210 210M210 40L40 210" stroke="#FF6B7A" stroke-width="40" stroke-linecap="round"/></svg>';  // 太い〇と×（文字の○×は線が細いので図形で描く）
const ox = n => `<div class="ox"><b${n >= 1 ? '' : ' style="visibility:hidden"'}>${OX_O}</b><i${n >= 2 ? '' : ' style="visibility:hidden"'}>or</i><b${n >= 3 ? '' : ' style="visibility:hidden"'}>${OX_X}</b></div>`;
const qCard = q => `<div class="card"><span class="tag">○か×か</span><div class="q">${esc(q.question)}</div></div>`;
const ff = args => execFileSync('ffmpeg', ['-loglevel', 'error', '-y', ...args]);
const dur = f => parseFloat(execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f], { encoding: 'utf8' }));
const tts = async (text, wav, n = 0) => {
  try { return await tts1(text, wav); } catch (e) { if (n >= 3) throw e; await new Promise(r => setTimeout(r, 3000)); return tts(text, wav, n + 1); }
};
const tts1 = async (text, wav) => {
  const aq = await (await fetch(VV + '/audio_query?speaker=' + SPEAKER + '&text=' + encodeURIComponent(text), { method: 'POST' })).json();
  aq.speedScale = SPEED; aq.outputSamplingRate = 44100; aq.prePhonemeLength = 0.05; aq.postPhonemeLength = 0.15;
  const r = await fetch(VV + '/synthesis?speaker=' + SPEAKER, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(aq) });
  fs.writeFileSync(wav, Buffer.from(await r.arrayBuffer()));
};
(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const tmp0 = fs.mkdtempSync(path.join(os.tmpdir(), 'sfx-'));
  const tick = path.join(tmp0, 'tick.wav'), chime = path.join(tmp0, 'chime.wav'), silence = path.join(tmp0, 'silence.wav');
  ff(['-f', 'lavfi', '-i', 'anullsrc=r=44100:cl=stereo', '-t', '0.5', silence]);
  ff(['-f', 'lavfi', '-i', 'sine=frequency=1400:duration=0.06', '-af', 'volume=0.5,afade=t=out:st=0.03:d=0.03', tick]);
  ff(['-f', 'lavfi', '-i', 'sine=frequency=880:duration=0.18', '-f', 'lavfi', '-i', 'sine=frequency=1320:duration=0.45', '-filter_complex', '[0]volume=0.4[a];[1]volume=0.4,afade=t=out:st=0.1:d=0.35,adelay=150|150[b];[a][b]amix=inputs=2:normalize=0', chime]);
  for (const id of IDS) {
    const q = qs.find(x => x.id === id), f = FIGURES[id];
    if (!q) { console.log('見つからない', id); continue; }
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'shorts-'));
    const ans = q.choices[q.correct], ansSay = ans === '○' ? 'マル' : 'バツ';
    const hook = HOOK[id] || HOOK.default;
    const scenes = [
      { html: head + `<div class="hook">${hook[0]}</div>`, say: hook[1], min: 1.2 },
      // 声の「マルか？」で〇、少しおいて「or」、「バツか？」で×を出す（耳で聞いた言葉を目で追えるように。本人 10/16）
      { html: head + qCard(q), say: kana(q, 'question') + '。', min: 2.5 },
      { html: head + qCard(q) + ox(1), say: 'マルか？', min: 0.5 },
      { html: head + qCard(q) + ox(2), min: 0.3 },
      { html: head + qCard(q) + ox(3), say: 'バツか？', min: 0.6 },
      { html: head + qCard(q) + '<div class="cd"><b>3</b></div>', sfx: tick, min: 0.8 },
      { html: head + qCard(q) + '<div class="cd"><b>2</b></div>', sfx: tick, min: 0.8 },
      { html: head + qCard(q) + '<div class="cd"><b>1</b></div>', sfx: tick, min: 0.8 },
      { html: head + `<div class="card"><div class="ans"><span class="mark" style="color:${ans === '○' ? '#0E7C86' : '#E5243B'}">${ans}</span><span class="tag">答え</span></div>${f ? `<div class="fig">${f.svg}</div>` : ''}<div class="e">${esc(q.explanation)}</div><div class="law"><small>根拠の条文</small>${esc(q.ref)}</div></div>`, say: '答えは、' + ansSay + '。' + kana(q, 'explanation'), pre: chime, min: 3 },
      { html: head + `<div class="end"><div class="name">ミチト</div><div class="sub">仮免学科の○×アプリ</div></div><div class="pts"><div><em>500問</em>すべてに根拠の条文</div><div><em>2026年9月</em>の法改正に対応</div><div><em>無料</em>・広告なし</div></div><div class="btn">App Store で「ミチト」と検索</div><div class="credit">VOICEVOX:春日部つむぎ</div>`, say: '仮免の学科は、ミチト。アップストアで、ミチトと検索してね。', min: 2.5 }
    ];
    const parts = [];
    for (let i = 0; i < scenes.length; i++) {
      const sc = scenes[i];
      const html = path.join(tmp, i + '.html'), png = path.join(tmp, i + '.png'), seg = path.join(tmp, i + '.mp4'), wav = path.join(tmp, i + '.wav');
      fs.writeFileSync(html, page(sc.html));
      execFileSync(EDGE, ['--headless=new', '--disable-gpu', '--allow-file-access-from-files', '--hide-scrollbars', '--force-device-scale-factor=1', '--window-size=1080,1920', '--virtual-time-budget=2000', '--screenshot=' + png, 'file:///' + html.replace(/\\/g, '/')], { stdio: 'ignore' });
      let audio;
      if (sc.say) {
        await tts(sc.say, wav);
        if (sc.pre) { const mix = path.join(tmp, i + 'm.wav'); ff(['-i', sc.pre, '-i', wav, '-filter_complex', '[1]adelay=450|450[v];[0][v]amix=inputs=2:normalize=0:duration=longest', mix]); audio = mix; }
        else audio = wav;
      } else audio = sc.sfx || silence;
      const d = Math.max(sc.min, (sc.say ? dur(audio) + 0.25 : 0));
      ff(['-loop', '1', '-i', png, '-i', audio, '-filter_complex', '[1:a]apad,atrim=0:' + d.toFixed(2) + ',aformat=sample_rates=44100:channel_layouts=stereo[a]', '-map', '0:v', '-map', '[a]', '-t', d.toFixed(2), '-r', '30', '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', '160k', seg]);
      parts.push(seg);
    }
    const list = path.join(tmp, 'list.txt');
    fs.writeFileSync(list, parts.map(p => "file '" + p.replace(/\\/g, '/') + "'").join('\n'));
    const mp4 = path.join(OUT, 'michito-short-voice-' + id + '.mp4');
    ff(['-f', 'concat', '-safe', '0', '-i', list, '-c', 'copy', mp4]);
    fs.copyFileSync(path.join(tmp, (scenes.length - 2) + '.png'), path.join(OUT, 'michito-short-voice-' + id + '-answer.png'));
    fs.copyFileSync(path.join(tmp, (scenes.length - 1) + '.png'), path.join(OUT, 'michito-short-voice-end.png'));
    console.log('作成', path.basename(mp4), dur(mp4).toFixed(1) + '秒');
    fs.rmSync(tmp, { recursive: true, force: true });
  }
  fs.rmSync(tmp0, { recursive: true, force: true });
})();
