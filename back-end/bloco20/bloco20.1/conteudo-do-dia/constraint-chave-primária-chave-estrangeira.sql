-- > CONTEÚDO do dia --------- <---/ INICIO --------------------------------------//

-- * Modelar um banco de dados;
-- * Identificar entidades, atributos e relacionamentos;
-- * Construir um diagrama entidade-relacionamento (diagrama ER);
-- * Criar um banco de dados;
-- * Criar e modelar tabelas com base em um diagrama ER.

-- Constraints (restrições), chaves primárias e chaves estrangeiras

-- TABELA-address (address_id/ address/ address2/ district/ city_id/ postal_code/ phone)
-- 1) Quais constraints a coluna address_id poderia ter? Por quê?
-- R-> Primary Key para que exista um número identificador(ID) único. Além disso, Primary Key não permite que ela seja nula.

-- 2) A coluna city_id é um número. Você consegue identificar que tipo de constraint foi aplicado nela?
-- R-> Foreign Key.

-- 3) A coluna address possui uma constraint. Qual tipo de constraint seria interessante ser aplicado a ela para que sempre exista um valor na coluna quando uma nova linha for criada?
-- R-> NOT NULL. Dessa maneira, sempre estará preenchida em função de ser uma informação crucial.

-- TABELA-city (city_id/ city/ country_id/ last_update)
-- 1) Que tipo de constraint a coluna city_id possui?
-- R-> Primary Key.

-- 2) Qual é o motivo da coluna country_id não possuir nomes de country (país)? Ela é algum tipo de chave primária ou estrangeira?
-- R-> É uma referência para sua tabela original, o número exibido na tabela representa uma Foreign Key. Para ver o nome do país, vá até a tabela na qual o country_id é uma Primary Key.

-- TABELA-film_category (film_id/ category_id/ last_update)
-- 1) Qual coluna possui uma Primary Key?
-- R-> film_id.
-- 2) Qual coluna possui uma Foreign Key ?
-- R-> category_id.

-- MySQL na linha de comando ---------------------------------------------------------------------

-- 1) Entre no banco de dados mysql.
-- R-> mysql -u root -p

-- 2) Visualize todas as tabelas desse banco.
-- R-> USE nome_do_banco_de_dados_aqui;
-- R-> SHOW TABLES;

-- 3) Visualize a estrutura de pelo menos 10 tabelas diferentes e tente entender o tipo de estrutura que costuma ser utilizada.
-- R-> DESCRIBE nome_de_10_tabelas;
 
-- 4) Crie um novo banco de dados com o seu nome e depois entre nele!
-- R-> CREATE DATABASE seu_nome_aqui;
-- R-> USE seu_nome_aqui;

-- > CONTEÚDO do dia --------- <---/ FIM -----------------------------------------//
