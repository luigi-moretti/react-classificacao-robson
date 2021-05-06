var cacheName = 'static-v1';

let appShellFiles = [
  '/',
  '/asset-manifest.json',
  '/favicon.ico',
  '/index.html',
  '/logo192.png',
  '/logo512.png',
  '/manifest.json',
  '/robots.txt',
  '/sw.js',
  '/static/css/*.css',
  '/static/js/*.js',
  '/static/media/',
  '/static/media/*.png',
]

//const imagens = [];
/*for (let i = 0; i < games.length; i++) {
  gamesImages.push(`static/media/${games[i].slug}.jpg`);
}*/
//const contentToCache = appShellFiles.concat(imagens);



self.addEventListener('install', function (event) {
  console.log('[Service Worker] Install');
  event.waitUntil((async () => {
    const cache = await caches.open(cacheName);
    console.log('[Service Worker] Caching all: app shell and content');
    await cache.addAll(appShellFiles);
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keyList) => {
    return Promise.all(keyList.map((key) => {
      if (key === cacheName) { return; }
      caches.delete(key);
    }))
  }));
});

self.addEventListener('fetch', (event) => {
  console.log(`[Service Worker] Fetched resource ${event.request.url}`);
  event.respondWith((async () => {
    const r = await caches.match(event.request);
    console.log(`[Service Worker] Fetching resource: ${event.request.url}`);
    if (r) { return r; }
    const response = await fetch(event.request);
    const cache = await caches.open(cacheName);
    console.log(`[Service Worker] Caching new resource: ${event.request.url}`);
    //cache.put(event.request, response.clone());
    //return response;

    return cache.put(event.request, response.clone()).then(() => {
      return response;
    });
  })());
});