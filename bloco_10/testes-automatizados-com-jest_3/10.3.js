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

// ----------------Exercício do dia-------------------------

// gora, a prática

// 1. Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.
// gerarNumero-1.js <<<<<<
// gerarNumero.test.js <<<<<

// 2. Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.
// gerarNumero-2.test.js <<<<<

// 3. Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.
// gerarNumero-3.test.js <<<<<

// 4. Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.
// gerarNumero-4.test.js <<<<<

// 5. Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.
// gerarNumero-5.test.js <<<<<


// 6. Crie uma função que faça requisição para a api dog pictures . Mocke a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess". O segundo deve interpretar que a requisição falhou e ter como valor "request failed". Crie todos os testes que achar necessário.
// gerarNumero-6.test.js <<<<<

// Bônus

// 1. O código abaixo utiliza uma API de piadas e implementa o fetchJoke , que é um gerador de piadas ruins . As piadas são geradas aleatoriamente através do endpoint armazenado em API_URL . Faça um teste que verifique a chamada dessa API para um resultado específico. Para isso, faça um mock do fetch , que faz a chamada à API , utilizando os seguintes dados:

// {
//   'id': '7h3oGtrOfxc',
//   'joke': 'Whiteboards ... are remarkable.',
//   'status': 200
// }
// Código do exercício

// const API_URL = 'https://icanhazdadjoke.com/';

// const fetchJoke = () => {
//   return fetch(API_URL, { headers: { Accept: 'application/json' }})
//     .then(response => response.json())
//     .then(data => data.joke);
// };