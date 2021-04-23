// 3. Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.
// gerarNumero-3.test.js <<<<<

const service = require('./gerarNumero');

describe('Testando implementações', () => {
  test('Implementação que receba três parâmetros e retorne sua multiplicação', () => {
    service.gerarNumero = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(service.gerarNumero(2, 3, 4)).toBe(24);
    expect(service.gerarNumero).toHaveBeenCalled();
    expect(service.gerarNumero).toHaveBeenCalledTimes(1);
    expect(service.gerarNumero).toHaveBeenCalledWith(2, 3, 4);
  });

  test('Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro.', () => {
    service.gerarNumero.mockReset();
    expect(service.gerarNumero).toHaveBeenCalledTimes(0);

    service.gerarNumero.mockImplementation( a => a * 2);

    expect(service.gerarNumero(5)).toBe(10);
    expect(service.gerarNumero).toHaveBeenCalled();
    expect(service.gerarNumero).toHaveBeenCalledTimes(1);
    expect(service.gerarNumero).toHaveBeenCalledWith(5);
  });
});
