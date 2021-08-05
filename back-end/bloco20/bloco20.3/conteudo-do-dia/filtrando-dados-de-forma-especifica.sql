-- > CONTEÚDO do dia --------- <---/ INICIO --------------------------------------//

-- 20.3
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



 
--
 
-- Vamos praticar

-- Então vamos fixar isso?


-- CONCAT (Junção)


-- Vamos brincar um pouco mais com isso?

-- DISTINCT (Dados Repetidos)


-- COUNT (Contando resultados)

-- LIMIT (Pesquisas gigantes)

-- LIMIT OFFSET (Pulando linhas desnecessárias)

-- ORDER BY (organizando)

-- 

-- > CONTEÚDO do dia --------- <---/ FIM -----------------------------------------//
