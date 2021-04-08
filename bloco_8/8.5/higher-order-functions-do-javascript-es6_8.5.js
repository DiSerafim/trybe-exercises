// Fundamentos do Desenvolvimento Web

// Bloco 08.5:
// JavaScript ES6 - Higher Order Functions - spread operator, parâmetro rest, destructuring e mais

// O que vamos aprender?

/* Hoje você vai aprender sete features do ES6 que são muito úteis na hora de desenvolver uma aplicação:
- spread operator;
- parâmetro rest;
- object destructuring;
- array destructuring;
- default destructuring;
- abbreviation object literal;
- default params. */

// Você será capaz de:
/* 
- Aplicar corretamente spread operator ;
- Aplicar corretamente parâmetro rest ;
- Aplicar corretamente object destructuring ;
- Aplicar corretamente array destructuring ;
- Aplicar corretamente default destructuring ;
- Aplicar corretamente abbreviation object literal ;
- Aplicar corretamente default params . 
*/

// Por que isso é importante?
// O ES6 introduziu várias features que contribuem para melhorar a escrita do seu código.
// Saber usá-los te ajudará a escrever códigos mais concisos e limpos, facilitando a compreensão de quem for lê-lo futuramente. Object destructuring , por exemplo, é muito útil na hora de realizar uma tarefa recorrente de desenvolvedor: selecionar certos campos vindos da resposta de uma API . Com object destructuring você consegue declarativamente realizar essa tarefa, deixando seu código mais legível.

// Conteúdos --------------------------------------------------------------------------------
- spread operator

// Como você faria para adicionar items a um array? Você pode ter pensado em usar o push , como no exemplo abaixo:
const numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers); // [1, 2, 3, 4];

// Essa solução é válida, e o seu raciocínio está correto! Mas...para onde foi parar o array original numbers ? Observe que quando usamos o push para adicionar algo a um array, ele será sobrescrito. Neste exemplo simples, sobrescrever o array numbers não foi um problema. No entanto, em aplicações maiores em que você precisa atualizar alguma informação de um array ou objeto, você pode querer manter as informações originais e apenas criar uma cópia do array original com o que precisa ser alterado. Em cenários como esse, vamos deixar o push de lado e usar um recurso incrível para adicionar valores a objetos iteráveis: o operador spread . E não para por ai! Você verá que o spread pode ser utilizado para combinar objetos e arrays, para copiar valores de objetos iteráveis, e em funções que recebem múltiplos argumentos.
// Primeiramente, assista a este vídeo que explica o operador spread *.
const carros = ['Gol', 'HB20', 'Focus'];
const motos = ['Biz', 'R1'];
const vaiculos = [...carros, ...motos];
console.log(vaiculos); // [ 'Gol', 'HB20', 'Focus', 'Biz', 'R1' ]

// --------------------------

const connhecimentosTrybe = {
    softSkills: true,
    hardSkills: true,
    trabalho: true,
}
const pessoa = {
    nome: 'Nadia',
    idade: '28',
    cidade: 'BH',
}
const pessoaTrybe = {
    ...pessoa,
    ...connhecimentosTrybe,
    esporte: 'Corrida',
}
console.log(pessoaTrybe);

// Como vimos no vídeo, o operador spread é um recurso do ES6 que nos permite espalhar os valores de um objeto iterável, como um array, em um novo objeto. Dessa forma, apenas copiamos as informações do array original e colamos em outro lugar. Acompanhe o exemplo numérico abaixo para fixar melhor a ideia do spread:
const numbers = [1, 2, 3];
const newArray = [...numbers, 4, 5, 6];
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ];
console.log(numbers); // [ 1, 2, 3 ];

// Muito legal, né? E você pode usar o spread em outra posição de newArray . Experimente passar o ...numbers no final do array e veja o que acontece. O spread é muito útil também quando precisamos combinar arrays em uma única estrutura, como ilustrado abaixo:
const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months); /* [
  'JAN', 'FEV', 'MAR',
  'ABR', 'MAI', 'JUN',
  'JUL', 'AGO', 'SET',
  'OUT', 'NOV', 'DEZ'
] */

// Outro uso interessante do spread é no argumento de uma função que recebe vários parâmetros. No próximo exemplo, temos uma função que calcula o IMC (índice de massa corporal) de um paciente. A função recebe como parâmetros o peso e a altura da pessoa, e retorna o resultado arredondado do IMC. Podemos salvar os dados do paciente em um array e utilizar o spread para expandir esses valores no argumento da função que calcula o IMC:
const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7]
console.log(imc(...patientInfo)); // 20.76

// E você pode aplicar esse conceito em funções prontas do Javascript que recebem múltiplos parâmetros, como as funções Math.max e Math.min . Vamos ver um exemplo?
const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];
console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5

// Outro exemplo que pode ser válido para a sua compreensão é que você também pode fazer o mesmo com objetos. Veja o exemplo abaixo:
const people = {
    id: 101,
    name: 'Alysson',
    age: 25,
  };
const about = {
    address: 'Av. Getúlio Vargas, 1000',
    occupation: 'Developer',
};
const customer = { ...people, ...about };
console.log(customer); /* {
id: 101,
name: 'Alysson',
age: 25,
address: 'Av. Getúlio Vargas, 1000',
occupation: 'Developer'
} */

// Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens , faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread .
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['', '', ''];
// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['', '', ''];
const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
};
console.log(fruitSalad(specialFruit, additionalItens));

// Conteúdos --------------------------------------------------------------------------------
Parâmetro rest

// O parâmetro rest é uma feature do ES6 que permite com que você crie funções que recebam um número variável de argumentos. Assim, suas funções ficam mais flexíveis. Os argumentos que serão passados como parâmetro são salvos em um array que pode ser acessado de dentro da função. Por isso, podemos passar qualquer tipo de parâmetro quando usamos o rest . Todos eles serão colocados dentro de um array, o que te permite usar métodos como o .length.
function quantosParams(...args) {
    console.log('parâmetros:', args);
    return `Você passou ${args.length} parâmetros para a função.`;
}
console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

// Observe no segundo console.log que passamos diferentes tipos de argumentos para a função quantosParams e todos foram colocados em um array. Quer ver mais um exemplo onde o rest é muito útil? Acompanhe!
const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88

// Nós já aprendemos sobre higher order functions e vimos como o método reduce é útil para somar os elementos de um array. No exemplo acima, a função sum calcula a soma de todos os argumentos passados a ela - independente do número. Como o parâmetro rest "empacota" todos os argumentos em um array, podemos utilizar o reduce para somar tudo o que estiver dentro deste array. Experimente passar mais números como argumento para a função sum . Você verá que independente do número de argumentos passados, a função irá executar a soma. Sua função é muito mais flexível quando queremos passar múltiplos parâmetros com o rest pois você não precisa especificar quantos argumentos a função irá receber!

// Conteúdos --------------------------------------------------------------------------------
object destructuring
// Você certamente já precisou extrair valores de um objeto em Javascript. No exemplo abaixo, como você faria para imprimir o valor de cada propriedade do objeto product ?
const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
};

// Uma forma seria acessar os valores utilizando a notação de objeto, como console.log(product.name) , e repetir para cada propriedade. Essa tarefa é repetitiva e verbosa...quando lidamos com objetos mais complexos, ela seria até mesmo impraticável. Para a nossa alegria o ES6 introduz mais um recurso para tornar atividades corriqueiras, como acessar os valores de um objeto, mais simples e com menos declarações. Essa feature é o que chamamos de desestruturação de objeto ou object destructuring .

// Uma forma seria acessar os valores utilizando a notação de objeto, como console.log(product.name) , e repetir para cada propriedade. Essa tarefa é repetitiva e verbosa...quando lidamos com objetos mais complexos, ela seria até mesmo impraticável. Para a nossa alegria o ES6 introduz mais um recurso para tornar atividades corriqueiras, como acessar os valores de um objeto, mais simples e com menos declarações. Essa feature é o que chamamos de desestruturação de objeto ou object destructuring.
const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
};
const { name } = product;
console.log(name); // Smart TV Crystal UHD

// Se quisermos pegar, além do nome, o vendedor do produto, podemos incluir a propriedade seller dentro das chaves para acessar o seu valor correspondente:
const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
};
const { name, seller } = product;
console.log(name); // Smart TV Crystal UHD
console.log(seller); // Casas de Minas

// Dessa forma, conseguimos extrair o valor da propriedade que precisamos acessar com muito menos código, atribuindo este valor à variáveis. Vale lembrar também que podemos adicionar quantas propriedades forem necessárias dentro das chaves, basta seguirmos a sintaxe da desestruturação de objetos.

// Outro truque legal dessa feature é que você pode reatribuir o nome da propriedade que deseja acessar ao declará-la como uma variável. Acompanhe o exemplo abaixo.
const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
  };

// As propriedades do objeto student não são nada descritivas, não é mesmo? Se fossemos desestruturar esse objeto, as variáveis que seriam criadas ao extrair as propriedades de students teriam nomes sem significado...pensando nisso, podemos trocar o nome da variável ao fazermos a desestruturação:
const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
};
const { a: name, b: classAssigned, c: subject } = student;
console.log(name); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática

// Nesse exemplo, informamos qual a propriedade que gostaríamos de acessar e a declaramos em uma nova variável seguindo a sintaxe: { propriedade:nomeVariável } = objeto . Essa forma de acessar um valor de um objeto e atribuí-lo a uma variável é equivalente ao que temos abaixo:
const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
};
const name = student.a;
console.log(name); // Maria

// Você deve estar se perguntando: o que acontece quando tento acessar um campo inexistente? Experimente fazer esse teste! Como sabemos, o Javascript não vai conseguir fazer essa associação porque esse campo não existe e a variável receberá o valor undefined .

// Por fim, uma outra situação que podemos usar a desestruturação de objetos é quando queremos passar os valores de um objeto como parâmetros para uma função, como no exemplo abaixo:
const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
};
const printProductDetails = ({ name, price, seller }) => {
console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};
printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas

// Conteúdos --------------------------------------------------------------------------------
array destructuring

// Agora que você entende como a desestruturação funciona, você pode estar se perguntando: será que ela também se aplica a arrays ? Afinal de contas, arrays são objetos iteráveis e têm algumas similaridades com os objetos em Javascript... Este questionamento é válido, e a resposta é: SIM! Podemos desestruturar arrays da mesma forma que desestruturamos objetos usando a notação para array destructuring .

// Como vimos na sessão anterior, podemos utilizar a desestruturação para acessar valores de um objeto e atribuí-los a variáveis. Você certamente já acessou um valor de uma posição do array da seguinte forma:
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const firstCountry = arrayCountries[0];
const secondCountry = arrayCountries[1];
const thirdCountry = arrayCountries[2];
const fourthCountry = arrayCountries[3];
console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada

// Com a desestruturação de array podemos declarar todas as variáveis contendo os nomes dos países usando apenas uma única linha de código:
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;
console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada

// hora de praticar com exercícios!

// Exercício de array destructuring 1.
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1 2

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1 2 5

// Exercício de array destructuring 2.
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1 2
console.log(arr); // [ 3, 4, 5, 7 ]


// Conteúdos --------------------------------------------------------------------------------
default destructuring

// Agora você já sabe como aplicar desestruturação em objetos e arrays. Você se lembra do que acontece quando tentamos acessar:
// uma propriedade que não existe em um objeto?
// um valor em uma posição inexistente em um array?
// Ou seja:
const person = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
};
const { nationality } = person;
console.log(nationality);

// Essa desestruturação funciona? E se funciona, qual o valor que aparece se fizer console.log(nationality) ? Copie esse código e teste você mesmo. 😉

// Como vimos nas sessões anteriores, quando tentamos acessar uma propriedade que não existe, como nationality , o valor retornado é undefined . E se você quisesse dar um valor padrão para nationality , caso essa propriedade não exista no objeto? Você consegue atribuir esse valor padrão utilizando default destructuring , que é mais um recurso do ES6:
const person = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
};
const { nationality = 'Brazilian' } = person;
console.log(nationality); // Brazilian

// Analogamente, o mesmo pode ser feito na hora de desestruturar um array:
const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0

// Que tal praticarmos default destructuring com um exercício de fixação? Do jeito que está, quando passamos person para a função nationality o retorno é João is undefined. Ajuste a função nationality para que a chamada nationality(person) retorne João is Brazilian.
const getNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;
const person = {
    firstName: 'João',
    lastName: 'Jr II',
};
const otherPerson = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russian',
};
console.log(getNationality(otherPerson)); // Ivan is Russian
const { nationality = 'Brazilian' } = person; // ERROR!! TENTE resolver
console.log(getNationality(person));



// Conteúdos --------------------------------------------------------------------------------
Object property shorthand

// Você já deve ter percebido que uma das vantagens do ES6 é que a nova sintaxe elimina códigos repetitivos, contribuindo para a limpeza do código. A property shorthand é um recurso muito útil na hora de declarar objetos em Javascript. A função abaixo recebe como parâmetro informações sobre um novo usuário e retorna um objeto contendo esses dados. Observe que as propriedades do objeto retornado e os argumentos que passamos para newUser são idênticos. Essa repetição parece desnecessária, não é mesmo?
const newUser = (id, name, email) => {
    return {
      id: id,
      name: name,
      email: email,
    };
};
console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

// É exatamente essa repetição que a feature property shorthand elimina: podemos simplesmente substituir id: id por id que o Javascript entende que você quer atribuir o valor de id a uma propriedade com o mesmo nome que o parâmetro passado:
const newUser = (id, name, email) => {
    return {
      id,
      name,
      email,
    };
};
console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

// Muito legal, não é mesmo? Este é mais um recurso que te permite escrever códigos mais concisos! Agora é hora de praticar: altere a função getPosition utilizando a property shorthand .
const getPosition = (latitude, longitude) => ({
    latitude: latitude,
    longitude: longitude});
console.log(getPosition(-19.8157, -43.9542));


// Conteúdos --------------------------------------------------------------------------------
default parameters
// Por último, mas não menos importante, vamos entender o que é o parâmetro default . Imagine que você queira executar a função greeting abaixo, que imprime uma saudação para o usuário. O que acontece quando você chama a função sem passar o argumento que ela espera? Faça esse teste com o exemplo no seu editor de códigos!
const greeting = (user) => console.log(`Welcome ${user}!`);
greeting(); // Welcome undefined!

// Você verá que a função retornará undefined . Você consegue pensar em uma forma de corrigir esse problema? Afinal, podemos esquecer de chamar a função com o nome do usuário. Uma solução seria:
const greeting = (user) => {
    const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
    console.log(`Welcome ${userDisplay}!`);
};
greeting(); // Welcome usuário!

// Essa solução não parece muito elegante, não é mesmo? Afinal, precisamos de incluir uma linha para checar se o parâmetro é indefinido. Se sim, definimos que user será 'usuário' . Caso contrário, a função irá imprimir a mensagem com o nome do usuário passado como argumento.

// Com o ES6, podemos pré-definir um parâmetro padrão para a função. Assim, podemos reescrever o exemplo anterior da seguinte forma:
const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);
greeting(); // // Welcome usuário!

// Simples assim! Passar um parâmetro como default é um pequeno detalhe que torna o seu código muito mais semântico. Assim, o default será utilizado caso nenhum argumento seja fornecido a função. Você pode adicionar mais de um parâmetro default caso a sua função receba vários argumentos, se achar necessário. Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.
const multiply = (number, value) => {
    // Escreva aqui a sua função
    
};
console.log(multiply(8));



// coteúdo aulaao vivo



// Exercícios para finalizar o dia
// Hora de por a mão na massa!
