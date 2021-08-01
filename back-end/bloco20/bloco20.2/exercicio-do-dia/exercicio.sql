-- 20.2
-- Agora, a prática:

Exercício 1 : Faça as tarefas de 1 a 15.
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



