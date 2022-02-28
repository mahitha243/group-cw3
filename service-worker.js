var cacheName = 'After School App';
var cacheFiles = [
    'index.html',
    'lessons.js',
    'service-worker.js',
    'afterSchoolapp.webmanifest',
];

self.addEventListener('install', (e) => {
    console.log('[service worker] install');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
    console.log('[service worker] caching files.');
    return cache.addAll(cacheFiles);
                         }

       )
    )
});

self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (e)  {
            return r

        })
    )
});

