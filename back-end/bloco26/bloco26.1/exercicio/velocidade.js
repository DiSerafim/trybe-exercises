const readline = require('readline-sync');

function velocidadeMedia () {
  const distancia = readline.questionInt('Distância percorrida (m): ');
  const tempo = readline.questionInt('Tempo gasto (s): ');

  const velocidadeMed = (distancia / tempo).toFixed(2);
  console.log(`Velocidade média: ${velocidadeMed} m/s`);
}

velocidadeMedia();

// # veja o resultado
// # node velocidade.js
