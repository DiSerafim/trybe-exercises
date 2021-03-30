// JavaScript ES6 - Introdução a Higher Order Functions
// 1-JavaScript ES6 - Higher Order Functions - forEach, find, some, every, sort

const button = document.getElementById('button');
button.addEventListener('click', () => {
  console.log('Clicou no botão!');
});

// exemplo utilizando loops
const students = [
  { name: 'Maria', grade: 70, approved: '' },
  { name: 'José', grade: 56, approved: '' },
  { name: 'Roberto', grade: 90, approved: '' },
  { name: 'Ana', grade: 81, approved: '' },
];

function verifyGrades() {
  for (let i = 0; i < students.length; i += 1) {
    const student = students[i];
    if (student.grade >= 60) {
      student.approved = 'Aprovado';
    } else {
      student.approved = 'Recuperação';
    }
   }
}
verifyGrades();
console.log(students);
  // [
  //   { name: 'Maria', grade: 70, approved: 'Aprovado' },
  //   { name: 'José', grade: 56, approved: 'Recuperação' },
  //   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
  //   { name: 'Ana', grade: 81, approved: 'Aprovado' }
  // ]

// exemplo Usando forEach
const students = [
  { name: 'Maria', grade: 70, approved: '' },
  { name: 'José', grade: 56, approved: '' },
  { name: 'Roberto', grade: 90, approved: '' },
  { name: 'Ana', grade: 81, approved: '' },
];

function verifyGrades() {
  students.forEach((student, index) => {
    if (student.grade >= 60) {
      students[index].approved = 'Aprovado';
    } else {
      students[index].approved = 'Recuperação';
    }
  });
}
verifyGrades();
console.log(students);
// [
//   { name: 'Maria', grade: 70, approved: 'Aprovado' },
//   { name: 'José', grade: 56, approved: 'Recuperação' },
//   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
//   { name: 'Ana', grade: 81, approved: 'Aprovado' }
// ]

// exemplo usando for e if :
const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
let firstMultipleOf5;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 5 === 0) {
    firstMultipleOf5 = numbers[index];
    break;
  }
}

console.log(firstMultipleOf5);
// 50

// exemplo Agora, a mesma coisa usando Array.find
const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const firstMultipleOf5 = numbers.find((number) => number % 5 === 0);

console.log(firstMultipleOf5);
// 50


// 2- Estrutura de uma HOF - Higher Order Functions
const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element) => {
  console.log('Cada elemento do array:', element);
});
// Cada elemento do array: josé
// Cada elemento do array: 50
// Cada elemento do array: 0.25
// Cada elemento do array: { comida: 'Chocolate' }

// Sua estrutura:
arrayOfValues.forEach((element) => {
  console.log('Cada elemento do array:', element);
});

// Suas partes:
// arrayOfValues - Nome do array que será percorrido;
// .forEach - A HOF , pode ser, .find , .some , .every ;
// element - Valor do elemento do array;
// (element) => {console.log('Cada elemento do array:', element); - função a ser executada, pode ser passada igual ao terceiro exemplo do conteúdo com a função verifyGrade .
meuArray.forEach((elemento) => {
  if (elemento % 2 === 0) {
    console.log(`${elemento} é divísivel por 2!`);
  }
});

// As HOFs disponibilizam para você, acesso a mais informações do array:
const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
  console.log('Cada elemento do array:', element);
  console.log('Index, posição do elemento:', indexOfTheArray);
  console.log('Array percorrido:', theEntireArray);
});

// => ---------------
//   Cada elemento do array: josé
//   Index, posição do elemento: 0
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: 50
//   Index, posição do elemento: 1
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: 0.25
//   Index, posição do elemento: 2
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: { comida: 'Chocolate' }
//   Index, posição do elemento: 3
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]

// 3-  

// ----------------



// ----------------------



// ---------------------



// --------Simplificando------------




// --------Aula ao vivo:
// for Each
const numbers = [1, 2, 3, 4, 5, 6, 7, 8,9, 10];
const multiply3 = [];
numbers.forEach((_, number) => multiply3.push(number * 3));
console.log(multiply3);

const array.forEach(element => {
  // 
});

// some
const ages = [23, 32, 17, 16, 34];
const moreAges = [23, 32, 34];

const lessThan18 = (array) => {
  for (let index = 0; index < ) {

  }
}

// every
const ages = [23, 32, 17, 16, 34];
const moreAges = [23, 32, 34];

function eightteenOrAbove(array) {
  for (let index = 0; index < array.length; ) {

  }
}


// Agora a prática ----- Exercício

