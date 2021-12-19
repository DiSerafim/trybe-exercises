# ########################################## Entrada e Saída de Dados
# --> CONTEÚDO do dia - 32.2 - <--- / INICIO ----------------------------- //
# ########################################## Entrada e Saída de Dados

# ---> FOCO <---
...
# - Estruturando uma aplicação
# - Entrada e Saída
# - Manipulação de arquivos
# - Lidando com exceções
# - Manipulando arquivos JSON
# - Manipulando arquivos CSV
# - Fixando os aprendizados


# ---> OBJETIVO <---
...
# - Preparar um ambiente de projeto em Python, definindo sua estrutura de_
# diretórios e criando ambientes isolados;
# - Instalar bibliotecas de terceiros num projeto Python;
# - Entender como lidar com exceções em Python;
# - Receber dados de pessoas usuárias, assim como enviá-los de volta;
# - Ler e escrever arquivos no formato tabular CSV ;
# - Serializar e dessearalizar dados no formato JSON .


# ---> CONTEÚDO <---
...
# -> Estruturando uma aplicação

# Módulos
# - É todo arquivo escrito com a linguagem Python e com a extensão .py

# ex:
# my_math.py

...
# Pacotes
# - são módulos que contêm outros módulos e/ou pacotes

# ex:
# importa o pacote http como um módulo
# import http

# importa o módulo client do pacote http
# from http import client

# # importa a constante HTTP_POST do módulo client do pacote http
# from http.client import HTTP_PORT

...
# Ambiente Virtual
# - é instalar as bibliotecas em um diretório, que está relacionado ao projeto.
# Assim, cada projeto pode ter suas próprias bibliotecas na sua versão

# python3 -m venv .venv , sendo que .venv é o nome do ambiente isolado.
# -> python3 -m venv .venv

# Depois de criado, temos de ativar este ambiente para usá-lo.
# -> source .venv/bin/activate

# conferir se o comando de ativação do ambiente virtual deu certo
# ->  which python3
# O resultado será o caminho para a pasta onde você criou seu ambiente virtual
# ( pwd ), acrescido de .venv/bin/python3.

...
# >-> Entrada e Saída
...
# └─# mkdir python-io && cd python-io
# └─# which python
# /usr/bin/python

...
# criar um ambiente virtual
# └─# python3 -m venv .venv
...
# inicializa
# └─# source .venv/bin/activate
...
# agora estamos em um ambiente privado
# └─# which python
# /home/serafim/Documentos/trybe/trybe-exercises/ciencia-computacao/bloco_32/32.2-entrada-e-saída-de-dados/python-io/.venv/bin/python

# Entrada
...
# python-io/soma_de_numeros.py
...
# python-io/entrada_random.py -> - Gerar números pseudo-aleatórios
...
# python-io/entrada_com_sys.py

# Saída
...
print("O resultado é", 42)  # O resultado é 42
print("Os resultados são", 6, 23, 42)  # Os resultados são 6 23 42

...
# alterar o "separador" dos argumentos passados, que, é um espaço em branco.
print("Maria", "João", "Miguel", "Ana")  # Maria João Miguel Ana
print("Maria", "João", "Miguel", "Ana", sep=", ")  # Maria, João, Miguel, Ana

...
# alterar o caractere de "fim" de linha que, por regra, é uma quebra de linha:
print("Na mesma ", end="")
print("linha.")  # Na mesma linha.

...
# modificar a saída padrão para a saída de erros:
# python-io/modificar_saida.py

...
# interpolação de variáveis e expressões utilizando f-string
# python-io/interpolacao.py

# Exercícios
...
# Exercício 1: Faça um programa que solicite o nome de uma pessoa usuária e
# imprima-o na vertical. Ex:
# F
# U
# L
# A
# N
# O

# ./imprime_na_vertical.py

...
# Exercício 2: Escreva um programa que receba vários números naturais e calcule
# a soma desses valores. Caso algum valor da entrada seja inválido, por exemplo
# uma letra, uma mensagem deve ser exibida, na saída de erros, no seguinte
# formato: "Erro ao somar valores, {valor} é um valor inválido". Ao final, você
# deve imprimir a soma dos valores válidos.
# 🦜 Receba os valores em um mesmo input , solicitando à pessoa usuária que
# separe-os com um espaço. Receba os valores no formato str e utilize o método
# split para pegar cada valor separado. O método isdigit , embutido no tipo str
# pode ser utilizado para verificar se a string corresponde a um número natural

# ./soma_numeros_naturais.py

...
# >-> Manipulação de arquivos
...
# cria um arquivo e insere dados nele
# ./manipulando_arquivo.py

...
# ao abrir um arquivo para escrita, um novo arquivo é criado mesmo que ele já
# exista, sobrescrevendo o antigo.
file = open("arquivo.txt", mode="w")

# Para escrevermos um conteúdo em um arquivo utilizamos a função write :
file.write("nome idade\n")
file.write("Maria 45\n")
file.write("Miguel 33\n")

# podemos redirecionar o conteúdo digitado dentro de print para um arquivo.
print("Túlio 22", file=file)

# Para escrever múltiplas linhas podemos utilizar a função writelines
LINES = ["Alberto 35\n", "Betina 22\n", "João 42\n", "Victor 19\n"]
file.writelines(LINES)

# Abrimos o arquivo, escrevemos seu conteúdo, vamos então fechá-lo:
file.close()

...
# ocorrência de um erro ao abrir muitos arquivos ao mesmo tempo:
arquivos = []
for index in range(10240):
    arquivos.append(open(f"arquivo{index}.txt", "w"))

...
# vamos escrever em um arquivo e lê-lo logo em seguida!

# escrita
file = open("lendo_arquivo.txt", mode="w")
file.write("Trybe <3")
file.write

# leitura
file = open("lendo_arquivo.txt", mode="r")
content = file.read()
print(content)
file.close()  # Trybe <3

# Um arquivo é também um iterável, ou seja, pode ser percorrido em um laço de
# repetição. A cada iteração, uma nova linha é retornada.
...
# ./criar_arquvo_loop.py

# arquivos binários. Eles são arquivos que contêm uma série de bytes e a sua
# leitura pode variar de acordo com o arquivo. Nesse caso, devemos acrescentar
# um b ao parâmetro mode
...
# ./criando_binario.py

...
# >-> Lidando com exceções
...
# Erros de Sintaxe

# É como executar:
# print{"Olá, mundo!"}
# em vez de..
print("Olá, mundo!")

...
# Exceções
# -ocorrem durante a execução e acabam resultando em mensagem de erro.

print(10 * (1 / 0))  # ZeroDivisionError: division by zero

print(4 + 'spam' * 3)  # NameError: name 'spam' is not defined

print('2' + 2)  # TypeError: can only concatenate str (not "int") to str

...
# Tratamento de exceções
# - com as palavras reservadas (try e except)

# ./tratando_excecoes.py

...
# Lidando com exceções enquanto manipulamos arquivos
# - utilizando a instrução (finally ou else)
...
# finally
# - Implementação de ações de limpeza, independente da ocorrência de ações.

...
# else
# - Ocorre sempre que todo o try for bem sucedido.

...
# ./finally_ou_else.py

...
# open with

# criamos um cotexto, limitando o escopo onde o arquivo está aberto
# "as" é somente para atribuir o valor utilizado no contexto à variável file
with open("with_open.txt", "w") as file:
    file.write("Michelle 27\n")
# como etamos fora do contexto, o arquivo foi fechado
print(file.closed)  # True

...
# Exercício 3: Dado um arquivo contendo estudantes e suas respectivas notas,
# escreva um programa que lê todas essas informações e filtre mantendo somente
# as pessoas que estão reprovadas, e escreva seus nomes em outro arquivo. A
# nota miníma para aprovação é 6.

# Arquivo:
# Marcos 10 | Felipe 4 | José 6 | Ana 10 | Maria 9 | Miguel 5
# Exemplo saída:
# Felipe | Miguel

# 🦜 A função split pode ser utilizada para dividir o nome em uma linha.
# Ex: line.split -> ["Marcos", "10"]
...
# ./alunos_reprovados.py

...
# >-> Manipulando arquivos JSON
...
# JSON - é um formato textual utilizado para integração de sistemas.
# é baseado em um subconjunto de regras JavaScript

# ex:
# back-end e front-end,
# comunicação com sistemas externos, exemplo "gateways de pagamento",
# ou internos como "sistema de autenticação".

# ./super_heroes.py
# ./superheroes.json

# ./pokemons.json
# ./pokemons.py

# ./frentes.json
# ./frentes.py

...
# >-> Manipulando arquivos CSV
...
# - ( Comma Separated Values ) é muito comum em exportações de planilhas de
# dados e base de dados.

# ./balneabilidade.csv
# ./balneabilidade.py

# ./escritor_em_dict.py

...
# >-> Fixando os aprendizados
...

# --------------------------------------------------------------------------- #
# - > CONTEÚDO do dia - 32.2 - <--- / FIM ---------------------------------- //
# #####################################
# - > AULA ao VIVO - 32.2 ----- <--- / INICIO ------------------------------ //
# --------------------------------------------------------------------------- #

# Foco de hoje
# Entrada e Saída de Dados

...
# instalando um ambiente virtual
# - python3 -m venv .venv
...
# ativar o ambiente virtual
# - source .venv/bin/activate
...
# └─# pip install flake8 black
...
# confirmar o local de trabalho
# - which python3
...
# Sair do ambiente virtual
# - deactivate

...
# vamos uar a pasta "ao-vivo"

# ./ao-vivo/dados/frentes.json
# ./ao-vivo/src/importer.py
# ./ao-vivo/src/analyzer.py
# ./ao-vivo/src/menu.py
# ./ao-vivo/src/exporter.py

# --------------------------------------------------------------------------- #
# - > AULA ao VIVO - 32.2 ----- <--- / FIM --------------------------------- //
# #####################################
# - > EXERCÍCIO do dia - 32.2 - <--- / INICIO ------------------------------ //
# --------------------------------------------------------------------------- #

# Agora a prática

...
# Exercício 1: Faça um programa que receba um nome e imprima o mesmo na
# vertical em escada invertida. Ex: # PEDRO
# PEDRO
# PEDR
# PED
# PE
# P

...
# Exercício 2: Jogo da palavra embaralhada. Desenvolva um jogo em que a
# pessoa usuária tenha que adivinhar uma palavra que será mostrada com as
# letras embaralhadas. O programa terá uma lista de palavras e escolherá uma
# aleatoriamente. O jogador terá três tentativas para adivinhar a palavra.
# Ao final a palavra deve ser mostrada na tela, informando se a pessoa ganhou
# ou perdeu o jogo.
# 🦜 Para embaralhar uma palavra faça: scrambled_word = "".join(random.sample
# word, len(word)))
# 🦜 O sorteio de uma palavra aleatória pode ser feito utilizando o método
# choice: random.choice(["word1", "word2", "word3"]) -> "word2".

...
# Exercício 3: Modifique o exercício anterior para que as palavras sejam lidas
# de um arquivo. Considere que o arquivo terá cada palavra em uma linha.

...
# Exercício 4: Dado o seguinte arquivo no formato JSON , leia seu conteúdo e
# calcule a porcentagem de livros em cada categoria, em relação ao número
# total de livros. O resultado deve ser escrito em um arquivo no formato CSV
# como o exemplo.
# categoria, porcentagem
# Python,0.23201856148491878
# Java,0.23201856148491878
# PHP,0.23201856148491878

# Bônus

...
# Exercício 5: Utilizando o arquivo pokemons.json , vamos escrever um programa
# que sorteie um pokemon aleatoriamente. O programa deve perguntar à pessoa
# usuária "Quem é esse pokemon?", até que ela o acerte. A cada erro, apresente
# um número de letras do nome daquele pokemon igual ao número de erros.
# Exemplo: o pokemon sorteado pelo programa é butterfree, a pessoa usuária
# chuta charizard, o programa deve exibir b . Em seguida, a pessoa chuta
# blastoise, o programa deve exibir bu e assim por diante até a pessoa acertar.
# 🦜 Você pode utilizar o método choice do modulo random para sortear
# aleatoriamente um pokemon. Ex: random.choice(pokemon) ->
# Saída: {"name": "Pikachu", }


# --------------------------------------------------------------------------- #
# - > EXERCÍCIO do dia - 32.2 - <--- / FIM --------------------------------- //
# ########################################## Entrada e Saída de Dados
# - Concluído \o/------------------------------------------------------------ #
