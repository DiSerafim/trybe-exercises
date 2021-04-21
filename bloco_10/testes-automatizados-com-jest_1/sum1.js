// Exercício 
// 1. A função sum(a, b) retorna a soma do parâmetro a com o b
const sum1 = (a, b) => {
  if (typeof (a) !== 'number' || typeof (b) !== 'number') {
    throw new Error('parameters must be numbers');
  };
  // console.log(a + b);
  // console.log(0 + 0);
  // console.log(a + 'b');
  return a + b;
}
  
  module.exports = sum1;