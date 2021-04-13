// Fundamentos do Desenvolvimento Web

// Bloco 9.1 - JavaScript Assíncrono e Promises:
// JavaScript Assíncrono e Callbacks

// O que vamos aprender?

// Numa lógica normal, sequencial de programação, sua página esperaria o serviço dar retorno ou voltar ao ar para continuar. Ou seja, a página ficaria quebrada, ou teria todo o seu carregamento freado em função de um problema totalmente fora do seu controle. Para lidar com esse problema e outros de natureza similar, existe um conceito que é muito poderoso e presente no JavaScript : a assincronicidade. Em vez de o programa ser carregado todo em sequência, uma linha após a outra, linhas que podem trazer esse tipo de problema podem "ficar carregando", enquanto o resto do seu programa executa normalmente. A execução dessa linha, a espera pela disponibilidade desse serviço, corre paralelamente ao desenvolver do restante do código. É uma execução assíncrona. E isso tem muito poder. 

// conceitos importantes:
// Operações assíncronas;
// callbacks.

// Você será capaz de:
// Aplicar corretamente operações assíncronas;
// Utilizar callbacks corretamente.

// Por que isso é importante?
// Até então, você tem programado de uma forma basicamente similar à seguinte:
// Execute o passo A;
// Execute o passo B;
// Execute o passo C.

// Suponha que você tenha uma operação A que gaste muito tempo, e que você tenha uma operação B em sequência que independe totalmente de A. B ter que esperar por A é um problema, haja vista que B não depende de forma alguma de A. Como você faz para contornar esse problema?

// Resposta: assincronicidade

// Com assincronicidade, a operação A começa a executar e, logo em seguida, B também, sem ter que esperar A terminar.


// Conteúdos --------------------------------------------------------------------------------
- Operações - assíncronas ;

// Operações em JavaScript são tradicionalmente síncronas, ou seja, para que uma cadeia de operações seja realizada, é necessário que uma operação termine para que outra comece. Em uma linha de produção de automóveis por exemplo, várias etapas de produção são codependentes. Podemos relacionar estas etapas de produção às operações síncronas em JavaScript. Observe o exemplo abaixo para que esta analogia fique mais clara:
console.log('1 - Receber roda');
console.log('2 - Encaixar parafusos');
console.log('3 - Fixar roda no carro');

// Observe que estamos trabalhando de forma ineficiente e adicionando etapas desnecessárias à nossa produção pois se tivermos parafusos suficientes em estoque, não precisamos parar a montagem para que mais parafusos sejam comprados e repostos. Assim como na nossa linha de produção, existem operações que não possuem esta codependência em JavaScript, e com objetivo de cobrir justamente este tipo de situação surgem as operações assíncronas.
setTimeout(() => {
    console.log('Comprar parafusos') // Comprar parafusos
    console.log('Adicionar ao estoque') // Adicionar ao estoque
  }, 2000);
  
  console.log('1 - Receber roda'); // 1 - Receber roda
  console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
  console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro

// Note que console.log('Comprar parafusos') e console.log('Adicionar ao estoque') foram declarados antes das etapas 1, 2 e 3, mesmo assim o retorno das chamadas só ocorre ao final. Isto acontece pois utilizamos a função setTimeout. É muito comum que esta função seja utilizada para simular comportamentos assíncronos. Na prática vivenciaremos situações em que nossa aplicação depende de uma informação externa, como por exemplo, solicitar uma informação a um banco de dados. É aí que o conceito de assincronicidade entra a nosso favor para que nossa aplicação não perca eficiência.
const assert = require('assert');
const pushNumber = (list, number) => list.push(number);
let numbers = [];

pushNumber(numbers, 1);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

assert.deepStrictEqual(numbers, [1, 2, 3]);

// --------------------------
const assert = require('assert');
const pushNumber = (list, number) => list.push(number);
let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

assert.deepStrictEqual(numbers, [1, 2, 3]); // essa validação falha

// Por que a validação referente ao primeiro código funciona, e a referente ao segundo não? O teste espera receber o array [1, 2, 3] , mas apenas recebe o [2, 3]. Isso ocorre por causa da função setTimeout. Ela é uma função assíncrona, que espera alguns milissegundos para executar a função passada a ela como parâmetro. No código acima, ela espera 3000 milissegundos (3 segundos) para executar o pushNumber(numbers, 1).

// Para passar no teste, é necessário testar o numbers após 3000 milissegundos:
const assert = require('assert');
const pushNumber = (list, number) => {
  list.push(number);
  console.log(list);
};

let numbers = [];
setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

setTimeout(() => assert.deepStrictEqual(numbers, [2, 3, 1]), 3000);

// Observe que, além de adicionar o setTimeout, o array [1, 2, 3] foi modificado para [2, 3, 1]. Isso se dá, pois, como a função é assíncrona, o código continua rodando, mesmo que ela ainda não tenha terminado de executar. Ou seja, o array recebe primeiro o 2, depois o 3, e após os 3 segundos do setTimeout, ele recebe o 1.

// https://www.w3schools.com/jsref/met_win_settimeout.asp

// Conteúdos --------------------------------------------------------------------------------
Callbacks;

// callback é uma função passada como parâmetro para outra função. Sem perceber você viu um exemplo de função callback quando chamamos a função setTimeout. Esta função recebe dois parâmetros, o primeiro é a função callback que passamos através de uma arrow function , e o segundo é o tempo que o interpretador irá esperar para executar a função.
const myExpenses = [
  {
    gym: 99,
  },
  {
    ifood: 200,
  },
  {
    phone: 60,
  },
  {
    internet: 100,
  },
];

const myIncome = 1000;

// Neste primeiro trecho de código temos duas declarações de variáveis. A primeira delas myExpenses, é um array de objetos que representa os gastos de uma pessoa no mês. A segunda, myIncome, representa o quanto esta pessoa recebeu neste mesmo mês.

// Nosso próximo passo será implementar uma função que trate estas informações para que tenhamos como resultado um balanço de entradas e saídas do mês.
const monthlyBudget = (myIncome, myExpenses, callback) => {

  const totalExpenses = callback(myExpenses);
  const totalAfterExpenses = myIncome - totalExpenses;

  console.log(`Balanço do mês:
    Recebido: R$${myIncome},00
    Gasto: R$${totalExpenses},00
    Saldo: R$${totalAfterExpenses},00 `);
};

// Neste trecho da implementação podemos notar que foi adicionada uma função monthlyBudget que recebe três parâmetros, myIncome, myExpenses, e callback. Acredito que você deve estar pensando, "O que este parâmetro callback está fazendo nesta função?".

// Como vimos anteriormente, callback é basicamente uma função passada por parâmetro para outra função. Neste exemplo o parâmetro callback receberá uma função que retornará o quanto gastamos no mês, ou seja, nossa função callback irá realizar a lógica necessária para somar todos os gastos contidos no array de objetos myExpenses, e retornará este valor para a constante totalExpenses.
const handleExpenses = myExpenses => {
  const eachValue = myExpenses.map((item) => Object.values(item)[0]);
  const totalExpense = eachValue.reduce((acc, curr) => acc + curr , 0);
  return totalExpense;
};

monthlyBudget(myIncome, myExpenses, handleExpenses);

// Por fim podemos observar a implementação da nossa função callback representada pela função handleExpenses. Esta função está tratando as informações contidas no array de objetos myExpenses e retornando o valor total de gastos.

// Em síntese o que fizemos foi:
// - Criamos variáveis que representam o quanto recebemos no mês e o quanto gastamos no mês.
// - Implementamos a função monthlyBudget que recebe três parâmetros, nossos gastos, nossa renda e a função callback.
// - Realizamos a implementação da função callback representada por handleExpenses que recebe nossos gastos mensais e retorna um valor de gastos total.
// - Adicionamos handleExpenses na chamada da função monthlyBudget e como resultado temos o balanço mensal.
const myExpenses = [
  {
    gym: 99,
  },
  {
    ifood: 200,
  },
  {
    phone: 60,
  },
  {
    internet: 100,
  },
];

const myIncome = 1000;
const monthlyBudget = (myIncome, myExpenses, callback) => {
  const totalExpenses = callback(myExpenses);
  const totalAfterExpenses = myIncome - totalExpenses;
  console.log(`Balanço do mês:
    Recebido: R$${myIncome},00
    Gasto: R$${totalExpenses},00
    Saldo: R$${totalAfterExpenses},00 `);
};

const handleExpenses = myExpenses => {
  const eachValue = myExpenses.map((item => Object.values(item)));
  const totalExpense = eachValue.reduce((acc, curr) => acc += curr[0] , 0);
  return totalExpense;
};

monthlyBudget(myIncome, myExpenses, handleExpenses);
// Balanço do mês:
//     Recebido: R$1000,00
//     Gasto: R$459,00
//     Saldo: R$541,00

// Reparou que você já estava usando callbacks desde a semana de JavaScript, com eventListeners, e até a semana passada, com filter, map e reduce ? A função que você passa como parâmetro para cada uma delas é exemplo de função callback. 😉

// Além disso, lembra-se do exemplo da pizza mencionado no Por que isso é importante? O que você faz quando o pedido da pizza chega, que nesse caso é jantar, corresponde a um callback.

// Antes de seguir para os exercícios de fixação propostos abaixo, veja o vídeo a seguir para garantir o entendimento sobre callbacks:

// Agora, faça estes exercícios de fixação:
// --------------------------------------------------------------------------------

// 1. No código abaixo você tem a função getUser, que retorna uma pessoa qualquer. Complete a função getUser de forma que ela receba uma outra função como parâmetro para que possa realizar as operações abaixo sobre a pessoa retornada.
const assert = require('assert');
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = () => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
};

assert.strictEqual(getUser(), "Hello! My name is Ivan Ivanovich"); // complete a chamada da função de getUser
assert.strictEqual(getUser(), "Ivan is Russian"); // complete a chamada da função de getUser


// 2. No código abaixo você tem a função getUser modificada, que agora funciona de modo assíncrono e imprime dados de uma pessoa qualquer depois de um certo tempo. Complete a função getUser de forma que ela receba um callback para que possa realizar as operações abaixo sobre a pessoa.
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;
const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);
const getUser = () => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    console.log(user);
  }, delay());
};

getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo

// Obs: note e averigue o comportamento assíncrono da função getUser ao chamar getUser(userFullName) seguido de getUser(userNationality) . Tem hora que é impresso antes no console o nome da pessoa, e tem hora que é impressa antes a nacionalidade da pessoa!

// --------------------------------------------------------------------------------
Lidando-com-erros-em-operações-assíncronas

// No último exercício, você deve ter reparado que está usando em conjunto callbacks e assincronicidade, que nesse caso correspondem a:
// - operação assíncrona: retorno de user depois de um certo tempo, que varia;
// - callbacks : as funções userFullName e userNationality , que são chamadas depois que o usuário é retornado.

// Nesse caso, a operação assíncrona sempre finaliza com sucesso, e existe um callback que atua sobre o resultado desse sucesso.

// A função getCountry abaixo tem aproximadamente 50% de chance de obter com sucesso um país, tendo um callback para poder ser feita qualquer operação sobre o país retornado. Adicione um outro callback para getCountry , de forma que trate a mensagem de erro retornada.
const countryName = ({ name }) => console.log(`Returned country is ${name}`);
const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is the ${currency}`);
const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);
const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);
const getCountry = (onSuccess) => {
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.5;
    if(didOperationSucceed) {
      const country = {
        name: "Brazil",
        hdi: 0.759,
        currency: "Real",
      };
      onSuccess(country);
    }
    else {
      const errorMessage = "Country could not be found";
    }
  }, delay());
};

// Deve imprimir "Returned country is Brazil" no sucesso, ou "Error getting country: Country could not be found" em falha
getCountry(countryName, printErrorMessage);

// Deve imprimir "Brazil's currency is the Real" no sucesso, ou "Error getting country: Country could not be found" em falha
getCountry(countryCurrency, printErrorMessage);

// --------------------------------------------------------------------------------
Fetch-API

// No contexto do Front-end, a maioria dos casos em que precisamos utilizar funções assíncronas são em requisições. Um bom exemplo é a função fetch() da Fetch API!
// A Fetch API contém uma série de recursos desenvolvidos para lidar com requisições http no JavaScript. A função primária é a fetch() , utilizada para fazer chamadas às URL's das APIs . Trata-se de uma função assíncrona, baseada em uma promise.
// Uma API, por sua vez, é uma forma de trafegar dados entre aplicações. Por exemplo: existe uma API que todos os dias possui uma piada diferente. A URL da API é https://api.jokes.one . Portanto, se quisermos ter acesso a essa piada, precisamos fazer uma requisição para a URL da API, solicitando os dados. A API, por sua vez, vai analisar a requisição e responder os dados pedidos. Note que há um tempo entre a requisição ser enviada e a resposta ser devolvida. Por isso, precisamos que a requisição seja assíncrona.

// A função fetch recebe dois parâmetros:
// - URL do serviço alvo da requisição;
// - Um objeto contendo algumas informações sobre requisição de API. Esse objeto contém chaves com informações específicas para aquela chamada. Essas especificações estão sempre presentes na documentação de uso daquela API específica. Não se preocupe muito em como obter essas informações por agora ; nesse início, daremos essas informações para que vocês se acostumem a usar o .fetch() .

// O retorno da chamada varia conforme a API utilizada, não só em conteúdo, mas também formato. Como nosso maior foco é JavaScript, lidaremos principalmente com respostas em formato JSON, ou respostas que possam ser reformatadas para tal.



// coteúdo aula ao vivo
// --------------------------------------------------------------------------------

// EX 01 - ------------------------------------
const wait = (miliseconds) => {
  const now = new Date().getTime();
  while (new Date().getTime() < now + miliseconds);
};
function func1() {
  wait(3000);
  console.log('Função 1');
}
function func2() {
  wait(3000);
  console.log('Função 2');
}
console.log('Olá! O código começou a ser executado.');
func1();
func2();


// EX 02 - ------------------------------------
function func1() {
  setTimeout(() => {
    console.log('Função 1');
  }, 3000);
}
function func2() {
  setTimeout(() => {
    console.log('Função 2');
  });
}
console.log('Olá! O código começou ser executado.');
func1();
func2();
console.log('Tchau! o código terminou.');


// EX 03 - ------------------------------------
function func1() {
  setTimeout(() => {
    console.log('Função 1');
  }, Math.random() * 3000);
}
function func2() {
  setTimeout(() => {
    console.log('Função 2');
  }, Math.random() * 3000);
}
console.log('Olá! O código começou ser executado.');
func1();
func2();
console.log('Tchau! o código terminou.');

// EX 04 - ------------------------------------
function func2() {
  setTimeout(() => {
    console.log('Função 2');
  }, Math.random() * 3000);
}
function func1() {
  setTimeout(() => {
    console.log('Função 1');
    func2();
  }, Math.random() * 3000);
}
console.log('Olá! O código começou ser executado.');
func1();
console.log('Tchau! o código terminou.');

// EX 05 - ------------------------------------
function func2() {
  setTimeout(() => {
    console.log('Função 2');
  }, Math.random() * 3000);
}
function func3() {
  setTimeout(() => {
    console.log('Função 3');
  }, Math.random() * 3000);
}
function func1(callback) {
  setTimeout(() => {
    console.log('Função 1');
    callback('Icaro');
  }, Math.random() * 3000);
}
console.log('Olá! O código começou ser executado.');
func1(func2);
func3();
console.log('Tchau! o código terminou.');

// EX 06 ------------------------------------
function renderCountry(country) {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  li.innerHTML = `${countries.nativeName} - ${countries.capital}`;
  ul.appendChild(li);
  console.log(countries);
}

function fetchCountry(name) {
  return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
  .then((response) => {
    response.json()
    .then((countries) => {
      renderCountry(countries[0]);
      fetch('https://restcountries.eu/rest/v2/name/brazil')
      .then(response) => {
          response.json()
          .then((countries) => {
            renderCountry(countries[0]);
          })
      }
    });
  });
}
window.onload = () => {
  fetchCountry('brasil');
  fetchCountry('china');
  fetchCountry('usa');
};

// Exercícios para finalizar o dia ------------------------------------
// Hora de por a mão na massa!
