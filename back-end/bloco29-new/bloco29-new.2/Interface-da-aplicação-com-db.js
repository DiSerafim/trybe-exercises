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











































































// >>>> Migrações











































































// >>>> Seeders











































































// >>>> Operações











































































// >>>> Boas Práticas











































































// >>>> Sequelize do Zero











































































// >>>> Testes











































































// >>>> Conclusão











































































// >>>> Cheat Sheet

// **** Conteúdo Bônus - Padrões de Projeto

// >>>> Nomenclatura

















// >>>> .sequelizerc

















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
