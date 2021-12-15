# ########################################## Aprendendo Python
# --> CONTEÚDO do dia - 32.1 - <--- / INICIO ----------------------------- //
# ########################################## Aprendendo Python

# Introdução (O que é Python?)
# Terminal Interativo (REPL)
# Operações básicas
# Tipos de dados embutidos
# Estruturas condicionais
# Estruturas de repetição
# Funções
# Escrevendo os primeiros arquivos
# Uma última dica
# Fixando os aprendizados
# Vamos praticar!
# Exercícios - Agora a prática
# Bônus
# Recursos adicionais (opcional)


# ---> Conteúdos <---

# --------------------------------------------------------------------------- <
# -> Introdução (O que é Python?)
# --------------------------------------------------------------------------- <
# - É uma linguagem de programação que busca simplicidade em sua sintaxe, o
# que proporciona legibilidade e produtividade. Seu interpretador pode ser
# executado em diversos sistemas operacionais como Linux, MacOS e Windows,
# quase sempre sem mudanças no código.

# --------------------------------------------------------------------------- <
# -> Terminal Interativo (REPL)
# --------------------------------------------------------------------------- <
# - Distribuições do sistema operacional Linux , e o Mac , normalmente já vem
# com uma versão Python instalada.

# └─# python3
# Python 3.9.7 (default, Sep 24 2021, 09:43:00)
# [GCC 10.3.0] on linux
# Type "help", "copyright", "credits" or "license" for more information.
# >>>

print("Olá mundo!")

# --------------------------------------------------------------------------- #
# -> Operações básicas
# --------------------------------------------------------------------------- #

# Digite 'import antigravity' e aperte enter.
# import antigravity
# import this

2 * 3  # saída: 6
2 + 3  # saída: 5
3 / 2  # saída: 1.5

# raiz quadrada de 25. O operador `**` significa "elevado a" === 5.0
square_root = 25 ** (1 / 2)
# saída: 6.0
print(square_root + 1)

# # esse código vai falhar
# counter = 0
# counter++

# original
counter = []  # linha criad para retirar o erro
counter = counter + 1
# simplificado
counter += 1

3 // 2  # saída: 1
3 / 2  # saída: 1.5

# --------------------------------------------------------------------------- #

# Exercício 1: No terminal, inicialize duas variáveis a e b, sendo a = 10 e
# b = 5. Mostre o resultado das 7 operações básicas (soma, subtração,
# multiplicação, divisão, divisão inteira, potenciação e módulo) envolvendo
# essas variáveis.
a = 10
b = 5

a + b
15
a - b
5
a * b
50
a / b
2.0
a // b
2
a ** b
100000
a % b
0

# Exercício 2: Declare e inicialize uma variável: hours = 6 . Quantos minutos
# têm em 6 horas? E quantos segundos? Declare e inicialize variáveis minutes e
# seconds que recebem os respectivos resultados das contas. Depois, imprima
# cada uma delas.
hours = 6
minutes = hours * 60
seconds = minutes * 60
hours
6
minutes
360
seconds
21600

# Exercício 3: Teste e verifique o que acontece se você colocar um ponto e
# vírgula no final de uma instrução em Python.
ex3 = 5
ex3
5

# Exercício 4: Suponha que o preço de capa de um livro seja 24,20, mas as
# livrarias recebem um desconto de 40%. O transporte custa 3,00 para o primeiro
# exemplar e 75 centavos para cada exemplar adicional. Qual é o custo total de
# atacado para 60 cópias? Escreva uma expressão que receba o custo total e a
# imprima.
livro = 24.20
desconto_livraria = livro * 0.4
livro_com_desconto = livro - desconto_livraria
transporte = 3.00
transporte_maior = 0.75
total = 60 * (transporte_maior + livro_com_desconto)
total
916.1999999999999

# Solução do corse
books = 60
book_price = (1 - 0.4) * 24.20
logistic = 3 + (books - 1) * 0.75
cost = books * book_price + logistic
cost
918.4499999999999


# --------------------------------------------------------------------------- #
# -> Tipos de dados embutidos
# --------------------------------------------------------------------------- #

# -> Números "inteiros" (int)
a = 5
type(a)  # <class 'int'>

# 💡 O método type(operando) corresponde ao operador typeof operando do
# JavaScript.

# -> Números "fracionários" (float)
a = 5.0
type(a)  # <class 'float'>

# -> Números "complexos" (complex)
3 + 4j  # saída: (3+4j)

(3 + 4j) + 4  # (7+4j)

a = 5j
type(a)  # <class 'complex'>

# -> Strings (str)
# As strings são definidas envolvendo um valor com aspas simples ou duplas.

# -> Booleanos (bool)
True  # True
False  # False

# sequência
list  # <class 'list'>
tuple  # <class 'tuple'>
range  # <class 'range'>

# conjuntos
set  # <class 'set'>
frozenset  # <class 'frozenset'>

# mapeamento
dict  # <class 'dict'>
bytes  # <class 'bytes'>
bytearray  # <class 'bytearray'>
memoryview  # <class 'memoryview'>

# --------------------------------------------------------------------------- #

# -> LISTAS (list)
great_chess_players = ["Magnus Carlsen", "Fabiano Caruana"]
great_chess_players
["Magnus Carlsen", "Fabiano Caruana"]

great_chess_players.append("Diego")
great_chess_players
["Magnus Carlsen", "Fabiano Caruana", "Diego"]

great_chess_players.remove("Diego")
great_chess_players
["Magnus Carlsen", "Fabiano Caruana"]

more_chess_players = [
    "Hikaru Nakamura",
    "Viswanathan anand",
    "Alireza Firouzja",
]

great_chess_players.extend(more_chess_players)
great_chess_players
[
    "Magnus Carlsen",
    "Fabiano Caruana",
    "Hikaru Nakamura",
    "Viswanathan anand",
    "Alireza Firouzja",
]

world_champion = ("Magnus Carlsen", 1)
world_champion[0]
"Magnus Carlsen"

world_champion[1]
1

great_chess_ranking = [world_champion]
great_chess_players
[("Magnus Carlsen", 1)]

great_chess_ranking.append(("Fabiano Caruana", 2))
great_chess_ranking
[("Magnus Carlsen", 1), ("Fabiano Caruana", 2)]

great_chess_ranking.extend(([great_chess_players[2], 18]))
great_chess_ranking
[("Magnus Carlsen", 1), ("Fabiano Caruana", 2), "Hikaru Nakamura", 18]

great_chess_ranking.extend(
    [(great_chess_players[3], 15), (great_chess_players[4], 21)]
)
great_chess_ranking
[
    ("Magnus Carlsen", 1),
    ("Fabiano Caruana", 2),
    "Hikaru Nakamura",
    18,
    ("Viswanathan anand", 15),
    ("Alireza Firouzja", 21),
]

jogador = {"nome": "Diego", "Cidade": "Belém"}
jogador["nome"]
"Diego"

admin_user = {"Diego", "Serafim", "Rose"}
data_squad = {"Jamyly", "Rose", "Rosa"}
admin_user.intersection(data_squad)
{"Rose"}

all_users = {"Diego", "Serafim", "Jamyly", "Rose", "Rosa"}
all_users.difference(admin_user)
{"Jamyly", "Rosa"}

standard_acess_users = all_users.difference(admin_user)
admin_user = admin_user.union(standard_acess_users)
admin_user
{"Rose", "Jamyly", "Rosa", "Serafim", "Diego"}

# elementos são definidos separados por vírgula, envolvidos por colchetes
fruits = ["orange", "apple", "grape", "pineapple"]
# o acesso é feito por indices iniciados em 0
fruits[0]
# o acesso também pode ser negativo
fruits[-1]
# adicionando uma nova fruta
fruits.append("banana")
# removendo uma fruta
fruits.remove("pineapple")
# acrescenta uma lista de frutas a lista original
fruits.extend(["pear", "melon", "kiwi"])
# retorna o índice onde a fruta está localizada, neste caso 1 em seu programa
fruits.index("apple")
# ordena a lista de frutas
fruits.sort()

trybe_course = ["Introdução", "Front-end", "Back-end"]

# Exercício 5: Adicione o elemento "Ciência da Computação" à lista.
trybe_course.append("Ciência da Computação")
trybe_course
["Introdução", "Front-end", "Back-end", "Ciência da Computação"]

# Exercício 6: Acesse e altere o primeiro elemento da lista para "Fundamentos".
trybe_course[0] = "Fundamentos"
trybe_course
["Fundamentos", "Front-end", "Back-end"]

# --------------------------------------------------------------------------- #

# TUPLAS (tuple)
user = (
    "Cássio",
    "Botaro",
    42,
)  # elementos são definidos separados por vírgula, envolvidos por parenteses
user[0]  # acesso também por índices

user = ("Diego", "Serafim")
user[0]
"Diego"
user[1]
"Serafim"

# --------------------------------------------------------------------------- #

# CONJUNTOS (set)

# elementos separados por vírgula, envolvidos por chaves
permissions = {"member", "group"}

# adiciona um novo elemento ao conjunto
permissions.add("root")  # {'group', 'member', 'root'}

# como o elemento já existe, nenhum novo item é adicionado ao conjunto
permissions.add("member")

# retorna um conjunto resultado da união
permissions.union({"user"})  # {'group', 'member', 'user', 'root'}

# retorna um conjunto resultante da intersecção dos conjuntos
permissions.intersection({"user", "member"})  # {'member'}

# retorna a diferença entre os dois conjuntos
permissions.difference({"user"})  # {'group', 'member', 'root'}

# --------------------------------------------------------------------------- #

# Exercício 7: Um conjunto ou set pode ser inicializado utilizando-se também o
# método set() . Inicialize uma variável com essa função var = set() e adicione
# seu nome ao conjunto utilizando um dos métodos vistos acima. Depois, imprima
# a variável e confira se o retorno é: {'seu_nome'}.
var = set()
var.add("Diego Serafim")
var
{"Diego Serafim"}

# --------------------------------------------------------------------------- #

# CONJUNTOS IMUTÀVEIS (frozenset)

# assim como o set, qualquer estrutura iterável pode ser utilizada para criar
# um frozenset
permissions = frozenset(["member", "group"])  # frozenset({'group', 'member'})

# novos conjuntos imutáveis podem ser criados à partir do original, mas o mesmo
# não pode ser modificado
permissions.union({"user"})  # frozenset({'group', 'member', 'user'})

# retorna um conjunto resultante da intersecção dos conjuntos
permissions.intersection({"user", "member"})  # frozenset({'member'})

# retorna a diferença entre os dois conjuntos
permissions.difference({"user"})  # frozenset({'group', 'member'})

# --------------------------------------------------------------------------- #

# DICIONÁRIOS (dict)

# elementos no formato "chave: valor" separados por vírgula, envolvidos por
# chaves
people_by_id = {1: "Cássio", 2: "João", 3: "Felipe"}

# outro exemplo, dessa vez usando strings como chaves (ao contrário de JS, as
# aspas duplas são obrigatórias)
people_by_name = {"Cássio": 1, "João": 2, "Felipe": 3}

# elementos são acessados por suas chaves
people_by_id[1]  # saída: Cássio

# elementos podem ser removidos com a palavra chave del
del people_by_id[1]
people_by_id.items()  # dict_items([(2, 'João'), (3, 'Felipe')])
# um conjunto é retornado com tuplas contendo chaves e valores

# --------------------------------------------------------------------------- #

info = {
    "personagem": "Margarida",
    "origem": "Pato Donald",
    "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

# Exercício 8: O que acontecerá se você tentar acessar o valor da chave
# "personagem" como fazíamos em JavaScript, utilizando object.key ?
# R - daria erro de sintaxe

# Exercício 9: Insira no objeto uma nova propriedade com o nome de chave
# "recorrente" e o valor "Sim". Em seguida, imprima o objeto no console.
info["recorrente"] = "sim"
info  # {'personagem': 'Margarida', 'origem': 'Pato Donald', 'nota': 'Namorada
# do personagem principal nos quadrinhos do Pato Donald', 'recorrente': 'sim'}

# Exercício 10: Remova a propriedade cuja chave é "origem" e imprima o objeto
# no console.
del info["origem"]
info  # {'personagem': 'Margarida', 'nota': 'Namorada do personagem principal
# nos quadrinhos do Pato Donald', 'recorrente': 'sim'}

# --------------------------------------------------------------------------- #

# RANGE (range)

# vamos converter o range em uma lista para ajudar na visualização

# definimos somente o valor de parada
list(range(5))  # saída: [0, 1, 2, 3, 4]

# definimos o valor inicial e o de parada
list(range(1, 6))  # saída: [1, 2, 3, 4, 5]

# definimos valor inicial, de parada e modificamos o passo para 2
list(range(1, 11, 2))  # saída: [1, 3, 5, 7, 9]

# podemos utilizar valores negativos para as entradas também
list(range(10, 0, -1))  # saída: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

# Exercício 11: Após uma consulta do banco de dados, temos linhas que contém
# nome, sobrenome e idade como: "Thiago", "Nobre", 29 . Que estrutura vista
# anteriormente seria recomendada dado que após esta consulta somente exibimos
# estes valores.
# R- 'tuple', caso necessitasse editar valores, usaria uma 'list'

# Exercício 12: Realizar a contagem de quantas vezes cada elemento aparece em
# uma sequência é uma técnica muito útil na solução de alguns problemas. Qual
# é a estrutura mais recomendada para o armazenamento desta contagem?
# R- 'dict', consegue armazenar o elemento da lista como chave e a quatidade
# de vezes que ele aparece, como valor da chave


# --------------------------------------------------------------------------- #
# -> Estruturas condicionais
# --------------------------------------------------------------------------- #

pantheon_of_arton = [
    {"nome": "Wynna", "dominio": "Magia"},
    {"nome": "Ninb", "dominio": "Sorte"},
    {"nome": "Ahadarak", "dominio": "Tormento"},
]

from random import randint

dice_roll = randint(1, 20)

if dice_roll == 1:
    print("vixi.. Deu ruim!")
elif 2 <= dice_roll <= 15:
    print("Ahadarak, porque me atormentas?")
elif 16 <= dice_roll <= 19:
    print("Ninb, obrigado pela sorte!")
else:
    print("Agora ninguém me segura!")

# Agora ninguém me segura!

# --------------------------------------------------------------------------- #

dice_roll  # 20

pantheon_of_arton
# [{'nome': 'Wynna', 'dominio': 'Magia'}, {'nome': 'Ninb', 'dominio': 'Sorte'},
# {'nome': 'Ahadarak', 'dominio': 'Tormento'}]

# --------------------------------------------------------------------------- #

domains = []
for god in pantheon_of_arton:
    domains.append(god["dominio"])

domains  # ['Magia', 'Sorte', 'Tormento']

# --------------------------------------------------------------------------- #

domains = [god for god in pantheon_of_arton if god["dominio"] != "Tormento"]

domains  # [{'nome': 'Wynna', 'dominio': 'Magia'}, {'nome': 'Ninb', 'dominio':
# 'Sorte'}]

# --------------------------------------------------------------------------- #

domains = [god for god in pantheon_of_arton if god["dominio"] != "Sorte"]
domains  # [{'nome': 'Wynna', 'dominio': 'Magia'}, {'nome': 'Ahadarak',
# 'dominio': 'Tormento'}]

# --------------------------------------------------------------------------- #

domains = [
    god["dominio"] for god in pantheon_of_arton if god["dominio"] != "Tormento"
]
domains  # ['Magia', 'Sorte']

# --------------------------------------------------------------------------- #

# 🎲 Em uma análise de dados sobre pessoas desenvolvedoras, temos uma base de
# dados que contém o salário de várias pessoas, porém não temos informação da
# senioridade das mesmas. Para fazer um agrupamento por senioridade precisamos
# criar uma nova coluna que será baseada no salário.

# Caso o salário seja menor que "R$2.000,00", a pessoa será considerada como
# estagiária, para salários entre R$2.000,00 e R$5.800,00 júnior, entre
# R$5.800,00 e R$7.500,00 pleno, entre R$7.500,00 e R$10.500,00 será sênior
# e qualquer valor acima disto consideraremos líder.

position = ""
salary = []
if salary <= 2000:
    position = "estagiário"
elif 2000 < salary <= 5800:
    position = "júnior"
elif 5800 < salary <= 7500:
    position = "pleno"
elif 7500 < salary <= 10500:
    position = "senior"
else:
    position = "líder"

# ----------------------------------------------------------------------- #

key = "id"
from_to = {
    "id": "identifier",
    "mail": "email",
    "lastName": "last_name",
}
from_to[key]  # 'identifier'


# ----------------------------------------------------------------------- #
# -> Estruturas de repetição
# ----------------------------------------------------------------------- #
# FOR

# 🥗 Pense em um sistema que faça a listagem de restaurantes. Estes
# restaurantes possuem uma nota proveniente da avaliação dos seus clientes.
restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]

# Quando um cliente pede a listagem de restaurantes, ele pode escolher filtrar
# o resultado de acordo com a nota.
# Podemos fazer isto percorrendo a lista de restaurantes, criando uma nova
# lista com somente aqueles que atendem ao filtro.
filtered_restaurants = []
min_rating = 3.0
for restaurant in restaurants:
    if restaurant["nota"] > min_rating:
        filtered_restaurants.append(restaurant)
    print(filtered_restaurants)
# imprime a lista de restaurantes, sem o B e D
print(filtered_restaurants)
[{"name": "Restaurant A", "nota": 4.5}, {"name": "Restaurant C", "nota": 4.2}]
# --------------------------------------------------------------------------- #
min_rating = 3.0
filtered_restaurants = [
    restaurant for restaurant in restaurants if restaurant["nota"] > min_rating
]
print(filtered_restaurants)
# imprime a lista de restaurantes, sem o B e D
[{"name": "Restaurant A", "nota": 4.5}, {"name": "Restaurant C", "nota": 4.2}]
# --------------------------------------------------------------------------- #
for index in range(4):
    print(index)
# 0
# 1
# 2
# 3

# --------------------------------------------------------------------------- #
# WHILE

# 🔢 A Sequência de Fibonacci, é uma sequência numérica começando por 0 e 1 e
# cada termo subsequente corresponde à soma dos dois anteriores.
# Podemos escrever esta sequência da seguinte maneira:
n = 10
last, next = 0, 1
while last < n:
    print(last)
    last, next = next, last + next
# 0 1 1 2 3 5 8

# --------------------------------------------------------------------------- #
# Exercício 13: O Fatorial de um número inteiro é representado pela
# multiplicação de todos os números predecessores maiores que 0. Por exemplo o
# fatorial de 5 é 120 pois 5! = 1 * 2 * 3 * 4 * 5 . Escreva um código que
# calcule o fatorial de um número inteiro.
fatorial = 5
counter = 1
result = 1

while counter <= fatorial:
    result = result * counter
    counter += 1
    result  # 1, 2, 6, 24, 120

# Uma versão com 'range'
fatorial = 5
result = 1
# usa o fatorial + 1 pro range ir até o fatorial
for factor in range(1, fatorial + 1):
    result *= factor
    result  # 1, 2, 6, 24, 120

# Exercício 14: Um sistema de avaliações registra valores de 0 a 10 para cada
# avaliação. Após algumas mudanças estes valores precisam ser ajustados para
# avaliações de 0 a 100. Dado uma sequência de avaliações
# ratings = [6, 8, 5, 9, 10] . Escreva um código capaz de gerar as avaliações
# após a mudança. Neste caso o resultado deveria ser [60, 80, 50, 90, 100] .
# Experimente utilizar a sintaxe de compreensão de listas.
ratings = [6, 8, 5, 9, 10]
new_ratings = []
for ratin in ratings:
    new_ratings.append(ratin * 10)
    new_ratings  # [60, 80, 50, 90, 100]

# Uma versão com compreensões de lista
ratings = [6, 8, 5, 9, 10]
new_ratings = [10 * rating for rating in ratings]
new_ratings  # [60, 80, 50, 90, 100]

# Exercício 15: Percorra a lista do exercício 14 e imprima "Múltiplo de 3" se
# o elemento for divisível por 3.
ratings = [6, 8, 5, 9, 10]
for rating in ratings:
    # % representa o resto da divisão
    if (rating % 3) == 0:  # se o resto for '0' então é divisivel
        print(f"{rating} é multiplo de 3")
# 6 é multiplo de 3
# 9 é multiplo de 3

# --------------------------------------------------------------------------- #
# -> Funções
# --------------------------------------------------------------------------- #
# Indice de massa corporl


def imc(peso, altura):
    return peso / (altura / 100) ** 2


imc(70, 170)  # 24.221453287197235
# ou
imc(peso=70, altura=170)  # 24.221453287197235

# --------------------------------------------------------------------------- #


def soma(x, y):
    return x + y


soma(2, 2)  # os parâmetros aqui são posicionais

soma(x=2, y=2)  # aqui estamos nomeando os parâmetros

# --------------------------------------------------------------------------- #
# Equivalente a um ", ".join(strings), que concatena os elementos de um
# iterável em uma string utilizando um separador
# Nesse caso a string resultante estaria separada por vírgula


def concat(*strings):
    final_string = ""
    for string in strings:
        final_string += string
        if not string == strings[-1]:
            final_string += ", "
    return final_string


# pode ser chamado com 2 parâmetros
concat("Carlos", "João")  # saída: "Carlos, João"
# pode ser chamado com um número n de parâmetros
concat("Carlos", "João", "Maria")  # saída: "Carlos, João, Maria"

# --------------------------------------------------------------------------- #
# dict é uma função que já vem embutida no python
dict(
    nome="Felipe", sobrenome="Silva", idade=25
)  # cria um dicionário utilizando as chaves passadas
dict(
    nome="Ana", sobrenome="Souza", idade=21, turma=1
)  # o número de parâmetros passados para a função pode variar

# --------------------------------------------------------------------------- #
len([1, 2, 3, 4])  # função len não aceita argumentos nomeados
len(obj=[1, 2, 3, 4])  # este código irá falhar

print("Botaro", "Cássio", ", ")  # Botaro Cássio ,
print("Botaro", "Cássio", sep=", ")  # Botaro, Cássio

# --------------------------------------------------------------------------- #
# Escopo


def incrementa(x):
    x += 1
    return x


...
x = 10
...
incrementa(x)  # 11
print(x)  # 10

# --------------------------------------------------------------------------- #
# -> Escrevendo os primeiros arquivos
# --------------------------------------------------------------------------- #

# area.py - funções que calculam a área de algumas figuras geométricas.
# people.py - um script para calcular pessoas que estão presentes em um show

# --------------------------------------------------------------------------- #
# -> Uma última dica
# --------------------------------------------------------------------------- #

help("if")

import math

help(abs)

help(len)

help(math.sin)


# --------------------------------------------------------------------------- #
# - > CONTEÚDO do dia - 32.1 - <--- / FIM ---------------------------------- //
# #####################################
# - > AULA ao VIVO - 32.1 ----- <--- / INICIO ------------------------------ //
# --------------------------------------------------------------------------- #

# Foco de hoje
# Aprendendo Python

# aula1
if 4 < 5:
    print("ok")  # ok

...
4 * 5  # 20

...
a = 'a resposta é ' + '42'
print(a)  # a resposta é 42

...
help(a.isalnum)  # isalnum = alfanumérica / caracteres do alfabeto e ou números

...
a.isalnum()  # False - pq possui espaçamento

...
a = 'arespostaé' + '42'
a.isalnum()  # True - todos os caracteres são letras e ou numeros
print(a)  # arespostaé42


# - > AULA ao VIVO - 32.1 ----- <--- / FIM --------------------------------- //
# #####################################
# - > EXERCÍCIO do dia - 32.1 - <--- / INICIO ------------------------------ //

# Agora a prática

#

# - > EXERCÍCIO do dia - 32.1 - <--- / FIM --------------------------------- //
# ########################################## Aprendendo Python
