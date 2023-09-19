// sw.js
self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open("hello-world-cache").then((cache) => {
        return cache.addAll([
            "/",
            "/index.html",
            "/theo.jpg",
            "/main.js",
            "/jysuis.js",
            "/styles.css",
            "https://cdn.glitch.global/7a1a98ee-e506-4952-9e03-e1100cc9f492/icon.png?v=1694288507540"
        ]);
      })
    );
  });
  
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });