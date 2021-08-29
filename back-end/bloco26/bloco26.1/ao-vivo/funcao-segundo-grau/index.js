const readline = require('readline-sync');

function executaCalculo() {
  const a = readline.questionInt('Digite o valor de a: ');
  const b = readline.questionInt('Digite o valor de b: ');
  const c = readline.questionInt('Digite o valor de c: ');
  const delta = calculaDelta(a, b, c);
  if (delta < 0) {
    console.log('Impossível fazer calculo de Delta negativo');
    return;
  }
  const resultado = calculaX(a, b, delta);
  console.log(`Resultado: X1 = ${resultado.x1}; X2 = ${resultado.x2}`);
}
function calculaDelta(a, b, c) {
  // exponeiciação Math.pow(b, 2)
  return Math.pow(b, 2) - 4 * a * c;
}
function calculaX(a, b, delta) {
  // raiz quadrada Math.sqrt(delta)
  const x1 = ((-b + Math.sqrt(delta)) / (2 * a));
  const x2 = ((-b - Math.sqrt(delta)) / (2 * a));

  return { x1, x2 }
}

executaCalculo();
