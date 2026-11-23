// 1.2.5 解説のアニメ動画の声（🔊 を押したときだけ鳴る。11/22 あなたの決定「A：解説のアニメ動画だけ、🔊 で声つき」）
// 文は解説の最初の1文（ショートの解答で読む文と同じ。新しい文は足さない）。読みは questions/furigana.js の照合済みの読み。
// 声は VOICEVOX:春日部つむぎ（クレジットは設定の画面に表示）。速さ 1.1（聞き取りやすさ優先）。
// 使い方: node tools/anime-voice.cjs [ID ...]   （ID なしは anime.js の全部）→ audio/anime/<ID>.m4a
const fs = require('fs'), path = require('path'), os = require('os'), { execFileSync } = require('child_process');
const ROOT = path.join(__dirname, '..'), OUT = path.join(ROOT, 'audio', 'anime');
const VV = 'http://127.0.0.1:50021', SPEAKER = 8, SPEED = 1.1;
const load = (f, name) => new Function(fs.readFileSync(path.join(ROOT, f), 'utf8') + ';return ' + name + ';')();
const src = fs.readFileSync(path.join(ROOT, 'questions', 'questions.js'), 'utf8');
const qs = eval(src.slice(src.indexOf('['), src.lastIndexOf(']') + 1));
const FURIGANA = load('questions/furigana.js', 'FURIGANA'), SCENES = load('questions/anime.js', 'ANIME_SCENES');
const yomi = s => s.replace(/km\/h/g, 'キロ').replace(/(\d+(?:\.\d+)?)m/g, '$1メートル').replace(/○/g, 'マル').replace(/×/g, 'バツ');
const kana = (q, field) => { const r = FURIGANA[q.id] && FURIGANA[q.id][field]; const s = r && r.replace(/《[^》]*》/g, '') === q[field] ? r.replace(/([一-鿿々〆ヶ]+)《([^》]*)》/g, '$2') : q[field]; return yomi(s); };
const ids = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(SCENES);
(async () => {
  fs.mkdirSync(OUT, { recursive: true }); const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'av-')); const list = [];
  for (const id of ids) {
    const q = qs.find(x => x.id === id); if (!q) { console.log('見つからない', id); continue; }
    const text = kana(q, 'explanation').split('。')[0] + '。';
    const aq = await (await fetch(VV + '/audio_query?speaker=' + SPEAKER + '&text=' + encodeURIComponent(text), { method: 'POST' })).json();
    aq.speedScale = SPEED; aq.outputSamplingRate = 44100; aq.prePhonemeLength = 0.1; aq.postPhonemeLength = 0.2;
    const r = await fetch(VV + '/synthesis?speaker=' + SPEAKER, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(aq) });
    const wav = path.join(tmp, id + '.wav'); fs.writeFileSync(wav, Buffer.from(await r.arrayBuffer()));
    execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', wav, '-ac', '1', '-c:a', 'aac', '-b:a', '64k', path.join(OUT, id + '.m4a')]);
    list.push(id + '\t' + text); console.log(id, text);
  }
  fs.writeFileSync(path.join(OUT, '読み上げの文.txt'), list.join('\n') + '\n');
})();
