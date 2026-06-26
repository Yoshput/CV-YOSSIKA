const CACHE_NAME = 'yossika-portfolio-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/details.html',
  '/cv_yossika_pelindo.html',
  '/manifest.json'
];

// Install Service Worker & Cache core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Activate & Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// Fetch assets (Network-first falling back to Cache)
self.addEventListener('fetch', (event) => {
  // Hanya tangani request HTTP/HTTPS (hindari protocol internal chrome-extension dll)
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }
  
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Simpan ke cache jika request sukses
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // Jika offline, ambil dari cache
        return caches.match(event.request);
      })
  );
});
