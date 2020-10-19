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

self.addEventListener("fetch", function (event) {
	let url = "https://api.football-data.org/";
	let base_url = url.replace(/^http:\/\//i, 'https://');

	if (event.request.url.indexOf(base_url) > -1) {
		event.respondWith(
			caches.open(CACHE_NAME).then(function (cache) {
				return fetch(event.request).then(function (response) {
					cache.put(event.request.url, response.clone());
					return response;
				})
			})
		);
	} else {
		event.respondWith(
			caches.match(event.request, {
				ignoreSearch: true
			}).then(function (response) {
				return response || fetch(event.request);
			})
		)
	}
});