// 4. Dentro de um mesmo arquivo, crie três funções. 
// A primeira deve receber uma string e retorná-la em caixa alta. 
// A segunda deve também receber uma string e retornar só a primeira letra. 
// A terceira deve receber duas strings e concatená-las. 

// Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.
// gerarNumero-4.test.js <<<<<

const service = require('./service');
jest.mock('./service');

describe('Testando implementações', () => {
  test('deve retornar a string em caixa baixa.', () => {
    service.firstFn.mockImplementation(a => a.toLowerCase());

    expect(service.firstFn('UPPERCASE')).toBe('uppercase');
    expect(service.firstFn).toHaveBeenCalled();
    expect(service.firstFn).toHaveBeenCalledTimes(1);
    expect(service.firstFn).toHaveBeenCalledWith("UPPERCASE");
  });

  test('uma nova implementação deve retornar a última letra de uma string', () => {
    service.secondFn.mockImplementation(a => a.charAt(a.length - 1));

    expect(service.secondFn("letter")).toBe("r");
    expect(service.secondFn).toHaveBeenCalled();
    expect(service.secondFn).toHaveBeenCalledTimes(1);
    expect(service.secondFn).toHaveBeenCalledWith("letter");
  });

  test('deve receber três strings e concatená-las.', () => {
    service.thirdFn.mockImplementation((a, b, c) => a.concat(b, c));

    expect(service.thirdFn("tr", "y", "be")).toBe("trybe");
    expect(service.thirdFn).toHaveBeenCalled();
    expect(service.thirdFn).toHaveBeenCalledTimes(1);
    expect(service.thirdFn).toHaveBeenCalledWith("tr", "y", "be");
  });
});