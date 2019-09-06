importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  //console.log(`Yay! Workbox is loaded 🎉`);

  //Precaching
  workbox.precaching.precacheAndRoute([
    'assets/css/app.min.css',
    'assets/js/vendor.min.js',
    'assets/js/app.min.js',
    { url: 'index.html'},
	]);

  //Cache JS
	workbox.routing.registerRoute(
	  /\.js$/,
	  new workbox.strategies.NetworkFirst()
	);

	 //Cache CSS
	workbox.routing.registerRoute(
	  // Cache CSS files.
	  /\.css$/,
	  // Use cache but update in the background.
	  new workbox.strategies.StaleWhileRevalidate({
	    // Use a custom cache name.
	    cacheName: 'css-cache',
	  })
	);

	//Cache image
	workbox.routing.registerRoute(
	  // Cache image files.
	  /\.(?:png|jpg|jpeg|svg|gif)$/,
	  // Use the cache if it's available.
	  new workbox.strategies.CacheFirst({
	    // Use a custom cache name.
	    cacheName: 'image-cache',
	    plugins: [
	      new workbox.expiration.Plugin({
	        // Cache only 20 images.
	        maxEntries: 20,
	        // Cache for a maximum of a week.
	        maxAgeSeconds: 7 * 24 * 60 * 60,
	      })
	    ],
	  })
	);
} else {
  //console.log(`Boo! Workbox didn't load 😬`);
}