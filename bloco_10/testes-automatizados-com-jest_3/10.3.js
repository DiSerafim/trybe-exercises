// Fundamentos do Desenvolvimento Web
// Bloco 10.3 - Testes automatizados com Jest
// Jest - Simulando comportamentos

// Conteúdos
// Documentação oficial >> https://jestjs.io/docs/expect

// Os Mocks
// O objetivo de se mockar uma função, módulo ou requisição é permitir a quem desenvolve ter controle sobre todo o funcionamento de seus testes.

// No exemplo abaixo, podemos ver um caso em que simular o comportamento da função seria necessário para o teste:
const retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);

const divisivelPorDois = () => (retornaNumeroAleatorio() % 2) === 0;

test('quando o número aleatório é par, a função retorna `true`', () => {
  expect(divisivelPorDois()).toBe(true); // Como garantimos que o número retornado será par?
});

/*
Mockar o comportamento da função retornaNumeroAleatorio() para garantir que ela está, nesse teste, retornando um número par, seria a solução pra esse impasse!

Dentre as principais formas de se mockar algo em Jest, destacam-se três:

jest.fn();
jest.mock();
jest.spyOn();
*/ 

// Mockando funções -----------------------

// jest.fn()
// - transforma uma função em uma simulação.
// - o comportamento definido no mock será chamado, em vez da função original.
// Imagine que a função geradora de cor aleatória seja essa e esteja no arquivo service.js :

// Esse teste deveria passar, não? Afinal, a função foi chamada logo acima dele. Mas ele não passa, e o erro nos indica o que fazer:
// Matcher error : received value must be a mock or spy function

// Mockando Módulos -------------------------

// jest.mock()
// mockar todo um pacote de dependências ou módulo de uma vez.
// Por exemplo: em um arquivo chamado math.js , temos as seguintes funções:

// Mock e funções assíncronas --------------------

//  Assim como nas demais implementações, podemos definir o retorno para apenas uma chamada com mockResolvedValueOnce(value) ou mockRejectedValueOnce(value) .
// Temos, num arquivo api.js , uma requisição para a API Estúdios Ghibli:

// Há também como limpar, resetar ou restaurar mocks . Existem três métodos capazes de fazer isso:
// mock.mockClear()
// Útil quando você deseja limpar os dados de uso de uma simulação entre dois expect s;
// mock.mockReset()
// Faz o que o mockClear() faz;
// Remove qualquer retorno estipulado ou implementação;
// Útil quando você deseja resetar uma simulação para seu estado inicial;
// mock.mockRestore()
// Faz tudo que mockReset() faz;
// Restaura a implementação original;
// Útil para quando você quer simular funções em certos casos de teste e restaurar a implementação original em outros;
// Como exemplo, imagine que você queira testar a função mockada somar implementando para ela um método de subtração, mas que depois você queira redefinir as implementações do mock .

// Para fixar
// Utilize as funções do arquivo 'math.js' para realizar os exercícios:

// ----------------Aula ao vivo----------------------------
// exemplos criados

// gus-generator.js
// gus-generator.test.js

// numbers.js