// ============================== Arquitetura de Software - Testando as Camadas
// -- > CONTEÚDO do dia - 27.4 -- <---/ INICIO --------------------------------------//
// ==============================

//--> Desenvolvimento guiado por testes
//--> Tipos de Testes
//--> Testes Unitários (Unit Tests)
//--> Requisitos
//--> Model e testes
//--> Requisitos em testes (Model)
//--> Requisitos em Testes com BD em memória
//--> Service e testes
//--> Controllers e testes
//--> Rodando nosso código!

// ### Conteúdos

// ### Desenvolvimento guiado por testes

// - iremos seguir o modelo conhecido como TDD.
// O TDD, é um processo de desenvolvimento de software que visa o feedback rápido e a garantia do funcionamento da aplicação de acordo com o que foi definido.
// Podemos pensar que ele funciona como pequenos ciclos onde:
// - Partimos da escrita de testes a partir dos requisitos;
// - Em seguida, implementamos a funcionalidade;
// - E, por último, fazemos os ajustes necessários para que testes e implementação estejam alinhados.
// Concluindo o ciclo, iniciamos um novo para uma nova funcionalidade.

// ### Tipos de Testes
// focaremos nos dois tipos de testes mais comuns: testes unitários / de unidade e testes de integração.

// ### Testes Unitários (Unit Tests)
// - Conforme definido por Martin Fowler , importante nome na arquitetura de software, testes unitários são de baixo nível, com foco em pequenas partes do software e tendem a ser mais rapidamente executados quando comparados com outros testes, pois testam partes isoladas.

// O que podemos ter nítido é que uma unidade é uma parte que pode ter seu comportamento isolado de suas dependências.

// podemos dizer que cada função da camada de Model, por exemplo, é uma unidade. Dessa forma, conseguimos isolar essa função e testar seu comportamento de maneira unitária.

// ### Requisitos
// - desenvolveremos uma API utilizando os padrões REST e MSC. Essa API deverá permitir a realização de inserção e consulta de filmes no banco de dados.

// # A API deverá permitir a inserção de filmes no banco de dados:
// - Ela deve receber e registrar as seguintes informações do filme: Nome , Direção e Ano de lançamento ;
// - Ao realizar a inserção de um novo filme, o endpoint deverá responder com o respectivo ID ;

// # A API deverá permitir a consulta de todos os filmes:
// - A consulta deve retornar uma matriz com todos os detalhes dos filmes;

// # A API deverá permitir a consulta de um filme específico através do seu ID :
// - A consulta deve retornar todos os dados cadastrados para aquele ID .

// crie a estrutura
// └── controllers
// │   └── movieController.js
// └── models
// │   └── connection.js
// │   └── movieModel.js
// └── services
// │   └── movieService.js
// └── tests
// │   ├── controllers
// │   │   └── movieController.test.js
// │   ├── services
// │   │   └── movieService.test.js
// │   └── models
// │       └── movieModel.test.js
// └── index.js

// criamos um arquivo de teste para a entidade movie para cada camada do MSC. Dessa forma, conseguiremos testar unitariamente cada uma.

// Na raiz do projeto vamos iniciar o npm:
// $ npm init -y
// instalar as dependências, body-parser e o mongodb :
// $ npm install express body-parser mongodb
// instalar dependências de desenvolvimento, a stack de testes com mocha, chai e sinon:
// $ npm install -D mocha chai sinon
// script de teste no package.json

// Para esse dia, vamos utilizar um pequeno artifício com o intúito de facilitar a execução de testes específicos. Nesse caso, utilizaremos o comando mocha ./tests/**/*$NAME*.test.js :
...
  "scripts": {
    "test": "mocha ./tests/**/*$NAME*.test.js --exit"
  },
...
// O --exit força o encerramento do processo do mocha ao final dos testes
// Dessa forma, podemos executar o comando "npm test" para validar todos os nossos testes.

// ### Model e testes
// - Começaremos testando a camada de model , pensando de maneira sequencial, essa camada fica em uma das pontas da arquitetura e, por isso, iniciaremos por ela. Entretanto, é importante termos em mente que por se tratar de testes unitários, estaremos testando uma unidade específica do código isolado, sendo assim, poderíamos iniciar por qualquer parte.

// Seguindo o TDD, o primeiro passo é escrevermos os casos de testes. Para isso, precisamos nos perguntar o que iremos testar, ou seja, qual a responsabilidade que queremos garantir que está sendo realizada.

// Relembrando o papel do model , ele é responsável pela estrutura dos dados e seu armazenamento, por exemplo, responsável pela comunicação com o banco de dados e pelo mapeamento das entidades.

// Sendo assim, iremos testar se essa comunicação com o BD e suas operações de escrita e leitura estão sendo realizadas da maneira correta.

// ### Requisitos em testes (Model)

// #1 A API deverá permitir a inserção de filmes no banco de dados :
// - Ela deve receber e registrar as seguintes informações do filme: Nome , Direção e Ano de lançamento ;
// - Ao realizar a inserção de um novo filme, o endpoint deverá responder com o respectivo ID;

// 1º Podemos descrever o requisito pensando primeiramente o Model com as seguintes asserções/ afirmações:

// #1 Insere um novo filme no DB

// # quando é inserido com sucesso
// - retorna um objeto
// - tal objeto possui um "id" do novo filme inserido!

// Agora vamos reescrever essas mesmas asserções na estrutura de testes:

// tests/models/movieModelCreate.test.js
const { expect } = require('chai');
/*
  Como ainda não temos a implementação, vamos fixar
  um objeto simulando os métodos que iremos desenvolver,
  porém, eles não terão nenhum comportamento
*/
const MoviesModel = {
  create: () => {}
};
describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  }
  describe('quando é inserido com sucesso', () => {
    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);
      expect(response).to.be.a('object')
    });
    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);
      expect(response).to.have.a.property('id')
    });
  });
});
// como só temos esse teste a princípio, vamos executa-lo com npm test ou, específicamente, com NAME=movieModel npm test, e a saída no terminal será semelhante a essa:
Insere um novo filme no BD
quando é inserido com sucesso
  1) retorna um objeto
  2) tal objeto possui o "id" do novo filme inserido


0 passing (12ms)
2 failing

1) Insere um novo filme no BD
   quando é inserido com sucesso
     retorna um objeto:
 AssertionError: expected undefined to be an object
  at Context.<anonymous> (tests/models/movieModel.test.js:19:30)

2) Insere um novo filme no BD
   quando é inserido com sucesso
     tal objeto possui o "id" do novo filme inserido:
 AssertionError: Target cannot be null or undefined.
  at Context.<anonymous> (tests/models/movieModel.test.js:23:34)

// # Implementação

// 2º implementarmos nossa camada de model de acordo com os testes escritos.
// Vamos começar criando o arquivo de conexão com o banco de dados, utilizaremos o MongoDB:
// models/connection.js
const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';
let schema = null;

async function getConnection() {
  if (schema) return Promise.resolve(schema);
  return MongoClient
    .connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db('model_example'))
    .then((dbSchema) => {
      schema = dbSchema;
      return schema;
    })
    .catch((err) => {
      console.error(err);
    });
};
module.exports = { getConnection };

// E então, iniciaremos nosso model de movies importando tal conexão e então criando o método para criação de filmes:

// models/movieModel.js
const mongoConnection = require('./connection');

const create = async ({ title, directedBy, releaseYear }) => {
  const moviesCollection = await mongoConnection.getConnection()
    .then((db) => db.collection('movies'));
  const { insertedId: id } = await moviesCollection
    .insertOne({ title, directedBy, releaseYear });
  return {
    id,
  };
};
module.exports = {
  create,
};

// # Refactor e Test Doubles
// - Agora vamos para o último passo do TDD, revisitaremos os testes escritos para realizar os ajustes necessários de acordo com a nossa implementação!

// Vamos começar editando nosso teste para utilizar nossa implementação:

// tests/models/movieModelCreate.test.js
// const { expect } = require('chai');
const MoviesModel = require('../../models/movieModel');

// describe('Insere um novo filme no BD', () => { ...

// Antes de executar os testes novamente, vamos parar a instância do MongoDB para que nosso teste não faça uma operação de IO em disco.
// # sudo service mongod start

// Se executarmos nosso teste novamente, teremos o seguinte resultado:
Insere um novo filme no BD
    quando é inserido com sucesso
      ✔ retorna um objeto (372ms)
      ✔ tal objeto possui o "id" do novo filme inserido
  2 passing (383ms)

// para criarmos testes precisamos isolar o SUT (System Under Test), ou seja, garantirmos que estamos testando somente um trecho de código que tem uma função específica sem adicionarmos comportamentos ou variáveis externas a esse contexto.

// Partimos da premissa que o módulo ou driver que estamos utilizando para fazer a comunicação com o banco de dados já está devidamente testado e funciona conforme esperado.

// Dessa forma, nosso objetivo é testar o que está "depois" disso, ou seja, se as regras e comportamentos codificados antes de chegar até o banco de dados ou depois de recuperá-las do BD estão funcionando conforme esperado.

// Vamos ver um exemplo de como podemos utilizar o já conhecido sinon nessa tarefa.

// ao invés de subirmos um BD (Mongo), iremos fazer um stub da conexão, fazendo-a retornar um mock da conexão, ou seja, ela irá retornar um objeto com as mesmas características da conexão real, porém, serão funções falsas criadas por nós:

// # tests/models/movieModelCreate.test.js
const sinon = require('sinon');
// const { expect } = require('chai');

/* Vamos importar o módulo responsável para abrir a conexão nos nossos models para poder fazer o seu `double`.*/
const mongoConnection = require('../../models/connection');
// const MoviesModel = require('../../models/movieModel');
// describe('Insere um novo filme no BD', () => {
     /* Vamos deixar o objeto com o mock da conexão como uma variável global dentro desse describe. */
     let connectionMock; 
//   const payloadMovie = {
//      title: 'Example Movie',
//      directedBy: 'Jane Dow',
//      releaseYear: 1999,
//   };
      /* Esta é uma forma provisória para mockar a função insertOne
      Desta forma ela não vai chamar o banco de verdade para fazer esse teste */
      before(() => {
        const ID_EXAMPLE = '604cb554311d68f491ba5781';
        const insertOne = async () => ({ insertedId: ID_EXAMPLE });
        const collection = async () => ({ insertOne });
        const db = async (databaseName) => ({ collection });
        const getConnectionMock = async () => ({ db });
        connectionMock = getConnectionMock()
          .then((conn) => conn.db('model_example'));
        sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock);
      });
      /* Restauraremos a função `getConnection` original após os testes. */
      after(() => {
        mongoConnection.getConnection.restore();
      });
//   describe('quando é inserido com sucesso', () => { ...

// Execute os testes com NAME=movieModel npm test para ver que eles vão passar.
mocha ./tests/**/*$NAME*.test.js --exit
  Insere um novo filme no BD
    quando é inserido com sucesso
      ✔ retorna um objeto
      ✔ tal objeto possui o "id" do novo filme inserido
  2 passing (13ms)
// Porém, essa abordagem não é muito confiável, pois ao montar esse dublê para a função insertOne estamos mascarando o comportamento real do nosso modelo. Faça um teste, fazendo a seguinte modificação no model.

// tests/models/movieModelCreate.test.js
const create = async ({ title, directedBy, releaseYear }) => {
    /* Removemos o trecho que fazia  inserção no banco para ter uma prova 
    que nosso teste não está testando de fato a inserção de um objeto no banco! */
    return {
      id: '1',
    };
  };
// Você vai perceber que o teste continua passando, ou seja não temos uma garantia que nosso model realmente está salvando dados no banco de dados. Para fazer isso vamos precisar mudar um pouco a abordagem para usar um banco dublê. Ou seja um banco, que realmente faz operações, mas em memória. Entederemos melhor isso na próxima seção.

// ### Requisitos em Testes com BD em memória
// - A ideia é subirmos uma versão em memória do Banco de Dados que queremos, dessa forma, ele não persistirá nenhuma informação em disco (sem realizar IO) e ao final de cada teste podemos limpá-lo. Como essa versão do banco está em memória, ao finalizar os testes, as informações também serão apagadas.

// Existem diversas ferramentas que criam esse tipo de objeto para nós, dessa forma, teremos um objeto que se comporta exatamente como o nosso banco de dados real, porém, sem realizar nenhuma operação de IO em disco e após os testes todos os cenários serão limpos.

// NodeJS mongodb-memory-server .
// # npm install -D mongodb-memory-server@6
// O @6 é a versão que usamos para construir o conteúdo.

// Iremos então iniciar um server do banco em memória e fazer um stub da conexão conectando nesse server:

// # tests/models/movieModelCreate.test.js

// const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');
// const mongoConnection = require('../../models/connection');
releaseYear: 1999,
//   };

    /* Aqui atualizamos o código para usar o banco montado pela lib `mongo-memory-server` */
    before(async () => {
      const DBServer = new MongoMemoryServer();
      const URLMock = await DBServer.getUri();
      connectionMock = await MongoClient
        .connect(URLMock, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        })
        .then((conn) => conn.db('model_example'));
      sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock);
    });

//   /* Restauraremos a função `getConnection` original após os testes. */
//   after(() => {

// Realizado esses ajustes teremos nossos testes rodando com sucesso:
Insere um novo filme no BD
    quando é inserido com sucesso
      ✔ retorna um objeto
      ✔ tal objeto possui o "id" do novo filme inserido
  Insere um novo filme no BD

// Porém, no final da seção anterior fizemos uma alteração na função create do modelo. Ele não está fazendo nenhuma query para salvar dados no banco. Vamos lembrar como o código está atualmente.
const mongoConnection = require('./connection');
const create = async ({ title, directedBy, releaseYear }) => {
  /* Removemos o trecho que fazia  inserção no banco para ter uma prova 
  que nosso teste não está testando de fato a inserção de um objeto no banco! */
  return {
    id: 1,
  };
};
module.exports = {
  create,
};

// Para ter certeza que nosso model está inserindo algo no banco ao chamar a função create vamos adicionar mais uma verificação no nosso teste de movieModel.

expect(response).to.have.a.property('id');
//     });

    /* Aqui de fato estamos testando se o filme foi cadastrado após chamar a função `create`.
    Para isso fizemos uma consulta para o banco para checar se existe um filme com o título cadastrado */
    it('deve existir um filme com o título cadastrado!', async () => {
      await MoviesModel.create(payloadMovie);
      const movieCreated = await connectionMock.collection('movies').findOne({ title: payloadMovie.title });
      expect(movieCreated).to.be.not.null;
    });
//   });

// Nesse novo teste, estamos cadastrando o filme no banco e fazendo uma consulta ao banco usando o objeto com a conexão dublê. Assim podemos conferir se o filme foi de fato cadastrado. Rode o teste ainda com o código errado e você vai ver que o teste vai falhar.

// Agora vamos fazer o código do método create voltar a fazer a inserção no banco.
const create = async ({ title, directedBy, releaseYear }) => {
  const moviesCollection = await mongoConnection.getConnection()
     .then((db) => db.collection('movies'));
  const { insertedId: id } = await moviesCollection
     .insertOne({ title, directedBy, releaseYear });
  return {
    id,
  };
};

// Pronto, agora se você rodar novamente nossos testes, verá que eles estão passando de novo, e temos certeza que nosso model está inserindo dados no banco.
Insere um novo filme no BD
    quando é inserido com sucesso
      ✔ retorna um objeto
      ✔ tal objeto possui o "id" do novo filme inserido
      ✔ deve existir um filme com o título cadastrado!
  3 passing (278ms)

// ### Service e testes
// Seguindo nossa sequência iremos testar a camada de services.

// Relembrando o papel dessa camada, podemos definí-la como responsável pela lógica de negócio, sendo acessada pelo controller e acessando o model , ou seja, ficando situada entre as duas camadas.

// Relembrando nossos requisitos vamos identificar quais comportamentos precisaremos garantir:

// #1 A API deverá permitir a inserção de filmes no banco de dados:
// - Ela deve receber e registrar as seguintes informações do filme: Nome , Direção e Ano de lançamento ;
// - Ao realizar a inserção de um novo filme, o endpoint deverá responder com o respectivo ID;

// Com base no requisito podemos descrever um Service com as seguintes asserções / regras:

// tests/services/movieServiceCreate.test.js
const { expect } = require('chai');

const MoviesService = {
  create: () => {},
};
/*
  Precisamos validar se estamos recebendo todos os campos
  necessários para a operação. Como trata-se de uma regra
  de negócio, validaremos na camada de serviços.
*/
describe('Insere um novo filme no BD', () => {
  describe('quando o payload informado não é válido', () => {
    const payloadMovie = {};
    it('retorna um boolean', async () => {
      const response = await MoviesService.create(payloadMovie);
      expect(response).to.be.a('boolean');
    });
    it('o boolean contém "false"', async () => {
      const response = await MoviesService.create(payloadMovie);
      expect(response).to.be.equal(false);
    });
  });
  describe('quando é inserido com sucesso', () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };
    it('retorna um objeto', async () => {
      const response = await MoviesService.create(payloadMovie);
      expect(response).to.be.a('object');
    });
    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesService.create(payloadMovie);
      expect(response).to.have.a.property('id');
    });
  });
});
// Rodando o teste específico com NAME=movieServiceCreate npm test , teremos um retorno semelhante a:
// ERROS

// Agora vamos implementar a camada conforme os requisitos:

// services/movieService.js
const MoviesModel = require('../models/movieModel');

const isValid = (title, directedBy, releaseYear) => {
  if (!title || typeof title !== 'string') return false;
  if (!releaseYear || typeof releaseYear !== 'number') return false;
  if (!directedBy || typeof directedBy !== 'string') return false;
  return true;
};
const create = async ({ title, directedBy, releaseYear }) => {
  const isMovieValid = isValid(title, directedBy, releaseYear);
  if (!isMovieValid) return false;
  const { id } = await MoviesModel
    .create({ title, directedBy, releaseYear });
  return {
    id,
  };
};
module.exports = {
  create,
};

// Vamos então adaptar nosso teste para chamar nossa implementação:

// # tests/services/movieServiceCreate.test.js

// const { expect } = require('chai');
const MoviesService = require('../../services/movieService');
// describe('Insere um novo filme no BD', () => {

// Podemos rodar o teste novamente e teremos o seguinte resultado:
Insere um novo filme no BD
    quando o payload informado não é válido
      ✔ retorna um boolean
      ✔ o boolean contém "false"
    quando é inserido com sucesso
      1) retorna um objeto
      2) tal objeto possui o "id" do novo filme inserido
      
      5 passing (4s)
      2 failing
    
// Perceba que o primeiro teste rodou com sucesso, a validação é realizada totalmente na camada de service. Porém, o segundo teste, como depende da camada de Model para funcionar, conforme esperado, o teste não concluiu com sucesso.

// Vamos então isolar nosso service, removendo a dependência dele do Model. Para isso, podemos fazer um stub :

// # tests/services/movieServiceCreate.test.js
const sinon = require('sinon');
// const { expect } = require('chai');

const MoviesModel = require('../../models/movieModel');

//  releaseYear: 1999,
//     };
    before(() => {
      const ID_EXAMPLE = '604cb554311d68f491ba5781';
      sinon.stub(MoviesModel, 'create')
        .resolves({ id: ID_EXAMPLE });
    });
    // Restauraremos a função `create` original após os testes.
    after(() => {
      MoviesModel.create.restore();
    });
//     it('retorna um objeto', async () => {

// Agora vamos executar nosso teste novamente:
Insere um novo filme no BD
    quando é inserido com sucesso
      ✔ retorna um objeto
      ✔ tal objeto possui o "id" do novo filme inserido
      ✔ deve existir um filme com o título cadastrado!

  Insere um novo filme no BD
    quando o payload informado não é válido
      ✔ retorna um boolean
      ✔ o boolean contém "false"
    quando é inserido com sucesso
      ✔ retorna um objeto
      ✔ tal objeto possui o "id" do novo filme inserido

  7 passing (279ms)

// ### Controllers e testes
// - Essa camada recebe as requisições dos clientes, preparando o input e o output da pessoa usuária de acordo com sua comunicação com a camada de Service.

// Dessa forma, nos testes devemos contemplar qual a resposta para o cliente apropriado em cada cenário, qual o status e o body em cada resposta:
// Ao chamar o método create do controller movieController esperamos:

// #1 Quando o payload informado não é válido:
// - Retornar o código de status 400 - Bad Request ;
// - Retornar a mensagem Dados inválidos .

// #2 Quando o payload informado é válido:
// - Retornar o código de status 201 - Created ;
// - Retornar a mensagem Filme criado com sucesso! .

// Percebam que os testes do controller tem uma particularidade em sua implementação. Isso acontece porque diferente das outras camadas, o controller não possui funções simples que retornam um resultado qualquer, mas sim middlewares que funcionam a partir dos objetos req , res , next e error .

// Dessa forma, para conseguirmos testar, precisaremos passar um input a partir do req e validar o output a partir do res , validando se os devidos métodos foram chamados e com os parâmetros esperados.
// Para nos ajudar com essa tarefa iremos utilizar recursos do sinon , observe como ira ficar no teste do movieController

// tests/controllers/movieControllerCreate.test.js
const sinon = require('sinon');
const { expect } = require('chai');

const MoviesController = {
  create: () => {}
};

describe('Ao chamar o controller de create', () => {
  describe('quando o payload informado não é válido', () => {
    const response = {};
    const request = {};
    before(() => {
      request.body = {};
      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();
    })
    it('é chamado o status com o código 400', async () => {
      await MoviesController.create(request, response);
      expect(response.status.calledWith(400)).to.be.equal(true);
    });
    it('é chamado o json com a mensagem "Dados inválidos"', async () => {
      await MoviesController.create(request, response);
      expect(response.json.calledWith({ message: 'Dados inválidos' })).to.be.equal(true);
    });
  });

  describe('quando é inserido com sucesso', () => {
    const response = {};
    const request = {};
    before(() => {
      request.body = {
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };
      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();
    })
    it('é chamado o status com o código 201', async () => {
      await MoviesController.create(request, response);
      expect(response.status.calledWith(201)).to.be.equal(true);
    });
    it('é chamado o json com a mensagem "Filme criado com sucesso!"', async () => {
      await MoviesController.create(request, response);
      expect(response.json.calledWith({ message: 'Filme criado com sucesso!' })).to.be.equal(true);
    });

  });
});
// Criamos stubs específicos para simular funções de resposta ( response ), dessa forma conseguimos utilizar o método calledWith fornecido pelo Sinon para testarmos se a função foi chamada com os parâmetros esperados.

// Por exemplo, no trecho de código abaixo, validamos se o método res.status (ou response.status ) foi chamado passando o status code 400 . Lembre-se que é dessa forma que nossa API responde à requisição da pessoa usuária, utilizando API's REST com frameworks de middleware, como o express .
expect(response.status.calledWith(400)).to.be.equal(true);

// Ao rodar os testes com NAME=movieControllerCreate npm test , eles deverão quebrar. Por tanto, vamos à implementação da nossa camada. Podemos fazê-la da seguinte maneira:

// # controllers/movieController.js
const MoviesService = require('../services/movieService');

const create = async (req, res) => {
  const { title, directedBy, releaseYear } = req.body;
  const movie = await MoviesService
  .create({ title, directedBy, releaseYear });
  if (!movie) {
    return res
      .status(400)
      .json({ message: 'Dados inválidos' });
  }
  /*
    Perceba que `middlewares`, ao invés de executar um `return` padrão,
    como outras funções, vão, na maior parte das vezes, devolver as
    funções passadas por parâmetro, através dos objetos `req, res, next`.
    No nosso caso, estamos utilizando os métodos `status()` e `send()`,
    de `res` (response) para escrever/devolver um valor para a
    requisição daquele `end-point`.
  */
  res
    .status(201)
    .json({ message: 'Filme criado com sucesso!' });
};
module.exports = {
  create,
};
// Feito isso, vamos para o passo de refatoração ( refactor ), ajustando os testes para receberem nossa implementação e também isolar nosso controller das demais camadas:

// # tests/controllers/movieControllerCreate.test.js

// const { expect } = require('chai');
const MoviesService = require('../../services/movieService');
const MoviesController = require('../../controllers/movieController');
// describe('Ao chamar o controller de create', () => {

 /*
        Perceba que nosso stub também simula os comportamentos do `service`,
        dessa forma, conseguimos testar o comportamento do controller de
        maneira isolada.

        Aqui, todos os testes que requisitarem o serviço, devem receber
        retorno `false`.
      */
        sinon.stub(MoviesService, 'create')
        .resolves(false);
//   });

    /* Restauraremos a função `create` original após os testes. */
    after(() => {
      MoviesService.create.restore();
    });

//     it('é chamado o status com o código 400', async () => {

//  .returns();

  /*
    Aqui, todos os testes que requisitarem o serviço, devem receber
    retorno `true`.
  */
     sinon.stub(MoviesService, 'create')
       .resolves(true);
//     })

/* Restauraremos a função `create` original após os testes. */
after(() => {
  MoviesService.create.restore();
});

//     it('é chamado o status com o código 201', async () => {

// Ao rodar nossos testes com NAME=movieControllerCreate npm test teremos o seguinte resultado:
Ao chamar o controller de create
    quando o payload informado não é válido
      ✔ é chamado o status com o código 400
      ✔ é chamado o json com a mensagem "Dados inválidos"
    quando é inserido com sucesso
      ✔ é chamado o status com o código 201
      ✔ é chamado o json com a mensagem "Filme criado com sucesso!"
  Insere um novo filme no BD
    quando é inserido com sucesso
      ✔ retorna um objeto
      ✔ tal objeto possui o "id" do novo filme inserido
      ✔ deve existir um filme com o título cadastrado!
  Insere um novo filme no BD
    quando o payload informado não é válido
      ✔ retorna um boolean
      ✔ o boolean contém "false"
    quando é inserido com sucesso
      ✔ retorna um objeto
      ✔ tal objeto possui o "id" do novo filme inserido

  11 passing (267ms)

// ### Rodando nosso código!
// - Para finalizarmos, basta criarmos nosso arquivo index.js com a implementação dos nossos endpoints REST, utilizando express e chamando nosso controller.

// # index.js
const express = require('express');
const bodyParser = require('body-parser');

const MovieController = require('./controllers/movieController');
const app = express();
app.use(bodyParser.json());
app.post('/movies', MovieController.create);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
// Só precisamos garantir agora que temos um serviço do MongoDB acessível, conforme configuramos na camada de model ( models/connection.js ) e nossa aplicação está pronta para rodar!

// Lembre-se que em nossos testes, isolamos a conexão com o MongoDB usando um server em memória, por isso não foi necessário configurarmos um server MongoDB anteriormente. Para rodarmos nossa aplicação, precisamos subir o serviço do MongoDB padrão.

// ==============================
// -- > CONTEÚDO do dia - 27.4 -- <---/ FIM -----------------------------------------//
// ==============================
// -- > AULA ao VIVO - 27.4 ----- <---/ INICIO --------------------------------------//
// ==============================

// Testes de unidades \o/

// Oque vai rolar Hoje?
// - Testes no model
// - Testes no service
// - Testes no controller
// - Testes no <3
// - E com o nosso amado TDD

// criação na pasta 'ao-vivo'
// └── controllers
// │   └── movieController.js
// └── models
// │   └── connection.js
// │   └── movieModel.js
// └── services
// │   └── movieService.js
// └── tests
// │   ├── controllers
// │   │   └── movieControllerCreate.test.js
// │   │   └── movieControllerGetAll.test.js
// │   │   └── movieControllerGetById.test.js
// │   └── models
// │   │   └── movieModelCreate.test.js
// │   │   └── movieModelGetAll.test.js
// │   │   └── movieModelGetById.test.js
// │   ├── services
// │   │   └── movieServiceCreate.test.js
// │   │   └── movieServiceGetAll.test.js
// │   │   └── movieServiceGetById.test.js
// └── index.js

// Instalações:
// $ npm init -y
// $ npm install express body-parser mongodb
// $ npm install -D mocha chai sinon
// # npm install -D mongodb-memory-server@6
// script de teste no package.json
...
  "scripts": {
    "test": "mocha ./tests/**/*$NAME*.test.js --exit"
  },
...

// ==============================
// -- > AULA ao VIVO - 27.4 ----- <---/ FIM -----------------------------------------//
// ==============================
// -- > EXERCÍCIO do dia - 27.4 -- <---/ INICIO --------------------------------------//
// ==============================


// └── controllers
// │   └── movieController.js
// └── models
// │   └── connection.js
// │   └── movieModel.js
// └── services
// │   └── movieService.js
// └── tests
// │   ├── controllers
// │   │   └── movieControllerCreate.test.js
// │   │   └── movieControllerGetAll.test.js
// │   │   └── movieControllerGetById.test.js
// │   └── models
// │   │   └── movieModelCreate.test.js
// │   │   └── movieModelGetAll.test.js
// │   │   └── movieModelGetById.test.js
// │   ├── services
// │   │   └── movieServiceCreate.test.js
// │   │   └── movieServiceGetAll.test.js
// │   │   └── movieServiceGetById.test.js
// └── index.js

// ==============================
// -- > EXERCÍCIO do dia - 27.4 -- <---/ FIM -----------------------------------------//
// ============================== Arquitetura de Software - Testando as Camadas
// ...
