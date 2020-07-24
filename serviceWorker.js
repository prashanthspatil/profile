// Cache the assets
const staticDevCoffee = "prashanth-cafe"
const assets = [
  "/",
  "/pwa.html",
  "/css/pwa/style.css",
  "/pwa.js",
  "/images/fakeprofile/bitbucket.png",
  "/images/fakeprofile/bootstrap.png",
  "/images/fakeprofile/css.png",
  "/images/fakeprofile/github.png",
  "/images/fakeprofile/html.png",
  "/images/fakeprofile/js.png",
  "/images/fakeprofile/laravel.png",
  "/images/fakeprofile/php.png",
  "/images/fakeprofile/react.png"
  "/images/fakeprofile/swift.png"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

// Fetch data from cache when offline
self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})