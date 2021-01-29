'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "17fd598cf4785e2ea519977796f408cb",
"assets/assets/fonts/Alegreya-BoldItalic.ttf": "a6bf3e4d95c75fb9905498616449f113",
"assets/assets/fonts/FFF_Tusj.ttf": "5b43a199b020f6a584ae28fb31ea01da",
"assets/assets/fonts/GreatVibes-Regular.otf": "53e7427de4aaa693950c7a9c35de80e2",
"assets/assets/fonts/Helvetica%2520Neu%2520Bold.ttf": "7f281199258d96e249a7fce4101006b9",
"assets/assets/fonts/HelveticaNeue%2520Light.ttf": "0facaae97183b8fede52099930aefd8d",
"assets/assets/fonts/HelveticaNeue.ttf": "ccad04d46768981ff847f22e8a53b5b3",
"assets/assets/fonts/HelveticaNeueLight.ttf": "0facaae97183b8fede52099930aefd8d",
"assets/assets/fonts/LilyoftheValley.ttf": "8752d0a85af109da33453ee3d1f9764e",
"assets/assets/fonts/Lobster_1.3.otf": "418559e059be72ce2b3a7099bd07280d",
"assets/assets/images/aboutUs.png": "05b5e04f202858c9f259ef0cad4bca12",
"assets/assets/images/account.png": "4f2ce0ca19e80541d3fb8e59552ec7a3",
"assets/assets/images/address5.png": "733ab4fb8f8d069f5ef1d304f2e1f744",
"assets/assets/images/address_icon.png": "bd828e83f9edd1580febf1901cbd2c89",
"assets/assets/images/app_icon.png": "3f178d77083b09e3691a01d7c72beb23",
"assets/assets/images/bank-statement.png": "5070c001e5d65e34b4d1ab16650955f5",
"assets/assets/images/bankSelection.png": "3e79273d42bdf2510959376ddc697d30",
"assets/assets/images/bank_account_icon.png": "71d65429d68e42b778af40b24ea38d0e",
"assets/assets/images/branch_icon.png": "73b00b15791cf3e457fea23d5720a73b",
"assets/assets/images/cheque.png": "8a31731190e842561be663e80236644c",
"assets/assets/images/CoinLoading.gif": "00fe15f08e3067cc3a4f96bd66753d71",
"assets/assets/images/complain.png": "91bfc16033ed5bdb02531272291a1e57",
"assets/assets/images/delivery_service.png": "b34ac5267fd57fc2936e734c6fe7c9ab",
"assets/assets/images/dices.png": "130ef49d3327c79a904ab07f81d0b06d",
"assets/assets/images/fogg-booking-history-1.png": "d3fff557700dcce894c1120118f1c1bd",
"assets/assets/images/goBack.png": "062f52a4bd9a78f395882448a9a9efbd",
"assets/assets/images/language.png": "eaeb7cec837e176cdee08ac4cdca6a21",
"assets/assets/images/languageNew.png": "82192e42f6bf354f6efbe525d0653539",
"assets/assets/images/logo.png": "50ad4a4c18a2cc53e4d6eff82ab7cafb",
"assets/assets/images/no_list.png": "331e4164299075da7b9daf3ee4c94204",
"assets/assets/images/pickup_service.png": "6acae39e25d1044dbb61012799ff9fb7",
"assets/assets/images/pnbicon.png": "9f6a015fa54953ae931fb457bea3d02d",
"assets/assets/images/pnblogo.png": "97db42fab9548c1acd566bc695705911",
"assets/assets/images/psbsend.png": "55d6cb0be1d8c4bce1ea4353234590d9",
"assets/assets/images/service-details.png": "f88c3ccab5d0efeb7ee5db62c36a8cbc",
"assets/assets/images/serviceList.png": "c54f5a3f925346cc542884e085bcd57d",
"assets/assets/images/simIcon.png": "d1c6caa017c58e277c62f4cf89d801df",
"assets/assets/images/welcomeHome3.png": "90526f72b08cdf7f320c8753dccefd3c",
"assets/assets/json/en-US.json": "cf4d87c3d93f2e1369f1f4ef24171731",
"assets/assets/json/hi-IN.json": "25168405cee2a42798d566062f36a087",
"assets/assets/json/kn-IN.json": "cc6370441e392238a49cad7d400803c3",
"assets/assets/json/ta-IN.json": "2d469a814d79d40c411d54221c154ac9",
"assets/assets/json/te-IN.json": "e7198ba176a7a2cb2f435b5501f5ea9e",
"assets/FontManifest.json": "4a46a4144e8ff118d295f2496ee7a9c1",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "166ad0358ef1a64e456e8625cba75081",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/flutter_google_places/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/flutter_google_places/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/flutter_google_places_web/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/flutter_google_places_web/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/open_iconic_flutter/assets/open-iconic.woff": "3cf97837524dd7445e9d1462e3c4afe2",
"icons/Icon-192.png": "97db42fab9548c1acd566bc695705911",
"index.html": "b95b2df11d8d1c51f4529847d236d661",
"/": "b95b2df11d8d1c51f4529847d236d661",
"main.dart.js": "a921be0b1323714027d2f1e68f5ea152",
"manifest.json": "29a12286d9a014e60badf0bdaa1a8906",
"version.json": "cfb9af0ea5c16a2b1741e9d07494a8c1"
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
	console.log("install request for:", "install1");

      console.log("install request for:", "install");
  self.skipWaiting();
  return event.waitUntil(

    caches.open(TEMP).then((cache) => {
		console.log("install request temp cache :",TEMP );
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {

		 console.log("Activate request :", "Activate st");
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
		  console.log("Activate request :", "no manifest");
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
		console.log("Activate request : no manifest:",contentCache);
        for (var request of await tempCache.keys()) {
			console.log("Activate request : no manifest: request", request);
          var response = await tempCache.match(request);
			console.log("Activate request : no manifest: response", response);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
		console.log("Activate request : no manifest: response json", new Response(JSON.stringify(RESOURCES)));
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
			 console.log("Activate request :", "Activate delete non macth cache"+request);
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
		 console.log("Activate request  :", request);
		 console.log("Activate response  :", response);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));

		 console.log("Activate request value :", new Response(JSON.stringify(RESOURCES)));

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
  if (event.request.method !== 'GET') {
		 console.log("fetch request :", event.request.method);
    return;
  }
  var origin = self.location.origin;
   console.log("fetch origin :", origin);
  var key = event.request.url.substring(origin.length + 1);
   console.log("fetch key :", key);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
    console.log("fetch key vv:", key);
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
    console.log("fetch key origin:", key);

  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    console.log("fetch key RESOURCES[key]:", RESOURCES[key]);
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {

    console.log("fetch key online:",key);
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {

    console.log("fetch CACHE_NAME:",CACHE_NAME);
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.

        console.log("fetch request:",event.request);

        console.log("fetch response:",response);

        return response ||
         fetch(event.request).then((response) => {
        console.log("fetch network request:",event.request);
          cache.put(event.request, response.clone());
             console.log("fetch network response:",response);
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
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
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

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
    console.log("fetch online:",event);
  return event.respondWith(
    
    fetch(event.request).then((response) => {
    console.log("fetch online event request:",event.request);
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
    console.log("fetch online event response:",response);
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
         console.log("fetch online catch event request name:",CACHE_NAME);
        return cache.match(event.request).then((response) => {
          if (response != null) {
            console.log("fetch online catch event response:",response);
            return response;
          }
          throw error;
        });
      });
    })
  );
}
