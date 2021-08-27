const readline = require('readline-sync');

function calculaArea() {
  const lado = readline.questionInt('Digite o valor do lado: ');

  if (lado < 0) throw new Error('O lado precisa ser positivo');
  
  const area = Math.pow(lado, 2);
  return area;
}

module.exports = calculaArea;
