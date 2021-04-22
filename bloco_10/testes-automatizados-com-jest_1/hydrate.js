// hydrate.js
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