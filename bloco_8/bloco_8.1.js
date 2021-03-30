// JavaScript ES6 - Introdução a Higher Order Functions
// 1- First-Class Functions

const product = (productName, price, isOnSale) => ({
  productName,
  price: `R$ ${price}`,
  sale: isOnSale ? 'For sale' : 'Not for sale',
});
console.log(product('Computador', 3000, false));
// { productName: 'Computador', price: 'R$ 3000', sale: 'Not for sale' }


// 2- Higher Order Functions

const button = document.querySelector('#signup-button');
// minha função de primeira classe;
const registerUser = () => {
  // código para registrar a nova pessoa usuária;
  console.log('Registrado com sucesso!');
};
// minha função de segunda classe;
button.addEventListener('click', registerUser);


// 3-  Estruturando uma HOF

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};
repeat(5, console.log);

// ----------------

const repeat = (number, action) => {
for (let count = 0; count <= number; count += 1) {
  action(count);
}
};

repeat(3, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});

// ----------------------

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) { action(count) };
};
const isEven = (number) => {
  if (number % 2 === 0) { console.log(number, 'is even') };
};
const isOdd = (number) => {
  if ((number % 2) > 0) { console.log(number, 'is odd') };
};
repeat(3, isEven); // Testa quais números serão pares;
repeat(3, isOdd); // Testa quais números serão ímpares;

// ---------------------

const greaterThan = (firstNumber) => (secondNumber) => secondNumber > firstNumber;

const greaterThan10 = greaterThan(10);
console.log(greaterThan10(15)); // true

// --------Simplificando------------

// Ao chamarmos a função desta forma:
const greaterThan10 = greaterThan(10);
// Na prática é a mesma coisa que realizar assim:
const greaterThan10 = (secondNumber) => {
  return secondNumber > 10; // O parâmetro nomeado como "firstNumber" foi ocupado;
};

// console.log(greaterThan10(15)); // true
console.log(greaterThan(10)(15)); // true

// --------Para fixar vamos praticar com os seguintes exercícios:

// Crie uma função de primeira classe que tenha o retorno console.log('Acordando!!');
const acordar = (frase) => ({ frase });
console.log(acordar('Acordando!!'));
// Crie outra função de primeira classe que tenha o retorno console.log('Bora tomar café!!');
const tomarCafe = (frase) => ({ frase });
console.log(tomarCafe('Bora tomar café!!'));
// Crie mais uma função de primeira classe que tenha o retorno console.log('Partiu dormir!!');
const irDormir = () => {

};
// Desenvolva uma HOF chamada doingThings e configure esta função para que retorne a execução das funções de primeira classe que você criou nos exemplos anteriores. Exemplo:
// Ao chamar a função doingThings:
doingThings(wakeUp);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!


// --------Aula ao vivo:
// HOF ----------------
const person = {
  name: 'Carol',
  lastName: 'Santos',
};

const greetingPeople = (person) => {
  console.log(`Olá ${person.name}, como vai você?`);
};

greetingPeople(person);

person.greet = (greetingFunction) => {
  return greetingFunction();
};

const formalGreeting = () => {
  console.log(`Está tudo uma maravilha.`);
}

person.greet(formalGreeting);

// Currying -------------
const discount = (discount) => {
  return (price) => {
    return price * discount;
  }
};
const price = 500;
const finalPrice = price - discount(0.10)(price);
console.log(finalPrice);

// Agora a prática ----- Exercício
const newEmployees = () => {
  const employees = {
    id1: // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};