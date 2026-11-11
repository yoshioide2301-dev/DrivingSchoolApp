// ミチトの自動テスト（GPT 依頼106 の下書きを Claude が実際の画面に合わせて直したもの。11/11）
// 期待値は app.js・questions.js から読み取る（数字を決め打ちにしない）。手順書：管理 repo ledgers/AUTO-TEST-PLAYBOOK.md
import { test, expect } from '@playwright/test';
import fs from 'node:fs';
import vm from 'node:vm';
const js = fs.readFileSync('app.js', 'utf8');
const version = js.match(/var APP_VERSION = "([^"]+)"/)[1];
const ctx = {}; vm.runInNewContext(fs.readFileSync('questions/questions.js', 'utf8') + ';this.all=questions', ctx);
const data = Array.from(ctx.all);
const eligible = data.filter(q => q.reviewStatus === 'reviewed' && q.type === 'truefalse');
const maxDate = data.reduce((m, q) => (q.lastVerifiedDate || '') > m ? q.lastVerifiedDate : m, '');
const latest = data.filter(q => q.lastVerifiedDate === maxDate).map(q => q.id).sort();
const excluded = data.filter(q => !['reviewed', 'mock'].includes(q.reviewStatus)).map(q => q.id).sort();

test.beforeEach(async ({ page }, info) => {
  const errors = []; page._errors = errors;
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', m => { if (m.type() === 'error' && !/favicon|404/.test(m.text())) errors.push(m.text()); });
  const permit = !info.title.includes('許可しない');
  await page.addInitScript(permit => {
    localStorage.setItem('michito_guide_seen', 'true'); window.alert = () => {}; window.confirm = () => true;
    window.calls = { request: 0, schedules: [], cancel: 0, review: 0 };
    window.michitoNotify = { request: async () => { window.calls.request++; return permit; }, schedule: async a => { window.calls.schedules.push(a); }, cancel: async () => { window.calls.cancel++; } };
    window.michitoReview = () => { window.calls.review++; };
  }, permit);
  await page.goto('/');
});
test.afterEach(async ({ page }) => { expect(page._errors).toEqual([]); });

const act = (p, a) => p.locator('[data-action="' + a + '"]:visible').first().click();
async function home(p) { if (await p.locator('[data-action="go-home"]:visible').count()) await act(p, 'go-home'); }
async function settings(p) { await home(p); await act(p, 'open-settings'); }
async function dev(p) { await settings(p); for (let i = 0; i < 5; i++) await act(p, 'dev-tap'); await expect(p.locator('.dev-panel')).toBeVisible(); }
async function devIds(p) { return (await p.locator('.dev-card .question-identity > strong:first-child').allTextContents()).map(s => s.trim()).sort(); }
async function five(p, first = true) {
  if (first) { await home(p); await act(p, 'open-start'); await p.locator('[data-action="start-chapter"]:visible').first().click(); }
  else await act(p, 'start-same-chapter');
  for (let i = 0; i < 60 && !(await p.locator('.screen--result').count()); i++) {
    for (const sel of ['.choice-btn:not([disabled])', '[data-action="next-question"]', '[data-action="skip-reflection"]', '[data-action="select-mood"]', '[data-action="next-after-reflection"]']) {
      const el = p.locator(sel + ':visible').first(); if (await el.count()) { await el.click(); break; }
    }
  }
  await expect(p.locator('.screen--result')).toBeVisible();
}
async function mockDone(p) { await home(p); await act(p, 'mock-open'); await act(p, 'mock-start'); await act(p, 'mock-finish'); await expect(p.getByText('仮免模試 結果')).toBeVisible(); }
async function seed(p, o) { await p.evaluate(v => { for (const [k, x] of Object.entries(v)) localStorage.setItem(k, JSON.stringify(x)); }, o); await p.reload(); }
const ask = p => p.locator('[data-testid="reminder-ask"]');

test('1 版の表示とアップデートの履歴が app.js の版と同じ', async ({ page }) => {
  await settings(page);
  await expect(page.locator('[data-action="dev-tap"]')).toHaveText('ミチト v' + version);
  await act(page, 'open-updates');
  await expect(page.locator('.update-entry').first()).toContainText('v' + version);
});
test('2 出題は500問ちょうどで、画面にも500問と出る', async ({ page }) => {
  expect(eligible).toHaveLength(500);
  await act(page, 'open-start');
  await expect(page.getByText('500問から5問').first()).toBeVisible();
});
test('3 開発用メニューの「最近直した」と「外した問題」が問題データと一致', async ({ page }) => {
  await dev(page);
  await page.locator('[data-preset="latest"]').click(); expect(await devIds(page)).toEqual(latest);
  await page.locator('[data-preset="excluded"]').click(); expect(await devIds(page)).toEqual(excluded);
});
test('4 外した問題は普段の5問にも模試にも出ない', async ({ page }) => {
  const ok = new Set(eligible.map(q => q.id));
  await act(page, 'open-start'); await page.locator('[data-action="start-chapter"]:visible').first().click();
  const s = await page.evaluate(() => localStorage.getItem('michito_session'));
  const ids = (s || '').match(/D-[A-Z]\d{3}/g) || [];
  expect(ids.length).toBeGreaterThan(0); expect(ids.every(id => ok.has(id))).toBe(true);
  await home(page); await act(page, 'mock-open'); await act(page, 'mock-start');
  const m = await page.evaluate(() => localStorage.getItem('michito_mock_session'));
  const mids = (m || '').match(/D-[A-Z]\d{3}/g) || [];
  expect(mids.length).toBeGreaterThanOrEqual(50); expect(mids.every(id => ok.has(id))).toBe(true);
});
test('5 更新しても前の版の記録・進み具合・メモが消えない', async ({ page }) => {
  const old = { zerodora_history: [{ sessionId: 'old', date: '2026-10-20', count: 5, correctCount: 3, accuracy: 60, durationSec: 60, completed: true, kyoshu: 1 }],
    michito_progress: { [eligible[0].id]: { ok: true, t: 100 } }, zerodora_training_notes: [{ date: '2026-10-20', comment: '古いメモ' }] };
  await seed(page, old);
  for (const [k, v] of Object.entries(old)) expect(await page.evaluate(k => JSON.parse(localStorage.getItem(k)), k)).toEqual(v);
  await five(page);
  const h = await page.evaluate(() => JSON.parse(localStorage.getItem('zerodora_history')));
  expect(h.length).toBe(2); expect(h[0].sessionId).toBe('old');
});
test('6 普段の5問は記録に残る', async ({ page }) => {
  await five(page);
  const p = await page.evaluate(() => JSON.parse(localStorage.getItem('michito_progress')));
  expect(Object.keys(p).length).toBe(5);
});
test('7 設定の学習の通知：最初はオフ・オンで14日分・学んだ日は13日分・オフで取り消し', async ({ page }) => {
  await page.clock.install({ time: new Date('2026-11-11T10:00:00') }); await page.reload();
  await settings(page);
  await expect(page.locator('[data-action="toggle-reminder"]')).toContainText('オフ（いまの設定）');
  await page.locator('[data-action="reminder-time"][data-time="20:00"]').click();
  await act(page, 'toggle-reminder');
  await expect.poll(() => page.evaluate(() => window.calls.schedules.at(-1)?.length)).toBe(14);
  await five(page);
  await expect.poll(() => page.evaluate(() => window.calls.schedules.at(-1)?.length)).toBe(13);
  await settings(page); await act(page, 'toggle-reminder');
  expect(await page.evaluate(() => window.calls.cancel)).toBeGreaterThan(0);
});
test('8 評価のお願い：学んだ日が1日なら出さない・2日以上で1回・同じ版では2回目を出さない', async ({ page }) => {
  await seed(page, { zerodora_history: [{ date: '2026-10-20', sessionId: 'a', count: 5 }] });
  await mockDone(page); await page.waitForTimeout(1700);
  expect(await page.evaluate(() => window.calls.review)).toBe(0);
  await seed(page, { zerodora_history: [{ date: '2026-10-19', sessionId: 'a', count: 5 }, { date: '2026-10-20', sessionId: 'b', count: 5 }] });
  await mockDone(page); await expect.poll(() => page.evaluate(() => window.calls.review), { timeout: 4000 }).toBe(1);
  expect(await page.evaluate(() => localStorage.getItem('michito_review_asked'))).toContain(version);
  await page.reload(); await mockDone(page); await page.waitForTimeout(1700);
  expect(await page.evaluate(() => window.calls.review)).toBe(0); // 読み込み直しで数え直すので、2回目に呼ばれなければ0のまま
});
test('9 5問の後の問いかけ：はい→許可→毎日20時でオン', async ({ page }) => {
  await five(page); await expect(ask(page)).toBeVisible();
  await act(page, 'reminder-ask-yes');
  await expect(page.locator('[data-testid="reminder-ask-done"]')).toBeVisible();
  const r = await page.evaluate(() => JSON.parse(localStorage.getItem('michito_reminder')));
  expect(r.on).toBe(true); expect(r.time).toBe('20:00');
});
test('10 5問の後の問いかけ：あとで→次は聞かない→3日後にもう一度聞く', async ({ page }) => {
  await five(page); await act(page, 'reminder-ask-later'); await expect(ask(page)).toHaveCount(0);
  await five(page, false); await expect(ask(page)).toHaveCount(0);
  await page.evaluate(() => { const a = JSON.parse(localStorage.getItem('michito_reminder_ask')); a.next = Date.now() - 1000; localStorage.setItem('michito_reminder_ask', JSON.stringify(a)); });
  await five(page, false); await expect(ask(page)).toBeVisible();
});
test('11 5問の後の問いかけ：今後は聞かない', async ({ page }) => {
  await five(page); await act(page, 'reminder-ask-never');
  await five(page, false); await expect(ask(page)).toHaveCount(0);
});
test('12 5問の後の問いかけ：許可しないときは iPhone の設定への案内', async ({ page }) => {
  await five(page); await act(page, 'reminder-ask-yes');
  await expect(page.locator('[data-testid="reminder-ask-denied"]')).toBeVisible();
  const r = await page.evaluate(() => JSON.parse(localStorage.getItem('michito_reminder') || 'null'));
  expect(!!(r && r.on)).toBe(false);
});
