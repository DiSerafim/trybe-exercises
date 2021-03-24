// Conteudo do dia 23/03 inicio do bloco_7 - 7.1

// CONTEUDO Parte I - var, let e const
// EX-1:
function userInfo() {
    let userEmail = 'maria@email.com';
  
    // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
    console.log(userEmail);
  }
  userInfo();

// EX-2:
if (true) {
    // inicio do escopo do if
    var userAge = "20";
    console.log(userAge); // 20
    // fim do escopo do if
  }
  console.log(userAge); // 20

// EX-3:
var userName = "Isabella";
var userName = "Lucas";
console.log(userName); // Resultado: Lucas

// EX-4:
const favoriteLanguage = "Javascript";
favoriteLanguage = "Python";
console.log(favoriteLanguage); // Erro

let favoriteTechnology = "Machine learning";
favoriteTechnology = "Facial recognition";
console.log(favoriteTechnology); // Facial recognition

// EX-5:
const userInfo = {
    name: "Cláudio",
    id: "5489-2",
    email: "claudio@email.com"
  };
  userInfo.name = "João"
  
  console.log(userInfo) // { name: "João", id: "5483-2", email: "claudio@email.com }

// EX-6:
const technologies = ['Javascript', 'CSS', 'HTML'];
technologies.push('React');
console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

technologies = ['Javascript', 'CSS', 'HTML', 'React']
console.log(technologies); // Erro

// CONTEUDO Parte II - template literals
// EX-1:
const myName = "Isabella"
console.log('Hello' + ' ' + myName + '!');

// EX-2:
const myName = "Isabella"
console.log(`Welcome ${myName}!`);

// EX-3:
// Com o template literals
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
)

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n')

// CONTEUDO Parte III - arrow functions
// EX-1:
const printName = function () {
    const myName = "Lucas";
    return myName;
  }
  console.log(printName());

// EX-2:
const printName = () => {
    const myName = "Lucas";
    return myName;
  }
  console.log(printName());

// EX-3:
const printName = () => "Lucas";
console.log(printName());

// Ex-4:
const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10));

// EX-5:
const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));

// CONTEUDO Parte IV - ternary operator
// EX-1:
// A sintaxe básica do operador ternário é muito simples:
`expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`;

// Assim, por exemplo, podemos ter expressões com a seguinte estrutura:
const trueExpression = (1 + 1 === 2) ? `isso é verdade` : `isso é mentira`;
console.log(trueExpression) // isso é verdade

const falseExpression = (2 + 2 === 3) ? `isso é verdade` : `isso é mentira`;
console.log(falseExpression) // isso é mentira

// EX-2:
// Situação em que é mais simples usar o operador ternário:
const checkIfElse = (age) => {
    if (age >= 18) {
      return `Você tem idade para dirigir!`;
    } else {
      return `Você ainda não tem idade para dirigir...`;
    }
  };
  
  const checkTernary = (age) => (
    age >= 18 ? `Você tem idade para dirigir!` : `Você ainda não tem idade para dirigir...`
  );
  
  // ------------------------
  
  // Situação em que usar o operador ternário não faz muito sentido:
  const checkIfElse = (fruit) => {
    if (fruit === `maçã`) {
      return `Essa fruta é vermelha`;
    } else if (fruit === `banana`) {
      return `Esta fruta é amarela`;
    } else {
      return `Não sei a cor`;
    }
  };
  
  const checkTernary = (fruit === `maçã`) ? `Essa fruta é vermelha` 
    : ((fruit === `banana`) ? `Esta fruta é amarela` : `Não sei a cor`);
  
  // Aninhar operadores  ternários, como no exemplo acima, não é uma boa prática,
  // pois torna o seu código truncado e difícil de ler, tirando todo o sentido de um
  // operador cujo objetivo é facilitar a sua vida e a da pessoa que lerá seu código
  // no futuro!



// AULA AOVIVO
const x = 3;
x = 18;
console.log(x);

// arrow function 
// Ela é uma função anonima
name => 


// modo de criar função - 1
function nomeDaFunção () {
    // código da função
}

// modo de criar função - 2
botao.addEventListener('click', function () {
    // código da função
});

// modo de criar função - 3
const nomeFuncao = () => {
    // código da função
}
nomeFuncao(param);

// Ex 1:

function soma (num1, num2) {
    return num1 + num2;
}

// Ex 2:
const soma = (num1, num2) => num1 + num2;
    console.log(soma(2, 8));

// Ex 3:
const funcao = () => {
    console.log('olá, Tudo bem');
}

// Praica - 1
function calcArea() {
    return (base * height) / 2;
} 
console.log(calcArea(10, 5));
// fatorando
const calcArea = () => (base * height) / 2;
console.log(calcArea(10, 5));


// Template literals
// criar texto de um email
const to = 'Turma 10 - Tribo B';
const value = 'R$ 17,90';
const email = 
`Olá ${to},
o valor da sua cobrança é ${value}.
Esta é uma mensagem automática.`;
console.log(email);


// CONTEUDO - Exercícios

