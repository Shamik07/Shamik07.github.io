'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ad808460338efe404a6134b95e0e028a",
"assets/assets/images/a_1_1.jpeg": "46daa1bfebfe15618ab31bc5e689462b",
"assets/assets/images/a_1_2.jpeg": "007d61389c8abf98cf98e791404b3d88",
"assets/assets/images/a_1_3.jpeg": "62c89a062e8c88e8bd0202fec3addcd4",
"assets/assets/images/a_1_4.jpeg": "a403e7515b8a47fc95507a59ddd38366",
"assets/assets/images/header_logo.png": "28562c09ea9372a30e37d669144c56e3",
"assets/assets/images/q_1.jpeg": "71f04df0bf52743c4285f0ec721cff13",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "696676dc0a3e14236a91abd8b81cca3c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "4a49ba3d0d8356be89b95de8a6a96e30",
"/": "4a49ba3d0d8356be89b95de8a6a96e30",
"main.dart.js": "19a52f78708b0d91273fc5b8c2a5c9c1",
"manifest.json": "95f9a83e89825c013b43abd1a3f3169c"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
