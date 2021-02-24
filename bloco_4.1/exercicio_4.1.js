/*exercísio de fixação 24/02/2021
console.log("Hello World!!");
const name = 'Diego';
const birthCity = 'Belém';
let birthYear = 1986;
birthYear = 2020;
// birthCity = 'Ananindeua';


console.log(name)
console.log(birthCity)
console.log(birthYear)

let movie = "Avengers"; // string literl
let score = 10.89; //number literal
let isValid = true; //boolean
//let name; //undefined
let color = null; //redefinição

//+, -, *, /, **

let salary = 3500;

console.log(salary + salary);
console.log(salary - salary);
console.log(salary / salary);
console.log(salary * salary);
console.log(3 **3);

salary++;
console.log(salary);


//operador typeof
let patientId = 50;
let patientId1 = '50';
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);
console.log(typeof patientId1);
console.log(typeof isEnrolled);
console.log(typeof patientEmail);*/


// Cinco programas, das operações aritméticas básicas
// Adição, Subtração, Multiplicação, Divisão, Módulo

//#O maior de dois números
let a = 7;
let b = 9;

if (a > b) {
  console.log(a);
} else {
  console.log(b);
} // 9

//#O maior de três números
let a = 12;
let b = 15;
let c = 19;

if (c > a && c > b) {
  console.log(c)
} else if (b > a && b > c) {
  console.log(b)
} else {
  console.log(a)
}

//#positivo ou negativo
let positivoOuNegativo = 34352;

if (positivoOuNegativo % 2 == 0) {
  console.log("positive");
} else if (positivoOuNegativo % 2 == 1) {
  console.log("negative")
} else {
  console.log(0);
}

//#triangulo
let tri = 70;
let an = 50;
let gulo = 60;

if (tri + an + gulo == 180) {
  console.log(tri + an + gulo == 180);
} else if (tri + an + gulo != 180){
  console.log(tri + an + gulo == 180);
} else {
  console.log("Erro! angulos inválidos");
}