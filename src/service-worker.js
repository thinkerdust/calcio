const CACHE_NAME = "pwa-2";

let urlsToCache = [
	"/",
	"/manifest.json",
	"/bundle.js",
	"/index.html",
	"/icon_96x96.png",
	"/icon_128x128.png",
	"/icon_144x144.png",
	"/icon_192x192.png",
	"/icon_256x256.png",
	"/icon_384x384.png",
	"/icon_512x512.png",
	"/apple-touch-icon.png",
	"/bg-1.jpg",
	"/bg-2.jpg",
	"/bg-3.jpg",
	"/bg-4.jpg",
	"/goal.png"
];
 
self.addEventListener('install', function(event){
	event.waitUntil(
		caches.open(CACHE_NAME)
		.then(function(cache) {
			return cache.addAll(urlsToCache);
		})
	);
})

self.addEventListener('activate', function(event){
	event.waitUntil(
		caches.keys()
		.then(function(cacheNames) {
			return Promise.all(
				cacheNames.map(function(cacheName){
					if(cacheName != CACHE_NAME){	
						console.log("ServiceWorker: cache " + cacheName + " dihapus");
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
})

self.addEventListener("fetch", function(event) {
	let url = "https://api.football-data.org/";
	let base_url = url.replace(/^http:\/\//i, 'https://');
  
	if (event.request.url.indexOf(base_url) > -1) {
	  event.respondWith(
		caches.open(CACHE_NAME).then(function(cache) {
		  return fetch(event.request).then(function(response) {
			cache.put(event.request.url, response.clone());
			return response;
		  })
		})
	  );
	} else {
	  event.respondWith(
		caches.match(event.request, { ignoreSearch: true }).then(function(response) {
		  return response || fetch (event.request);
		})
	  )
	}
});