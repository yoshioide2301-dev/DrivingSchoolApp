// ミチトの自動テストの設定（Safari と同じ WebKit・iPhone の大きさ・画面なし）。11/11
import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  testDir: 'tests/e2e', workers: 2, retries: 0, timeout: 60000,
  reporter: [['list'], ['json', { outputFile: 'test-results/results.json' }]],
  use: { ...devices['iPhone 13'], browserName: 'webkit', headless: true, baseURL: 'http://127.0.0.1:8765', serviceWorkers: 'block' },
  webServer: { command: 'npx http-server . -a 127.0.0.1 -p 8765 -c-1 -s', url: 'http://127.0.0.1:8765', reuseExistingServer: !process.env.CI }
});
