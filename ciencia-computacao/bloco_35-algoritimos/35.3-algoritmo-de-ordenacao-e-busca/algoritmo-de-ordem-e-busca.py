# ########################################## Algoritmos de ordenação e busca
# --> CONTEÚDO do dia - 35.3 - <--- / INICIO ----------------------------- //
# ########################################## Algoritmos de ordenação e busca

# Algoritmos de Ordenação
# Algoritmos de Busca

""" ---> OBJETIVO <---
- Implementar algoritmos de busca como busca linear e busca binária;
- Escrever algoritmos de ordenação, como por exemplo, ordenação por bolha, inserção, seleção;
- Utilizar técnicas de "força bruta" e "dividir e conquistar";
- Analisar a complexidade e escolher o algoritmo adequado para seu problema.

"""

# ---> Conteúdos <---

"""  --------------------------------------------------------------------------- 
| -> Algoritmos de Ordenação <-  ( sorting algorithms )                        |
---------------------------------------------------------------------------  """
# - Algoritmo de ordenação(sorting algorithms) são uma categoria de algoritmos que buscam colocar elementos de uma sequência em uma determinada ordem definida.
# Esta ordem pode ser numérica, lexicográfica ou por qualquer outra característica.
# As razões para se ordenar uma sequência podem variar desde facilitar a visualização até facilitar uma busca.

""" Algoritmos de ordenação que usam força bruta """
# - força bruta caracteriza-se por ser uma técnica que se testa todas as possibilidades existentes para resolver um problema.

# imagine que você tem um cadeado com 4 dígitos, cada um de 0-9. Você esqueceu sua combinação, mas não quer comprar outro cadeado. Como você não consegue se lembrar de nenhum dos dígitos, é necessário usar um método de força bruta para abrir a fechadura. Portanto, você define todos os números de volta para 0 e os tenta um por um: 0001 , 0002 , 0003 e assim por diante até que seja aberto.

""" Selection Sort """
# A ordenação por seleção(selection sort), divide o array em duas partes, uma já ordenada e outra de itens a serem ordenados.
# Em seguida, selecionaremos o menor elemento na lista não ordenada e o incluiremos na lista ordenada.
# Isto será feito continuamente até que nossa lista de elementos não ordenados se esgote, e logo teremos uma lista com os itens ordenados.
""" 
# Vamos supor os números não ordenados
- ordenados =
- não ordenados = 3 6 1 7

# Buscamos entre os elementos não ordenados o menor elemento
- menor = 1

# Vamos adicioná-lo a lista de elementos ordenados
- ordenados = 1
- não ordenados = 6 3 7

# Agora repetimos o passo de busca
- menor = 3

# Assim teremos
- ordenados = 1 3
- não ordenados = 6 7

# Como ainda não esgotamos os números a serem ordenados repetiremos a busca
menor = 6

# Agora temos quase todos os elementos ordenados
- ordenados = 1 3 6
- não ordenados = 7

# Faremos a busca pelo menor elemento novamente (único)
- menor = 7

# Esgotamos as possibilidades e temos nossa lista ordenada
- ordenados = 1 3 6 7
 """

# Na prática
# ./selection-sort.py 

# independente de todos os elementos estarem ordenados (ou não), ou parcialmente ordenados, sempre teremos que percorrer o array completamente e também n - 1 elementos a cada iteração. Isto nos leva a uma complexidade O(n²)

""" Insertion Sort """
# A ordenação por inserção(insertion sort), tem esse nome por inserir um elemento de cada vez em sua posição correta. Fazendo uma analogia a um jogo de cartas, onde sua "mão" esteja ordenada, é como se a cada nova carta recebida fossemos movendo ela até achar a posição correta e a inserimos ali, e faremos isso sucessivamente até que não tenha novas cartas e por consequência, nossa mão esteja ordenada.
""" 
# Vamos supor os números não ordenados
- coleção = 3 2 1 7

# vamos pegar o primeiro elemento e movê-lo até sua posição
- elemento = 3

# como não há elementos a esquerda de 3 não o movemos
- coleção = 3 2 1 7

# agora vamos pegar o segundo elemento
- elemento = 2

# vamos movê-lo à esquerda, enquanto seu valor for menor
# que o elemento a sua esquerda
             ⤺
- coleção = 2 3 1 7

# próximo elemento da coleção
- elemento = 1

# vamos inseri-lo na  posição correta,
# movendo para a esquerda enquanto seu valor for menor
# que o elemento a esquerda
             ⤺ ⤺
- coleção = 1 2 3 7

# por fim verificamos o último elemento
- elemento = 7

# não há elementos menores a esquerda
# e a coleção está ordenada
- coleção = 1 2 3 7
 """

# Na prática
# ./insertion-sort.py

# Como precisamos percorrer cada um dos elementos, e depois percorrer comparando os elementos à esquerda do mesmo, em um pior caso, onde o array esteja inversamente ordenado, teremos uma complexidade de O(n²) . Isto se repete também em média, para arrays parcialmente ordenados. Porém se inicialmente o array estiver ordenado, este algoritmo terá complexidade O(n)

""" Algoritmos de ordenação que usam soluções iterativas """
# - Soluções iterativas consistem na realização de uma ou mais operações repetidas vezes, por meios de comandos de repetição. As ordenações demonstradas acima (seleção, inserção), são consideradas iterativas, pois estamos realizando operações de comparação e troca de elementos repetidas vezes, por meios de comandos de repetição ( for ).
# 💡 Toda solução iterativa pode ser reescrita de forma recursiva.

""" Bubble Sort """
# ordenação por bolha(bubble sort), têm esse nome, pois a movimentação dos elementos lembra o movimento das bolhas em um refrigerante. São realizadas múltiplas iterações sobre a coleção, sempre comparando o valor ao item adjacente e realizando a troca daqueles que estão fora de ordem. A cada iteração o próximo maior valor é colocado em sua posição correta, ou seja, cada item se desloca como uma bolha para a posição a qual pertence.
""" 
# Vamos supor os números não ordenados
- coleção = 7 5 1 2

# vamos realizar a primeira iteração.
# Comparamos os dois primeiros elementos (índices 0 e 1)
- 7 > 5 ?

# como o 7 é maior 5, faremos a troca de posição

           ⤺
- coleção = 5 7 1 2
           ⤻
# Agora comparamos os elementos dos índices 1 e 2

- 7 > 1?

# Novamente faremos a troca
             ⤺
- coleção = 5 1 7 2
             ⤻

# Depois, comparamos os índices 2 e 3

- 7 > 2

# Mais uma vez faremos a troca
               ⤺
- coleção = 5 1 2 7
               ⤻

# Como houveram trocas, vamos iterar mais uma vez nossa coleção
# O elemento 7, como uma bolha, foi subindo até sua posição
- coleção = 5 1 2 7

# Comparamos os primeiros elementos e faremos a troca
           ⤺
- coleção = 1 5 2 7
           ⤻

# Em seguida comparamos os próximos elementos e faremos a troca novamente

             ⤺
- coleção = 1 2 5 7
             ⤻
# Como houveram trocas precisamos iterar novamente a nossa coleção
- coleção = 1 2 5 7

# Porém desta vez não há trocas e nossa coleção está ordenada
 """

# Na prática
# ./bubble-sort.py

""" Algoritmos de ordenação que usam dividir e conquistar """
# Algoritmos que utilizam da técnica de dividir e conquistar , consistem em dividir um problema grande em partes menores, encontrar soluções para as partes menores, e então combinar as soluções obtidas em uma solução global. Esta técnica produz um algoritmo eficiente, caso a divisão e conquista sejam eficientes.
# 💡 Os algoritmos abaixo foram implementados de forma recursiva, mas lembre-se, toda solução recursiva pode ser reescrita de forma iterativa.


""" Merge sort """
# - A ordenação por mistura ( merge sort ), é um algoritmo onde empregamos a técnica da divisão e conquista. Vamos dividindo a nossa coleção em porções menores, até uma coleção mínima. Em seguida vamos misturando as porções, de forma ordenada, até que toda a coleção seja reunida novamente resultando na ordenação.
""" 
# Vamos supor os números não ordenados
- coleção = 7 5 1 2 8 4 6 3

# Separamos nosso array em porções menores
- 7 5 1 2         8 4 6 3

# continuamos fazendo isto
# até a menor porção possível (1)
- 7 5    1 2    8 4    6 3

# Até a menor porção possível (1)
- 7    5    1    2    8    4    6    3

# Feito o processo de divisão, vamos ao processo de conquista.
# Vamos reagrupando as divisões mas de forma ordenada
- 5 7    1    2    8    4    6    3

- 5 7    1 2    8    4    6    3

- 5 7     1 2    4 8    6    3

- 5 7     1 2    4 8    3 6

# Continuamos o reagrupamento
- 1 2 5 7    4 8    3 6

- 1 2 5 7    3 4 6 8

# Por fim misturamos todos os elementos
- 1 2 3 4 5 6 7 8
"""

# Na prática
# ./merge-sort.py

# A separação em partes traz uma complexidade O(log n) , e as misturas O(n) . Com isso, temos uma complexidade de O(n log n) , independente do array estar ordenado por completo, não ordenado, ou parcialmente ordenado.
# Como é um algoritmo recursivo, consome mais memória, possuindo uma complexidade de espaço O(n) , ou seja, cresce linearmente proporcional a entrada de dados.

""" Quick Sort """
# - é um algoritmo que também utiliza da técnica de divisão e conquista. Sua estratégia de ordenação consiste em determinar um elemento pivô (nome dado ao elemento que divide o array em porções menores). Em seguida, todos os elementos maiores que o pivô serão colocados a direita e os menores a esquerda. Com isto, o pivô estará em sua posição correta e teremos duas sub coleções não ordenados ao seu redor. Recursivamente ordenamos os sub arrays, repetindo o mesmo processo de escolha do pivô e particionamento (divisão).
""" 
# Vamos supor os números não ordenados
- coleção = 7 1 2 5 4 6 3

# Faremos a escolha do elemento pivô.
# Este elemento será o responsável por particionar (dividir) a lista.
# Posso escolher qualquer elemento neste passo e, por isso,
# vou escolher o elemento do meio
- pivot = 5

# Movemos todos os elementos menores para a esquerda e os maiores para a direita (a)
- 1 2 4 3    5    7 6

# Precisamos ordenar as coleções geradas,
# começando com a lista de elementos inferiores
- 1 2 4 3

# Novamente escolhemos o pivot
- pivot = 2

# Novamente fazemos a divisão (b)
- 1    2    4 3

# A lista à esquerda já não tem como ser particionada,
# porém a da direita ainda pode ser particionada (c)
- 4 3

# Escolhendo o pivô e movendo os outros elementos
# chegaremos a
- 3    4

# Agora precisamos o processo de conquista,
# voltando recursivamente ao passo (c), que pediu para ordenar
# a sub coleção 4 3, temos como resposta
- 3 4
# essa resposta, nos faz retornar ao passo (b), onde concatenaremos ao pivô a ordenação do lado direito e esquerdo,
# resultando em
- 1 2 3 4

# Vamos agora ver o outro lado do passo (a)
- 7 6

# realizando o mesmo processo
# após escolher o pivô e realizar os movimentos teremos
- 6    7

# Por fim a resposta é utilizada lá no passo (a) para concatenarmos os dois lados
# e termos por fim a lista ordenada
- 1 2 3 4 5 6 7
 """

# Na prática
# ./quick-sort.py

# - Normalmente esta ordenação ocorre com complexidade O(n log n) , porém em um pior caso (onde o array está ordenado de forma inversa), ocorrerá com complexidade O(n²) .
# 💡 Curiosidade: Por baixo dos panos, quando você utiliza a função sorted padrão do python ou faz array.sort , você está utilizando uma ordenação chamada TimSort , que é um algoritmo híbrido que mistura o merge sort e insertion sort. É também utilizado pela linguagem Java para ordenar arrays.


"""  --------------------------------------------------------------------------- 
| -> Algoritmos de Busca <-                                                    |
---------------------------------------------------------------------------  """
# - buscam um item com uma determinada propriedade dentro de uma coleção, podendo esta coleção ser gerada elemento a elemento, a partir de uma série de operações(formula matemática, procedimento),
# não necessitando uma coleção de fato. 
# Não devem ser associados somente com arrays. 
# São considerados algoritmos desta categoria àqueles que fazem travessias em estruturas de dados, com o propósito de encontrar um valor.


""" Busca Linear """
# - consiste em percorrer toda a estrutura elemento a elemento, tentando encontrar o valor. Também é conhecida como busca sequencial, por causa da maneira com que percorremos a estrutura em busca do valor.

# Na prática
# ./busca-linear.py

""" Busca Binária """
# - (binary search) Empregamos a técnica da divisão e conquista. É importante destacar que ela supõe que nossa coleção está ordenada e seu funcionamento é através de múltiplas divisões do espaço de busca, reduzindo-o, buscando o elemento no meio do espaço.


# Vamos supor a seguinte lista: [1, 10, 35, 42, 51, 60, 75] e o número buscado é 60 . Dividimos a lista em duas partes e verificamos se o elemento do meio ( 42 ) é o elemento procurado. Como sabemos que a lista esta ordenada e que o valor buscado é maior que o encontrado, não precisamos comparar com todos os outros à esquerda. Vamos procurar somente os valores posteriores a ele [51, 60, 75] . Realizamos o mesmo processo de divisão e nosso elemento do meio passa a ser 60 . Como encontramos o valor, vamos retornar o seu índice, 5 .


# Na prática
# ./busca-binaria.py


# #####################################
# --------------------------------------------------------------------------- #
# - > CONTEÚDO do dia - 35.3 - <--- / FIM ---------------------------------- //
# #####################################
# - > AULA ao VIVO - 35.3 ----- <--- / INICIO ------------------------------ //
# --------------------------------------------------------------------------- #

# Foco de hoje
# ... Algoritmos de ordenação e busca




# #####################################
# --------------------------------------------------------------------------- #
# - > AULA ao VIVO - 35.3 ----- <--- / FIM --------------------------------- //
# #####################################
# - > EXERCÍCIO do dia - 35.3 - <--- / INICIO ------------------------------ //
# --------------------------------------------------------------------------- #

""" Agora a prática """

""" 
Para medir o tempo de execução de um algoritmo (em segundos) implemente a seguinte classe :

# from time import perf_counter


# class Cronometro:
#     def __init__(self, name="Seu algoritmo"):
#         self.name = name
#     def __enter__(self):
#         self.start = perf_counter()
#     def __exit__(self, *exc):
#         elapsed = perf_counter() - self.start
#         print(f"{self.name} demorou {elapsed} segundos")
# Para utilizar o Cronometro , basta usá-lo dentro de um with e em seguida chamar a função:

# from Cronometro import Cronometro


# with Cronometro("algoritmo"):
#     algoritmo(...)
"""

# Exercício 1: Dado um array com os seguintes elementos ["zebra", "macaco", "elefante", "arara", "javali"] , após duas iterações utilizando bubble sort , como estaria este array?
""" R = ["elefante", "arara", "javali", "macaco", "zebra" """

# Exercício 2 Demonstre o passo a passo, do processo de mistura, de um array sendo ordenado, utilizando merge sort . Comece o passo a passo a partir da linha abaixo:
# 7 3    5 4    6 8    2 1
""" R = ./ex2-merge-sort.py """

# Exercício 3 Execute os algoritmos de ordenação por seleção e inserção, para as entradas de dados ordenadas, inversamente ordenadas e aleatórias, em seguida, compare-os. Faça testes para entradas de tamanho 10.000, 100.000, 1.000.000.
# 🦜 A entrada de dados pode ser gerada da seguinte maneira:
# from random import shuffle

# ordenados = list(range(100))
# inversamente_ordenados = list(reversed(range(100)))
# aleatorios = ordenados[:] # copia dos ordenados
# shuffle(aleatorios) # embaralha eles
""" R = ./ex3-ordenacao-por-selacao.py """

# Exercício 4 Compare o tempo de execução do algoritmo merge_sort e bubble_sort para uma entrada de 10.000 valores aleatórios. Explique através de análise de complexidade o que ocorre.
""" R = ./ex4-merge_sort-e-bubble_sort.py """
# No bubble sort em um caso médio temos uma complexidade de O(n²), normalmente temos n² trocas, já o merge sort, como utiliza dividir e conquistar, consegue ter uma complexidade O(n log n) em média. Mesmo em um pior cenário, onde ao embaralharmos os dois arrays, tornando-os inversamente ordenados, o merge sort seria mais rápido, pois sua complexidade ainda seria O(n log n) e o bubble sort teria complexidade quadrática O(n²) .


# Exercício 5 Converta o algoritmo recursivo de busca binária em iterativo.
""" R = ./ex5-convert-recursivo-em-iterativo.py """

# Exercício 6 Para descobrirmos qual commit introduziu um erro no sistema, precisamos voltar no tempo verificando os commits antigos, de modo a descobrir um commit em que os testes falham.
# Supondo que isto será representado como um array de booleanos , descubra o índice onde o erro ocorreu pela primeira vez.
# Como os testes demoram a rodar, resolva o problema rodando o mínimo de testes possíveis.
# entrada: [True, True, True, True, False, False, False]
# saída: 4
# entrada: [True, True, False, False, False, False, False]
# saída: 2
# 💡 Curiosidade: O comando git bisect executa de maneira similar a este exercício, se implementado de forma eficiente 😂.
""" R = ./ex6-verifica-commits.py """


# #####################################
# --------------------------------------------------------------------------- #
# - > EXERCÍCIO do dia - 35.3 - <--- / FIM --------------------------------- //
# ########################################## Algoritmos de ordenação e busca
# - Concluído ... ------------------------------------------------------------ #

""" Recursos Adicionais """
# Visualização gráfica dos algoritmos de ordenação
# https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html

# Programação Dinâmica - Playlist sobre ordenações
# https://www.youtube.com/watch?v=ZT_dT8yn48s&list=PL5TJqBvpXQv4l7nH-08fMfyl7aDFNW_fC

# Visualização gráfica dos algoritmos de busca
# https://www.cs.usfca.edu/~galles/visualization/Search.html

# Programação Dinâmica - Busca Binária
# https://youtu.be/EgLE5HwRy_M
