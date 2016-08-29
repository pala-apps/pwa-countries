toolbox.router.get( '/rest/v1/all', toolbox.fastest, {
  origin: /^https:\/\/restcountries.eu/
});

toolbox.router.get( '/flags/x/(.*)', toolbox.cacheFirst, {
  cache: { name: 'flag-cache' },
  origin: /^http:\/\/www.geonames.org/
})
