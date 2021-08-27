// Exercício 1, 3:
const { expect } = require('chai');
const numNaturalFn = require('./positivoNegativoNeutro.js');

describe('Executa a função numNaturalFn', () => {
  describe('quando o número for maior que 0', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const resposta = numNaturalFn(10);
        expect(resposta).to.be.a('string');
      });

      it('é igual a "positivo"', () => {
        const resposta = numNaturalFn(10);
        expect(resposta).to.be.equals('positivo');
      });
    });
  });

  describe('quando o número for menor que 0', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const resposta = numNaturalFn(-10);
        expect(resposta).to.be.a('string');
      });

      it('é igual a "negativo"', () => {
        const resposta = numNaturalFn(-10);
        expect(resposta).to.be.equals('negativo');
      });
    });
  });

  describe('quando o número for igual a 0', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const resposta = numNaturalFn(0);
        expect(resposta).to.be.a('string');
      });

      it('é igual a "neutro"', () => {
        const resposta = numNaturalFn(0);
        expect(resposta).to.be.equals('neutro');
      });
    });
  });
  
  // Exercício 3:
  describe('quando o parâmetro passado não é um número', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const resposta = numNaturalFn('Texto');
        expect(resposta).to.be.a('string');
      });
  
      it('é igual a "o parâmetro deve ser um número"', () => {
        const resposta = numNaturalFn('Texto');
        expect(resposta).to.be.equals('o parâmetro deve ser um número');
      });
    });
  });
});