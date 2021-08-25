// ============================== Intro - NodeJS
// -- > CONTEÚDO do dia - 24.1 -- <---/ INICIO --------------------------------------//
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















































// -- > CONTEÚDO do dia - 24.1 -- <---/ FIM -----------------------------------------//
// ==============================
// -- > AULA ao VIVO - 24.1 ----- <---/ INICIO --------------------------------------//
// ==============================

 
 
// -- > AULA ao VIVO - 24.1 ----- <---/ FIM -----------------------------------------//
// ==============================
// -- > EXERCÍCIO do dia - 24.1 -- <---/ INICIO --------------------------------------//
// ==============================



// -- > EXERCÍCIO do dia - 24.1 -- <---/ FIM -----------------------------------------//
// ============================== Intro - NodeJS
// ...

