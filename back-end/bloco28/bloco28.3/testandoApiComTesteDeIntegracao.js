// ============================== NodeJS - Testando APIs com Testes de Integração
// -- > CONTEÚDO do dia - 28.3 -- <---/ INICIO --------------------------------------//
// ==============================

// # Testes de Integração (Integration Tests)
// # Contratos
// # Escrevendo testes
// # Pensando testes para outros contextos
// # Cobertura de testes



// >>> Conteúdo

// ### Testes de Integração (Integration Tests)
// - ao utilizarmos o padrão MSC podemos definir cada camada como sendo uma unidade:

// MSC
controllers →» services →» models →» DB

// Os testes de integração, ou integration tests, servem para verificar se a comunicação entre os componentes de um sistema estão ocorrendo conforme o esperado.

// Nossa integração partirá do recebimento do objeto da requisição (request), seguindo com o controlador (controller), o serviço (service) e terminando no modelo (model).
// Iremos apenas isolar a comunicação do model com o Banco de dados para evitarmos operações de IO. Podemos representar isso da seguinte maneira:

// Teste de Integração
controllers →» services →» models

// ### Contratos
// - Sempre quando consumimos ou fornecemos um serviço, como uma API REST, precisamos ter os comportamentos pré definidos. Esses comportamentos são definidos de acordo com as regras de entrada e saída de dados da API.

// Por exemplo, ao chamar um endpoint GET /users/:userId passamos um ID de usuário e esperamos receber os dados referentes aquele usuário com um código http 200 - OK. Caso o usuário não seja encontrado, esperamos receber um status http 404 - Not Found, por exemplo.

// Em testes, esse conceito é chamado de 'contratos'.

// o endpoint GET /users/:userId.
// Podemos dizer que o contrato dele é, quando a pessoa usuária existe, retornar a seguinte resposta:
Código HTTP: 200 - OK ;
Body:
{
  "id": "123",
  "name": "jane",
  "fullName": "Jane Doe",
  "email": "janedoe@trybemail.com"
}

// ### Escrevendo testes

// # Baixando o repositório base
git clone git@github.com:tryber/nodejs-jwt-base-project.git
// O gabarito do dia está disponível 
https://github.com/tryber/nodejs-jwt-base-project/tree/block-28-3
// na branch para block-28-3

// ╰ git clone git@github.com:tryber/nodejs-jwt-base-project.git
// ╰ cd nodejs-jwt-base-project
// ╰ npm i -D mocha chai sinon
// ╰ npm run dev
// # utilizaremos uma instância do nosso banco de dados em memória.
// ╰ npm install -D mongodb-memory-server@6
// package.json :
...
"scripts": {
  ...
  "test": "mocha ./tests/**/*$NAME*.test.js --exit",
},
...

// # Preparando o ambiente

// modifique a estrutura do arquivo baixado, e coloque no seguinte formato;
├── README.md
├── assets
├── src
│   ├── api
│   │   ├── routes.js
│   │   └── server.js
│   ├── controllers
│   │   ├── createUser.js
│   │   ├── login.js
│   │   └── posts.js
│   └── models
│       ├── connection.js
│       └── user.js
└── tests
├── package-lock.json
└── package.json

// # Escrevendo um teste base

// Conforme definido, ao criar um usuário com sucesso o endpoint deverá responder:
// - com o status http 201 - OK ;
// - com um objeto JSON , contendo a propriedade message com o valor "Novo usuário criado com sucesso" .
// Essa definição é o contrato da nossa API.

// tests/createUsers.test.js
const chai = require('chai');
const { expect } = chai;

describe('POST /api/users', () => {
  describe('quando é criado com sucesso', () => {
    let response = {};
    it('retorna o código de status 201', () => {
      expect(response).to.have.status(201);
    });
    it('retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });
    it('o objeto possui a propriedade "message"', () => {
      expect(response.body).to.have.property('message');
    });
    it('a propriedade "message" possui o texto "Novo usuário criado com sucesso"',
      () => {
        expect(response.body.message)
          .to.be.equal('Novo usuário criado com sucesso');
      });
  });
});

// # Testando nossa API
// - queremos testar que dado um valor de entrada, o mesmo será processado pelas diversas partes da API, então, nos dar um retorno conforme estabelecido pelo nosso "contrato".

// utilizaremos o plugin Chai HTTP com esse plugin poderemos simular uma request a nossa API.
// ╰ npm install -D chai-http

// E então no nosso teste iremos adicionar a instância do chai:

// const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

// const { expect } = chai

// ...

// Adicionado o plugin ao chai, poderemos consumir nosso server em express através dele, sem que haja a necessidade de subirmos a api manualmente.

// boa prática para a arquitetura da API, é fazer a separação do conjunto da definição das rotas e regras de middlewares (Em um arquivo app.js, por exemplo. Que vai ser consumido pelo chaiHttp), do servidor propriamente dito, que consome essas regras (Esse continuaria em server.js, para utilizarmos em contextos de não-teste):
// ./src/api/app.js
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const apiRoutes = express.Router();
apiRoutes.get('/api/posts', routes.getPosts);
apiRoutes.post('/api/users', routes.createUsers);
apiRoutes.post('/api/login', routes.login);

app.use(apiRoutes);
/*
    Detalhe para a exportação do `app`, já que
    precisaremos dele nos testes com `chaiHttp`
*/
module.exports = app;

// ./src/api/server.js
const PORT = process.env.PORT || 8080;
const app = require('./app');

app.listen(PORT, () => console.log(`Conectado na porta ${PORT}`));

// podemos testar nossos end-points utilizando a referência deles contida em ./src/api/app.js
// voltando em createUsers.test.js

// const chai = require('chai');
// const chaiHttp = require('chai-http');
const server = require('../src/api/app');

// chai.use(chaiHttp);
// const { expect } = chai;
// describe('POST /api/users', () => {
//   describe('quando é criado com sucesso', () => {
//      let response = {};
        before(async () => {
          response = await chai.request(server);
        });
//  });
//});

// Após chamarmos o método request passando o nosso server, podemos chamar diretamente nossos end-points, simulando chamadas HTTP.

// Dessa forma, o plugin nos ajudará a consumir nossa API em nossos testes de maneira muito simples, veja como ficará nosso teste após o refactor completo:

// só queremos testar até nosso model, sem deixar que nossa aplicação de fato vá até o banco de dados, isolando o IO.

// # Nosso teste ficará assim:

// const chai = require('chai');
// const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');
// const server = require('../src/api/app');
// chai.use(chaiHttp);
// const { expect } = chai;
// describe('POST /api/users', () => {
//    describe('quando é criado com sucesso', () => {
//        let response = {};
        const DBServer = new MongoMemoryServer();
//        before(async () => {
            const URLMock = await DBServer.getUri();
            const connectionMock = await MongoClient.connect(URLMock,
                { useNewUrlParser: true, useUnifiedTopology: true }
            );
            sinon.stub(MongoClient, 'connect')
                .resolves(connectionMock);
//            response = await chai.request(server)
//                .post('/api/users')
//                .send({
//                    username: 'jane',
//                    password: 'senha123'
//                });
//        });
        after(async () => {
            MongoClient.connect.restore();
            await DBServer.stop();
        });
//        it('retorna o código de status 201', () => {
//            expect(response).to.have.status(201);
//        });
//        it('retorna um objeto', () => {
//            expect(response.body).to.be.a('object');
//        });
//        it('o objeto possui a propriedade "message"', () => {
//            expect(response.body).to.have.property('message');
//        });

//        it('a propriedade "message" possui o texto "Novo usuário criado com sucesso"',
//              () => {
//                  expect(response.body.message)
//                      .to.be.equal('Novo usuário criado com sucesso');
//              }
//        );
//    });
//});

// ### Pensando testes para outros contextos

// Se precisasse fazer o teste manualmente, qual seria o meu processo/ "teste de mesa" ?
https://pt.stackoverflow.com/questions/220474/o-que-%C3%A9-um-teste-de-mesa-como-aplic%C3%A1-lo

// Dependendo da resposta, podemos identificar os tipos de teste que precisaremos fazer:
## Exemplo de resposta nesse cenário

Utilizaria o `postman`, onde:
   - Faria um login válido na rota `POST /api/login` pra conseguir um `token`;
   - Aguardaria um status `200 - OK`, acompanhado de um JSON com o `token`;
   - Testaria a rota `GET /api/posts`, passando esse `token` no `header`:
     `authorization`;
   - Aguardaria um status `200 - OK`, acompanhado de um JSON com os `posts`.

  //  ## Analisando linha a linha
  //  Utilizaria o `postman`, onde:
  // <!--
  //     Aqui já notamos que o teste requer uma estrutura que depende de um servidor
  //     rodando. Esse teste, por tanto, leva em consideração a `integração` de outros
  //     elementos, como a definição de um server, rotas e `controllers`;
  // -->
  //  Faria um login válido na rota `POST /api/login`* pra conseguir um `token`**
  // <!--
  //     [*] Se estivéssemos testando isoladamente um `model` que, ao receber os
  //     parâmetros de email e password, pode se comportar de uma forma ou outra,
  //     esse poderia ser um `teste unitário`;
  
  //     [**] Se estivéssemos testando isoladamente o `service` que gera nosso
  //     `token`, ou seja, se estamos testando a capacidade de trabalhar com uma
  //     função (ou `middleware`) que utiliza internamente o método `.sign()` do `jwt`
  //     (que por sua vez, não precisa de um teste unitário por ser uma biblioteca
  //     já testada), para encriptar dados aleatórios ou 'mocks', esse poderia ser um
  //     `teste unitário`.
  
  //     Se estamos no entanto, esperando que com base em um conjunto de dados válidos,
  //     recebamos uma informação específica (através do consumo de uma api), esse é,
  //     muito provavelmente, um `teste de integração`. Isso, porque esse teste precisa
  //     que vários componentes da sua api estejam funcionando corretamente: `server`,
  //     `controller`, `service` e `model`.
  // -->
  //  Aguardaria um status `200 - OK`, acompanhado de um JSON com o `token`;
  // <!--
  //     Se estivermos testando isoladamente um `controller`, podemos assumir que esse
  //     trará um resultado ou outro, o que poderia ser um `teste unitário`.
  
  //     Aqui, porém, esse comportamento pressupõe uma ação anterior, ou seja, ele é
  //     disparado uma vez que a pessoa usuária aciona o login. Sendo parte de um
  //     `teste de integração`, pois pressupõe a etapa anterior e suas dependências.
  // -->
  //  Testaria a rota `GET /api/posts`, passando esse `token` no `header`:
  //  `authorization`;
  // <!--
  //     Como no item nº2, poderíamos separar testes individuais para cada competência
  //     nessa pipeline do express, ou seja, poderíamos ter `testes unitários` para,
  //     por exemplo:
  //         - Middleware: `auth`, que validaria tokens;
  //         - Service: `getUser`, que validaria emails e senhas;
  //         - Model: `findUser`, onde traríamos dados de pessoas usuárias no banco;
  //         - Service: `getAllPosts`, onde testaríamos alguma validação ou regra;
  //         - Model: `findPosts`, onde traríamos dados de posts do banco;
  //         - Controller: `getPosts`, testando dados de retorno;
  
  //     Pensando o todo, esse teste depende dos demais, pois depende do `token` para
  //     funcionar corretamente. Aqui novamente, sendo parte de um `teste de
  //     integração`.
  // -->
  //  Aguardaria um status `200 - OK`, acompanhado de um JSON com os `posts`.
  // <!--
  //     Caso aqui não estejamos testando um `controller`, então esse passo só faria
  //     sentido como uma asserção/afirmação ao final de um `teste de integração`.
  // -->

// ### Cobertura de testes
// relatórios de cobertura. Boa parte das suites de teste das linguagens de programação possui uma forma de gerar um relatório desse tipo, no caso do NodeJS, conseguimos gerar esses relatórios, tanto para os testes feitos no jest quanto no mocha (utilizando uma ferramenta chamada 'nyc').
https://github.com/istanbuljs/nyc

// Esses relatórios checam, se para um escopo de arquivos definidos (aqui podemos pensar o conteúdo da nossa aplicação, excluindo bibliotecas e arquivos de configuração), os seus testes são capazes de rodar todas as linhas dos arquivos relacionados, o que gera uma porcentagem total de cobertura para aquele escopo.

// # Critérios relevantes
// - suites de testes geram relatórios de cobertura segundo alguns critérios básicos, os mais relevantes para nosso contexto são:
https://en.wikipedia.org/wiki/Code_coverage#Basic_coverage_criteria

// - Cobertura de Funções / Function Coverage: Cada função/sub-rotina do script foi acionado/chamado?
// - Cobertura de Afirmações / Statement Coverage : Cada afirmação/definição/comando do script foi executado?
// - Cobertura de Ramificações / Branch Coverage : Cada situação de ramificação do código (aqui podemos assumir um script condicional, como um if { /*situação A*/ } else { /*situação B*/ } ) foi executada?

// No nosso contexto, ambas ferramentas (jest e nyc) vão utilizar relatórios do Instanbul
https://istanbul.js.org/
// por tanto em uma situação de exemplo, um relatório gerado em uma das nossas ferramentas, deve retornar uma tabela semelhante a essa:

// - File (Arquivo): Retorna a estrutura do escopo analisado, cada linha é referente a pasta ou arquivo específico, no nosso caso, a cobertura esta analisando todos arquivos *.js contidos em ./src , que fica na raiz do projeto;
// - Stmts (Statements/Afirmações): Retorna os percentuais da cobertura de afirmações executadas que citamos anteriormente, no nosso caso, é possível assumir que o arquivo middlewares/invert.middleware.js não executou todas as suas definições/afirmações . Note ainda, que em Uncovered Line #s (Linhas não-cobertas) , o relatório identifica quais as linhas do arquivo não foram executadas, no nosso caso, as linhas de 4 a 6 não foram executadas em nenhum momento quando esse arquivo foi referenciado nos nossos testes (via require() , ou via parâmetro de configuração, o que veremos mais a frente);
// - Branch (Ramo): Retorna o percentual de situações de ramificação cobertos . Se observarmos no arquivo logger.js , existe um percentual de 50% de situações não-cobertas (ou seja, situações que não foram testadas em nenhum momento), o relatório ainda aponta a linha 13 como a linha não-coberta, aqui podemos assumir que essa linha faz parte do resultado de um script condicional (como um if{}else ). Se no arquivo não houverem situações de ramificação, o retorno é 100% .

// - Detalhe , o relatório vai considerar uma branch , mesmo que não haja nenhuma situação de else para ela, ex:
const debug = true;
module.exports = (req, res, next) => {
  if(debug){
    res.on('finish', () => {
      console.log({
        method: req.method,
        endPoint: req.originalUrl,
        status: res.statusCode
      })
    });
  }
  /*
    No caso desse `if`, não existe cobertura pra uma situação onde `debug`
    é falso, então, ainda que um teste cubra 100% desse código, o retorno
    em `% Branch` para esse arquivo, será 50%;
  */
  next();
}

// - Funcs (Functions/Funções): Retorna o percentual de funções executadas nos arquivos. Em middlewares/invert.middleware.js e server.js , podemos assumir que nenhuma das funções desses arquivos foi executada nos nossos testes. Em server.js , ainda, é possível identificar que o arquivo não foi nem mesmo referenciado nos testes, já que nenhuma definição do mesmo foi executada (Coluna % Stmts );
// - Lines (Linhas): Retorna o percentual de linhas executadas nos arquivos, no caso de All files , esse valor representa o total de cobertura da sua suite de testes , que no nosso caso representa 81,08% de cobertura total, dado os problemas apresentados.

// # Como gerar uma cobertura de testes no meu ambiente?
// é possível ainda trazer relatórios em diferentes formatos (como em html, por exemplo).
https://istanbul.js.org/docs/advanced/alternative-reporters/

// # Comando básico
// No jest, utilizamos o parâmetro --coverage (como em jest --coverage), assim, podemos pensar a seguinte configuração de scripts no package.json:
...
"scripts": {
  ...
  "test": "jest ./tests",
  "test:coverage": "npm test -- --coverage",
  ...
},
...
// Dessa forma, conseguimos ter um script próprio para gerar esse relatório, que rodamos com npm run test:coverage.

// No mocha, antes, temos que instalar a biblioteca nyc (que é a cli - interface de linha de comando, do Instanbul):
npm i -D nyc

// a utilização também é bastante simples, utilizaremos o nyc, passando como parâmetro o comando que utilizaremos para os testes em mocha, exemplo: nyc mocha ./tests --recursive . Dessa forma, conseguimos fazer uma configuração de scripts similar ao do jest 
...
"scripts": {
  ...
  "test": "mocha ./tests --recursive",
  "test:coverage": "nyc npm test",
  ...
},
...

// # Personalizando o escopo de cobertura
// Por padrão, os reporters vão fazer a cobertura dos arquivos que são referenciados nos seus testes. Para trazer a porcentagem de cobertura dentro de um escopo fixo você pode:

// # No jest:
// Utilizando um arquivo de configuração jest.config.js
https://jestjs.io/pt-BR/docs/configuration
// (que deve ser referenciado via cli com o parâmetro --config=<seuArquivoDeConfig>).
https://jestjs.io/pt-BR/docs/cli#--configpath
// Esse arquivo pode receber uma propriedade collectCoverageFrom, contendo o padrão a ser respeitado;
https://jestjs.io/pt-BR/docs/configuration#collectcoveragefrom-array

// Utilizando o mesmo comando, via cli: --collectCoverageFrom, da seguinte forma:
...
"scripts": {
  ...
  "test": "jest ./tests",
  "test:coverage": "npm test -- --coverage--collectCoverageFrom='src/**/*.js'",
  ...
},
...

// # No nyc
// - Utilizando um arquivo de configuração nyc.config.js na raiz do projeto.
https://github.com/istanbuljs/nyc#configuration-files
// Esse arquivo pode receber uma propriedade include , contendo o padrão a ser respeitado;
https://github.com/istanbuljs/nyc#common-configuration-options

// Utilizando o mesmo comando, via cli: --include , da seguinte forma:
...
"scripts": {
  ...
  "test": "mocha ./tests --recursive",
  "test:coverage": "nyc --include='src/**/*.js' npm run test",
  ...
},
...

// - É possível ainda, via cli, utilizar o parâmetro '--all' para coletar a cobertura de todos os arquivos (mesmo os que não tem referência nos testes).

// Notem aqui, que estamos colocando nosso código fonte dentro de uma pasta ./src , para que não seja necessário criar uma lista de exclusão de cobertura (para pasta node_modules ou a própria pasta tests), nesse sentido, também é importante manter a pasta tests na raiz, pelo mesmo motivo;

// # Rodando um teste de cobertura no projeto atual
// - basta adicionar um script no nosso package.json contendo o escopo de cobertura:
...
"scripts": {
  ...
  "test": "mocha ./tests/**/*$NAME*.test.js --exit",
  "test:coverage": "nyc --include='src/**/*.js' npm run test",
  ...
},
...

// Após isso, basta rodar o comando 
npm run test:coverage

// ==============================
// -- > CONTEÚDO do dia - 28.3 -- <---/ FIM -----------------------------------------//
// ==============================
// -- > AULA ao VIVO - 28.3 ----- <---/ INICIO --------------------------------------//
// ==============================


// ==============================
// -- > AULA ao VIVO - 28.3 ----- <---/ FIM -----------------------------------------//
// ==============================
// -- > EXERCÍCIO do dia - 28.3 -- <---/ INICIO --------------------------------------//
// ==============================

// # Agora, a prática


// # Recursos adicionais

// Documentação

// ==============================
// -- > EXERCÍCIO do dia - 28.3 -- <---/ FIM -----------------------------------------//
// ============================== NodeJS - Testando APIs com Testes de Integração
// ...
