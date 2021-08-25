const readline = require('readline-sync');

const peso = readline.questionFloat('Qual o seu peso? (em kg) ');
const altura = readline.questionFloat('Qual a sua altura? (em cm) ' );

function indiceMassaCorporal() {
  console.log(`Peso: ${peso}, Altura: ${altura}`);
  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);
  console.log(`IMC: ${imc}`);

  if (imc < 18.5) {
    console.log('Situação: Abaixo do peso (magreza)');
    return;
  }
  if (imc < 25) {
    console.log('Situação: Peso nornal');
    return;
  }
  if (imc < 30) {
    console.log('Situação: Acima do peso (sobrepeso)');
    return;
  }
  if (imc < 35) {
    console.log('Situação: Obesidade grau I');
    return;
  }
  if (imc < 40) {
    console.log('Situação: Obesidade grau II');
    return;
  }
  console.log('Situação: Obesidade graus III e IV');
}

indiceMassaCorporal();

// # veja o resultado
// # node imc_categoria.js 
