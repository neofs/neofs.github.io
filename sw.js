importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');
workbox.routing.registerRoute('/burger-admin/index.html', new workbox.strategies.NetworkFirst());
// console.log(workbox.strategies)