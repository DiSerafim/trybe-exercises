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
  firstFn,
  secondFn,
  thirdFn,
};
