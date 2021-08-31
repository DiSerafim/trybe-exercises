function doMath(a, b, c) {
  return new Promise((resolve, reject) => {
    // garante que todos os valores sejam numéricos
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
      //caso não seja 'number', rejeitamos
      reject('Imforme apenas números');
    // faz a soma
    const resultado = (a + b) * c;
    // valida o resultado se for maior que 50
    if (resultado < 50) 
      return reject('Valor muito baixo');
    
    resolve(resultado);
  });
}
// Chama a função nas condições de entrada e verifica sua saída
doMath(50, 10, 10)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))
// 200
doMath(1, 1, 50)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))
// Imforme apenas números
doMath(1, 50, 1)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))
  // Valor muito baixo

// criar as funções para gerar números aleatórios..
function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

function callDoMath() {
  /* Criamos um novo array de 3 posições
   * e utilizamos o `map` para gerar um número aleatório
   * para cada posição do Array
   */
  const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);
  // .. e chamar doMath
  doMath(...randomNumbers)
   .then(result => console.log(result))
   .catch(err => console.log(err.message))
}
