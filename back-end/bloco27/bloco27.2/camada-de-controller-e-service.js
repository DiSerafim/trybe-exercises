// ============================== Arquitetura de Software - Camada de Controller e Service
// -- > CONTEÚDO do dia - 27.2 -- <---/ INICIO --------------------------------------//
// ==============================

//--> As camadas de Controller e Service
//--> A camada dos Controllers
//--> A camada dos Services
//--> Praticando
//--> Validações
//--> Boas Práticas em Arquitetura de Software

// ### Conteúdos

// ### As camadas de Controller e Service
// - respectivamente, responsáveis por (1) receber e tratar os dados da requisição e (2) aplicar as regras de negócio da aplicação antes que qualquer comunicação com o banco seja realizada.
                    cliente 
          requisição⬇️   ⬆️Resposta
                      API
                    ⬇️   ⬆️
                  Controller
                    ⬇️   ⬆️
                    Service
                    ⬇️   ⬆️
           __________Model__________
         ⬆️          ⬆️             ⬆️
Banco de dados / API externa / Sistema de arquivos

// Organização das Camadas
// Sempre que utilizarmos os termos "camadas abaixo" ou "camadas acima", lembre-se dessa ordem para se orientar.

// ### A camada dos Controllers
// - Os middlewares

// Isso porque a camada dos controllers é a primeira camada numa API. É nela onde os dados da requisição serão recebidos e tratados, pra depois serem passados para as próximas camadas.

// O controller recebe as requisições e então consulta o service, enviando na resposta aquilo que o service retornar, que pode ser uma mensagem de erro, em caso de falha, ou as informações pedidas, em caso de sucesso.

// Uma ótima analogia para o controller é que ele seria como um garçom em um restaurante. O garçom não sabe como preparar os pratos e nem como recepcionar as pessoas na porta. Ele apenas anota o pedido, sabe para que parte do restaurante levar o pedido e para qual mesa entregá-lo depois de pronto.
// Quando você monta seu software em uma camada só, é como se o garçom fizesse todas as funções dentro do seu restaurante (recepcionar, anotar os pedidos, preparar os pratos etc). É pedir pra dar confusão, não é?

// ### A camada dos Services
// - Ela fica situada entre as camadas de controller e model e é responsável pela nossa lógica de negócio. O modelo, então, passa a ser responsável somente pelo acesso a dados.

// # Uma boa camada de serviço:
// - Deve centralizar acesso a dados e funções externas. Exemplo: chamar um evento que dispara uma mensagem no Slack;
// - Deve abstrair lógica de negócio complexa do seu modelo;
// - Não deve ter nenhum tipo de informação sobre o acesso a camada de dados. Exemplo: não ter nenhuma query SQL;
// - Não deve receber nada relacionado ao HTTP, seja o request ou o response . O controller deve mandar apenas o necessário para o service .

// ### Praticando
// pasta: hello-msc

// hello-msc/package.json
{
  // ...
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  // ...
}

// hello-msc/index.js
const express = require('express');
const bodyParser = require('body-parser');
const Author = require('./models/Author');
const app = express();

app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();
  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);
  if (!author) return res.status(404).json({ message: 'Not found' });
  res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;
  if (!Author.isValid(first_name, middle_name, last_name)) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }
  await Author.create(first_name, middle_name, last_name);
  res.status(201).json({ message: 'Autor criado com sucesso! ' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});

// hello-msc/models/connection.js
const { MongoClient } = require('mongodb');
const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';
let db = null;

const connection = () => {
  return db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
      db = conn.db('model_example');
      return db;
    })
};

module.exports = connection;

// hello-msc/models/Author.js
const connection = require('./connection');
const { ObjectId } = require('mongodb');

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

// Busca todos os autores do banco.
const getAll = async () => {
  return connection()
    .then((db) => db.collection('authors').find().toArray())
    .then((authors) =>
      authors.map(({ _id, firstName, middleName, lastName }) =>
        getNewAuthor({
          id: _id,
          firstName,
          middleName,
          lastName,
        })
      )
  );
}

/*
Busca um autor específico, a partir do seu ID
@param {String} id ID do autor a ser recuperado
*/
const findById = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }
  const authorData = await connection()
    .then((db) => db.collection('authors').findOne(new ObjectId(id)));
  if (!authorData) return null;
  const { firstName, middleName, lastName } = authorData;
  return getNewAuthor({ id, firstName, middleName, lastName });
};

const isNonEmptyString = (value) => {
  if (!value) return false;
  return typeof value === 'string';
};

const isValid = (firstName, middleName, lastName) => {
  if (middleName && typeof middleName !== 'string') return false;
  return isNonEmptyString(firstName) && isNonEmptyString(lastName);
};

const create = async (firstName, middleName, lastName) =>
  connection()
    .then((db) => db.collection('authors').insertOne({ firstName, middleName, lastName }))
    .then(result => getNewAuthor({ id: result.insertedId, firstName, middleName, lastName }));

module.exports = {
  getAll,
  findById,
  isValid,
  create,
};

// instalar dependencias
// └─# npm i express body-parse
// └─# npm i nodemon -D
// └─# npm i mongodb

// testando
// └─# npm run dev  

// # services/Author.js
const Author = require('../models/Author');

const getAll = async () => Author.getAll();
const findById = async (id) => Author.findById(id);
const create = async (firstName, middleName, lastName) =>
  Author.create(firstName, middleName, lastName);

module.exports = {
  getAll,
  findById,
  create,
};

// "Um autor com mesmo nome completo não pode ser cadastrado duas vezes."
// Altere o arquivo hello-msc/models/Author.js da seguinte maneira:

// hello-msc/models/Author.js
const connection = require('./connection');
const { ObjectId } = require('mongodb');

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

// Busca todos os autores do banco.
const getAll = async () => {
  return connection()
    .then((db) => db.collection('authors').find().toArray())
    .then((authors) =>
      authors.map(({ _id, firstName, middleName, lastName }) =>
        getNewAuthor({
          id: _id,
          firstName,
          middleName,
          lastName,
        })
      )
  );
}

/*
Busca um autor específico, a partir do seu ID
@param {String} id ID do autor a ser recuperado
*/
const findByName = async (firstName, middleName, lastName) => {
  // Determinamos se devemos buscar com ou sem o nome do meio
  const query = middleName
    ? { firstName, middleName, lastName }
    : { firstName, lastName };
  // Executamos a consulta e retornamos o resultado
  const author = await connection()
    .then((db) => db.collection('authors').findOne(query));
  // Caso nenhum author seja encontrado, devolvemos null
  if (!author) return null;
  // Caso contrário, retornamos o author encontrado
  return getNewAuthor(author);
};

const isNonEmptyString = (value) => {
  if (!value) return false;
  return typeof value === 'string';
};

const isValid = (firstName, middleName, lastName) => {
  if (middleName && typeof middleName !== 'string') return false;
  return isNonEmptyString(firstName) && isNonEmptyString(lastName);
};

const create = async (firstName, middleName, lastName) =>
  connection()
    .then((db) => db.collection('authors').insertOne({ firstName, middleName, lastName }))
    .then(result => getNewAuthor({ id: result.insertedId, firstName, middleName, lastName }));

module.exports = {
  getAll,
  findById,
  isValid,
  create,
  findByName,
};

// Com essa função pronta, precisamos modificar o service para que ele a utilize e aplique nossa regra de negócio. Modifique o arquivo services/Author.js da seguinte forma:
const Author = require('../models/Author');

const getAll = async () => Author.getAll();
const findById = async (id) => Author.findById(id);

const create = async (firstName, middleName, lastName) => {
  // Buscamos um autor com o mesmo nome completo que desejamos criar
  const existingAuthor = await Author.findByName(firstName, middleName, lastName);
  // Caso esse autor já exista, retornamos um objeto de erro informando
  // que não é possível criar o autor pois ele já existe
  if (existingAuthor) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Um autor já existe com esse nome completo',
      },
    };
  }
  // Caso o autor não exista e, portanto, possa ser criado
  // chamamos o model e retornamos o resultado
  return Author.create(firstName, middleName, lastName);
};

module.exports = {
  getAll,
  findById,
  create,
};

// # Erros de domínio.
// Numa aplicação em camadas, eles servem principalmente para que camadas inferiores possam informar camadas superiores sobre erros ou falhas que, por sua vez, devem ser retornadas a quem fez a chamada.

// Altere o arquivo services/Author.js
const Author = require('../models/Author');

const getAll = async () => Author.getAll();
const findById = async (id) => {
  // Solicitamos que o model realize a busca no banco
  const author = await Author.findById(id);
  // Caso nenhum autor seja encontrado, retornamos um objeto de erro.
  if (!author) {
    return {
      error: {
        code: 'notFound',
        message: `Não foi possível encontrar um autor com o id ${id}`,
      },
    };
  }
  // Caso haja um autor com o ID informado, retornamos esse autor
  return author;
};
const create = async (firstName, middleName, lastName) => {
  // Buscamos um autor com o mesmo nome completo que desejamos criar
  const existingAuthor = await Author.findByName(firstName, middleName, lastName);
  // Caso esse autor já exista, retornamos um objeto de erro informando
  // que não é possível criar o autor pois ele já existe
  if (existingAuthor) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Um autor já existe com esse nome completo',
      },
    };
  }
  // Caso o autor não exista e, portanto, possa ser criado
  // chamamos o model e retornamos o resultado
  return Author.create(firstName, middleName, lastName);
};

module.exports = {
  getAll,
  findById,
  create,
};
// Agora sim, nosso service está comunicando ao controller toda vez que algum erro de domínio acontece.

// vamos ver como esse erro é recebido e tratado pelo controller.
// Crie a pasta controllers e, dentro dela, o arquivo Author.js
// Nesse arquivo, vamos implementar lógica para realizar todas as operações que nossa aplicação realiza até agora, começando por buscar todos os autores:

// # controllers/Author.js
// hello-msc/controllers/Author.js

const rescue = require('express-rescue');
const service = require('../services/Author');

const getAll = rescue(async (req, res) => {
  const authors = await service.getAll();
  res.status(200).json(authors);
});

module.exports = {
  getAll,
};
// 'controllers' é responsável por receber e tratar as requests, e, no express, é composta majoritariamente de middlewares. Sendo assim, para construir nosso controller, só precisamos trazer os middlewares do index.js para o controller, alterando-os para que utilizem o service ao invés do model. 

// hello-msc/controllers/Author.js
// hello-msc/controllers/Author.js

const rescue = require('express-rescue');
const service = require('../services/Author');

const getAll = rescue(async (req, res) => {
  const authors = await service.getAll();
  res.status(200).json(authors);
});
const findById = rescue(async (req, res, next) => {
  // Extraímos o id da request
  const { id } = req.params;
  // Pedimos para o service buscar o autor
  const author = await service.findById(id);
  // Caso o service retorne um erro, interrompemos o processamento
  // e inicializamos o fluxo de erro
  if (author.error) return next(author.error);
  // Caso não haja nenhum erro, retornamos o author encontrado
  res.status(200).json(author);
});

module.exports = {
  getAll,
  findById,
};
// Repare que o controller verifica se existe um erro e, se existir, chama next(author.error)

// - Ao validar no model, estamos validando os dados no final da request, ou seja, na saída.
// - Ao validar no controller, estamos validando esses dados na entrada, garantindo que não vamos realizar nenhum processamento desnecessário utilizando dados que não são válidos, e que os dados vão trafegar limpinhos por todas as camadas da aplicação.

// vamos instalar o joi
// └─# npm i joi

// vamos adicioná-lo ao controller:
// hello-msc/controllers/Author.js
const Joi = require('joi');
const rescue = require('express-rescue');
const service = require('../services/Author');

const getAll = rescue(async (req, res) => {
  const authors = await service.getAll();
  res.status(200).json(authors);
});
const findById = rescue(async (req, res, next) => {
  // Extraímos o id da request
  const { id } = req.params;
  // Pedimos para o service buscar o autor
  const author = await service.findById(id);
  // Caso o service retorne um erro, interrompemos o processamento
  // e inicializamos o fluxo de erro
  if (author.error) return next(author.error);
  // Caso não haja nenhum erro, retornamos o author encontrado
  res.status(200).json(author);
});
const create = rescue(async (req, res, next) => {
  // Utilizamos o Joi para descrever o objeto que esperamos
  // receber na requisição. Para isso, chamamos Joi.object()
  // passando um objeto com os campos da requisição e suas descrições
  const { error } = Joi.object({
    // Deve ser uma string (.string()) não vazia (.not().empty()) e é obrigatório (.required())
    firstName: Joi.string().not().empty().required(),
    // Não é obrigatório mas, caso seja informado, deve ser uma string não vazia
    middleName: Joi.string().not().empty(),
    // Deve ser uma string não vazia e é obrigatório
    lastName: Joi.string().not().empty().required(),
  })
    // Por fim, pedimos que o Joi verifique se o corpo da requisição se adequa a essas regras
    .validate(req.body);
  // Caso exista algum problema com a validação, iniciamos o fluxo de erro e interrompemos o middleware.
  if (error) {
    return next(error);
  }
  // Caso não haja erro de validação, prosseguimos com a criação do usuário
  const { firstName, middleName, lastName } = req.body;
  const newAuthor = await service.create(firstName, middleName, lastName);
  // Caso haja erro na criação do autor, iniciamos o fluxo de erro
  if (newAuthor.error) return next(newAuthor.error);
  // Caso esteja tudo certo, retornamos o status 201 Created, junto com as informações
  // do novo autor
  return res.status(201).json(newAuthor);
});

module.exports = {
  getAll,
  findById,
  create,
};

// Agora que nosso controller está pronto, só falta "plugá-lo" no nosso app do express, no arquivo index.js . Bora lá?
// Altere o arquivo index.js
// hello-msc/index.js
const express = require('express');
const bodyParser = require('body-parser');
const Author = require('./controllers/Author');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.get('/authors', Author.getAll);
app.get('/authors/:id', Author.findById);
app.post('/authors', Author.create);

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();
  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);
  if (!author) return res.status(404).json({ message: 'Not found' });
  res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;
  if (!Author.isValid(first_name, middle_name, last_name)) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }
  await Author.create(first_name, middle_name, last_name);
  res.status(201).json({ message: 'Autor criado com sucesso! ' });
});

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});

// # No nosso controller, existem alguns momentos em que interrompemos o fluxo comum do middleware, e iniciamos o fluxo de erro. Esse fluxo de erro é também responsabilidade da camada de controller, que deve converter o erro em um formato padronizado e enviá-lo, junto com o status code adequado, para o client que realizou a requisição.

// Crie a pasta middlewares e, dentro dela, o arquivo error.js :

// hello-msc/middlewares/error.js
module.exports = (err, req, res, _next) => {
  // Qualquer erro será recebido sempre por esse middleware, então a primeira coisa que fazemos
  // é identificar qual o tipo do erro.
  // Se for um erro do Joi, sabemos que trata-se de um erro de validação
  if (err.isJoi) {
    // Logo, respondemos com o status 400 Bad Request
    return res.status(400)
      // E com a mensagem gerada pelo Joi
      .json({ error: { message: err.details[0].message } });
  }
  // Caso não seja um erro do Joi, pode ser um erro de domínio ou um erro inesperado.
  // Construímos, então, um mapa que conecta um erro de domínio a um status HTTP.
  const statusByErrorCode = {
    notFound: 404, // Erros do tipo `notFound` retornam status 404 Not Found
    alreadyExists: 409, // Erros do tipo `alreadyExists` retornam status 409 Conflict
    // Podemos adicionar quantos códigos novos desejarmos
  };
  // Buscamos o status adequado para o erro que estamos tratando.
  // Caso não haja um status para esse código, assumimos que é
  // um erro desconhecido e utilizamos o status 500 Internal Server Error
  const status = statusByErrorCode[err.code] || 500;
  // Por último, retornamos o status e a mensagem de erro para o client
  res.status(status).json({ error: { message: err.message } });
};

// Agora, é só "plugar" nosso middleware de erro na aplicação do express e pronto!
// Volte no index.js e faça as seguintes adições.
// hello-msc/index.js
const express = require('express');
const bodyParser = require('body-parser');
const Author = require('./controllers/Author');
const errorMiddleware = require('./middlewares/error');
const app = express();
app.use(bodyParser.json());

app.get('/authors', Author.getAll);
app.get('/authors/:id', Author.findById);
app.post('/authors', Author.create);
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
// E, agora sim, nossa aplicação está pronta!

// ### Validações

// ### Boas Práticas em Arquitetura de Software
// Indiferente de qual padrão arquitetural você vai usar, existem algumas boas práticas que você deve sempre manter em mente, independente do padrão a ser seguido.

// Pense antes de escrever código!
// A primeira coisa é você entender qual é o problema que será resolvido e, a partir daí, começar a pensar em uma solução em nível de arquitetura.

// Imagine o seguinte cenário:
// "Quero criar uma aplicação que mostra todas as fotos que as pessoas tiraram com base na localização. As versões mobile native e web serão parecidas, mas apenas a mobile poderá tirar fotos." - Cliente, Seu

// Pense em Componentes
// A intenção é que nossas aplicações sejam construídas com pequenos pedacinhos de código sem dependências entre si. A mesma coisa se aplica numa API também!
// Dentro das suas camadas, mantenha cada controller, cada model e cada serviço pequeno e o mais desacoplado possível das outras partes. Faça com que eles se comuniquem somente através de interfaces muito bem definidas. Não deixe que um componente acesse diretamente o que está dentro de outro. Isso vai facilitar muito na hora de dar manutenção, reutilizar e testar seu código.

// Mantenha suas pastas organizadas
// Existem algumas maneiras de organizar as pastas em um projeto, mas vamos citar duas: por domínio/correlação e por papel técnico.

// Por domínio/correlação, nós mantemos todos os arquivos que têm relação com um Author, por exemplo, na mesma pasta, independente da responsabilidade de cada arquivo:
// author
// ├── authorController.js
// ├── authorService.js
// └── authorModel.js
// book
// └── bookController.js
// └── bookService.js
// └── bookModel.js

// Por papel técnico é como temos exemplificado até agora (não que seja necessariamente melhor). Todos os controllers em uma pasta, todos os services em outra e por aí vai:
// controllers
// ├── authorController.js
// └── bookController.js
// services
// ├── authorService.js
// └── bookService.js
// models
// ├── authorModel.js
// └── bookModel.js

// Mantenha o Express o mais longe possível.
// O mais longe possível quer dizer que devemos criar fronteiras bem definidas entre o Express e o "resto da sua aplicação".

// Isso significa manter os objetos req e res dentro do escopo do controller e nunca passá-los inteiros para as partes do app que cuidam da lógica de negócio.

// Observe este exemplo:
const userController = async (req, res) => {
  try {
    // ruim 😧
    await UserService.create(req);
    // bom! 😊
    const { email, password } = req.body;
    await UserService.create(email, password);
    res.send({ message: 'Tudo certo!' });
  } catch (e) {
    res.status(500).send({ message: 'Algo deu errado' });
  }
};
// Usando essas fronteiras como exemplo, nada além da camada de controle deveria saber que o Express existe .

// Mantenha sua configuração separada (e segura)
// Para fazer isso funcionar, você pode utilizar uma variável de ambiente chamada DB_URL e utilizar valores diferentes para ela no servidor e na sua máquina local.

// Podemos setar variáveis de ambiente pelo terminal:
DB_URL="mongodb://localhost:27017" node index.js

// index.js
console.log(process.env.DB_URL) // mongodb://localhost:27017

// No entanto, uma forma melhor e mais fácil, quando temos muitas variáveis, é criar um arquivo .env na raiz do projeto e usar a biblioteca dotenv, que basicamente pega o conteúdo desse arquivo e o deixa acessível via process.env .
npm install dotenv

# .env
PORT=3000
DB_URL=mongodb://localhost:27017
DB_NAME=model_example

// index.js
require('dotenv').config();
// ...
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
// Server listening on port 3000

// models/connection.js
const mongoClient = require('mongodb').MongoClient;

const connection = () => {
  return mongoClient
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db(process.env.DB_NAME))
    .catch((err) => {
      console.error(err);
      process.exit(1);
   });
};

module.exports = connection;

// Por último, não se esqueça de colocar o .env no .gitignore , pois não vamos querer versionar esse arquivo.

// ==============================
// -- > CONTEÚDO do dia - 27.2 -- <---/ FIM -----------------------------------------//
// ==============================
// -- > AULA ao VIVO - 27.2 ----- <---/ INICIO --------------------------------------//
// ==============================



// ==============================
// -- > AULA ao VIVO - 27.2 ----- <---/ FIM -----------------------------------------//
// ==============================
// -- > EXERCÍCIO do dia - 27.2 -- <---/ INICIO --------------------------------------//
// ==============================

// desenvolvimento
// └─# mkdir ao-vivo && cd ao-vivo
// └─# mkdir api-msc-music && cd api-msc-music
// └─# npm init -y
// └─# npm i express body-parse mongodb
// └─# npm i nodemon -D

// # package.json/scripts
// "dev": "nodemon index.js"

// rodar aplicação
// # npm run dev

// abre um novo terminal
// └─# service mongod start
// └─# mongosh             

// cria o DB
// > use musicClass

// insere as tabelas
> db.songs.insertMany([
  {
    _id: Object("1234567898734"),
    name: 'Carry On',
    album: 'Reaching Horizons'
  },
  {
    _id: Object("3472365538979"),
    name: 'Feeling Good',
    album: 'I Put a Spell on You'
  },
  {
    _id: Object("8736598348159"),
    name: 'Da Ponte pra Cá',
    album: 'Nada como um dia após o Outro Dia'
  },
  {
    _id: Object("3478572845908"),
    name: 'Aprendendo a Jogar',
    album: 'Elis'
  }
])
// acknowledged: true,



// ==============================
// -- > EXERCÍCIO do dia - 27.2 -- <---/ FIM -----------------------------------------//
// ============================== Arquitetura de Software - Camada de Controller e Service
// ...
