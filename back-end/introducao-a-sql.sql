############################## Banco de dados SQL
-- > CONTEÚDO do dia - 20.1 -- <---/ INICIO --------------------------------------//

# Entender o que são bancos de dados;
# Entender como a linguagem de consulta estruturada ( SQL ) é usada;
# Compreender como as tabelas se encaixam no conceito de banco de dados;
# Montar um ambiente de desenvolvimento local para praticar SQL;
# Entender como usar o MySQL Workbench.

-- Constraints (restrições), chaves primárias e chaves estrangeiras

-- TABELA-address (address_id/ address/ address2/ district/ city_id/ postal_code/ phone)
-- 1) Quais constraints a coluna address_id poderia ter? Por quê?
# R-> Primary Key para que exista um número identificador(ID) único. Além disso, Primary Key não permite que ela seja nula.

-- 2) A coluna city_id é um número. Você consegue identificar que tipo de constraint foi aplicado nela?
# R-> Foreign Key.

-- 3) A coluna address possui uma constraint. Qual tipo de constraint seria interessante ser aplicado a ela para que sempre exista um valor na coluna quando uma nova linha for criada?
# R-> NOT NULL. Dessa maneira, sempre estará preenchida em função de ser uma informação crucial.

-- TABELA-city (city_id/ city/ country_id/ last_update)
-- 1) Que tipo de constraint a coluna city_id possui?
# R-> Primary Key.

-- 2) Qual é o motivo da coluna country_id não possuir nomes de country (país)? Ela é algum tipo de chave primária ou estrangeira?
# R-> É uma referência para sua tabela original, o número exibido na tabela representa uma Foreign Key. Para ver o nome do país, vá até a tabela na qual o country_id é uma Primary Key.

-- TABELA-film_category (film_id/ category_id/ last_update)
-- 1) Qual coluna possui uma Primary Key?
# R-> film_id.
-- 2) Qual coluna possui uma Foreign Key ?
# R-> category_id.

-- MySQL na linha de comando ----------------------------------------------------

-- 1) Entre no banco de dados mysql.
# R-> mysql -u root -p

-- 2) Visualize todas as tabelas desse banco.
# R-> USE nome_do_banco_de_dados_aqui;
# R-> SHOW TABLES;

-- 3) Visualize a estrutura de pelo menos 10 tabelas diferentes e tente entender o tipo de estrutura que costuma ser utilizada.
# R-> DESCRIBE nome_de_10_tabelas;
 
-- 4) Crie um novo banco de dados com o seu nome e depois entre nele!
# R-> CREATE DATABASE seu_nome_aqui;
# R-> USE seu_nome_aqui;

-- > CONTEÚDO do dia - 20.1 -- <---/ FIM -----------------------------------------//
##############################
-- > AULA ao VIVO - 20.1 ----- <---/ INICIO --------------------------------------//

-- seleciona todas as colunas da tabela address
SELECT * FROM sakila.address;

-- seleciona as 2 colunas da tabela address
SELECT district, city_id FROM sakila.address;

-- seleciona um linha especifica da tabela
SELECT * FROM sakila.address WHERE address_id = 603;

-- > AULA ao VIVO - 20.1 ----- <---/ FIM -----------------------------------------//
##############################
-- > EXERCÍCIO do dia - 20.1 -- <---/ INICIO --------------------------------------//

-- Ex 1: Descubra como fazer uma pesquisa em qualquer tabela sem utilizar uma linha de código usando o MySql Workbench.
# R-> Basta clicar com botão direito na tabela e clicar em "select rows - limit 1000"

-- Ex 2: Descubra como é possível criar uma tabela sem usar código SQL usando o MySql Workbench.
# R-> Basta clicar em create table usando o botão direito.

-- Ex 3: Feito isso, crie uma tabela com as seguintes restrições:
-- Nome da tabela: Filme
-- Colunas:
-- FilmeId - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente;
-- Descricao - não permite nulos, tipo texto (varchar(100));
-- AnoLancamento - não permite nulos, tipo int;
-- Nota - permite nulos, tipo int;
# R-> Basta usar o GUI do Mysql Workbench para fazer isso.

-- Ex 4: Analise a tabela city e encontre a tabela à qual a coluna country_id faz referência.
# R-> Ela faz referência à tabela country.

-- Ex 5: Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela city faz com a tabela country?
# R-> N:1

-- Ex 6: Qual tipo de relacionamento a tabela country faz com a tabela city?
# R-> 1:N

-- Ex 7: Abra tabela por tabela do banco sakila e encontre no mínimo 3 exemplos de um relacionamentos 1:N ou N:1.
# R-> store -> staff / language -> film / film -> language

-- > EXERCÍCIO do dia - 20.1 -- <---/ FIM -----------------------------------------//
############################## Banco de dados SQL