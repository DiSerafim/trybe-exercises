const readline = require('readline-sync');

function fatorarNumero(x) {
  // se 'x' for 0 ou 1 ?retorna 1 :se não continua a fatoração multiplicando 'x' pelo fatoral de 'x - 1'
  return [0, 1].includes(x) ? 1 : x * fatorarNumero(x -1);
  // Uma função que chama a si mesma é chamada de função 'recursiva'
}
function calcular() {
  const x = readline.questionInt('Qual número fatorar: ');
  if (x <= 0) {
    console.log('Tem que ser maior que 0!')
    return;
  }
  console.log(`Fatoral de: ${x}`);
  const resultado = fatorarNumero(x);
  console.log(`É: ${resultado}`);
}

calcular();
