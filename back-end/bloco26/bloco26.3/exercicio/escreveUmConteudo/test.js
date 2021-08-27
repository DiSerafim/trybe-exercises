// exericio 4, 5;
const fs = require('fs');
const sinon = require('sinon'); // 5
const { expect } = require('chai');

const ecrevaUmConteudo = require('./ecrevaUmConteudo');

describe('Executa a função ecrevaUmConteudo', () => {
   // 5(before, after)
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });
  after(() => {
    fs.writeFileSync.restore();
  });

  describe('a resposta', () => {
    it('é uma "string"', () => {
      const resposta = ecrevaUmConteudo('arquivo.txt', '#vqv conteúdo');
      expect(resposta).to.be.a('string');
    });

    it('é igual a "ok"', () => {
      const resposta = ecrevaUmConteudo('arquivo.txt', '#vqv conteúdo');
      expect(resposta).to.be.equals('ok');
    });
  });
});