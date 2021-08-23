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
# É um caso em que uma tabela faz join consigo mesma.
SELECT * FROM sakila.film;

# o título e o custo de substitução(replacement_cost) dos filmes que possuem a mesma duração.
SELECT F.title, F.replacement_cost, F2.title, F2.replacement_cost FROM sakila.film AS F, sakila.film AS F2
WHERE F.length = F2.length;

# Para fixar:

# 1 Queremos saber os ids e custos de substituição dos filmes que possuem o mesmo custo de substituição.
SELECT 
  f1.film_id,
  f1.replacement_cost,
  f2.film_id,
  f2.replacement_cost
FROM
  sakila.film AS f1,
  sakila.film AS f2
WHERE
  f1.replacement_cost = f2.replacement_cost;

# 2 Exiba o título e a duração de empréstimo dos filmes que possuem a mesma duração. Exiba apenas os filmes com a duração de empréstimo entre 2 e 4 dias.
SELECT 
  f1.title, f1.rental_duration, f2.title, f2.rental_duration
FROM
  sakila.film AS f1,
  sakila.film AS f2
WHERE
  f1.rental_duration = f2.rental_duration
HAVING f1.rental_duration BETWEEN 2 AND 4;

### UNION e UNION ALL
# permite unir os registros de uma tabela com outra, desde que usemos a mesma quantidade de colunas.

SELECT * FROM sakila.actor; # 200 row(s) returned
SELECT * FROM sakila.customer; # 599 row(s) returned 

-- UNION
# Remove os dados duplicados
SELECT 
    first_name, last_name
FROM
    sakila.actor 
UNION SELECT 
    first_name, last_name
FROM
    sakila.customer; # 797 row(s) returned

-- UNION ALL
# Mantém os dados duplicados.
SELECT 
    first_name, last_name, '-' AS 'customer_id'
FROM
    sakila.actor 
UNION ALL SELECT 
    first_name, last_name, customer_id
FROM
    sakila.customer; # 799 row(s) returned

# ordenando os resultados
(SELECT 
    first_name, last_name, '-' AS 'customer_id'
FROM
    sakila.actor) UNION ALL (SELECT 
    first_name, last_name, customer_id
FROM
    sakila.customer) ORDER BY first_name;

# limitando os resultados
(SELECT 
    first_name, last_name, '-' AS 'customer_id'
FROM
    sakila.actor
LIMIT 10) UNION ALL (SELECT 
    first_name, last_name, customer_id
FROM
    sakila.customer
LIMIT 10) ORDER BY first_name; # 20 row(s) returned

# OU
(SELECT 
    first_name, last_name, '-' AS 'customer_id'
FROM
    sakila.actor
LIMIT 10) UNION ALL (SELECT 
    first_name, last_name, customer_id
FROM
    sakila.customer
LIMIT 10) ORDER BY first_name LIMIT 10; # 10 row(s) returned

# pulando 10 casas
(SELECT 
    first_name, last_name, '-' AS 'customer_id'
FROM
    sakila.actor
LIMIT 10) UNION ALL (SELECT 
    first_name, last_name, customer_id
FROM
    sakila.customer
LIMIT 10) ORDER BY first_name LIMIT 10 OFFSET 10; # 799 row(s) returned

# desafios sobre o UNION

# 1 Todos os funcionários foram promovidos a atores. Monte uma query que exiba a união da tabela staff com a tabela actor, exibindo apenas o nome e o sobrenome. Seu resultado não deve excluir nenhum funcionário ao unir as tabelas.
SELECT * FROM sakila.staff; # 2 row(s) returned
SELECT * FROM sakila.actor; # 200 row(s) returned 

SELECT 
    first_name, last_name
FROM
    sakila.staff 
UNION ALL SELECT 
    first_name, last_name
FROM
    sakila.actor; # 202 row(s) returned

# 2 Monte uma query que una os resultados das tabelas customer e actor, exibindo os nomes que contêm a palavra "tracy" na tabela customer e os que contêm "je" na tabela actor . Exiba apenas os resultados únicos.
SELECT * FROM sakila.customer; # 599 row(s) returned
SELECT * FROM sakila.actor; # 200 row(s) returned 

SELECT 
    first_name
FROM
    sakila.customer
WHERE
    first_name LIKE '%tracy%' 
UNION SELECT 
    first_name
FROM
    sakila.actor
WHERE
    first_name LIKE '%je%'; # 4 row(s) returned

# 3 Monte uma query que exiba a união dos cinco últimos nomes da tabela actor, o primeiro nome da tabela staff e cinco nomes a partir da 15ª posição da tabela customer. Não permita que dados repetidos sejam exibidos. Ordene os resultados em ordem alfabética.
SELECT * FROM sakila.actor; # 200 row(s) returned 
SELECT * FROM sakila.staff; # 2 row(s) returned
SELECT * FROM sakila.customer; # 599 row(s) returned 

(SELECT 
    first_name
FROM
    sakila.actor
ORDER BY actor_id DESC
LIMIT 5) UNION (SELECT 
    first_name
FROM
    sakila.staff
LIMIT 1) UNION (SELECT 
    first_name
FROM
    sakila.customer
LIMIT 5 OFFSET 15) ORDER BY first_name; # 11 row(s) returned

# 4 Você quer exibir uma lista paginada com os nomes e sobrenomes de todos os clientes e atores do banco de dados, em ordem alfabética. Considere que a paginação está sendo feita de 15 em 15 resultados e que você está na 4ª página. Monte uma query que simule esse cenário.
SELECT * FROM sakila.customer; # 599 row(s) returned 
SELECT * FROM sakila.actor; # 200 row(s) returned 

(SELECT 
    first_name, last_name
FROM
    sakila.customer
ORDER BY first_name , last_name
LIMIT 60) UNION (SELECT 
    first_name, last_name
FROM
    sakila.actor
ORDER BY first_name , last_name
LIMIT 60) ORDER BY first_name , last_name LIMIT 15 OFFSET 45; # 15 row(s) returned

### SUBQUERY
# é uma query aninhada que é avaliada dentro de um par de parênteses. Pode conter expressões simples, como adições e subtrações, podemos utilizar praticamente todos os comandos já vistos até o momento dentro de uma SUBQUERY.

# Usando uma SUBQUERY como fonte de dados para o FROM.
SELECT 
    f.title, f.rating
FROM
    (SELECT 
        *
    FROM
        sakila.film
    WHERE
        rating = 'R') AS f; # 195 row(s) returned

# Preenchendo uma coluna de um SELECT por meio de uma SUBQUERY.
SELECT 
    address,
    district,
    (SELECT 
            city
        FROM
            sakila.city
        WHERE
            city.city_id = sakila.address.city_id) AS city
FROM
    sakila.address; # 603 row(s) returned

# Filtrando resultados com WHERE usando como base os dados retornados de uma SUBQUERY.
SELECT 
    address, district
FROM
    sakila.address
WHERE
    city_id IN (SELECT 
            city_id
        FROM
            sakila.city
        WHERE
            city IN ('Sasebo' , 'San Bernardino', 'Athenai', 'Myingyan')); # 4 row(s) returned

# Usando uma tabela externa, de fora da SUBQUERY, dentro dela.
SELECT 
    first_name,
    (SELECT 
            address
        FROM
            sakila.address
        WHERE
            address.address_id = tabela_externa.address_id) AS address
FROM
    sakila.customer AS tabela_externa; # 599 row(s) returned

### SUBQUERY ou JOIN
# seria possível resolver as queries anteriores através de um JOIN.

-- Usando SUBQUERY
SELECT 
    first_name,
    (SELECT 
            address
        FROM
            sakila.address
        WHERE
            address.address_id = tabela_externa.address_id) AS address
FROM
    sakila.customer AS tabela_externa; # 599 row(s) returned

-- Usando INNER JOIN
SELECT 
    c.first_name, ad.address
FROM
    sakila.customer c
        INNER JOIN
    sakila.address ad ON c.address_id = ad.address_id;

### EXISTS
# Retorna os dados da tabela A onde existe um relacionamento com os dados da tabelas B

# clientes que fizeram reservas no hotel
SELECT * FROM hotel.Customers; # 4 row(s) returned
SELECT * FROM hotel.Reservations; # 5 row(s) returned

SELECT 
    *
FROM
    hotel.Customers AS c
WHERE
    EXISTS( SELECT 
            *
        FROM
            hotel.Reservations
        WHERE
            c.CustomerId = Reservations.CustomerId); # 3 row(s) returned
            
# clientes que NÃO fizeram reservas no hotel
SELECT 
    *
FROM
    hotel.Customers AS c
WHERE
    NOT EXISTS( SELECT 
            *
        FROM
            hotel.Reservations
        WHERE
            c.CustomerId = Reservations.CustomerId); # 1 row(s) returned

# existe algum fornecedor que não possui produtos cadastrados no banco de dados
SELECT 
    *
FROM
    praticando.manufacturers;SELECT 
    *
FROM
    praticando.products;SELECT 
    `Name`
FROM
    praticando.manufacturers AS M
WHERE
    NOT EXISTS( SELECT 
            *
        FROM
            praticando.products
        WHERE
            Manufacturer = M.Code); # 1 row(s) returned

# fornecedores que possuem produtos cadastrados no banco de dados
SELECT 
    *
FROM
    praticando.manufacturers;SELECT 
    *
FROM
    praticando.products;SELECT 
    `Name`
FROM
    praticando.manufacturers AS M
WHERE
    EXISTS( SELECT 
            *
        FROM
            praticando.products
        WHERE
            Manufacturer = M.Code); # 6 row(s) returned

# Vamos Praticar o exists
# db-hotel

# 1 Usando o EXISTS na tabela books_lent e books, exiba o id e título dos livros que ainda não foram emprestados.
SELECT * FROM hotel.Books; # 7 row(s) returned
SELECT * FROM hotel.Books_Lent; # 7 row(s) returned

SELECT 
    id, title
FROM
    hotel.Books AS b
WHERE
    NOT EXISTS( SELECT 
            *
        FROM
            hotel.Books_Lent
        WHERE
            b.Id = book_id); # 2 row(s) returned

# 2 Usando o EXISTS na tabela books_lent e books, exiba o id e título dos livros estão atualmente emprestados e que contêm a palavra "lost" no título.
SELECT 
    id, title
FROM
    hotel.Books AS b
WHERE
    EXISTS( SELECT 
            *
        FROM
            hotel.Books_Lent
        WHERE
            b.Id = book_id AND b.title LIKE '%lost%'); # 1 row(s) returned

# 3 Usando a tabela carsales e customers, exiba apenas o nome dos clientes que ainda não compraram um carro.
SELECT * FROM hotel.Customers; # 4 row(s) returned
SELECT * FROM hotel.CarSales; # 7 row(s) returned

SELECT 
    `name`
FROM
    hotel.Customers AS c
WHERE
    NOT EXISTS( SELECT 
            *
        FROM
            hotel.CarSales
        WHERE
            CustomerId = c.CustomerId); # 1 row(s) returned

# 4 Usando o comando EXISTS em conjunto com JOIN e as tabelas cars, customers e carsales, exiba o nome do cliente e o modelo do carro de todos os clientes que fizeram compras de carros.
SELECT * FROM hotel.Cars; # 8 row(s) returned
SELECT * FROM hotel.Customers; # 4 row(s) returned
SELECT * FROM hotel.CarSales; # 7 row(s) returned

SELECT 
    cus.name, car.name
FROM
    hotel.Cars AS car
        INNER JOIN
    hotel.Customers AS cus
WHERE
    EXISTS( SELECT 
            *
        FROM
            hotel.CarSales
        WHERE
            CustomerID = cus.CustomerId
                AND carID = car.ID); # 5 row(s) returned

-- > CONTEÚDO do dia - 21.2 -- <---/ FIM -----------------------------------------//
##############################
-- > AULA ao VIVO - 21.2 ----- <---/ INICIO --------------------------------------//



-- > AULA ao VIVO - 21.2 ----- <---/ FIM -----------------------------------------//
##############################
-- > EXERCÍCIO do dia - 21.2 -- <---/ INICIO --------------------------------------//

# Vamos praticar!


-- > EXERCÍCIO do dia - 21.2 -- <---/ FIM -----------------------------------------//
############################## JOINs, UNIONs e Subqueries
