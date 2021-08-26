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
doMath(10, 10, 10)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))
// 200
doMath(1, 1, 'a')
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))
// Imforme apenas números
doMath(1, 1, 1)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))
  // Valor muito baixo
