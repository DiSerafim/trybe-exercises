// ============================== NodeJS - ORM - Associations
// -- > CONTEÚDO do dia - bloco29-new.3 -- <---/ INICIO --------------------------------------//
// ==============================

// ### Relacionamentos 1:1
// ### Relacionamentos 1:N
// ### Utilizando os relacionamentos
// ### Eager Loading
// ### Lazy Loading
// ### Relacionamentos N:N
// ### Transações
// ### Testes

/*
  Utilizar o sequelize para criar relacionamentos entre tabelas;
  Utilizar métodos que simulam comandos de integração de tabelas;

  - Uma das principais utilidades de bancos relacionais como o MySQL é a criação de relação entre as tabelas, que aumenta sua performance e organize os dados, além de outros benefícios.
O Sequelize também possui ferramentas para criar, manipular e ler as tabelas e seus relacionamentos
*/

// **** Conteúdos

// >>>> Relacionamentos 1:1
// - 1 para 1

// └─# mkdir relacionamento-1pra1 && cd relacionamento-1pra1
// └─# npm init -y
// └─# npm i express nodemon sequelize mysql2
// └─# npm i sequelize-cli
// └─# npx sequelize-cli init

// realize as configurações necessárias no arquivo config/config.json

// 1 Username da sua instalação do MySQL.
// 2 Senha da sua instalação do MySQL.
// 3 Database , que é o nome do schema que será criado, iremos utilizar associations.
// 4 Host é o IP do seu servidor, iremos manter 127.0.0.1.
// 5 Dialect que é o tipo de banco SQL que será utilizado (exemplos são: MySQL, MariaDB, PostgreSQL e outros).

// Após configurar o seu config.json, precisamos criar o schema que irá conter as nossas tabelas
// - O schema será criado com o nome que digitamos na chave development.database do config.json :

// └─# npx sequelize db:create

// criar a migration que será responsável pela tabela Employees

// └─# npx sequelize migration:generate --name create-employees

// Abra a migration e adicione o código:
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'first_name',
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'last_name',
      },
      age: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('Employees');
  },
};

// criar a migration responsável pela tabela Addresses

// └─# npx sequelize migration:generate --name create-addresses

// Abra a migration e adicione o código:
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      street: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      number: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      employeeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'employee_id',
        references: {
          model: 'Employees',
          key: 'id',
        },
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('Addresses');
  },
};

// # Essas informações informam ao Sequelize que aquele campo deve ser uma foreign key 

// -references.model: Indica qual tabela nossa FK está referenciando.
// -references.key: Indica qual coluna da tabela estrangeira deve ser utilizada para nossa foreign key .
// -onUpdate e onDelete: Configura o que deve acontecer ao atualizar ou excluir um usuário. Nesse caso, todos os produtos daquele usuário serão alterados ou excluídos.

// Essa migration cria uma FK na tabela Addresses , que relaciona o campo employee_id dessa tabela ao campo id da tabela Employees .

// para gerar as migrations:

// └─# npx sequelize db:migrate

// # vamos para os models!

// models/Employee.js
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
    tableName: 'Employees',
    underscored: true,
  });

  Employee.associate = (models) => {
    Employee.hasOne(models.Address,
      { foreignKey: 'employee_id', as: 'addresses' });
  };

  return Employee;
};

// A função Employee.associate = (models) => {} , que criamos é onde iremos declarar as associações daquele model.

// estamos dizendo que a tabela Employees possui um Address, referenciado pela foreign key employee_id , e que o model Employee deve chamar de addresses (note a letra minúscula), como definido na propriedade as .

// Essa função é chamada pelo arquivo models/index.js , criado pelo comando npx sequelize-cli init

// Os métodos de criação de associações que o sequelize disponibiliza são:
// - hasOne
// - belongsTo
// - hasMany
// - belongsToMany

// No caso de relacionamentos 1:1, utilizamos os métodos hasOne e belongsTo.
// - hasOne = tem um
// - belongsTo = pertencente a

// No model Address , por sua vez, temos que fazer o caminho inverso, declarando que o address pertence a Employee

// models/Address.js
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    employeeId: { type: DataTypes.INTEGER, foreignKey: true },
    // A declaração da Foreign Key é opcional no model
  },
  {
    timestamps: false,
    tableName: 'Addresses',
    underscored: true,
  });

  Address.associate = (models) => {
    Address.belongsTo(models.Employee,
      { foreignKey: 'employee_id', as: 'employees' });
  };

  return Address;
};

// # Validando relacionamentos 1:1

// vamos validar o relacionamento, para isso precisaremos criar seeders para inserirmos dados nas tabelas e um servidor para responder as requisições.

// Para criar os dois seeders
// └─# npx sequelize seed:generate --name employees
// └─# npx sequelize seed:generate --name addresses

// Depois, abra o arquivo employees dentro da pasta seeders e copie o código abaixo.
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Employees',
      [
        {
          first_name: 'Marcos',
          last_name: 'Zuck',
          age: 49,
        },
        {
          first_name: 'Fred',
          last_name: 'Mercurio',
          age: 19,
        },
        {
          first_name: 'Ayrton',
          last_name: 'Keno',
          age: 51,
        },
        {
          first_name: 'Robin',
          last_name: 'Mathias',
          age: 63,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Employees', null, {});
  },
};

// Faça o mesmo para o arquivo addresses da pasta seeds :
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Addresses',
      [
        {
          city: 'Belo Horizonte',
          street: 'Rua Flórida',
          number: 1080,
          employee_id: 1,
        },
        {
          city: 'São Paulo',
          street: 'Avenida Paulista',
          number: 1980,
          employee_id: 2,
        },
        {
          city: 'Fortaleza',
          street: 'Rua das Enseadas',
          number: 95,
          employee_id: 3,
        },
        {
          city: 'Belo Horizonte',
          street: 'Rua Andaluzita',
          number: 131,
          employee_id: 4,
        },
        {
          city: 'Curitiba',
          street: 'Rua Fria',
          number: 101,
          employee_id: 4,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Addresses', null, {});
  },
};

// Depois, executar os seeders:

// └─# npx sequelize db:seed:all

// Por último, criar o servidor para testarmos nossas associations 

// index.js
const express = require('express');
const { Address, Employee } = require('./models');

const app = express();

app.get('/employees', async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      include: { model: Address, as: 'addresses' },
    });

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;

// A grande diferença quando vamos fazer uma requisição que necessite da utilização de uma 'association' com o 'Sequelize', é o campo 'include' . Esse campo diz ao 'Sequelize' quais serão as configurações da requisição. A propriedade 'model' se refere a qual tabela será utilizada. Já a propriedade 'as' deve ser igual ao que declaramos no momento da criação da 'associação' no respectivo 'model'.

// Agora inicie o servidor.

// └─# npx nodemon index.js

// Por último, faça uma requisição do tipo GET para o endpoint localhost:3000/employees

// >>>> Relacionamentos 1:N
// Foi refeito os passo a passo de "1 para 1" e dado seguimento na pasta "1 para muitos"

// - Caso cada employee possuísse vários address , bastaria declarar seu model

// models/Employee.js
// module.exports = (sequelize, DataTypes) => {
//   const Employee = sequelize.define('Employee', {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     firstName: DataTypes.STRING,
//     lastName: DataTypes.STRING,
//     age: DataTypes.INTEGER,
//   },
//   {
//     timestamps: false,
//     tableName: 'Employees',
//     underscored: true,
//   });

//   Employee.associate = (models) => {
  Employee.hasMany(models.Address,
    { foreignKey: 'employee_id', as: 'addresses' });
//   };

//   return Employee;
// };

// Mudamos apenas o método de declaração da associação para hasMany

// create-stores
// └─# npx sequelize migration:generate --name create-stores
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const StoresTable = queryInterface.createTable("Stores", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
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
    queryInterface.dropTable("Stores");
  }
};


// create-addresses
// └─# npx sequelize migration:generate --name create-products
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const ProductsTable = queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: { allowNull: false, type: Sequelize.STRING },
      description: { allowNull: false, type: Sequelize.STRING },
      amount: { allowNull: false, type: Sequelize.FLOAT },
      store_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: { model: "Stores", key: "id" },
      },
    });
    return ProductsTable;
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("Products");
  }
};

// └─# npx sequelize db:migrate 

// # vamos para os models!

// models/Products.js
const createProducts = (sequelize, DataTypes) => {
  const Products = sequelize.define(
    "Products", {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      name: DataTypes.STRING,
      description: DataTypes.string,
      amount: DataTypes.Float,
    },
    {
      timestamps: false,
    }
  );
  Products.associate = (models) => {
    Products.belongsTo("Store", { foreignKey: "store_id", as: "store" });
  };
  return Products;
};

module.exports = createProducts;

// models/Stores.js
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
  Store.associate = (models) => {
    Store.hasOne("Product", { foreignKey: "store_id", as: "products" })
  };
  return Store;
};

module.exports = Store;

// Depois, executar os seeders:

// └─# npx sequelize db:seed:all

// Por último, criar o servidor para testarmos nossas associations 

// >>>> Utilizando os relacionamentos
// - Eager loading , ou carregamento antecipado.
// - Lazy loading, ou carregamento tardio.

// Aprender a utilizar cada um desses dois modos e como eles acontecem no código, usando o relacionamento 1:N

// >>>> Eager Loading
// - todas as informações são trazidas, independente se vamos usá-las ou não. Este modo é útil para cenários em que sabemos, já de antemão, que sempre vamos precisar de todos os dados das entidades envolvidas.

// usaremos a pasta 1 pra 1 como modelo

// Abra o arquivo XXXXXXXXXXXXXX-employees.js dentro da pasta seeders e mude para
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Employees',
      [
        { first_name: 'Marcos', last_name: 'Zuck', age: 49 },
        { first_name: 'Fred', last_name: 'Mercurio', age: 19 },
        { first_name: 'Ayrton', last_name: 'Keno', age: 51 },
        { first_name: 'Robin', last_name: 'Mathias', age: 63 },
        { first_name: 'Antonio', last_name: 'Augusto', age: 18 },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Employees', null, {});
  },
};

// abra o arquivo XXXXXXXXXXXXXX-addresses.js dentro da pasta seeders e mude para
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Addresses',
      [
        {
          city: 'Belo Horizonte',
          street: 'Rua Florida',
          number: 1080,
          employee_id: 1,
        },
        {
          city: 'São Paulo',
          street: 'Avenida Paulista',
          number: 1980,
          employee_id: 2,
        },
        {
          city: 'Fortaleza',
          street: 'Rua das Enseadas',
          number: 95,
          employee_id: 3,
        },
        {
          city: 'Belo Horizonte',
          street: 'Rua Andaluzita',
          number: 131,
          employee_id: 4,
        },
        {
          city: 'Belo Horizonte',
          street: 'Rua Vicente Alvarenga',
          number: 80,
          employee_id: 1,
        },
        {
          city: 'Curitiba',
          street: 'Rua Fria',
          number: 101,
          employee_id: 5,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Addresses', null, {});
  },
};

// para remover as tabelas antigas, depois recriá-las e por último, executar as seeders:

// └─# npx sequelize db:migrate:undo:all
// └─# npx sequelize db:migrate         
// └─# npx sequelize db:seed:all

// # Eager loading na prática. Voltaremos no arquivo index.js e criaremos mais uma rota:

// // const express = require('express');
// const { Address, Employee } = require('./models');

// const app = express();

// app.get('/employees', async (_req, res) => {
//   try {
//    const employees = await Employee.findAll({
//      include: { model: Address, as: 'addresses' },
//    });

//     return res.status(200).json(employees);
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Ocorreu um erro' });
//   };
// });

app.get('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findOne({
        where: { id },
        include: [{ model: Address, as: 'addresses' }],
      });

    if (!employee)
      return res.status(404).json({ message: 'Funcionário não encontrado' });

    return res.status(200).json(employee);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

// faça uma requisição do tipo GET para o endpoint http://localhost:3000/employees/1

// o campo include pode manipular os dados que serão retornados. se não quisermos o acesso ao número do endereço, bastaria alterar o código, adicionando a propriedade attributes e dentro dela o que queremos fazer:

// const express = require('express');
// const { Address, Employee } = require('./models');

// const app = express();

// app.get('/employees', async (_req, res) => {
//   try {
//    const employees = await Employee.findAll({
//      include: { model: Address, as: 'addresses' },
//    });

//     return res.status(200).json(employees);
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Ocorreu um erro' });
//   };
// });

// app.get('/employees/:id', async (req, res) =>  {
//   try {
//     const { id } = req.params;
//     const employee = await Employee.findOne({
//         where: { id },
include: [{
  model: Address, as: 'addresses', attributes: { exclude: ['number'] },
}],
//       });

//     if (!employee)
//       return res.status(404).json({ message: 'Funcionário não encontrado' });

//     return res.status(200).json(employee);
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Algo deu errado' });
//   };
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

// Dessa maneira, o campo number será excluído do retorno da requisição.

// >>>> Lazy Loading
// - Esse método consiste, basicamente, em não especificar uma propriedade includes no momento de realizar a query no banco. Dessa forma, cria-se a possibilidade de termos dois usos para o mesmo endpoint.

// Imagine que exista a função getAddress que tem como responsabilidade buscar todos os endereços de acordo com o employee_id .

// const express = require('express');
// const { Address, Employee } = require('./models');

// const app = express();

// app.get('/employees', async (_req, res) => {
//   try {
//    const employees = await Employee.findAll({
//      include: { model: Address, as: 'addresses' },
//    });

//     return res.status(200).json(employees);
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Ocorreu um erro' });
//   };
// });

// app.get('/employees/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
const employee = await Employee.findOne({ where: { id } });

//     if (!employee)
//       return res.status(404).json({ message: 'Funcionário não encontrado' });

       if (req.query.includeAddresses === 'true') {
         const addresses = await Address.findAll({ where: { employeeId: id } });
         return res.status(200).json({ employee, addresses });
       }

//     return res.status(200).json(employee);
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Algo deu errado' });
//   };
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

// Reinicie a aplicação e realiza uma requisição do tipo GET para o endpoint http://localhost:3000/employees/1?includeAddresses=true . Depois, retire o ?includeAddresses=true e veja seu retorno.

// o lazy loading é muito útil em situações em que não sabemos se vamos, de fato, precisar buscar todas as informações de uma só vez. Aqui, se tivéssemos utilizado eager loading , teríamos buscado os dados dos funcionários mesmo quando includeAddresses não era informado, e precisaríamos excluir a chave addresses do resultado do banco caso esse parâmetro não fosse informado. Com o lazy loading , podemos carregar apenas os dados do funcionário, e carregar os dados dos endereços apenas quando necessário, economizando recursos do banco.

// >>>> Relacionamentos N:N
// - Esse tipo de relacionamento pode ser visto também como dois relacionamentos um para muitos (1:N) ligados por uma tabela intermediária, chamada de tabela de junção , ela guarda as informações de como as tabelas se relacionam entre si.

// Users ,
// Books,
// UserBooks. 

// A tabela "UserBooks" possui um relacionamento N:N com as demais tabelas.

// - A tabela Users guarda as informações de cada usuário.
// - A tabela Books guarda as informações de cada livro.
// - A tabela UserBooks irá agir como uma tabela de junção , guardando a relação de quais pessoas usuárias possuem quais livros. Nessa tabela uma pessoa usuária pode possuir vários livros, enquanto um livro pode pertencer a várias pessoas usuárias. Assim cadastramos o livro uma única vez na tabela Books , assim como a pessoa usuária na tabela Users , e este livro vai poder ser associado de forma livre a várias pessoas usuárias, assim como uma única pessoa usuária poderá ser associado a vários livros, graças a essa tabela.

// Como criamos uma associação que passa por 3 tabelas?

// - 1 para 1

// └─# mkdir relacionamento-N-pra-N && cd relacionamento-N-pra-N
// └─# npm init -y
// └─# npm i express nodemon sequelize mysql2
// └─# npm i sequelize-cli
// └─# npx sequelize-cli init

// realize as configurações necessárias no arquivo config/config.json

// Primeiro, vamos criar o model de Users :

// models/User.js
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userId: { type: DataTypes.INTEGER, primaryKey: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'Users',
    underscored: true,
  });

  return User;
};

// Agora vamos ao model de Books :

// models/Book.js
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    bookId: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
    releaseYear: DataTypes.INTEGER,
    numberPages: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'Books',
    underscored: true,
  });

  return Book;
};

// Vamos agora criar o model de UserBooks :

// models/UserBook.js
module.exports = (sequelize, _DataTypes) => {
  const UserBook = sequelize.define('UserBook',
    {},
    { timestamps: false },
  );

  UserBook.associate = (models) => {
    models.Book.belongsToMany(models.User, {
      as: 'users',
      through: UserBook,
      foreignKey: 'book_id',
      otherKey: 'user_id',
    });
    models.User.belongsToMany(models.Book, {
      as: 'books',
      through: UserBook,
      foreignKey: 'user_id',
      otherKey: 'book_id',
    });
  };

  return UserBook;
};

// note que não temos nenhum atributo nesse model. Isso é possível porque quando estabelecemos os relacionamentos usando UserBooks como tabela de associação, o Sequelize já entende que esse model precisa ter os IDs das duas tabelas sendo associadas.

// Depois, temos um novo tipo de relacionamento: o belongsToMany . Esse relacionamento cria um relacionamento do tipo N:N, utilizando o model especificado na opção through como tabela de associação. Temos também o alias daquela associação, na chave as e, por último, temos os parâmetros foreignKey e otherKey . Esses dois parâmetros dizem ao Sequelize qual campo utilizar na tabela de associação para identificar cada uma das entidades.

// Lembre-se: foreignKey sempre se refere ao model em que chamamos belongsToMany , enquanto otherKey se refere ao model com o qual estamos criando a associação.

// Para testar a aplicação, você deve fazer as devidas alterações nos controllers , criar as migrations e os seeders .

// └─# npx sequelize migration:generate --name create-books  
// └─# npx sequelize migration:generate --name create-users
// └─# npx sequelize migration:generate --name create-user-books

// seus respectivos arquivos de migration, create-books , create-users e create-user-books:

// do arquivo da migration "books"
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Books', {
      bookId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'book_id',
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      releaseYear: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'release_year',
      },
      numberPages: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'number_pages',
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Books');
  },
};

// do arquivo da migration "users"
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      userId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'user_id',
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'first_name',
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'last_name',
      },
      age: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Users');
  },
};

// do arquivo da migration "user-books"
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserBooks', {
      userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        references: {
          model: 'Users',
          key: 'user_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      bookId: {
        type: Sequelize.INTEGER,
        field: 'book_id',
        references: {
          model: 'Books',
          key: 'book_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('UserBooks');
  },
};

// teremos que criar as seeds com informações

// └─# npx sequelize seed:generate --name books
// └─# npx sequelize seed:generate --name users
// └─# npx sequelize seed:generate --name user-books

// códigos abaixo para seus respectivos arquivos

// do arquivo da seed "books"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books',
      [
        { name: 'Livro A', release_year: 2020, number_pages: 111 },
        { name: 'Livro B', release_year: 2019, number_pages: 222 },
        { name: 'Livro C', release_year: 2018, number_pages: 333 },
        { name: 'Livro D', release_year: 2017, number_pages: 444 },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {});
  },
};

// do arquivo da seed "users"

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Users',
      [
        {
          first_name: 'Bárbara',
          last_name: 'Silva',
          age: 16,
        },
        {
          first_name: 'Carlos',
          last_name: 'Santos',
          age: 24,
        },
        {
          first_name: 'Danilo',
          last_name: 'Henrique',
          age: 32,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};

// do arquivo da seed "user-books"

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('UserBooks',
      [
        { user_id: 1, book_id: 1 },
        { user_id: 1, book_id: 3 },
        { user_id: 2, book_id: 1 },
        { user_id: 2, book_id: 2 },
        { user_id: 3, book_id: 1 },
        { user_id: 3, book_id: 2 },
        { user_id: 3, book_id: 3 },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('UserBooks', null, {});
  },
};

// └─# npx sequelize db:create
// └─# npx sequelize db:migrate
// └─# npx sequelize db:seed:all

// index.js
const express = require('express');
const { Book, User } = require('./models');

const app = express();

app.get('/usersbooks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { userId: id },
      include: [{ model: Book, as: 'books', through: { attributes: [] } }],
    });

    if (!user)
      return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;

// Agora, faça uma requisição do tipo GET para o endpoint localhost:3000/usersbooks/1 e verifique a resposta para o usuário.
// Nota: a propriedade through: { attributes: [] } deve estar presente, pois sem ela, em cada book , apareceriam todos seus respectivos users . Tente fazê-lo sem e veja a diferença no resultado!

// >>>> Transações
// Uma transação simboliza uma unidade de trabalho indivisível executada do banco de dados de forma confiável e independente de outras transações. As ações dessa unidade de trabalho não podem ser mescladas com ações de outras transações. O conceito de uma unidade de trabalho indivisível (ou todo o trabalho é feito, ou nada é) é chamado de atomicidade . Uma unidade de trabalho atômica é indivisível dessa forma.

// # ACID

// - A tomicidade: todas as operações definidas na transação devem ser concluídas com sucesso. Se algo falhar, a transação inteira falha;
// - C onsistência: todas as regras do banco de dados devem ser respeitadas, ou seja, estrutura de tabelas, chaves estrangeiras, campos restritos etc.;
// - I solamento: uma transação não pode interferir em outra transação. Cada transação deve se comportar de forma totalmente isolada das demais transações do banco de dados;
// - D urabilidade: uma vez que a transação foi finalizada, os dados ali modificados devem ser armazenados de forma permanente, ou seja, só será possível alterá-los caso uma nova transação seja executada posteriormente.

// Caso de uso
// Usaremos a pasta "1 pra 1" como modelo

// Imagine a seguinte situação, temos um endpoint onde em um mesmo formulário precisamos preencher a tabela de empregados e a tabela de endereço, mas precisamos garantir a atomicidade, ou seja precisamos cadastrar o usuário e o endereço de uma vez e caso alguma coisa falhe precisamos reverter essa operação.

// const express = require('express');
const bodyParser = require('body-parser');
// const { Address, Employee } = require('./models');

// const app = express();
app.use(bodyParser.json());

// app.get('/employees', async (_req, res) => {
//   try {
//    const employees = await Employee.findAll({
//      include: { model: Address, as: 'addresses' },
//    });

//     return res.status(200).json(employees);
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Ocorreu um erro' });
//   };
// });

// ...

app.post('/employees', async (req, res) => {
  try {
    const { firstName, lastName, age, city, street, number } = req.body;

    const employee = await Employee.create({ firstName, lastName, age });

    await Address.create({ city, street, number, employeeId: employee.id });

    return res.status(201).json({ message: 'Cadastrado com sucesso' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`);

// O problema da operação acima é que caso ocorra qualquer tipo de erro na operação de salvar o endereço no banco, o usuário vai ficar cadastrado de forma inconsistente já que o registro na tabela de usuário foi concluído com sucesso. Para garantir que vamos salvar os dois objetos ou não vamos salvar nada, usamos o recurso de transação.

// # Unmanaged transactions
// - Para esse tipo de transaction , é preciso indicar manualmente a circunstância em que uma transação deve ser finalizada ou revertida.

// Observação : para a execução desse código, é necessário que o arquivo de configuração config.json , seja passado para JavaScript config.js , igual demonstrado no conteúdo do dia 29.2 .

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

// Crie o arquivo ".env" na raiz da sua aplicação e preencha as variáveis com as suas credenciais para acessar o MySQL.

MYSQL_USER=root
MYSQL_PASSWORD=senha_mysql
MYSQL_DATABASE=orm_example
HOSTNAME=localhost

// Modifique a linha 8 do arquivo models/index.js para apontar para o arquivo config.js :
const config = require(__dirname + '/../config/config.json')[env]; // configuração antiga
const config = require(__dirname + '/../config/config.js')[env];   // configuração nova

// index.js
// const express = require('express');
// const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

// const { Addresses, Employees } = require('./models');
const config = require('./config/config');

// const app = express();
// app.use(bodyParser.json());

const sequelize = new Sequelize(config.development);

// ...
app.post('/employees', async (req, res) => {
  // Primeiro iniciamos a transação
  const t = await sequelize.transaction();

  try {
    const { firstName, lastName, age, city, street, number } = req.body;

    // Depois executamos as operações
    const employee = await Employee.create(
      { firstName, lastName, age },
      { transaction: t },
    );

    await Address.create(
      { city, street, number, employeeId: employee.id },
      { transaction: t },
    );

    // Se chegou até essa linha, quer dizer que nenhum erro ocorreu.
    // Com isso, podemos finalizar a transação usando a função `commit`.
    await t.commit();

    return res.status(201).json({ message: 'Cadastrado com sucesso' });
  } catch (e) {
    // Se entrou nesse bloco é porque alguma operação falhou.
    // Nesse caso, o sequelize irá reverter as operações anteriores com a função rollback, não sendo necessário fazer manualmente
    await t.rollback();
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});
// ...

// # Managed transactions
// - O próprio Sequelize controla quando deve finalizar ou reverter uma transação:

// index.js
// ...
app.post('/employees', async (req, res) => {
  try {
    const { firstName, lastName, age, city, street, number } = req.body;

    const result = await sequelize.transaction(async (t) => {
      const employee = await Employee.create({
        firstName, lastName, age
      }, { transaction: t });

      await Address.create({
        city, street, number, employeeId: employee.id
      }, { transaction: t });

      return res.status(201).json({ message: 'Cadastrado com sucesso' });
    });

    // Se chegou até aqui é porque as operações foram concluídas com sucesso,
    // não sendo necessário finalizar a transação manualmente.
    // `result` terá o resultado da transação, no caso um empregado e o endereço cadastrado
  } catch (e) {
    // Se entrou nesse bloco é porque alguma operação falhou.
    // Nesse caso, o sequelize irá reverter as operações anteriores com a função rollback, não sendo necessário fazer manualmente
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

// Transações deixam a confiabilidade do seu código, já que respeita o princípio da atomicidade, evitando você popular o banco de dados de forma inconsistente. Sempre que for fazer algum tipo de operação que envolva duas ou mais tabelas é bastante recomendado usar uma transação para envelopar as operações de escrita. Isso serve para operações de UPDATE e DELETE também.

// >>>> Testes
// Para não deixar de praticar, vamos testar nossa transação!

// então nos resta trabalhar em cima de testes de integração , aqui especificamente, pensando o contrato da requisição .

// usaremos a pasta "1 pra 1"

// └─# npm i mocha chai chai-http sinon -D

// Vamos alterar a linha abaixo em nosso package.json
"scripts": {
  ...
  "test": "NODE_ENV=test mocha ./tests/**/*$NAME*.test.js --exit"
},

// no index.js , faça uma alteração na linha de escolha da configuração do Sequelize e adicione a informação do id do employee criado ao retorno da requisição POST para /employees , como no exemplo (Independente de estar usando Unmanaged transactions ou Managed transactions ) :

// index.js

// ...

/*
  Essa linha será importante para que consigamos isolar nosso teste
  utilizando a configuração `test` do seu `config.{js | json}`
*/
const sequelize = new Sequelize(
  process.env.NODE_ENV === 'test' ? config.test : config.development
);

// ...

// app.post('/employees', async (req, res) => {
//   const t = await sequelize.transaction();

//   try {
//     const { firstName, lastName, age, city, street, number } = req.body;

//     const employee = await Employee.create(
//       { firstName, lastName, age },
//       { transaction: t },
//     );

//     await Address.create(
//       { city, street, number, employeeId: employee.id },
//       { transaction: t }
//     );

//     await t.commit();

    return res.status(201).json({
      id: employee.id, // esse dado será nossa referência para validar a transação
      message: 'Cadastrado com sucesso'
    });

//   } catch (e) {
//     await t.rollback();
//     console.log(e.message);
//     res.status(500).json({ message: 'Algo deu errado' });
//   }
// });

// ...

// module.exports = app;

// Note, que uma vez que estaremos fazendo um teste de integração que pressupõe um comportamento no banco de dados através do consumo da API (ou seja, um teste que, após o consumo da API, espera um resultado que pode ser validado através da leitura do banco de dados via própria API), precisamos isolar uma banco de dados no mesmo modelo do anterior. Esse banco não deve gerar prejuízo ao seu ambiente de desenvolvimento e tampouco para seu ambiente de produção.

// Caso você ainda não tenha configurado um, é só alterar o campo test.database do seu arquivo config.{js | json} , complementando os demais dados, caso não estejam preenchidos:
// ./config/config.js

module.exports = {
  // ...
    "test": {
      "username": "root",
      "password": "", // preencha com a senha do seu banco de dados, caso tenha
      "database": "orm_assoc_test_db",
      "host": "127.0.0.1",
      "dialect": "mysql",
      // adicione essa linha a sua configuração para omitir mensagens de log no orm
      "logging": false
    }
  // ...
  }

// Para inicializar o banco de teste, rode os seguintes comandos, passando a variável de ambiente que deseja usar (no nosso caso, NODE_ENV=test ):

// └─# npm install dotenv   

// └─# NODE_ENV=test npx sequelize-cli db:create
// └─# NODE_ENV=test npx sequelize-cli db:migrate
// └─# NODE_ENV=test npx sequelize-cli db:seed:all


// Caso queira remover o banco para começar novamente, utilize: NODE_ENV=test npx sequelize-cli db:drop .

// Agora, crie uma pasta ./tests/integration onde testaremos a criação de Employees , por tanto crie um arquivo employeeCreation.test.js . No nosso teste, pensando o exemplo que acabamos de ver, vamos assumir o seguinte teste de mesa :

// ### Testando a rota POST /employees

// - Acessarei meu `rest-client` favorito (PostMan, Insomnia, HTTPie, etc...)
// - Para um caso de sucesso:
//   - Farei uma requisição `POST` com os dados corretos para meu
//     end-point `/employee`;
//   - Aguardo uma resposta com status `201 - Created`;
//   - Essa resposta deve conter também um atributo `id`, no corpo;
//   - Essa resposta deve conter também um atributo `message`,
//     no corpo, com a mensagem `Cadastrado com sucesso`;
//   - Farei uma requisição `GET` utilizando esse `id` para meu
//     end-point `/employee/:id`;
//   - Aguardo uma resposta com status `200 - OK`;
//   - Essa resposta deve conter também um atributo `addresses`,
//     no corpo, com pelo menos um item.
// - Para um caso de falha:
//   - Farei uma requisição `POST` com os dados incorretos para meu
//     end-point `/employee`;
//   - Aguardo uma resposta com status `500 - Internal Server Error`;
//   - Essa resposta deve conter também um atributo `message`,
//     no corpo, com a mensagem `Algo deu errado`;

// Dessa forma, podemos criar o seguinte teste:

// ./tests/integration/employeeCreation.test.js

const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../index');

// omitir os `console.log`s dos testes gerando um `stub` pra função
const consoleLogStub = stub(console, 'log');
before(()=> consoleLogStub.returns(true));
after(()=> consoleLogStub.restore());

describe('Rota POST /employees', () => {
  describe('quando os dados do `body` são válidos', () => {
    let postEmployee;
    let getEmployee;

    before(async () => {
      try {
        postEmployee = await chai.request(app)
          .post('/employees')
          .send({
            firstName: "Rodrigo",
            lastName: "Oliveira",
            age: 30,
            city: "TrybeCity",
            street: "Rua Teste",
            number: 42
          });

        const { body : { id } } = postEmployee;

        getEmployee = await chai.request(app)
          .get(`/employees/${id}`);
      } catch (error) {
        console.error(error.message);
      }
    });

    it('retorna 201 - Created', async () => {
      const { status } = postEmployee;

      expect(status).to.be.equals(201);
    });

    it('retorna um atributo `id`, que é um número', async () => {
      const { body: { id } } = postEmployee;

      expect(typeof id).to.be.equals("number");
    });

    it('retorna uma mensagem `Cadastrado com sucesso`', async () => {
      const { body: { message } } = postEmployee;

      expect(message).to.be.equals('Cadastrado com sucesso');
    });

    it('é possível consultar a pessoa criada através do `id` retornado', async () => {
      const { body: { id: postId } } = postEmployee;
      const { body: { id: getId } } = getEmployee;

      expect(postId).to.be.equals(getId);
    });

    it('essa consulta também retornou um atributo `addresses`, com pelo menos um item', async () => {
      const { body: { addresses } } = getEmployee;

      expect(addresses.length).to.be.greaterThanOrEqual(1);
    });
  });

  describe('quando os dados do `body` não são válidos', () => {
    let postEmployee;

    before(async () => {
      try{
        // removendo city
        postEmployee = await chai.request(app)
          .post('/employees')
          .send({
            firstName: "Rodrigo",
            lastName: "Oliveira",
            age: 30,
            street: "Rua Teste",
            number: 42
          });
      } catch (error) {
        console.error(error.message);
      }
    });

    it('retorna 500 - Internal Server Error', async () => {
      const { status } = postEmployee;

      expect(status).to.be.equals(500);
    });

    it('retorna uma mensagem `Algo deu errado`', async () => {
      const { body: { message } } = postEmployee;

      expect(message).to.be.equals('Algo deu errado');
    });
  });
});

// Para testar, utilize npm test . Não se esqueça que a API não deve estar rodando no momento do test (o próprio chai-http , subirá sua api).

// ==============================
// -- > CONTEÚDO do dia - bloco29-new.3 -- <---/ FIM -----------------------------------------//
// ==============================
// -- > AULA ao VIVO - bloco29-new.3 ----- <---/ INICIO --------------------------------------//
// ==============================


// ==============================
// -- > AULA ao VIVO - bloco29-new.3 ----- <---/ FIM -----------------------------------------//
// ==============================
// -- > EXERCÍCIO do dia - bloco29-new.3 -- <---/ INICIO --------------------------------------//
// ==============================

// # Agora, a prática


// # Recursos adicionais

// Documentação

// ==============================
// -- > EXERCÍCIO do dia - bloco29-new.3 -- <---/ FIM -----------------------------------------//
// ============================== NodeJS - ORM - Associations
// ...
