// ショート動画30本の投稿用の一覧（確認用 Excel）を作る：順番・問題・答え・長さ・題名・説明文・ハッシュタグ（10/16 本人OK：30本をまとめて確認 → 予約投稿）
// 説明文に書くのは事実だけ（500問すべてに根拠の条文・2026年9月の法改正に対応・無料・登録不要。「広告なし」は 10/17 から書かない）。答えは書かない（動画で見てもらう）。
// クレジット「VOICEVOX:春日部つむぎ」は必ず入れる（キャラクターの規約）。
// 使い方: node tools/build-shorts-captions.cjs <動画のフォルダ> <番号の一覧.txt> <出力.xlsx>
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const ExcelJS = require(path.join(process.env.LOCALAPPDATA, 'AI-Strategy', 'Review', 'tools', 'node_modules', 'exceljs'));
const ROOT = path.join(__dirname, '..');
const [DIR, LIST, OUT] = process.argv.slice(2);
const src = fs.readFileSync(path.join(ROOT, 'questions', 'questions.js'), 'utf8');
const qs = eval(src.slice(src.indexOf('['), src.lastIndexOf(']') + 1));
// 10/24 時事の差し替え：アプリにまだない問題は EXTRA=<json> で渡す（1行目は q.captionLead）
if (process.env.EXTRA) JSON.parse(fs.readFileSync(process.env.EXTRA, 'utf8')).forEach(q => qs.push(q));
const ids = fs.readFileSync(LIST, 'utf8').trim().split(/\s+/);
const dur = f => { try { return parseFloat(execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f], { encoding: 'utf8' })).toFixed(1); } catch (e) { return ''; } };
const TAGS = '#仮免 #仮免学科 #学科試験 #運転免許 #教習所 #ミチト';
const LAW = new Set(['D-C016', 'D-C017']);
// 10/24 時事の差し替えの1行目（当事者・企業名・ニュースの中身には触れない）
const LEAD = { 'D-M183': '早めの点灯が呼びかけられる季節です。「夜間」の決まり、知っていますか？', 'D-C013': '横断歩道での歩行者の保護、正しく覚えていますか？', 'D-M024': '原付のヘルメットの決まり、知っていますか？' };
(async () => {
  const wb = new ExcelJS.Workbook(), ws = wb.addWorksheet('30本');
  ws.columns = [['順番', 6], ['問題ID', 9], ['範囲', 14], ['問題', 46], ['答え', 5], ['長さ（秒）', 8], ['題名（YouTube）', 40], ['説明文（各サービス共通）', 60], ['あなたの判断', 16]].map(([header, width]) => ({ header, width }));
  ids.forEach((id, i) => {
    const q = qs.find(x => x.id === id);
    const title = (LAW.has(id) ? '【2026年9月から】' : '【仮免学科】') + '○か×か？' + (q.kyoshuName ? '（' + q.kyoshuName + '）' : '');
    const body = [
      (q.captionLead || LEAD[id] || (LAW.has(id) ? '2026年9月から変わった「生活道路の法定速度」の問題です。' : '仮免学科の○×問題です。')) + '答えは動画で。',
      '根拠：' + q.ref,
      '',
      '仮免学科の○×アプリ「ミチト」',
      '・500問すべてに根拠の条文',
      '・2026年9月の法改正に対応',
      '・500問すべて無料・登録不要',
      'プロフィールのリンクから（iPhone・Android どちらも無料）',  // 10/24 iPhone と Android を同時に宣伝
      '',
      'VOICEVOX:春日部つむぎ',
      TAGS
    ].join('\n');
    ws.addRow([i + 1, id, q.kyoshu + '：' + q.kyoshuName, q.question, q.choices[q.correct], dur(path.join(DIR, 'michito-short-voice-' + id + '.mp4')), title, body, '']);
  });
  ws.eachRow((row, i) => row.eachCell({ includeEmpty: true }, c => {
    c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFDAE3F3' } };
    c.alignment = { wrapText: true, vertical: 'top' };
    if (i === 1) c.font = { bold: true };
  }));
  ws.views = [{ state: 'frozen', ySplit: 1 }];
  await wb.xlsx.writeFile(OUT);
  console.log('書き出し', ids.length, '本');
})();
