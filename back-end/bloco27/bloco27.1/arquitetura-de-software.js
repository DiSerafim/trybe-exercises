// ============================== Arquitetura de Software - Camada de Model
// -- > CONTEÚDO do dia - 27.1 -- <---/ INICIO --------------------------------------//
// ==============================

// # Conteúdos

// ### Model
// ### Model com MySQL
// ### Model com MongoDB

// # O que é "Arquitetura de Software"?
// - Arquitetura é um conhecimento compartilhado por desenvolvedores experientes sobre como organizar um sistema de software.


// Imagine um sistema que permite cadastro de pessoas usuárias.
// Estas são algumas regras de negócio que o sistema poderia ter:

// - Uma pessoa usuária deve necessariamente informar seu nome, sobrenome e email;
// - O email deve ser único, ou seja, não pode haver outra pessoa usuária no sistema com o mesmo email;
// - Por conter material sensível, a pessoa deve ser maior de 18 anos e declarar estar de acordo com os termos de uso da plataforma;
// - Sempre que uma nova pessoa usuária se cadastrar, um email de confirmação deve ser enviado para o email cadastrado. Novas pessoas usuárias somente poderão acessar a plataforma após serem verificadas.

// Como outro exemplo, imagine uma rede social fictícia em que as pessoas podem fazer posts sobre os mais diferentes assuntos. Algumas regras de negócio que essa rede social poderia ter:

// - Cada post pode ter no máximo 300 caracteres;
// - Pessoas podem comentar nas postagens umas das outras;
// - Uma pessoa só pode editar ou excluir suas próprias postagens;
// - Contudo, ela pode bloquear outras pessoas usuárias, impedindo-as de comentar e ver as suas postagens.

// Naturalmente, em sistemas de software, as regras de negócio se traduzem em códigos que controlam o comportamento das aplicações.
// Com o conceito de regras de negócio bem entendido, podemos falar das três camadas do MSC e quais são as responsabilidades de cada uma.

// # Arquitetura MSC

// - Camada de Modelo (M): Arquivos onde iremos executar as operações do banco de dados, como criar conexões e executar queries.
// - Camada de Serviço (S): Arquivos onde iremos estruturar nossas regras de negócio, geralmente é quem chama os métodos definidos na camada de modelo.
// - Camada de Controladores (C): Interface mais próxima da pessoa usuária ou de uma requisição, vai processar e chamar as devidas funções da camada de serviço.

// >>> Recursos adicionais
// - Software Architecture Guide - Martin Fowler
// - O que são regras de negócio e quais as vantagens de aplicá-las em uma empresa
// - Entenda o que são e confira 10 exemplos de regras de negócio


// ### Model
// - O model é onde nós manipulamos e definimos a estrutura dos nossos dados. Todo acesso aos dados deve passar por essa camada.

// O model é responsável por abstrair completamente os detalhes de acesso e armazenamento, fornecendo somente uma API que permita requisitar e manipular esses dados.

// É no model que verificaríamos se o novo usuário que estamos tentando criar é válido de acordo com as regras de negócio definidas, ou se a pessoa que está tentando apagar um post tem permissão para tal.

// Por exemplo, com uma camada de modelo bem definida, nós poderíamos criar uma versão CLI da nossa aplicação somente utilizando a API que ela define, sem nenhuma duplicação de código.
// Vamos a um rápido exemplo sem muitos detalhes para fixar melhor o conceito:
// userModel.js
const db = require('./db'); // Arquivo "fictício" que representa a conexão com o banco
async function getUser (username) {
  return db.findOne({ username })
  .then(result => result || null);
}

// Agora podemos utilizar esse arquivo em qualquer lugar onde precisemos de um usuário. Por exemplo, numa interface de linha de comando:
// cli.js
const readline = require('readline-sync');
const userModel = require('./userModel');
async function start() {
    const username = readline.question('Digite seu nome de usuário');
    const user = await userModel.getUser(username);
    if (!user) {
        return console.log('Usuário não encontrado');
    }
    console.log('Aqui estão os dados do usuário:');
    console.log(user);
}
start();

// Ao mesmo tempo, podemos utilizar nosso model em um middleware:
// getUserMiddleware.js
const userModel = require('./userModel');
function getUserMiddleware (req, res, next) {
    const { username } = req.body;
    const user = await useModel.getUser(username);
    if (!user) {
        return res.status(404).json({ message: 'user não encontrado' });
    }
    return res.status(200).jon(user);
}

// Dessa forma, caso nossos usuários passem a estar armazenados em outro lugar, como num arquivo, ou num outro banco de dados, nós só precisaremos alterar o arquivo userModel.js e, automaticamente, tudo volta a funcionar.

// ### Model com MySQL

// Criando e populando o banco de dados
// - precisamos ter o MySQL instalado e configurado na nossa máquina.

// Por enquanto, só teremos a tabela authors, com informações de escritores. A tabela terá as seguintes colunas:
// - Nome. Obrigatório;
// - Nome do meio. Opcional;
// - Sobrenome. Obrigatório;
// - Data de nascimento. Opcional;
// - Nacionalidade. Opcional;

// Agora, utilizando o MySQL Workbench ou o console do MySQL, execute o script SQL abaixo para criar o banco, a tabela e popular o banco com nosso dados iniciais:
// # model_example
CREATE DATABASE IF NOT EXISTS model_example;

USE model_example;

CREATE TABLE authors
(
    id INT NOT NULL auto_increment,
    first_name VARCHAR(30) NOT NULL,
    middle_name VARCHAR(30),
    last_name VARCHAR(30) NOT NULL,
    birthday DATE,
    nationality VARCHAR(100),
    PRIMARY KEY(id)
);

INSERT INTO authors (first_name,middle_name,last_name,birthday,nationality)

VALUES ('George','R. R.','Martin','1948-09-20','norte-americano'),
    ('J.','R. R.','Tolkien','1892-01-03','britânico'),
    ('Isaac',NULL,'Asimov','1920-01-20','russo-americano'),
    ('Frank',NULL,'Herbert','1920-02-11','norte-americano'),
    ('Júlio',NULL,'Verne','1905-03-24','francês');

// mkdir model-example-mysql && cd model-example-mysql
// └─# npm init -y
// └─# npm i mysql2
// └─# npm i express body-parse
// └─# npm i nodemon -D

// # package.json/"scripts"
// "dev": "nodemon index.js"

// # model-example-mysql/index.js
const express = require('express')
const app = express()
const port = 3000

const Author = require('./models/Author');

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();
  res.status(200).json(authors);
});

app.listen(port, () => console.log(`Example app listening on port 3000!`));

// # model-example-mysql/models/connection.js
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'root',
  password: '',
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;

// # model-example-mysql/models/Author.js
const connection = require('./connection');

const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
  const fullName = [firstName, middleName, lastName].filter((name) => name).join("");
  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName
  }
}
const serialize = (authorData) => {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name
  }
}
const getAll = async () => {
  const [authors] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');
  
  return authors.map(serialize).map(getNewAuthor);
}

module.exports = {
  getAll,
}

// - host: local onde o servidor do MySQL está armazenado. Como estamos executando localmente, usamos localhost ;
// - user: usuário que vamos utilizar para acessar o banco. Estamos usando o usuário root nesse exemplo;
// - password: senha do usuário especificado. Coloque '' se não houver senha para o usuário;
// - database: nome do banco ao qual queremos nos conectar;

// # Vamos praticar #1

// 1° crie a tabela Books usando o SQL abaixo
CREATE DATABASE IF NOT EXISTS model_example;

USE model_example;

CREATE TABLE books (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(90) NOT NULL,
  author_id INT(11) NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (author_id) REFERENCES authors (id)
);

INSERT INTO books (title, author_id)
VALUES
  ('A Game of Thrones', 1),
  ('A Clash of Kings', 1),
  ('A Storm of Swords', 1),
  ('The Lord of The Rings - The Fellowship of the Ring', 2),
  ('The Lord of The Rings - The Two Towers', 2),
  ('The Lord of The Rings - The Return of The King', 2),
  ('Foundation', 3);

// # Depois de criar a tabela no banco de dados, faça as seguintes implementações.
// mkdir vamos-praticar-1 && cd vamos-praticar-1
// └─# npm init -y
// └─# npm i mysql2
// └─# npm i express body-parse
// └─# npm i nodemon -D

// # package.json/"scripts"
// "dev": "nodemon index.js"


// 1 Crie um modelo Book e defina o método getAll para retornar a lista de todos os livros.
// # Book.js
const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute('SELECT * FROM model_example.books;');

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
};

module.exports = {
  getAll,
};

// 2 Crie uma rota /books para trazer a lista de todos os livros.
// # index.js
const express = require('express');
const Book = require('./model/Book');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/books', async (req, res) => {
  const books = await Book.getAll();
  res.status(200).json(books);
});


app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});

// 3 Crie um método getByAuthorId no modelo Book , para retornar apenas livros associados com um determinado author_id. E altere o middleware da rota books criado no passo 2 para receber uma query string com a chave author_id, e retornar apenas os livros associados.
// # Book.js
const getByAuthorId = async (authorId) => {
  const query = 'SELECT * FROM model_example.books WHERE author_id=?;';
  const [books] = await connection.execute(query, [authorId]);

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
};
// {
//   ...
// }
module.exports = {
  getByAuthorId,
};
// # index.js
app.get('/books', async (req, res) => {
  const { author_id } = req.query;
  const books = (author_id)
    ? await Book.getByAuthorId(author_id)
    : await Book.getAll();
  res.status(200).json(books);
});

// Buscando pelos detalhes de um escritor
// - dando continuidade ao 'model-example-mysql'

// models/Author.js
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
// Converte o nome dos campos de snake_case para camelCase
const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name});
// Busca todos os autores do banco.
const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
  );
  return authors.map(serialize).map(getNewAuthor);
};
// 2° video
const findById = async (id) => {
  const [authorData] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM authors',
    [id]
  );
  if (authorData.length === 0) return null;
  const { firstName, middleName, lastName } = authorData.map(serialize)[0];
  return getNewAuthor({
    id,
    firstName,
    middleName,
    lastName
  });
};

module.exports = {
  getAll,
  // 2° video
  findById,
};

// Criando um novo escritor
// - dando continuidade ao 'model-example-mysql'










// ### Model com MongoDB

































// ==============================
// -- > CONTEÚDO do dia - 27.1 -- <---/ FIM -----------------------------------------//
// ==============================
// -- > AULA ao VIVO - 27.1 ----- <---/ INICIO --------------------------------------//
// ==============================



// ==============================
// -- > AULA ao VIVO - 27.1 ----- <---/ FIM -----------------------------------------//
// ==============================
// -- > EXERCÍCIO do dia - 27.1 -- <---/ INICIO --------------------------------------//
// ==============================



// ==============================
// -- > EXERCÍCIO do dia - 27.1 -- <---/ FIM -----------------------------------------//
// ============================== Arquitetura de Software - Camada de Model
// ...
