// Aula ao vivo

const { gusGenerator } = require('./gus-generator');
const { generateRandomNumber } = require('./numbers');

jest.mock('./numbers', () => ({
  generateRandomNumber: jest.fn()
    .mockReturnValueOnce(1)
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(3)
    .mockReturnValue(4),
}));

jest.mock('pensador-api', () => jest.fn().mockResolvedValue({
  phrases: [{
    author: 'Flávio Oliveira',
    text: 'Xablau',
  }, {
    author: 'Dângelo Silva',
    text: 'Xablau',
  }, {
    author: 'Renato Souza',
    text: 'Xablau',
  }, {
    author: 'Fábio Venancio Oliveira',
    text: 'Xablau',
  },{
    author: 'Eduarda Wiltiner',
    text: 'Xablau',
  }]
}))


describe('GusGenerator tests', () => {
  test('Verifica se a função gusGenerator retorna uma frase de acordo com o termo', () => {
    expect.assertions(2);
    return gusGenerator('chocolate').then((phrase) => {
      expect(phrase).toBe('Como diria Dângelo Silva: \"Xablau\"');

      expect(generateRandomNumber).toHaveBeenCalledTimes(1);
    });
  });
});