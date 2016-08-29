toolbox.router.get( '/rest/v1/all', toolbox.fastest, {
  origin: /^https:\/\/restcountries.eu/
});

var MISSING_IMAGE = '/images/placeholder.png';
toolbox.precache([MISSING_IMAGE])

function imageHandler( request, values, options ) {

  return caches.match( MISSING_IMAGE )

}

toolbox.router.get( '/flags/(.*)', imageHandler, {
  cache: { name: 'image-cache' },
  origin: /^https:\/\/www.countries-ofthe-world.com$/,
  debug: true
})
