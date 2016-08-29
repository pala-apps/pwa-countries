toolbox.router.get( '/rest/v1/all', toolbox.fastest, {
  origin: /^https:\/\/restcountries.eu/
});

var MISSING_IMAGE = '/images/placeholder.png';
// toolbox.cache( { la: MISSING_IMAGE } );
toolbox.precache([MISSING_IMAGE])
// caches.add( MISSING_IMAGE )
// console.log('toolbox', toolbox)

function imageHandler( request, values, options ) {
  // return new Response()
  // return caches.match( MISSING_IMAGE )
  //

  request.mode = 'cors'

  console.log('request', request)
  //
  return fetch(request.clone()).then(function(response){
    console.log('response', response)
    return response
  })

  // return toolbox.cacheFirst( request, values, options )
  // .then( function( res, second ) {
  //   console.log( "request nOnly", res )
  //   return caches.match( MISSING_IMAGE )
  // })
  // .catch( function(res) {
  //   console.log('in catch YO', res)
  //   return caches.match( MISSING_IMAGE )
  // })
}

toolbox.router.get( '/flags/(.*)', imageHandler, {
  cache: { name: 'image-cache' },
  origin: /^https:\/\/www.countries-ofthe-world.com$/,
  successResponses: /200$/,
  debug: true
})
