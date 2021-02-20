importScripts("/precache-manifest.88d2fc304466e40ba9906947608a20f8.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

const version = "0.6.18";
const cacheName = `NCN_P-${version}`;


// Ensure the work will be finished. Not terminate service
self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

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
