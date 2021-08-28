// ============================== Express: HTTP com Node.js
// -- > CONTEÚDO do dia - 26.4 -- <---/ INICIO --------------------------------------//
// ==============================

// # Entender o que é HTTP, o que é API e o que os dois têm a ver com Express
// # Escrever APIs utilizando Node e Express;
// # Entender a estrutura de uma aplicação Express e como organizar seu código;
// # Criar rotas e aplicar funções que processam requisições HTTP.

// # Conteúdos

// ### HTTP
// - requisição HTTP. Analisaremos a requisição que é feita pelo navegador quando abrimos a página https://developer.mozilla.org.
GET / HTTP/1.1
Host: developer.mozilla.org
Accept: text/html

// - informações presentes nessa requisição:

// # HTTP, definido por um verbo em inglês. Nesse caso, GET, que normalmente é utilizado para "buscar" algo do servidor, e é também o método padrão executado por navegadores quando acessamos uma URL.
// # O caminho, no servidor, do recurso que estamos tentando acessar. Nesse caso, o caminho é / pois estamos acessando a página inicial.
// # A versão do protocolo (1.1).
// # O local (Host) onde está o recurso que se está tentando acessar, ou seja, a URL ou o endereço IP servidor.
// # Os headers. São informações adicionais a respeito de uma requisição ou de uma resposta. Eles podem ser enviados do cliente para o servidor, ou vice-versa. Na requisição de exemplo, temos o 'header Host', que informa o endereço do servidor, e o 'header Accept', que informa o tipo de resposta que esperamos do servidor. Um outro exemplo bem comum são os tokens de autenticação, em que o cliente informa ao servidor quem está tentando acessar aquele recurso: Authorization: Bearer {token-aqui} . Alguns exemplos extras de headers podem ser vistos aqui.. https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers

// - GET não é o único método HTTP existente. Existem 39 métodos diferentes! Os mais comuns são 5: GET, PUT, POST, DELETE e PATCH, além do método OPTIONS, utilizado por clientes para entender como deve ser realizada a comunicação com o servidor.

// - Quando um servidor recebe uma requisição, ele envia de volta uma resposta. 
// exemplo:
HTTP/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
ETag: "51142bc1-7449-479b075b2891b"
Accept-Ranges: bytes
Content-Length: 29769
Content-Type: text/html

<!DOCTYPE html... (aqui vêm os 29769 bytes da página solicitada)

// - A composição da resposta é definida por:

// # A versão do protocolo (1.1).
// # O código do status, que diz se a requisição foi um sucesso ou não (nesse caso, deu certo, pois recebemos um código 200), acompanhado de uma pequena mensagem descritiva ( OK).
// # Os Headers, no mesmo esquema da requisição. 'Content-Type' diz para o navegador o que ele precisa fazer, 'HTML', ele deve renderizar o documento na página.
// # Um body, que é opcional. Por exemplo, caso você submeta um formulário registrando um pedido em uma loja virtual, no corpo da resposta pode ser retornado o número do pedido ou algo do tipo.

// ### APIs
// - 'A'pplication 'P'rogramming 'I'nterface. Ou, Interface de programação de aplicação.

// basicamente é, qualquer coisa que permita a comunicação, de forma programática, com uma determinada aplicação.
// Um tipo muito comum de API são as APIs HTTP, que permitem que códigos se comuniquem com aplicações através de requisições HTTP. É desse tipo de API que boa parte da web é feita.
// - Endpoint - conexão do servidor da API com o cliente

// ### Contextualizando
// - A partir de agora, você irá criar APIs, que vão receber requisições e devolver dados, passando por validações, regras de negócio, acesso ao banco de dados, etc.

// - Quando o 'client' envia uma requisição para o Back-End, é como se uma pessoa atendente anotasse o pedido em um papel e o colocasse no balcão para ser preparado pela cozinha.
// - Quando o 'servidor' envia a resposta para a requisição do 'client', ele mostra essas informações ao usuário via 'Front-End'. É como se a cozinha entregasse o prato que foi pedido para que o atendente o leve para a mesa da pessoa cliente.

// uma API bem feita, assim como um quadro de pedidos bem organizado, pode ser a chave para uma aplicação (ou um restaurante) bem sucedida. 🧑‍🍳💻

// ### E o Express?
// - é um framework Node.js criado para facilitar a criação de APIs HTTP com Node. Ele nos fornece uma série de recursos e abstrações que facilitam a vida na hora de decidir quais requisições tratar, como tratá-las, quais regras de negócio aplicar e afins.

// Existem outras ferramentas semelhantes no mercado, mas o Express é largamente adotado na comunidade hoje, e dois dos motivos são:
// # Ele foi lançado no final de 2010, é um framework maduro e “testado em batalha”;
// Ele é um "unopinionated framework"(framework sem opinião). Isso significa que ele não impõe um padrão de desenvolvimento na hora de escrever sua aplicação.
// Hoje, o Express faz parte da 'Node.js Foundation'. Isso demonstra o quão relevante ele é para a comunidade.

// ### Criando uma aplicação com Express

// - crie uma pasta chamada hello-express e, dentro dela, inicialize um novo pacote Node.js utilizando o npm.
mkdir hello-express
cd hello-express
npm init -y

// - instale o 'Express' e crie um arquivo 'index.js'. Como qualquer aplicação Node.js, nossa API precisa de um 'entrypoint', ou seja, um ponto de partida. Por convenção, vamos utilizar o index.js.
npm i express
touch index.js

// Preencha o arquivo index.js com o seguinte conteúdo:
const express = require('express');
const app = express(); // 1

app.get('/hello', handleHelloWorldRequest); // 2

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); // 3

function handleHelloWorldRequest(req, res) {
  res.status(200).send('Hello World!'); // 4
}

// - pronto! Esse pequeno script é o suficiente para:

// 1 Criar uma nova aplicação Express;
// 2 Dizer ao Express que, quando uma requisição com método GET for recebida no caminho /hello, a função handleHelloWorldRequest deve ser chamada;
// 3 Pedir ao Express que crie um servidor HTTP e escute por requisições na porta 3001;
// 4 Ao tratar uma requisição com método GET no caminho /hello , enviar o status HTTP 200 que significa OK e a mensagem "Hello world!".

// Para iniciar a aplicação, execute o comando abaixo no diretório da aplicação.
node index.js
// Agora, vá até o seu navegador e abra a url http://localhost:3001/hello.
// Parabéns, você criou sua primeira aplicação node com Express.

// nossa aplicação vai ficar executando 'ad eternum'.
// Para parar a aplicação pressione CTRL+C no seu terminal.

// ### Nodemon
// - reinicia a aplicação toda vez que editamos e salvamos os nossos arquivos.

// Uma vez que nossa API está rodando e fazemos modificações no seu código é preciso parar e reiniciar a aplicação executando novamente o 'node index.js'. 

// Para utilizar 'Nodemon', vamos instalar ele.
npm i nodemon -D

// # -D indica ao npm que esse pacote deve ser instalado como uma dependência de desenvolvimento.

// Para poder automatizar o uso do nodemon, vamos abrir nosso arquivo package.json e adicionar a seguinte linha:
//...
// "scripts": {
//    "test": "echo \"Error: no test specified\" && exit 1",
"dev": "nodemon index.js"
//  },
// ...

// - Agora, para executarmos nossa aplicação:
npm run dev

// - Pronto, agora sempre que fizermos qualquer alteração no nosso código e salvarmos o arquivo, o Nodemon automaticamente reinicia a aplicação para aplicar as modificações.

// ⚠️ Atenção ⚠️ Apesar de ser uma ferramenta muito útil para desenvolvimento, o Nodemon não deve ser utilizado para rodar a aplicação, pois caso seja disponibilizada para a pessoa usuária final.

// ### Roteamento
// - O aspecto mais básico de uma API HTTP se dá através de suas rotas, também chamadas de endpoints. Uma rota ou endpoint é definida pelo método HTTP e caminho.

// A forma que o Express trabalha com rotas é a seguinte: ao registrarmos uma rota, estamos dizendo para o Express o que fazer com requisições que contenham aquele método e caminho.

// o roteamento consiste em "direcionar" uma requisição para que seja atendida por uma determinada parte do nosso sistema.

// No Express, nós registramos uma rota utilizando a assinatura app.METODO(caminho, callback), onde a função de callback recebe três parâmetros: request, response e next.

// # request: comumente chamado de req; contém as informações enviadas pelo cliente ao servidor.
// # response: geralmente chamado de res; permite o envio de informações do servidor de volta ao cliente.
// # next: função que diz para o Express que aquele callback terminou de ser executado, e que ele deve prosseguir para executar o próximo callback para aquela rota.

// As rotas respondem a requisições que satisfaçam a condição método HTTP + caminho.
const express = require('express');
const app = express();

/* Rota com caminho '/', utilizando o método GET */
app.get('/', function (req, res) {
  res.send('hello world');
});
/* Rota com caminho '/', utilizando o método POST */
app.post('/', function (req, res) {
  res.send('hello world');
});
/* Rota com caminho '/', utilizando o método PUT */
app.put('/', function (req, res) {
  res.send('hello world');
});
/* Rota com caminho '/', utilizando o método DELETE */
app.delete('/', function (req, res) {
  res.send('hello world');
});
/* Rota com caminho '/' para qualquer método HTTP */
app.all('/', function (req, res) {
  res.send('hello world');
});
/* Ou podemos encadear as requisições para evitar repetir o caminho */
app
  .route('/')
  .get(function (req, res) {
    res.send('hello world get');
  })
  .post(function (req, res) {
    res.send('hello world post');
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// ### Estruturando uma API

// Vamos começar implementando o 'endpoint' que retorna a lista de receitas na rota '/recipes' quando a requisição for do tipo 'GET'. A lista de receitas virá de uma array que vamos definir no código.
/* index.js */
const express = require('express');
const app = express();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', function (req, res) {
  res.json(recipes);
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
// - deixamos de usar o método '.send'para usar o método '.json'.
// # '.send' é um método que consegue retornar a resposta de uma requisição de uma forma genérica, adaptando o tipo do retorno ao que vai ser retornado. 
// # Mas para deixar mais evidente que o que vamos devolver é um JSON usamos o método '.json'.

// Para testar nossa aplicação, podemos fazer uma requisição usando o próprio navegador, colocando a URL http://localhost:3001/recipes. Porém como nem todo tipo de requisição HTTP pode ser feita diretamente pelo navegador, é recomendado utilizar algum cliente HTTP. Os mais famosos são o 'Postman e o Insomnia'. No vídeo da seção anterior apresentamos o uso do httpie que permite fazer uma requisição direto pelo terminal. Depois de instalá-lo, experimente rodar o comando abaixo no terminal:
https httpie.io/hello
// execute em outro terminal
http :3001/recipes

// A diferença é que agora a requisição vai ser feita para uma API que você mesmo desenvolveu e que roda na sua máquina. A estrutura básica de uma requisição utilizando o fetch pode ser escrita da seguinte forma:
fetch('http://localhost:3001/recipes')
    .then(resp => resp.json())
// Para dar mais visibilidade, imagine um componente React que precisa exibir essa lista. Ele ficaria mais ou menos assim:
class receitasList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/recipes')
      .then(response => response.json())
      .then((recipes) => this.setState(
        { 
          recipes,
          isLoading: false,
        },
      ));
  }

  render() {
    const { recipes, isLoading } = this.state;
    
    return (
      <div>
        <div>
          {isLoading && <Loading />}
          <div className='card-group'>
            {recipes.map((recipe) => (
              <div key={recipe.id}>
                <h1>{recipe.name}</h1>
                <span>Preço: {recipe.price}</span>
                <span>Tempo de preparo: {recipe.waitTime}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
// ⚠️ Observação: Para uma aplicação back-end receber requisições de uma aplicação front-end, ou qualquer outra aplicação, é preciso instalar um módulo que libera o acesso da nossa API para outras aplicações. Para isso basta instalar um módulo chamado cors
npm i cors
// adicionar as seguintes linhas no seu arquivo 'index.js'.

// const express = require('express');
// const app = express();
const cors = require('cors');

app.use(cors());

// # Para Fixar

// - 1 Crie uma array drinks com os seguintes objetos dentro dela e uma rota GET /drinks que retorna a lista de bebidas.
const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

// - 2 Modifique tanto a rota de bebidas como de receitas para retornar a lista ordenada pelo nome em ordem alfabética.

??????????????????????


// ### Parâmetros de rota
// - no Express, podem ser definidos da seguinte forma: /<rota>/<:parametro> onde ':parametro' vai servir para qualquer valor que vier na URL com aquele prefixo específico.

// - No caso da nossa API de receitas podemos montar uma rota que recebe o id como um parâmetro de rota da seguinte forma:

// const express = require('express');
// const app = express();
// 
// const recipes = [
//   { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
//   { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
//   { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
// ];
// 
// app.get('/recipes', function (req, res) {
//  res.json(recipes);
// });

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

// app.listen(3001, () => {
//   console.log('Aplicação ouvindo na porta 3001');
// });

// - No código acima, o que fizemos foi adicionar uma rota '/recipes/:id', qualquer rota que chegar nesse formato, independente do id ser um número ou string vai cair nessa segunda rota, em vez de cair na rota '/recipes' que definimos no tópico anterior. Para acessar o valor do parâmetro enviado na URL fizemos a 'desestruturação' do atributo 'id' do objeto 'req.params'. Começamos a entender que o objeto 'req' traz informações a respeito da requisição.

// É importante que o nome do parâmetro nomeado na rota seja igual ao atributo que você está desestruturando. Por exemplo, se na definição da rota estivesse escrito '/recipes/:nome' teríamos que usar 'const { nome } = req.params'.

// ⚠️ Atenção: Perceba que na linha com o if colocamos um return . Isso serve para indicar para o express que ele deve quebrar o fluxo e não executar a linha res.status(200).json(recipe); . Caso você não coloque o return , sua requisição vai funcionar mas você vai ver um erro como este abaixo no log do seu terminal:
Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client

// - Faça uma requisição para esse endpoint passando um id qualquer.
http :3001/recipes/1

// O retorno da nossa requisição será algo parecido com o seguinte conteúdo:
Copiar
{
    "id": 1,
    "name": "Lasanha",
    "price": 40,
    "waitTime": 30
}

// # Para Fixar

// - 1 Crie uma rota GET /drink/:id para retornar uma bebida pelo id.

???

// ### Query String
/produtos?q=Geladeira&precoMaximo=2000
// - Para pessoas comuns é bem difícil interpretar o que são todas essas letrinhas no final da URL depois do sinal de interrogação.
// Essa string depois do '?' é uma 'query string'.

// Nesse caso está sendo passado dois parâmetros: 'q' com o valor Geladeira e precoMaximo com o valor 2000.

// Geralmente o recurso de query string é usado em funcionalidades de pesquisas como quando você utiliza além da barra de pesquisa, filtros avançados para definir o preço máximo, marca e outras classificações em e-commerces.

// exemplo, vamos definir uma rota /pratos/pesquisar?nome=Macarrão que permita, inicialmente, buscar uma lista de receitas filtrando pelo nome.

// ...
app.get('/recipes/search', function (req, res) {
  const { name } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name));
  res.status(200).json(filteredRecipes);
});
// app.get('/recipes/:id', function (req, res) {
//  const { id } = req.params;
//  const recipe = recipes.find((r) => r.id === parseInt(id));
//  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});
//
//  res.status(200).send(recipe);
// });

// ...
// Perceba, que nessa rota, utilizamos req.query e desestruturamos o atributo nome, para na sequência usar como parâmetro de busca. Dessa vez usamos uma outra HOF, a função filter, para filtrar as receitas que contenham(.includes) o nome recebido através da query string e no final devolvemos a lista de receitas obtidas por esse filtro.

// Faça a requisição para testar esse nosso novo endpoint.
http :3001/recipes/search?name=Macarrão

// A resposta da nossa API vai ser essa:
[
    {
        "id": 2,
        "name": "Macarrão a Bolonhesa",
        "price": 35,
        "waitTime": 25
    },
    {
        "id": 3,
        "name": "Macarrão com molho branco",
        "price": 35,
        "waitTime": 25
    }
]

// Vamos agora refatorar nosso código para que ele também seja capaz de filtrar pelo preço máximo passando um segundo parâmetro através da query string.
// ...

app.get('/prices/search', function (req, res) {
    const { name, maxPrice } = req.query;
    const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < parseInt(maxPrice));
    res.status(200).json(filteredRecipes);
})

// ...
// Não foi preciso alterar a definição da rota, apenas no código do callback foi feita uma alteração para desestruturar também o atributo maxPrice do objeto req.query e foi adicionada uma condição na chamada da função filter para filtrar os objetos pelo nome e pelo valor do atributo maxPrice enviado na requisição. Vamos testar nosso endpoint depois da modificação
http :3001/recipes/search name==Macarrão maxPrice==40
// O retorno da nossa requisição vai devolver a seguinte resposta:
[
  {
    "id": 2,
    "name": "Macarrão a Bolonhesa",
    "price": 35,
    "waitTime": 25
  },
  {
    "id": 3,
    "name": "Macarrão com molho branco",
    "price": 35,
    "waitTime": 25
  }
]

// Para Fixar

// 1 Modifique o código da nossa rota para que ela receba um terceiro parâmetro através de query string com o atributo minPrice e modifique o filter para trazer apenas os receitas onde o valor da receita seja maior ou igual ao o valor enviado como parâmetro, mantendo os filtros anteriores.

???

// 2 Implemente uma rota /drinks/search que permita pesquisar pelo atributo name usando query string.

???

// ### Recebendo dados no body da requisição.
// - uma compressão dos dados enviados que só serão descomprimidos do lado do back-end. Isso além de não deixar as informações trafegadas tão expostas acaba deixando a requisição um pouco mais rápida já que ocorre um processo de serialização dos dados enviados.

// precisamos instalar o pacote 'bodyParser'.
npm i body-parser
// Agora no arquivo index.js:

// const express = require('express');
const bodyParser = require('body-parser');

// const app = express();
app.use(bodyParser.json());

// ...

// Agora vamos implementar nossa rota que vai receber dados no body da requisição.
// ...
app.post('/recipes', function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});
// Perceba, que repetimos a rota /recipes , só que agora usando o método .post . No Express, é possível ter rotas com o mesmo caminho desde que o método (ou verbo) HTTP utilizado seja diferente,

// Vamos começar pelo fetch-api
fetch(`http://localhost:3001/recipes/`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    id: 4,
    title: 'Macarrão com Frango',
    price: 30
  })
});
// dessa vez passamos um segundo parâmetro que é um objeto formado pelos atributos method, headers, body

// # method: Método HTTP utilizado, como vimos no primeiro bloco temos 4 que são mais utilizados (GET, POST, PUT e DELETE).
// # headers: Define algumas informações sobre a requisição como o atributo Accept que diz qual o tipo de dado esperado como resposta dessa requisição e o Content-Type que sinaliza que no corpo da requisição está sendo enviado um JSON.
// # body: É o corpo da requisição. Como no HTTP só é possível trafegar texto, é necessário transformar o objeto JavaScript que quermos enviar para uma string JSON. Por isso que do lado do nosso back-end precisamos utilizar o bodyParser para transformar as informações que foram trafegadas como string JSON, de volta para um objeto JavaScript.

// execute apenas essa linha!
http POST :3001/recipes id:=4 name='Macarrão com Frango' price:=30
// - Nos campos id e preco usamos := enquanto em nome colocamos apensas = . Fazemos isso, pois o operador = envia os dados como string, enquanto com := o dado é enviado como número.

// Vamos voltar para nosso código para entender a implementação.
// ...

app.post('/recipes', function (req, res) {
    const { id, name, price } = req.body;
    recipes.push({ id, name, price});
    res.status(201).json({ message: 'Recipe created successfully!'});
});
// Na primeira linha desestruturamos os atributos 'id, price e preco' do objeto req.body para 
// na segunda linha usarmos esses valores para inserir um novo objeto dentro da array receitas.
// Na terceira e última linha retornamos uma resposta com o status '201', que serve para sinalizar que ocorreu uma operação de persistência de uma informação e um 'json' com o atributo 'message'. Pronto, temos uma rota que permite cadastrar novos receitas na nossa array.

// Assim como podemos enviar informações no body da requisição, também é possível enviar informações no header da mesma.

// Vamos imaginar que precisamos ter uma rota que recebe um token para ser validado, a regra da validação é checar se o token possui 16 caracteres.
// ...

app.get('/validateToken', function (req, res) {
  const { id, nome, preco } = req.body;
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'})';

  res.status(200).json({message: 'Valid Token!'})'
});

// Para fazer uma request enviando informações no headers, utilizando o HTTPie podemos usar o seguinte comando:
// # vai devolver token inválido
http :3001/validateToken Authorization:abc
// # vai devolver token válido
http :3001/validateToken Authorization:S6xEzQUTypw4aj5A

// para determinar o valor de um atributo, definimos atributos do headers usando : , passamos a chave Authorization que é uma chave bem comum de se utilizar nesse tipo de autenticação.

// Para Fixar

// 1 Crie uma rota POST /drinks que permita adicionar novas bebidas através da nossa API.
// 2 Modifique o código acima da rota POST /recipes para que receba e salve a receita com o atributo waitTime.

// ### Atualizando e deletando objetos através da API
// - o HTTP também possui os métodos PUT e DELETE que são convencionalmente utilizados para rotas que, respectivamente, editam e removem objetos.

// - Vamos começar dando um exemplo do uso do 'PUT'.
// ...

app.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});
// ...
// Observe que definimos uma rota que recebe o id como parâmetro de rota, e os campos nome e preço através do body da requisição. É um padrão sempre mandar o id como parâmetro de rota e os atributos que vão ser alterados, no body, pois é uma boa prática do RESTful.
// Depois apenas usamos o método find para encontrar a receita correspondente ao id, e atualizamos os atributos para os valores recebidos.
// Por fim, devolvemos uma resposta HTTP com o status 204, que serve para indicar que algo foi atualizado e utilizamos o método .end() que indica que a resposta vai ser retornada sem retornar nenhuma informação

// Vamos fazer essa requisição usando o HTTPie.
http PUT :3001 /recipes/2 name='Macarrão ao alho e óleo' price:=40

// vamos criar uma rota para requisições do tipo 'DELETE' no caminho /recipes/:id.
//...

app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

//...
// Vamos fazer uma requisição usando o HTTPie novamente.
http DELETE :3001 /recipes/3
// Novamente por termos usado o status HTTP 204, a resposta da nossa requisição vem sem trazer um conteúdo.
// o objetivo dessa rota é apenas excluir um registro da nossa array de receitas.

// No front-end, para fazer requisições do tipo PUT e DELETE através do fetch api podemos utilizar os exemplos de código abaixo:

// Requisição do tipo PUT
fetch(`http://localhost:3001/recipes/2`, {
  method: 'PUT',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Macarrão ao alho e óleo',
    price: 40
  })
});

// Requisição do tipo DELETE
fetch(`http://localhost:3001/recipes/4`, {
  method: 'DELETE',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
});

// # Para Fixar
// 1 Crie uma rota PUT /drinks/:id que permita editar os atributos de uma bebida.

???

// 2 Crie uma rota DELETE /drinks/:id que permita remover uma bebida.

???

// # app.all serve para mapear uma rota que pode ser de qualquer verbo HTTP e o valor * é um wildcard, ou seja um expressão coringa que indica que indepedente da rota que chegar aqui ele vai capturar e executar a callback que por sua vez retorna uma resposta com status 404.
//...
app.all('*', function (req, res) {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

// nunca vai chegar nessa rota!
app.get('/xablau', function (req, res) {
  return res.status(404).json({ message: `Xablau!`});
});

app.listen(3001);

// ==============================
// -- > CONTEÚDO do dia - 26.4 -- <---/ FIM -----------------------------------------//
// ==============================
// -- > AULA ao VIVO - 26.4 ----- <---/ INICIO --------------------------------------//
// ==============================

// ### O que vamos aprender


// ==============================
// -- > AULA ao VIVO - 26.4 ----- <---/ FIM -----------------------------------------//
// ==============================
// -- > EXERCÍCIO do dia - 26.4 -- <---/ INICIO --------------------------------------//
// ==============================

// Agora a prática


// ==============================
// -- > EXERCÍCIO do dia - 26.4 -- <---/ FIM -----------------------------------------//
// ============================== Express: HTTP com Node.js
// ...