############################## JOINs, UNIONs e Subqueries
-- > CONTEÚDO do dia - 21.2 -- <---/ INICIO --------------------------------------//

# Utilizar INNER JOIN para combinar dados de duas ou mais tabelas
# Utilizar LEFT JOIN e RIGHT JOIN para combinar dados de duas ou mais tabelas
# Utilizar SELF JOIN para fazer join de uma tabela com ela própria
# Unir resultados com UNION e UNION ALL
# Utilizar SUBQUERIES
# Criar queries mais eficientes através do EXISTS

-- INNER JOIN, LEFT JOIN e RIGHT JOIN, combinam duas ou mais tabelas.
-- SELF JOIN - quando uma tabela precisa ser combinada consigo mesma.

## INNER JOIN

# tabela 1
SELECT * FROM sakila.city;
# tabela 2
SELECT * FROM sakila.country;
# junção
SELECT city.city, city.country_id, country.country FROM sakila.city AS city
INNER JOIN sakila.country AS country ON city.city_id = country.country_id;

# tabela 1
SELECT * FROM sakila.film;
# tabela 2
SELECT * FROM sakila.`language`;
# junção
SELECT film.title, film.language_id, lang.`name` FROM sakila.film AS film
INNER JOIN sakila.`language` AS lang ON film.language_id = lang.language_id;

# A sintaxe de um INNER JOIN é a seguinte:
SELECT t1.coluna, t2.coluna FROM tabela1 AS t1 INNER JOIN tabela2 AS t2 ON t1.coluna_em_comum = t2.coluna_em_comum;

# alias(AS)
# torna a query mais legível, além de evitar o erro de ambiquidade de coluna:
SELECT a.first_name, a.actor_id, f.actor_id FROM sakila.actor AS a INNER JOIN film_actor AS f ON a.actor_id = f.actor_id;

# desafios sobre o INNER JOIN

# 1 Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou usando as tabelas actor e film_actor.
# tabela 1
SELECT * FROM sakila.actor;
# tabela 2
SELECT * FROM sakila.film_actor;
# junção
SELECT A.actor_id, A.first_name, F_A.film_id FROM sakila.actor AS A
INNER JOIN sakila.film_actor AS F_A ON A.actor_id = F_A.actor_id;

# 2 Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.
# tabela 1
SELECT * FROM sakila.staff;
# tabela 2
SELECT * FROM sakila.address;
# junção
SELECT S.first_name, S.last_name, A.address FROM sakila.staff AS S
INNER JOIN sakila.address AS A ON S.address_id = A.address_id;

# 3 Exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address.
# tabela 1
SELECT * FROM sakila.customer;
# tabela 2
SELECT * FROM sakila.address;
# junção
SELECT C.customer_id, C.first_name, C.email, C.address_id, A.address FROM sakila.customer AS C
INNER JOIN sakila.address AS A ON C.address_id = A.address_id ORDER BY C.first_name DESC LIMIT 100;

# 4 Exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer.
# tabela 1
SELECT * FROM sakila.address;
# tabela 2
SELECT * FROM sakila.customer;
# junção
SELECT C.first_name, C.email, C.address_id, A.address, A.district FROM sakila.customer AS C
INNER JOIN sakila.address AS A ON C.address_id = A.address_id WHERE A.district = 'California'
AND C.first_name LIKE '%rene%';

# 5 Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer.
# tabela 1
SELECT * FROM sakila.address;
# tabela 2
SELECT * FROM sakila.customer;
# junção
SELECT C.first_name, COUNT(A.address) `quantidade de enderecos` FROM sakila.customer AS C
INNER JOIN sakila.address AS A ON C.address_id = A.address_id WHERE C.active = 1
GROUP BY C.first_name ORDER BY first_name DESC;

# 6 Monte uma query que exiba o nome, sobrenome e a média de valor(amount) paga aos funcionários no ano de 2006. Use as tabelas payment e staff. Os resultados devem estar agrupados pelo nome e sobrenome do funcionári.
# tabela 1
SELECT * FROM sakila.payment; # staff_id
# tabela 2
SELECT * FROM sakila.staff; # staff_id
# junção
SELECT S.first_name, S.last_name, AVG(P.amount) `media de valor` FROM sakila.staff AS S
INNER JOIN sakila.payment AS P ON S.staff_id = P.staff_id WHERE YEAR(P.payment_date) = 2006
GROUP BY S.first_name, S.last_name;

# 7 Monte uma query que exiba o id do ator, nome, id do filme e título do filme, usando as tabelas actor, film_actor e film. Dica: você precisará fazer mais de um JOIN na mesma query.
# tabela 1
SELECT * FROM sakila.actor; # actor_id
# tabela 2
SELECT * FROM sakila.film_actor; # actor_id + film_id
# tabela 3
SELECT * FROM sakila.film; # film_id
# junção
SELECT A.actor_id, A.first_name, F.film_id, F.title FROM sakila.actor AS A
INNER JOIN sakila.film_actor AS F_A ON A.actor_id = F_A.actor_id
INNER JOIN sakila.film AS F ON F_A.film_id = F.film_id;

## LEFT JOIN e RIGHT JOIN

# LEFT JOIN - foco principal na tabela esquerda
# tabela 1
SELECT * FROM sakila.actor; #
# tabela 2
SELECT * FROM sakila.customer; # 
# junção
SELECT C.customer_id, C.first_name, A.actor_id FROM sakila.customer AS C
LEFT JOIN sakila.actor AS A ON C.last_name = A.last_name;

# RIGHT JOIN - foco principal na tabela direita
# tabela 1
SELECT * FROM sakila.actor; #
# tabela 2
SELECT * FROM sakila.customer; # 
# junção
SELECT C.customer_id, C.first_name, A.actor_id FROM sakila.customer AS C
RIGHT JOIN sakila.actor AS A ON C.last_name = A.last_name;

-- Comparação 

# LEFT JOIN
SELECT c.customer_id, c.first_name, c.last_name, a.actor_id, a.first_name, a.last_name
FROM customer AS c LEFT JOIN actor AS a ON c.last_name = a.last_name ORDER BY c.last_name; # 620 row(s) returned

# RIGHT JOIN
SELECT c.customer_id, c.first_name, c.last_name, a.actor_id, a.first_name, a.last_name
FROM customer AS c RIGHT JOIN actor AS a ON c.last_name = a.last_name ORDER BY c.last_name; # 200 row(s) returned

# INNER JOIN
SELECT c.customer_id, c.first_name, c.last_name, a.actor_id, a.first_name, a.last_name
FROM customer AS c INNER JOIN actor AS a ON c.last_name = a.last_name ORDER BY c.last_name; # 43 row(s) returned

-- Diferenças
# a única diferença entre os três joins é a questão do foco.

# LEFT JOIN, focamos a tabela da esquerda e valores correspondentes da tabela da direita, caso existam. Valores não correspondentes são exibidos como nulos.

# RIGHT JOIN, focamos a tabela da direita e valores correspondentes da tabela da esquerda, caso existam. Valores não correspondentes são exibidos como nulos.

# INNER JOIN, foca em trazer somente os registros que possuem valores correspondentes em ambas as tabelas.

## SELF JOIN e quando utilizá-lo
SELECT * FROM sakila.film;

SELECT F.title, F.replacement_cost, F2.title, F2.replacement_cost FROM sakila.film AS F, sakila.film AS F2
WHERE F.length = F2.length;





















-- > CONTEÚDO do dia - 21.2 -- <---/ FIM -----------------------------------------//
##############################
-- > AULA ao VIVO - 21.2 ----- <---/ INICIO --------------------------------------//



-- > AULA ao VIVO - 21.2 ----- <---/ FIM -----------------------------------------//
##############################
-- > EXERCÍCIO do dia - 21.2 -- <---/ INICIO --------------------------------------//



-- > EXERCÍCIO do dia - 21.2 -- <---/ FIM -----------------------------------------//
############################## JOINs, UNIONs e Subqueries
