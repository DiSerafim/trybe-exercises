-- > Back-end ------------- <---/ Back-end -------------------------- Back-end -//

####################################################################################
-- > BLOCO - 20.1 ------------ <---/ INICIO --------------------------------------//
##############################
-- > CONTEÚDO do dia - 20.1 -- <---/ INICIO --------------------------------------//

-- * Criar condicionais no SQL usando IF e CASE;
-- * Manipular strings no SQL;
-- * Usar as diversas funções matemáticas do MySQL;
-- * Extrair informações específicas sobre datas de uma tabela;
-- * Utilizar as funções de agregação AVG , MIN , MAX , SUM e COUNT;
-- * Exibir e filtrar dados de forma agrupada com GROUP BY e HAVING.

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

-- > EXERCÍCIO do dia - 20.1 --- <---/ FIM -----------------------------------------//
##############################
-- > BLOCO - 20.1 ------------- <---/ FIM -----------------------------------------//
####################################################################################

####################################################################################
-- > BLOCO - 20.2 ------------ <---/ INICIO --------------------------------------//
##############################
-- > CONTEÚDO do dia - 20.2 -- <---/ INICIO --------------------------------------//

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

-- > CONTEÚDO do dia - 20.2 -- <---/ FIM -----------------------------------------//
##############################
-- > AULA ao VIVO - 20.2 ----- <---/ INICIO --------------------------------------//

-- Encontrando dados

-- QUERY
-- DISTINCT
-- LIMIT
-- OFFSET
-- COUNT
-- ORDER BY

SELECT * FROM sakila.country LIMIT 10 OFFSET 8;

SELECT COUNT(DISTINCT city_id) FROM sakila.address;

SELECT * FROM sakila.actor ORDER BY first_name;

SELECT * FROM sakila.customer ORDER BY store_id;

SELECT * FROM sakila.customer ORDER BY store_id DESC;

SELECT * FROM sakila.customer ORDER BY first_name, last_name;

-- > AULA ao VIVO - 20.2 ----- <---/ FIM -----------------------------------------//
##############################
-- > EXERCÍCIO do dia - 20.2 -- <---/ INICIO --------------------------------------//

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

-- > EXERCÍCIO do dia - 20.2 -- <---/ FIM -----------------------------------------//
##############################
-- > BLOCO - 20.2 ------------- <---/ FIM -----------------------------------------//
####################################################################################

####################################################################################
-- > BLOCO - 20.3 ------------ <---/ INICIO --------------------------------------//
##############################
-- > CONTEÚDO do dia - 20.3 -- <---/ INICIO --------------------------------------//

-- * Filtrar resultados de consultas com o WHERE .
-- * Utilizar operadores booleanos e relacionais em consultas.
-- * Criar consultas mais dinâmicas e maleáveis com LIKE .
-- * Fazer consultas que englobam uma faixa de resultados com IN e BETWEEN .
-- * Encontrar e separar resultados que incluem datas.

-- WHERE

SELECT * FROM sakila.actor WHERE last_name = 'DAVIS'; # 3 row(s) returned
SELECT * FROM sakila.actor WHERE actor_id = 101; # 1 row(s) returned
# >
SELECT * FROM sakila.film WHERE length > 50 ORDER BY length; # 963 row(s) returned
# <
SELECT * FROM sakila.film WHERE length < 50 ORDER BY length; # 28 row(s) returned
# <> 'diferente'
# AND 'E'
SELECT * FROM sakila.film WHERE title <> 'ALIEN CENTER' AND replacement_cost > 20; # 486 row(s) returned
# OR 'OU'
SELECT * FROM sakila.film WHERE rating = 'G' OR rating = 'PG' OR rating = 'PG-13'; # 595 row(s) returned
# IS NULL 'É Nulo'
SELECT * FROM sakila.rental WHERE return_date IS NULL; # 183 row(s) returned
# IS NOT NULL 'Não Nulo'
SELECT * FROM sakila.address WHERE address2 IS NOT NULL; # 599 row(s) returned
# IS TRUE 'Verdadeiro'
SELECT * FROM sakila.staff WHERE active IS TRUE; # 2 row(s) returned
# IS FALSE 'Falso'
SELECT * FROM sakila.staff WHERE active IS FALSE;
# NOT LIKE 'Ñ começa'
SELECT * FROM sakila.film WHERE title NOT LIKE 'academy%'; # 999 row(s) returned

# AND tem preferência sobre o operador OR 
SELECT * FROM sakila.payment WHERE amount = 0.99 OR amount = 2.99 AND staff_id = 2;
# AND compara o resultado de ambos os lados e ambas as condições são retornados.
SELECT * FROM sakila.payment WHERE (amount = 0.99 OR amount = 2.99) AND staff_id = 2;

-- Para fixar
-- Classificação indicativa do banco de dados sakila.
# G = permitido para todos
# PG = permitido para crianças menores de 13 anos
# PG-13 = permitido para pessoas com mais de 13 anos
# R = permitido para pessoas com mais de 17 anos
# NC-17 = permitido apenas para adultos

-- Precisamos identificar os dados do cliente com o e-mail LEONARD.SCHOFIELD@sakilacustomer.org
SELECT * FROM sakila.customer where email = 'LEONARD.SCHOFIELD@sakilacustomer.org'; # customer_id, store_id, first_name, last_name, email, address_id, active, create_date, last_update
-- Precisamos de um relatório dos nomes dos clientes, em ordem alfabética , que não estão mais ativos no nosso sistema e pertencem à loja com o id = 2 , e não inclua o cliente KENNETH no resultado.
SELECT first_name FROM sakila.customer WHERE active = 0 AND store_id = 2 AND first_name <> 'KENNETH' ORDER BY first_name ASC; # 6 row(s) returned
-- O setor financeiro quer saber título, descrição, ano de lançamento e valor do custo de substituição(replacement_cost), dos 100 filmes com o maior custo de substituição, do valor mais alto ao mais baixo, entre os filmes feitos para menores de idade e que têm o custo mínimo de substituição de $18,00 dólares. Em caso de empate, ordene em ordem alfabética pelo título.
SELECT title, description, release_year, replacement_cost FROM sakila.film WHERE rating <> 'NC-17' AND replacement_cost > 18.00 ORDER BY replacement_cost DESC, title ASC LIMIT 100; # 100 row(s) returned
-- Quantos clientes estão ativos e na loja 1?
SELECT COUNT(customer_id) AS 'Cliente ativos' FROM sakila.customer WHERE active = 1 AND store_id = 1; # '318'
-- Mostre todos os detalhes dos clientes que não estão ativos na loja 1.
SELECT * FROM sakila.customer WHERE active = 0 AND store_id = 1; # 8 row(s) returned
-- Precisamos descobrir quais são os 50 filmes feitos apenas para adultos com a menor taxa de aluguel, para que possamos fazer uma divulgação melhor desses filmes. Em caso de empate, ordene em ordem alfabética pelo título.
SELECT * FROM sakila.film WHERE rating = 'NC-17' ORDER BY rental_rate, title LIMIT 50; # 50 row(s) returned

-- LIKE (Pesquisas Dinâmicas e Maleáveis)

-- Encontra qualquer resultado finalizando com "don"
SELECT * FROM sakila.film WHERE title LIKE '%don'; # 6 row(s) returned
-- Encontra qualquer resultado iniciando com "plu"
SELECT * FROM sakila.film WHERE title LIKE 'plu%'; # 1 row(s) returned
-- Encontra qualquer resultado que contém "plu"
SELECT * FROM sakila.film WHERE title LIKE '%plu%'; # 4 row(s) returned
-- Encontra qualquer resultado que inicia com "p" e finaliza com "r"
SELECT * FROM sakila.film WHERE title LIKE 'p%r'; # 7 row(s) returned
-- Encontra qualquer resultado em que o segundo caractere da frase é "C"
SELECT * FROM sakila.film WHERE title LIKE '_C%'; # 9 row(s) returned
-- Encontra qualquer resultado em que o título possui exatamente 8 caracteres
SELECT * FROM sakila.film WHERE title LIKE '________'; # 6 row(s) returned
-- Encontra todas as palavras com no mínimo 3 caracteres e que iniciam com E
SELECT * FROM sakila.film WHERE title LIKE 'E___'; # 32 row(s) returned

-- Para Fixar

-- Mostre todos os detalhes dos filmes que contêm a palavra ace no nome.
SELECT * FROM sakila.film WHERE title LIKE '%ace%'; # 15 row(s) returned
-- Mostre todos os detalhes dos filmes cujas descrições finalizam com china.
SELECT * FROM sakila.film WHERE description LIKE '%china'; # 37 row(s) returned
-- Mostre todos os detalhes dos dois filmes cujas descrições contêm a palavra girl e o título finaliza com a palavra lord.
SELECT * FROM sakila.film WHERE description LIKE '%girl%' AND title LIKE '%lord' LIMIT 2; # 2 row(s) returned
-- Mostre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra gon.
SELECT title FROM sakila.film WHERE title LIKE '___gon%'; # 2 row(s) returned
-- Mostre o único caso em que, a partir do 4° caractere no título do filme, tem-se a palavra gon e a descrição contém a palavra Documentary.
SELECT * FROM sakila.film WHERE title LIKE '___gon%' AND description LIKE '%Documentary%'; # 1 row(s) returned
-- Mostre os dois filmes cujos títulos ou finalizam com academy ou iniciam com mosquito.
SELECT * FROM sakila.film WHERE title LIKE '%academy' OR title LIKE 'mosquito%'; # 2 row(s) returned
-- Mostre os seis filmes que contêm as palavras monkey e sumo em suas descrições.
SELECT * FROM sakila.film WHERE description LIKE '%monkey%' AND description LIKE '%sumo%'; # 6 row(s) returned

-- IN & BETWEEN (Emglobamdo resultados)

# OR
SELECT * FROM sakila.actor WHERE first_name = 'PENELOPE' OR first_name = 'NICK' OR first_name = 'ED' OR first_name = 'JENNIFER'; # 11 row(s) returned
# IN
SELECT * FROM sakila.actor WHERE first_name IN ('PENELOPE', 'NICK', 'ED', 'JENNIFER'); # 11 row(s) returned
SELECT * FROM sakila.customer WHERE customer_id IN (1, 2, 3, 4, 5); # 5 row(s) returned

-- Como você faria, então, para encontrar, usando o IN , todos os detalhes sobre o aluguel dos clientes com os seguintes ids: 269, 239, 126, 399, 142?
SELECT * FROM sakila.rental WHERE rental_id IN (269, 239, 126, 399, 142); # 5 row(s) returned
-- Como encontraria todas as informações sobre os endereços que estão registrados nos distritos de QLD, Nagasaki, California, Attika, Mandalay, Nantou e Texas?
SELECT * FROM sakila.address WHERE district IN ('QLD', 'Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou', 'Texas'); # 21 row(s) returned

-- BETWEEN (Operador)

# Valor inicial e final
SELECT title, length FROM sakila.film WHERE length BETWEEN 100 AND 120; # 165 row(s) returned
# Com strings
SELECT * FROM sakila.language WHERE name BETWEEN 'Italian' AND 'Mandarin' ORDER BY name; # 1000 row(s) returned
# Com datas
SELECT rental_id, rental_date FROM sakila.rental WHERE rental_date BETWEEN '2005-06-27' AND '2005-07-17'; # 1000 row(s) returned

-- Para Fixar

-- Mostre o nome, sobrenome e e-mail dos clientes com os seguintes sobrenomes: hicks, crawford, henry, boyd, mason, morales e kennedy , ordenados por nome em ordem alfabética.
SELECT first_name, last_name, email FROM sakila.customer WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy') ORDER BY first_name;
-- Mostre o e-mail dos clientes com os address_id 172, 173, 174, 175 e 176, ordenados em ordem alfabética.
SELECT email FROM sakila.customer WHERE address_id BETWEEN 172 AND 176 ORDER BY email;
-- Descubra quantos pagamentos foram feitos entre 01/05/2005 e 01/08/2005. As datas estão armazenadas no formato ano/mês/dia, diferente do formato brasileiro, que é dia/mês/ano.
SELECT COUNT(*) AS 'Pagamentos feitos' FROM sakila.payment WHERE payment_date BETWEEN '2005-05-01' AND '2005-08-01';
-- Mostre o título, ano de lançamento e duração do empréstimo de todos os filmes com a duração de empréstimo de 3 a 6. Classifique em filmes com maior duração de empréstimo primeiro. Em caso de empate, ordene em ordem alfabética pelo título.
SELECT title, release_year, rental_duration FROM sakila.film WHERE rental_duration BETWEEN 3 AND 6 ORDER BY rental_duration DESC, title;
-- Monte um relatório que exiba o título e classificação dos 500 primeiros filmes direcionados para as classificações indicativas G, PG e PG-13 . Os resultados devem estar ordenados por título.
SELECT title, rating FROM sakila.film WHERE rating IN ('G', 'PG', 'PG-13') ORDER BY title LIMIT 500;

-- DATE - YYYY-MM-DD de 1001-01-01 até 9999-12-31
-- DATETIME - YYYY-MM-DD HH:MM:SS de 1000-01-01 00:00:00 até 9999-12-31 23:59:59.
SELECT * FROM sakila.payment;

-- DATE(coluna_do_tipo_date):

# Encontra todos os pagamentos deste dia, ignorando horas, minutos e segundos
SELECT * FROM sakila.payment WHERE DATE(payment_date) = '2005-07-31'; # Q.Cost = 1632.85

-- LIKE

-- Encontra todos pagamentos deste dia, ignorando horas, minutos e segundos
SELECT * FROM sakila.payment WHERE payment_date LIKE '2005-07-31%'; # Q.Cost = 1632.85

-- Encontra um pagamento com dia e hora exatos
SELECT * FROM sakila.payment WHERE payment_date LIKE '2005-08-20 00:30:52'; # Q.Cost = 1632.85

-- BETWEEN

-- Encontra pagamentos especificando um valor mínimo e um valor máximo para a data
SELECT * FROM sakila.payment WHERE payment_date BETWEEN '2005-05-26 00:00:00' AND '2005-05-27 23:59:59'; # Q.Cost = 1632.85

-- Partes de uma data

# YYYY-MM-DD
SELECT DATE(payment_date) FROM sakila.payment;
# Ano
SELECT YEAR(payment_date) FROM sakila.payment;
# Mês
SELECT MONTH(payment_date) FROM sakila.payment;
# Dia
SELECT DAY(payment_date) FROM sakila.payment;
# Hora
SELECT HOUR(payment_date) FROM sakila.payment;
# Minuto
SELECT MINUTE(payment_date) FROM sakila.payment;
# Segundo
SELECT SECOND(payment_date) FROM sakila.payment;
 
-- Para Fixar

-- Quantos pagamentos temos com a data de retorno 2005-05-25? Há múltiplas maneiras possíveis de encontrar a resposta.
SELECT * FROM sakila.payment;
SELECT COUNT(*) AS pagamentos FROM sakila.payment WHERE DATE(payment_date) = '2005-05-25'; # '137'
-- Quantos pagamentos foram feitos entre 01/07/2005 e 22/08/2005?
SELECT COUNT(*) AS pagamentos FROM sakila.payment WHERE payment_date BETWEEN '2005-07-01' AND '2005-08-22'; # '11173'
-- Usando a tabela rental, extraia data, ano, mês, dia, hora, minuto e segundo dos registros com rental_id = 10330. Utilize a coluna rental_date para extrair as informações.
SELECT DATE(rental_date) AS data, YEAR(rental_date) AS ano, MONTH(rental_date) AS mês, DAY(rental_date) AS dia, HOUR(rental_date) AS hora, MINUTE(rental_date) AS minuto, SECOND(rental_date) AS segundo
FROM sakila.rental WHERE rental_id = 10330;
-- Monte uma query que retorne todos os dados do pagamento feito no dia 28/07/2005 a partir das 22 horas.
SELECT * FROM sakila.payment WHERE DATE(payment_date) = '2005-07-28' AND HOUR(payment_date) >= 22; # 47 row(s) returned

-- > CONTEÚDO do dia - 20.3 -- <---/ FIM -----------------------------------------//
##############################
-- > AULA ao VIVO - 20.3 ----- <---/ INICIO --------------------------------------//

-- WHERE
-- IN
-- NOT IN
-- BETWEEN
-- LIKE

-- WHERE
SELECT * FROM sakila.actor;
SELECT * FROM sakila.actor WHERE first_name = 'johnny';
SELECT * FROM sakila.actor WHERE first_name = 'johnny' AND last_name = 'Cage';
SELECT * FROM sakila.actor WHERE first_name = 'johnny' OR last_name = 'Cage';
SELECT title, rental_duration from sakila.film WHERE rental_duration = 6;
SELECT title, rental_duration from sakila.film WHERE rental_duration <> 6;
SELECT title, rental_duration, rating from sakila.film WHERE rental_duration = 6 AND rating = 'r';
SELECT title, rental_duration, rating from sakila.film WHERE rental_duration = 6 AND rating = 'r' OR rating = 'PG-13';
SELECT title, rental_duration, rating from sakila.film WHERE title = 'AFFAIR PREJUDICE' OR title = 'AFRICAN EGG' OR title = 'AGENT TRUMAN' OR title = 'AIRPLANE SIERRA';

-- IN
SELECT * FROM sakila.film;
SELECT * FROM sakila.film WHERE title IN ('AFFAIR PREJUDICE', 'AFRICAN EGG', 'AGENT TRUMAN', 'AIRPLANE SIERRA');

-- NOT IN
SELECT * FROM sakila.film WHERE title NOT IN ('AFFAIR PREJUDICE', 'AFRICAN EGG', 'AGENT TRUMAN', 'AIRPLANE SIERRA');

-- BETWEEN
SELECT * FROM sakila.film;
SELECT * FROM sakila.film WHERE length BETWEEN 50 AND 130;
SELECT * FROM sakila.film WHERE length BETWEEN 50 AND 130 ORDER BY length;
SELECT * FROM sakila.actor WHERE first_name BETWEEN 'b' AND 'd' ORDER BY first_name; # somente o 'd' não funciona 
SELECT * FROM sakila.actor WHERE first_name BETWEEN 'b' AND 'dZ' ORDER BY first_name; # funciona (gambiarra)
SELECT * FROM sakila.actor WHERE first_name BETWEEN 'bela' AND 'dustin' ORDER BY first_name;
SELECT * FROM sakila.rental WHERE rental_date BETWEEN '2005-05-27' AND '2005-06-03';

# '2021-08-06 15:02:32'
SELECT NOW() AS 'Data e hora atual';

# '2021-08-06'
SELECT DATE(NOW()) AS 'Data atual';

# '2021-08-06'
SELECT CURDATE() AS 'Data atual'; 

# '15:07:34'
SELECT CURTIME() AS 'Hora atual';

# '15'
SELECT HOUR(NOW()) AS 'Hora atual';

# '15:26:34'
SELECT TIME(NOW()) AS 'Hora atual';

# '2021'
SELECT YEAR(NOW()) AS 'Ano';

# '8'
SELECT MONTH(NOW()) AS 'Mês';

# '6'
SELECT DAY(now()) AS 'Dia';

SELECT * FROM sakila.rental WHERE DATE(rental_date) = '2005-05-26'; # 174 row(s) returned
SELECT * FROM sakila.rental WHERE rental_date BETWEEN '2005-05-26 00:00:00' AND '2005-05-26 12:00:00'; # 91 row(s) returned

-- LIKE

SELECT * FROM sakila.customer WHERE first_name LIKE '%fer%'; # tem 'fer' no meio da frase
SELECT * FROM sakila.customer WHERE first_name LIKE '%dra'; # tem 'dra' no fim da frase
SELECT * FROM sakila.customer WHERE first_name LIKE 'jun%'; # tem 'jun' no início da frase
SELECT * FROM sakila.customer WHERE first_name LIKE 'J%E'; # começa com 'J' termina com 'E'
SELECT * FROM sakila.customer WHERE first_name LIKE '__ME%'; # a 3a e 4a letra são 'ME'... 
SELECT * FROM sakila.customer WHERE first_name LIKE '____'; # possui 4 caracteres

-- > AULA ao VIVO - 20.3 ----- <---/ FIM -----------------------------------------//
##############################
-- > EXERCÍCIO do dia - 20.3 -- <---/ INICIO --------------------------------------//

-- Exercício 1
## banco-usado-scientists.sql
## banco-usado-PecasFornecedores.sql

-- Exercício 2
-- 1 Escreva uma query para exibir todas as peças que começam com GR.
SELECT * FROM PecasFornecedores.Pecas WHERE name LIKE 'gr%'; # 3 row(s) returned
-- 2 Escreva uma query para exibir todos os fornecimentos que contenham a peça com code 2. Organize o resultado por ordem alfabética de fornecedor.
SELECT * FROM PecasFornecedores.Fornecimentos WHERE peca = 2 ORDER BY Fornecedor; # 3 row(s) returned
-- 3 Escreva uma query para exibir as peças, preço e fornecedor de todos os fornecimentos em que o código do fornecedor tenha a letra N.
SELECT peca, Preco, Fornecedor FROM PecasFornecedores.Fornecimentos WHERE Fornecedor LIKE '%N%'; # 4 row(s) returned
-- 4 E screva uma query para exibir todas as informações dos fornecedores que são empresas limitadas (LTDA). Ordene os resultados em ordem alfabética decrescente.
SELECT * FROM PecasFornecedores.Fornecedores WHERE name LIKE '%LTDA' ORDER BY name DESC; # 2 row(s) returned
-- 5 Escreva uma query para exibir o número de empresas (fornecedores) que contém a letra F no código.
SELECT COUNT(*) FROM PecasFornecedores.Fornecedores WHERE code LIKE '%F%'; # 2
-- 6 Escreva uma query para exibir os fornecimentos onde as peças custam mais de R$15,00 e menos de $40,00. Ordene os resultados por ordem crescente.
SELECT * FROM PecasFornecedores.Fornecimentos WHERE Preco BETWEEN 15 AND 40 ORDER BY Preco ASC; # 3 row(s) returned
-- 7 Escreva uma query para exibir o número de vendas feitas entre o dia 15/04/2018 e o dia 30/07/2019.
SELECT COUNT(*) FROM PecasFornecedores.Vendas WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30'; # 3

-- Bônus
-- Exercício 3
-- Use o banco de dados Scientists restaurado no dia anterior.
SELECT * FROM Scientists;

-- 1 Escreva uma query para exibir todas as informações de todos os cientistas que possuam a letra 'e' em seu nome.
SELECT * FROM Scientists.Scientists WHERE Name LIKE '%e%'; # 12 row(s) returned
-- 2 Escreva uma query para exibir o nome de todos os projetos cujo o código inicie com a letra A. Ordene o resultado em ordem alfabética.
SELECT Name FROM Scientists.Projects WHERE Code LIKE 'A%' ORDER BY Name; # 9 row(s) returned
-- 3 Escreva uma query para exibir o código e nome de todos os projetos que possuam em seu código o número 3. Ordene o resultado em ordem alfabética.
SELECT Code, Name FROM Scientists.Projects WHERE Code LIKE '%3%' ORDER BY Name; # 3 row(s) returned
-- 4 Escreva uma query para exibir todos os cientistas (valores numéricos) cujos projetos sejam AeH3, Ast3 ou Che1.
SELECT Scientist FROM Scientists.AssignedTo WHERE Project IN('AeH3', 'Ast3', 'Che1'); # 7 row(s) returned
-- 5 Escreva uma query para exibir todas as informações de todos os projetos com mais de 500 horas.
SELECT * FROM Scientists.Projects WHERE Hours > 500; # 5 row(s) returned
-- 6 Escreva uma query para exibir todas as informações de todos os projetos cujas horas sejam maiores que 250 e menores 800.
SELECT * FROM Scientists.Projects WHERE Hours BETWEEN 250 AND 800; # 7 row(s) returned
SELECT * FROM Scientists.Projects WHERE Hours > 250 AND Hours < 800; # 7 row(s) returned
-- 7 Escreva uma query para exibir o nome e o código de todos os projetos cujo nome NÃO inicie com a letra A.
SELECT Name, Code FROM Scientists.Projects WHERE Name NOT LIKE 'A%'; # 4 row(s) returned
-- 8 Escreva uma query para exibir o nome de todos os projetos cujo código contenha a letra H.
SELECT Name FROM Scientists.Projects WHERE Code LIKE '%H%';

-- > EXERCÍCIO do dia - 20.3 -- <---/ FIM -----------------------------------------//
##############################
-- > BLOCO - 20.3 ------------- <---/ FIM -----------------------------------------//
####################################################################################

####################################################################################
-- > BLOCO - 20.4 ------------ <---/ INICIO --------------------------------------//
############################## Manipulando tabelas - INSERT/UPDATE/DELETE
-- > CONTEÚDO do dia - 20.4 -- <---/ INICIO --------------------------------------//

## Inserir dados em tabelas com INSERT
## Atualizar dados em tabelas com UPDATE
## Apagar dados em tabelas com DELETE

-- INSERT

INSERT INTO nome_da_tabela (coluna1, coluna2) VALUES ('valor_coluna1', 'valor_coluna2');
-- Inserindo várias linhas de uma vez
INSERT INTO nome_da_tabela (coluna1, coluna2) VALUES
('valor_1','valor_2'),
('valor_3','valor_4'),
('valor_5','valor_6');
-- Ignorando linhas existentes
INSERT IGNORE INTO pessoas (id, name) VALUES
(4,'Gloria'), -- Sem o IGNORE, essa linha geraria um erro e o INSERT não continuaria.
(5,'Amanda');
-- Pesquisando agora, você verá que a informação duplicada não foi inserida.
-- Porém os dados corretos foram inseridos com sucesso.
SELECT * FROM pessoas;

-- Inserindo em colunas auto_increment
SELECT * FROM sakila.actor;
INSERT INTO sakila.actor (first_name, last_name) VALUES ('Marcelo','Santos');

-- INSERT SELECT (Inserindo dados de outra tabela)
INSERT INTO tabelaA (coluna1, coluna2) SELECT tabelaB.coluna1, tabelaB.coluna2
FROM tabelaB WHERE tabelaB.nome_da_coluna <> 'algumValor' ORDER BY tabelaB.coluna_de_ordenacao;
-- Teste
SELECT * FROM sakila.actor;
SELECT * FROM sakila.staff;
INSERT INTO sakila.actor (first_name, last_name) SELECT first_name, last_name FROM sakila.staff;

-- Um grande filósofo uma vez disse: "Practice Makes Perfect". Não sabemos quem ele é, mas ele tem razão! Vamos praticar!

-- Insira um novo funcionário na tabela sakila.staff.
-- Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e selecione "Table Inspector". Clique na aba "columns" e verifique quais campos aceitam nulos para te guiar. Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente.
INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
('Diego', 'Serafim', 2, 'diegoserafim1@gmail.com', '1', '1', 'diego', 'serafim86');
SELECT * FROM sakila.staff;
-- Vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query.
INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
('funcionario1', 'func1', 1, 'func1@gmail.com', '1', '1', 'func1', 'senfunc1'),
('funcionario2', 'func2', 2, 'func2@gmail.com', '2', '1', 'func2', 'func2sen');
-- Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor.
SELECT * FROM sakila.customer;
SELECT * FROM sakila.actor;
INSERT INTO sakila.actor(first_name, last_name) SELECT first_name, last_name FROM sakila.customer ORDER BY customer_id LIMIT 5;
-- Cadastre três categorias de uma vez só na tabela sakila.category.
SELECT * FROM sakila.category;
INSERT INTO sakila.category (name) VALUES ('Terror'), ('Comédia'), ('Ação');
-- Cadastre uma nova loja na tabela sakila.store.
SELECT * FROM sakila.store;
INSERT INTO sakila.store (manager_staff_id, address_id) VALUES ('3', '3');

-- UPDATE

### Para evitar restrição, rode o comando a baixo: ###
SET SQL_SAFE_UPDATES = 0;


## importantíssimo aplicar o WHERE para não alterar a tabela inteira!
UPDATE nome_da_tabela SET propriedade_a_ser_alterada = 'novo valor para coluna' WHERE alguma_condicao;

SELECT * FROM sakila.staff;
UPDATE sakila.staff SET first_name = 'Rannveig' WHERE first_name = 'funcionario2';

-- Alterando mais de uma coluna ao mesmo tempo
UPDATE sakila.staff SET first_name = 'Rannveig', last_name = 'Jordan-func1' WHERE staff_id = 4;

-- UPDATE em massa

## Opção 1 - Incluindo a lista de condições fixas
SELECT * FROM sakila.actor;
UPDATE sakila.actor SET first_name = 'JOE' WHERE actor_id IN (1,2,3);

## Opção 2 - Especificando como cada entrada será alterada individualmente
UPDATE sakila.actor SET first_name = (
CASE actor_id WHEN 1 THEN 'JOE' -- se actor_id = 1, alterar first_name para 'JOE'
              WHEN 2 THEN 'DAVIS' -- se actor_id = 2, alterar first_name para 'DAVIS'
              WHEN 3 THEN 'CAROLINE' -- se actor_id = 3, alterar first_name para 'CAROLINE'
          ELSE first_name -- em todos os outros casos, mantém-se o first_name
END);

-- UPDATE de forma sequencial

## UPDATE nome_da_tabela SET coluna1 = valor1, coluna2 = valor2 [WHERE condições]
## [ORDER BY expressao [ ASC | DESC ]] [LIMIT quantidade_resultados];

-- Exemplo:
SELECT * FROM sakila.staff;
UPDATE sakila.staff SET password = 'FavorResetarSuaSenha123' WHERE active = 1
ORDER BY last_update LIMIT 2;

-- safe-updates

SET sql_safe_updates=1, sql_select_limit=1000, max_join_size=1000000;
## sql_select_limit =1000 limita o conjunto de resultados SELECT a 1.000 linhas, a menos que a instrução inclua LIMIT .
## max_join_size =1.000.000 faz com que as instruções SELECT de várias tabelas produzam um erro se o servidor estimar que deve examinar mais de 1.000.000 combinações de linhas.

-- Você pode desabilitar o --safe-updates utilizando o comando SET:
SET SQL_SAFE_UPDATES = 0;
-- Ou configurar para um modo mais conveniente para você, alterando os valores das variáveis:
SET sql_safe_updates=1, sql_select_limit=500, max_join_size=10000;

-- UPDATE em seus conhecimentos com estes desafios

-- vamos desabilitar o --safe-updates 
SET SQL_SAFE_UPDATES = 0;

-- 1 Atualize o primeiro nome de todas as pessoas da tabela sakila.actor que possuem o primeiro nome "JULIA" para "JULES".
SELECT * FROM sakila.actor;
UPDATE sakila.actor SET first_name = 'JULES' WHERE first_name = 'JULIA';
-- 2 Foi exigido que a categoria "Sci-Fi" seja alterada para "Science Fiction".
SELECT * FROM sakila.category;
UPDATE sakila.category SET name = 'Science Fiction' WHERE name = 'Sci-Fi';
-- 3 Atualize o valor do aluguel para $25 dos filmes com duração maior que 100 minutos e classificações "G" , "PG" ou "PG-13" e custo de substituição maior que $20.
SELECT * FROM sakila.film;
UPDATE sakila.film SET rental_rate = 25 WHERE length > 100 AND (rating = 'G' OR rating = 'PG' OR rating = 'PG-13') AND replacement_cost > 20;
-- 4 Foi determinado pelo setor financeiro que haverá um reajuste em todos os preços dos filmes, com base em sua duração. Para todos os filmes com duração entre 0 e 100, o valor do aluguel passará a ser $10,00, e o aluguel dos filmes com duração acima de 100 passará a ser de $20,00.
UPDATE sakila.film SET rental_rate = (CASE
	WHEN length BETWEEN 1 AND 100 THEN 10
	WHEN length > 100 THEN 20
END);

-- DELETE

-- O WHERE é opcional. Porém, sem ele, todas as linhas da tabela seriam excluídas.
DELETE FROM banco_de_dados.tabela WHERE coluna = 'valor';

-- Ex:
SELECT * FROM sakila.film_text;
DELETE FROM sakila.film_text WHERE title = 'ACADEMY DINOSAUR';

## DELETE não permitido
-- Rejeita o comando DELETE.
# ON DELETE NO ACTION;
-- Rejeita o comando DELETE.
# ON DELETE RESTRICT;
-- Permite a exclusão dos registros da tabela pai, e seta para NULL os registros da tabela filho.
# ON DELETE SET NULL;
-- Exclui a informação da tabela pai e registros relacionados.
# ON DELETE CASCADE;

-- exemplo prático:
SELECT * FROM sakila.actor;
DELETE FROM sakila.actor WHERE first_name = 'GRACE'; # Erro
# ON DELETE RESTRICT;
-- Para conseguir excluir, precisamos excluir todas as referências a ele na tabela sakila.film_actor:
SELECT * FROM sakila.film_actor;
## actor_id = 7 é o Id de GRACE
DELETE FROM sakila.film_actor WHERE actor_id = 7;
## Agora sim
DELETE FROM sakila.actor WHERE first_name = 'GRACE';

-- TRUNCATE (excluir todos os registros)
TRUNCATE banco_de_dados.tabela;

-- Vamos praticar o DELETE

-- Exclua do banco de dados o ator com o nome de "KARL".
SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;
DELETE FROM sakila.film_actor WHERE actor_id = 12;
DELETE FROM sakila.actor WHERE first_name = 'KARL';
-- Exclua do banco de dados os atores com o nome de "MATTHEW".
## ID's relacionados 8, 103, 181
SELECT actor_id FROM sakila.actor WHERE first_name = 'MATTHEW';
## Apaga os ID's referentes
DELETE FROM sakila.film_actor WHERE actor_id IN(8, 103, 181);
## Agora é permitido apagar ''MATTEW
DELETE FROM sakila.actor WHERE first_name = 'MATTHEW';
-- Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.
SELECT * FROM sakila.film_text;
SET SQL_SAFE_UPDATES = 0;
DELETE FROM sakila.film_text WHERE DESCRIPTION LIKE '%saga%';
-- Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category.
## film_actor
SELECT * FROM sakila.film_actor;
SET SQL_SAFE_UPDATES = 0;
TRUNCATE sakila.film_actor;
## film_category
SELECT * FROM sakila.film_category;
TRUNCATE sakila.film_category;
-- Inspecione todas as tabelas do banco de dados sakila e analise quais restrições ON DELETE foram impostas em cada uma. Use o Table Inspector para fazer isso (aba DDL).
### city, address, customer, film, film_actor, film_category, inventory, payment, rental, staff, store.
-- Exclua o banco de dados e o recrie (use as instruções no início desta aula).
# 1 Drop Schema...
# 2 Drop Now
# 3 Abrai o arquivo banco-de-dados
# 4 selecionar tudo e execultar
# 5 clicar no schema para gerar o banco.

-- Recapitulando

# SELECT
SELECT * FROM sakila.staff;
# INSERT
INSERT INTO sakila.actor (first_name, last_name) VALUES ('Diego', 'Serafim');
# UPDATE
UPDATE sakila.staff SET last_name = 'OUTRA-VOLTA' WHERE last_name = 'Hillyer';
# DELETE
SELECT * FROM sakila.`language`;
DELETE FROM sakila.`language` WHERE language_id = 5;

SELECT * FROM sakila.city;
DELETE FROM sakila.city WHERE city_id = 2;
-- Cannot delete or update a parent row: a foreign key constraint fails (`sakila`.`address`, CONSTRAINT 
-- `fk_address_city` FOREIGN KEY (`city_id`) REFERENCES `city` (`city_id`) ON DELETE RESTRICT ON UPDATE CASCADE)

-- > CONTEÚDO do dia - 20.4 -- <---/ FIM -----------------------------------------//
##############################
-- > AULA ao VIVO - 20.4 ----- <---/ INICIO --------------------------------------//

-- INSERT
-- UPDATE
-- DELETE

# INSERT
SELECT * FROM sakila.actor ORDER BY actor_id DESC;
INSERT INTO sakila.actor (first_name, last_name) VALUES ('Sabrina', 'Tevez');
INSERT INTO sakila.actor (first_name, last_name) VALUES ('Tim', 'Sous'), ('Bat', 'Rob');
# INSERT IGNORE
INSERT IGNORE INTO sakila.actor (actor_id, first_name, last_name) 
VALUES (200, 'Diego', 'Serafim'), (1000, 'Teste', 'InsertIgnore');

# UPDATE
SELECT * FROM sakila.customer;
UPDATE sakila.customer SET email = 'serafim@gnail.com' WHERE customer_id = 8;
UPDATE sakila.customer SET email = 'serafim@gnail.com' WHERE first_name = 'MARY';
UPDATE sakila.customer SET email = 'serafim@gnail.com', last_name = 'Qualquer' WHERE customer_id = 3;
SELECT * FROM sakila.film;
UPDATE film SET rental_rate = rental_rate * 10 WHERE film_id IN (1, 2, 3, 4, 5);
UPDATE film SET rental_rate = rental_rate / 10 WHERE film_id BETWEEN 1 AND 5;
SELECT * FROM sakila.film ORDER BY film_id DESC;
UPDATE film SET rental_rate = 0 ORDER BY film_id DESC LIMIT 20;

# DELETE
SELECT * FROM sakila.payment;
DELETE FROM sakila.payment WHERE payment_id = 1;

#TRUNCATE
TRUNCATE sakila.payment;

-- > AULA ao VIVO - 20.4 ----- <---/ FIM -----------------------------------------//
##############################
-- > EXERCÍCIO do dia - 20.4 -- <---/ INICIO --------------------------------------//

-- Agora, a prática:

-- Os exercícios propostos possuem níveis variáveis de dificuldade. Tente fazer o máximo que conseguir.
-- Para realizar os exercícios 1 a 7, restaure o banco de dados Pixar abaixo.

-- Exercício 1: Insira as produções da Pixar abaixo na tabela Movies:
# Monstros SA, de Pete Docter, lançado em 2001, com 92 minutos de duração.
# Procurando Nemo, de John Lasseter, lançado em 2003, com 107 minutos de duração.
# Os Incríveis, de Brad Bird, lançado em 2004, com 116 minutos de duração.
# WALL-E, de Pete Docter, lançada em 2008, com 104 minutos de duração.
SELECT * FROM Pixar.Movies;
INSERT INTO Pixar.Movies (title, director, `year`, length_minutes) VALUES
('Monstros SA', 'Pete Docter', '2001', '92'), ('Procurando Nemo', 'John Lasseter', '2003', '107'),
('Os Incríveis', 'Brad Bird', '2004', '116'), ('WALL-E', 'Pete Docter', '2008', '104');
-- Exercício 2 : Procurando Nemo foi aclamado pela crítica! Foi classificado em 6.8, fez 450 milhões no mercado interno e 370 milhões no mercado internacional. Adicione as informações à tabela BoxOffice.
SELECT * FROM Pixar.BoxOffice;
INSERT INTO Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales) VALUES (8, 6.8, 450000000, 370000000);
-- Exercício 3 : O diretor do filme "Procurando Nemo" está incorreto, na verdade ele foi dirigido por Andrew Staton. Corrija esse dado utilizando o UPDATE.
SELECT * FROM Pixar.Movies;
UPDATE Pixar.Movies SET director = 'Andrew Staton' WHERE title = 'Procurando Nemo';
-- Exercício 4 : O título do filme "Ratatouille" esta escrito de forma incorreta na tabela Movies, além disso, o filme foi lançado em 2007 e não em 2010. Corrija esses dados utilizando o UPDATE.
UPDATE Pixar.Movies SET title = 'Ratatouille', year = 2007 WHERE title = 'ratatui';
-- Exercício 5 : Insira as novas classificações abaixo na tabela BoxOffice , lembre-se que a coluna movie_id é uma foreign key referente a coluna id da tabela Movies:
# Monsters SA, classificado em 8.5, lucrou 300 milhões no mercado interno e 250 milhões no mercado internacional.
# Os Incríveis, classificado em 7.4, lucrou 460 milhões no mercado interno e 510 milhões no mercado internacional.
# WALL-E, classificado em 9.9, lucrou 290 milhões no mercado interno e 280 milhões no mercado internacional.
SELECT * FROM Pixar.BoxOffice;
INSERT INTO Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales) VALUES
(8, 8.5, 300000000, 250000000), (9, 7.4, 460000000, 510000000), (10, 9.9, 290000000, 280000000);
-- Exercício 6 : Exclua da tabela Movies o filme "WALL-E".
DELETE FROM Pixar.BoxOffice WHERE movie_id = 11; # id WALL-E
DELETE FROM Pixar.Movies WHERE title = 'WALL-E';
-- Exercício 7 : Exclua da tabela Movies todos os filmes dirigidos por "Andrew Staton".
SELECT id FROM Pixar.Movies WHERE director = 'Andrew Staton'; # pega os id's '2, 9'
SELECT * FROM Pixar.BoxOffice;
DELETE FROM Pixar.BoxOffice WHERE movie_id IN (2, 9);
SELECT * FROM Pixar.Movies;
DELETE FROM Pixar.Movies WHERE director = 'Andrew Staton';

-- Bônus

-- Exercício 8: Altere a classificação da tabela BoxOffice para 9.0 de todos os filmes que lucraram mais de 400 milhões no mercado interno.
UPDATE Pixar.BoxOffice SET rating = 9.0 WHERE domestic_sales > 400000000;
-- Exercício 9: Altere a classificação da tabela BoxOffice para 6.0 de todos os filmes que lucraram menos de 300 milhões no mercado internacional e mais de 200 milhões no mercado interno.
UPDATE Pixar.BoxOffice SET rating = 6.0 WHERE international_sales < 300000000 AND domestic_sales > 200000000;
-- Exercício 10: Exclua da tabela Movies todos os filmes com menos de 100 minutos de duração.
SELECT * FROM Pixar.Movies; # id, length_minutes
SELECT id, length_minutes FROM Pixar.Movies WHERE length_minutes < 100; # Ids que serão excluidos '1, 6, 7, 8'
SELECT * FROM Pixar.BoxOffice; # movie_id
DELETE FROM Pixar.BoxOffice WHERE movie_id IN (1, 6, 7, 8);
SELECT * FROM Pixar.Movies; # length_minutes
DELETE FROM Pixar.Movies WHERE length_minutes < 100;

-- > EXERCÍCIO do dia - 20.4 -- <---/ FIM -----------------------------------------//
############################## Manipulando tabelas - INSERT/UPDATE/DELETE
-- > BLOCO - 20.4 ------------- <---/ FIM -----------------------------------------//
####################################################################################

####################################################################################
-- > BLOCO - 21.1 ------------ <---/ INICIO --------------------------------------//
##############################
-- > CONTEÚDO do dia - 21.1 -- <---/ INICIO --------------------------------------//
-- > CONTEÚDO do dia - 21.1 -- <---/ FIM -----------------------------------------//
##############################
-- > AULA ao VIVO - 21.1 ----- <---/ INICIO --------------------------------------//
-- > AULA ao VIVO - 21.1 ----- <---/ FIM -----------------------------------------//
##############################
-- > EXERCÍCIO do dia - 21.1 -- <---/ INICIO --------------------------------------//
-- > EXERCÍCIO do dia - 21.1 -- <---/ FIM -----------------------------------------//
##############################
-- > BLOCO - 21.1 ------------- <---/ FIM -----------------------------------------//
####################################################################################

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