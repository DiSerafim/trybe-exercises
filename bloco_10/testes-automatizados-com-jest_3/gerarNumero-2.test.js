// 2. Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.
const service = require('./gerarNumero');

test("Teste que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo.", () => {
    service.gerarNumero = jest.fn().mockImplementationOnce((a, b) => a / b);
  
    expect(service.gerarNumero(10, 2)).toBe(5);
    expect(service.gerarNumero).toHaveBeenCalled();
    expect(service.gerarNumero).toHaveBeenCalledTimes(1);
    expect(service.gerarNumero).toHaveBeenCalledWith(10, 2);
  });
  