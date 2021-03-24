// Conteudo do dia 24/03 bloco_7 - 7.2

// CONTEUDO Parte I - Adicionando novas chaves (keys)
// EX-1:
const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
};

const customer = {
    firstName: 'Roberto',
    lastName: 'Faria', // Propriedade adicionada.
    age: 22,
    job: 'Teacher',
  };

  const customer1 = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
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
    console.log(`Olá ${order['order']['delivery']['deliveryPerson']}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R: ${order['address']['street']}, Nº: ${order['address']['number']}, AP: ${order['address']['apartment']}.`);
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
  
  }
  
  orderModifier(order);
