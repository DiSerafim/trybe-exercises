// encodeDecode.test.js
const { encode, decode } = require('./encodeDecode.js');

describe('Testa a função encode e decode', () => {
  // definindo encode
  it('a função encode é definida', () => {
    expect(encode).toBeDefined();
  });

  // 1 Teste se encode e decode são funções;
  // encode
  it('encode é uma função', () => {
    expect(typeof encode).toEqual('function');
  });
  // decode
  it('decode é uma função', () => {
    expect(typeof decode).toEqual('function');
  });

  // 2 Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
  it('converte apenas a vogal "a" no número 1', () => {
    expect(encode('a')).toEqual('1');
  });
  it('converte apenas a vogal "e" no número 2', () => {
    expect(encode('e')).toEqual('2');
  });
  it('converte apenas a vogal "i" no número 3', () => {
    expect(encode('i')).toEqual('3');
  });
  it('converte apenas a vogal "o" no número 4', () => {
    expect(encode('o')).toEqual('4');
  });
  it('converte apenas a vogal "u" no número 5', () => {
    expect(encode('u')).toEqual('5');
  });

  // 3 Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente;
  it('converte apenas o número 1 na vogal a', () => {
    expect(decode('1')).toEqual('a');
  });
  it('converte apenas o número 2 na vogal e', () => {
    expect(decode('2')).toEqual('e');
  });
  it('converte apenas o número 3 na vogal i', () => {
    expect(decode('3')).toEqual('i');
  });
  it('converte apenas o número 4 na vogal o', () => {
    expect(decode('4')).toEqual('o');
  });
  it('converte apenas o número 5 na vogal u', () => {
    expect(decode('5')).toEqual('u');
  });

  // 4 Teste se as demais letras/números não são convertidos para cada caso;
  // de letra para número
  it('converte apenas a vogal "a" no número 1', () => {
    expect(encode('ana')).toEqual('1n1');
  });
  it('converte apenas a vogal "e" no número 2', () => {
    expect(encode('ele')).toEqual('2l2');
  });
  it('converte apenas a vogal "i" no número 3', () => {
    expect(encode('xixi')).toEqual('x3x3');
  });
  it('converte apenas a vogal "o" no número 4', () => {
    expect(encode('ovo')).toEqual('4v4');
  });
  it('converte apenas a vogal "u" no número 5', () => {
    expect(encode('nu')).toEqual('n5');
  });

  // de número para letra
  it('converte apenas o número 1 na vogal a', () => {
    expect(decode('1n1')).toEqual('ana');
  });
  it('converte apenas o número 2 na vogal e', () => {
    expect(decode('2l2')).toEqual('ele');
  });
  it('converte apenas o número 3 na vogal i', () => {
    expect(decode('x3x3')).toEqual('xixi');
  });
  it('converte apenas o número 4 na vogal o', () => {
    expect(decode('4v4')).toEqual('ovo');
  });
  it('converte apenas o número 5 na vogal u', () => {
    expect(decode('n5')).toEqual('nu');
  });

  // 5 Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.
  it('checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(encode('trybe').length).toEqual(5);;
  });
});