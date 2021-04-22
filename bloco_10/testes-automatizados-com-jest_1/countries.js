const countries = [
  { name: 'Senegal', population: 14799859, area: 196722 },
  { name: 'Alemanha', population: 81770900, area: 357114 },
  { name: 'Guadalupe', population: 400132, area: 13959 },
  { name: 'Bahamas', population: 378040, area: 13943 },
  { name: 'Guiana', population: 746900, area: 214969 },
  { name: 'Irlanda', population: 6378000, area: 70273 },
];

function menorPopulacao() {
  return countries.reduce((acc, country) =>
    acc.population < country.population ? acc : country, {}
  ).name;
}

function maiorPopulacao() {}

function mediaDePopulacao() {
  const totalPopulation = countries
    .reduce((acc, { population }) => acc + population, 0);

    return totalPopulation / countries.length;
}

module.exports = {
    menorPopulacao,
    maiorPopulacao,
    mediaDePopulacao
}
