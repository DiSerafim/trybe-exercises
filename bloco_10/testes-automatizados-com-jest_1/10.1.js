// Fundamentos do Desenvolvimento Web
// Bloco 10 - Testes automatizados com Jest
// Primeiros passos no Jest

// Conteúdos
// Documentação oficial >> https://jestjs.io/docs/expect

// Vá para 'sum.test.js'

// Expect e matchers
//  documentação oficial >> https://jestjs.io/docs/en/expect

// toBe
// igualdade estrita >> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

// expect(5).toBe("5")

// toEqual
let name = "Pedro";
let firstName = name;

name = "Carol";

console.log(name); // Carol
console.log(firstName); // Pedro

// ------------------------

let myName = { firstName: "Pedro" };
let identity = myName;

myName.firstName = "Carol";

console.log(myName.firstName); // Carol
console.log(identity.firstName); // Carol

// ---------------------------
// Veja o resultado em sum.test.js
test('array and object equality', () => {
  const arr = [1, 2 ,3];
  const obj = { a: 1, b: 2, c: 3};

  expect(arr).toBe([1, 2, 3]); // fails
  expect(obj).toBe({ a: 1, b: 2, c: 3}); // fails
  expect(arr).toEqual([1, 2, 3]); // OK
  expect(obj).toEqual({ a: 1, b: 2, c: 3}); // OK
});


// not
// Veja o resultado em sum.test.js
const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekDays = ['Sunday', ...workDays, 'Saturday'];

test('Sunday is a week day', () => {
  expect(weekDays).toContain('Sunday');
});

test('Sunday is not a workday', () => {
  expect(workDays).not.toContain('Sunday');
});

// Valores booleanos
// documentação do Jest >> https://jestjs.io/docs/en/using-matchers#truthiness

// Números
// documentação do Jest >> https://jestjs.io/docs/pt-BR/using-matchers#n%C3%BAmeros

// Strings
// documentação do Jest >> https://jestjs.io/docs/pt-BR/expect#tomatchregexporstring


// Exceções
// toThrow >> https://jestjs.io/docs/pt-BR/expect#tothrowerror
const multiplyByTwo = (number) => {
  if (!number) {
    throw new Error('number é indefinido')
  }
  return number * 2;
};
multiplyByTwo(4);

test('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
  expect(multiplyByTwo(4)).toBe(8);
});
test('testa se é lançado um erro quando number é indefinido', () => {
  expect(() => { multiplyByTwo() }).toThrow();
});
test('testa se a mensagem de erro é "number é indefinido"', () => {
  expect(() => { multiplyByTwo() }).toThrowError(new Error('number é indefinido'));
});

// 

function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);

// 2. faça uma função que retorne o array oddsAndEvens em ordem crescente.
// - Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// - Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

console.log(oddsAndEvens);

// -------------------------------------
// Agora a prática
// Exercício-----------------------------------------------------------------

// Parte I <<<<<

// 1. Refaça os exercícios 1 a 5 do conteúdo de Testes unitários em JavaScript, dessa vez utilizando Jest.
// Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// - Modifique a estrutura da função para que ela seja uma arrow function.
// - Modifique as concatenações para template literals.
// Veja 'sum1.js' <<<<<<<<<<<<<<<<

// Parte II <<<<<

// No Bloco 4 você desenvolveu um projeto para testar os seus conhecimentos em Javascript e lógica de programação: o Playground functions. Nos exercícios a seguir, você irá trabalhar com os testes para algumas funções que você criou! Aproveite para refatorá-las e usar todos os recursos que já aprendemos até aqui, como as Higher Order Functions e as features do Javascript ES6.

// 1. Para as funções encode e decode crie os seguintes testes:
// veja em >>> encodeDecode.test.js <<<


// 2. A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto com a seguinte estrutura:
/*
*/
// Implemente a função techList a partir dos testes abaixo. Experimente refatorar a função que você criou para esse projeto! É importante nunca alterar os testes ou as variáveis já escritas no código .

// veja em >>> techList.js <<<


// 3. A função hydrate recebe uma string no formato "numero bebida", e retorna a sugestão de quantos copos de água você deve beber para se hidratar. Para cada bebida, deve-se tomar um copo de água para não ter ressaca. Exemplo:

// veja em >>> hydrate.js <<<

// string recebida
'1 cerveja'
// retorno da função
'1 copo de água'

// string recebida
'1 cerveja, 2 shots e 1 catuaba'
// retorno da função
'4 copos de água'

// string recebida
'2 caipirinhas'
// retorno da função
'2 copos de água'

// Implemente a função hydrate a partir dos testes abaixo. Experimente refatorar a função que você criou para o projeto Playground Function! É importante nunca alterar os testes ou as variáveis já escritas no código .

// Bônus

// 1. Você está pronto para um desafio?! Neste exercício, você irá praticar o desenvolvimento orientado a testes implementando:

// A função;
// Os testes para essa função;

// Considere os dados abaixo. Você deve criar uma função que receba dois parâmetros: o id do funcionário e a informação disponível sobre ele ( firstName , lastName , specialities ). Você também deverá criar os testes para essa função. Sua função deverá então retornar os resultados da busca pelo id para aquele funcionário e a informação consultada. Caso o id não conste no quadro de funcionários, sua função deve retornar o erro "ID não identificada" . Se a informação que se quer acessar não existir, a função deve retornar o erro "Informação indisponível" .

// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  // Implemente seu código aqui
};

// Como ponto de partida, comece implementando um teste para checar se a função existe. Execute o teste que você escreveu e implemente, na função, a funcionalidade que passará nesse teste. Repita esse processo até que todos os retornos esperados sejam testados.
