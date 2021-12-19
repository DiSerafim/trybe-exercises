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

# --------------------------------------------------------------------------- #
# - > AULA ao VIVO - 32.3 ----- <--- / FIM --------------------------------- //
# #####################################
# - > EXERCÍCIO do dia - 32.3 - <--- / INICIO ------------------------------ //
# --------------------------------------------------------------------------- #

# Agora a prática

...

# --------------------------------------------------------------------------- #
# - > EXERCÍCIO do dia - 32.3 - <--- / FIM --------------------------------- //
# ########################################## Testes com Python
# - Concluído /o\------------------------------------------------------------ #
