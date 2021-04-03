// Conteudo do dia 24/03 bloco_7 - 7.2

// CONTEUDO Parte I - Adicionando novas chaves (keys)
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
  
// AULA AO VIVO
const person = {
    name: 'Rafael',
    lastName: 'Epaminondas'
};
console.log(`Olá querido ${person.name}!`);
console.log(`Olá querido ${person['lastName']}!`);

console.log(`Olá querido ${person.name} ${person.lastName}!`);


// CONTEUDO - Exercícios do dia 7.2
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
