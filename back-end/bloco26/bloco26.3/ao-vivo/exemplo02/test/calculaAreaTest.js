const { expect } = require('chai');
const calculaArea = require('../calculaArea');
const sinon = require('sinon');
const readline = require('readline-sync');

describe('Executa o script CalculaArea', () => {
  describe('a resposta', () => {
    // Dublê
    before(() => {
      sinon.stub(readline, 'questionInt').returns(10);
    });
    after(() => {
      readline.questionInt.restore()
    });

    it('é um "number"', () => {
      const resposta = calculaArea();
      expect(resposta).to.be.a('number');
    });

    it('é igual a "100" se o lado for "10"', () => {
      const resposta = calculaArea();
      expect(resposta).to.be.equal(100);
    });
  });
  describe('Se o lado for negativo', () => {
    describe('a resposta é', () => {
      // Dublê
      before(() => {
        sinon.stub(readline, 'questionInt').returns(-10);
      });
      after(() => {
        readline.questionInt.restore();
      });

      it('Deve dar um erro', () => {
        // throws(erros)
        expect(() => calculaArea()).to.throws();
      });
    });
  });
});
