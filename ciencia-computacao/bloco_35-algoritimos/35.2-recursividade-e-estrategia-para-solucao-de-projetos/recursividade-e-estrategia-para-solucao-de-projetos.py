# ########################################## Recursividade e Estratégias para solução de problemas
# --> CONTEÚDO do dia - 35.2 - <--- / INICIO ----------------------------- //
# ########################################## Recursividade e Estratégias para solução de problemas

# Entrevista Whiteboard: Fibonacci
# Duas formas de resolver!
# Recursividade
# Whiteboard Interview: ReverseCorp
# Iterativo vs. Recursivo
# Leis da recursão
# Novamente, Iterativo x Recursivo!
# Análise de algoritmos recursivos
# Principais cuidados ao usar recursão
# Estratégias para solução de problemas

""" ---> OBJETIVO <---
- Entender o conceito recursividade;
- Analisar algoritmos recursivos;
- Resolver problemas de forma recursiva.
"""

# ---> Conteúdos <---

"""  --------------------------------------------------------------------------- 
| -> Entrevista Whiteboard: Fibonacci <-                                       |
---------------------------------------------------------------------------  """
# A sequência de fibonacci é uma sequência numérica em que, partindo dos dois primeiros números sendo 0 e 1, o próximo número será sempre a soma dos dois anteriores.
começo = [0, 1]
0 + 1 = 1 -> [0, 1, 1]
1 + 1 = 2 -> [0, 1, 1, 2]
1 + 2 = 3 -> [0, 1, 1, 2, 3]
3 + 2 = 5 -> [0, 1, 1, 2, 3, 5]

# e assim por diante: 8, 13, 21, 33, 54...
# Faça uma função que retorne o enésimo número da sequência de Fibonacci.

''' Exercício de fixação '''
# Exercício 1: Fibonacci: Ligue o cronômetro, e faça a medição de quanto tempo você leva para resolver este problema.
# Se demorar mais de 10 minutos, pare! Seu tempo acabou.

# ./fixacao-1-fibonacci.py


"""  --------------------------------------------------------------------------- 
| -> Duas formas de resolver! <-                                               |
---------------------------------------------------------------------------  """
# - para calcular o número N da sequência de fibonacci, sempre precisaremos calcular N-1 e N-2.

# nós iteramos até N, obtendo os números, desde o primeiro até N-1, N-2 e eventualmente o N que queremos.
def fibonacci_iter(n):
    sequence = [0, 1]
    if n >= 2:
        for x in range(2, n+1):
            next = sequence[-1] + sequence[-2]
            sequence.append(next)
    return sequence[n]

# outra formas de resolver o mesmo problema!
def fibonacci(n):
    if n < 2:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)


"""  --------------------------------------------------------------------------- 
| -> Recursividade <-                                                          |
---------------------------------------------------------------------------  """
# - Uma função que chama a si mesma é chamada de recursiva.
# - O processo para executar, tal função recursiva, é chamado de recursividade.

# um problema submetido, a uma solução recursiva, será quebrado em subproblemas menores até chegar a uma parte tão pequena que o torna possível solucioná-lo trivialmente.


"""  --------------------------------------------------------------------------- 
| -> Whiteboard Interview: ReverseCorp                                         |
---------------------------------------------------------------------------  """
# - Suponha agora que você está fazendo o processo seletivo para a ReverseCorp, uma empresa que se especializa em produtos e serviços ao contrário. Na sua entrevista, o seu desafio é demonstrar as suas habilidades de inversão com o seguinte problema:

# "Faça uma função que recebe uma lista, e retorna-a na ordem reversa."

''' Exercícios de fixação '''

# Exercício 2: ReverseCorp Ligue seu cronômetro de novo, e tente desenvolver esta solução, utilizando a iteração. (Se demorar mais que 10 minutos, pare, e prossiga com o conteúdo!)


"""  --------------------------------------------------------------------------- 
| -> Iterativo vs. Recursivo                                                   |
---------------------------------------------------------------------------  """
# onde pudermos aplicar iteração, podemos também aplicar recursão.

def reverse(list):
    reversed_list = []
    for item in list:
        reversed_list.insert(0, item)
    return reversed_list

# Quando dominarmos a recursão, há muitos problemas que poderemos resolver rapidamente algo que, de outra forma, seria muito trabalhoso de implementar.
def reverse(list):
    if len(list) < 2:
        return list
    else:
        return reverse(list[1:]) + [list[0]]

# Aqui, sabemos que se a lista tiver somente um elemento, ela invertida é ela mesma; E, caso seja uma lista maior, basta colocar o primeiro elemento por último, e depois inverter o resto!

# - Começam tratando o caso mais simples possível de maneira trivial.
# - Depois, generalizam o resto dos casos, guiando-os na direção do caso trivial.


"""  --------------------------------------------------------------------------- 
 -> Leis da recursão                                                           |
---------------------------------------------------------------------------  """
# - Todos os algoritmos recursivos devem obedecer a três leis importantes:
''' 
1) Um algoritmo recursivo deve ter um caso base :
Pois sem ele nosso algoritmo ficará executando infinitamente.
O caso base é a condição de parada do algoritmo recursivo, ele é o menor subproblema do problema, tornando-o possível de resolvê-lo de forma direta/trivial;

2) Um algoritmo recursivo deve mudar o seu estado e se aproximar do caso base:
após o início da execução de um algoritmo recursivo, a cada nova chamada a ele mesmo, o seu estado deve se aproximar cada vez mais do caso base.
EX: queremos criar um código que irá printar números a partir de 0 e terminar em 10.
O caso base do algoritmo é 10 , pois é onde nossa função recursiva deve parar a execução.
A primeira chamada a função terá o número 0 passado de parâmetro
 A cada nova chamada à função, nosso estado deve incrementar o valor 1 ao valor do estado anterior, até chegar ao número 10.
 Logo, o valor do estado na primeira chamada será 0, na segunda chamada será 1, na terceira chamada será 2, e assim por diante até chegar ao valor do caso base;

3) Um algoritmo recursivo deve chamar a si mesmo, recursivamente:
Essa lei é a própria definição de recursão.
 '''

# Entendendo recursividade e colocando em prática
# - estrutura básica de uma função recursiva:
''' Nome da função e parâmetro:
    Condição de parada

    Chamada de si mesma '''

# Caso a condição não se satisfaça, a função é chamada novamente com um novo parâmetro. Caso contrário a execução para na condição de parada.

# ./leis-da-recursao.py

# conceitos sobre pilha de execução:
# -Toda vez que chamamos uma função em um programa, o sistema operacional reserva memória para as variáveis e parâmetros da função;
# -Sempre quando uma função é executada, ela é guardada na pilha;
# -Quando a função termina de ser executada, ela sai da pilha.

# exemplo para fixarmos mais esse conceito. Algoritmo recursivo para cálculo de fatorial.
# ./leis-da-recursao.py
def factorial_recursive(n):  # nome da função e parâmetro
    if n == 1:  # condição de parada
        return 1
    else:
        return n * factorial_recursive(n - 1)  # chamada de si mesma com um novo valor


factorial_recursive(5)

''' Exercícios de fixação '''
# Exercício 3: Faça um algoritmo recursivo de soma. Esse algoritmo deve receber um número de parâmetro e deve somar todos os números antecessores a ele.

# ./fixacao-3-leis-da-recursao.py


"""  --------------------------------------------------------------------------- 
 -> Novamente, Iterativo x Recursivo!                                          |
---------------------------------------------------------------------------  """
# - é possível ter funções tanto recursivas, quanto iterativas para o mesmo problema.

# função recursiva de contagem regressiva.
# ./contagem-regressiva.py
def iterative_countdown(n):
   while n > 0:
       print(n)
       n = n - 1
   print("FIM!")

   return n


iterative_countdown(5)

# Escolher uma solução recursiva não significa ganho de performance, muito pelo contrário, grande parte das vezes, a solução iterativa será mais performática. Escolher a solução recursiva terá um ganho na diminuição de complexidade do código do seu projeto. Aqui, complexidade significa legibilidade. Ou seja, nosso código fica mais simples, mais elegante, quando utilizamos recursividade.


"""  --------------------------------------------------------------------------- 
| -> Análise de algoritmos recursivos                                          |
---------------------------------------------------------------------------  """
# Árvore de Recorrência! 

''' Árvore de Recursão '''
# - pode ser utilizado para estimar o custo de um algoritmo. É um meio de analisarmos seu custo, o que nos ajuda a decidir se tal solução recursiva vale a pena ou não. Podemos visualizar nível a nível da estrutura de um algoritmo recursivo por meio de uma árvore recursiva. No final, tem-se a estimativa de tempo do problema.

def fibonacci(num):  # nome da função e parâmetro
    if (num <= 1):  # condição de parada
        return num
    else:
        return fibonacci(num - 2) + fibonacci(num - 1)  # chamada de si mesma com um novo valor
# código recursivo para cálculo de fibonacci.

# Ou seja:
# desenhe todas as recursões do problema até chegar aos casos base e some as complexidades! Fique de olho nas proporções! Se cada subproblema é O(n) e você criou um para cada elemento da sua entrada de tamanho n , você tem aí uma complexidade O(n * n) , ou seja, uma complexidade quadrática. Se, por outro lado, a cada subproblema você dividiu o tamanho do problema original por dois, você gerará log n subproblemas. Se cada um desses custa O(n) , você teria uma complexidade O(n* log n)
# A forma de traduzir a lógica da árvore de recursão para uma notação puramente matemática se chama Teorema Mestre !


"""  --------------------------------------------------------------------------- 
| -> Principais cuidados ao usar recursão                                      |
---------------------------------------------------------------------------  """
# - chamadas de funções ocupam memória, toda vez que uma chamada é feita, o 'SO' reserva memória para as variáveis e parâmetros.
# Quando um loop recursivo é muito grande, ele fará muitas chamadas, e quando ele faz muitas chamadas podemos ter um "stack overflow"(estouro de pilha)
# significa que ficaríamos sem memória para continuar com a execução do programa.

# Para evitar um estouro de pilha, é importante que as chamadas recursivas parem. 
# Para que consigamos fazer as chamadas recursivas pararem é importante lembrarmos sempre de implementar a condição de parada na função .


"""  --------------------------------------------------------------------------- 
 -> Estratégias para solução de problemas                                      |
---------------------------------------------------------------------------  """
# (...) A ciência da computação é o estudo de problemas, resolução de problemas e soluções que surgem do processo de resolução de problemas.

''' Iterativa '''
# - A solução iterativa é caracterizada pela repetição de uma determinada operação,
# procurando resolver algum problema encontrando sucessivas aproximações, a partir de uma suposição inicial.
# A ideia nesse tipo de processo é repetir um determinado cálculo várias vezes, obtendo-se a cada repetição, ou iteração, um resultado mais preciso que aquele obtido na iteração anterior.
# A cada iteração, utiliza-se o resultado da anterior como parâmetro de entrada para o cálculo seguinte.
# O resultado é uma sequência de valores aproximados, não exatos, mas que estão dentro de uma faixa de erro aceitável.

''' Força bruta '''
# - A força bruta, também conhecida como tentativa e erro ou busca exaustiva, é a estratégia mais trivial e intuitiva para solução de problemas.
# Ela consiste basicamente em enumerar todas as combinações possíveis para uma solução e avaliar se satisfazem o problema.
# Dessa forma, é possível escolher a melhor das soluções, ou seja, a solução ótima, mas apesar de trivial, em alguns casos, a força bruta possui desempenho geralmente muito ruim.

# Dada uma mochila com capacidade C , e n objetos com peso (i = 1...n), deve ser possível preencher a mochila com o maior peso total, respeitando a capacidade C.
# - Suponha uma mochila com capacidade de 15kg e objetos de peso 12kg, 2kg, 4kg e 8kg.
# - Este problema possui soluções ótimas equivalentes:
Uma solução ótima: 12kg + 2kg = 14kg;
Outra solução ótima: 8kg + 2kg + 4kg = 14kg.

# Soluções viáveis seriam, entre outras:

# as soluções são viáveis, porém não são ótimas. Elas não são ótimas, pois a mochila está sendo preenchida, mas não está sendo preenchida chegando mais próximo possível ao peso máximo. Por exemplo, uma das soluções que temos acima é preencher a mochila com um objeto de 2kg apenas, sendo que a mochila suporta 15kg.

# Um exemplo de uma solução inviável seria, entre outras:
- 12 kg + 4 kg = 16kg.

# Um método baseado em tentativa e erro testaria todas as combinações entre elementos checando:
# - Se a solução é viável;
# - Se a solução possui valor melhor que outra encontrada anteriormente.

''' Dividir e conquistar '''
# - divisão e conquista, consiste em dividir o problema em partes menores, encontrar soluções para as partes, e então combinar as soluções obtidas em uma solução global.

# 💡 A modularização de um programa consiste em dividi-lo em partes funcionais que conversam entre si, tornando o software mais eficiente.

# A técnica de Divisão e Conquista consistem em três passos:
# - Divisão: dividir a instância do problema original em duas ou mais instâncias menores, considerando-as como subproblemas;
# - Conquista: resolver cada subproblema recursivamente;
# - Combinação: combinar as soluções encontradas em cada subproblema, compondo uma solução para o problema original.


# #####################################
# --------------------------------------------------------------------------- #
# - > CONTEÚDO do dia - 35.2 - <--- / FIM ---------------------------------- //
# #####################################
# - > AULA ao VIVO - 35.2 ----- <--- / INICIO ------------------------------ //
# --------------------------------------------------------------------------- #

# Foco de hoje
# ... Recursividade e Estratégias para solução de problemas

''' 3 leis da recursividade '''
# - Ter um caso base
# - Mudar seu estado e se aproximar do caso base
# - Chamar a si mesmo, recursivamente.

# Ex:
def somatorio(n):
    if n == 0:
        return 0

    return n + somatorio(n - 1)

print(somatorio(5))  # 15

# ./somatorio.py

# simplificando
somatorio(5)
return 5 + somatorio(4)  # 15  <<
return 4 + somatorio(3)  # 10
return 3 + somatorio(2)  # 6
return 2 + somatorio(1)  # 3
return 1 + somatorio(0)  # 1

# Na prática
# ./fatorial.py
# ./inverter.py


# #####################################
# --------------------------------------------------------------------------- #
# - > AULA ao VIVO - 35.2 ----- <--- / FIM --------------------------------- //
# #####################################
# - > EXERCÍCIO do dia - 35.2 - <--- / INICIO ------------------------------ //
# --------------------------------------------------------------------------- #

# Agora a prática

# Exercício 1: 

# #####################################
# --------------------------------------------------------------------------- #
# - > EXERCÍCIO do dia - 35.2 - <--- / FIM --------------------------------- //
# ########################################## Recursividade e Estratégias para solução de problemas
# - Concluído ... ------------------------------------------------------------ #
