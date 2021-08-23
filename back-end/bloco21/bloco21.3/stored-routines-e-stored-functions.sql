############################## Stored Routines & Stored Functions
-- > CONTEÚDO do dia - 21.3 -- <---/ INICIO --------------------------------------//

# Montar blocos de código SQL reutilizáveis com STORED PROCEDURES e STORED FUNCTIONS;
# Criar reações dinâmicas com TRIGGERS.

### Montando blocos de código SQL reutilizáveis com stored procedures e stored functions
# Stored procedure;
# Stored function.

# stored significa armazenado. O código fica armazenado no servidor do banco de dados para que possa ser utilizado sem a necessidade de reescrever uma funcionalidade.
# Dica sobre como nomear suas procedures e functions
-- Verbo + Resultado
ObterTotalDeVendas
ExibirRankMaximo
ObterClienteMaisAtivo
CalcularNivelEngajamento
MontarNomeCompleto

# Stored procedure;
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



# 2 Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme, seu titulo, o id de sua categoria e o nome da categoria selecionada. Use as tabelas film, film_category e category para montar essa procedure.



# 3 Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.










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