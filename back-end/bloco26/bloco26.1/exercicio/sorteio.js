const readline = require('readline-sync');

// return para interromper a execução da função
// padrão de código conhecido com early return:
// retorna "mais cedo" pois uma determinada condição (no caso, a resposta estar certa)

function logResultado(numero, resultado) {
  if (numero !== resultado) {
    return console.log(`Opa, não foi dessa vez. O número era ${numero}`);
  }
  // se a execução do código entrar no if, a linha abaixo não será executada
  return console.log('Parabéns, número correto!');
}

function runGame() {
  const numero = parseInt(Math.random() * 10);

  const resultado = readline.questionInt(
    'Digite um número entre 0 e 10 para saber se é o número que estou pensando: '
  );

  logResultado(numero, resultado);

  const novamente = readline.question(
    'Deseja jogar novamente? (Digite s para sim, e qualquer outra coisa para não) '
  );

  // return mais cedo, elimina a necessidade do else
  if (novamente !== 's') return console.log('OK, até a próxima!');
  // Chamamos a mesma função para executar novamente o jogo.
  // Uma função que chama a si mesma é chamada de função **recursiva**
  runGame();
}

// Executamos o jogo pela primeira vez
runGame();