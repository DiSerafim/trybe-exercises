// Aula ao vivo, prof° 'Icaro'
// Ex 01 - 'Programa'

const romanValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romanSymbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

const convertToRoman = (integer) => {
  if (integer <= 0) {
    throw new Error('Informe um número maior do que 0');
  }
  
  let romanNumeral = '';
  romanValues.forEach((romanValue, index) => {
      while (integer >= romanValue) {
        integer -= romanValue;
        romanNumeral += romanSymbols[index];
      }
  });
  return romanNumeral;
}

module.exports = convertToRoman;