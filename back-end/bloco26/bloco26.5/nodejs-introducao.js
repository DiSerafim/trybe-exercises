// ============================== Express: Middlewares
// -- > CONTEÚDO do dia - 26.5 -- <---/ INICIO --------------------------------------//
// ==============================

// # Aprender sobre o conceito de middlewares e encadeamento de middlewares usando a função next .
// # Passar valores entre middlewares.
// # Como organizar as rotas usando Router .
// # Tratar erros com middleware de erros.

// # Conteúdos

// ### Middlewares
// - , no Express qualquer função passada para uma rota é um middleware, seja de forma direta ou indireta.

// - middleware é uma função que realiza o tratamento de uma request e que pode encerrar essa request, ou chamar o próximo middleware.

// Até agora, nos referimos aos middlewares como callback ao falar sobre roteamento e definição de endpoints.
// essas funções recebem três parâmetros: req, res e next.

// vamos considerar que temos o seguinte cenário onde na nossa API de CRUD de receitas precisamos validar se o nome não foi enviado vazio ao cadastrar uma nova receita.
// ...
app.post('/recipes', 
function (req, res, next) {
  const { name } = req.body;
  if (!name || name === '') return res.status(400).json({ message: 'Invalid data!'}); // 1
  next(); // 2
},
function (req, res) { // 3
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});
// ...
// temos uma rota que utiliza dois middlewares:
// 1 Fizemos uma validação que retorna uma resposta para requisição caso seja enviada no body da requisição um nome vazio. O middleware retorna uma resposta com status 400 e um json com uma mensagem dizendo que os dados enviados foram inválidos.
// 2 Caso não caia no if, este middleware endereça a requisição para o próximo middleware.
// 3 Esse middleware faz todo o processo de pegar os dados enviados, salvar em um array, e finalmente retornar uma mensagem de sucesso dizendo que o produto foi cadastrado.
└─# http :3001/recipes
// o 2° middleware só é executado se o primeiro middleware chamar ele usando a função 'next'. Experimente fazer a mesma requisição comentando a instrunção 'next()' e você vai notar que a requisição nunca vai chegar na segunda rota.
// Para fazer essa requisição use o comando abaixo ou uma das ferramentas para fazer requisições HTTP (Postman ou o Insomnia).
// # Essa requisição vai retornar { message: 'Invalid data!'}
http POST :3001/recipes price:=40 
// # Experimente chamar essa request com o código correto, e depois comentando o next. A requisição não vai retornar uma resposta.
http POST :3001/recipes name=Macarronada price:=40 

// essa função que valida se o nome foi enviado poderia ser também aproveitada para a rota PUT /recipes/:id . Para isso vamos tirar a definição dessa função de dentro da rota POST /recipes e aplicá-la para ser usada nas duas rotas.
// ...
function validateName(req, res, next) {
  const { name } = req.body;
  if (!name || name === '') return res.status(400).json({ message: 'Invalid data!'});

  next(); 
};

app.post('/recipes', validateName, function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.put('/recipes/:id', validateName, function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipesIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipesIndex === -1)
    return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipesIndex] = { ...recipes[recipesIndex], name, price };

  res.status(204).end();
});
// ...
// Agora o middleware que valida se o nome foi enviado foi isolado para uma função e conseguimos aplicá-la nas rotas para cadastrar e editar uma receita.

// Para Fixar

// # Crie uma função validatePrice para validar o preço foi enviado. O preço deve ser obrigatório, ser um número e não pode ser menor que 0. Aplique essa função como um middleware nas rotas POST /recipes e PUT /recipes/:id .

???

// ### Criando middlewares globais com app.use
// - Outra forma de utilizar middlewares é quando precisamos reaproveitar um middleware para todas as rotas da nossa aplicação 

// Vamos criar uma forma de autenticar se um determinado usuário pode ter acesso a nossa API de receitas. 
// Para isso, será necessário enviar as informações de nome de usuário e senha pelo Header da requisição 
// definindo nosso middleware em um arquivo separado:
// # auth-middleware.js
/* auth-middleware.js */
const validUser = {
  username: 'MestreCuca',
  password: 'MinhaSenhaSuperSeguraSqn'
};

const authMiddleware = (req, res, next) => {
  const { username, password } = req.headers;
  if (!username && !password) {
    return res.status(401).json({ message: 'Username and password can`t be blank!' });
  }
  if (username !== validUser.username || password !== validUser.password) {
    return res.status(401).json({ message: 'Invalid credentials!' });
  }

  next();
};

module.exports = authMiddleware;
// No código acima temos um middleware que, ao receber uma requisição, verifica se ela possui no header as informações username e password . Se alguma das informações não foi enviada, esse middleware retorna uma mensagem dizendo que essas informações não podem ser vazias. Na sequência, é feita uma segunda verificação para checar se os valor de username e password são iguais aos valores pré-determinados no objeto validUser (Na prática, em uma aplicação de verdade, esse objeto validUser teria os valores vindo do banco de dados e não hard-coded ).

// Caso nenhuma dessas opções seja verdadeira, uma resposta é enviada ao client dizendo que não foi possível realizar a autenticação. Ao enviarmos uma resposta para o client, impedimos que qualquer outro middleware seja executado depois desse. Caso esteja tudo certo com o header, o middleware chama a função next que, basicamente, diz ao Express "ok, terminei aqui, pode chamar o próximo que disse que queria saber de requisições pra essa rota".

// Para utilizarmos esse middleware de autenticação, vamos alterar o arquivo
// # index.js
const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('./auth-middleware');

const app = express();
app.use(bodyParser.json());

// Esta rota não passa pelo middleware de autenticação!
app.get('/open', function (req, res) {
  res.send('open!')
});

app.use(authMiddleware);

const recipes = [
 { id: 1, name: 'Lasanha', preco: 40.0, tempoDePreparo: 30 },
 { id: 2, name: 'Macarrão a Bolonhesa', preco: 35.0, tempoDePreparo: 25 },
 { id: 3, name: 'Macarrão com molho branco', preco: 35.0, tempoDePreparo: 25 },
];

function validateName(req, res, next) {
 const { name } = req.body;
 if (!name || name === '') return res.status(400).json({ message: 'Invalid data!'});
 next(); 
};

app.get('/recipes', function (req, res) {
 res.status(200).json(recipes);
});

app.get('/recipes/pesquisar', function (req, res) {
 const { name, maxPrice } = req.query;
 const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.preco < parseInt(maxPrice));
 res.status(200).json(filteredRecipes);
});

app.get('/recipes/:id', function (req, res) {
 const { id } = req.params;
 const recipe = recipes.find((r) => r.id === parseInt(id));
 if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});
 res.status(200).json(recipe);
});

app.post('/recipes', validateName, function (req, res) {
 const { id, name, price } = req.body;
 recipes.push({ id, name, price });
 res.status(201).json({ message: 'Recipe created successfully!'});
});

app.put('/recipes/:id', validateName, function (req, res) {
 const { id } = req.params;
 const { name, price } = req.body;
 const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));
 if (recipeIndex === -1) return res.status(500).json({ message: 'Recipe not found!' });
 recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };
 res.status(204).end();
});

app.delete('/recipes/:id', function (req, res) {
 const { id } = req.params;
 const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));
 if (recipeIndex === -1) return res.status(500).json({ message: 'Recipe not found!' });
 recipes.splice(recipeIndex, 1);
 res.status(204).end();
});

app.all('*', function (req, res) {
 return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001);
// Observe que adicionamos uma rota, antes do app.use . Aqui é importante destacar que o app.use só afeta as rotas que vem abaixo da sua definição. Ou seja, todas as rotas do nosso CRUD de receitas vão passar pelo middleware de autenticação, enquanto a rota /aberto não, por que foi definida antes da linha do app.use 

// Tente fazer uma requisição para as rotas GET /aberto e GET /recipes
http GET :3001/aberto # execute apenas essa linha
> HTTP/1.1 200 OK
> Connection: keep-alive
> Content-Length: 55
> Content-Type: text/html; charset=utf-8
> Date: Sun, 22 Aug 2021 21:12:24 GMT
> ETag: W/"37-ZXNKqzv8YdcuUTIY0Egz9o2J97U"
> Keep-Alive: timeout=5
> X-Powered-By: Express
> 
> Esta rota não passa pelo middleware de autenticação!
http GET :3001/recipes # execute apenas essa linha
> HTTP/1.1 401 Unauthorized
> Connection: keep-alive
> Content-Length: 60
> Content-Type: application/json; charset=utf-8
> Date: Sun, 22 Aug 2021 21:13:36 GMT
> ETag: W/"3c-p35mvWqky25aPCJVo0WioEMrIRQ"
> Keep-Alive: timeout=5
> X-Powered-By: Express
> 
> {
>     "message": "Nome de usuário e senha não podem ser vazios"
> }

// Para poder fazer a requisição para os nossos endpoints que começam com /recipes, precisamos mandar os dados de autenticação no body da requisição.
// exemplos.
http GET :3001/recipes username:MestreCuca password:MinhaSenhaSuperSeguraSqn # listar receitas
http POST :3001/recipes username:MestreCuca password:MinhaSenhaSuperSeguraSqn nome=Churrasco id:=5 preco:=30 # cadastrar um novo receita
http POST :3001/recipes/2 username:MestreCuca password:MinhaSenhaSuperSeguraSqn nome=Lasanha preco:=45 # editar um receita

// Para enviar parâmetros no header de uma requisição, utiliza-se o formato <chave>:<valor> enquanto no body da requisicão usa-se <chave>=<valor> ou <chave>:=<valor> 

// ### Passando valores entre middlwares com objeto req





























// ### Router middleware





























// ### Lidando com erros





























// ### Pacote express-rescue





























// ### Conclusão






























// ==============================
// -- > CONTEÚDO do dia - 26.5 -- <---/ FIM -----------------------------------------//
// ==============================
// -- > AULA ao VIVO - 26.5 ----- <---/ INICIO --------------------------------------//
// ==============================

 
// ============================== 
// -- > AULA ao VIVO - 26.5 ----- <---/ FIM -----------------------------------------//
// ==============================
// -- > EXERCÍCIO do dia - 26.5 -- <---/ INICIO --------------------------------------//
// ==============================

// Agora a prática

// 

// ==============================
// -- > EXERCÍCIO do dia - 26.5 -- <---/ FIM -----------------------------------------//
// ============================== Express: Middlewares
// ...