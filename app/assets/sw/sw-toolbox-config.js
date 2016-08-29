toolbox.router.get( '/rest/v1/all', toolbox.fastest, {
  origin: /^https:\/\/restcountries.eu/
});

// var MISSING_IMAGE = '/images/placeholder.png';
// toolbox.cache( { la: MISSING_IMAGE } );
// toolbox.precache([MISSING_IMAGE])
// caches.add( MISSING_IMAGE )
// console.log('toolbox', toolbox)

// function imageHandler( request, values, options ) {

  // var newReq = new Request(request, {mode:'cors'})

  // console.log('new request Yo', newReq)

  // return fetch(request).then(function(response){
  //   console.log('response', response)
  //   return response
  // })

  // return toolbox.cacheFirst( request, values, options )
  // .then( function( res, second ) {
  //   console.log( "request nOnly", res )
  //   return caches.match( MISSING_IMAGE )
  // })
  // .catch( function(res) {
  //   console.log('in catch YO', res)
  //   return caches.match( MISSING_IMAGE )
  // })
// }

toolbox.router.get( '/flags/x/(.*)', toolbox.cacheFirst, {
  cache: { name: 'flag-cache' },
  origin: /^http:\/\/www.geonames.org/,
  // successResponses: /200$/,
  debug: true
})
