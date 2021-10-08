// ============================== NodeJS - Interface da aplicação com o banco de dados
// -- > CONTEÚDO do dia - bloco29-new.2 -- <---/ INICIO --------------------------------------//
// ==============================

// ### Mapeamentos
// ### Sequelize
// ### Configurando o Sequelize
// ### Model
// ### Migrações
// ### Seeders
// ### Operações
// ### Boas Práticas
// ### Sequelize do Zero
// ### Testes
// ### Conclusão
// ### Cheat Sheet


// **** Conteúdos

// >>>> Mapeamentos
// - Data Mapper e o Active Record . Ambos os padrões foram definidos por Martin Fowler em seu livro Padrões de Arquitetura de Aplicações Corporativas

// # Data Mapper
// - Nesse padrão, a classe que representa a tabela do banco de dados não deve conhecer os recursos necessários para realizar as transações com o banco de dados:

// # Active Record
// - Diferentemente do anterior, a classe que representa a tabela conhece os recursos necessários para realizar as transações no banco de dados:
// - No Active Record o model está diretamente acoplado ao banco de dados. Dessa forma, o nosso próprio model descreve as operações do banco de dados e tem conhecimento de como salvar os dados, atualizá-los, deletá-los etc.

// # Qual devo usar?
// - A resposta, como sempre, é "depende". O estilo Active Record é mais simples de se implementar, mas o Data Mapper facilita atualizações e mudanças na estrutura do banco de dados.

// >>>> Sequelize
// - segue a linha Active Record, juntamente com uma aplicação simples Node.js . Para banco de dados iremos utilizar o MySQL. Vale ressaltar que a maioria dos métodos fornecidos pelo Sequelize são assíncronos e, portanto, retornam promises . Podemos usar then , catch etc. para tratar os retornos. Ou podemos utilizar, também, async e await .

// boilerplates : trechos de código que podem ser reutilizados em muitos lugares com pouca ou nenhuma alteração.

// - Usando o Sequelize, você pode evitar a criação de queries SQL e utilizar models e migrations para criar as tabelas em vez de um script SQL separado. Com isso, o seu código se torna mais legível , extensível e de fácil manutenção . Além disso, por meio do mapeamento por objetos relacionais ( Active Record ), é possível criar as relações e associações entre as tabelas com o próprio JavaScript. E ainda, é possível migrar seu database para outro banco de dados sem precisar reescrever todo o código (por exemplo: mudar de MySQL para o SQL server).

// # Passos
// - install sequelize
// - init sequelize
// - connect to database
// - seeds <- model -> transactions
// - migrations
// - operators

// >>>> Configurando o Sequelize
// - Instalar Sequelize
// Para começar, vamos iniciar uma aplicação Node.js e instalar o Sequelize:

// └─# mkdir app-with-sequelize && cd app-with-sequelize
// └─# npm init -y
// └─# npm install sequelize

// - O primeiro passo para utilizar o sequelize é instalar um CLI que é responsável por gerar e executar as operações. Além de instalar o CLI, precisamos instalar também o mysql2 , uma dependência necessária para usarmos o MySQL juntamente com o sequelize.

// └─# npm install sequelize-cli
// └─# npm install mysql2

// # Inicializar o Sequelize
// - Depois que instalamos o CLI, precisamos iniciar um projeto com sequelize.

// └─# npx sequelize-cli init

// # Esse comando irá criar as seguintes pastas:
// - config : contém um arquivo de configuração, que "fala" para o CLI como conectar-se com o nosso banco de dados;
// - models : contém todos os modelos da nossa aplicação;
// - migrations : contém todos os arquivos de migração da nossa aplicação;
// - seeders : contém todos os arquivos de "seeds".

// # Conectando ao banco
// - configurar o arquivo "config.json" gerado pelo "init do CLI". Ao alterar esse arquivo, estamos configurando o acesso da aplicação ao nosso banco de dados.

// config/config.json
{
  "development": {
    "username": "root",
    "password": "",
    "database": "orm_example",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
  // ...
}

// # Vamos entender melhor as informações que estamos passando:
// - Usuário de acesso ao banco de dados;
// - Senha de acesso ao banco de dados;
// - Nome do banco de dados no qual queremos conectar;
// - Host que estamos conectando - por ser local, utilizamos o 127.0.0.1 ;
// - Dialect é, o banco que estamos utilizando. "mysql".

// # Criando o banco usando o CLI do Sequelize
// - Agora que iniciamos uma aplicação do sequelize, podemos criar o banco de dados orm_example que nomeamos no arquivo config.json

// └─# npx sequelize db:create
// # resultado: 
// └─# mysql -u root -p    

// Digite a sua senha de acesso ao mysql e em seguida rode o comando:
// └─# show databases 

// Curiosidade : Hoje o Sequelize suporta os bancos MySQL , MariaDB , PostgreSQL , SQLite e Microsoft SQL Server .

// >>>> Model
// - dentro da pasta models criada, existe um arquivo index.js . Este arquivo é gerado automaticamente pelo sequelize e possui um papel muito importante: estabelecer uma instância de conexão entre os arquivos presentes na pasta model e o banco de dados relacional utilizado.

// Um model é uma abstração que representa uma linha na tabela em seu banco de dados e diz ao Sequelize várias coisas sobre essa entidade, como o nome da tabela no banco de dados e quais colunas ela possui (e seus tipos de dados). O model pode ser definido de duas formas:

// - Chamando pela função sequelize.define(modelName, attributes, options)
// - Estendendo Model como uma classe e chamando init(attributes, options)

// # Para criar um model, usamos o seguinte comando no CLI ( não execute o comando abaixo, ele é apenas um template de como criar um model ):
npx sequelize model:generate --name NomeDoModel --attributes nomeDoAtributo:string

// passamos dois parâmetros para o comando:

// - O parâmetro --name se refere ao nome da tabela, mas no singular, pois se refere a uma unidade dos dados, como uma linha no banco ou um objeto no seu código javascript;
// - O parâmetro --attributes se refere ao nome das colunas e os tipos de dados que ela contém. Não é preciso definir todas as colunas neste comando, é possível adicioná-las direto no arquivo model.js gerado e na migration equivalente a este model.

// exemplo para ficar mais evidente. Queremos criar uma tabela Users , que contém dados de vários usuários . O que fazemos primeiro é gerar um model que irá representar uma Instância de usuário , ou uma linha na tabela Users no nosso banco (lembre-se, vamos ver a tabela sendo criada no próximo tópico).
npx sequelize model:generate --name User --attributes fullName:string

// Depois de rodar este comando, perceba que foi criado um arquivo user.js na pasta model, e na pasta migration foi criado o arquivo 20210310124202-create-user.js

// perceba que o seguinte código está presente:
// models/user.js
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    fullName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
// então substitua este código pelo seguinte:
// models/user.js
const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  return User;
};

module.exports = User;

// Perceba que adicionamos uma nova coluna email no nosso model.

// Nosso model está criado ! Agora vamos passar para o próximo passo, as Migrations .

// >>>> Migrações
// - é uma forma de versionar o schema do banco de dados, ou seja, cada migration conterá um pedaço de código que representa, no conjunto, todas as alterações feitas no histórico do nosso banco de dados.

// toda migration, além de saber o que fazer para executar as mudanças no banco de dados ( Up ), também deve saber como reverter essas mudanças ( Down ). Isso significa que as migrations têm o poder de avançar ou reverter o seu banco de dados para qualquer um dos estados que ele já teve.

// O conteúdo do arquivo deve ser parecido com isso:y
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};

// Iremos mexer apenas dentro das funções "up" e "down" , como dito anteriormente. Reparem que ambas as funções recebem dois parâmetros: um é o "queryInterface" , e o outro é o "Sequelize" . Ambos os parâmetros são objetos que armazenam dados e operações. O "queryInterface" é usado pelo sequelize para modificar o banco de dados, seguindo o "dialeto" do banco que estamos utilizando. O objeto "Sequelize" armazena os tipos de dados disponíveis no contexto do banco, por exemplo varchar , string , integer , date etc.

// os campos id , fullName , createdAt e updatedAt já foram adicionados na migration pelo próprio Sequelize

// vamos adicionar uma coluna de email na migration da tabela Users
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      // adicionamos um novo campo 'email' como foi feito no model !
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};

// Com a migration criada, basta executarmos pelo CLI:
npx sequelize db:migrate
// Caso queira reverter uma migration:
npx sequelize db:migrate:undo

// # Criando uma nova migration para alterar uma tabela já existente

// Se você quiser criar uma outra migration para adicionar a coluna phone na sua tabela Users , você pode criar um novo arquivo com o comando:
npx sequelize migration:generate --name add-column-phone-table-users

// Um novo arquivo XXXXXXXXXXXXXX-add-column-phone-table-users.js será criado na pasta migration contendo o seguinte código:
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

// Esse código representa o esqueleto da migration que foi criada. Assim Podemos inserir a função queryInterface.addColumn() no escopo Up par adicionar uma nova coluna a nossa tabela Users , e adicionar a função queryInterface.removeColumn() no escopo Down para remover a nova coluna da tabela.
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.addColumn('Users', 'phone_num', {
     type: Sequelize.STRING,
   });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'phone_num');
  }
};

// Em seguida rodamos o comando para executar a nossa nova migration:
npx sequelize db:migrate

// E alteramos o model user.js para incluir a nova coluna phone :
const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
  fullName: DataTypes.STRING,
  email: DataTypes.STRING,
  // aqui inserimos o datatype da coluna criada
  phone_num: DataTypes.STRING,
  });

  return User;
}

// E pronto! Conseguimos criar uma migration para adição da coluna phone na tabela Users . Desta maneira, se outra pessoa for alterar este projeto em outro computador, ela pode executar as migrations e atualizar o banco de dados local com as modificações feitas por você!

// >>>> Seeders
// - seeder é usado para, basicamente, alimentar o banco de dados com informações necessárias para o funcionamento mínimo da aplicação.

// Os seeds seguem a mesma linha das migrations.
// Primeiramente vamos precisar executar pelo CLI a criação de um novo seed:
npx sequelize seed:generate --name users

// Reparem que o arquivo foi criado dentro da pasta seeders com o mesmo formato de um arquivo de uma migration. 

// Agora, devemos adicionar, ao arquivo criado, quais informações aquele seed irá gerar.

// seeders/[timestamp]-users.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
    [
      {
        fullName: 'Leonardo',
        email: 'leo@test.com',
        // usamos a função CURRENT_TIMESTAMP do SQL para salvar a data e hora atual nos campos `createdAt` e `updatedAt`
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        fullName: 'JEduardo',
        email: 'edu@test.com',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};

// Dessa forma conseguimos inserir os dados que queremos. Estamos adicionando os dados, que estão na estrutura de uma array de objetos, na tabela Users . O queryInterface tem a função bulkInsert , a qual estamos utilizando, que insere múltiplos dados na tabela.

// Para executar o seed,
npx sequelize db:seed:all
// para reverter:
npx sequelize db:seed:undo:all

// >>>> Operações
// - Com o model implementado, caso precisemos gravar/ler algum dado do banco de dados, conseguimos faze-lo também. Caso precisemos buscar todas as pessoas usuárias, por exemplo

// controllers/userController.js
const express = require('express');
const { User } = require('../models');
const router = express.Router();

// Este endpoint usa o método findAll do Sequelize para retorno todos os users.
router.get('/', async (_req, res) => {
  try {
    const users = await User.findAll();

    return res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

// ...

module.exports = router;

// estamos importando o modelo que criamos do arquivo index.js da pasta models, e não diretamente do arquivo User.js . Quando executamos o comando npx sequelize init , o arquivo index.js é gerado dentro da pasta models.

// O código desse arquivo index.js é responsável por, basicamente, realizar a conexão com o banco de dados, através do arquivo config.json , coletar todos os modelos definidos dentro da pasta models e, caso necessário, associar um modelo a algum outro.

// controllers/userController.js
const express = require('express');
const { User } = require('../models');
const router = express.Router();

// ...

// Este endpoint usa o método findByPk do Sequelize para buscar um usuário pelo id.
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

// Este endpoint usa o método findOne do Sequelize para buscar um usuário pelo id e email.
// URL a ser utilizada para o exemplo http://localhost:3000/user/search/1?email=aqui-o-email
router.get('/search/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.query;
    const user = await User.findOne({ where: { id, email }});

    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

// Este endpoint usa o método create do Sequelize para salvar um usuário no banco.
router.post('/', async (req, res) => {
  try {
    const { fullName, email } = req.body;
    const newUser = await User.create({ fullName, email });

    return res.status(201).json(newUser);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

// Este endpoint usa o método update do Sequelize para alterar um usuário no banco.
router.put('/:id', async (req, res) => {
  try {
    const { fullName, email } = req.body;
    const { id } = req.params;

    const [updateUser] = await User.update(
      { fullName, email },
      { where: { id } },
    );

    console.log(updateUser); // confira o que é retornado quando o user com o id é ou não encontrado;

    if(!updateUser) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json({ message: 'Usuário atualizado com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

// Este endpoint usa o método destroy do Sequelize para remover um usuário no banco.
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await User.destroy(
      { where: { id } },
    );

    console.log(deleteUser) // confira o que é retornado quando o user com o id é ou não encontrado;

    return res.status(200).json({ message: 'Usuário excluído com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

module.exports = router;

// Por último, crie um arquivo index.js 

// index.js
const express = require('express');
const bodyParser = require("body-parser");

const userController = require('./controllers/userController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/user', userController);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));

// >>>> Boas Práticas
// - Como vocês já sabem, uma ótima prática é usar variáveis de ambiente para controlar coisas relacionadas à configuração geral da aplicação.

// Iremos fazer a instalação do pacote dotenv :
npm install dotenv
// Mudaremos o nome do nosso arquivo config.json para:
config.js
// Retiraremos todo o conteúdo de config.js e substituiremos por:
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
};

// como estamos em um exercício de desenvolvimento, estamos assumindo que os três ambientes vão utilizar o banco de dados local do seu computador; Em aplicações mais complexas, no entanto, é importante que você utilize bancos de dados e configurações diferentes para cada ambiente.

// Crie o arquivo .env na raiz da sua aplicação e preencha as variáveis com as suas credenciais para acessar o MySQL.
MYSQL_USER=root
MYSQL_PASSWORD=senha_mysql
MYSQL_DATABASE=orm_example
HOSTNAME=localhost

// Modifique a linha 8 do arquivo models/index.js para apontar para o arquivo config.js :
const config = require(__dirname + '/../config/config.json')[env]; // configuração antiga
const config = require(__dirname + '/../config/config.js')[env];   // configuração nova

// >>>> Sequelize do Zero

// └─# mkdir sequelize-do-zero-1 && cd sequelize-do-zero-1
// └─# npm init -y
// └─# touch index.js
const express = require('express');
const app = express();

app.use(express.json());
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo na porta: ${PORT}`);
});

// └─# npm install sequelize
// └─# npm install mysql2
// └─# npm install --save-dev sequelize-cli
// └─# npm install express
// └─# npx sequelize-cli init
// configure o /config/config.json

// └─# npx sequelize migration:generate --name create-stores
// cria o create-stores = /migrations/20211008134615-create-stores.js
// 20211008134615-create-stores.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },
  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

// criamos os componentes da nossa tabela e tambem para reverter
// 20211008134615-create-stores.js
'use strict';

const sequelize = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const StoresTable = queryInterface.createTable('Stores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTERGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING,
      }
    });
    return StoresTable;
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('St');
  }
};

// rodar essa aplicação no DB
// └─# npx sequelize db:migrate                                                                            1 ⨯

// cria o seeders
// └─# npx sequelize seed:generate --name stores                                                           1 ⨯
// seeders/20211008145947-stores.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

// criamos os componentes so seeders
// seeders/20211008145947-stores.js
'use strict';

const { query } = require('express');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert("Stores", [
      {
        name: "Magazine",
        description: "Loja que tem eletros",
      },
      {
        name: "Tem de tudo",
        description: "Pode vir que aqui tem tudo",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("stores", null, {});
  },
};

// sobe o seeders
// └─# npx sequelize db:seed:all

// criar model
// models/Store.js
const Store = (sequelize, DataTypes) => {
  const Store = sequelize.define (
    "Store",
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      timestamps: false,
    },
  );
  return Store;
};

module.exports = Store;

// acrescenta a chamada no index principal para vizualizar o retorno
// index.js
const { Store } = require('./models');

app.get('/', (req, res) => {
  Store.findAll().the(dados => {
    res.status(200).json(dados)
  }).catch(e => {
    console.log(e.message);
    res.status(500).json({message: 'algo deu errado !'})
  })
});

// >>>> Testes
// - Para testarmos os models criados com o Sequelize, seguiremos os mesmos conceitos vistos anteriormente: iremos isolar as operações de IO e utilizaremos bibliotecas específicas para nos ajudar com os stubs e asserções .

// instalar nossas dependências de desenvolvimento
// └─# npm i mocha chai sinon chai-http -D
// alterar a linha abaixo em nosso package.json
"scripts": {
  ...
  "test": "mocha ./tests/**/*$NAME*.test.js --exit"
},
// ./index.js
// const express = require('express');
// const bodyParser = require("body-parser");

// const userController = require('./controllers/userController');

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(bodyParser.json());

// app.use('/user', userController);

// app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));

module.exports = app;
// testar nosso controller de "busca de pessoas usuárias", que consome nosso model:

// tests/integration/controllers/user.test.js
const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { expect } = chai;
const app = require('../../../index');
const { User } = require('../../../models');

describe('Busca todos os usuários', () => {
  describe('quando não existe nenhum usuário cadastrado', () => {
    const findAllStub = stub(User, 'findAll');
    before(() => {
      findAllStub.resolves([]);
    });
    after(() => {
      findAllStub.restore();
    });
    it('called User.findAll', async () => {
      await chai.request(app)
        .get('/user');
      expect(User.findAll.calledOnce).to.be.equals(true);
    });
    it('o status é 200', async () => {
      const result = await chai.request(app)
        .get('/user');
      expect(result.status).to.be.equals(200);
    });
    it('a resposta é um array', async () => {
      const result = await chai.request(app)
        .get('/user');
      expect(result.body).to.be.an('array');
    });
    it('o array está vazio', async () => {
      const result = await chai.request(app)
        .get('/user');
      expect(result.body).to.be.empty;
    });
  });
});

// Sequelize Test Helpers . Vamos ver um exemplo de como podemos utilizá-la:
https://www.npmjs.com/package/sequelize-test-helpers

// tests/unit/models/user.test.js
const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const UserModel = require('../../../models/user');

describe('O model de User', () => {
  const User = UserModel(sequelize, dataTypes);
  const user = new User();

  describe('possui o nome "User"', () => {
    checkModelName(User)('User');
  });

  describe('possui as propriedades "fullName" e "email"', () => {
    ['fullName', 'email'].forEach(checkPropertyExists(user));
  });
});

// >>>> Conclusão
// - A ideia de buscar o domínio de cada uma dessas ferramentas pode parecer intimidador agora, mas você praticará isso bastante!

// >>>> Cheat Sheet
// - Aqui neste Repositório , preparamos um Cheat Sheet para que possa te ajudar no setup e na criação dos models, migrations e seeders !
https://github.com/tryber/Trybe-CheatSheets/tree/master/backend/sequelize/setup

// **** Conteúdo Bônus - Padrões de Projeto

// >>>> Nomenclatura
// - No decorrer do conteúdo, pode-se perceber que durante as criação das tabelas (em migrations), as colunas createdAt e updatedAt estão em Camel Case , ou seja, seguem o formato que escrevemos em JavaScript , porém, a nomenclatura utilizada pelo MySQL segue o formato Snake Case , logo teríamos que declarar estas duas colunas no seguinte formato created_at e updated_at

// mas não iremos alterar o nome das nossas chaves, permaneceremos com createdAt e updatedAt

// adicionar o field na nossa declaração, para resolvermos esse impasse.
// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.createTable('Users', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER,
//       },
//       fullName: {
//         type: Sequelize.STRING,
//       },
//       email: {
//         type: Sequelize.STRING,
//       },
//       createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE,
           field: 'created_at', // a coluna será criada no banco com este nome
//       },
//       updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE,
           field: 'updated_at', // a coluna será criada no banco com este nome
//       }
//     });
//   },

//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.dropTable('Users');
//   }
// };

// # seeders/[timestamp]-users.js
module.exports = {
  //   up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
  //     [
  //       {
  //         fullName: 'Leonardo',
  //         email: 'leo@test.com',
             // com a mudança no nome das colunas, precisamos colocar no seed o formato correspondente a este novo nome
             created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
             updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
  //       },
  //       {
  //         fullName: 'JEduardo',
  //         email: 'edu@test.com',
             created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
             updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
  //       },
  //     ], {}),
  
  //   down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
  // };

// Após serem feitas essas mudanças, 2 erros aparecerão:

// - O primeiro erro será de coluna desconhecida relacionada a createdAt , isso ocorre, pelo fato de createdAt e updatedAt serem colunas criadas por padrão, ou seja, a aplicação tentará retornar estas colunas, mas como fizemos a alteração para usar Snake Case , estas colunas não foram criadas, gerando assim o erro. Segue abaixo o erro:
Unknown column 'createdAt' in 'field list'

// O segundo erro será relacionado a tabela não encontrada, quando você fizer uma requisição, o sequelize tentará fazer por padrão uma busca com o database orm_example e a tabela users , perceba que criamos uma tabela Users com U maiúsculo, dessa forma temos um problema na nossa pesquisa. Segue abaixo o erro:
Table 'orm_example.users' doesn't exist

// Para resolvermos estes problemas, iremos acrescentar uma configuração no nosso model:

// - underscored : Este campo nos ajudará a resolver o primeiro problema, ele fará com que parâmetros recebidos em Camel Case , sejam convertidos em Snake Case , quando for feita uma consulta a respectiva tabela.
// - tableName : Este campo nos ajudará a resolver o segundo problema, aqui podemos declarar explicitamente, qual o nome da tabela que estamos referenciando, retirando assim a responsabilidade do Sequelize de nomear a tabela.

// models/user.js
// const User = (sequelize, DataTypes) => {
//   const User = sequelize.define('User', {
//     fullName: DataTypes.STRING,
//     email: DataTypes.STRING,
phoneNum: DataTypes.STRING,
//   },
     {
       underscored: true,
       tableName: 'Users',
     });

//   return User;
// };

// module.exports = User;

// >>>> .sequelizerc
// - É um arquivo de configuração, que podemos utilizar caso desejamos substituir o caminho padrão das pastas migrations , models , seeders ou config

// '.sequelizerc' na raiz da aplicação
const path = require('path');

module.exports = {
  'config': path.resolve('src', 'config', 'config.json'),
  'models-path': path.resolve('src', 'models'),
  'seeders-path': path.resolve('src', 'seeders'),
  'migrations-path': path.resolve('src', 'migrations'),
};

// - path: É um módulo interno do Node que nos fornece alguns utilitários para trabalharmos com caminhos de arquivos e diretórios;
// - config: Caminho para o arquivo de configuração;
// - models-path: Caminho para o diretório de models ;
// - seeders-path: Caminho para o diretório de seeders ;
// - migrations-path: Caminho para o diretório de migrations .

// ==============================
// -- > CONTEÚDO do dia - bloco29-new.2 -- <---/ FIM -----------------------------------------//
// ==============================
// -- > AULA ao VIVO - bloco29-new.2 ----- <---/ INICIO --------------------------------------//
// ==============================


// ==============================
// -- > AULA ao VIVO - bloco29-new.2 ----- <---/ FIM -----------------------------------------//
// ==============================
// -- > EXERCÍCIO do dia - bloco29-new.2 -- <---/ INICIO --------------------------------------//
// ==============================

// # Agora, a prática


// # Recursos adicionais

// Documentação

// ==============================
// -- > EXERCÍCIO do dia - bloco29-new.2 -- <---/ FIM -----------------------------------------//
// ============================== NodeJS - Interface da aplicação com o banco de dados
// ...
