'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "android-icon-144x144.png": "2709731c5e5ece8e2cc8a59d510f1125",
"android-icon-192x192.png": "987204ee0fb015e950deb5ca44741ccd",
"android-icon-36x36.png": "501e97f5f93297096f58ab00f6118a65",
"android-icon-48x48.png": "bbe60f17cdf150a3b6cc37f7a56eac4d",
"android-icon-72x72.png": "7d17affad9bbfe91443be6f516df7b35",
"android-icon-96x96.png": "caa99c313562710d34d59dfa5bc58414",
"apple-icon-114x114.png": "3675b9d09e5543dfe52823c9c0db4d15",
"apple-icon-120x120.png": "85dedaf0f0f70accaf7a09d778bff958",
"apple-icon-144x144.png": "2709731c5e5ece8e2cc8a59d510f1125",
"apple-icon-152x152.png": "d4e6580892363a63464ca9df617a61e6",
"apple-icon-180x180.png": "cb9b05930c3966993a5861371ba62374",
"apple-icon-57x57.png": "599ca430167a0b6598bd90118d6acfa1",
"apple-icon-60x60.png": "4d6761ca6c57fb079cba188eef96f785",
"apple-icon-72x72.png": "7d17affad9bbfe91443be6f516df7b35",
"apple-icon-76x76.png": "a875d3fbda4473bd4409d87a21cc46a7",
"apple-icon-precomposed.png": "559bf4f3ee3f9135764d05c8f60fc45a",
"apple-icon.png": "559bf4f3ee3f9135764d05c8f60fc45a",
"assets/AssetManifest.json": "9d367cf13f6cf10181b2a50c1d5c6c03",
"assets/assets/images/csrl-logo-2.jpg": "57f08caa4c6a6b42288dff2524963f4c",
"assets/assets/images/header_logo.png": "28562c09ea9372a30e37d669144c56e3",
"assets/assets/images/loading.gif": "a6178f443133606fe19006604d0cafb5",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/NOTICES": "17ce5bae981e015b2e48a53bd72d1f60",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"favicon-16x16.png": "255a0f7626082cf111f6faf5eb37e2e3",
"favicon-32x32.png": "f58f7030d04147278e0bd47b71f91025",
"favicon-96x96.png": "caa99c313562710d34d59dfa5bc58414",
"favicon.ico": "aad7fa785ef9b5537405f3ca761a81f4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"images/icons/icon-128x128.png": "b99cff489d33fd63b78e69b68050a3e7",
"images/icons/icon-144x144.png": "da64c74ee0ba39416ad76d6c17bc9d26",
"images/icons/icon-152x152.png": "5deda37d64ffea0c6db0ae5543f3ce4a",
"images/icons/icon-192x192.png": "411fea8e2f71bd069890eddc63ca2b84",
"images/icons/icon-384x384.png": "3eb9eb7c28d8d3ff758088898264896a",
"images/icons/icon-512x512.png": "1610d5ee93f15b48e2218291b1e44d67",
"images/icons/icon-72x72.png": "a84dc55d23fa7ef107af12c20240c109",
"images/icons/icon-96x96.png": "fee1a4a0190666b9ba2515aff3e1d8fa",
"index.html": "f82e35863d9551afdc129462a6ded057",
"/": "f82e35863d9551afdc129462a6ded057",
"main.dart.js": "9df6ab9134d9decc5654464f148685f5",
"manifest.json": "8b873973ffc6711701bb758297d01346",
"ms-icon-144x144.png": "2709731c5e5ece8e2cc8a59d510f1125",
"ms-icon-150x150.png": "aacd12ef44d2090e417e8c78998b6c88",
"ms-icon-310x310.png": "83d3e8a01086ee98be387c6b57f3db55",
"ms-icon-70x70.png": "0101794a5b670652f2d691e4c4c143cb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
