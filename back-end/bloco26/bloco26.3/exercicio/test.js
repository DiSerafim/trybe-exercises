// Exercício 1, 3, 4, 5:
const fs = require('fs'); // 4
const sinon = require('sinon'); // 5
const { expect } = require('chai');
const numerosNaturais = require('./positivoNegativoNeutro');
const escrevaArquivo = require('./escrevaArquivo'); // 4, 5

describe('Executa a funçção numerosNaturais', () => {
  describe('Quando o número for maior que 0', () => {
    describe('A resposta', () => {
      it('é uma "string"', () => {
        const resposta = numerosNaturais(10);
        expect(resposta).to.be.a('string');
      });

      it('é igual a "positivo"', () => {
        const resposta = numerosNaturais(10);
        expect(resposta).to.be.equals('positivo');
      });
    });
  });
  
  describe('Quando o número for menor que 0', () => {
    describe('a resposta', () => {
    it('é uma "string"', () => {
      const resposta = numerosNaturais(-10);
      expect(resposta).to.be.a('string');
    });
    
    it('é igual a "negativo"', () => {
      const resposta = numerosNaturais(-10);
      expect(resposta).to.be.equals('negativo');
    });
    });
  });

  describe('Quando o número for igual a 0', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const resposta = numerosNaturais(0);
        expect(resposta).to.be.a('string');
      });
      
      it('é igual a "neutro"', () => {
        const resposta = numerosNaturais(0);
        expect(resposta).to.be.equals('neutro');
      });
    });
  });
});

// Exercício 3:
describe('Quando o parâmetro passado não é número', () => {
  describe('a resposta', () => {
    it('é uma "string"', () => {
      const resposta = numerosNaturais('Texto');
      expect(resposta).to.be.a('string');
    });

    it('é igual a "o parâmetro deve ser número"', () => {
      const resposta = numerosNaturais('Texto');
      expect(resposta).to.be.equals('oparâmetro deve ser número');
    });
  });
});

// Exercício 4:
describe('Executa a função  escrevaArquivo', () => {
  // Exercício 5 (before, after)
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });
  after(() => {
    fs.writeFileSync.restore();
  });

  describe('a resposta', () => {
    it('é uma "string"', () => {
      const resposta = escrevaArquivo('arquivo.txt', '#vqv conteúdo');
      expect(resposta).to.be.a('string');
    });

    it('é igual a "ok"', () => {
      const resposta = escrevaArquivo('arquivo.txt', '#vqv conteúdo');
      expect(resposta).to.be.equals('ok');
    });
  });
});

module.exports = (nomeDoArquivo, conteudoDoArquivo) => {
  fs.writeFileSync(`${__dirname}/${nomeDoArquivo}`, conteudoDoArquivo);
  return 'ok';
};
