// Minimal service worker — just needs to exist and handle fetch
// for Chrome to consider this page installable as a home screen app.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
