// Cache the assets
const staticDevCoffee = "prashanth-cafe"
const assets = [
  "./profile/",
  "./profile/pwa.html",
  "./profile/css/pwa/style.css",
  "./profile/pwa.js",
  "./profile/images/fakeprofile/bitbucket.png",
  "./profile/images/fakeprofile/bootstrap.png",
  "./profile/images/fakeprofile/css.png",
  "./profile/images/fakeprofile/github.png",
  "./profile/images/fakeprofile/html.png",
  "./profile/images/fakeprofile/js.png",
  "./profile/images/fakeprofile/laravel.png",
  "./profile/images/fakeprofile/php.png",
  "./profile/images/fakeprofile/react.png",
  "./profile/images/fakeprofile/swift.png",
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