# ########################################## Complexidade de algoritmos
# --> CONTEÚDO do dia - 35.1 - <--- / INICIO ----------------------------- //
# ########################################## Complexidade de algoritmos

# Complexidade de tempo e de espaço
# Complexidade quadrática
# Comparando complexidades
# Complexidade logarítmica
# Complexidade exponencial e fatorial
# Analisando algoritmos com várias estruturas de repetição
# Melhor caso, pior caso e caso médio
# Em suma

""" ---> OBJETIVO <---
- Descrever a capacidade de analisar o desempenho de um algoritmo como importante para processos seletivos de Big Techs, como Google, Amazon, Facebook, etc

- Definir Ordem de Complexidade , ou Complexidade Assintótica , de como o quanto que o tempo de execução do algoritmo varia na medida em que a entrada cresce

- Descrever a Ordem de Complexidade como definida com o uso de funções matemáticas que representam a proporção com que a grandeza mensurada cresce na medida em que o dado entrado cresce

- Definir como O(1) a notação que representa um algoritmo de complexidade constante, ou seja, que não aumenta na medida em que o tamanho da entrada aumenta

- Definir como O(n) a notação que representa um algoritmo de complexidade linear, ou seja, uma que reduz pela metade o tamanho do input a cada iteração

- Definir como O(log n) a notação que representa um algoritmo de complexidade logaritmica

- Definir como O(n^2) a notação que representa um algoritmo de complexidade quadrática

- Definir como O(n^3) a notação que representa um algoritmo de complexidade cúbica

- Definir Complexidade de Tempo como a métrica associada ao tempo que um algoritmo vai demorar para executar

- Definir Complexidade de Espaço como a métrica associada ao espaço em memória que um algoritmo vai ocupar

- Definir como O(2^n) a notação que representa um algoritmo de complexidade exponencial

- Definir como O(n!) a notação que representa um algoritmo de complexidade fatorial

- Definir o Problema do Caixeiro Viajante - Dada uma lista de cidade e a distância entre cada par de cidades, qual é a rota mais curta possível que visita todas as cidades exatamente uma vez e volta para a cidade de origem?

- Definir a Categoria de Problemas NP-Completo como o conjunto de problemas que não tem solução conhecida em tempo polinomial, ou seja, que são fatoriais ou exponenciais

- Combinar funções matemáticas para analisar complexidade de algoritmos - por exemplo, O( 3 log n), O (n log n), O(n^3 + n^2), que se simplifica como O(n^3)

- Definir o Melhor caso de uma Ordem de Complexidade como o cenário com a entrada cujo processamento é feito, proporcionalmente, na menor quantidade de passos possível

- Definir o Pior caso de uma Ordem de Complexidade como o cenário com a entrada cujo processamento é feito, proporcionalmente, na maior quantidade de passos possível

- Definir o Caso médio de uma Ordem de Complexidade como o cenário de número de execução de passos que irá ocorrer para a maior parte de entradas possível
"""


# ---> Conteúdos <---

"""  --------------------------------------------------------------------------- 
| -> Complexidade de tempo e de espaço <-                                      |
---------------------------------------------------------------------------  """
# - Quanto tempo um algoritmo demora para executar? 😁
# - Quanto maior o dado passado por parâmetro, mais o algoritmo demorará para executar.

from numpy import number


def sum_array(numbers):
    sum = 0
    for number in numbers:
        sum += number
    return sum

# Para qualquer tamanho de entrada ele ocupa a mesma quantidade de espaço para executar.
# sua complexidade de espaço é constante
# A notação para esta complexidade é O(1)
print(sum_array([8, 2, 7, 6, 9]))  # 32

# Suponha que, para o array abaixo, o tempo de execução seja `n`
sum_array("array_com_dez_mil_numeros")

# Nesse caso, aqui o tempo de execução vai ser `10 * n`, ou `10n`, já que o array é dez vezes maior que o anterior!
sum_array("array_com_cem_mil_numeros")

# Já esse é dez mil vezes maior que o primeiro, então esse aqui executa em `100n`
sum_array("array_com_um_milhão_de_numeros")

""" Ordem de complexidade """
# - É o quanto que o tempo de execução do algoritmo varia na medida em que a entrada cresce!

sum_array("array_com_dez_mil_numeros")
# O tempo de execução deste algoritmo foi 0.0004s

sum_array("array_com_cem_mil_numeros")
# Para uma execução com dez vezes mais números, o tempo aumentou em dez vezes: 0.004s

sum_array("array_com_um_milhão_de_numeros")
# Multiplicando o tamanho da entrada por dez novamente, temos um tempo dez vezes maior: 0.05s

# - A função matemática que representa uma relação linear é "f(n) = n"
# Na notação de Ordem de Complexidade, dizemos que esse algoritmo é O(n)

# ./tempo-e-espaco.py

""" Exercícios de Fixação """
# ./fixacao-1_0(n).py


"""  --------------------------------------------------------------------------- 
| -> Complexidade quadrática                                                   |
---------------------------------------------------------------------------  """

# Os arrays tem sempre o mesmo tamanho
def multiply_arrays(array1, array2):
    result = []
    for number1 in array1:
        for number2 in array2:
            result.append(number1 + number2)

    print(result)
    return result

print(multiply_arrays([2, 9]))

# - Seus tempos de execução para um par de arrays de 2000 e 4000 elementos são:
sum_array("array_com_dois_mil_numeros")
# O tempo de execução deste algoritmo foi 0.45s

sum_array("array_com_quatro_mil_numeros")
# Já esse teve tempo de execução de 1.8s, cerca de quatro vezes maior.

# - Temos dois arrays do mesmo tamanho, que vamos chamar de n . Repare que temos dois loops aninhados um dentro do outro. Isso significa que, para cada número de array1 , todo o array2 será percorrido!
""" ./complexidade-quadratica.py """

""" Exercícios de Fixação """
# ./fixacao-2_n².py
# ./fixacao-3_0(n³).py


"""  --------------------------------------------------------------------------- 
| -> Comparando complexidades                                                  |
---------------------------------------------------------------------------  """

""" A Ordem de Complexidade """
# - diz o quanto o tempo de execução(ou espaço de memória ocupado) de um algoritmo cresce, na medida em que aumentamos o tamanho da sua entrada!

""" O(1) """
# - executa no mesmo tempo independente do tamanho da entrada.
# Como exemplo, lembre-se do acesso a um elemento do array, Bloco"34.3".
# Esse acesso é O(1), pois leva o mesmo tempo, independente do tamanho do array;

""" O(n) """
# - significa que o algoritmo é linear: se aumentamos a entrada em 2 vezes, aumentamos o tempo de execução em 2 vezes;

""" O(n²) """
# - significa que o algoritmo é quadrático: se aumentamos a entrada em 2 vezes, aumentamos o tempo de execução em 4 (2²) vezes;

""" O(n³) """
# - significa que o algoritmo é cúbico: se aumentamos a entrada em 2 vezes, aumentamos o tempo de execução em 8(2³) vezes.

# Para se ter uma noção: para um algoritmo linear, com:
""" n = 1000 temos mil operações """
# Quando o algoritmo é:
""" O(n²) um n = 1000 gera um milhão de operações. """
# Essa mesma quantidade (um milhão) para:
""" O(n³), se atinge com n = 100. """
# Alguns algoritmos podem, rapidinho, ficar inviáveis de se executar?


"""  --------------------------------------------------------------------------- 
 -> Complexidade logarítmica                                                   |
---------------------------------------------------------------------------  """
# - Dado pela notação O(log n), um algoritmo logarítmico geralmente reduz pela metade o tamanho do input a cada iteração.

# O tempo de execução de um algoritmo é dito logarítmico porque log₂n(lê-se: "log de n na base 2") nos dá o número de iterações que uma entrada de tamanho n terá no algoritmo.

""" complexidade-logaritimico.py """
# Dado um array de tamanho n ordenado em ordem crescente, encontre um número passado na entrada . É como procurar por um nome numa lista telefônica!

""" Exercícios de Fixação """
# ./fixacao-4_0(n log n).py


"""  --------------------------------------------------------------------------- 
 -> Complexidade exponencial e fatorial                                        |
---------------------------------------------------------------------------  """
# - caracterizam algoritmos que, para aumentos pequenos no tamanho da entrada, aumentam enormemente o seu tempo de execução.
"""
Exponencial: 2ⁿ ;
Fatorial: n! .
"""


""" Exponencial: 2ⁿ """
# se n possui vinte elementos, o algoritmo faz um milhão de operações. Para o caso fatorial, os mesmos vinte elementos rendem 24 quatrilhões de operações (O número exato é: 2432902008176640000 operações 😨).

""" Fatorial: n! """
# força bruta. Ou seja: testa todas as possibilidades.

# - Belo Horizonte > São Paulo > Florianópolis
# - Belo Horizonte > Florianópolis > São Paulo
# - Florianópolis > Belo Horizonte > São Paulo
# - Florianópolis > São Paulo > Belo Horizonte
# - São Paulo > Belo Horizonte > Florianópolis
# - São Paulo > Florianópolis > Belo Horizonte

# O número de rotas para 3 cidades é 3! == 3 * 2 * 1 = 6

# o Brasil tem 5570 municípios. Isso daria 5570 * 5569 * 5568 * ... . Quantos milhares de anos um computador precisaria para rodar esse algoritmo nesse caso? 😄

# Algoritmos que não tem solução conhecida em tempo "polinomial", que são fatoriais ou exponenciais, resolvíveis somente com "força bruta", pertencem a uma categoria de problemas na computação chamada "problemas NP Completos".


"""  --------------------------------------------------------------------------- 
| -> Analisando algoritmos com várias estruturas de repetição                  |
---------------------------------------------------------------------------  """

# Esse algoritmo tem três estruturas de repetição evidentes:
# uma linear
# uma quadrática
# uma cúbica.
# Qual é a ordem de complexidade dele?!
""" ./algoritmos-com-estruturas-de-repeticao.py """
# a rigor ela seria "O(n + n² + n³)"

# Se os loops estão aninhados você os multiplica, e se estão paralelos você os soma.

# Um algoritmo de busca binária que roda três vezes = O(3 * log n) ;

# Um algoritmo que roda uma busca binária num array de tamanho n para cada elemento de um array de tamanho m = O(m * log n) .

# geralmente simplificam-se essas notações.
# ordens de complexidade diferentes, para entradas grandes, tem valores absurdamente diferentes.

# Imagine escrever O(n! + log(n))
# para uma entrada de tamanho 8 esse número seria "O(40320 + 3)"
# o componente fatorial da equação, n! = 40320 , domina completamente a ordem de complexidade.
# dizemos que a complexidade menor é "desprezível" , então a omitimos.
# para valores grandes, dizer a maior ordem de complexidade do conjunto já basta para uma boa análise.


"""  --------------------------------------------------------------------------- 
| -> Melhor caso, pior caso e caso médio                                       |
---------------------------------------------------------------------------  """
# - "A depender da minha entrada, o meu algoritmo pode executar em O(1) ou O(n) ".

# Ex:
""" ./busca-linear.py """

# Dizemos que, para entradas muito grandes, esse algoritmo é O(n)
# caso tenhamos sorte e o número que procuramos seja o primeiro do array, mesmo para uma entrada infinita, nossa complexidade será "O(1)" 
# Esse é o melhor caso
# o pior caso é o número ser o último elemento do array, ou seja "O(n)".
# E o caso médio, seria algo como "O(n * 1/2)"
# ou seja, o número que procuramos está no meio da lista

# para entradas muito grandes, aprendemos a desprezar os números menos relevantes da soma, então podemos simplificar e dizer que o caso médio é O(n) também.


"""  --------------------------------------------------------------------------- 
 -> Em suma                                                                    |
---------------------------------------------------------------------------  """
# - ordens de complexidade , uma forma de se analisar um algoritmo de qualquer linguagem e feito em qualquer paradigma.
"""
Constantes: O(1),
Logarítmicos: O(log n),
Linear: O(n),
Quadráticos: O(n²),
Cúbicos: O(n³),
Exponencial: O(2ⁿ),
Fatorial: O(n!),
"""

# 1- a depender do algoritmo, essas análises podem ser combinadas, como por exemplo num algoritmo O(n log n)
# 2- problemas que não tem solução conhecida em tempo "polinomial", sendo apenas "exponenciais" ou "fatoriais", em algoritmos de força bruta, são chamados "NP Completo"
# 3- algoritmos com várias estruturas de repetição diferentes, devemos sempre considerar a maior ordem de complexidade possível e desprezar as demais na nossa notação.
# 4- algoritmos podem ter diferentes ordens de complexidade para seu melhor caso, pior caso e caso médio.


# --------------------------------------------------------------------------- #
# - > CONTEÚDO do dia - 35.1 - <--- / FIM ---------------------------------- //
# #####################################
# - > AULA ao VIVO - 35.1 ----- <--- / INICIO ------------------------------ //
# --------------------------------------------------------------------------- #

# Foco de hoje
# ... Complexidade de algoritmos

# 1. Problema - Elemento aparece mais de 25% em um array ordenado.
# Dado uma coleção de números inteiros 'ordenados' em ordem crescente, 
# tem exatamente um inteiro que corre mais de 25% das vezes.
# analize a ordem de complexidade de tempo e espaço
""" ./problema-1-repetido.py """

# 2 Problema - Procurando a menor letra, maior que o alvo
# Dado uma lista "ordenada" de letras do alfabeto, contendo somente letras minúsculas,
# e dado uma letra como alvo, procure o menor elemento na lista que é maior que o alvo.
""" ./problema-2-percorre-lista.py """




# --------------------------------------------------------------------------- #
# - > AULA ao VIVO - 35.1 ----- <--- / FIM --------------------------------- //
# #####################################
# - > EXERCÍCIO do dia - 35.1 - <--- / INICIO ------------------------------ //
# --------------------------------------------------------------------------- #

# Agora a prática

# Exercício 1: 

# --------------------------------------------------------------------------- #
# - > EXERCÍCIO do dia - 35.1 - <--- / FIM --------------------------------- //
# ########################################## Complexidade de algoritmos
# - Concluído ... ------------------------------------------------------------ #
