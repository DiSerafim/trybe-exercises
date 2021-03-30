// Conteudo do dia 24/03 bloco_7 - 7.2

// CONTEUDO Parte I - Adicionando novas chaves (keys)---------------------------------
// EX-1:
// customer
const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
};
// Modo de adiciona o lastName
const customer = {
    firstName: 'Roberto',
    lastName: 'Faria', // Propriedade adicionada.
    age: 22,
    job: 'Teacher',
  };
  
// customer1
const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};
console.log(customer1);
// Modo 01 de adiciona o lastName
customer1.lastName = 'Faria';
console.log(customer1);

// customer2
const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};
console.log(customer2);
// Modo 02 de adiciona o lastName
customer2['lastName'] = 'Silva';
console.log(customer2);

// adicionar algumas novas propriedades ao objeto
const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;

newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);

// CONTEUDO Parte II - Object.keys
const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for(index in arrayOfSkills){
    console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
  }
};
console.log('Estudante 1');
listSkills(student1);
console.log('Estudante 2');
listSkills(student2);


// AULA AO VIVO ----------------------------------------------------------------------
const person = {
    name: 'Rafael',
    lastName: 'Epaminondas'
};
console.log(`Olá querido ${person.name}!`);
console.log(`Olá querido ${person['lastName']}!`);

console.log(`Olá querido ${person.name} ${person.lastName}!`);


// CONTEUDO - Exercícios do dia 7.2 --------------------------------------------------
// Ex-01
const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    // Complete a função customerInfo() para que seu retorno seja similar a 
    // "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
    console.log(`Olá ${order['order']['delivery']['deliveryPerson']}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R: ${order['address']['street']}, Nº: ${order['address']['number']}, AP: ${order['address']['apartment']}.`);
  }
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    // Complete a função orderModifier() para que seu retorno seja similar a 
    // "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."
    order.order.delivery.deliveryPerson = 'Luiz Silva';
    order.order.pizza = ['muzzarella', 'calabresa'];
    order.payment.total = 50,
    console.log(`Olá ${order['order']['delivery']['deliveryPerson']}, o total do seu pedido de ${order['order'] ['pizza']} e ${order['order']['drinks']['coke']['type']} é R$ ${order['payment']['total']},00`);
  }
  orderModifier(order);

  // Ex 02
  const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

// Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
lesson2['turno'] = 'manhã';
console.log(lesson2);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
console.log(Object.keys(lesson1));
console.log(Object.keys(lesson1[ 'materia', 'numeroEstudantes', 'professor', 'turno' ]));
console.log(Object.keys(lesson2));
console.log(Object.keys(lesson2[ 'materia', 'numeroEstudantes', 'professor', 'turno' ]));
console.log(Object.keys(lesson3));
console.log(Object.keys(lesson3[ 'materia', 'numeroEstudantes', 'professor', 'turno' ]));

// Crie uma função para mostrar o tamanho de um objeto.
console.log(Object.keys(lesson1.length));
console.log(Object.keys(lesson2));
console.log(Object.keys(lesson3));

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
Object.keys("foo");
// TypeError: "foo" is not an object (ES5 code)

Object.keys("foo");
// ["0", "1", "2"] 