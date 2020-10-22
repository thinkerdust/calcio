const {
	assets
} = global.serviceWorkerOption

const CACHE_NAME = new Date().toISOString()

let assetsToCache = [
	...assets,
	"/",
]

console.log(assets)

assetsToCache = assetsToCache.map(path => {
	return new URL(path, global.location).toString()
})

self.addEventListener('install', function (event) {
	event.waitUntil(
		caches.open(CACHE_NAME)
		.then(function (cache) {
			return cache.addAll(assetsToCache);
		})
	);
})

self.addEventListener('activate', function (event) {
	event.waitUntil(
		caches.keys()
		.then(function (cacheNames) {
			return Promise.all(
				cacheNames.map(function (cacheName) {
					if (cacheName != CACHE_NAME) {
						console.log("ServiceWorker: cache " + cacheName + " dihapus");
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
})

self.addEventListener('fetch', function (event) {
	event.respondWith(
		caches.open(CACHE_NAME).then(function (cache) {
			return cache.match(event.request).then(function (response) {
				return response || fetch(event.request).then(function (response) {
					cache.put(event.request, response.clone());
					return response;
				});
			});
		})
	);
});

self.addEventListener('push', function(event) {
	var body;
	if (event.data) {
	  body = event.data.text();
	} else {
	  body = 'Push message no payload';
	}
	var options = {
	  body: body,
	  icon: './img/icons/icon_96x96.png',
	  vibrate: [100, 50, 100],
	  data: {
		dateOfArrival: Date.now(),
		primaryKey: 1
	  }
	};
	event.waitUntil(
	  self.registration.showNotification('Push Notification', options)
	);
  });