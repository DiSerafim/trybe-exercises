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
SELECT id FROM Pixar.Movies WHERE director = 'Andrew Staton'; # pega os ids 2, 9;
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
