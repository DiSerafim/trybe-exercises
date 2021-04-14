// Fundamentos do Desenvolvimento Web

// Bloco 9.2 - JavaScript Promises
// JavaScript Promises

// O que vamos aprender?----------------------------
// Callbacks são utilizadas em toda parte no JavaScript . A depender da complexidade do que você quer fazer, no entanto, as callbacks podem, muito rápido, ficar confusas e pouco legíveis. Para tornar o código mais compreensível, surgem as Promises , que você estudará na aula de hoje. E, com as promises, você fará uma pequena página web que colhe dados de um serviço terceiro utilizando a API dele.

// Você será capaz de:----------------------------
// - Utilizar Promises para fazer chamadas assíncronas;
// - Fazer integrações com APIs de terceiros.

// Por que isso é importante?----------------------------
// As Promises , embora não sejam muito intuitivas a princípio, foram criadas para facilitar a leitura de códigos assíncronos e tornar sua lógica mais previsível e legível. Elas são uma das formas mais populares de se escrever esse tipo de código em JavaScript hoje em dia. São também a principal forma de você se comunicar com APIs.

// A comunicação com serviços de terceiros é parte do dia a dia de qualquer pessoa que programa. Seja para coletar tweets , seja para abrir um mapa do Google Maps , ou até mesmo se comunicar com um banco de dados ou serviço interno da organização, APIs são sempre a forma de se fazer isso. Entender o que são e como usá-las, ou seja, como fazer sua aplicação se comunicar com elas, é absolutamente fundamental. Hoje você entrará em contato com esse conceito e o praticará por todo o restante do curso.

// Conteúdos --------------------------------------------------------------------------------
- Application-Programming-Interface-(API);

// uma API permite que aplicações se comuniquem umas com as outras, servindo de "ponte" para elas. Uma API não é um banco de dados ou um servidor, mas a responsável pelo controle dos pontos de acesso a eles, através de um conjunto de rotinas e padrões de programação.

// APIs baseadas na web, como esta vista no modelo abaixo. Essas APIs retornam dados em response a um request do cliente, nos permitindo acesso a dados de fontes externas.

// APIs também nos permitem compartilhar dados com outros sites ou aplicações. Você já deve ter observado a opção de "Compartilhar no Facebook" ou "Compartilhar no Twitter". No momento em que vocẽ clica nessa opção, a aplicação que você está visitando se comunica com sua conta do Twitter ou Facebook e altera os dados do seu status, por exemplo, através de uma API.

// Conteúdos --------------------------------------------------------------------------------
-  Por-que-precisamos-de-APIs?

// Imagine a seguinte situação: você está trabalhando em um blog e gostaria de exibir para os visitantes os tweets que fazem referência a ele.
// Uma estratégia seria contatar o Twitter e solicitar os tweets por e-mail. Entretanto, esse processo seria extremamente manual e o número de solicitações muito alto. Não teríamos também nossos dados atualizados ou em tempo real.
// Por esse motivo, o Twitter cria uma forma de fazermos consultas a esses dados, através de uma API. Ela vai controlar quais dados podemos requisitar, preparar nosso pedido no servidor e nos enviar uma resposta.

// Conteúdos --------------------------------------------------------------------------------
- Quem-precisa-criar-e-manter-APIs?

// APIs públicas e baseadas na web são desenvolvidas e aprimoradas constantemente por grandes empresas de tecnologia (principalmente de mídias sociais), organizações governamentais, startups de software ou qualquer outra empresa ou pessoa que colete dados e precise disponibilizá-los de algum modo.

// Conteúdos --------------------------------------------------------------------------------
- Como-uma-API-se-diferencia-de-um-back-end-padrão-de-um-site?

// Toda API é um back-end, mas nem todo back-end é uma API.

// Um back-end padrão de um site retorna templates para o front-end de uma única aplicação, através de rotas definidas. Por exemplo, quando você acessa uma página da nossa plataforma, está fazendo um request ao servidor, que te retorna um template como response.
// As APIs também possuem rotas de acesso que permitem a comunicação com o servidor, mas não precisam retornar templates. Geralmente, retornam dados no formato JSON.

// Conteúdos --------------------------------------------------------------------------------
- O-que-é-JSON-e-por-que-o-usamos?

// JSON significa J ava S cript O bject N otation e é basicamente uma forma de representarmos dados como objetos Javascript:
{
    "trybers": [
      {
        "name": "Lauro Cesar",
        "github": "lauroandrade",
        "status": "#vqv"
      }
    ]
  }
// Perceba o quão legível é o formato JSON, já que nossos dados ficam guardados como pares de key/value . A key fica no lado esquerdo e o value no lado direito. No array trybers, podem ser adicionados vários outros objetos.
// JSON está sempre presente em aplicações web modernas, pois é simples, interpretável e ainda funciona muito bem em aplicações JavaScript. Além disso, é compatível com diversas outras linguagens, que conseguem interpretá-lo e gerar códigos no formato, como Python, Java, PHP, Ruby, entre outras.
// Desse modo, as APIs retornam os dados no formato JSON, a fim de manter uma alta escalabilidade e independência.

// Conteúdos --------------------------------------------------------------------------------
- Como-construir-uma-API?

// Para construir uma API, você vai precisar de:
// - Um back-end com algumas rotas;
// - Um banco de dados que guarda os dados da sua aplicação ou alguma outra fonte de dados de terceiros;
// - Um servidor que irá rodar sua API. Nessa etapa, o Heroku é uma ótima opção para fazer o deploy em nuvem da sua API de forma rápida e simples.

// Conteúdos --------------------------------------------------------------------------------
- Como-utilizar-APIs-na-minha-aplicação?

// APIs podem incrementar as funcionalidades da sua aplicação e colocá-la em um outro patamar. Você pode adicionar mapas, receber dados sobre o tempo e outras informações úteis.
// - Encontre uma API pública, que seja bem documentada e mantida;
// - Leia a documentação para ter certeza de que aquela API resolve o problema que você deseja solucionar;
// - Entenda o formato dos dados disponíveis;
// - Faça requests e receba responses da API com os dados que você deseja receber.

// Conteúdos --------------------------------------------------------------------------------
- Fazendo-uma-requisição-a-uma-API

// Você pode fazer requisições a uma API de várias formas. Uma delas é no terminal.
// No exemplo a seguir, vamos fazer um request do tipo GET para uma API , que retorna um JSON como response .
wget 'https://pokeapi.co/api/v2/pokemon/ditto' -O - -q


// Conteúdos --------------------------------------------------------------------------------
- Promises

// As promises se comportam de forma muito parecida com as funções que já conhecemos, mas existem 3 pontos de destaque das Promises em relação à outras funções:
// - As Promises são assíncronas , ou seja, elas tem um espaço especial para sua execução sem que travem o fluxo de outras funções.
// - As Promises têm "superpoderes", isto é, funções extras que facilitam o controle do fluxo assíncrono.
// - As Promises são construídas de um forma distinta: para criar uma nova Promise, usamos um Construtor.

// Construtor
const promise = new Promise((resolve, reject) => {

});

// Para criar a Promise, utilizamos o construtor Promise junto com o operador new . Um construtor nada mais é do que uma função especial que cria um objeto a partir de uma classe.
// O construtor recebe uma função com 2 parâmetros: resolve e reject.
// Um ponto a se notar aqui é que usamos uma arrow function para passar a função como parâmetro pro construtor, mas você pode utilizar qualquer construção, desde que seja uma função com 2 parâmetros.

// Estados da promise

// A promise tem 3 estados. Pending , Resolved e Rejected . Quando a Promise é executada, ela entra automáticamente no estado Pending . Aqui é quando ela sai da fila e vai para sua "área especial". Ao retornar, ela pode apresentar um dos 2 estados: Resolved , se ocorreu tudo certo com sua execução ou Rejected , se ocorreu algum erro. É aqui que nossos parâmetros resolve e reject entram.

// Da mesma forma que uma função tem o return para retornar uma resposta de sua execução, a Promise tem o resolve e o reject , que fazem exatamente isso: retornam uma resposta de sua execução. O resolve retorna uma resposta positiva, ou seja, você irá utilizá-lo quando quiser transmitir que tudo ocorreu bem. Já o reject retorna uma resposta negativa, ou seja, você irá utilizá-lo quando ocorrer algo errado.

// Existe apenas uma pequena diferença entre o resolve/reject e o return : enquanto o return interrompe a excução da função quando é chamado, o resolve/reject não o fazem, por isso é importante utilizar um return antes de um deles quando não se quer que a execução continue (esse pattern se chama 'early-return'.

// Para simular uma situação de sucesso e erro, vamos utilizar o Math.random() para sortear um valor de 0 a 10. Se o valor for entre 0 e 5 (com 5 incluso), será um fracasso, caso o valor seja entre 6 e 10, será um sucesso. Nosso programa ficaria assim:
const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 6);

  if (number <= 5) {
    return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
  }
  resolve(console.log(`Que sucesso =) nosso número foi ${number}`));
});

// Repare também como usamos o return antes do reject para interromper a execução da função. Dessa forma o uso do else se torna desnecessário.

// Conteúdos --------------------------------------------------------------------------------
-  Gestores-de-fluxo

// Existem 2 principais ferramentas que podemos usar para gerir o fluxo assíncrono com promises: o .then() e o .catch() . Vamos começar falando sobre o .then() . Para isso , vamos refatorar nossa promise:
const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  if (number <= 5) {
    return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
  }
  resolve(number);
})
.then(number => `Que sucesso =) nosso número foi ${number}`)
.then(msg => console.log(msg));

// Aqui demonstramos 2 coisas importantes sobre a sintaxe do .then() :
// - Passamos como argumento uma função. Essa função também recebe 1 argumento que é o retorno do resolve da nossa promise.
// - O .then() é usado "em cadeia", um conceito chamado de chaining . Assim, podemos colocar vários .then() em cadeia, e o argumento da função interna de um será o retorno do anterior. A parte mais importante é que o .then() espera a promise (ou o .then() anterior) ser concluída para começar a sua execução. Assim, nosso fluxo está controlado!

// Vamos ver o que acontece no código acima. A promise é executada e, após sua execução, caso o número seja algo entre 5 e 10, o resolve retorna o número que é passado para o primeiro .then() como number . Por sua vez, ele retorna a frase Que sucesso =) nosso número foi ${number} que é passado como argumento para o segundo .then() , que o usa para "logar" no console.

// Ok, mas o erro continua acontecendo. O que podemos fazer em relação a isso? Agora entra o .catch() ! Vamos adicioná-lo ao código:
const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random()* 11);

  if (number <= 5) {
    return reject(number);
  }
  resolve(number);
})
.then(number => `Que sucesso =) nosso número foi ${number}`)
.then(msg => console.log(msg))
.catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`));

// Se executarmos o código acima, vamos ver que o erro anterior desapareceu, pois agora ele foi tratado! Assim como o .then() recebe o retorno de resolve , o .catch() recebe o retorno do reject , que é passado para ele como argumento de sua função interna. Assim, quando a promise retorna um reject , pula todos os .then() e executa o primeiro .catch() que encontrar. E tem mais! O .catch() também "pega" qualquer erro que acontecer dentro de qualquer .then() anterior a ele. Por esse motivo é geralmente usado no final.

// Conteúdos --------------------------------------------------------------------------------
- Fetch-API

// A função fetch, como já visto, é responsável por enviar requisições a APIs. Porém, essa não é sua única responsabilidade. Ela também possui ferramentas para tratar os dados recebidos e devolvê-los, além de lidar com os erros.

// O retorno da chamada varia conforme a API utilizada, não só em conteúdo, mas também formato. Como nosso maior foco é JavaScript, lidaremos principalmente com respostas em formato JSON ou respostas que possam ser reformatadas para tal.

// Erros comuns

// Vamos criar uma promise que faz um fetch apenas para um endpoint específico. Para isso, vamos usar como "endpoint" uma url que nos retorna elogios sobre Chuck Norris (elogios, porque ninguém faz piadas com Chuck Norris).

// Execute o comando abaixo caso você ainda não tenha o package.json :
// - npm init -y
// - depois, instale o node-fetch:
// - npm i node-fetch
// - Agora veja o código abaixo:
const fetch = require('node-fetch');

function verifiedFetch(url) {
  return new Promise((resolve, reject) => {
    if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
      fetch(url)
        .then((r) => r.json())
        .then((r) => resolve(r.value));
    } else {
      reject(new Error('endpoint não existe'));
    }
  });
}

// Vamos dar uma olhada rápida no código. Primeiro criamos a função verifiedFetch e passamos o url do nosso endpoint. Depois retornamos uma promise , transformando nossa função em uma função assíncrona. Agora, dentro da promise fazemos uma verificação. Se o endpoint for o certo, usamos o fetch para fazer uma chamada ao endpoint, transformamos a resposta em um json utilizando o método .json() , e para finalizar usamos o resolve para retornar a nossa resposta. Caso o url não seja o certo, levantamos um error. Perceba aqui que usamos o construtor new Error para levantar um error. Usar esse construtor dentro do reject é uma boa prática importante e vamos usá-lo a partir de agora.

// Agora, leia o código abaixo e, sem executá-lo, responda a seguinte pergunta: O que será exibido no console ao se executar sendJokeToFriend?

const fetch = require('node-fetch');
function verifiedFetch(url) {
  return new Promise((resolve, reject) => {
    if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
      fetch(url)
        .then((r) => r.json())
        .then((r) => resolve(r.value));
    } else {
      reject(new Error('endpoint não existe'));
    }
  });
}
function sendJokeToFriend(name) {
  const message = verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}
sendJokeToFriend("Anna");

// Agora execute a função sendJokeToFriend e veja se você acertou. Como vemos, recebemos o seguinte log: Promise { <pending> } . Vamos ver o que acontece aqui. Como vimos, verifiedFetch é uma promise, logo, é assíncrono. Quando o javascript executa a função, ele manda ela para "área especial" e passa para próxima função que é o console. Como a promise ainda não voltou com o conteúdo de message , vemos que a promise ainda está no estado pending . Para visualizar ainda melhor, retire o fetch e execute um resolve que retorna qualquer valor, assim a promise terminará sua execução imediatamente. Antes de executar, pense: Agora que a promise resolve imediatamente, quando o console.log for executado a Promise estará em pending ou já terá um resultado ? Execute e veja a resposta.

// Como você viu, ela esta em pending, mesmo sendo resolvida imediatamente. Isso aconteceu pois, mesmo resolvendo na hora, a promise vai para sua área e sai da fila. Quando ela retorna, mesmo que de imediato, ela volta pro final da fila e o console.log está na frente, sendo executado primeiro. Para resolver esse problema existem 2 maneiras. A primeira é usar o fluxo da promise e colocar o console.log dentro do .then() . Essa solução e ótima, mas pode ficar dificil de se manter e ler a medida que o número de passos aumenta e a medida que cada passo fica mais complexo também, assim, surgiu a terceira evolução das promises, o async e o await!

// Conteúdos --------------------------------------------------------------------------------
- async-e-await

// O async é uma mão na roda. Essa funcionalidade transforma qualquer função em uma promise. Para começar a usá-la, basta colocar o async antes da definição da função. Agora é só transformar o que é resolve em return e o que é reject em throw e BOOM! Sua promise com async está pronta. Vamos refatorar a função verifiedFetch para usar async:

const fetch = require('node-fetch');
async function verifiedFetch(url) {
  if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
    return fetch(url)
      .then((r) => r.json())
      .then((r) => r.value);
  }
  throw new Error('endpoint não existe');
}
function sendJokeToFriend(name) {
  const message = verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}
sendJokeToFriend("Anna");

// Perceba que continua funcionado exatamente da mesma forma que anteriormente.

// A funcionalidade async sozinha é fantástica mas não resolve nosso problema com a função sendJokeToFriend . Assim, junto com ela vem um bônus, o await . O await só pode ser usado dentro de uma função com async e ela faz exatamente o que diz, faz com o que a função espere uma resposta para continuar sua execução. Vamos refatorar sendJokeToFriend:

const fetch = require('node-fetch');
async function verifiedFetch(url) {
  if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
    return fetch(url)
      .then((r) => r.json())
      .then((r) => (r.value));
  }
  throw new Error('endpoint não existe');
}
async function sendJokeToFriend(name) {
  const message = await verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}
sendJokeToFriend("Anna");

// Pronto! Usando o await, o sendJokeToFriend espera a verifiedFetch terminar toda sua execução (até o ultimo .then() ou. catch() ) para só depois executar o console.log(). Assim novamente, a função fica muito mais concisa e fácil de ler.


// Conteúdos --------------------------------------------------------------------------------
- Para-fixar

// Responda às perguntas a seguir, antes de nossa aula ao vivo, para ter certeza de que você entendeu os textos. Discuta a resposta com o restante da turma (que tal uma pessoa abrir uma conversa no Slack para conversarem a respeito?!). Se bater alguma dúvida, volte aos textos!
// 1a. O que é um código que é executado de modo assíncrono?
// #R - É quando ele roda suas funções e ou chamadas independentes da ordem de sua posição

// 1b. Qual é a diferença disso para um código que é executado de modo síncrono?
// #R - No síncrono a função seguinte só inicia quando a primera função retornar a chamada.

// 2. Quando você tem que enfileirar várias callbacks , que problema surge?
// # O famoso haducken hell

// 3. Por que as Promises são uma forma de se resolver esse problema?
// #R - Porque ela permite que o código funcione mesmo se ela ainda não estiver dado o seu retorno.

// 4. Quando você vai se comunicar com uma API , tal comunicação deve ser síncrona ou assíncrona? Lembre-se de que o serviço ao qual você está se conectando pode demorar muito ou pouco para dar retorno, pode estar fora do ar etc.
// # síncrona

// 5. Dada a resposta anterior, o que é fetch e para que ele serve?
// #R - ele é responsável por enviar requisições a APIs e também tratar os dados recebidos. 



// coteúdo aula ao vivo
// --------------------------------------------------------------------------------





// Exercícios para finalizar o dia ------------------------------------
// Hora de por a mão na massa!
