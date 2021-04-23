// Aula ao vivo

const getPhrasesByTerm = require('pensador-api');
const { generateRandomNumber } = require('./numbers');

function gusGenerator(term) {
  return getPhrasesByTerm({ term, max: 5 })
    .then(({ phrases }) => {
      const index = generateRandomNumber(5);
      return `Como diria ${phrases[index].author}: "${phrases[index].text}"`;
    })
    .catch((err) => {
      console.log(err);
      return "Como diria Albert Einstein: \"Deu ruim na API \""
    });
}

module.exports = {
  gusGenerator
}