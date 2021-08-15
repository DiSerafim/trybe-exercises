############################## Funções SQL/Joins/Subqueries
-- > CONTEÚDO do dia - 21.1 -- <---/ INICIO --------------------------------------//

## Criar condicionais no SQL usando IF e CASE;
## Manipular strings no SQL;
## Usar as diversas funções matemáticas do MySQL;
## Extrair informações específicas sobre datas de uma tabela;
## Utilizar as funções de agregação AVG, MIN, MAX, SUM e COUNT;
## Exibir e filtrar dados de forma agrupada com GROUP BY e HAVING.

-- MANIPULAÇÃO DE STRINGS SQL 

-- Converte o texto da string para CAIXA ALTA
SELECT UCASE('Oi, eu sou uma string'); -- 'OI, EU SOU UMA STRING'

-- Converte o texto da string para caixa baixa
SELECT LCASE('Oi, eu sou uma string'); -- 'oi, eu sou uma string'

-- Substitui as ocorrências de uma substring em uma string
SELECT REPLACE('Oi, eu sou uma string', 'string', 'cadeia de caracteres'); -- 'Oi, eu sou uma cadeia de caracteres'

-- Retorna a parte da esquerda de uma string de acordo com o número de caracteres especificado
SELECT LEFT('Oi, eu sou uma string', 3); -- 'Oi,'

-- Retorna a parte da direita de uma string de acordo com o número de caracteres especificado
SELECT RIGHT('Oi, eu sou um string', 6); -- 'string'

-- Exibe o tamanho, em caracteres, da string
SELECT LENGTH('Oi, eu sou uma string'); -- 21

-- Extrai parte de uma string de acordo com o índice de um caractere inicial e a quantidade de caracteres a extrair
SELECT SUBSTRING('Oi, eu sou uma string', 5, 2); -- 'eu'

-- Se a quantidade de caracteres a extrair não for definida, então a string será extraída do índice inicial definido, até o seu final
SELECT SUBSTRING('Oi, eu sou uma string', 5); -- 'eu sou uma string'

-- PARA TESTAR, execute o código abaixo no seu ambiente local, brinque com as linhas a seguir e depois volte aqui.

SELECT UCASE(title) FROM sakila.film LIMIT 10; -- 10 titulos em letras maiúsculas
SELECT LCASE(title) FROM sakila.film LIMIT 10; -- 10 titulos em letras minusculas
SELECT REPLACE(title, 'ACADEMY', 'FOO') FROM sakila.film WHERE film_id = 1; -- Substitui o título 'ACADEMY', 'FOO' pelo film_id = 1
SELECT LEFT(title, 5) FROM sakila.film WHERE film_id = 1; -- 'ACADE'
SELECT RIGHT(title, 8) FROM sakila.film WHERE film_id = 1; -- 'DINOSAUR'
SELECT LENGTH(title) FROM sakila.film WHERE film_id = 1; -- 16
SELECT SUBSTRING(title, 5, 2) FROM sakila.film WHERE film_id = 1; -- EM
SELECT SUBSTRING(title, 5) FROM sakila.film WHERE film_id = 1; -- 'EMY DINOSAUR'

-- PARA FIXAR

## Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA.
SELECT UCASE('trybe'); # 'TRYBE'

## Faça uma query que transforme a frase 'Você já ouviu falar do DuckDuckGo?' em 'Você já ouviu falar do Google?'.
SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo?', 'Google?'); # 'Você já ouviu falar do Google?'

## Utilizando uma query , encontre quantos caracteres temos em 'Uma frase qualquer'.
SELECT LENGTH('Diego Serafim de Sousa'); # '22'

## Extraia e retorne a palavra "JavaScript" da frase 'A linguagem JavaScript está entre as mais usadas'.
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10); # 'JavaScript'

## Por fim, padronize a string 'RUA NORTE 1500, SÃO PAULO, BRASIL' para que suas informações estejam todas em caixa baixa.
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL'); # 'rua norte 1500, são paulo, brasil'

-- CONDICIONAIS SQL (IF e o CASE)

# IF

-- Sintaxe:
SELECT IF(condicao, 'valor_se_verdadeiro', 'valor_se_falso');
SELECT IF(idade >= 18, 'Maior de idade', 'Menor de Idade') FROM pessoas;
SELECT IF(aberto, 'Entrada permitida', 'Entrada não permitida') FROM estabelecimentos;

-- Exemplo utilizando o sakila:
SELECT * FROM sakila.film;
SELECT title, IF (rental_rate > 0.99, 'CARO', 'BARATO') FROM sakila.film;
SELECT * FROM sakila.customer;
SELECT first_name, IF(active, 'Cliente Ativo', 'Cliente Inativo') AS status FROM sakila.customer LIMIT 10;

# CASE (compara mais de uma condição)

-- Sintaxe:
SELECT nome, nivel_acesso,
  CASE
	WHEN nivel_acesso = 1 THEN 'Nível de acesso 1'
	WHEN nivel_acesso = 2 THEN 'Nível de acesso 2'
	WHEN nivel_acesso = 3 THEN 'Nível de acesso 3'
	ELSE 'Usuário sem acesso'
  END AS nivel_acesso FROM permissoes_usuario;

-- Exemplo utilizando a tabela sakila.film:
SELECT * FROM sakila.film;
SELECT title, rental_rate,
  CASE
	WHEN rental_rate = 0.99 THEN 'Barato'
    WHEN rental_rate = 2.99 THEN 'Médio'
    WHEN rental_rate = 4.99 THEN 'Caro'
	ELSE rental_rate = 'Negociável' 
  END AS Leilão FROM sakila.film LIMIT 10;
SELECT * FROM sakila.customer;
SELECT first_name, email,
  CASE
    WHEN email = 'MARY.SMITH@sakilacustomer.org' THEN 'Cliente de baixo valor'
    WHEN email = 'PATRICIA.JOHNSON@sakilacustomer.org' THEN 'Cliente de médio valor'
    WHEN email = 'LINDA.WILLIAMS@sakilacustomer.org' THEN 'Cliente de alto valor'
    ELSE 'Em análise'
  END AS valor FROM sakila.customer LIMIT 10;

-- Para Fixar

-- 1 Usando o IF na tabela sakila.film, exiba o id, título e uma coluna chamada 'conheço o filme?', em que deve-se avaliar se o nome do filme é 'ACE GOLDFINGER'. Caso seja, exiba "Já assisti a esse filme". Caso contrário, exiba "Não conheço o filme".
SELECT * FROM sakila.film;
SELECT film_id, title, IF(title = 'ACE GOLDFINGER', 'Já assisti a esse filme', 'Não conheço o filme') AS 'conheço o filme?' FROM sakila.film LIMIT 5;
-- 2 Usando o CASE na tabela sakila.film, exiba o título, classificação e uma coluna extra 'público-alvo', em que classificaremos o filme de acordo com as seguintes siglas:
# G: "Livre para todos";
# PG: "Não recomendado para menores de 10 anos";
# PG-13: "Não recomendado para menores de 13 anos";
# R: "Não recomendado para menores de 17 anos";
# Se não cair em nenhuma das classificações anteriores: "Proibido para menores de idade".
SELECT title, rating,
  CASE
    WHEN rating = 'G' THEN 'Livre para todos'
	WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
	WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
	WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
	ELSE 'Proibido para menores de idade'
  END AS 'público-alvo' FROM sakila.film;

-- Funções matemáticas do MySQL (+, -, *, /)

SELECT 5 + 5; # 10
SELECT 5 - 5; # 0
SELECT 5 * 5; # 25
SELECT 5 / 5; # 1

SELECT * FROM sakila.film;
SELECT rental_duration + rental_rate FROM sakila.film LIMIT 10; # somas as 2 colunas
SELECT rental_duration - rental_rate FROM sakila.film LIMIT 10; # subtrai as 2 colunas
SELECT rental_duration / rental_rate FROM sakila.film LIMIT 10; # divide as 2 colunas
SELECT rental_duration * rental_rate FROM sakila.film LIMIT 10; # multiplica as 2 colunas

-- Divisão de inteiros com #DIV e como encontrar seus restos com o #MOD
# DIV retorna o resultado inteiro de uma divisão, ignorando as casas decimais de um número.
SELECT 10 DIV 3; # 3
SELECT 10 DIV 2; # 5
SELECT 14 DIV 3; # 4
SELECT 13 DIV 2; # 6

# MOD retorna o resto de uma divisão como resultado.
SELECT 10 MOD 3; # 1
SELECT 10 MOD 2; # 0
SELECT 14 MOD 3; # 2
SELECT 13 MOD 2; # 1
SELECT 10.5 MOD 2; # 0.5, ou seja, 2 + 2 + 2 + 2 + 2 = 10, restando 0.5

-- Desafios com DIV e MOD

-- 1 Monte uma query usando o MOD juntamente com o IF para descobrir se o valor 15 é par ou ímpar. Chame essa coluna de 'Par ou Ímpar'.
SELECT IF(15 MOD 2 = 0, 'Par', 'Ímpar') AS 'Par ou Ímpar'; # Ímpar
-- 2 Temos uma sala de cinema que comporta 220 pessoas. Quantos grupos completos de 12 pessoas podemos levar ao cinema sem que ninguém fique de fora?
SELECT 200 DIV 12 AS Grupos; # 16
-- 3 Utilizando o resultado anterior, responda à seguinte pergunta: temos lugares sobrando? Se sim, quantos?
SELECT 220 MOD 12 AS 'lugares sobrando';

-- Arredondando Valores (ROUND, CEIL, FLOOR)

# ROUND - omitir ou especificar quantas casas decimais queremos
SELECT ROUND(10.4925); # 10
SELECT ROUND(10.5136); # 11
SELECT ROUND(-10.5136); # -11
SELECT ROUND(10.4925, 2); # 10.49 - permite 2 casas
SELECT ROUND(10.4925, 3); # 10.493 - permite 3 casas

# CEIL - arredondamento para cima
SELECT CEIL(10.51); # 11
SELECT CEIL(10.49); # 11
SELECT CEIL(10.2); # 11

# FLOOR - arredondamento para baixo
SELECT FLOOR(10.51); # 10
SELECT FLOOR(10.49); # 10
SELECT FLOOR(10.2); # 10

-- Exponenciação e Raiz Quadrada (POW e SQRT)

# POW - Elevando um número X à potência Y
SELECT POW(2, 2); # 4
SELECT POW(2, 4); # 16


# SQRT - Encontrando a raiz quadrada
SELECT SQRT(9); # 3
SELECT SQRT(16); # 4

-- Gerando valores aleatórios (RAND)

# RAND

-- Para gerar um valor aleatório entre 0 e 1:
SELECT RAND(); # '0.42233850194359057'
-- Para gerar um valor entre 7 e 13:
SELECT ROUND(7 + (RAND() * 6)); # 8
-- O cálculo que é feito é o seguinte: (7 + (0.0 a 1.0 * 6))

-- Para Fixar

-- 1 Monte uma query que gere um valor entre 15 e 20.
SELECT FLOOR(15 + (RAND() * 5)); # '18'
-- 2 Monte uma query que exiba o valor arredondado de 15.7515971 com uma precisão de 5 casas decimais.
SELECT ROUND(15.7515971, 5); # '15.75160'
-- 3 Estamos com uma média de 39.494 de vendas de camisas por mês. Qual é o valor aproximado para baixo dessa média?
SELECT FLOOR(39.494); # '39'
-- 4 Temos uma taxa de inscrição de 85.234% no curso de fotografia para iniciantes. Qual é o valor aproximado para cima dessa média?
SELECT CEIL(85.234); # 86

-- Trabalhando com datas

# data
SELECT CURRENT_DATE(); # '2021-08-09'
# data e hora
SELECT NOW(); # '2021-08-09 07:43:06'

# diferença em dias entre duas datas

# A primeira data é 30 dias depois da segunda
SELECT DATEDIFF('2020-01-31', '2020-01-01'); # 30
# A primeira data é 30 dias antes da segunda
SELECT DATEDIFF('2020-01-01', '2020-01-31'); # -30

# diferença de tempo entre dois horários

# 1 hora de diferença entre os horários
SELECT TIMEDIFF('08:30:10', '09:30:10'); # '-01:00:00'
# 1 hora de diferença entre os horários
SELECT TIMEDIFF('09:30:10', '08:30:10'); # '01:00:00'

-- Extrair qualquer parte de uma data

SELECT DATE(data_cadastro); -- YYYY-MM-DD
SELECT YEAR(data_cadastro); -- Ano
SELECT MONTH(data_cadastro); -- Mês
SELECT DAY(data_cadastro); -- Dia
SELECT HOUR(data_cadastro); -- Hora
SELECT MINUTE(data_cadastro); -- Minuto
SELECT SECOND(data_cadastro); -- Segundo

-- CURRENT_DATE() e NOW()

SELECT YEAR(CURRENT_DATE()); # '2021' retorna o ano atual
SELECT HOUR(NOW()); # '8' retorna a hora atual

-- Para Fixar

-- 1 Monte uma query que exiba a diferença de dias entre '2030-01-20' e hoje.
SELECT DATEDIFF('2030-01-20', '2021-08-09'); # '3086'
SELECT DATEDIFF('2030-01-20', NOW()); # '3086'
SELECT DATEDIFF('2030-01-20', CURRENT_DATE()); # '3086'
-- 2 Monte uma query exiba a diferença de horas entre '10:25:45' e '11:00:00'.
SELECT TIMEDIFF('10:25:45', '11:00:00'); # '-00:34:15'

-- Utilizando as funções de agregação (AVG, MIN, MAX, SUM e COUNT)

SELECT * FROM sakila.film;
-- Usando a coluna replacement_cost (valor de substituição) vamos encontrar:
SELECT AVG(replacement_cost) AS media FROM sakila.film; # 19.984000 (Média entre todos registros)
SELECT MIN(replacement_cost) AS valor_minimo FROM sakila.film; # 9.99 (Menor valor encontrado)
SELECT MAX(replacement_cost) AS valor_maximo FROM sakila.film; # 29.99 (Maior valor encontrado)
SELECT SUM(replacement_cost) AS soma_total FROM sakila.film; # 19984.00 (Soma de todos registros)
SELECT COUNT(replacement_cost) AS total_registros FROM sakila.film; # 1000 registros encontrados (Quantidade)

-- Para Fixar

-- 1 Monte um query que exiba:
SELECT * FROM sakila.film;
# A média de duração dos filmes e dê o nome da coluna de 'Média de Duração';
SELECT AVG(length) AS 'Média de Duração' FROM sakila.film; # '115.2720'
# A duração mínima dos filmes como 'Duração Mínima';
SELECT MIN(length) AS 'Duração Mínima' FROM sakila.film; # '46'
# A duração máxima dos filmes como 'Duração Máxima';
SELECT MAX(length) AS 'Duração Máxima' FROM sakila.film; # '185'
# A soma de todas as durações como 'Tempo de Exibição Total';
SELECT SUM(length) AS 'Tempo de Exibição Total' FROM sakila.film; # '115272'
# A quantidade total de filmes cadastrados na tabela sakila.film como 'Filmes Registrados'.
SELECT COUNT(*) AS 'Filmes Registrados' FROM sakila.film; # '1000'

-- Exibindo e filtrando dados de forma agrupada (GROUP BY e HAVING)

# GROUP BY - remove duplicações, retornando apenas um valor na coluna usada no agrupamento.
SELECT coluna(s) FROM tabela GROUP BY coluna(s);

SELECT * FROM sakila.actor; # 200 row(s) returned
SELECT first_name FROM sakila.actor GROUP BY first_name; # 128 row(s) returned
SELECT first_name FROM sakila.actor; # 200 row(s) returned

# GROUP BY - em conjunto com (AVG , MIN, MAX, SUM ou COUNT)

-- Quantos registros existem na tabela de cada nome registrado, podemos usar o COUNT()
SELECT * FROM sakila.actor;
SELECT first_name, COUNT(*) AS repeticoes FROM sakila.actor GROUP BY first_name;

-- Média de duração de filmes agrupados por classificação indicativa
SELECT * FROM sakila.film;
SELECT rating, AVG(length) AS duracao FROM sakila.film GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost) AS 'Valor mínimo de substituição' FROM sakila.film GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost) AS 'Valor máximo de substituição' FROM sakila.film GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost) AS 'Custo total de substituição' FROM sakila.film GROUP by rating;

-- Praticando GROUP BY

# 1 Monte uma query que exiba a quantidade de clientes cadastrados na tabela sakila.customer que estão ativos e a quantidade que estão inativos.
SELECT * FROM sakila.customer;
SELECT `active`, COUNT(*) AS tudo FROM sakila.customer GROUP BY `active`; # '1' = '584' & '0' = '15'
SELECT `active`, COUNT(*) AS ativos FROM sakila.customer WHERE `active` = 1 GROUP BY `active`; # '584'
SELECT `active`, COUNT(*) AS inativos FROM sakila.customer WHERE `active` = 0 GROUP BY `active`; # '15'
# 2 Monte uma query para a tabela sakila.customer que exiba a quantidade de clientes ativos e inativos por loja. Os resultados devem conter o ID da loja , o status dos clientes (ativos ou inativos) e a quantidade de clientes por status.
SELECT store_id, `active`, COUNT(*) AS 'clientes ativos e inativos por loja' FROM sakila.customer GROUP BY store_id, `active`; # 4 row(s) returned
SELECT store_id, `active`, COUNT(*) AS 'clientes ativos por loja' FROM sakila.customer WHERE `active` = 1 GROUP BY store_id, `active`; # 2 row(s) returned
SELECT store_id, `active`, COUNT(*) AS 'clientes inativos por loja' FROM sakila.customer WHERE `active` = 0 GROUP BY store_id, `active`; # 3 row(s) returned
# 3 Monte uma query que exiba a média de duração de locação por classificação indicativa(rating) dos filmes cadastrados na tabela sakila.film. Os resultados devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor.
SELECT * FROM sakila.film;
SELECT AVG(rental_duration) AS 'média de duração', rating FROM sakila.film GROUP BY rating ORDER BY 'média de duração' DESC;
# 4 Monte uma query para a tabela sakila.address que exiba o nome do distrito e a quantidade de endereços registrados nele. Os resultados devem ser ordenados da maior quantidade para a menor.
SELECT * FROM sakila.address;
SELECT district, COUNT(*) AS 'quantidade de endereços registrados' FROM sakila.address GROUP BY district ORDER BY COUNT(*) DESC;

-- 
SELECT * FROM sakila.address; # 603 row(s) returned
SELECT district FROM sakila.address GROUP BY district; # 378 row(s) returned
SELECT district, COUNT(*) FROM sakila.address GROUP BY district; # 378 row(s) returned mostrando a quantidade de repetições
SELECT district FROM sakila.address GROUP BY district HAVING COUNT(*) > 5; # mostra somente os que se repetem mais de 5x

-- Filtrando Resultados do GROUP BY com HAVING
# HAVING - filtra resultados agrupados
SELECT * FROM sakila.actor;

SELECT first_name, COUNT(*) FROM sakila.actor GROUP BY first_name HAVING COUNT(*) > 2;
-- Ou, melhor ainda, usando o AS para dar nomes às colunas de agregação, melhorando a leitura do resultado
SELECT first_name, COUNT(*) AS nomes_cadastrados FROM sakila.actor GROUP BY first_name HAVING nomes_cadastrados > 2;

-- Observação: o alias não funciona com strings para o HAVING, então use o underline ("_") para separar palavras
SELECT first_name, COUNT(*) AS nomes_cadastrados FROM sakila.actor GROUP BY first_name HAVING nomes_cadastrados > 2;

-- HAVING - filtra somente os resultados gerados após o GROUP BY ter sido executado.

-- Para Fixar

# 1 Usando a query a seguir, exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso, dê um alias(apelido) à coluna gerada por AVG(length), de forma que deixe a query mais legível. Finalize ordenando os resultados de forma decrescente.
    SELECT rating, AVG(length) AS duracoes_medias FROM sakila.film GROUP BY rating HAVING duracoes_medias BETWEEN 115.0 AND 121.50 ORDER BY duracoes_medias DESC;
# 2 Usando a query a seguir, exiba apenas os valores de custo de substituição que estão acima de $3950.50. Dê um alias que faça sentido para SUM(replacement_cost) , de forma que deixe a query mais legível. Finalize ordenando os resultados de forma crescente.
    SELECT rating, SUM(replacement_cost) AS custo_de_substituicao FROM sakila.film GROUP by rating HAVING custo_de_substituicao > 3950.50 ORDER BY custo_de_substituicao;

-- > CONTEÚDO do dia - 21.1 -- <---/ FIM -----------------------------------------//
##############################
-- > AULA ao VIVO - 21.1 ----- <---/ INICIO --------------------------------------//



-- > AULA ao VIVO - 21.1 ----- <---/ FIM -----------------------------------------//
##############################
-- > EXERCÍCIO do dia - 21.1 -- <---/ INICIO --------------------------------------//

Agora a prática

# Faremos uso da tabela employees do banco de dados hr.

# Instruções de como restaurar o banco de dados
# 1 Copie todo o código SQL;
# 2 Abra o MySQL Workbench e abra uma nova janela de query;
# 3 Copie todo o código para dentro dessa janela;
# 4 Selecione todo o código usando Ctrl + a;
# 5 Execute o código teclando Ctrl + ENTER.

## Exercícios
# 1. Escreva uma query que exiba o maior salário da tabela.
SELECT * FROM hr.employees;
SELECT MAX(SALARY) FROM hr.employees; # '24000.00'

# 2. Escreva uma query que exiba a diferença entre o maior e o menor salário.
SELECT MAX(SALARY) - MIN(SALARY) FROM hr.employees; # '21900.00'

# 3. Escreva uma query que exiba a média salarial de cada JOB_ID, ordenando pela média salarial em ordem decrescente.
SELECT JOB_ID, AVG(SALARY) AS 'média salarial' FROM hr.employees
GROUP BY JOB_ID ORDER BY 'média salarial' DESC; # 19 row(s) returned


# 4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.
SELECT SUM(SALARY) FROM hr.employees; # '691400.00'

# 5. Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.
SELECT MAX(SALARY) AS 'maior salario', MIN(SALARY) AS 'menor salario',
SUM(SALARY) AS 'total salarios', ROUND(AVG(SALARY), 2)  AS 'media salarial' FROM hr.employees;

# 6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras(IT_PROG).
SELECT JOB_ID, COUNT(*) AS 'pessoas programadoras' FROM hr.employees WHERE JOB_ID = "IT_PROG";

# 7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão(JOB_ID).
SELECT JOB_ID, SUM(SALARY) FROM hr.employees GROUP BY JOB_ID;

# 8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras (IT_PROG).
SELECT JOB_ID, SUM(SALARY) FROM hr.employees GROUP BY JOB_ID HAVING JOB_ID = "IT_PROG"; # 'IT_PROG', '28800.00'

# 9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras(IT_PROG).
SELECT JOB_ID, AVG(SALARY) AS 'média salarial' FROM hr.employees WHERE JOB_ID <> 'IT_PROG' GROUP BY JOB_ID ORDER BY 'média salarial' DESC;

# 10. Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id .
SELECT DEPARTMENT_ID, AVG(SALARY) AS 'média salarial', COUNT(*) AS 'funcionários' FROM hr.employees GROUP BY DEPARTMENT_ID HAVING `funcionários` > 10;

# 11. Escreva uma query que atualize a coluna PHONE_NUMBER, de modo que todos os telefones iniciados por 515 agora devem iniciar com 777.
UPDATE hr.employees SET PHONE_NUMBER = REPLACE(PHONE_NUMBER, '515', '777') WHERE PHONE_NUMBER LIKE '515%';

# 12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.
SELECT * FROM hr.employees WHERE LENGTH(FIRST_NAME) >= 8;

# 13. Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e ano no qual foi contratado(exiba somente o ano).
SELECT EMPLOYEE_ID AS 'id', FIRST_NAME AS 'primeiro nome', LEFT(HIRE_DATE, 4) AS 'data de contratacao' FROM hr.employees;
# OU
SELECT EMPLOYEE_ID AS 'id', FIRST_NAME AS 'primeiro nome', MID(HIRE_DATE, 1, 4) AS 'data de contratacao' FROM hr.employees;

# 14. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).
SELECT EMPLOYEE_ID AS 'id', FIRST_NAME AS 'primeiro nome', RIGHT(HIRE_DATE, 2) AS 'dia da contratacao' FROM hr.employees;
# OU
SELECT EMPLOYEE_ID AS 'id', FIRST_NAME AS 'primeiro nome', MID(HIRE_DATE, 9, 2) AS 'dia da contratacao' FROM hr.employees;
# OU
SELECT EMPLOYEE_ID AS 'id', FIRST_NAME AS 'primeiro nome', DAY(HIRE_DATE) AS 'dia da contratacao' FROM hr.employees;

# 15. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e mês no qual foi contratado (exiba somente o mês).
SELECT EMPLOYEE_ID AS 'id', FIRST_NAME AS 'primeiro nome', SUBSTRING(HIRE_DATE, 6, 2) AS 'mes da contratacao' FROM hr.employees;
# OU
SELECT EMPLOYEE_ID AS 'id', FIRST_NAME AS 'primeiro nome', MONTH(HIRE_DATE) AS 'dia da contratacao' FROM hr.employees;

# 16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.
SELECT UPPER(CONCAT(FIRST_NAME, " ", LAST_NAME)) FROM hr.employees;

# 17: Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.
SELECT LAST_NAME AS 'contratados em', HIRE_DATE AS 'julho de 1987' FROM hr.employees WHERE HIRE_DATE BETWEEN '1987-07-01' AND '1987-07-31';
# OU
SELECT LAST_NAME AS 'contratados em', HIRE_DATE AS 'julho de 1987' FROM hr.employees WHERE MONTH(HIRE_DATE) = 7 AND YEAR(HIRE_DATE) = 1987;

# 18: Escreva uma query que exiba as seguintes informações de cada funcionário: nome, sobrenome, tempo que trabalha na empresa(em dias).
SELECT FIRST_NAME, LAST_NAME, DATEDIFF(CURRENT_DATE(), HIRE_DATE) AS 'dias na empresa' FROM hr.employees;

-- > EXERCÍCIO do dia - 21.1 -- <---/ FIM -----------------------------------------//
############################## Funções SQL/Joins/Subqueries
