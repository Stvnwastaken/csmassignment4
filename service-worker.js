self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('my-pwa-cache')
            .then((cache) => {
                return cache.addAll([
                    './',
                    './index.html',
                    './index.css',
                    './index.js',
                    './assets/image.png',
                    './assets/lightblue.jpg',
                    './assets/lightgold.jpg'
                ]);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});