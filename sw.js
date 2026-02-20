// Annie PWA Service Worker — Offline-First Cache Strategy
const CACHE_NAME = 'annie-pwa-v1';

// Files to cache for full offline functionality
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './cosplay.html',
    './style.css',
    './data.js',
    './data-extension.js',
    './manifest.json',
    './icons/icon-512.png'
];

// Install: Pre-cache all core assets
self.addEventListener('install', (event) => {
    console.log('🍌 [SW] Installing Annie PWA...');
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('🍌 [SW] Caching core assets');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
    // Activate immediately without waiting
    self.skipWaiting();
});

// Activate: Clean up old caches
self.addEventListener('activate', (event) => {
    console.log('🍌 [SW] Activated!');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME)
                    .map((name) => {
                        console.log('🍌 [SW] Deleting old cache:', name);
                        return caches.delete(name);
                    })
            );
        })
    );
    // Take control of all pages immediately
    self.clients.claim();
});

// Fetch: Cache-First strategy for local assets, Network-First for external
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // For external requests (like Pollinations AI images), try network first
    if (url.origin !== self.location.origin) {
        event.respondWith(
            fetch(event.request)
                .then((response) => {
                    // Cache successful external image responses
                    if (response.ok && event.request.destination === 'image') {
                        const responseClone = response.clone();
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, responseClone);
                        });
                    }
                    return response;
                })
                .catch(() => {
                    // If network fails, try cache
                    return caches.match(event.request);
                })
        );
        return;
    }

    // For local assets: Cache-First (instant offline loading)
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                // Return cached version, but also update cache in background
                fetch(event.request).then((networkResponse) => {
                    if (networkResponse.ok) {
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, networkResponse);
                        });
                    }
                }).catch(() => { }); // Silently ignore network errors
                return cachedResponse;
            }
            // If not in cache, fetch from network and cache it
            return fetch(event.request).then((response) => {
                if (response.ok) {
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseClone);
                    });
                }
                return response;
            });
        })
    );
});
