############################## Introdução ao MongoDB - NoSQL
-- > CONTEÚDO do dia - 23.1 -- <---/ INICIO --------------------------------------//

-- Introdução - NoSQL
## Por que o NoSQL surgiu.
## Tipos(classes) de bancos de dados NoSQL.

-- O que significa NoSQL?

# (N)ot (O)nly SQL - "Não Somente SQL". 
# podem utilizar linguagens semelhantes ao SQL para realizar consultas e demais operações, e não somente o SQL.
# em sua grande maioria, baseiam-se em um outro conceito: o BASE(Base Availability, Soft State and Eventually Consistent).

-- cluster
# Refere à capacidade de um conjunto de servidores ou instâncias se conectarem a um banco de dados.
# Tolerância a falhas(Fault Tolerance) - centro de processamento de dados(CPD) ou data center
# Balanceamento de carga(Load Balancing) - configurado para permitir que os usuários sejam automaticamente alocados ao servidor.
-- instância
# coleção de memória e processos que interagem com o banco de dados,

-- Detalhando o conceito BASE
# Base Availability-BA (se um servidor falhar, o banco continua funcionando por conta de outro servidor)
# Soft State-S (permite que o banco de dados possa gerenciar mais informações de escrita sem ter que replicá-las em uma mesma operação)
# Eventually Consistent-E (Como não temos a informação replicada "instantaneamente", esse ponto se encarrega de deixar o banco consistente "ao seu tempo")

-- NoSQL e suas classes
# Divididos em quatro principais tipos(no contexto de banco de dados, são chamados de classes):

# Chave/Valor (Key / Value)
# Família de Colunas(Column Family)
# Documentos (Document)
# Grafos (Graph)

-- Chave/Valor - Key/Value
# Os dados são armazenados num esquema de registros compostos por uma chave(identificador do registro) e um valor(todo o conteúdo pertencente àquela chave). Você consegue recuperar um registro do seu banco de dados através da chave. Consultas por algum conteúdo através do valor não são permitidas.
# Banco de dados da classe Chave/Valor é o Redis.

-- Família de Colunas - Column Family
# Armazena os dados como conjunto de 3"chaves": linha, coluna e timestamp. As linhas e colunas concentram os dados, e as diferentes versões desses dados são identificadas pelo timestamp.
# Banco de dados da classe Família de Colunas é o Cassandra.

-- Documentos - Document
# Armazenados em estilo JSON, tem vários níveis e subníveis, o que confere aos dados armazenados possibilidade de ter maior complexidade. A estrutura é parecida com o que armazenamos na classe Chave/Valor. Porém, com Documentos, não temos apenas uma chave e sim um conjunto de chaves e valores.
# banco de dados da classe Documentos é o CouchDB & MongoDB que vamos ver neste bloco.

-- Grafos - Graph
# Armazenar dados complexos. compostos por nós(vértices do grafo), relacionamentos(arestas do grafo) e as propriedades ou atributos dos nós ou relacionamentos. O relacionamento é o ponto central dessa classe. O relacionamento é físico, persistido como qualquer outro dado dentro do banco. As consultas que requerem esses relacionamentos são extremamente performáticas.
# banco de dados da classe Grafos é o Neo4j .

-- Introdução ao MongoDB

# Instalar e conectar-se ao MongoDB ;
# Listar bancos de dados e coleções;
# Inserir documentos no banco de dados usando o insert() ;
# Pesquisar documentos no banco de dados usando o find() ;
# Contar a quantidade de documentos retornados usando o count() ;
# Filtrar o resultado das suas pesquisas;
# Limitar e pular os documentos retornados;
# Fazer uma paginação simples combinando os métodos limit() e o skip() .
# Entender o que é uma projeção e como utilizá-la;

-- Instalar

-- Instale o MongoDB Community Edition no Debian
# https://docs.mongodb.com/manual/tutorial/install-mongodb-on-debian/
-- Instale o MongoDB Community Edition no Ubuntu
# https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

-- 1 Iniciando o MongoDB
# sudo service mongod start
-- 2 Status MongoDB
# sudo service mongod status
-- Parando a instância
# sudo service mongod stop
-- Reiniciando a instância
# sudo service mongod restart
--  início automático quando ligar o computador
# sudo systemctl enable mongod.service
-- desativar o início automático
# sudo systemctl disable mongod.service

-- Para acessar o MongoDB Shell
# mongo ou mongosh

-- Coleções
# documentos no MongoDB são armazenados dentro das coleções. Uma coleção é equivalente à uma tabela.

-- Criando uma coleção
# O MongoDB cria essa coleção no momento do primeiro insert.
# tanto as operações insertOne() e createIndex() criam uma nova coleção(caso ela não exista).
db.nomeDaColecao1.insertOne({ x: 1 })
db.nomeDaColecao2.createIndex({ y: 1 })

-- Criação explícita
# Cria uma coleção e especifica uma série de parâmetros, como o tamanho máximo, regras de validação.
db.createCollection( "nomeDaColecao", { collation: { locale: "pt" } } );

-- Documentos
# São equivalentes aos registros ou linhas de uma tabela nos bancos de dados relacionais.
# Cada atributo (campo) é equivalente a uma coluna de uma linha da tabela.
# Sua diferença é que documentos podem conter estruturas mais ricas
# Armazenar muito mais informações do que você consegue em uma "linha simples" de uma tabela relacional.

{
    "_id": 1,
    "nome": "Jose",
    "endereco": {
        "logradouro": "Rua 1",
        "regiao": "Zona Norte",
        "cidade": "São Paulo",
        "uf": "SP"
    }
},
{
    "_id": 2,
    "nome": "Maria",
    "endereco": {
        "logradouro": "Rua 2",
        "cidade": "Belo Horizonte",
        "uf": "MG"
    }
}

-- Insert (insertOne() e insertMany())

## insertOne() - insere 1 documento por vez

# cria o DB
> use veiculos
switched to db veiculos
# verifica se o DB está criado
> db
veiculos
# cria os campos(nome, preco) nesse caso o ID é inserido automaticamente
> db.carros.insertOne({nome: "fusca", preco: 2000});
{
        "acknowledged" : true,
        "insertedId" : ObjectId("61117eda23ebb99d99733004")
}
# dessa maneira o ID é criado manualmente
> db.carros.insertOne({_id:1, nome: "camaro", preco: 3000});
{ "acknowledged" : true, "insertedId" : 1 }
# para vizualizar a coleção 'carros'
> db.carros.find();
{ "_id" : ObjectId("61117eda23ebb99d99733004"), "nome" : "fusca", "preco" : 2000 }
{ "_id" : 1, "nome" : "camaro", "preco" : 3000 }

-- Crie um documento na coleção products, no banco de dados sample, com os seguintes atributos e valores:
## {"productName": "Caixa", "price": 20}
# cria o documento
use sample
switched to db sample
# insere os dados
> db.products.insertOne({"productName": "Caixa", "price": 20});
# resultado
{
        "acknowledged" : true,
        "insertedId" : ObjectId("6111822823ebb99d99733005")
}

-- Assuma o controle do campo _id, passando um valor qualquer para ele e crie um novo documento com os mesmos atributos e valores do documento anterior.
> db.products.insertOne({_id: 1, productName: "sacola", price: 10});
{ "acknowledged" : true, "insertedId" : 1 }
# resultado
> db.products.find();
{ "_id" : ObjectId("6111822823ebb99d99733005"), "productName" : "Caixa", "price" : 20 }
{ "_id" : 1, "productName" : "sacola", "price" : 10 }

## insertMany() - insere vários documentos

db.carros.insertMany([
  {
    "_id": 1,
    "nome": "Gol",
    "preco": 15000,
    "portas": 4,
    "status": "usado"
  },
  {
    "_id": 2,
    "nome": "Onix",
    "preco": 25000,
    "portas": 4,
    "status": "semi-novo"
  },
  {
    "_id": 1,
    "nome": "Gol",
    "preco": 15000,
    "portas": 4,
    "status": "usado"
  },
  {
    "_id": 4,
    "nome": "Marea",
    "preco": 2000,
    "portas": 4,
    "status": "usado"
  },
  {
    "_id": 5,
    "nome": "Kombi",
    "preco": 10000,
    "portas": 2,
    "status": "semi-novo"
  },
  {
    "_id": 6,
    "nome": "Compass",
    "preco": 12000,
    "portas": 4,
    "status": "novo"
  }
]);
# Ao rodar o arquivo, apenas 2 serão aprovados, pois tem Erros de ids iguais e devido esse fato o restante não é aprovado.

# uma maneira de resolver esse erro é colocar no final do arquivo ({ordered: false})
db.carros.insertMany([
  {
    "_id": 1,
    "nome": "Gol",
    "preco": 15000,
    "portas": 4,
    "status": "usado"
  },
  {
    "_id": 2,
    "nome": "Onix",
    "preco": 25000,
    "portas": 4,
    "status": "semi-novo"
  },
  {
    "_id": 1,
    "nome": "Gol",
    "preco": 15000,
    "portas": 4,
    "status": "usado"
  },
  {
    "_id": 4,
    "nome": "Marea",
    "preco": 2000,
    "portas": 4,
    "status": "usado"
  },
  {
    "_id": 5,
    "nome": "Kombi",
    "preco": 10000,
    "portas": 2,
    "status": "semi-novo"
  },
  {
    "_id": 6,
    "nome": "Compass",
    "preco": 12000,
    "portas": 4,
    "status": "novo"
  }
], {ordered: false});
# agora sim, ele ignora o erro e acrescenta o restante dos valores
# vamos ver
db.carros.find();
{ "_id" : 1, "nome" : "Gol", "preco" : 15000, "portas" : 4, "status" : "usado" }
{ "_id" : 2, "nome" : "Onix", "preco" : 25000, "portas" : 4, "status" : "semi-novo" }
{ "_id" : 4, "nome" : "Marea", "preco" : 2000, "portas" : 4, "status" : "usado" }
{ "_id" : 5, "nome" : "Kombi", "preco" : 10000, "portas" : 2, "status" : "semi-novo" }
{ "_id" : 6, "nome" : "Compass", "preco" : 12000, "portas" : 4, "status" : "novo" }

-- Insira mais três documentos na coleção products em uma única operação:
# código
db.products.insertMany(
  [
    { "productName": "Lapis", "stock": 10, "price": 20,"status":"A"},
    { "productName": "Tesoura", "price": 5, "status": "B" },
    { "productName": "Borracha", "price": 15, "status": "A" }
  ]
);
# resultado
> db.products.find();
{ "_id" : ObjectId("611192bc71ba1e93c2d8d27d"), "productName" : "Lapis", "stock" : 10, "price" : 20, "status" : "A" }
{ "_id" : ObjectId("611192bc71ba1e93c2d8d27e"), "productName" : "Tesoura", "price" : 5, "status" : "B" }
{ "_id" : ObjectId("611192bc71ba1e93c2d8d27f"), "productName" : "Borracha", "price" : 15, "status" : "A" }

-- find() - (db.collection.find(query, projection))

## serve para selecionar os documentos de uma coleção e retorna um cursor com esses documentos.

--  query (opcional):
#Tipo: documento;
Descrição: especifica os filtros da seleção usando os query operators. Para retornar todos os documentos da coleção, é só omitir esse parâmetro ou passar um documento vazio ({}).

-- projection (opcional):
Tipo: documento;
Descrição: especifica quais atributos serão retornados nos documentos selecionados pelo parâmetro query. Para retornar todos os atributos desses documentos, é só omitir esse parâmetro.

-- Projeção (projection)

## determina quais atributos serão retornados dos documentos que atendam aos critérios de filtro.
# { "atributo1": <valor>, "atributo2": <valor> ... }

# <valor> pode ser uma das seguintes opções:
# 1 ou true para incluir um campo nos documentos retornados;
# 0 ou false para excluir um campo;
# Uma expressão usando Projection Operators .

# insere um documento na coleção movies com vários atributos.
db.movies.insertOne(
    {
        "title" : "Forrest Gump",
        "category" : [ "drama", "romance" ],
        "imdb_rating" : 8.8,
        "filming_locations" : [
            { "city" : "Savannah", "state" : "GA", "country" : "USA" },
            { "city" : "Monument Valley", "state" : "UT", "country" : "USA" },
            { "city" : "Los Anegeles", "state" : "CA", "country" : "USA" }
        ],
        "box_office" : {
            "gross" : 557, "opening_weekend" : 24, "budget" : 55
        }
    }
)

# selecionamos esse documento na coleção movies, passando como parâmetro de projeção apenas os atributos title e imdb_rating:
db.movies.findOne(
    { "title" : "Forrest Gump" },
    { "title" : 1, "imdb_rating" : 1 }
)
# resultado
{
  "_id" : ObjectId("6111949271ba1e93c2d8d280"),
  "title" : "Forrest Gump",
  "imdb_rating" : 8.8
}
# atributo _id também foi retornado. Isso acontece porque ele é o único atributo que você não precisa especificar para que seja retornado
# se não quiser vê o ID no retorno, é só suprimí-lo:
db.movies.findOne(
    { "title" : "Forrest Gump" },
    { "title" : 1, "imdb_rating" : 1, "_id": 0 }
)
# resultado
{ "title" : "Forrest Gump", "imdb_rating" : 8.8 }

-- Gerenciamento do cursor

# find(), o MongoDB Shell itera automaticamente o cursor para exibir os 20 primeiros documentos. Digite 'it' para continuar a iteração. Assim, mais 20 documentos serão exibidos

# count() retorna o número de documentos de uma coleção
db.movies.count()

-- Tipos e comparações
db.collection.insertMany(
  [
    { "_id": "apples", "qty": 5 },
    { "_id": "bananas", "qty": 7 },
    { "_id": "oranges", "qty": { "in stock": 8, "ordered": 12 } },
    { "_id": "avocados", "qty": "fourteen" }
  ]
);
# Operador de comparação $gt(greater than, maior que, >) para retornar os documentos em que o valor do atributo qty seja maior do que 4:
db.collection.find( { qty: { $gt: 4 } } )
# resultado
{ "_id" : "apples", "qty" : 5 }
{ "_id" : "bananas", "qty" : 7 }

# o _id igual a "avocados" não foi retornado porque o valor do campo qty é do tipo string, enquanto o operador $gt é do tipo integer.
# o _id igual a "oranges" também não foi retornado porque qty é do tipo object.

-- Utilizando o find()
## Exemplos

db.exemplo.insertMany([
  {
    "_id" : <value>,
    "name" : { "first" : <string>, "last" : <string> },     // documento embedado ou subdocumento
    "birth" : <ISODate>,
    "death" : <ISODate>,
    "contribs" : [ <string>, ... ],                         // Array de Strings
    "awards" : [
        { "award" : <string>, year: <number>, by: <string> }// Array de subdocumentos
        ...
    ]
  }
]);

-- Selecionando todos os documentos da coleção
# find(), quando utilizado sem parâmetros, retorna todos os documentos da coleção juntamente com todos os seus campos
db.bios.find()

-- Essa operação corresponde à seguinte consulta no SQL :
SELECT * FROM bios;

-- Selecionando documentos com critérios de busca
# Query por igualdade

# retorna os documentos da coleção bios em que o atributo _id é igual a 5:
db.bios.find( { _id: 5 } )
# corresponde à seguinte consulta no SQL:
SELECT * FROM bios WHERE _id = 5;

# retorna todos os documentos da coleção bios em que o campo last do subdocumento name é igual a "Hopper":
db.bios.find( { "name.last": "Hopper" } )

-- Projetando somente os atributos requeridos:
# Através do segundo parâmetro do método find()

# retorna todos os documentos da coleção bios, trazendo apenas o atributo name de cada documento:
db.bios.find({}, { name: 1 })
# name é um subdocumento, pois armazena um objeto com outros atributos.
# corresponde à seguinte consulta no SQL:
SELECT name FROM bios;

-- Limitando o número de documentos retornados

## limit() - limita o número de documentos retornados

db.collection.find(<query>).limit(<número>)
# Note que você deve especificar um valor numérico no limit().

# utilizando a coleção bios :
db.bios.find().limit(5)

# corresponde à seguinte consulta no SQL:
SELECT * FROM bios LIMIT 5;

## pretty() - aplica uma indentação na exibição dos resultados no console

db.bios.find().limit(5).pretty()

-- "Pulando" documentos

## skip() - Pula documentos skip(n°)

# na coleção bios pulará os dois primeiros documentos e retornará o cursor a partir daí
db.bios.find().skip(2)

# combina os métodos limit() e skip() criando, uma paginação:
db.bios.find().limit(10).skip(5)

# corresponde à seguinte consulta no SQL :
SELECT * FROM bios LIMIT 10 OFFSET 5;




-- > CONTEÚDO do dia - 23.1 -- <---/ FIM -----------------------------------------//
##############################
-- > AULA ao VIVO - 23.1 ----- <---/ INICIO --------------------------------------//



-- > AULA ao VIVO - 23.1 ----- <---/ FIM -----------------------------------------//
##############################
-- > EXERCÍCIO do dia - 23.1 -- <---/ INICIO --------------------------------------//

-- Agora, a prática!

## O MongoDB possui diversas ferramentas como, por exemplo, mongo, mongosh, Compass e outras ferramentas de terceiros. Você pode utilizar o que achar melhor para executar as queries , o importante é realizá-las.
## Utilizando a coleção bios , construa queries para retornar os seguintes itens:

# 1 Retorne o documento com o _id igual a 8.
  > db.bios.find({_id: 8})
# 2 Retorne o documento com o _id igual a 8, mas só exiba os atributos: _id e name.
  > db.bios.find({_id: 8}, {name: 1})
# 3 Retorne apenas os atributos name e birth do documento com o _id igual a 8.
  > db.bios.find({_id: 8}, {name: 1, birth: 1, _id: 0})
# 4 Retorne todos os documentos em que o atributo name.first seja igual a John, utilizando o método pretty().
# pretty() - aplica uma indentação na exibição dos resultados no console
  > db.bios.find({"name.first": "John"}).pretty()
# 5 Retorne os 3 primeiros documentos da coleção bios utilizando o método pretty().
# limit() - limita o número de documentos retornados
# pretty() - aplica uma indentação na exibição dos resultados no console
  > db.bios.find({}).limit(3).pretty()
# 6 Retorne 2 documentos da coleção bios pulando os 5 primeiros documentos.
# skip() - Pula documentos skip(n°)
  > db.bios.find({}).skip(5).limit(2).pretty()

# Utilizando o mongoimport, importe o arquivo books.json para a sua instância local do MongoDB e utilize a coleção books para construir as seguintes consultas:
  # o import tem que ser feito no terminal comum 
  > mongoimport --db class --collection books https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/mongodb/books-48d15e4d8924badc2308cc4a62eb3ea4.json
  > use class
# 7 Retorne a quantidade de documentos da coleção books.
# count() retorna o número de documentos de uma coleção
  class> db.books.count()
# 8 Conte quantos livros existem com o status = "PUBLISH".
  class> db.books.count({status: "PUBLISH"})
# 9 Exiba os atributos title, isbn e pageCount dos 3 primeiros livros. NÃO retorne o atributo _id.
  class> db.books.find({}, {_id: 0, title: 1, isbn: 1, pageCount: 1}).limit(3).pretty()
# 10 Pule 5 documentos e exiba os atributos _id, title, authors e status dos livros com o status = "MEAP", limitando-se a 10 documentos.
  class> db.books.find({status: "MEAP"}, {title: 1, authors: 1, status: 1}).skip(5).limit(10).pretty()


-- > EXERCÍCIO do dia - 23.1 -- <---/ FIM -----------------------------------------//
############################## Introdução ao MongoDB - NoSQL
