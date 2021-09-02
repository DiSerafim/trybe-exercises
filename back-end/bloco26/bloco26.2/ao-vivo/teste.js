// const multiplicar = (a, b) => a * b;
// const calcularPorcentagem = (a, b) => multiplicar(a, b/100);
// console.log(calcularPorcentagem(100, 20));

const fs = require('fs');

fs.readFile('script.md', function (err, content) {
  if (err) {
    console.log(err);
  } else {
    console.log(content);
    console.log(content.toString());
  }
});
// resultado
// └─# node teste.js
