/* Tally service worker: works offline after the first visit.
   App files are fetched fresh whenever you are online, so updates show up
   immediately. The cached copy is only used when offline. */
const VER = 'tally-v11';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  // one missing file must never stop the app from installing
  e.waitUntil(caches.open(VER).then(c => Promise.all(SHELL.map(u => c.add(new Request(u, { cache: 'reload' })).catch(() => {})))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VER).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.hostname === 'open.er-api.com' || url.hostname === 'generativelanguage.googleapis.com') return; // always live
  if (url.origin === self.location.origin) {
    // app files: network first (revalidated), cache only as the offline fallback
    e.respondWith((async () => {
      const c = await caches.open(VER);
      try {
        const r = await fetch(req.url, { cache: 'no-cache' });
        if (r.ok) c.put(req, r.clone());
        return r;
      } catch (err) {
        return (await c.match(req, { ignoreSearch: true })) || (await c.match('./index.html')) || Response.error();
      }
    })());
  } else {
    // fonts and the OCR engine: cache after first use
    e.respondWith(caches.open(VER).then(async c => {
      const hit = await c.match(req);
      if (hit) return hit;
      try { const r = await fetch(req); if (r.ok || r.type === 'opaque') c.put(req, r.clone()); return r; }
      catch (err) { return hit || Response.error(); }
    }));
  }
});
