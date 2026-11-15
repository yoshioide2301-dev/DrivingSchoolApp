// シミュレーターの点検の台本（11/16）。CI の点検の組み立てのときだけ www に入れる。App Store・TestFlight の版には入らない。
// 端末の機能（通知の許可・通知の予約の件数・評価のお願いの画面）を、実際の iOS の部品で確かめる。
// 進み具合は console.log の「MSELF:」で外の台本（.github/scripts/sim-check.sh）に伝え、写真はそちらが撮る。
(function () {
  // 合図は画面出力と、端末の保管場所（UserDefaults の CapacitorStorage.mself_log）の両方に書く（画面出力は遅れて出ることがあるため）
  var buf = sessionStorage.getItem('mself_buf') || '';
  var log = function (s) {
    console.log('MSELF:' + s); buf += 'MSELF:' + s + '\n'; sessionStorage.setItem('mself_buf', buf);
    try { window.Capacitor.Plugins.Preferences.set({ key: 'mself_log', value: buf }); } catch (e) {}
  };
  var sleep = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };
  var vis = function (sel) { var e = document.querySelector(sel); return e && e.offsetParent !== null ? e : null; };
  var act = function (a) { var list = document.querySelectorAll('[data-action="' + a + '"]'); for (var i = 0; i < list.length; i++) if (list[i].offsetParent !== null) { list[i].click(); return true; } return false; };
  var waitFor = async function (sel, ms) { for (var t = 0; t < (ms || 8000); t += 200) { if (vis(sel)) return vis(sel); await sleep(200); } return null; };
  var result = function (name, ok, detail) { log('RESULT:' + (ok ? 'PASS' : 'FAIL') + ':' + name + ':' + (detail || '')); };
  var shot = async function (name) { log('SHOT:' + name); await sleep(2500); };
  var stage = sessionStorage.getItem('mself_stage') || 'A';
  window.confirm = function () { return true }; window.alert = function () {};

  async function five() {
    act('go-home'); await sleep(400); act('open-start'); await sleep(600);
    var s = document.querySelector('[data-action="start-chapter"]'); if (s) s.click(); await sleep(800);
    var order = ['.choice-btn:not([disabled])', '[data-action="next-question"]', '[data-action="skip-reflection"]', '[data-action="select-mood"]', '[data-action="next-after-reflection"]'];
    for (var i = 0; i < 80 && !document.querySelector('.screen--result'); i++) {
      for (var j = 0; j < order.length; j++) { var e = vis(order[j]); if (e) { e.click(); break; } }
      await sleep(350);
    }
    return !!document.querySelector('.screen--result');
  }

  async function runA() {
    // 1. 版と問題の数
    act('open-settings'); await sleep(800);
    var vt = (document.querySelector('[data-action="dev-tap"]') || {}).textContent || '';
    result('設定の版の表示が v1.2.2', vt.trim() === 'ミチト v1.2.2', vt.trim());
    act('go-home'); await sleep(500); act('open-start'); await sleep(800);
    var has500 = document.body.innerText.indexOf('500問から5問') >= 0;
    result('出題の画面に「500問から5問」', has500, '');
    act('go-home'); await sleep(600);
    await shot('01_ホーム');
    // 2. 5問を解く → 通知の問いかけが出る
    var done = await five();
    result('5問を解き終える', done, '');
    var ask = await waitFor('[data-testid="reminder-ask"]', 5000);
    result('5問の後の通知の問いかけが出る', !!ask, '');
    if (ask) ask.scrollIntoView({ block: 'center' });
    await shot('02_通知の問いかけ');
    // 3. 「はい」→ iOS の許可の画面（外の台本が写真を撮って「許可」を押す）
    log('WAIT_PERMISSION'); act('reminder-ask-yes');
    var ok = await waitFor('[data-testid="reminder-ask-done"]', 60000);
    result('許可の後に「毎日20時にお知らせ」が出る', !!ok, '');
    if (ok) ok.scrollIntoView({ block: 'center' });
    await shot('04_通知オン');
    // 4. 予約の件数（今日は学んだので13件）
    await sleep(1500);
    var cap = window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.LocalNotifications;
    var pend = cap ? (await cap.getPending()).notifications.length : -1;
    result('iOS に予約された通知が13件（今日の分は除く）', pend === 13, pend + '件');
    // 5. 評価のお願いの準備：学んだ日を2日にして読み込み直す
    localStorage.setItem('zerodora_history', JSON.stringify([{ date: '2026-10-19', sessionId: 'a', count: 5 }, { date: '2026-10-20', sessionId: 'b', count: 5 }]));
    localStorage.removeItem('michito_review_asked');
    sessionStorage.setItem('mself_stage', 'B'); await sleep(1500); location.reload();
  }

  async function runB() {
    act('go-home'); await sleep(400); act('mock-open'); await sleep(600); act('mock-start'); await sleep(800); act('mock-finish');
    await sleep(4000);
    await shot('05_評価のお願い');
    var asked = localStorage.getItem('michito_review_asked') || '';
    result('模試の後に評価のお願いを呼んだ（この版で1回）', asked.indexOf('1.2.2') >= 0, asked);
    sessionStorage.setItem('mself_stage', 'END');
    log('DONE');
  }

  async function main() {
    for (var t = 0; t < 60 && !document.querySelector('[data-action]'); t++) await sleep(500);
    await sleep(1500);
    if (!localStorage.getItem('michito_guide_seen')) { localStorage.setItem('michito_guide_seen', 'true'); location.reload(); return; }
    try { if (stage === 'A') await runA(); else if (stage === 'B') await runB(); }
    catch (e) { result('台本の途中で止まった', false, String(e && e.message)); log('DONE'); }
  }
  window.addEventListener('error', function (e) { result('ページのエラー', false, e.message); });
  main();
})();
