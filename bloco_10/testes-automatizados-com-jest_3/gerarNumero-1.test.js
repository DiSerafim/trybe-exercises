// ----------------Exercício do dia-------------------------

// gora, a prática

// 1. Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.
// gerarNumero.test.js <<<<<
const service = require('./gerarNumero');

test("Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.", () => {
  service.gerarNumero = jest.fn().mockReturnValue(10);

  expect(service.gerarNumero()).toBe(10);
  expect(service.gerarNumero).toHaveBeenCalled();
  expect(service.gerarNumero).toHaveBeenCalledTimes(1);
});

