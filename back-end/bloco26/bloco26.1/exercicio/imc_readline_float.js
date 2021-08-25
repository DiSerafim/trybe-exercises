const readline = require('readline-sync');

const peso = readline.questionFloat('Qual o seu peso? (em kg) ');
const altura = readline.questionFloat('Qual a sua altura? (em cm) ' );

function indiceMassaCorporal() {
  console.log(`Peso: ${peso}, Altura: ${altura}`);
  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);
  console.log(`IMC: ${imc}`);
}

indiceMassaCorporal();

// # veja o resultado
// # node imc_readline_float.js
