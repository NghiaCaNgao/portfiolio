importScripts("/precache-manifest.03a0ce94f4499f0f0231986add6f960f.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

const version = "0.6.18";
const cacheName = `NCN_P-${version}`;

// self.addEventListener('activate', event => {
//     event.waitUntil(self.clients.claim());
// });


// Download data from cache
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.open(cacheName)
        .then(cache => cache.match(event.request, { ignoreSearch: true }))
        .then(response => {
            return response || fetch(event.request);
        })
    );
})
