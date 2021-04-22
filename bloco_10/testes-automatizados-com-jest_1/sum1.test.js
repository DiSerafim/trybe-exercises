// sum.test.js
// // Exercício

const sum1 = require("./sum1");

describe('sum1', () => {
  // 2. Teste se o retorno de sum(4, 5) é 9
  test('4 plus 5 equals 9', () => {
      expect(sum1(4, 5)).toBe(9); // 9
  });

  // 3. Teste se o retorno de sum(0, 0) é 0
  test('0 plus 0 equals 0', () => {
    expect(sum1(0, 0)).toBe(0); // 0
  });

  // 4. Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
  test('throws an error when a strig is passed', () => {
    expect(() => {
      sum1(4, '5'); // 45
    }).toThrow();
  })

  // 5. Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
  test('error message is "parameters must be numbers"', () => {
    expect(() => {
      sum1(4, '5')
    }).toThrow(/parameters must be numbers/);
  });
});