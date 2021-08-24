############################## Stored Routines & Stored Functions
-- > CONTEÚDO do dia - 21.3 -- <---/ INICIO --------------------------------------//

# Montar blocos de código SQL reutilizáveis com STORED PROCEDURES e STORED FUNCTIONS;
# Criar reações dinâmicas com TRIGGERS.

### Montando blocos de código SQL reutilizáveis com stored procedures e stored functions
-- Stored procedure;
-- Stored function.

# stored significa armazenado. O código fica armazenado no servidor do banco de dados para que possa ser utilizado sem a necessidade de reescrever uma funcionalidade.
# Dica sobre como nomear suas procedures e functions
-- Verbo + Resultado
ObterTotalDeVendas
ExibirRankMaximo
ObterClienteMaisAtivo
CalcularNivelEngajamento
MontarNomeCompleto

-- Stored procedure;
# Propaga mudanças feitas imediatamente para todas as aplicações que a usam, reduzindo a necessidade de refatorar o código em todos os ambientes que utilizam o banco de dados.

-- select * from Pixar.Movies;
# cria a procedure
USE Pixar;
DELIMITER $$;
CREATE PROCEDURE ObtendoNomeDosFilmes()
BEGIN
SELECT title FROM Movies;
END $$;
DELIMITER ;

# chama a procedure
CALL ObtendoNomeDosFilmes; # 11 row(s) returned

# jogadores que tem nota a cima de um parametro definido
USE soccer_player;
DELIMITER $$
CREATE PROCEDURE SelecionarJogadoresComNotaMaiorQue(IN nota NUMERIC)
BEGIN
SELECT * FROM player WHERE overral > nota;
END $$
DELIMITER ;

# chama a 
CALL SelecionarJogadoresComNotaMaiorQue(90) # 8 row(s) returned

# com variáveis
SET @player = 'Cristiano Ronaldo';
SELECT * FROM player WHERE name = @player;

# media de nota de todos os jogadores
USE soccer_players;
DELIMITER $$
CREATE PROCEDURE RetornoMediaDosJogadores(OUT averageOverall DOUBLE)
BEGIN
SELECT avg(overall) FROM player INTO averageOverall;
END $$
DELIMITER ;

# chamada 
CALL RetornoMediaDosJogadores(@average);
SELECT @average; # 67274345142

# quantos jogadores tem a baixo da media
SELECT name FROM player WHERE overal < @average;

# media de jogadores e de um time expecifico
USE soccer_players;
DELIMITER $$
CREATE PROCEDURE RetornoMediaDosJogadoresDeUmTime(IN selectedTeam VARCHAR(50), OUT averageOverall DOUBLE)
BEGIN
SELECT avg(overall) FROM player WHERE team = selectedTeam INTO averageOverall;
END $$
DELIMITER ;

# chamada
CALL RetornoMediaDosJogadoresDeUmTime('Liverool', @average);
SELECT @average;

# com CONCAT
USE soccer_players;
DELIMITER $$
CREATE PROCEDURE RetornaIdadeDoJogador(INOUT selectPlayer VARCHAR(200))
BEGIN
SELECT CONCAT('O jogador', selectPlayer, ' tem ', age, ' anos ')
FROM player WHERE name=selectPlayer INTO selectPlayer;
END $$
DELIMITER ;

# chamada
SET @player='Iniesta'; # variável
CALL RetornaIdadeDoJogador(@player); # chamada
SELECT @player; # retorno

# Estrutura padrão de uma stored procedure
-- obrigatório para criar a procedure no banco correto
USE banco_de_dados;
-- definindo delimitador
DELIMITER $$
-- parâmetros
CREATE PROCEDURE nome_da_procedure(@parametro1, @parametro2, ..., @parametroN)
-- delimitando o início do código SQL
BEGIN
-- delimitando o final do código SQL
END $$
-- muda o delimitador de volta para ; - o espaço entre DELIMITER e o ';' é necessário
DELIMITER ;

# Procedure sem parâmetros:
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowAllActors()
BEGIN
    SELECT * FROM sakila.actor;
END $$

DELIMITER ;

-- Como usar:
CALL ShowAllActors(); # 200 row(s) returned

# Elementos das Stored Procedures

# 1 - Delimiter
# usada para definir qual símbolo representa o final da procedure declarada.

# 2 - Variáveis
# existem três principais tipos de variáveis:
# User-defined variables;
# Local Variables;
# Server System Variables.

# A mais comum é por meio da User-defined variables que para criar variáveis e atribuir valores a elas.
SET @my_school = 'BeTrybe';
SELECT @my_school;

# 3 - Tipos de dados
# são determinados por meio de algumas características:

# Tipos de String
VARCHAR: Uma string não binária de comprimento variável;
CHAR: Uma string não binária (caractere) de comprimento fixo;
TEXT: Uma pequena string não binária.

# Tipos Numéricos
TYNINT: Um número inteiro muito pequeno;
INT: Um inteiro padrão;
BIGINT: Um grande número inteiro;
DECIMAL: Um número de ponto fixo.

# Construindo sua primeira stored procedure
# Procedure sem parâmetros;
# Procedure com parâmetros de entrada (IN);
# Procedure com parâmetros de saída (OUT);
# Procedure com parâmetros de entrada e saída (IN-OUT).

# Procedure com parâmetros de entrada (IN):
# Ao definir um parâmetro do tipo IN, podemos usá-lo e modificá-lo dentro da nossa procedure.

# Exemplo: Foi criada uma procedure que recebe como parâmetro uma sílaba (syllable) e busca na tabela actor todos atores quem contêm aquela sílaba no nome.
USE sakila;
DELIMITER $$
CREATE PROCEDURE ShowActorsWithSyllable(IN syllable VARCHAR(100))
BEGIN
    SELECT *
    FROM sakila.actor
    WHERE first_name LIKE CONCAT('%', syllable, '%');
END $$
DELIMITER ;

-- Como usar:
CALL ShowActorsWithSyllable('lope'); # 4 row(s) returned

# Procedure com parâmetros de saida (OUT):
# quando precisa que algo seja encontrado dentro de uma query e te retorne esse valor para que algo adicional possa ser feito com ele.

# Exemplo: Estamos recebendo aqui o título de um filme como valor de entrada e depois buscando dentro da procedure a duração média de um empréstimo daquele filme. Feito isso, ele é inserido em uma variável que pode ser usada posteriormente.
USE sakila;
DELIMITER $$
CREATE PROCEDURE ShowAverageRentalDurationOfMovie(
    IN film_name VARCHAR(300),
    OUT media_aluguel_em_dias DOUBLE
)
BEGIN
    SELECT AVG(rental_duration) INTO media_aluguel_em_dias
    FROM sakila.film
    WHERE title = film_name;
END $$
DELIMITER ;

-- Como usar:
CALL ShowAverageRentalDurationOfMovie('ACADEMY DINOSAUR', @media_de_dias);
SELECT @media_de_dias; # 1 row(s) returned

# Procedure com parâmetros de entrada-saida (IN-OUT):
# usado quando é necessário que um parâmetro possa ser modificado tanto antes como durante a execução de uma procedure.

# Exemplo: Estamos gerando um novo nome para um filme, usando como base a variável film_name , que deve ser criada e passada como parâmetro para a procedure. O parâmetro sofrerá alterações dentro da procedure, podendo ser usado posteriormente com o novo nome.
USE sakila;
DELIMITER $$
CREATE PROCEDURE NameGenerator(INOUT film_name VARCHAR(300))
BEGIN
    SELECT CONCAT('ULTRA ', film_name, ' THE BEST MOVIE OF THE CENTURY')
    INTO film_name;
END $$
DELIMITER ;

-- Como usar:
SELECT 'ACE GOLDFINGER' INTO @movie_title;
CALL NameGenerator(@movie_title);
SELECT @movie_title; # 1 row(s) returned

# Desafios stored procedure
# Utilize o banco de dados sakila

# 1 Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.
USE sakila;
DELIMITER $$
CREATE PROCEDURE ShowTop10Actors()
BEGIN
  SELECT actor_id, COUNT(*) AS 'quantidade de filmes'
  FROM film_actor
  GROUP BY actor_id
  ORDER BY COUNT(*) DESC
  LIMIT 10;
  END $$
  DELIMITER ;

  # chamada
  CALL ShowTop10Actors();

# 2 Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme, seu titulo, o id de sua categoria e o nome da categoria selecionada. Use as tabelas film, film_category e category para montar essa procedure.
USE sakila;
DELIMITER $$
CREATE PROCEDURE FilmePorCategoria(IN category VARCHAR(100))
BEGIN
  SELECT F.film_id, F.title, FC.category_id, C.name
  FROM sakila.film AS F
  INNER JOIN sakila.film_category AS FC ON F.film_id = FC.film_id
  INNER JOIN sakila.category AS C ON FC.category_id = C.category_id
  WHERE C.`name` = category;
  END $$
  DELIMITER ;

  # chamada
  CALL FilmePorCategoria('Action'); # 64 row(s) returned

# 3 Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.
CREATE PROCEDURE ClientesCadastradosStatus(
  IN client_email VARCHAR(200), OUT isActive BOOL
)
BEGIN
  SET isActive = (
	SELECT `active`
	FROM sakila.customer
	WHERE email = client_email
  );
  END $$
  DELIMITER ;

# chamada
SELECT @ActiveStatus;
CALL ClientesCadastradosStatus('MARY.SMITH@sakilacustomer.org', @ActiveStatus);
SELECT @ActiveStatus; # 1 row(s) returned

-- Stored Functions
# Através delas, podemos encapsular nossas queries usadas mais frequentemente dentro de um bloco de código nomeado e parametrizável.

USE soccer_players;
DELIMITER $$
CREATE FUNCTION RetornaMediaDeUmTimePorPosicao(selectedTeam VARCHAR(50), selectedPosition VARCHAR(3))
RETURNS DOUBLE READS SQL DATA
BEGIN
  DECLARE average DOUBLE;
  SELECT AVG(overall)
    FROM player
    WHERE team=selectedTeam AND `position` LIKE CONCAT('%', selectedPosition, '%')
    INTO average;
  RETURN average;
END $$
DELIMITER ;

# chamada
SELECT RetornaMediaDeUmTimePorPosicao("Real Madrid", "GK")
  INTO @gkAverage;
  
SELECT `name`, overall, @gkAverage
  FROM player
  WHERE team="Manchester City" AND `position` LIKE "%ST%" AND overall > @gkAverage;
  
# Sua primeira stored function
# Stored functions podem ser executadas com o comando SELECT.

# Tipos de retorno comuns:
# DETERMINISTIC - Sempre retorna o mesmo valor ao receber os mesmos dados de entrada;
# READS SQL DATA - Indica para o MySQL que sua função somente lerá dados.

# Estrutura padrão de uma stored function

USE banco_de_dados; 
DELIMITER $$
CREATE FUNCTION nome_da_function(parametro1, parametro2, ..., parametroN)
RETURNS tipo_de_dado tipo_de_retorno
BEGIN
    query_sql
    RETURN resultado_a_ser_retornado;
END $$

DELIMITER ;

-- Exemplo: Uma stored function que exibe a quantidade de filmes em que um determinado ator ou atriz atuou:
USE sakila;
DELIMITER $$
CREATE FUNCTION MoviesWithActor(actor_id int)
RETURNS INT READS SQL DATA
BEGIN
    DECLARE movie_total INT;
    SELECT COUNT(*)
    FROM sakila.film_actor
    WHERE sakila.film_actor.actor_id = actor_id INTO movie_total;
    RETURN movie_total;
END $$
DELIMITER ;

-- Como usar:
SELECT MoviesWithActor(1); # MoviesWithActor(1) - 19

-- Exemplo: Uma stored function que exibe o nome completo de um ator ou de uma atriz, dado seu id como parâmetro:
USE sakila;
DELIMITER $$
CREATE FUNCTION GetFullName(id INT)
RETURNS VARCHAR(200) READS SQL DATA
BEGIN
    DECLARE full_name VARCHAR(200);
    SELECT concat(first_name, ' ', last_name)
    FROM sakila.actor
    WHERE actor_id = id
    LIMIT 1
    INTO full_name ;
    RETURN full_name;
END $$
DELIMITER ;

-- Como usar:
SELECT GetFullName(51); # GARY PHOENIX

# as stored functions são extremamente úteis e devem ser criadas sempre que percebermos que o mesmo tipo de código está sendo repetido em vários lugares diferentes.

# Agora você vai desenvolver algumas functions
# 1 Utilizando a tabela sakila.payment, monte uma function que retorna a quantidade total de pagamentos feitos até o momento por um determinado customer_id.
USE sakila;
DELIMITER $$
CREATE FUNCTION QuantidadeTotalDePagamentos(id INT)
RETURNS INT READS SQL DATA
BEGIN
    DECLARE total_payments INT;
    SELECT COUNT(*)
    FROM sakila.payment
    WHERE customer_id = id INTO total_payments;
    RETURN total_payments;
END $$
DELIMITER ;

-- Como usar:
SELECT QuantidadeTotalDePagamentos(3); # 26

# 2 Crie uma function que, dado o parâmetro de entrada inventory_id, retorna o nome do filme vinculado ao registro de inventário com esse id.
USE sakila;
DELIMITER $$
CREATE FUNCTION FilmeVinculadoAoInventário(id INT)
RETURNS VARCHAR(500) READS SQL DATA
BEGIN
    DECLARE movie_title VARCHAR(500);
    SELECT distinct F.title
    FROM sakila.inventory AS I
    INNER JOIN sakila.film AS F
    ON I.film_id = F.film_id
    WHERE I.inventory_id = id INTO movie_title;
    RETURN movie_title;
END $$
DELIMITER ;

-- Como usar:
SELECT FilmeVinculadoAoInventário(2); # ACADEMY DINOSAUR

# 3 Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action', 'Horror') e retorna a quantidade total de filmes registrados nessa categoria.
USE sakila;
DELIMITER $$
CREATE FUNCTION QuantidadePorCategoria(category VARCHAR(100))
RETURNS INT READS SQL DATA
BEGIN
    DECLARE movie_amount INT;
    SELECT COUNT(*)
    FROM sakila.category AS C
    INNER JOIN sakila.film_category AS FC ON C.category_id = FC.category_id
    WHERE C.`name` = category INTO movie_amount;
    RETURN movie_amount;
END $$
DELIMITER ;

-- Como usar:
SELECT QuantidadePorCategoria("Horror"); # 56

### Stored Functions VS Store Procedures




























### Criando reações dinâmicas com Triggers





























-- > CONTEÚDO do dia - 21.3 -- <---/ FIM -----------------------------------------//
##############################
-- > AULA ao VIVO - 21.3 ----- <---/ INICIO --------------------------------------//



-- > AULA ao VIVO - 21.3 ----- <---/ FIM -----------------------------------------//
##############################
-- > EXERCÍCIO do dia - 21.3 -- <---/ INICIO --------------------------------------//



-- > EXERCÍCIO do dia - 21.3 -- <---/ FIM -----------------------------------------//
############################## Stored Routines & Stored Functions
# ... \o/