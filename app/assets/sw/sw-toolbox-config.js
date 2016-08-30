toolbox.router.get( '/rest/v1/all', toolbox.fastest, {
  origin: /^https:\/\/restcountries.eu/
});

toolbox.router.get( '/images/flags/(.*)', toolbox.cacheFirst, {
  cache: { name: 'flag-cache' }
})

toolbox.router.get( '/fonts/(.*)', toolbox.cacheFirst, {
  cache: { name: 'font-cache' }
})
