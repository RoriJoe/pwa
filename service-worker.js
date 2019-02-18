if (workbox) {
  workbox.setConfig({
    debug: false
  })

  workbox.clientsClaim()
  workbox.skipWaiting()
  workbox.precaching.precacheAndRoute(self.__precacheManifest || [])
  // workbox.routing.registerNavigationRoute('/index.html')

  workbox.routing.registerNavigationRoute('/index.html')
}
