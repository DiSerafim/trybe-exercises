function renderCountry(country) {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML = `${country.nativeName} - ${country.capital}`;
    ul.appendChild(li);
    console.log(countries);
  }
  
  function fetchCountry(name) {
    return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then((response) => {
      response.json()
      .then((countries) => {
        renderCountry(countries[0]);
        fetch(`https://restcountries.eu/rest/v2/name/brazil`)
        .then(response) => {
          response.json()
            .then((countries) => {
              renderCountry(countries[0]);
            });
        };
      });
    });
  }
  window.onload = () => {
    fetchCountry('china');
  };