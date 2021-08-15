-- > AULA ao VIVO ------------ <---/ INICIO --------------------------------------//

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

-- > AULA ao VIVO ------------ <---/ FIM -----------------------------------------//
