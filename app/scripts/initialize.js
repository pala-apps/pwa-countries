var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
  // [::1] is the IPv6 localhost address.
  window.location.hostname === '[::1]' ||
  // 127.0.0.1/8 is considered localhost for IPv4.
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  )
);

if ('serviceWorker' in navigator &&
    (window.location.protocol === 'https:' || isLocalhost)) {
  navigator.serviceWorker.register('sw.js')
  .then(function(registration) {
    console.log('in service worker setup')
    // updatefound is fired if service-worker.js changes.
    registration.onupdatefound = function() {
      // updatefound is also fired the very first time the SW is installed,
      // and there's no need to prompt for a reload at that point.
      // So check here to see if the page is already controlled,
      // i.e. whether there's an existing service worker.
      if (navigator.serviceWorker.controller) {
        // The updatefound event implies that registration.installing is set:
        // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
        var installingWorker = registration.installing;

        installingWorker.onstatechange = function() {
          switch (installingWorker.state) {
            case 'installed':
              // At this point, the old content will have been purged and the
              // fresh content will have been added to the cache.
              // It's the perfect time to display a "New content is
              // available; please refresh." message in the page's interface.
              break;

            case 'redundant':
              throw new Error('The installing ' +
                              'service worker became redundant.');

            default:
              // Ignore
          }
        };
      }
    };
  }).catch(function(e) {
    console.error('Error during service worker registration:', e);
  });
}

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.eu/rest/v1/all");
request.onload = function(){
  const countries = JSON.parse( request.responseText );
  displayCountries( countries )
}
request.send();

const countriesList = document.getElementById( 'countriesList' );

function displayCountries( countries ) {
  countries.forEach( ( country ) => {

    const li = document.createElement( 'li' );
    li.className = "collection-item avatar";

    const img = document.createElement( 'img' );
    img.src = `http://www.geonames.org/flags/x/${country.alpha2Code.toLowerCase()}.gif`
    img.className = "circle"

    li.appendChild( img );

    const span = document.createElement( 'span' )
    span.className = "title";
    span.innerText = country.name;

    li.appendChild( span )

    const p = document.createElement( 'p' );
    p.innerHTML= `${ country.capital } <br> ${ country.population }`

    li.appendChild( p );

    countriesList.appendChild( li );

  })
}
