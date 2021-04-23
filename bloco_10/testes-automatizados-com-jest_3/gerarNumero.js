// ----------------Exercício do dia-------------------------

// gora, a prática

// 1. Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.
// gerarNumero.js <<<<<<
const gerarNumero = () => Math.floor(Math.random() * 101);

// -------------------------------------------------

// 4. Dentro de um mesmo arquivo, crie três funções. 
// Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.
// gerarNumero-4.test.js <<<<<

// A primeira deve receber uma string e retorná-la em caixa alta. 
const firstFn = (str) => str.toUpperCase();
// A segunda deve também receber uma string e retornar só a primeira letra. 
const secondFn = (str) => str.charAt(0);
// A terceira deve receber duas strings e concatená-las. 
const thirdFn = (str1, str2) => str1.concat(str2);

module.exports = {
  gerarNumero,
  firstFn,
  secondFn,
  thirdFn,
};
