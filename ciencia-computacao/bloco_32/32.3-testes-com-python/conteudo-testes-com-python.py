# ########################################## hh
# --> CONTEÚDO do dia - 32.3 - <--- / INICIO ----------------------------- //
# ########################################## Testes com Python

# ---> FOCO <---
...
# Testes automatizados
# Testando falhas
# Um pouco de contexto
# Dublês de teste

# ---> OBJETIVO <---
...
# Escrever testes automatizados utilizando a linguagem Python ;
# Verificar a ocorrência de erros esperados utilizando testes automatizados;
# Criar contextos para execução de testes automatizados;
# Modificar componentes do software para evitar a utilização de recursos _
# externos.

# ---> CONTEÚDO <---
...
# -> Testes automatizados
...

# - "assert" caso a expressão recebida seja verdadeira, nada acontece, porém
# caso seja falsa, uma exceção do tipo AssertionError é lançada.

# ./dividir.py
# ./test_dividir.py

...
# ./e_impar.py
# ./test_e_impar.py

...
# ./e_par.py
# ./test_e_par.py


...
# -> Testando falhas
...
# - Podemos escrever testes que verificam que um erro deve ocorrer a partir
# de uma determinada entrada.

# "raises" , verifica se a exceção ocorreu. Se não, lança um AssertionError

# ./testando_falhas.py
# ./test_testando_falhas.py


...
# -> Um pouco de contexto
...

# - Cada test pode ter seu próprio contexto ou compartilhá-lo com outros testes
# ./test_contexto.py


...
# -> Dublês de teste
...
# - substituir componentes para que retornem um determinado valor simulado ou
# substituir os componentes por objetos falsos que registram as informações
# - evitando assim a dependência externa a um arquivo real.


# - fakes: objetos que possuem implementações funcionais, porém simplificadas;
# - mocks: pré programados p/ verificarem as chamadas das funções que receberem
# - stubs: proveem respostas predefinidas;
# - spies: como stubs, mas também armazenam informações de como foram chamados.

...
# material complementar sobre dublês de testes
# https://martinfowler.com/bliki/TestDouble.html

...
# -No 1° cenário nossa dependência externa(o arquivo) é recebido como parâmetro
# ./duble_pokemon.py
# ./test_duble_pokemon.py

...
# -No 2° a função espera o nome do arquivo, a abertura acontece dentro da funçã
# ./duble_segundo_caso.py
# ./test_duble_segundo_caso.py


# --------------------------------------------------------------------------- #
# - > CONTEÚDO do dia - 32.3 - <--- / FIM ---------------------------------- //
# #####################################
# - > AULA ao VIVO - 32.3 ----- <--- / INICIO ------------------------------ //
# --------------------------------------------------------------------------- #

# Foco de hoje
# Testes com Python

...
# Benefícions Dos Testes!
# - Código testável
# - Feedback rápido
# - Refatoração como parte do processo
# - Somente o necessário
# - Design incremental
# - Documentação em tempo real
# - Melhor qualidade de código
# - Menos bugs
# - Somente o necesário
# - DRY (Don't repeat yourself)

...
# Mitos do TDD
# - Difícil? Complicado? Demora?
# - Testar sempre antes
# - Códigos sem erros ou bugs
# - Tendencioso testar o próprio código

...
# readme.md

...
# Gerar um relatório
# ./scenario1.py
# /tests/test_scenario1_1.py
# /tests/test_scenario1_2.py
# /tests/test_scenario1_3.py

...
# Retorna os produtos de um json
# ./scenario2.py
# /tests/test_scenario2.py

...
# ./scenario3.py
# /tests/test_scenario3.py


# --------------------------------------------------------------------------- #
# - > AULA ao VIVO - 32.3 ----- <--- / FIM --------------------------------- //
# #####################################
# - > EXERCÍCIO do dia - 32.3 - <--- / INICIO ------------------------------ //
# --------------------------------------------------------------------------- #

# Agora a prática

...
# Exercício 1: Escreva um programa que retorne uma lista com os valores
# numéricos de 1 a N, mas com as seguintes exceções:
# N° divisíveis por 3 deve aparecer como 'Fizz' ao invés do número;
# N° divisíveis por 5 devem aparecer como 'Buzz' ao invés do número;
# N° divisíveis por 3 e 5 devem aparecer como 'FizzBuzz' ao invés do número';
# Ex: 3 -> [1, 2, "Fizz"]

...
# Exercício 2 Em alguns lugares é comum lembrar um número do telefone
# associando seus dígitos a letras. Dessa maneira a expressão MY LOVE significa
# 69 5683. Claro que existem alguns problemas, uma vez que alguns números de
# telefone não formam uma palavra ou uma frase e os dígitos 1 e 0 não estão
# associados a nenhuma letra.
# Sua tarefa é ler uma expressão e encontrar o número de telefone
# correspondente baseado na tabela abaixo. Uma expressão é composta por letras
# maiúsculas (A-Z), hifens (-) e os números 1 e 0.
# Letras  ->  Número
# ABC     ->  2
# DEF     ->  3
# GHI     ->  4
# JKL     ->  5
# MNO     ->  6
# PQRS    ->  7
# TUV     ->  8
# WXYZ    ->  9
# Exemplo de entrada:
# 1-HOME-SWEET-HOME
# MY-MISERABLE-JOB
# Saídas correspondentes:
# 1-4663-79338-4663
# 69-647372253-562
# Curiosidade : A frase "The quick brown fox jumps over the lazy dog" é um
# pantograma (frase com sentido em que são usadas todas as letras do alfabeto
# de determinada língua) da língua inglesa.
# Verifique casos de entrada maior que 30 caractere, vazia, caracteres inválido

...
# Exercício 3 Faça uma função que valide um e-mail nos seguintes critérios
# abaixo, lançando uma exceção quando o valor for inválido. Endereços de email
# válidos devem seguir as seguintes regras:
# Devem seguir o formato nomeusuario@nomewebsite.extensao;
# O nome de usuário deve conter somente letras, dígitos, traços e underscores;
# O nome de usuário deve iniciar com letra;
# O nome do website deve conter somente letras e dígitos;
# O tamanho máximo da extensão é três.
# 🦜 As funções isalpha e isdigit podem ser utilizadas para verificar se uma
# letra ou palavra são compostas de somente caracteres ou dígitos.
# Exemplo: "1".isaplha() -> False , "a".isalpha() -> True

...
# Exercício 4 Baseado no exercício anterior, escreva uma função que, dado uma
# lista de emails, deve retornar somente os emails válidos. Caso uma exceção
# ocorra, apenas a escreva na tela.
# Exemplo: ["nome@dominio.com", "errad#@dominio.com", "outro@dominio.com"] ->
# ["nome@dominio.com", "outro@dominio.com"]


...
# Recursos adicionais (opcional)
...

# # - Guia do mochileiro para Python - tests
# https://python-guide-pt-br.readthedocs.io/pt_BR/latest/writing/tests.html
# # - Live de Python - Testes com Python
# https://www.youtube.com/watch?v=5hL9T3jintE
# # - Unit testing in Visual Studio
# https://docs.microsoft.com/pt-br/visualstudio/python/unit-testing-python-in-visual-studio?view=vs-2019
# # - Dublês de teste
# https://cassiobotaro.dev/post/dubles-de-teste/


# --------------------------------------------------------------------------- #
# - > EXERCÍCIO do dia - 32.3 - <--- / FIM --------------------------------- //
# ########################################## Testes com Python
# - Concluído \o/------------------------------------------------------------ #
