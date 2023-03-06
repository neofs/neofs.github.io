importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.0.0/workbox-sw.js');
workbox.routing.registerRoute('/burger-admin/index.html', workbox.strategies.networkFirst());
workbox.routing.registerRoute(new RegExp('.*\.js'), workbox.strategies.networkFirst());
workbox.routing.registerRoute(new RegExp('.*\.png'), workbox.strategies.networkFirst());