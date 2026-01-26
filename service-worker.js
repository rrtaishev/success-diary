const CACHE_NAME = 'success-diary-cache-v1';

const CACHE_URLS = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/manifest.json'
];

// установка: закэшировать базовые файлы
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CACHE_URLS);
    })
  );
});

// активация: очистить старые кэши, если будут новые версии
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
});

// запросы: сначала сеть, если не получилось — из кэша
self.addEventListener('fetch', (event) => {
  const request = event.request;

  // только GET-запросы
  if (request.method !== 'GET') {
    return;
  }

  event.respondWith(
    fetch(request)
      .then((response) => {
        // сохраняем копию в кэш
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(request, responseClone);
        });
        return response;
      })
      .catch(() => {
        // если сеть недоступна, пробуем из кэша
        return caches.match(request).then((cached) => cached || Promise.reject('no-match'));
      })
  );
});
