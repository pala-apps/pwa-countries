toolbox.router.get( '/rest/v1/all', toolbox.fastest, {
  origin: /^https:\/\/restcountries.eu/
});

toolbox.router.get( '/flags/(.*)', toolbox.fastest, {
  origin: /^https:\/\/www.countries-ofthe-world.com/
})
