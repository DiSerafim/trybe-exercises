-- SELECT , o primeiro passo

SELECT 'Olá, bem-vindo ao SQL!'; -- 'Olá, bem-vindo ao SQL!'
SELECT 10; -- 10
SELECT now(); -- '2021-07-27 15:37:46'
SELECT 20 * 2; -- 40
SELECT 50 / 2; -- '25.0000'
SELECT 18 AS idade; -- 18
SELECT 2019 AS ano; -- '2019'
SELECT 'Rafael', 'Martins', 25, 'Desenvolvedor Web'; -- 'Rafael', 'Martins', '25', 'Desenvolvedor Web'
SELECT 'Rafael' AS nome, 'Martins' AS sobrenome, 25 AS idade, 'Desenvolvedor Web' AS 'Área de atuação'; -- 'Rafael', 'Martins', '25', 'Desenvolvedor Web'

-- Vamos praticar? Aham!

-- Monte uma query que exiba seu nome na tela;
SELECT 'Diego';
-- Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;
SELECT 'Diego', 'Serafim', '34 anos', 'Beleḿ';
-- Monte uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o AS , que é chamado de alias na linguagem SQL (alias é como um apelido no português);
SELECT 'Diego' AS name, 'Serafim' AS lastname, '34 anos' AS idade, 'Belém' AS cidade;
-- Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT ;
SELECT 13 * 8;
-- Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome "Data Atual".
SELECT now() AS 'Data Atual';

-- Vídeos --

SELECT * FROM sakila.city; -- 600 row(s) returned
SELECT city, country_id FROM sakila.city; -- retorna as colunas indicadas
-- OU
USE sakila;
SELECT city, country_id FROM city;

-- vamos fixar --

-- Vamos agora entrar no banco de dados sakila e encontrar as seguintes informações, montando uma query para cada uma:

-- Escreva uma query que selecione todas as colunas da tabela city;
SELECT * FROM sakila.city;
-- Escreva uma query que exiba apenas as colunas first_name e last_name da tabela customer;
SELECT first_name, last_name FROM sakila.customer;
-- Escreva uma query que exiba todas as colunas da tabela rental;
SELECT * FROM sakila.rental; 
-- Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela film;
SELECT title, description, release_year FROM sakila.film;
-- Utilize o SELECT para explorar todas as tabelas do banco de dados.
-- R-> SELECT * FROM sakila.nome_da_tabela;
SELECT * FROM sakila.actor;

-- Juntando duas ou mais colunas usando o CONCAT --

-- Seu resultado ficou estranho? Eu também achei!
SELECT CONCAT(first_name, last_name) FROM sakila.actor; -- junta os dois
-- Muito melhor, certo? Mas dá para melhorar? Dá!
SELECT CONCAT(first_name, ' ', last_name) FROM sakila.actor;
-- Bem melhor
SELECT CONCAT(first_name, ' ', last_name) AS 'Nome Completo' FROM sakila.actor;

-- Vamos brincar um pouco mais com isso?

-- Na tabela sakila.film , monte uma query que exiba o título e o ano de lançamento dos filmes em uma coluna e dê a ela o nome Lançamento do Filme.
SELECT CONCAT (title, ' ', release_year) AS 'Lançamento do Filme' FROM sakila.film;
-- Na tabela sakila.film , crie uma query que exiba o título do filme e sua classificação indicativa (PG, G, NC-17) em apenas uma coluna. Dê a ela o nome Classificação. 
SELECT CONCAT(title, ' ', rating) AS Classificação FROM sakila.film;
-- Na tabela sakila.address , monte uma query que exiba a rua e o distrito de cada registro em uma coluna apenas, e dê a essa coluna o nome Endereço.
SELECT CONCAT(address, '', district) AS Endereço FROM sakila.address;

-- Dados repetidos? Aqui Não! Como usar o DISTINCT

-- SELECT * FROM sakila.actor; -- 200 row(s) returned
-- SELECT first_name, last_name FROM sakila.actor; -- 200 row(s) returned
-- SELECT DISTINCT first_name, last_name FROM sakila.actor; -- 199 row(s) returned

-- Para criar o banco de dados, abra uma nova janela de query no MySQL Workbench e execute o seguinte código:

-- CREATE DATABASE `Escola`;
-- CREATE TABLE IF NOT EXISTS Escola.Alunos (
--     `Nome` VARCHAR(7) CHARACTER SET utf8,
--     `Idade` INT
-- );
-- INSERT INTO Escola.Alunos VALUES
--     ('Rafael', 25),
--     ('Amanda', 30),
--     ('Roberto', 45),
--     ('Carol', 19),
--     ('Amanda', 25);

-- Feito isso, você terá acesso à tabela Alunos do banco de dados Escola.

-- Monte uma query para encontrar pares únicos de nomes e idades.
SELECT DISTINCT Nome, Idade FROM Escola.Alunos;
-- Quantas linhas você encontraria na query anterior?
-- R-> 5
-- Monte uma query para encontrar somente os nomes únicos.
SELECT DISTINCT Nome FROM Escola.Alunos;
-- Quantas linhas você encontraria na query anterior?
-- R-> 4
-- Monte uma query para encontrar somente as idades únicas.
SELECT DISTINCT Idade FROM Escola.Alunos;
-- Quantas linhas você encontraria na query anterior?
-- R-> 4

-- Contando resultados com o COUNT --

-- SELECT COUNT(*) FROM sakila.actor; -- '200'
-- SELECT COUNT(first_name) FROM sakila.actor; -- '200'
-- SELECT COUNT(DISTINCT first_name) FROM sakila.actor; -- quero que remova os nomes repetidos = '128'
-- SELECT COUNT(*) FROM sakila.address; -- '603'
-- SELECT COUNT(address2) FROM sakila.address; -- '599'
-- SELECT COUNT(district) FROM sakila.address; -- '603'
-- SELECT COUNT(district) FROM sakila.address WHERE district = 'Alberta'; -- '2'
-- SELECT COUNT(address2) FROM sakila.address WHERE address2 = ''; -- '599' campos vazios

-- Essa é a tabela staff do banco de dados sakila.
-- Como você poderia responder às seguintes questões?

-- Quantas senhas temos cadastradas nessa tabela?
-- SELECT COUNT(password) FROM sakila.staff; -- 1
-- -- Quantas pessoas temos no total trabalhando para nossa empresa?
-- SELECT COUNT(staff_id) FROM sakila.staff; -- 2
-- -- Quantos emails temos cadastrados nessa tabela?
-- SELECT COUNT(email) FROM sakila.staff; -- 2

-- Pesquisas gigantes? LIMIT isso ae! ###

SELECT COUNT(*) FROM sakila.rental; -- '16044'
SELECT * FROM sakila.rental; -- trás todos 16044 itens

# Query + LIMIT quantidade_de_resultados ###
SELECT * FROM sakila.rental LIMIT 10; -- 10 row(s) returned

# LIMIT OFFSET - Pulando linhas desnecessárias ###

# Qual query eu teria que montar para trazer os 10 primeiros resultados, a partir de JOHNNY?
SELECT * FROM sakila.actor LIMIT 10 OFFSET 4;

### Gerando resultados elegantes e organizados com o ORDER BY ###

SELECT * FROM sakila.address ORDER BY address ASC; -- 1 p/ 1000
SELECT * FROM sakila.address ORDER BY address DESC; -- 1000 p/ 1
SELECT * FROM sakila.address ORDER BY address DESC, district;
SELECT * FROM sakila.address ORDER BY district ASC, address DESC;

### Para os exercícios a seguir, vamos usar a tabela sakila.film
-- Escreva uma query que exiba todos os filmes cadastrados no banco de dados.
SELECT * FROM sakila.film; -- 1000 row(s) returned (limit)
-- Escreva uma query que exiba apenas o nome dos filmes, seu ano de lançamento e sua classificação .
SELECT title, release_year, rating FROM sakila.film; -- title, release_year, rating
-- Quantos filmes temos cadastrados?
SELECT COUNT(*) FROM sakila.film; -- '1000' (limit)

### Para os exercícios a seguir, vamos usar a tabela sakila.actor

-- Escreva uma query que exiba apenas os sobrenomes únicos cadastrados.
SELECT DISTINCT last_name FROM sakila.actor; -- 121 row(s) returned
-- Quantos sobrenomes únicos temos na tabela? 
SELECT COUNT(DISTINCT last_name) FROM sakila.actor; -- '121'
-- Ordene os valores na tabela em ordem crescente de sobrenomes e em ordem decrescente de nome.
SELECT * FROM sakila.actor ORDER BY last_name, first_name DESC; -- ASC & DESC
-- Vá até a tabela language do sakila e crie uma pesquisa que mostre os 5 idiomas cadastrados, mas não mostre o idioma english.
SELECT * FROM sakila.language LIMIT 5 OFFSET 1; -- # Italian, Japanese, Mandarin, French, German

-- Vá até a tabela film e selecione todos os dados da tabela. Pronto, fez isso?
SELECT * FROM sakila.film;
-- Agora crie uma query para encontrar os 20 primeiros filmes, incluindo o título, o ano de lançamento, a duração, a classificação indicativa
-- e o custo de substituição. Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição.
SELECT title, release_year, length, rating, replacement_cost FROM sakila.film ORDER BY length DESC, replacement_cost ASC LIMIT 20;











