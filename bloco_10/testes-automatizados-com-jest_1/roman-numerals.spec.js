// Aula ao vivo, prof° 'Icaro'
// Ex 01 - 'Teste' 
const convertToRoman = require('./roman-numerals');
const assert = require('assert');
const { test, expect } = require('@jest/globals');

describe('Testa a função convertToRoman', () => {
  test('Convert os números de 1 a 4', () => {
    expect(convertToRoman(1)).toBe('I');  // matchers
    expect(convertToRoman(2)).toBe('II');
    expect(convertToRoman(3)).toBe('III');
    expect(convertToRoman(4)).toBe('IV');
  });

  test('Converte os números de 5 a 9', () => {
      expect(convertToRoman(5)).toBe('V');
      expect(convertToRoman(6)).toBe('VI');
      expect(convertToRoman(7)).toBe('VII');
      expect(convertToRoman(8)).toBe('VIII');
      expect(convertToRoman(9)).toBe('IX');
  });

  test('Exibe uma mensagem de erro quando o número é negativo', () => {
    expect(() => convertToRoman(-1)).toThrow('Informe um número maior do que 0');
  });
});
