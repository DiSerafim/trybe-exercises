const readline = require('readline-sync');

// Lista de script
const scripts = [
  // objetos com 'name' e 'script' para facilita a criação da lista que será exibida
  { name: 'Calcular IMC', script: './imc.js' },
  { name: 'Calcular velocidade média', script: './velocidade.js' },
  { name: 'Jogo de advinhação', script: './sorteio.js' },
  { name: 'Fatorar um número', script: './fatorial.js' },
];
// itera sobre o script para criar a lista numerada
let mensagem = scripts.map((script, index) => `${index + 1} - ${script.name}`);
// adiciona uma linha a mais no começo da mensagem
mensagem = mensagem.join('\n');
const scriptNumber = readline.questionInt(mensagem) - 1;
const script = scripts[scriptNumber];
if (!script) return console.log('Número inválido');

require(script.script);
