const readline = require('readline-sync');

function elemento(n) {
  // armazena o ultimo número calculado
  let a = 1;
  // armazena o penultimo número calculado
  let b = 1
  // repete o loop enquanto 'n' for maior que 0
  for (; n >= 0; n--) {
    if (b) console.log(b);
    // guarda o ultimo valor calculado em uma variavel temporaria
    const temporario = a;
    // o novo valor é a soma do ultimo valor com o penultimo valor
    // 'a' passa a ser o ultimo valor caulculado
    a = a + b;
    // 'temporario' passa a ser o penultimo valor, e armazenamos em 'b'
    b = temporario;
  }
  console.log(b);
  return b;
}
function calculo() {
  const n = readline.questionInt('Digite um número: ');
  if (n <= 0 ) {
    console.log('Digite um número maior que 0!')
    return;
  }
  console.log(`n: ${n}`);
  elemento(n - 2);
}
calculo();