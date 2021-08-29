// ============================== Intro - NodeJS
// -- > CONTEÚDO do dia - 26.1 -- <---/ INICIO --------------------------------------//
// ==============================

// 1 O que é Node.js?
// 2 Por que usar Node.js
// 3 Sistema de módulos
// 4 Exportando e importando de módulos
// 5 NPM
// 6 Criando um script simples

// Utilizar os comandos do npm para criar e gerenciar pacotes e dependências;
// Utilizar o comando node para executar scripts;
// Utilizar o sistema de módulos do Node.js;
// Criar scripts simples, com interação do usuário, com Node.js.


// ### O que é Node.js?
// -- Node.js surgiu do V8, que é a ferramenta do Google Chrome responsável por ler e executar as instruções que escrevemos em JavaScript. Ao software responsável por interpretar o código dá-se o nome de interpretador, engine e, de runtime. Por isso, é comum dizer que o "NodeJS é um runtime JavaScript".

// ### Por que usar Node.js
// -- Dados do site ModuleCounts.com mostram que, o NPM, que é onde os pacotes Node.js são disponibilizados, é o repositório com mais pacotes quando comparado a repositórios de outras grandes linguagens.
// -- grandes vantagens que o Node.js tem sobre tecnologias concorrentes: uma comunidade extremamente ativa e uma grande quantidade de ferramentas para resolver os mais diversos tipos de problema.

// ### Sistema de módulos
// -- um módulo é um "pedaço de código" que pode ser organizado em um ou mais arquivos, e que possui escopo próprio: suas variáveis, funções, classes e afins só estão disponíveis nos arquivos que fazem parte daquele módulo. Um módulo é uma funcionalidade ou um conjunto delas que se encontram isoladas do restante do código.
// O Node.js possui 3 tipos de módulos: internos, locais e de terceiros.

// 1 Módulos internos
// -- (ou core modules) são inclusos no Node.js e instalados junto com ele quando baixamos o runtime. core modules são:
// fs: Fornece uma API para interagir com o sistema de arquivos de forma geral;
// url: Provê utilitários para ler e manipular URLs;
// querystring: Disponibiliza ferramentas para leitura e manipulação de parâmetros de URLs;
// util: Oferece ferramentas e funcionalidades comumente úteis a pessoas programadoras.

// 2 Módulos locais
// -- São aqueles definidos juntamente à nossa aplicação. Representam funcionalidades ou partes do nosso programa que foram separados em arquivos diferentes.

// -- Podem ser publicados no NPM para que outras pessoas possam baixá-los e utilizá-los, o que nos leva ao nosso próximo e último tipo de módulo.

// 3 Módulos de terceiros
// -- Criados por outras pessoas e disponibilizados para uso através do npm.
// -- Podemos criar e publicar nossos próprios módulos, seja para utilizarmos em diversas aplicações diferentes, seja para permitir que outras pessoas os utilizem.

// Resumindo módulos no Node.js: são "caixinhas" que isolam suas funções, variáveis e afins de outras partes do código; eles podem ser internos(que vêm com o Node.js), locais(criados por nós na nossa máquina) ou de terceiros (baixados do NPM).
// -- o NPM é o site em que publicamos nossos pacotes, e npm é a ferramenta de linha de comando que realiza o gerenciamento desses pacotes pra nós.


// ### Exportando e importando de módulos
// Existem dois sistemas de módulos difundidos na comunidade JavaScript:
// 1 Módulos ES6;
// 2 Módulos CommonJS.

// ES6
// O nome ES6 vem de ECMAScript 6, que é a especificação seguida pelo JavaScript.
// Na especificação do ECMAScript 6, os módulos são importados utilizando a palavra-chave import, tendo como contrapartida a palavra-chave export para exportá-los.

// -- O Node.js não possui suporte a módulos ES6 por padrão, sendo necessário o uso de transpiladores, como o Babel, ou supersets da linguagem, como o TypeScript.
// -- Transpiladores são ferramentas que leêm o código-fonte escrito em uma linguagem como o Node.js e produz o código equivalente em outra linguagem.
// -- Supersets são linguagens que utilizam um transpilador para adicionar novas funcionalidades ao JavaScript.

// CommonJS
// -- O CommonJS é o sistema de módulos implementado pelo Node.js nativamente, o sistema que utilizaremos daqui pra frente.

// Exportando módulos
// -- Para exportar algo no sistema CommonJS, utilizamos a variável global module.exports, atribuindo a ela o valor que desejamos exportar:
// brlValue.js
const brl = 5.37;

module.exports = brl;
// -- O module.exports pode receber qualquer valor válido em JavaScript, incluindo objetos, classes, funções e afins.

// brlValue.js
const brl = 5.37;
const usdToBrl = (valueInUsd) => valueInUsd * brl;

module.exports = usdToBrl;
// -- estamos exportando uma função de forma que podemos utilizá-la para converter um valor em dólares para outro valor, em reais.
// -- O uso desse nosso módulo se daria da seguinte forma:
// index.js
const convert = require('./brlValue');
const usd = 10;
const brl = convert(usd);

console.log(brl) // 53.7

// -- uponhamos que seja desejável exportar tanto a função de conversão quanto o valor do dólar (a variável brl). Para isso, podemos exportar um objeto contendo as duas constantes da seguinte forma:
// brlValue.js
const brl = 5.37;
const usdToBrl = (valueInUsd) => valueInUsd * brl;

module.exports = {
  brl,
  usdToBrl,
};

// -- Dessa forma, ao importarmos o módulo, receberemos um objeto como resposta:
// index.js
const brlValue = require('./brValue');

console.log(brlValue); // { brl: 5.37, usdToBrl: [Function: usdToBrl] }
console.log(`Valor do dólar: ${brlValue.brl}`); // Valor do dólar: 5.37
console.log(`10 dólares em reais: ${brlValue.usdToBrl(10)}`); // 10 dólares em reais: 53.7

// -- podemos utilizar object destructuring para transformar as propriedades do objeto importado em constantes no escopo global:
const { brl, usdToBrl } = require('./brValue');

console.log(`Valor do dólar: ${brl}`); // Valor do dólar: 5.37
console.log(`10 dólares em reais: ${usdToBrl(10)}`); // 10 dólares em reais: 53.7

// Importando módulos

// -- Módulos locais
// -- precisamos passar para o require o caminho do módulo, seguindo a mesma assinatura. exemplo;
require('./meuModulo');

// -- podemos importar uma pasta. Isso é útil, pois muitas vezes um módulo está dividido em vários arquivos, mas desejamos importar todas as suas funcionalidades de uma vez só. Nesse caso, a pasta precisa conter um arquivo chamado index.js , que importa cada um dos arquivos do módulo e os exporta da forma mais conveniente.
// exemplo:

// meuModulo/funcionalidade-1.js
module.exports = function () {
  console.log('funcionalidade1');
}

// meuModulo/funcionalidade-2.js
module.exports = function () {
  console.log('funcionalidade2');
}

// meuModulo/index.js
const funcionalidade1 = require('./funcionalidade-1');
const funcionalidade2 = require('./funcionalidade-2');

module.exports = { funcionalidade1, funcionalidade2 };

// -- utilizamos a palavras-chave module.exports
// -- O module.exports nos permite definir quais desses "objetos" internos ao módulo serão exportados, estarão acessíveis para arquivos que importarem aquele módulo.

// -- Para importarmos e utilizarmos o módulo meuModulo , basta passar o caminho da pasta como argumento para a função require , assim:

// minha-aplicacao/index.js
const meuModulo = require('./meuModulo');1
// { funcionalidade1: [Function: funcionalidade1], funcionalidade2: [Function: funcionalidade2] }
console.log(meuModulo);

meuModulo.funcionalidade1();

// -- Módulos locais
// -- devemos passar o nome do pacote como parâmetro para a função require.
// exemplo
require('fs');
// -- importa o pacote fs 

// -- Uma vez que importamos um pacote, podemos utilizá-lo no nosso código como uma variável, dessa forma:

const jurubeba = require('fs');

jurubeba.readFileSync('./meuArquivo.txt');

// -- Módulos de terceiros
// -- Módulos de terceiros são importados da mesma forma que os módulos internos: passando seu nome como parâmetro para a função require.

// -- Precisamos primeiro instalá-los na pasta do projeto em que queremos utilizá-los.

// ### NPM
// -- (sigla para Node Package Manager ), o repositório oficial para publicação de pacotes NodeJS. É para ele que realizamos upload dos arquivos de nosso pacote quando queremos disponibilizá-lo para uso de outras pessoas ou em diversos projetos.

// -- Utilizando o CLI npm
// -- Ferramenta oficial que auxilia no gerenciamento de pacotes, sejam eles dependências da nossa aplicação ou nossos próprios pacotes. 
// -- É através dele que criamos um projeto, instalamos e removemos pacotes, publicamos e gerenciamos versões dos nossos próprios pacotes.

// -- Para entender melhor o npm e seu uso na prática
// 1 mkdir pakage-nodejs 
// 2 cd pakage-node.js
// 3 npm init  
// agora é só clicar 'enter' para ir passando as opções
{
  "name": "pakage-node",
  "version": "1.0.0",
  "description": "Meu primeiro pacote criado no conteudo do dia",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Diego Serafim",
  "license": "ISC"
}

// Is this OK? (yes) - 'enter' para confirmar que está tudo correto

// verificando o resultado:
// npm init -y

// -- npm install
// https://github.com/sindresorhus/dog-names

// 1 npm install dog-names
//  entre na pasta onde foi feita a instalação, para ver como ficou
// crie um index.js com o código:
const dogNames = require('dog-names');
dogNames.femaleRandom(); // 'Lucy'

// adicione a linha em 'scripts' no pakage.json
// -- "start": "node index.js"

// -- Cheat Sheet dos comandos
// https://github.com/tryber/Trybe-CheatSheets/blob/master/backend/nodejs/npm/README.md

// -- npm init
// -- permite criar, de forma rápida e simplificada, um novo pacote Node.js na pasta onde é executado.

// -- npm init -y
// -- dessa forma, nenhuma pergunta será feita, e a inicialização será realizada com os valores padrão.

// -- npm run
// -- faz com que o npm execute um determinado script configurado no package.json . Scripts são "atalhos" que podemos definir para executar determinadas tarefas relacionadas ao pacote atual.

// -- Para criar um script, precisamos alterar o package.json e adicionar uma nova chave ao objeto scripts. O valor dessa chave deve ser o comando que desejamos que seja executado quando chamarmos aquele script.
{
  "scripts": {
    "lint": "eslint ."
  }
}
// -- lint é o nome do script que digitamos no terminal para executar o ESLint na pasta atual.
// npm run lint

// -- npm start
// -- age como um "atalho" para o comando npm run start, uma vez que sua função é executar o script start definido no package.json


// -- Por exemplo, se tivermos um pacote que calcula o IMC (Índice de Massa Corporal) de uma pessoa cujo código está no arquivo imc.js , é comum criarmos o seguinte script:
{
  // ...
  "scripts": {
    "start": "node imc.js"
  }
  // ...
}

// -- npm install
// -- responsável por baixar e instalar pacotes Node.js do NPM para o nosso pacote, formas de usá-lo:

// 1 npm install <nome do pacote>: Baixa o pacote do registro do NPM e o adiciona ao objeto dependencies do package.json

// 2 npm install -D <nome do pacote>: Baixa o pacote do registro do NPM, o adiciona ao objeto devDependencies do package.json, indicando que o pacote em questão não é necessário para executar a aplicação, mas é necessário para desenvolvimento, para alterar o código daquela aplicação. Muito útil ao colocar a aplicação no ar, pois pacotes marcados como devDependencies podem ser ignorados, já que vamos apenas executar a aplicação, e não modificá-la.

// 3 npm install: Baixa e instala todos os pacotes listados nos objetos de dependencies e devDependencies do package.json. Sempre deve ser executado ao clonar o repositório de um pacote para garantir que todas as dependências desse pacote estão instaladas.

// ### Criando um script simples

// -- Criando o pacote Node.js
// 1 crie uma nova pasta, chamada hello-world, onde colaremos nosso código.
// 2 dentro da pasta, execute 'npm init'. Deixe todas as perguntas com o valor padrão, a não ser o nome da pessoa autora (author:), onde você colocará seu nome.
// 3 Abra a pasta hello-world no VSCode e vamos começar a criar nosso script.

// -- Criando o código do Hello, world!
// -- crie um arquivo chamado index.js
// -- Dentro do index.js , adicione o seguinte código:
console.log('Hello, world!');

// -- Vamos criar um script start para estarmos aderentes às convenções do Node.js.

// -- Criando o script start
// -- abra o package.json da pasta hello-world e altere a linha destacada para criar o script start dessa forma:
{
  "name": "hello-world",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
  "author": "Seu nome",
  "license": "ISC"
}

// -- Executando o script
// -- navegue até a pasta hello-world no terminal e execute npm start.

// -- Lendo input do terminal
// -- Para podermos ler o nome e sobrenome da pessoa que executou o script, vamos utilizar um pacote de terceiros: 
// https://www.npmjs.com/package/readline-sync

// -- primeiro instalar o readline-sync pra podermos utilizá-lo no código.
// -- basta executarmos, dentro da pasta hello-world, o comando npm i readline-sync. A letra i é um atalho para install. também funciona com a flag -D para devDependencies.

// -- podemos utilizá-lo em nosso script. Para isso, precisamos, primeiro, importá-lo:
const readline = require('readline-sync');
// console.log('Hello, world!');

// -- Com o pacote em mãos, podemos utilizar as funções 'question' e 'questionInt' disponibilizadas por ele para perguntar à pessoa usuária seu nome e idade:

// -- 'question' interpreta a resposta como uma string comum, a função 'questionInt' converte a resposta para número utilizando o parseInt e retorna um erro caso a pessoa tente inserir algo que não seja um número válido.

// o próximo e último passo é utilizarmos essas novas variáveis para compor nossa mensagem de olá.

// -- > CONTEÚDO do dia - 26.1 -- <---/ FIM -----------------------------------------//
// ==============================
// -- > AULA ao VIVO - 26.1 ----- <---/ INICIO --------------------------------------//
// ==============================

 
 
// -- > AULA ao VIVO - 26.1 ----- <---/ FIM -----------------------------------------//
// ==============================
// -- > EXERCÍCIO do dia - 26.1 -- <---/ INICIO --------------------------------------//
// ==============================

// Agora a prática

// Crie uma nova pasta e, dentro dela, crie um pacote Node.js com o npm init chamado my-scripts.
// # mkdir exercicio
// # cd exercicio 
// # npm init

// 1- Crie um script para calcular o Índice de Massa Corporal(IMC) de uma pessoa.
// - A fórmula para calcular o IMC é peso / altura ^ 2.
// Obs: Lembre-se que a altura é em metros, caso deseje usar em centímetros a conversão para metros será necessária.
// - Comece criando um novo pacote node com npm init e respondendo às perguntas do npm.
// - Por enquanto, não se preocupe em pedir input da pessoa usuária. Utilize valores fixos para peso e altura.
// - Armazene o script no arquivo imc.js.

// # cd exercicio 
// # cria o arquivo 'imc.js'
// # isere o código

// # imc.js
const peso = 78;
const altura = 1.70;

function indiceMassaCorporal() {
  console.log(`Peso: ${peso}, Altura: ${altura}`);
  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);
  console.log(`IMC: ${imc}`);
}

indiceMassaCorporal();

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/pow

// # Math.pow()
// A função Math.pow() retorna a 'base' elevada ao 'expoente' power, ou seja, baseexpoente.
// - Math.pow(base, expoente)
// base - O número da base.
// expoente - O expoente usado para elevar a base.

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

// # .toFixed()
// formata um número utilizando notação de ponto fixo.
// - numObj.toFixed([dígitos])
// dígitos - O número de dígitos que aparecem depois do ponto decimal; este pode ser um valor entre 0 e 20,

// veja o resultado

// # node imc.js                  
// Peso: 78, Altura: 1.7
// IMC: 269896.19

// 2- Agora, permita que o script seja executado através do comando 'npm run imc'
// - O novo script criado deve conter o comando que chama o node para executar o arquivo 'imc.js'.

// # edita o package.json
{
  // ...
  "scripts": {
    // ...
    "imc": "node imc.js"
  }
  // ...
}
// # teste o resultado
// # npm run imc

// 3- Chegou a hora de tornar nosso script mais interativo! Vamos adicionar input de quem usa.
// - Você já utilizou o pacote 'readline-sync' para esse fim.
// - Substitua os valores fixos de peso e altura por dados informados pela pessoa ao responder as perguntas "Qual seu peso?" e "Qual sua altura?" no terminal.

// # instala o 'readline-sync'
// # npm i readline-sync
// # importa o 'readline-sync' no 'imc.js'

// # imc_readline.js
const readline = require('readline-sync');

const peso = readline.questionInt('Qual o seu peso? (em Kg)');
const altura = readline.questionInt('Qual a sua altura? (em cm)');

function indiceMassaCorporal() {
  console.log(`Peso: ${peso}, Altura: ${altura}`);
  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);
  console.log(`IMC: ${imc}`);
}

indiceMassaCorporal();

// # veja o resultado
// # node imc_readline.js

// 4- Agora temos um problema: peso não é um número inteiro! Isso quer dizer que precisamos mudar um pouco a forma como solicitamos o input desse dado.
// - O pacote 'readline-sync' possui uma função específica para tratar esses casos. Consulte a documentação do pacote e encontre o método adequado para realizar input de floats.
// - Encontrou a função? Show! Agora utilize-a para solicitar o input de peso.

// # questionFloat
// # numFloat  = readlineSync.questionFloat([query[, options]]) 
// interpreta como um número de ponto flutuante e retorna o número(não string).
// # Isso analisa a entrada tanto quanto possível por parseFloat().
// Exemplo, ele interpreta ' 3.14 ', '003.1400', '314e-2'e '3.14PI'como 3.14
// Fonte: https://www.npmjs.com/package/readline-sync

// # imc_readline_float.js
const readline = require('readline-sync');

const peso = readline.questionFloat('Qual o seu peso? (em kg) ');
const altura = readline.questionFloat('Qual a sua altura? (em cm) ' );

function indiceMassaCorporal() {
  console.log(`Peso: ${peso}, Altura: ${altura}`);
  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);
  console.log(`IMC: ${imc}`);
}

indiceMassaCorporal();

// # veja o resultado
// # node imc_readline_float.js

// 5- Vamos sofisticar um pouco mais nosso script. Além de imprimir o IMC na tela, imprima também em qual categoria da tabela abaixo aquele IMC se enquadra:
//  Considere a seguinte tabela para classificar a situação do IMC:
/*
| IMC                                       | Situação                  |
| ----------------------------------------- | ------------------------- |
| Abaixo de 18,5                            | Abaixo do peso (magreza)  |
| Entre 18,5 e 24,9                         | Peso normal               |
| Entre 25,0 e 29,9                         | Acima do peso (sobrepeso) |
| Entre 30,0 e 34,9                         | Obesidade grau I          |
| Entre 35,0 e 39,9                         | Obesidade grau II         |
| 40,0 e acima                              | Obesidade graus III e IV  |
*/

// # imc_categoria.js
const readline = require('readline-sync');

const peso = readline.questionFloat('Qual o seu peso? (em kg) ');
const altura = readline.questionFloat('Qual a sua altura? (em cm) ' );

function indiceMassaCorporal() {
  console.log(`Peso: ${peso}, Altura: ${altura}`);
  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);
  console.log(`IMC: ${imc}`);

  if (imc < 18.5) {
    console.log('Situação: Abaixo do peso (magreza)');
    return;
  }
  if (imc < 25) {
    console.log('Situação: Peso nornal');
    return;
  }
  if (imc < 30) {
    console.log('Situação: Acima do peso (sobrepeso)');
    return;
  }
  if (imc < 35) {
    console.log('Situação: Obesidade grau I');
    return;
  }
  if (imc < 40) {
    console.log('Situação: Obesidade grau II');
    return;
  }
  console.log('Situação: Obesidade graus III e IV');
}

indiceMassaCorporal();

// # veja o resultado
// # node imc_categoria.js 

// 6- Vamos criar mais um script. Dessa vez, para calcular a velocidade média de um carro numa corrida
// - A fórmula para calcular velocidade média é 'distância/tempo'.
// - Armazene o script no arquivo 'velocidade.js'.
// - Agora, permita que o script seja executado através do comando 'npm run velocidade'. Para isso, crie a chave velocidade dentro do objeto scripts no 'package.json'.
// - Utilize o readline-sync para solicitar os dados à pessoa.
// - Considere a distância em metros e o tempo em segundos. Repare que, agora, estamos trabalhando com números inteiros.

// # cria pagina
// # velocidade.js
const readline = require('readline-sync');

function velocidadeMedia () {
  const distancia = readline.questionInt('Distância percorrida (m): ');
  const tempo = readline.questionInt('Tempo gasto (s): ');

  const velocidadeMed = (distancia / tempo).toFixed(2);
  console.log(`Velocidade média: ${velocidadeMed} m/s`);
}

velocidadeMedia();

// # cria o script para o comando de chamada
{
  // ...
  "scripts": {
    // ...
    "velocidade":"node velocidade.js"
  },
  // ...
}

// # veja o resultado
// # npm run velocidade

// 7- Crie um "jogo de adivinhação" em que a pessoa ganha se acertar qual foi o número aleatório gerado
// - O script deve ser executado através do comando npm run sorteio.
// - Utilize o readline-sync para realizar input de dados.
// - Armazene o script em sorteio.js.
// - O número gerado deve ser um inteiro entre 0 e 10.
// - Caso a pessoa acerte o número, exiba na tela "Parabéns, número correto!".
// - Caso a pessoa erre o número, exiba na tela "Opa, não foi dessa vez. O número era [número sorteado]".
// - Ao final, pergunte se a pessoa deseja jogar novamente. Se sim, volte ao começo do script.

// # package.json
{
  // ...
  "scripts": {
    // ...
    "sorteio": "node sorteio.js"
  }
  // ...
}
// # cria a pagina
// # sorteio.js
const readline = require('readline-sync');
function logResultado(numero, resultado) {
  if (numero !== resultado) {
    // return para interromper a execução da função, conhecido com early return:
    // retorna "mais cedo" pois uma determinada condição(no caso, a resposta estar certa)
    return console.log(`Opa, não foi dessa vez. O número era ${numero}`);
  }
  // se a execução do código entrar no if, a linha abaixo não será executada
  return console.log('Parabéns, número correto!');
}
function runGame() {
  const numero = parseInt(Math.random() * 10);
  const resultado = readline.questionInt(
    'Digite um número entre 0 e 10 para saber se é o número que estou pensando: '
  );
  logResultado(numero, resultado);
  const novamente = readline.question(
    'Deseja jogar novamente? (Digite "s" para sim, e qualquer outra coisa para não) '
  );
  // return mais cedo, elimina a necessidade do else
  if (novamente !== 's') return console.log('OK, até a próxima!');
  // Chamamos a mesma função para executar novamente o jogo.
  // Uma função que chama a si mesma é chamada de função **recursiva**
  runGame();
}
// Executamos o jogo pela primeira vez
runGame();

// 8- Crie um arquivo index.js que pergunta qual script deve ser executado
// - O script deve ser acionado através do comando npm start.
// - Utilize o readline-sync para realizar o input de dados
// - Quando executado, o script deve exibir uma lista numerada dos scripts disponíveis.
// - Ao digitar o número de um script e pressionar enter, o script deve ser executado.
// - Você pode utilizar o require para executar o script em questão.

// # cria o script para o comando de chamada
{
  // ...
  "scripts": {
    // ...
    "start":"node index.js"
  },
  // ...
}

// # cria a pagina
// # index.js
const readline = require('readline-sync');

// Lista de script
const scripts = [
  // objetos com 'name' e 'script' para facilita a criação da lista que será exibida
  { name: 'Calcular IMC', script: './imc.js' },
  { name: 'Calcular velocidade média', script: './velocidade.js' },
  { name: 'Jogo de advinhação', script: './sorteio.js' },
];
// itera sobre o script para criar a lista numerada
let mensagem = scripts.map((script, index) => `${index + 1} - ${script.name}`);
// adiciona uma linha a mais no começo da mensagem
mensagem = mensagem.join('\n');
const scriptNumber = readline.questionInt(mensagem) - 1;
const script = scripts[scriptNumber];
if (!script) return console.log('Número inválido');

require(script.script);

// resultado
// └─# npm start                                              

// # Bônus

// 1- Crie um script que realize o fatorial de um número n .
// - O fatorial é a multiplicação de um número por todos os seus antecessores até chegar ao número 1.
// - Armazene o script no arquivo fatorial.js .
// - Utilize o readline-sync para realizar o input de dados.
// - O script deve ser acionado através do comando npm run fatorial
// - Adicione o script ao menu criado no exercício 5.
// - Adicione validações para garantir que o valor informado seja um inteiro maior que 0.

// # script package.json
{
  // ...
  "scripts": {
    // ...
    "fatorial": "node fatorial.js"
  },
  // ...
}
// cria o arquivo fatorial.js
const readline = require('readline-sync');

function fatorarNumero(x) {
  // se 'x' for 0 ou 1 ?retorna 1 :se não continua a fatoração multiplicando 'x' pelo fatoral de 'x - 1'
  return [0, 1].includes(x) ? 1 : x * fatorarNumero(x -1);
  // Uma função que chama a si mesma é chamada de função 'recursiva'
}
function calcular() {
  const x = readline.questionInt('Qual número fatorar: ');
  if (x <= 0) {
    console.log('Tem que ser maior que 0!')
    return;
  }
  console.log(`Fatoral de: ${x}`);
  const resultado = fatorarNumero(x);
  console.log(`É: ${resultado}`);
}

calcular();

// resultado
// └─# npm run fatorial 

// 2- Crie um script que exiba o valor dos n primeiros elementos da sequência de fibonacci.
// - A sequência de fibonacci começa com 0 e 1 e os números seguintes são sempre a soma dos dois números anteriores.
// - Armazene o script no arquivo fibonacci.js .
// - Utilize o readline-sync para realizar o input de dados.
// - O script deve ser acionado através do comando npm run fibonacci
// - Adicione o script ao menu criado no exercício 5.
// - Não imprima o valor 0 , uma vez que ele não está incluso na sequência;
// - Quando n = 10 , exatamente 10 elementos devem ser exibidos;
// - Adicione validações para garantir que o valor informado é um inteiro maior que 0.

// # pagina
// # fibonacci.js
const readline = require('readline-sync');

function elemento(n) {
  // armazena o ultimo número calculado
  let a = 1;
  // armazena o penultimo número calculado
  let b = 1
  // repete o loop enquanto 'n' for maior que 0
  for (; n >= 0; n--) {
    if (b) console.log(b);
    // guarda o ultimo valor calculado em uma variavel temporaria
    const temporario = a;
    // o novo valor é a soma do ultimo valor com o penultimo valor
    // 'a' passa a ser o ultimo valor caulculado
    a = a + b;
    // 'temporario' passa a ser o penultimo valor, e armazenamos em 'b'
    b = temporario;
  }
  console.log(b);
  return b;
}
function calculo() {
  const n = readline.questionInt('Digite um número');
  if (n <= 0 ) {
    console.log('Digite um número maior que 0!')
    return;
  }
  console.log(`n: ${n}`);
  elemento(n - 2);
}
calculo();

// # script package.json
{
  // ...
  "scripts": {
    // ...
    "fibonacci": "node fibonacci.js"
  },
  // ...
}
// resultado
// └─# npm run fibonacci

// -- > EXERCÍCIO do dia - 26.1 -- <---/ FIM -----------------------------------------//
// ============================== Intro - NodeJS
// ...

