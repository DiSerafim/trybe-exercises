// ============================== NodeJS - Arquitetura de Software - Camada de View
// -- > CONTEÚDO do dia - bloco30.1 -- <---/ INICIO --------------------------------------//
// ==============================

// ### O que é MVC?
// ### Model e Controller
// ### View
// ### Comunicação entre camadas
// ### MVC com ExpressConteúdos

// * Estender a arquitetura MSC criando novas camadas;
// * Estruturar um modelo em camadas sem a camada de serviço ( service ).

// **** Conteúdos

// >>>> O que é MVC?
// - MVC é uma sigla para Model-View-Controller , um dos mais antigos e mais utilizados padrões de arquitetura de software.

// o MVC organiza e divide o código de uma aplicação em camadas, cada uma com suas responsabilidades. Ele é composto por três camadas, duas das quais você já conhece: a camada de modelo ( Model ), a camada de apresentação/visão ( View ) e a camada de controle ( Controller ).

// >>>> Model e Controller
// - falando no contexto do MVC o model ainda é onde nós manipulamos e definimos a estrutura dos nossos dados, sendo que todo acesso aos dados deve passar por essa camada. E o controller ainda é responsável por receber as requisições e enviar as respostas, mas agora ele faz a ponte entre a view e o model , recebendo as ações da view e decidindo o que deve ser mostrado para a pessoa realizando a ação, após consultar o modelo, se necessário.

// o MVC o responsável pelas regras de negócio da aplicação é o model , sendo nele feitas as validações e tratamentos de dados.

// >>>> View
// - A view é a camada de apresentação, ou seja, a parte que tem contato com a pessoa que está usando nosso sistema. Serve basicamente como input e output de dados. Ela é responsável por duas coisas: criar a visualização dos dados vindos do model e fornecer meios para que a pessoa possa interagir com o sistema.

// A view se comunica com o controller (recebendo ordens do que exibir e comunicando eventos que ocorrem à medida que a pessoa interage com o sistema) e com o model , recebendo os dados que deve apresentar.

// como a view se encarrega somente de exibir uma representação dos dados, ela não precisa saber como eles são armazenados.

// Em aplicações web, a view geralmente é uma página HTML , mas também pode assumir outros formatos, como JSON e XML .

// >>>> Comunicação entre camadas
// - nossa camada de apresentação deve sempre ficar separada da nossa lógica de negócios.

MVC

M-odel { Acesso e manipulaçao de dados + Regra de negócio }
V-iew { Interface de apresentação + HTML e CSS }
C-ontroller { Faz o meio campo }

// >>>> MVC com ExpressConteúdos
// Vamos construir uma pequena aplicação em Node.js e Express, seguindo o padrão MVC.

// execute no workbench
CREATE DATABASE IF NOT EXISTS mvc_example;

USE mvc_example;

CREATE TABLE authors (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    middle_name VARCHAR(30),
    last_name VARCHAR(30) NOT NULL,
    birthday DATE,
    nationality VARCHAR(100),
    PRIMARY KEY(id)
);

INSERT INTO authors (first_name, middle_name, last_name, birthday, nationality)
VALUES
    ('George', 'R. R.', 'Martin', '1948-09-20', 'norte-americano'),
    ('J.', 'R. R.', 'Tolkien', '1892-01-03', 'britânico'),
    ('Isaac', NULL, 'Asimov', '1920-01-20', 'russo-americano'),
    ('Frank', NULL, 'Herbert', '1920-02-11', 'norte-americano'),
    ('Júlio', NULL, 'Verne', '1905-03-24', 'francês');

// Estabelecendo uma conexão com o banco
// └─# mkdir mvc-example
// └─# cd mvc-example

// iniciamos um novo projeto Node.js,
// └─# npm init -y

// para nos comunicarmos com o MySQL
// └─# npm install mysql2

// crie uma pasta models e, dentro dela, um arquivo connection.js
// *models/connection.js
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'senha123',
  database: 'mvc_example'});

module.exports = connection;

// Criando o model
// - A primeira coisa que faremos é criar uma rota que renderizará uma lista com os nomes de todos os autores. Queremos também que seja exibido o nome completo do escritor, que será a concatenação do primeiro nome, nome do meio (se houver) e sobrenome . Vamos pensar um pouco sobre o que serão nossa view , controller e model

// A view , no momento, será uma página HTML que a pessoa poderá visualizar.

// O model deverá se encarregar de todos os detalhes de baixo nível, como se conectar com o banco, montar e executar as queries necessárias para buscar e retornar os dados desejados,

// crie o arquivo Author.js , dentro da pasta models
// * models/Author.js
const connection = require('./connection');
// Cria uma string com o nome completo do autor
const getNewAuthor = (authorData) => {
const { id, firstName, middleName, lastName } = authorData;

const fullName = [firstName, middleName, lastName]
  .filter((name) => name)
  .join(' ');

return {
  id,
  firstName,
  middleName,
  lastName,
  name: fullName,
 };
};
// Serializa o nome dos campos de snake_case para camelCase
const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name});
// Busca todos os autores do banco.
const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM authors;',
  );
  return authors.map(serialize).map(getNewAuthor);
};

module.exports = {
  getAll,
};

// Criando o controller
// controller é uma função usada como callback para responder a requisições que chegam a uma rota.

// Para começar, vamos instalar o express:
// └─# npm install express

// crie a pasta controllers. Dentro dela, o arquivo authorController.js
// * controllers/authorController.js
const Author = require('../models/Author');
const listAuthors = async (req, res) => {
 // Já vamos voltar para adicionar a lógica aqui
};

module.exports = {
  listAuthors
}

// Em seguida, index.js:
// mvc-example/index.js
const express = require('express');
const authorController = require('./controllers/authorController');
const app = express();
app.get('/authors', authorController.listAuthors);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});

// a responsabilidade de criar e manipular a lista de autores cadastrados é do model
// A view é responsável por receber as informações do model (via controller) e exibi-las para o usuário.

// Criando a view
// vamos usar uma template engine .

// O express suporta diversas template engines nativamente.
https://expressjs.com/en/resources/template-engines.html

// usaremos o EJS . EJS é um acrônimo para E mbedded J ava S cript. Isso traduz exatamente o que ele faz: permite embutir JavasScript em documentos.
https://ejs.co/

// instalar o EJS:
// └─# npm install ejs    

// * views/authors/index.ejs
<!doctype html>
<html>
  <head>
    <title>MVC - Exemplo</title>
  </head>
  <body>
    <ul>
      <% authors.forEach((author) => { %>
        <li><%= author.name %></li>
      <% }) %>
    </ul>
  </body>
</html>

// as tags <%% , <%%= e %> . Quando mandarmos o EJS renderizar esse arquivo, ele simplesmente copiará tudo que não estiver dentro dessas tags para a saída. Ao encontrar essas tags especiais, o código JavaScript que está dentro delas será executado.

// cada linha de JavaScript deve estar entre <%% e %> ou entre <%%= e %> .
// O primeiro caso ( <%% e %> ) é utilizado para quando precisamos que um código seja apenas executado, como é o caso do nosso forEach . 
// o segundo caso ( <%%= e %> ) é quando precisamos modificar o HTML com o retorno da função, como, adicionar a tag li como o nome de cada um dos autores ao documento.

// Agora vamos configurar o express para utilizar o EJS:
// * index.js
// const express = require('express');
// const authorController = require('./controllers/authorController');
// const app = express();
app.set('view engine', 'ejs');

app.set('views', './views');
// app.get('/authors', authorController.listAuthors);
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Ouvinndo a porta ${PORT}`);
// });

// # A linha app.set('view engine', 'ejs'); configura o express para utilizar o EJS por padrão como template engine.
// # Dessa forma, não precisamos especificar a extensão do arquivo que queremos utilizar.
// # A linha app.set('views', './views'); adiciona o diretório /views à lista de diretórios em que o expresss vai procurar um arquivo com o nome especificado pelo método render
// # Assim, não precisamos especificar o caminho completo do arquivo em todos os momentos.

// vamos criar a implementação do controller listAuthors
// * controllers/authorController.js
// const Author = require('../models/Author');
// const listAuthors = async (req, res) => {
  const authors = await Author.getAll();
  res.status(200).render('authors/index', { authors });
// };
// module.exports = {
//  listAuthors
// }

// # controller, tudo que precisamos fazer é chamar res.render , passando o caminho do arquivo. 
// # Os dados necessários para renderizar o template são passados como um objeto no segundo parâmetro.

// ** resultado
// └─# node index                                                         130 ⨯

// Adicionando uma página de detalhes de um escritor

// A página de detalhes será acessada pelo endpoint /authors/:id , onde id é o id do escritor.
// * index.js
// const express = require('express');
// const authorController = require('./controllers/authorController');
// const app = express();
// app.set('view engine', 'ejs');
// app.set('views', './views');
// app.get('/authors', authorController.listAuthors);
app.get('/authors/:id', authorController.showAuthor);
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Ouvinndo a porta ${PORT}`);
// });

// # No index.js , registramos uma nova rota para a página de detalhes.

// * controllers/authorController.js
// const Author = require('../models/Author');
// const listAuthors = async (req, res) => {
//   const authors = await Author.getAll();
//   res.status(200).render('authors/index', { authors });
// };
const showAuthor = async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);

  if (!author) return res.status(404).render('404');

  res.status(200).render('authors/show', { author });
};
// module.exports = {
//   listAuthors,
     showAuthor
// }

// # Em authorController , adicionamos uma função controller para responder a requisições para essa rota. Ela funciona de forma muito semelhante a listAuthors . A diferença é que ela extrai o parâmetro id da URL e o usa para consultar o model pelo escritor requisitado.
// # Caso o model não encontre um escritor, setamos o código de status para 404 (Not Found) e renderizamos uma view específica para esse caso. 

// * models/Author.js
// const connection = require('./connection');
// Cria uma string com o nome completo do autor
// const getNewAuthor = (authorData) => {
// const { id, firstName, middleName, lastName } = authorData;
//
// const fullName = [firstName, middleName, lastName]
//  .filter((name) => name)
//  .join(' ');
//
// return {
//   id,
//   firstName,
//   middleName,
//   lastName,
//   name: fullName,
//  };
// };
// Serializa o nome dos campos de snake_case para camelCase
// const serialize = (authorData) => ({
//   id: authorData.id,
//   firstName: authorData.first_name,
//   middleName: authorData.middle_name,
//   lastName: authorData.last_name,
// });
// Busca todos os autores do banco.
// const getAll = async () => {
//   const [authors] = await connection.execute(
//     'SELECT id, first_name, middle_name, last_name FROM authors;',
//   );
//   return authors.map(serialize).map(getNewAuthor);
// };
/*
Busca um autor específico, a partir do seu ID
@param {String} id ID do autor a ser recuperado
*/
const findById = async (id) => {
  const [
    authorData,
  ] = await connection.execute(
    'SELECT  first_name, middle_name, last_name FROM authors WHERE id = ?',
    [id]
  );

  if (!authorData.length) return null;

  const { firstName, middleName, lastName } = authorData.map(serialize)[0];

  return getNewAuthor({
    id,
    firstName,
    middleName,
    lastName,
  });
};
// module.exports = {
// getAll,
findById,
// };

// * views/authors/show.ejs
<!doctype html>
<html>
  <head>
    <title>MVC com Express</title>
  </head>
  <body>
    <div>
      <p>Nome: <%= author.name %></p>
    </div>
    <a href="/authors">Voltar para página inicial</a>
  </body>
</html>

// * views/404.ejs
<!doctype html>
<html>
  <head>
    <title>MVC com Express</title>
  </head>
  <body>
    <h1>Página não encontrada!</h1>
  </body>
</html>

// E, na view index.ejs , adicionamos um link para cada escritor que levará para sua respectiva página de detalhes:
// * views/authors/index.ejs
<!-- <!doctype html>
<html>
  <head>
    <title>MVC - Exemplo</title>
  </head>
  <body>
    <ul>
      <% authors.forEach((author) => { %>
        <li><%= author.name %></li> -->
        <a href=<%= `/authors/${author.id}` %>>Ver detalhes</a>
      <!-- <% }) %>
    </ul>
  </body>
</html> -->

// ** resulado
// └─# node index                                                           1 ⨯

// Criando um novo escritor
// * models/Author.js
// const connection = require('./connection');
// Cria uma string com o nome completo do autor
// const getNewAuthor = (authorData) => {
// const { id, firstName, middleName, lastName } = authorData;
// const fullName = [firstName, middleName, lastName]
//  .filter((name) => name)
//  .join(' ');
// return {
//  id,
//  firstName,
//  middleName,
//  lastName,
//  name: fullName,
//  };
// };
// Serializa o nome dos campos de snake_case para camelCase
// const serialize = (authorData) => ({
//   id: authorData.id,
//   firstName: authorData.first_name,
//   middleName: authorData.middle_name,
//   lastName: authorData.last_name,
// });
// Busca todos os autores do banco.
// const getAll = async () => {
//   const [authors] = await connection.execute(
//     'SELECT id, first_name, middle_name, last_name FROM authors;',
//   );
//   return authors.map(serialize).map(getNewAuthor);
// };
//
// Busca um autor específico, a partir do seu ID
// @param {String} id ID do autor a ser recuperado
//
// const findById = async (id) => {
//   const [
//     authorData,
//   ] = await connection.execute(
//     'SELECT  first_name, middle_name, last_name FROM authors WHERE id = ?',
//     [id],
//   );
// if (!authorData) return null;
// const { firstName, middleName, lastName } = authorData.map(serialize)[0];
// return getNewAuthor({ id, firstName, middleName, lastName });
// };
const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
};

const create = async (firstName, middleName, lastName) => connection.execute(
  'INSERT INTO mvc_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
  [firstName, middleName, lastName],
);
// module.exports = {
// getAll,
// findById,
   isValid,
   create,
// };

// # A função create funciona exatamente igual a que viemos no conteúdo de MSC, assim como a função isValid que retorna um boolean indicando se os dados são válidos, checando se firstName e lastName são strings não vazias, e se middleName , caso seja informado, é uma string.

// Agora, precisamos criar o formulário que permitirá criar novos escritores. O formulário será renderizado na rota /authors/new e, ao ser submetido, fará uma requisição POST para /authors .

// O middleware body-parser
// └─# npm install body-parse                                             130 ⨯

// * index.js
// const express = require('express');
const bodyParser = require('body-parser');
// const authorController = require('./controllers/authorController');
// const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
// app.set('view engine', 'ejs');
// app.set('views', './views');
// app.get('/authors', authorController.listAuthors);
app.get('/authors/new', authorController.newAuthor);
// app.get('/authors/:id', authorController.showAuthor);
app.post('/authors', authorController.createAuthor);
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Ouvinndo a porta ${PORT}`);
// });

// Note que a rota /authors/new deve ficar antes de /authors/:id . Ao receber uma requisição, o express compara o caminho da URL com as rotas existentes, na ordem em que foram definidas. Se você inverter a ordem das rotas, ao entrar em localhost:3000/authors/new , a rota /authors/:id será a primeira a dar match , como se você estivesse procurando um escritor com o id new , e receberá como resposta a página 404 . Experimente!

// Em authorController.js , adicionamos as funções controller que responderão a essas rotas.

// * controllers/authorController.js
// const Author = require('../models/Author');
// exports.listAuthors = async (req, res) => {
//   const authors = await Author.getAll();
//   res.render('authors/index', { authors });
// };
// exports.showAuthor = async (req, res) => {
//   const { id } = req.params;
//   const author = await Author.findById(id);
//   if (author) {
//     res.status(200).render('authors/show', { author });
//   } else {
//     res.status(404).render('404');
//   }
// };
const newAuthor = (req, res) => {
  res.render('authors/new', { message: null });
};

const createAuthor = async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
    return res.render('authors/new', { message: 'Dados inválidos' });
  }

  await Author.create(first_name, middle_name, last_name);
  res.redirect('authors');
};
//module.exports = {
//  listAuthors,
//  showAuthor,
    newAuthor,
    createAuthor,
// }

// newAuthor simplesmente renderiza o formulário.
// createAuthor extrai os parâmetros do formulário que chegam em req.body , verifica se os dados enviados são válidos. Caso não sejam, o formulário é renderizado novamente, passando uma mensagem indicando que os dados fornecidos são inválidos.
// Caso os dados sejam válidos, pede ao modelo para criar um novo escritor e redireciona a pessoa para a lista completa em /authors .

// Agora criamos o formulário:
// * views/authors/new.ejs
// <!doctype html>
<html>
  <head>
    <title>MVC com Express</title>
  </head>
  <body>
    <% if (message) { %>
      <div><%= message %></div>
    <% } %>
    <form action="/authors" method="POST">
      <label for="first_name">Nome:</label>
      <input id="first_name" name="first_name" type="text" />
      <label for="middle_name">Nome do meio:</label>
      <input id="middle_name" name="middle_name" type="text" />
      <label for="last_name">Sobrenome:</label>
      <input id="last_name" name="last_name" type="text" />
      <button type="submit">Criar novo autor!</button>
    </form>
    <a href="/authors">Voltar para página inicial</a>
  </body>
</html>

// E adicionamos um link na página inicial:
// * views/authors/index.ejs
<!-- <!doctype html>
<html>
  <head>
    <title>MVC - Exemplo</title>
  </head>
  <body>
    <ul>
      <% authors.forEach((author) => { %>
        <li><%= author.name %></li>
        <a href=<%= `/authors/${author.id}` %>>Ver detalhes</a>
      <% }) %>
    </ul> -->
    <a href="/authors/new">Criar novo autor</a>
  <!-- </body>
</html> -->

// Na view new.ejs , verificamos se a variável message contém um valor não nulo e, caso tenha, renderizamos uma div com a mensagem recebida. É por isso que no controller newAuthor precisamos passar { message: null } como segundo parâmetro. Se não fizéssemos isso, ocorreria um erro ao tentar renderizar a view, pois a variável message não estaria definida.

// ** resultado
// └─# node index            

// # video
// └─# mkdir mvc-video && cd mvc-video                              
// └─# npm init -y           
// └─# npm install express   
// └─# npm install mysql2
// └─# npm install nodemon
// └─# npm install ejs
// └─# npm install body-parse

// package.json
"start": "nodemon index.js"

// index.js

// crie as pastas:
// Controller
// Model
// View

// Controller/authorController.js

// Model/connection.js
// Model/authorModel.js

// View/Author/Author.html
// View/Author/New.html

// - Concluido \o/

// ==============================
// -- > CONTEÚDO do dia - bloco30.1 -- <---/ FIM -----------------------------------------//
// ==============================
// -- > AULA ao VIVO - bloco30.1 ----- <---/ INICIO --------------------------------------//
// ==============================



// ==============================
// -- > AULA ao VIVO - bloco30.1 ----- <---/ FIM -----------------------------------------//
// ==============================
// -- > EXERCÍCIO do dia - bloco30.1 -- <---/ INICIO --------------------------------------//
// ==============================

// # Agora, a prática


// # Recursos adicionais

// Documentação

// ==============================
// -- > EXERCÍCIO do dia - bloco30.1 -- <---/ FIM -----------------------------------------//
// ============================== NodeJS - Arquitetura de Software - Camada de View
// ...
