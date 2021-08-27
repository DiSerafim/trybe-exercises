const { expect } = require('chai');
const { readFile } = require('./readFile')
const sinon = require('sinon');
const fs = require('fs').promises;

describe('Chama a função "ReadFile"', () => {
  describe('Quando o arquivo é lido com sucesso', () => {
    describe('a resposta', () => {

      before(() => {
        sinon.stub(fs, 'readFile').resolves(FILE_CONTENT);
      });
      after(() => {
        fs.readFile.restore();
      });

      const FILE_CONTENT = 'Testes <3';

      it('é uma string', async() => {
        const resposta = await readFile('teste.txt');
        expect(resposta).to.be.a('string');
      });

      it('é iguall ao conteúdo do arquivo', async() => {
        const resposta = await readFile('teste.txt');
        expect(resposta).to.be.equal(FILE_CONTENT);
      });
    });
  });

  describe('Quando ocorre algum erro na leitura do arquivo', () => {
    describe('a resposta', () => {

      before(() => {
        sinon.stub(fs, 'readFile').rejects();
      });
      after(() => {
        fs.readFile.restore();
      });

      it('é igual a "null"', async() => {
        const resposta = await readFile('não-existe.txt');
        expect(resposta).to.be.equal(null);
      });
    });
  });
});
