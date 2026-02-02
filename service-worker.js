const CACHE_NAME = 'success-diary-cache-v1';

const CACHE_URLS = [
  '/success-diary/',
  '/success-diary/index.html',
  '/success-diary/styles.css',
  '/success-diary/app.js',
  '/success-diary/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CACHE_URLS);
    })
  );
});
