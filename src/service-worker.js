import {
	precacheAndRoute
} from "workbox-precaching";
import {
	registerRoute
} from "workbox-routing";
import {
	CacheFirst,
	StaleWhileRevalidate
} from "workbox-strategies";
// import { ExpirationPlugin } from "workbox-expiration";
//self.__WB_MANIFEST

precacheAndRoute(self.__WB_MANIFEST || [{
		url: '/index.html',
		revision: '1'
	},
	{
		url: '/src/nav.html',
		revision: '1'
	},
	{
		url: '/src/',
		revision: '1'
	}
], {
	ignoreURLParametersMatching: [/.*/]
});

registerRoute(
	/\.(?:css|js|png|jpg|svg|gif)$/,
	new CacheFirst({
		cacheName: "assets-cache",
	})
);

registerRoute(
	new RegExp('/src/pages/'),
	new CacheFirst({
		cacheName: 'pages'
	})
);

// caching API
registerRoute(
	/^https:\/\/api\.football-data\.org/,
	new StaleWhileRevalidate({
		cacheName: "api-chace",
	})
);

// caching google font/icon
registerRoute(
	/^https:\/\/fonts\.googleapis\.com/,
	new StaleWhileRevalidate({
		cacheName: "assets-cache",
	})
);

self.addEventListener('push', function (event) {
	let body;
	if (event.data) {
		body = event.data.text();
	} else {
		body = 'Push message no payload';
	}
	let options = {
		body: body,
		icon: './src/img/icons/icon_96x96.png',
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