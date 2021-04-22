// hydrate.js

// string recebida
'1 cerveja'
// retorno da função
'1 copo de água'

// string recebida
'1 cerveja, 2 shots e 1 catuaba'
// retorno da função
'4 copos de água'

// string recebida
'2 caipirinhas'
// retorno da função
'2 copos de água'

const hydrate = (string) => {
  const splitString = string.split('');
  const result = splitString.reduce((glassesOfWater, character) => {
    let parsedCharacter = parseInt(character);
    let checkCharacter = isNaN(parsedCharacter) === false;
    if (checkCharacter) { return glassesOfWater + parsedCharacter };
    return glassesOfWater;
  }, 0);

  const pluralGlass = result === 1 ? 'copo' : 'copos';
  console.log(`${result} ${pluralGlass} de água`);
  return `${result} ${pluralGlass} de água`;
};

module.exports = hydrate;