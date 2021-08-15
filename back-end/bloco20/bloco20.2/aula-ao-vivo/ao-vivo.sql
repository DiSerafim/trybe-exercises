-- 20.2
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
