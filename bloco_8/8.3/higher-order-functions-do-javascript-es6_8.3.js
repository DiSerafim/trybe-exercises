// Fundamentos do Desenvolvimento Web

// Bloco 08:
// JavaScript ES6 - Higher Order Functions - map e filter

// O que vamos aprender?

// Hoje você vai aprender sobre outras duas Higher Order Functions : Array.map e o Array.filter
// A função map é, talvez, uma das mais poderosas (e complexas!) funções para manipulação e criação de arrays. Em conjunto, essas HOFs deixarão seu código mais legível, conciso e expressivo.

// Você será capaz de:
// Utilizar a função Array.map para manipular e construir arrays;
// Utilizar a função Array.filter para filtrar um array;
// Aprender a usar de forma conjunta as Higher Order Functions.

// Por que isso é importante?
// Como já viu na primeira parte, as HOFs ajudam bastante a reduzir o código e deixá-lo mais compreensível. As HOFs de hoje são um pouco mais complicadas, mas você usará elas bastante no seu código daqui pra frente e logo estará tirando-as de letra!

// Conteúdos
Array.filter
// O filter é bem parecido com o find . O que o filter traz de novo é que, ao vez de retornar apenas um elemento do array, ele retornará outro array com todos os elementos que satisfaçam à condição verificada pela função.
const enviarEmail = (pessoaAprovada) => {
    const parte1 = `${pessoaAprovada.email}: Parabens ${pessoaAprovada.nome}`;
    const mensagem = `${parte1} sua nota foi ${pessoaAprovada.nota}`;
    console.log(mensagem);
}

const listaDePessoasAprovadas = [
    {nome: 'Jerry Mors', email: 'jerry@example.com', nota: 51 },
    {nome: 'Rabbit Jessica', email: 'jessica@example.com', nota: 101 },
    {nome: 'Ada Lovelace', email: 'ada@example.com', nota: 150 },
    {nome: 'Bruno Gomes', email: 'bruno@example.com', nota: 0 },
    {nome: 'Augusina Vega', email: 'augustina@example.com', nota: 101 },
    {nome: 'Daniel Soto', email: 'daniel@example.com', nota: 50 },
    {nome: 'Emiliano Domingues', email: 'emiliano@example.com', nota: 150 },
    {nome: 'Carla Neta', email: 'carla@example.com', nota: 100 },
];
const pessoasFiltradas = listaDePessoasAprovadas.filter((pessoa) => pessoa.nota >= 100);
pessoasFiltradas.forEach((pessoa) => enviarEmail(pessoa));

// No exemplo abaixo, apenas substituiremos o find por filter.
const numbers = [19, 21, 30, 3, 45, 22, 15];
const verifyEven = (number) => number % 2 === 0;
const isEven = numbers.filter(verifyEven);
console.log(isEven); // [ 30, 22 ]

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.filter((number) => number % 2 === 0);
console.log(isEven2); // [ 30, 22 ]
// Verifique que o retorno foi um array com os dois números pares do array numbers.

// Olhe este outro exemplo de apenas pegar os elementos que não possuem alguma condição. Neste caso, deseja-se apenas as pessoas que não possuem ainda idade para dirigir:
const objPeople = [
    { name: 'José', age: 21 },
    { name: 'Lucas', age: 19 },
    { name: 'Maria', age: 16 },
    { name: 'Gilberto', age: 18 },
    { name: 'Vitor', age: 15 },
  ];
const verifyAgeDrive = (arrayOfPeople) => (
arrayOfPeople.filter((people) => (people.age < 18))
);
console.log(verifyAgeDrive(objPeople)); // [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]

// Outra forma de se usar o filter é retornar um array sem o elemento desejado. É preciso remover o Ricardo do objeto agora, já que ele não é mais um estudante.
const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];
const removeStudentByName = (name, listStudents) =>
   listStudents.filter((student) => student !== name); // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.
const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);
console.log(newListStudents); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]
// Observe que o filter foi usado dentro de uma função que recebe dois parâmetros, o array de valores e uma string, o que será removido. A condição de dentro do filter é para retornar sempre que o elemento for diferente do name passado. Se tiver ficado confuso, rode esse código por conta própria e altere um pouco o seu funcionamento! Isso ajudará muito.

// Conteúdos
Array.map
// A função map possui a mesma estrutura das outras HOFs , o que muda é o seu retorno.
// Antes de mais nada, veja mais um vídeo com o Cairo, desta vez falando sobre o map.
let listaDePessoasAprovadas = [
    'ada.lovelace@example.com',
    'marie.curie@example.com',
    'margaret.hamilton@example.com',
    'alan.turing@example.com',
];
const enviarEmail = (objetoEmail) => {
    console.log(`Email para ${objetoEmail.email} com a nota ${objetoEmail.nota} enviado com sucesso!`)
};
let listaDeEmails;
listaDeEmails = listaDePessoasAprovadas.map((email) => {
    return { email: email, nota: 10 };
});
console.log(listaDeEmails);
// Com forEach
listaDeEmails.forEach((objetoEmail) => enviarEmail(objetoEmail));


// Veja a diferença entre fazer uma mesma função usando for e em seguida usando map:
const persons = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antonio', lastName: 'Cabral' },
];
const fullNames = [];
for (let index = 0; index < persons.length; index += 1) {
    fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
}
console.log(fullNames);
// Agora com a função map:
const persons = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antonio', lastName: 'Cabral' },
];
const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);
console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

// O for foi substituído por apenas uma linha de código.

// A função juntou o primeiro nome com o sobrenome de cada pessoa e retornou um array novo com cada um dos valores. Observe que o tamanho dos arrays persons e fullNames é o mesmo (3 elementos).

// Outro exemplo é o de realizar um cálculo utilizando os valores dos elementos e retornar um array novo sem alterar o anterior.

// Na animação abaixo, podemos observar que o método map está invocando uma função callback que multiplica cada elemento do array listaNumeros por dois. O retorno do map é um novo array ( dobro ) que contém o resultado da multiplicação de cada elemento do array listaNumeros por dois. Perceba que o array retornado tem exatamente a mesma quantidade de itens que o array original, que não sofreu nenhuma modificação!

// Suponha que é preciso transformar todos os números em negativos e passa-lós para um array novo.
const numbers = [1, 2, 3, 4, -5];
const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));
console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]

// E como seria apenas com for?
const numbers = [1, 2, 3, 4, -5];
const negativeNumbers = [];
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > 0) {
    negativeNumbers.push(numbers[index] * -1);
  } else {
    negativeNumbers.push(numbers[index]);
  }
}
console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]

// Outras formas de usar o .map é unir dois arrays para criar um novo. Considere que você possui duas listas: o preço do primeiro produto ( Arroz ) é o primeiro elemento da lista prices ( 2.99 ), e assim por diante:
const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

// Deseja-se juntá-las em apenas uma lista de objetos que fique dessa forma:
// const listProducts = [{ Arroz: 2.99 },...];

// Tente criar uma função que resolva esse problema. Lembre-se, também, que as funções passadas para as HOFs podem receber vários parâmetros, não só o elemento sobre o qual ela está sendo iterada! Use isso em seu favor. Caso tenha dúvidas, olhe a solução logo abaixo.
const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];
const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
    { [product]: listPrices[index] }
  ));
const listProducts = updateProducts(products, prices);
console.log(listProducts);
// => [
//   { Arroz: 2.99 },
//   { Feijao: 3.99 },
//   { Alface: 1.5 },
//   { Tomate: 2 },
// ]

// E antes de seguir em diante, uma pergunta que provavelmente lhe veio! Qual a diferença, afinal, de map para o forEach ? São duas principais:
// - O map aplica sobre os elementos de um array uma função e retorna um array novo, sem modificar o original;
// - A forEach não tem tal restrição. Ela pode modificar o array original e retorna nada por padrão - ela pode criar um array novo a partir de um antigo, pode simplesmente buscar por um elemento e retorná-lo, pode não retornar nada, enfim! Ela é genérica e pode fazer diversas coisas.

// pense neste exemplo:
const numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros.map((numero) => numero * 2)); // Retorno: [2, 4, 6, 8, 10, 12]
const paresMenoresQueCinco = [];
numeros.forEach((numero) => {
  if (numero < 5 && numero % 2 === 0) {
    paresMenoresQueCinco.push(numero);
  }
});
console.log(paresMenoresQueCinco); // Retorno: [2, 4]

// Pense sempre que o forEach faz com arrays o que as outras HOFs não conseguem fazer. Ele é genérico!

// Agora, hora de ver como pode-se usar as outras HOFs junto com o map . Para os exemplos a seguir será usado um array com os dados de estudantes de um colégio.
const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: '59' },
        { name: 'Português', nota: '80' },
        { name: 'Química', nota: '78' },
        { name: 'Biologia', nota: '92' },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '76' },
        { name: 'Português', nota: '90' },
        { name: 'Química', nota: '70' },
        { name: 'Biologia', nota: '80' },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '91' },
        { name: 'Português', nota: '85' },
        { name: 'Química', nota: '92' },
        { name: 'Biologia', nota: '90' },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '70' },
        { name: 'Português', nota: '70' },
        { name: 'Química', nota: '60' },
        { name: 'Biologia', nota: '50' },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '80' },
        { name: 'Português', nota: '82' },
        { name: 'Química', nota: '79' },
        { name: 'Biologia', nota: '75' },
      ],
    },
];

// Segue-se alguns exemplos de funções apenas usando *for* e depois como refatorá-las para quem usem HOFs.

// Função para buscar e imprimir o nome completo de todos os estudantes que estudam no turno da manhã.
// for
const allNameStudents = [];
for (let index = 0; index < estudantes.length; index += 1 ) {
  if(estudantes[index].turno === 'Manhã') {
    allNameStudents.push(`${estudantes[index].nome} ${estudantes[index].sobrenome}`)
  }
}
console.log(allNameStudents);

// Com map e filter.
const allNameStudents = estudantes.filter((estudante) => (
    estudante.turno === 'Manhã')).map((estudante) => `${estudante.nome} ${estudante.sobrenome}`);  
console.log(allNameStudents);
// O que foi feito? Primeiro usou-se o filter para filtrar todos os estudantes que estudam no período da manhã. Como o retorno do filter é um array de elementos, você pode usar o map logo em seguida para retornar os nomes completos de estudantes presentes nesse novo array. O map nesse caso é usado apenas para retornar as informações pedidas, o nome completo, enquanto o filter é usado para filtrar o array.

// Buscar um estudante pelo nome e retornar a situação dele em cada matéria:
// com for:
const findStudent = (name, students) => {
    for (let index = 0; index < students.length; index += 1) {
      if (students[index].nome === name) {
        return students[index];
      }
    }
};  
const reportStatus = (name, students) => {
const getStudent = findStudent(name, students);
const report = [];
for (let index = 0; index < getStudent.materias.length; index += 1) {
    if (getStudent.materias[index].nota >= 60) {
    report.push(`${getStudent.materias[index].name} Aprovado`);
    } else {
    report.push(`${getStudent.materias[index].name} Reprovado`);
    }
}
return report;
};
console.log(reportStatus('Natalia', estudantes));

// map com um find.
const reportStatus = (name, students) => {
    const studentInfo = students.find((student) => student.nome === name);
    return studentInfo.materias.map((materia) => (
      `${materia.name} ${(materia.nota >= 60) ? 'Aprovado' : 'Reprovado'}`
    ));
};
console.log(reportStatus('Natalia', estudantes));

// O código teve uma redução drástica no número de linhas! Primeiro, fizemos um find para buscar e retornar os dados do estudante. O objeto foi retornado e salvo na variável students, depois o map foi usado para percorrer as matérias do objeto retornado e salvar o que se queria em um array da forma desejada.

// coteúdo aulaao vivo
const cities = [
  { state: 'AM', name: 'Manaus', region: 'N' },
  { state: 'PA', name: 'Belém', region: 'N' },
  { state: 'TO', name: 'Porto Nacional', region: 'N' },
  { state: 'MG', name: 'Nepomuceno', region: 'SE' },
  { state: 'BA', name: 'Cachoeira', region: 'NE' },
  { state: 'PR', name: 'Curitiba', region: 'S' },
  { state: 'SP', name: 'Hortolândia', region: 'SE' },
  { state: 'RN', name: 'Touros', region: 'NE' },
  { state: 'CE', name: 'Jericoacoara', region: 'NE' },
  { state: 'TO', name: 'Três Pedras', region: 'N' },
  { state: 'MG', name: 'João Pinheiro', region: 'SE' },
];
// 1. Encontre todas as cidades da região Nordeste (NE)
console.log('As cidades que ficam na região Nordeste são: ');

const citiesNe = cities.filter((city) => {
  return city.region === 'NE';
});
console.log(citiesNe);

// 2. Encontre todas as cidades do estado de Tocantins (TO)
console.log('As cidades do estado de Tocantins são: ');

const citiesTo = cities.filter((city) => {
  return city.state === 'TO';
});
console.log(citiesTo);

// 3. Encontre todas as cidades que comecem com a letra (C)
console.log('As cidades que começam com a letra C são: ');

const citiesC = cities.filter((city) => {
  return city.name.startsWith('C');
});
console.log(citiesC);

// Extra, entenda como seria criar um 'filter'
const numbers = [1, 2, 3, 4];
const filter = (array, callback) => {
  let newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    if (callback(array[index])) {
      newArray.push(array[index]);
    }
  }
  return newArray;
}
console.log(filter(numbers, (number) => number <= 2));
// -------------------------------------------

// find, filter, map
const states = [
  { short: 'AM', name: 'Amazonas' },
  { short: 'PA', name: 'Pará' },
  { short: 'TO', name: 'Tocantins' },
  { short: 'MG', name: 'Minas Gerais' },
  { short: 'BA', name: 'Bahia' },
  { short: 'PR', name: 'Paraná' },
  { short: 'SP', name: 'São Paulo' },
  { short: 'RN', name: 'Rio Grande do Norte' },
  { short: 'CE', name: 'Ceará' }
];

const regions = [
  { short: 'N', name: 'Norte' },
  { short: 'NE', name: 'Nordeste' },
  { short: 'CW', name: 'Centroeste' },
  { short: 'SE', name: 'Sudeste' },
  { short: 'S', name: 'Sul' }
];

const cities = [
  { state: 'AM', name: 'Manaus', region: 'N' },
  { state: 'PA', name: 'Belém', region: 'N' },
  { state: 'TO', name: 'Porto Nacional', region: 'N' },
  { state: 'MG', name: 'Lavras', region: 'SE' },
  { state: 'BA', name: 'Feira de Santana', region: 'NE' },
  { state: 'PR', name: 'Cascavél', region: 'S' },
  { state: 'SP', name: 'Presidente Prudente', region: 'SE' },
  { state: 'RN', name: 'Touros', region: 'NE' },
  { state: 'CE', name: 'Jericoacoara', region: 'NE' }
];
// 1. Transforme o array de objetos cities em um array de strings com o seguinte formato:
console.log('Formato: ${nomeDaCidade} - ${siglaDoEstado}');
// a) "${nomeDaCidade} - ${siglaDoEstado}"
const citiesAndStates = cities.map((city) => {
  return `${city.name} - ${city.state}`;
});
console.log(citiesAndStates);

// b) "A cidade de ${nomeDaCidade} fica no estado de(o) ${nomeDoEstado}"
console.log('Formato: A cidade de ${nomeDaCidade} fica no estado de(o) ${nomeDoEstado}');
const citiesAndStatesNames = cities.map((city) => {
  const findState = states.find((state) => {
    return state.short === city.state;
  });
  return `A cidade de ${city.name} fica no estado de(o) ${findState.name}`;
});
console.log(citiesAndStatesNames);

// 2. transforme o array de objeto cities em um array de objetos no seguinte formato:
// {
//   state: "Amazonas",
//   city: "Manaus",
//   region: "Norte"
// }
console.log('Formato: { state: "Amazonas", city: "Manaus", region: "Norte" }');
const arrayCities = cities.map((city) => {
  const findState = states.find((state) => state.short === city.state);
  const findRegion = regions.find((region) => region.short === city.region);
  return {
    state: findState.name,
    city: city.name,
    region: findRegion.name
  }
});

console.log(arrayCities);

// Exercícios para finalizar o dia
// Hora de por a mão na massa!

// Instruções para realização dos exercícios

// Nos exercícios a seguir, você trabalhará com uma estrutura de dados representando uma lista de livros, contendo informações como nome do livro, gênero, pessoa autora do livro e data de lançamento.

// Em cada exercício, será pedido que você encontre ou produza alguma informação a respeito dessa lista utilizando as funções que você aprendeu hoje. Todos os exercícios contêm um código base. Você deverá copiar esse código e salvá-lo em um arquivo nomeado conforme o número do exercício, completando a função em branco.

// Por exemplo, o exercício 1 deve ser salvo no arquivo exercise1.js, e assim por diante. Em cada exercício existe uma ou mais chamadas de funções do módulo assert. Estas funções checarão automaticamente se seu código retorna o resultado esperado.

// Sua solução só será considerada correta se todos os asserts do arquivo forem executados sem erros. No Visual Studio Code, você pode executar o código do exemplo clicando com o botão direito e escolhando a opção Run Code.

// Quando todos os asserts passam, isto é, nenhum deles encontra um resultado diferente esperado, nada de diferente do normal é reportado:

const assert = require('assert');
function foo() {
  return 'bar';
}
assert.strictEqual(foo(), 'bar');

// [Running] node "/Users/leandro/example.js"
// [Done] exited with code=0 in 0.087 seconds
// ------------------------------

const assert = require('assert');
function foo() {
  return 'bar';
}
assert.strictEqual(foo(), 'baz');

// [Running] node "/Users/leandro/example.js"
// assert.js:92
//   throw new AssertionError(obj);
//   ^

// AssertionError [ERR_ASSERTION]: 'bar' == 'baz'
//     at Object.<anonymous> (/Users/leandro/example.js:7:8)
//     at Module._compile (internal/modules/cjs/loader.js:956:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:973:10)
//     at Module.load (internal/modules/cjs/loader.js:812:32)
//     at Function.Module._load (internal/modules/cjs/loader.js:724:14)
//     at Function.Module.runMain (internal/modules/cjs/loader.js:1025:10)
//     at internal/main/run_main_module.js:17:11 {
//   generatedMessage: true,
//   code: 'ERR_ASSERTION',
//   actual: 'bar',
//   expected: 'baz',
//   operator: '=='
// }

// [Done] exited with code=1 in 0.075 seconds

/* Agora a prática
 1. Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
 Dica: Use a função map */
const assert = require('assert');
const books = [
  { id: 1, name: 'As Crônicas de Gelo e Fogo', genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948, },
    releaseYear: 1991,
  },
  { id: 2, name: 'O Senhor dos Anéis', genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892, },
    releaseYear: 1954,
  },
  { id: 3, name: 'Fundação', genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920, },
    releaseYear: 1951,
  },
  { id: 4, name: 'Duna', genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920, },
    releaseYear: 1965,
  },
  { id: 5, name: 'A Coisa', genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947, },
    releaseYear: 1986,
  },
  { id: 6, name: 'O Chamado de Cthulhu', genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890, },
    releaseYear: 1928,
  },
];
const expectedResult = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];
function formatedBookNames() {
  // escreva seu código aqui
  const nameFormated = books.map((book) => {
    return `${book.name} - ${book.genre} - ${book.author.name}`;
  });
  // console.log(nameFormated);
}
assert.deepStrictEqual(formatedBookNames(), expectedResult);

/* 2. Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
Dica: use as funções map, sort */
const assert = require('assert');
const books = [
  { id: 1, name: 'As Crônicas de Gelo e Fogo', genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948, },
    releaseYear: 1991,
  },
  { id: 2, name: 'O Senhor dos Anéis', genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892, },
    releaseYear: 1954,
  },
  { id: 3, name: 'Fundação', genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920, },
    releaseYear: 1951,
  },
  { id: 4, name: 'Duna', genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920, },
    releaseYear: 1965,
  },
  { id: 5, name: 'A Coisa', genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947, },
    releaseYear: 1986,
  },
  { id: 6, name: 'O Chamado de Cthulhu', genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890, },
    releaseYear: 1928,
  },
];
const expectedResult = [
  { age: 31, author: 'Isaac Asimov', },
  { age: 38, author: 'H. P. Lovecraft', },
  { age: 39, author: 'Stephen King', },
  { age: 43, author: 'George R. R. Martin', },
  { age: 45, author: 'Frank Herbert', },
  { age: 62, author: 'J. R. R. Tolkien', },
];
function nameAndAge() {
  // escreva seu código aqui
  const booksInObject = books.map((objectBook) => {
     return {
      age: objectBook.releaseYear - objectBook.author.birthYear, 
      author: objectBook.author.name,
    }
  });
  // console.log(booksInObject);
  return booksInObject.sort((a, b) => a.age - b.age);
}
assert.deepStrictEqual(nameAndAge(), expectedResult);
