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
# ./fixacao-1.py


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

# ./complexidade-quadratica.py

""" Exercícios de Fixação """
# ./fixacao-2.py
# ./fixacao-3.py


"""  --------------------------------------------------------------------------- 
| -> Comparando complexidades                                                  |
---------------------------------------------------------------------------  """

"""  --------------------------------------------------------------------------- 
 -> Complexidade logarítmica                                                   |
---------------------------------------------------------------------------  """

"""  --------------------------------------------------------------------------- 
 -> Complexidade exponencial e fatorial                                        |
---------------------------------------------------------------------------  """

"""  --------------------------------------------------------------------------- 
| -> Analisando algoritmos com várias estruturas de repetição                  |
---------------------------------------------------------------------------  """

"""  --------------------------------------------------------------------------- 
| -> Melhor caso, pior caso e caso médio                                       |
---------------------------------------------------------------------------  """

"""  --------------------------------------------------------------------------- 
 -> Em suma                                                                    |
---------------------------------------------------------------------------  """





# --------------------------------------------------------------------------- #
# - > CONTEÚDO do dia - 35.1 - <--- / FIM ---------------------------------- //
# #####################################
# - > AULA ao VIVO - 35.1 ----- <--- / INICIO ------------------------------ //
# --------------------------------------------------------------------------- #

# Foco de hoje
# ... Complexidade de algoritmos


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
