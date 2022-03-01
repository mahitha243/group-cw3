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

//self.addEventListener('fetch', function (e) {
   // e.respondWith(
      //  caches.match(e.request).then(function (r)  {
           // return r

       // })
 //   )
//});
self.addEventListener('fetch', (e) => {
console.log('[Service Worker] Fetched resource '+e.request.url);
});
self.addEventListener('fetch', function (e) {
e.respondWith(
// check if the cache has the file
caches.match(e.request).then(function (r) {
console.log('[Service Worker] Fetching resource: '
+ e.request.url);
// 'r' is the matching file if it exists in the cache
return r
})
);
});
self.addEventListener('fetch', function (e) {
e.respondWith(
caches.match(e.request).then(function (r) {
// Download the file if it is not in the cache,
return r || fetch(e.request).then(function (response) {
// add the new file to cache
return caches.open(cacheName).then(function (cache) {
cache.put(e.request, response.clone());
return response;
});
});
})
);
})
