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

const CACHE_NAME = "zerodora-cache-v1";

const CORE_ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./manifest.json",
  "./questions/questions.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CORE_ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // 同一オリジンのGETリクエストのみキャッシュ対象とする（最小限のキャッシュ戦略）
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
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
