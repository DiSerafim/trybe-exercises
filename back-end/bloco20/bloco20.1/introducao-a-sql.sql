-- > Back-end ------------- <---/ Back-end -------------------------- Back-end -//

-- > BLOCO - 20.1 ------------ <---/ INICIO --------------------------------------//
-- * Criar condicionais no SQL usando IF e CASE;
-- * Manipular strings no SQL;
-- * Usar as diversas funções matemáticas do MySQL;
-- * Extrair informações específicas sobre datas de uma tabela;
-- * Utilizar as funções de agregação AVG , MIN , MAX , SUM e COUNT;
-- * Exibir e filtrar dados de forma agrupada com GROUP BY e HAVING.

-- > CONTEÚDO do dia --------- <---/ INICIO --------------------------------------//

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

-- MySQL na linha de comando ----------------------------------------------------

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

-- > AULA ao VIVO ------------ <---/ INICIO --------------------------------------//

-- seleciona todas as colunas da tabela address
SELECT * FROM sakila.address;

-- seleciona as 2 colunas da tabela address
SELECT district, city_id FROM sakila.address;

-- seleciona um linha especifica da tabela
SELECT * FROM sakila.address WHERE address_id = 603;
-- 
-- 
-- > AULA ao VIVO ------------ <---/ FIM -----------------------------------------//

-- > EXECÍCIO do dia --------- <---/ INICIO --------------------------------------//

-- Ex 1: Descubra como fazer uma pesquisa em qualquer tabela sem utilizar uma linha de código usando o MySql Workbench.
-- R-> Basta clicar com botão direito na tabela e clicar em "select rows - limit 1000"

-- Ex 2: Descubra como é possível criar uma tabela sem usar código SQL usando o MySql Workbench.
-- R-> Basta clicar em create table usando o botão direito.

-- Ex 3: Feito isso, crie uma tabela com as seguintes restrições:
-- Nome da tabela: Filme
-- Colunas:
-- FilmeId - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente;
-- Descricao - não permite nulos, tipo texto (varchar(100));
-- AnoLancamento - não permite nulos, tipo int;
-- Nota - permite nulos, tipo int;
-- R-> Basta usar o GUI do Mysql Workbench para fazer isso.

-- Ex 4: Analise a tabela city e encontre a tabela à qual a coluna country_id faz referência.
-- R-> Ela faz referência à tabela country.

-- Ex 5: Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela city faz com a tabela country?
-- R-> N:1

-- Ex 6: Qual tipo de relacionamento a tabela country faz com a tabela city?
-- R-> 1:N

-- Ex 7: Abra tabela por tabela do banco sakila e encontre no mínimo 3 exemplos de um relacionamentos 1:N ou N:1.
-- R-> store -> staff / language -> film / film -> language

-- > EXECÍCIO do dia --------- <---/ FIM -----------------------------------------//
--> BLOCO - 20.1 ------------- <---/ FIM -----------------------------------------//


-- > BLOCO - 20.2 ------------ <---/ INICIO --------------------------------------//
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

-- > AULA ao VIVO ------------ <---/ INICIO --------------------------------------//
-- 20.2
SELECT * FROM sakila.country LIMIT 10 OFFSET 8;

SELECT COUNT(DISTINCT city_id) FROM sakila.address;

SELECT * FROM sakila.actor ORDER BY first_name;

SELECT * FROM sakila.customer ORDER BY store_id;

SELECT * FROM sakila.customer ORDER BY store_id DESC;

SELECT * FROM sakila.customer ORDER BY first_name, last_name;
-- > AULA ao VIVO ------------ <---/ FIM -----------------------------------------//

-- > EXECÍCIO do dia --------- <---/ INICIO --------------------------------------//
-- 20.2
-- Agora, a prática:
-- Exercício 1 : Faça as tarefas de 1 a 15.
SELECT * FROM AssignedTo;
SELECT * FROM Projects;
SELECT * FROM Scientists;
-- Para realizar os exercícios do 1 ao 15, restaure o banco de dados seguinte.
-- Esse banco de dados é de uso livre, sendo licenciado de acordo com os termos deste link.
-- Escreva uma query para exibir a string "This is SQL Exercise, Practice and Solution".
USE Scientists;
SELECT 'This is SQL Exercise, Practice and Solution';
-- Escreva uma query para exibir três números em três colunas.
SELECT 3, 2, 1;
-- Escreva uma query para exibir a soma dos números 10 e 15.
SELECT 10 + 15;
-- Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.
SELECT (9 * 9) - 9, 8 * 9;
-- Escreva uma query para exibir todas as informações de todos os cientistas.
SELECT * FROM Scientists;
-- Escreva uma query para exibir o nome como "Nome do Projeto" e as horas como "Tempo de Trabalho" de cada projeto.
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Projects;
-- Escreva uma query para exibir o nome dos cientistas em ordem alfabética.
SELECT Name FROM Scientists ORDER BY Name ASC;
-- Escreva uma query para exibir o nome dos Projetos em ordem alfabética descendente.
SELECT Name FROM Projects ORDER BY Name DESC;
-- Escreva uma query que exiba a string "O projeto Name precisou de Hours horas para ser concluído." para cada projeto.
SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído.') AS resultado FROM Projects;
-- Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.
SELECT Name, Hours FROM Projects ORDER BY Hours DESC LIMIT 3;
-- Escreva uma query para exibir o código de todos os projetos da tabela AssignedTo sem que haja repetições.
SELECT DISTINCT Project FROM AssignedTo;
-- Escreva uma query para exibir o nome do projeto com maior quantidade de horas.
SELECT Name FROM Projects ORDER BY Hours DESC LIMIT 1;
-- Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.
SELECT Name FROM Projects ORDER BY Hours ASC LIMIT 1 OFFSET 1;
-- Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.
SELECT * FROM Projects ORDER BY Hours ASC LIMIT 5; 
-- Escreva uma query que exiba a string "Existem Number cientistas na tabela Scientists.", em que Number se refira a quantidade de cientistas.
SELECT CONCAT('Existem ', COUNT(Name), 'cientistas na tabela Scientists.') AS resultado FROM Scientists;

-- Bônus
-- Exercício 2 : Para realizar as tarefas do 1 ao 4, restaure o seguinte banco de dados:
USE PiecesProviders;
-- Esse banco de dados é de uso livre, sendo licenciado de acordo com os termos deste link.

-- Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT.
SELECT Piece, Price FROM Provides WHERE Provider = 'RBT';
-- Escreve uma query para exibir todas as informações das cinco peças com os maiores preços.
SELECT Piece, Price FROM PiecesProviders.Provides ORDER BY Price DESC LIMIT 5; 
-- Escreva uma query para exibir o nome das empresas e preço das peças com os quatro maiores preços, começando a lista a partir do 3º item.
SELECT DISTINCT Provider, Price FROM PiecesProviders.Provides ORDER BY Price DESC LIMIT 4 OFFSET 3;
-- Escreva uma query para exibir todas as informações das peças que são providas pela empresa HAL. Ordene o resultado pelos preços das peças de forma decrescente.
SELECT * FROM PiecesProviders.Provides WHERE Provider = 'HAL' ORDER BY Price DESC;
-- Escreva uma query para exibir por quantas empresas a peça 1 é provida.
SELECT COUNT(Provider) FROM PiecesProviders.Provides WHERE Piece = 1;
-- Exercício 7 : Usando WHERE , faça os exercícios deste link.
# https://www.w3schools.com/sql/exercise.asp?filename=exercise_where1, Resolvido.
-- Exercício 8 : Aplicando Restrições, faça os exercícios deste link.
# https://sqlbolt.com/lesson/select_queries_with_constraints
-- Exercícios 9 : Estude e faça os exercícios das páginas 1 a 3 deste link.
# http://www.sqlcourse.com/intro.html

-- Exercício 10 : Exercícios de comparação de valores. Faça os exercícios deste link.
# 1 Leia as notas sobre esta tabela. Observe o resultado da execução deste comando SQL para mostrar o nome, continente e população de todos os países.
-- >> SELECT name, continent, population FROM world;
# 2 Como usar WHERE para filtrar registros. Mostre o nome dos países que têm uma população de pelo menos 200 milhões. 200 milhões é 200000000, há oito zeros.
-- >> SELECT name FROM world WHERE population >= 200000000
# 3 Dê o name eo PIB para os países com um populationde pelo menos 200 milhões. AJUDA: Como calcular o PIB per capita.
-- >> SELECT name, gdp/population FROM world WHERE population > 200000000;
# 4 Mostrar o namee populationem milhões para os países da continent'América do Sul'. Divida a população por 1000000 para obter a população em milhões.
-- >> SELECT name, population/1000000 FROM world WHERE continent = 'South America';
# 5. Show the name and population for France, Germany, Italy
-- >> SELECT name, population FROM world WHERE name = 'France'
-- >> SELECT name, population FROM world WHERE name = 'Germany'
-- >> SELECT name, population FROM world WHERE name = 'Italy'

# ... + https://sqlzoo.net/wiki/SELECT_from_WORLD_Tutorial
-- > EXECÍCIO do dia --------- <---/ FIM -----------------------------------------//

--> BLOCO - 20.2 ------------- <---/ FIM -----------------------------------------//


-- > BLOCO - 20.3 ------------ <---/ INICIO --------------------------------------//

-- > CONTEÚDO do dia --------- <---/ INICIO --------------------------------------//
-- > CONTEÚDO do dia --------- <---/ FIM -----------------------------------------//

-- > AULA ao VIVO ------------ <---/ INICIO --------------------------------------//
-- > AULA ao VIVO ------------ <---/ FIM -----------------------------------------//

-- > EXECÍCIO do dia --------- <---/ INICIO --------------------------------------//
-- > EXECÍCIO do dia --------- <---/ FIM -----------------------------------------//

--> BLOCO - 20.3 ------------- <---/ FIM -----------------------------------------//


-- MANIPULAÇÃO DE STRINGS SQL <--</

-- Converte o texto da string para CAIXA ALTA
SELECT UCASE('Oi, eu sou uma string'); -- 'OI, EU SOU UMA STRING'

-- -- Converte o texto da string para caixa baixa
SELECT LCASE('Oi, eu sou uma string'); -- 'oi, eu sou uma string'

-- Substitui as ocorrências de uma substring em uma string
SELECT REPLACE('Oi, eu sou uma string', 'string', 'cadeia de caracteres'); -- 'Oi, eu sou uma cadeia de caracteres'

-- Retorna a parte da esquerda de uma string de acordo com o
-- número de caracteres especificado
SELECT LEFT('Oi, eu sou uma string', 3); -- 'Oi,'

-- Retorna a parte da direita de uma string de acordo com o
-- número de caracteres especificado
SELECT RIGHT('Oi, eu sou um string', 6); -- 'string'

-- Exibe o tamanho, em caracteres, da string
SELECT LENGTH('Oi, eu sou uma string'); -- 21

-- Extrai parte de uma string de acordo com o índice de um caractere inicial
-- e a quantidade de caracteres a extrair
SELECT SUBSTRING('Oi, eu sou uma string', 5, 2); -- 'eu'

-- Se a quantidade de caracteres a extrair não for definida,
-- então a string será extraída do índice inicial definido, até o seu final
SELECT SUBSTRING('Oi, eu sou uma string', 5); -- 'eu sou uma string'

-- PARA TESTAR, execute o código abaixo no seu ambiente local, brinque com as linhas a seguir e depois volte aqui.
SELECT UCASE(title) FROM sakila.film LIMIT 10; -- 10 titulos em letras maiúsculas
SELECT LCASE(title) FROM sakila.film LIMIT 10; -- 10 titulos em letras minusculas
SELECT REPLACE(title, 'ACADEMY', 'FOO') FROM sakila.film WHERE film_id = 1; -- Substitui o título 'ACADEMY', 'FOO' pelo film_id = 1
SELECT LEFT(title, 7) FROM sakila.film WHERE film_id = 1; -- 'ACADEMY'
SELECT RIGHT(title, 8) FROM sakila.film WHERE film_id = 1; -- 'DINOSAUR'
SELECT LENGTH(title) FROM sakila.film WHERE film_id = 1; -- 16
SELECT SUBSTRING(title, 5, 2) FROM sakila.film WHERE film_id = 1; -- EM
SELECT SUBSTRING(title, 5) FROM sakila.film WHERE film_id = 1; -- 'EMY DINOSAUR'

-- PARA FIXAR <---</ Agora, vamos fixar os aprendizados com alguns desafios:
-- Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA.
SELECT UCASE('trybe');

-- Faça uma query que transforme a frase 'Você já ouviu falar do DuckDuckGo?' em 'Você já ouviu falar do Google?'.
SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo?', 'Google?');

-- Utilizando uma query , encontre quantos caracteres temos em 'Uma frase qualquer'.
SELECT LENGTH('Diego Serafim de Sousa');

-- Extraia e retorne a palavra "JavaScript" da frase 'A linguagem JavaScript está entre as mais usadas'.
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);

-- Por fim, padronize a string 'RUA NORTE 1500, SÃO PAULO, BRASIL' para que suas informações estejam todas em caixa baixa.
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');

-- CONDICIONAIS SQL <--</
SELECT * FROM sakila.film;

-- (IF)
SELECT title, IF (rental_rate > 0.99, 'CARO', 'BARATO') FROM sakila.film;

-- (CASE)
-- SELECT title, rental_rate, CASE when

SELECT * FROM sakila.film;