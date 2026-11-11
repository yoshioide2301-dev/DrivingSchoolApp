// 1.2.2 学習の通知の問いかけの自動の確かめ（11/11）。使い方：playwright-core を入れた場所で node reminder-ask.test.mjs <アプリのフォルダ>。404 は favicon（ブラウザが自動で取りに行く）なので数えない
import { chromium } from 'playwright-core';
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const ROOT = process.argv[2];
const types = { '.html':'text/html', '.js':'text/javascript', '.css':'text/css', '.json':'application/json', '.svg':'image/svg+xml', '.png':'image/png', '.webmanifest':'application/manifest+json' };
const srv = http.createServer((q, r) => { let f = path.join(ROOT, decodeURIComponent(q.url.split('?')[0])); if (f.endsWith(path.sep)) f += 'index.html';
  fs.readFile(f, (e, d) => { if (e) { r.writeHead(404); r.end(); return; } r.writeHead(200, { 'Content-Type': types[path.extname(f)] || 'application/octet-stream' }); r.end(d); }); }).listen(8765);
const exe = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const b = await chromium.launch({ executablePath: exe, headless: true });
const res = []; const ok = (n, c, x = '') => res.push((c ? '合格 ' : '不合格 ') + n + (x ? '（' + x + '）' : ''));
async function newPage(permit, seed) {
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, serviceWorkers: 'block' });
  await ctx.addInitScript(([permit, seed]) => {
    if (!sessionStorage.getItem('seeded')) { localStorage.clear(); for (const k in seed) localStorage.setItem(k, seed[k]); sessionStorage.setItem('seeded', '1'); }
    window.__n = { req: 0, sched: [], cancel: 0 };
    window.michitoNotify = { request: () => { window.__n.req++; return Promise.resolve(permit); }, schedule: l => { window.__n.sched = l; return Promise.resolve(); }, cancel: () => { window.__n.cancel++; return Promise.resolve(); } };
    window.confirm = () => true; window.alert = () => {};
  }, [permit, seed]);
  const p = await ctx.newPage(); const errs = [];
  p.on('response', r => { if (r.status() === 404) console.log('404', r.url()); }); p.on('pageerror', e => errs.push(String(e))); p.on('console', m => { if (m.type() === 'error' && !/404/.test(m.text())) errs.push(m.text()); });
  await p.goto('http://localhost:8765/index.html'); await p.waitForTimeout(500);
  return { p, errs, ctx };
}
async function doFive(p) {
  if (await p.$('[data-action="guide-done"]')) await p.click('[data-action="guide-done"]');
  for (let i = 0; i < 5 && await p.$('[data-action="guide-done"]'); i++) { await p.click('[data-action="guide-done"]'); await p.waitForTimeout(150); }
  let sc = await p.$('[data-action="start-chapter"]');
  if (!sc || !await sc.isVisible()) { await p.click('[data-action="open-start"]'); await p.waitForTimeout(200); }
  await p.locator('[data-action="start-chapter"]:visible').first().click();
  for (let i = 0; i < 60; i++) {
    if (await p.$('.screen--result')) return true;
    for (const sel of ['.choice-btn:not([disabled])', '[data-action="next-question"]', '[data-action="skip-reflection"]', '[data-action="select-mood"]', '[data-action="next-after-reflection"]']) {
      const el = await p.$(sel); if (el && await el.isVisible()) { await el.click(); await p.waitForTimeout(120); break; }
    }
  }
  return false;
}
const ask = p => p.$('[data-testid="reminder-ask"]');
// 1. はじめての5問の後に聞く → はい → 許可 → オン・予約
{ const { p, errs, ctx } = await newPage(true, {});
  ok('5問を解き終える', await doFive(p));
  ok('初めての5問の後に問いかけが出る', !!await ask(p));
  await p.click('[data-action="reminder-ask-yes"]'); await p.waitForTimeout(300);
  const n = await p.evaluate(() => window.__n); const r = await p.evaluate(() => JSON.parse(localStorage.getItem('michito_reminder') || 'null'));
  ok('「はい」で許可の確認を呼ぶ', n.req === 1); ok('オンになり20時', r && r.on && r.time === '20:00'); ok('予約は今日を除く13日分（今日は学んだので）', n.sched.length === 13, n.sched.length + '件');
  ok('「毎日 20時」の完了の文', !!await p.$('[data-testid="reminder-ask-done"]'));
  ok('エラーなし', errs.length === 0, errs.join(' / ')); await ctx.close(); }
// 2. あとで → 次の5問では聞かない → 3日後にまた聞く
{ const { p, errs, ctx } = await newPage(true, {});
  await doFive(p); await p.click('[data-action="reminder-ask-later"]'); await p.waitForTimeout(200);
  ok('「あとで」で問いかけが消える', !await ask(p));
  await p.click('[data-action="start-same-chapter"]'); 
  for (let i = 0; i < 60 && !await p.$('.screen--result'); i++) for (const sel of ['.choice-btn:not([disabled])', '[data-action="next-question"]', '[data-action="skip-reflection"]', '[data-action="select-mood"]', '[data-action="next-after-reflection"]']) { const el = await p.$(sel); if (el && await el.isVisible()) { await el.click(); await p.waitForTimeout(120); break; } }
  ok('「あとで」の後の5問では聞かない', !await ask(p));
  await p.evaluate(() => { const a = JSON.parse(localStorage.getItem('michito_reminder_ask')); a.next = Date.now() - 1000; localStorage.setItem('michito_reminder_ask', JSON.stringify(a)); });
  await p.click('[data-action="start-same-chapter"]');
  for (let i = 0; i < 60 && !await p.$('.screen--result'); i++) for (const sel of ['.choice-btn:not([disabled])', '[data-action="next-question"]', '[data-action="skip-reflection"]', '[data-action="select-mood"]', '[data-action="next-after-reflection"]']) { const el = await p.$(sel); if (el && await el.isVisible()) { await el.click(); await p.waitForTimeout(120); break; } }
  ok('3日たつと、また聞く', !!await ask(p));
  const a = await p.evaluate(() => JSON.parse(localStorage.getItem('michito_reminder_ask')));
  ok('エラーなし', errs.length === 0, errs.join(' / ')); await ctx.close(); }
// 3. 今後は聞かない
{ const { p, errs, ctx } = await newPage(true, {});
  await doFive(p); await p.click('[data-action="reminder-ask-never"]'); await p.waitForTimeout(200);
  const a = await p.evaluate(() => JSON.parse(localStorage.getItem('michito_reminder_ask')));
  ok('「今後は聞かない」が記録される', a && a.never === true); ok('エラーなし', errs.length === 0, errs.join(' / ')); await ctx.close(); }
// 4. 許可しない → 案内の文・3日後にまた
{ const { p, errs, ctx } = await newPage(false, {});
  await doFive(p); await p.click('[data-action="reminder-ask-yes"]'); await p.waitForTimeout(300);
  ok('許可しないとき、iPhone の設定への案内が出る', !!await p.$('[data-testid="reminder-ask-denied"]'));
  const r = await p.evaluate(() => JSON.parse(localStorage.getItem('michito_reminder') || 'null'));
  ok('許可しないときはオンにならない', !(r && r.on)); ok('エラーなし', errs.length === 0, errs.join(' / ')); await ctx.close(); }
// 5. 前の版の記録があっても消えず、問いかけも出る
{ const old = { zerodora_history: JSON.stringify([{ sessionId: 's1', completed: true, kyoshu: 1, date: '2026-11-09', count: 5, correctCount: 4, accuracy: 80, durationSec: 60 }]), michito_progress: JSON.stringify({ 'D-C001': { ok: true, t: 1 } }) };
  const { p, errs, ctx } = await newPage(true, old);
  const h = await p.evaluate(() => JSON.parse(localStorage.getItem('zerodora_history')).length);
  ok('前の版の記録が残っている', h === 1); await doFive(p);
  const h2 = await p.evaluate(() => JSON.parse(localStorage.getItem('zerodora_history')).length);
  ok('記録が足される（1→2）', h2 === 2, String(h2)); ok('前から使っている人にも問いかけが出る', !!await ask(p));
  ok('エラーなし', errs.length === 0, errs.join(' / ')); await ctx.close(); }
console.log(res.join('\n')); await b.close(); srv.close();
