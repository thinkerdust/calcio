!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t,r){"use strict";try{self["workbox:precaching:5.1.4"]&&_()}catch(e){}},function(e,t,r){"use strict";try{self["workbox:core:5.1.4"]&&_()}catch(e){}},function(e,t,r){"use strict";try{self["workbox:routing:5.1.4"]&&_()}catch(e){}},function(e,t,r){"use strict";try{self["workbox:strategies:5.1.4"]&&_()}catch(e){}},function(e,t,r){"use strict";r.r(t);r(0);var n=[],i={get:()=>n,add(e){n.push(...e)}};r(1);var a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},s=e=>[a.prefix,e,a.suffix].filter(e=>e&&e.length>0).join("-"),o=e=>e||s(a.precache),c=e=>e||s(a.runtime),u=e=>new URL(String(e),location.href).href.replace(new RegExp("^".concat(location.origin)),""),h=function(e){for(var t=e,r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return n.length>0&&(t+=" :: ".concat(JSON.stringify(n))),t};class l extends Error{constructor(e,t){super(h(e,t)),this.name=e,this.details=t}}var f=new Set;function d(e,t,r,n,i,a,s){try{var o=e[a](s),c=o.value}catch(e){return void r(e)}o.done?t(c):Promise.resolve(c).then(n,i)}function v(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var a=e.apply(t,r);function s(e){d(a,n,i,s,o,"next",e)}function o(e){d(a,n,i,s,o,"throw",e)}s(void 0)}))}}function p(){return(p=v((function*(){for(var e of f)yield e()}))).apply(this,arguments)}var y=(e,t)=>e.filter(e=>t in e);function g(e,t,r,n,i,a,s){try{var o=e[a](s),c=o.value}catch(e){return void r(e)}o.done?t(c):Promise.resolve(c).then(n,i)}function m(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var a=e.apply(t,r);function s(e){g(a,n,i,s,o,"next",e)}function o(e){g(a,n,i,s,o,"throw",e)}s(void 0)}))}}var w=function(){var e=m((function*(e){var{request:t,mode:r,plugins:n=[]}=e,i=y(n,"cacheKeyWillBeUsed"),a=t;for(var s of i)"string"==typeof(a=yield s.cacheKeyWillBeUsed.call(s,{mode:r,request:a}))&&(a=new Request(a));return a}));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=m((function*(e){var{request:t,response:r,event:n,plugins:i=[]}=e,a=r,s=!1;for(var o of i)if("cacheWillUpdate"in o){s=!0;var c=o.cacheWillUpdate;if(!(a=yield c.call(o,{request:t,response:a,event:n})))break}return s||(a=a&&200===a.status?a:void 0),a||null}));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=m((function*(e){var{cacheName:t,request:r,event:n,matchOptions:i,plugins:a=[]}=e,s=yield self.caches.open(t),o=yield w({plugins:a,request:r,mode:"read"}),c=yield s.match(o,i);for(var u of a)if("cachedResponseWillBeUsed"in u){var h=u.cachedResponseWillBeUsed;c=yield h.call(u,{cacheName:t,event:n,matchOptions:i,cachedResponse:c,request:o})}return c}));return function(t){return e.apply(this,arguments)}}(),q={put:function(){var e=m((function*(e){var{cacheName:t,request:r,response:n,event:i,plugins:a=[],matchOptions:s}=e;var o=yield w({plugins:a,request:r,mode:"write"});if(!n)throw new l("cache-put-with-no-response",{url:u(o.url)});var c=yield _({event:i,plugins:a,response:n,request:o});if(c){var h=yield self.caches.open(t),f=y(a,"cacheDidUpdate"),d=f.length>0?yield R({cacheName:t,matchOptions:s,request:o}):null;0;try{yield h.put(o,c)}catch(e){throw"QuotaExceededError"===e.name&&(yield function(){return p.apply(this,arguments)}()),e}for(var v of f)yield v.cacheDidUpdate.call(v,{cacheName:t,event:i,oldResponse:d,newResponse:c,request:o})}}));return function(t){return e.apply(this,arguments)}}(),match:R};function U(e,t,r,n,i,a,s){try{var o=e[a](s),c=o.value}catch(e){return void r(e)}o.done?t(c):Promise.resolve(c).then(n,i)}var L,x={fetch:function(){var e,t=(e=function*(e){var{request:t,fetchOptions:r,event:n,plugins:i=[]}=e;if("string"==typeof t&&(t=new Request(t)),n instanceof FetchEvent&&n.preloadResponse){var a=yield n.preloadResponse;if(a)return a}var s=y(i,"fetchDidFail"),o=s.length>0?t.clone():null;try{for(var c of i)if("requestWillFetch"in c){var u=c.requestWillFetch,h=t.clone();t=yield u.call(c,{request:h,event:n})}}catch(e){throw new l("plugin-error-request-will-fetch",{thrownError:e})}var f=t.clone();try{var d;for(var v of(d="navigate"===t.mode?yield fetch(t):yield fetch(t,r),i))"fetchDidSucceed"in v&&(d=yield v.fetchDidSucceed.call(v,{event:n,request:f,response:d}));return d}catch(e){for(var p of s)yield p.fetchDidFail.call(p,{error:e,event:n,originalRequest:o.clone(),request:f.clone()});throw e}},function(){var t=this,r=arguments;return new Promise((function(n,i){var a=e.apply(t,r);function s(e){U(a,n,i,s,o,"next",e)}function o(e){U(a,n,i,s,o,"throw",e)}s(void 0)}))});return function(e){return t.apply(this,arguments)}}()};function N(){if(void 0===L){var e=new Response("");if("body"in e)try{new Response(e.body),L=!0}catch(e){L=!1}L=!1}return L}function b(e,t,r,n,i,a,s){try{var o=e[a](s),c=o.value}catch(e){return void r(e)}o.done?t(c):Promise.resolve(c).then(n,i)}function O(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var a=e.apply(t,r);function s(e){b(a,n,i,s,o,"next",e)}function o(e){b(a,n,i,s,o,"throw",e)}s(void 0)}))}}function P(){return(P=O((function*(e,t){var r=e.clone(),n={headers:new Headers(r.headers),status:r.status,statusText:r.statusText},i=t?t(n):n,a=N()?r.body:yield r.blob();return new Response(a,i)}))).apply(this,arguments)}function T(e){if(!e)throw new l("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){var t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}var{revision:r,url:n}=e;if(!n)throw new l("add-to-cache-list-unexpected-type",{entry:e});if(!r){var i=new URL(n,location.href);return{cacheKey:i.href,url:i.href}}var a=new URL(n,location.href),s=new URL(n,location.href);return a.searchParams.set("__WB_REVISION__",r),{cacheKey:a.href,url:s.href}}var K;function C(e,t,r,n,i,a,s){try{var o=e[a](s),c=o.value}catch(e){return void r(e)}o.done?t(c):Promise.resolve(c).then(n,i)}function M(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var a=e.apply(t,r);function s(e){C(a,n,i,s,o,"next",e)}function o(e){C(a,n,i,s,o,"throw",e)}s(void 0)}))}}class E{constructor(e){this._cacheName=o(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){var t=[];for(var r of e){"string"==typeof r?t.push(r):r&&void 0===r.revision&&t.push(r.url);var{cacheKey:n,url:i}=T(r),a="string"!=typeof r&&r.revision?"reload":"default";if(this._urlsToCacheKeys.has(i)&&this._urlsToCacheKeys.get(i)!==n)throw new l("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(i),secondEntry:n});if("string"!=typeof r&&r.integrity){if(this._cacheKeysToIntegrities.has(n)&&this._cacheKeysToIntegrities.get(n)!==r.integrity)throw new l("add-to-cache-list-conflicting-integrities",{url:i});this._cacheKeysToIntegrities.set(n,r.integrity)}if(this._urlsToCacheKeys.set(i,n),this._urlsToCacheModes.set(i,a),t.length>0){var s="Workbox is precaching URLs without revision "+"info: ".concat(t.join(", "),"\nThis is generally NOT safe. ")+"Learn more at https://bit.ly/wb-precache";console.warn(s)}}}install(){var e=arguments,t=this;return M((function*(){var{event:r,plugins:n}=e.length>0&&void 0!==e[0]?e[0]:{};var i=[],a=[],s=yield self.caches.open(t._cacheName),o=yield s.keys(),c=new Set(o.map(e=>e.url));for(var[u,h]of t._urlsToCacheKeys)c.has(h)?a.push(u):i.push({cacheKey:h,url:u});var l=i.map(e=>{var{cacheKey:i,url:a}=e,s=t._cacheKeysToIntegrities.get(i),o=t._urlsToCacheModes.get(a);return t._addURLToCache({cacheKey:i,cacheMode:o,event:r,integrity:s,plugins:n,url:a})});return yield Promise.all(l),{updatedURLs:i.map(e=>e.url),notUpdatedURLs:a}}))()}activate(){var e=this;return M((function*(){var t=yield self.caches.open(e._cacheName),r=yield t.keys(),n=new Set(e._urlsToCacheKeys.values()),i=[];for(var a of r)n.has(a.url)||(yield t.delete(a),i.push(a.url));return{deletedURLs:i}}))()}_addURLToCache(e){var t=this;return M((function*(){var r,{cacheKey:n,url:i,cacheMode:a,event:s,plugins:o,integrity:c}=e,u=new Request(i,{integrity:c,cache:a,credentials:"same-origin"}),h=yield x.fetch({event:s,plugins:o,request:u});for(var f of o||[])"cacheWillUpdate"in f&&(r=f);if(!(r?yield r.cacheWillUpdate({event:s,request:u,response:h}):h.status<400))throw new l("bad-precaching-response",{url:i,status:h.status});h.redirected&&(h=yield function(e,t){return P.apply(this,arguments)}(h)),yield q.put({event:s,plugins:o,response:h,request:n===i?u:new Request(n),cacheName:t._cacheName,matchOptions:{ignoreSearch:!0}})}))()}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){var t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}matchPrecache(e){var t=this;return M((function*(){var r=e instanceof Request?e.url:e,n=t.getCacheKeyForURL(r);if(n)return(yield self.caches.open(t._cacheName)).match(n)}))()}createHandler(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(){var r=M((function*(r){var{request:n}=r;try{var i=yield e.matchPrecache(n);if(i)return i;throw new l("missing-precache-entry",{cacheName:e._cacheName,url:n instanceof Request?n.url:n})}catch(e){if(t)return fetch(n);throw e}}));return function(e){return r.apply(this,arguments)}}()}createHandlerBoundToURL(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!this.getCacheKeyForURL(e))throw new l("non-precached-url",{url:e});var r=this.createHandler(t),n=new Request(e);return()=>r({request:n})}}var W=()=>(K||(K=new E),K);function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=function(r){t.some(e=>e.test(r))&&e.searchParams.delete(r)};for(var n of[...e.searchParams.keys()])r(n);return e}var S=(e,t)=>{var r=W().getURLsToCacheKeys();for(var n of function*(e){var{ignoreURLParametersMatching:t,directoryIndex:r,cleanURLs:n,urlManipulation:i}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=new URL(e,location.href);a.hash="",yield a.href;var s=k(a,t);if(yield s.href,r&&s.pathname.endsWith("/")){var o=new URL(s.href);o.pathname+=r,yield o.href}if(n){var c=new URL(s.href);c.pathname+=".html",yield c.href}if(i){var u=i({url:a});for(var h of u)yield h.href}}(e,t)){var i=r.get(n);if(i)return i}},j=!1;function F(e){j||(!function(){var{ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:r=!0,urlManipulation:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=o();self.addEventListener("fetch",a=>{var s=S(a.request.url,{cleanURLs:r,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:n});if(s){var o=self.caches.open(i).then(e=>e.match(s)).then(e=>e||fetch(s));0,a.respondWith(o)}})}(e),j=!0)}var H=e=>{var t=W(),r=i.get();e.waitUntil(t.install({event:e,plugins:r}).catch(e=>{throw e}))},I=e=>{var t=W();e.waitUntil(t.activate())};r(2);var A,D=e=>e&&"object"==typeof e?e:{handle:e};class B{constructor(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";this.handler=D(t),this.match=e,this.method=r}}class G extends B{constructor(e,t,r){super(t=>{var{url:r}=t,n=e.exec(r.href);if(n&&(r.origin===location.origin||0===n.index))return n.slice(1)},t,r)}}class J{constructor(){this._routes=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{var{request:t}=e,r=this.handleRequest({request:t,event:e});r&&e.respondWith(r)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){var{payload:t}=e.data;0;var r=Promise.all(t.urlsToCache.map(e=>{"string"==typeof e&&(e=[e]);var t=new Request(...e);return this.handleRequest({request:t})}));e.waitUntil(r),e.ports&&e.ports[0]&&r.then(()=>e.ports[0].postMessage(!0))}})}handleRequest(e){var{request:t,event:r}=e;var n=new URL(t.url,location.href);if(n.protocol.startsWith("http")){var{params:i,route:a}=this.findMatchingRoute({url:n,request:t,event:r}),s=a&&a.handler;if(!s&&this._defaultHandler&&(s=this._defaultHandler),s){var o;0;try{o=s.handle({url:n,request:t,event:r,params:i})}catch(e){o=Promise.reject(e)}return o instanceof Promise&&this._catchHandler&&(o=o.catch(e=>this._catchHandler.handle({url:n,request:t,event:r}))),o}}}findMatchingRoute(e){var{url:t,request:r,event:n}=e;var i=this._routes.get(r.method)||[];for(var a of i){var s=void 0,o=a.match({url:t,request:r,event:n});if(o)return s=o,(Array.isArray(o)&&0===o.length||o.constructor===Object&&0===Object.keys(o).length||"boolean"==typeof o)&&(s=void 0),{route:a,params:s}}return{}}setDefaultHandler(e){this._defaultHandler=D(e)}setCatchHandler(e){this._catchHandler=D(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new l("unregister-route-but-not-found-with-method",{method:e.method});var t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new l("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}var Q=()=>(A||((A=new J).addFetchListener(),A.addCacheListener()),A);function V(e,t,r){var n;if("string"==typeof e){var i=new URL(e,location.href);n=new B(e=>{var{url:t}=e;return t.href===i.href},t,r)}else if(e instanceof RegExp)n=new G(e,t,r);else if("function"==typeof e)n=new B(e,t,r);else{if(!(e instanceof B))throw new l("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});n=e}return Q().registerRoute(n),n}r(3);function $(e,t,r,n,i,a,s){try{var o=e[a](s),c=o.value}catch(e){return void r(e)}o.done?t(c):Promise.resolve(c).then(n,i)}function z(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var a=e.apply(t,r);function s(e){$(a,n,i,s,o,"next",e)}function o(e){$(a,n,i,s,o,"throw",e)}s(void 0)}))}}class X{constructor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._cacheName=c(e.cacheName),this._plugins=e.plugins||[],this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}handle(e){var t=this;return z((function*(){var{event:r,request:n}=e;"string"==typeof n&&(n=new Request(n));var i,a=yield q.match({cacheName:t._cacheName,request:n,event:r,matchOptions:t._matchOptions,plugins:t._plugins});if(a)0;else{0;try{a=yield t._getFromNetwork(n,r)}catch(e){i=e}0}if(!a)throw new l("no-response",{url:n.url,error:i});return a}))()}_getFromNetwork(e,t){var r=this;return z((function*(){var n=yield x.fetch({request:e,event:t,fetchOptions:r._fetchOptions,plugins:r._plugins}),i=n.clone(),a=q.put({cacheName:r._cacheName,request:e,response:i,event:t,plugins:r._plugins});if(t)try{t.waitUntil(a)}catch(e){0}return n}))()}}function Y(e,t,r,n,i,a,s){try{var o=e[a](s),c=o.value}catch(e){return void r(e)}o.done?t(c):Promise.resolve(c).then(n,i)}var Z,ee,te,re,ne={cacheWillUpdate:(Z=function*(e){var{response:t}=e;return 200===t.status||0===t.status?t:null},ee=function(){var e=this,t=arguments;return new Promise((function(r,n){var i=Z.apply(e,t);function a(e){Y(i,r,n,a,s,"next",e)}function s(e){Y(i,r,n,a,s,"throw",e)}a(void 0)}))},function(e){return ee.apply(this,arguments)})};function ie(e,t,r,n,i,a,s){try{var o=e[a](s),c=o.value}catch(e){return void r(e)}o.done?t(c):Promise.resolve(c).then(n,i)}function ae(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var a=e.apply(t,r);function s(e){ie(a,n,i,s,o,"next",e)}function o(e){ie(a,n,i,s,o,"throw",e)}s(void 0)}))}}class se{constructor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this._cacheName=c(e.cacheName),this._plugins=e.plugins||[],e.plugins){var t=e.plugins.some(e=>!!e.cacheWillUpdate);this._plugins=t?e.plugins:[ne,...e.plugins]}else this._plugins=[ne];this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}handle(e){var t=this;return ae((function*(){var{event:r,request:n}=e;"string"==typeof n&&(n=new Request(n));var i,a=t._getFromNetwork({request:n,event:r}),s=yield q.match({cacheName:t._cacheName,request:n,event:r,matchOptions:t._matchOptions,plugins:t._plugins});if(s){if(r)try{r.waitUntil(a)}catch(i){0}}else{0;try{s=yield a}catch(e){i=e}}if(!s)throw new l("no-response",{url:n.url,error:i});return s}))()}_getFromNetwork(e){var t=this;return ae((function*(){var{request:r,event:n}=e,i=yield x.fetch({request:r,event:n,fetchOptions:t._fetchOptions,plugins:t._plugins}),a=q.put({cacheName:t._cacheName,request:r,response:i.clone(),event:n,plugins:t._plugins});if(n)try{n.waitUntil(a)}catch(e){0}return i}))()}}te=[{'revision':'90ab834bb6cfa1c0d2ffbd25b26d524f','url':'bundle.js'},{'revision':'facfb3140929573256405586758a5111','url':'index.html'},{'revision':'a803cd99d632ddeec4f1b985310dc1c6','url':'src/img/bg-1.jpg'},{'revision':'6008299ef10f532b5494562c63b446ce','url':'src/img/bg-2.jpg'},{'revision':'2b9b6b5d0e924a47be893d005b994e14','url':'src/img/bg-3.jpg'},{'revision':'91d50349ce7438a9ca4fc41d9c8b67f7','url':'src/img/bg-4.jpg'},{'revision':'687919b39b18d7f377a1aba1efde78e0','url':'src/img/goal.jpg'},{'revision':'f341c0e78ce445e4a68074036302c724','url':'src/img/icons/icon_128x128.png'},{'revision':'c71b7379fb7603474167035b795ce7bc','url':'src/img/icons/icon_144x144.png'},{'revision':'2efa59401d59b8f3616f88709c506f61','url':'src/img/icons/icon_256x256.png'},{'revision':'42ef344b12abe3e7d331fcf6d24b169f','url':'src/img/icons/icon_384x384.png'},{'revision':'5e88d40d555911a1465f2d7ee8bff1ca','url':'src/img/icons/icon_512x512.png'},{'revision':'f1a4facb5295c177304080239e29c873','url':'src/img/icons/icon_96x96.png'},{'revision':'e0c96a52650540326d1b8fc2f588b7fd','url':'src/manifest.json'},{'revision':'45f2e56496ae2c6d8c9f8e39c63b93ee','url':'src/nav.html'},{'revision':'fe22fe091a8f76017ce4a5fe4d62ea01','url':'src/pages/competition.html'},{'revision':'b7a766e9944f5e776cd71dd10db844ed','url':'src/pages/home.html'},{'revision':'7ac37efad76e116ac87c367648cc911b','url':'src/pages/saved.html'},{'revision':'7c71a18ef19a5a78d9d593ac182d5c84','url':'src/pages/team.html'}]||[{url:"/index.html",revision:"1"},{url:"/src/nav.html",revision:"1"},{url:"/src/",revision:"1"}],re={ignoreURLParametersMatching:[/.*/]},function(e){W().addToCacheList(e),e.length>0&&(self.addEventListener("install",H),self.addEventListener("activate",I))}(te),F(re),V(/\.(?:css|js|png|jpg|svg|gif)$/,new X({cacheName:"assets-cache"})),V(new RegExp("/src/pages/"),new X({cacheName:"pages"})),V(/^https:\/\/api\.football-data\.org/,new se({cacheName:"api-chace"})),V(/^https:\/\/fonts\.googleapis\.com/,new se({cacheName:"assets-cache"})),self.addEventListener("push",(function(e){var t={body:e.data?e.data.text():"Push message no payload",icon:"./src/img/icons/icon_96x96.png",vibrate:[100,50,100],data:{dateOfArrival:Date.now(),primaryKey:1}};e.waitUntil(self.registration.showNotification("Push Notification",t))}))}]);