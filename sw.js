importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');
workbox.routing.registerRoute('index.html', workbox.strategies.networkFirst());
workbox.routing.registerRoute(new RegExp('.*\.js'), workbox.strategies.networkFirst());
workbox.routing.registerRoute(new RegExp('.*\.css'), workbox.strategies.networkFirst());
workbox.routing.registerRoute(new RegExp('.*\.png'), workbox.strategies.networkFirst());