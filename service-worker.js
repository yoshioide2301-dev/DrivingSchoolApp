// service-worker.js
//
// ゼロドラ（仮称） MVP v0.1 - Step 3
// 基本画面・仮問題データをオフラインで利用できるようにするための
// 最小限のキャッシュ処理。
//
// 注意:
// - フィードバック・教習メモの保存は localStorage 側で行うため、
//   このファイルではキャッシュ処理のみを扱う。
// - バックエンド通信・外部APIは扱わない。

const CACHE_NAME = "michito-owner-preview-cache-v19";

const CORE_ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./support.js",
  "./privacy.html",
  "./manifest.json",
  "./questions/questions.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // HTTPキャッシュを経由せずネットワークから取得し、新旧ファイルが同じキャッシュに混ざるのを防ぐ
      return cache.addAll(
        CORE_ASSETS.map((url) => new Request(url, { cache: "reload" }))
      );
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          // 同一オリジン（github.io）の他アプリのキャッシュを消さないよう、自アプリの旧キャッシュのみ削除する
          .filter((key) => key.startsWith("michito-owner-preview-cache-") && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // 同一オリジンのGETリクエストのみキャッシュ対象とする（最小限のキャッシュ戦略）
  if (event.request.method !== "GET") return;
  var path=new URL(event.request.url).pathname;
  if(path.startsWith("/api/")||path==="/support-admin"||path==="/signin-with-chatgpt"||path==="/callback"||path==="/signout-with-chatgpt") return;

  event.respondWith(
    // 他アプリのキャッシュを参照しないよう、自アプリのキャッシュのみから照会する
    caches.open(CACHE_NAME).then((cache) => cache.match(event.request)).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => {
          if (!response || response.status !== 200 || response.type !== "basic") {
            return response;
          }
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
          return response;
        })
        .catch(() => {
          // オフラインかつキャッシュにも存在しない場合はそのまま失敗させる
          return cached;
        });
    })
  );
});
