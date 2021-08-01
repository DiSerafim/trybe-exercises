-- > CONTEÚDO do dia --------- <---/ INICIO --------------------------------------//
-- 20.2
-- * Compreender o que é uma query SQL e quais são seus tipos de comando
-- * Gerar valores com SELECT
-- * Selecionar colunas individualmente com SELECT
-- * Renomear e gerar colunas em uma consulta com AS
-- * Concatenar colunas e valores com CONCAT
-- * Remover dados duplicados em uma consulta com DISTINCT
-- * Contar a quantidade de resultados em uma consulta com COUNT
-- * Limitar a quantidade de resultados em uma consulta com LIMIT
-- * Pular resultados em uma consulta com OFFSET
-- * Ordenar os resultados de uma consulta com ORDER BY

-- SELECT

SELECT 'Olá, bem-vindo ao SQL'; # 'Olá, bem-vindo ao SQL'
SELECT 10; # 10
SELECT now(); # '2021-07-31 16:51:01'
SELECT 20 * 2; # '40'
SELECT 50 / 2; # '25.0000'
SELECT 18 AS idade; # idade '18'
SELECT 2019 AS ano; # ano 2019
SELECT 'RAfael', 'Martins', 25, 'Desenvolvedor Web'; # 'RAfael', 'Martins', '25', 'Desenvolvedor Web'
SELECT 'RAfael' AS nome, 'Martins' AS sobrenome, '25' AS idade, 'Desenvolvedor Web' AS 'Área de atuação'; # nome 'RAfael', sobrenome 'Martins', idade '25', Área de atuação 'Desenvolvedor Web'

-- Vamos praticar

-- Monte uma query que exiba seu nome na tela;
SELECT 'Diego'; # 'Diego'
-- Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;
SELECT 'Diego', 'Serafim', 'Belém', '34'; # 'Diego', 'Serafim', 'Belém', '34'
-- Monte uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o AS , que é chamado de alias na linguagem SQL ( alias é como um apelido no português);
SELECT 'Diego' AS nome, 'Serafim' AS sobrenome, 'Belém' AS 'cidade natal', '34' AS idade; # nome 'Diego', sobrenome'Serafim', cidade natal 'Belém', idade '34'
-- Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT;
SELECT 13 * 8; # 104
-- Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome "Data Atual".
SELECT now() AS 'Data Atual'; # '2021-07-31 17:39:21'

-- Trás a coluna city da tabela city
SELECT city FROM sakila.city;

-- Então vamos fixar isso?
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
# SELECT * FROM sakila.nome_da_tabela;

-- CONCAT (Junção)

-- todas tabelas de actor
SELECT * FROM sakila.actor;
-- ficou estranho? Eu também achei!
SELECT CONCAT(first_name, last_name) FROM sakila.actor;
-- Tente agora a query a seguir.
SELECT CONCAT(first_name, ' ', last_name) FROM sakila.actor;
-- Mas dá para melhorar? Dá!
SELECT CONCAT(first_name, ' ', last_name) AS 'Nome Completo' FROM sakila.actor;

-- Vamos brincar um pouco mais com isso?
-- Monte uma query que exiba o título e o ano de lançamento dos filmes em uma coluna e dê a ela o nome Lançamento do Filme.
SELECT CONCAT(title, ' ', release_year) AS 'Lançamento do Filme' FROM sakila.film;
-- Crie uma query que exiba o título do filme e sua classificação indicativa (PG, G, NC-17) em apenas uma coluna. Dê a ela o nome Classificação.
SELECT CONCAT(title, ' ', rating) AS Classificação FROM sakila.film;
-- Monte uma query que exiba a rua e o distrito de cada registro em uma coluna apenas, e dê a essa coluna o nome Endereço.
SELECT CONCAT(address, ' ', district) AS Endereço FROM sakila.address;

-- DISTINCT (Dados Repetidos)

SELECT first_name, last_name FROM sakila.actor; # 200 row(s) returned
SELECT DISTINCT first_name, last_name FROM sakila.actor; # 199 row(s) returned
SELECT DISTINCT first_name FROM sakila.actor; # 128 row(s) returned

-- DATABASE `Escola`;
-- Monte uma query para encontrar pares únicos de nomes e idades.
SELECT DISTINCT Nome, Idade FROM Escola.Alunos;
-- Quantas linhas você encontraria na query anterior?
# 5 row(s) returned
-- Monte uma query para encontrar somente os nomes únicos.
SELECT DISTINCT Nome FROM Escola.Alunos;
-- Quantas linhas você encontraria na query anterior?
# 4 row(s) returned
-- Monte uma query para encontrar somente as idades únicas.
SELECT DISTINCT Idade FROM Escola.Alunos;
-- Quantas linhas você encontraria na query anterior?
# 4 row(s) returned

-- COUNT (Contando resultados)

SELECT COUNT(*) FROM sakila.actor; # '200'
SELECT COUNT(first_name) FROM sakila.actor; # '200'
SELECT COUNT(DISTINCT first_name) FROM sakila.actor; # '128'
SELECT COUNT(DISTINCT first_name, last_name) FROM sakila.actor; # '199'
SELECT COUNT(district) FROM sakila.address; # '603'
SELECT COUNT(district) FROM sakila.address WHERE district = 'Alberta'; # '2'
SELECT COUNT(address2) FROM sakila.address WHERE address2 = ''; # '599'

-- Essa é a tabela staff do banco de dados sakila. Como você poderia responder às seguintes questões?
-- Quantas senhas temos cadastradas nessa tabela?
SELECT COUNT(password) FROM sakila.staff; # '1'
-- Quantas pessoas temos no total trabalhando para nossa empresa?
SELECT COUNT(*) FROM sakila.staff; # '2'
-- Quantos emails temos cadastrados nessa tabela?
SELECT COUNT(email) FROM sakila.staff; # '2'

-- LIMIT (Pesquisas gigantes)

SELECT COUNT(*) FROM sakila.rental; # '16044'
SELECT * FROM sakila.rental; # 1000 row(s) returned
SELECT * FROM sakila.rental LIMIT 10; # 10 row(s) returned

-- LIMIT OFFSET (Pulando linhas desnecessárias)

SELECT * FROM sakila.rental LIMIT 10 OFFSET 3; # 10 row(s) returned, apartir do ID 4
SELECT * FROM sakila.actor LIMIT 10 OFFSET 4;

-- ORDER BY (organizando)

-- ordem crescente
SELECT * FROM sakila.address ORDER BY address ASC;
-- ordem decrescente
SELECT * FROM sakila.address ORDER BY address DESC;
-- ordem decrescente
SELECT * FROM sakila.address ORDER BY address DESC, district;

-- Para os exercícios a seguir, vamos usar a tabela sakila.film
-- Escreva uma query que exiba todos os filmes cadastrados no banco de dados.
SELECT * FROM sakila.film;
-- Escreva uma query que exiba apenas o nome dos filmes, seu ano de lançamento e sua classificação.
SELECT title, release_year, rating FROM sakila.film;
-- Quantos filmes temos cadastrados?
SELECT COUNT(*) FROM sakila.film;

-- Para os exercícios a seguir, vamos usar a tabela sakila.actor
SELECT * FROM sakila.actor; # 200
-- Escreva uma query que exiba apenas os sobrenomes únicos cadastrados.
SELECT DISTINCT last_name FROM sakila.actor; # 121 row(s) returned
-- Quantos sobrenomes únicos temos na tabela?
SELECT COUNT(DISTINCT last_name) FROM sakila.actor; # 121
-- Ordene os valores na tabela em ordem crescente de sobrenomes e em ordem decrescente de nome.
SELECT * FROM sakila.actor ORDER BY last_name ASC, first_name DESC;
-- Vá até a tabela language do sakila e crie uma pesquisa que mostre os 5 idiomas cadastrados, mas não mostre o idioma english.
SELECT * FROM sakila.language; # para exibir a tabela
SELECT name FROM sakila.language LIMIT 10 OFFSET 1;
-- Vá até a tabela film e selecione todos os dados da tabela. Pronto, fez isso?
SELECT * FROM sakila.film;
-- Crie uma query para encontrar os 20 primeiros filmes, incluindo título, ano de lançamento, duração, classificação indicativa e o custo de substituição. 
-- Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição.
SELECT title, release_year, length, rating, replacement_cost FROM sakila.film ORDER BY length DESC, replacement_cost ASC LIMIT 20;
-- 

-- > CONTEÚDO do dia --------- <---/ FIM -----------------------------------------//
