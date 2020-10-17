const CACHE_NAME = "pwa-2";

let urlsToCache = [
  "/",
  "/manifest.json",
  "./src/index.html",
  "./src/index.js",
  "./src/nav.html",
  "./src/css/style.css",
  "./src/img/apple-touch-icon.png",
  "./src/img/bg-1.jpg",
  "./src/img/bg-2.jpg",
  "./src/img/bg-3.jpg",
  "./src/img/bg-4.jpg",
  "./src/img/goal.png",
  "./src/img/icon.png",
  "./src/js/api.js",
  "./src/js/db.js",
  "./src/js/main.js",
  "./src/js/nav.js",
  "./src/js/push.js",
  "./src/pages/competition.html",
  "./src/pages/home.html",
  "./src/pages/saved.html",
  "./src/pages/team.html",
  "https://fonts.gstatic.com/s/comfortaa/v29/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4WjMDr4fIA9c.woff2",
  "https://fonts.gstatic.com/s/materialicons/v55/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2"
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