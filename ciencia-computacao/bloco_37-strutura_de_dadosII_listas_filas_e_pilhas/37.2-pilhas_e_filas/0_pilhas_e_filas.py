# ########################################## Pilhas e Filas
# --> CONTEÚDO do dia - 37.2 - <--- / INICIO ----------------------------- //
# ########################################## Pilhas e Filas

# Problema
# Começando uma solução
# O que é uma pilha?
# Concluindo nossa solução
# Quais as operações mais comuns?
# Utilizando pilhas
# Analogia com o Mundo Real
# E os outros problemas?
# Filas


""" ---> OBJETIVO <---
- Entender o funcionamento da estrutura de dados pilha(stack);
- Adicionar, remover, saber a quantidade e limpar itens de uma pilha;
- Identificar e escolher o uso de pilhas em diferentes casos.
"""


# ---> Conteúdos <---


"""  --------------------------------------------------------------------------- 
| -> Problema <-                          
---------------------------------------------------------------------------  """
# - Às vezes quando estamos escrevendo um código, podemos esquecer de fechar algum parêntese ou chave, o que leva a erros que o interpretador/compilador pode não entender muito bem.
# Faça um programa que recebe um código do qual foram removidos todos os outros caracteres, e verifica se todos os parênteses E chaves foram fechados corretamente.

# Exemplo de retorno
# True: {}()({}) , (){}
# False: {(}) , ()}


"""  --------------------------------------------------------------------------- 
| -> Começando uma solução <-      
---------------------------------------------------------------------------  """
# - Para resolver este problema, vamos aprender o Tipo Abstrato de Dados(TAD):
# Pilha, que por acaso é exatamente o que precisamos aqui!

# este tipo de problema foi o que levou à invenção da Pilha!


"""  --------------------------------------------------------------------------- 
| -> O que é uma pilha? <-   
---------------------------------------------------------------------------  """
# - A estrutura de pilha é uma estrutura do tipo LIFO(Last In First Out).
# O último elemento a entrar na pilha é o primeiro a sair.

# Podemos criar uma pilha utilizando alguma outra estruturas de dados como 'listas encadeadas' ou 'arrays',
# com a única diferença que todas as operações devem ocorrer com o elemento mais ao topo, no último elemento adicionado.
# Em nosso exemplos vamos utilizar o 'built-in list'


"""  --------------------------------------------------------------------------- 
| -> Concluindo nossa solução <-                
---------------------------------------------------------------------------  """
# - "Precisamos de uma forma de lembrar não somente a quantidade de aberturas, como também a ordem"

# A pilha faz exatamente isso!😎
# Veja o exemplo da string ( { } ) }

# Agora, para verificar se eles estão sendo fechados corretamente, basta verificarmos o próximo símbolo que acharmos com o símbolo que está no topo da nossa pilha:
# Se acharmos um }, no topo da pilha deve existir um {.
# Se acharmos um ), o topo da pilha deve ter um (, e ao final da string, a pilha deve estar vazia, significando que todos os símbolos acharam seu devido par na ordem correta.

# Conseguimos assim verificar o balanceamento de parênteses e chaves! Este problema é clássico, pois Pilhas é exatamente o conceito utilizado por compiladores e interpretadores para entender operações matemáticas, a qual escopo pertence cada bloco, começo e final de strings, e muitas outras coisas.


"""  --------------------------------------------------------------------------- 
| -> Quais as operações mais comuns? <-          
---------------------------------------------------------------------------  """
# - Existem algumas operações que são comuns de serem utilizadas.
# São elas: push, pop, e peek.

""" push """
# Adiciona um item no topo da pilha.
# Vale frisar novamente que, quando estamos utilizando pilhas, podemos adicionar novos valores somente no topo dela.
# Lembrando da análogia com o porta moedas, nós não conseguimos simplesmente adicionar uma moeda no meio das moedas já adicionadas.
# Para esse caso teríamos que remover as moedas de cima e então adicionar a moeda que queremos para então adicionar as demais moedas de volta.

""" pop & peek """
# são utilizadas para ler valores do topo da pilha.

""" pop """
# remove o item da pilha

""" peek """
# somente lê o item.


"""  --------------------------------------------------------------------------- 
| -> Utilizando pilhas <-                                   
---------------------------------------------------------------------------  """

# - Implementação de uma pilha utilizando Python

# #1 iremos declarar a classe chamada Stack no arquivo.
# vamos declarar o construtor para termos uma pilha vazia e duas propriedades que serão úteis para implementar as funcionalidades da pilha.
# A primeira propriedade nos retorna o tamanho da pilha e a segunda propriedade nos indica se a pilha esta vazia.
""" ./stack.py """

# #2 Após adicionar as funções auxiliares, vamos adicionar as operações de
# "push"(empilhar itens) e 
# "pop"(remover itens do topo da pilha).
# Com esses métodos já poderemos manipular valores na pilha.
""" ./stack.py """

# #3 Nem sempre é interessante remover o valor da pilha, por isso iremos implementar o método "peek" que somente lê o valor no topo da pilha e então o retorna.
""" ./stack.py """

# #4 A última funcionalidade da pilha é um método para limpa-la.
# "clear", que se encarregará de limpar todos os elementos da pilha.
""" ./stack.py """

# #5 método "__str__" que fará a impressão de todos os elementos que estão empilhados
# Do primeiro ao último item inserido (da parte de baixo da pilha até o topo).
""" ./stack.py """


""" Onde pilhas são normalmente utilizadas """
# As pilhas são utilizadas para resolver diversos problemas em linguagens de programação.
# Muitas linguagens utilizam a pilha para poder controlar o estado das chamadas de funções ou para resolver expressões matemáticas e lógicas.

# Pilhas também podem ser utilizadas para replicar o funcionamento de algoritmos recursivos, ou qualquer outro cenário em que temos uma coleção de elementos e precisamos controlar qual foi o elemento mais recente.

# As pilhas, conceitualmente, não têm limite de tamanho, porém nas implementações reais a linguagem de programação define um tamanho máximo, pois nossos computadores têm memória limitada.
# Quando, fazemos uma chamada recursiva sem uma condição de parada correta, a pilha de chamadas vai aumentando até o estourar o limite da linguagem.
# Ao tentarmos adicionar mais um valor, a pilha "transborda" e lança um erro.
# ... Sabe como é o nome desse erro?
# Stack. Overflow.


""" Utilização de pilhas no controle da chamada de funções """
# A linguagem Python, utiliza a pilha em duas importantes funcionalidades da aplicação.
# A primeira é para controlar as chamadas da funções, a linguagem mantém uma pilha com quais funções devem ser executadas após a execução de uma função.

# Considerando que temos uma função com o nome "process_video" e ela recebe um argumento indicando o caminho de um vídeo.
# Dentro dessa função é invocado a função load_video, recebendo também o argumento do caminho do vídeo repassado da função "process_video".
""" ./process_video.py """

# Nesse código, ao invocarmos a função para processar o video, o interpretador do Python começa a executa-la e, ao chegar na linha que invocamos a função de leitura do video, o Python faz um 'push' da função corrente(process_video()) na pilha de execução, com todo o seu contexto, para então executar a função de leitura.
# Quando a função de leitura for finalizada o Python irá fazer um 'pop' da pilha para continuar a execução da aplicação.
# Se adicionarmos a função traceback.print_stack(file=sys.stdout) conseguimos ver quais os itens presentes na 'call stack' do Python.
""" ./process_video.py """

""" Utilização de pilhas na resolução de expressões """
# Existem diversos tipos de representação de expressões, como por exemplo, "infixa" e pós "fixa".

# Quando escrevemos a expressão (A + B) * C estamos escrevendo uma expressão no formato "infixa".
# Quando escrita no formato pós fixa, ficaria um pouco diferente: A B + C *

# Basicamente nós pegamos os 'A e B' para aplicarmos a operação de soma(o + logo após as variáveis).
# Quando obtivermos o resultado da soma, aplicamos a operação de multiplicação com a variável 'C'(o * logo após o C), iremos resolvendo a expressão sempre 'de dois em dois operadores', da esquerda para a direita.

# considerando os valores A = 5, B = 10 e C = 3:
"""
x = (A + B) * C
x = A B + C *
x = 5 10 + 3 *
"""
# O primeiro passo é pegar os dois primeiros valores e executar a operação de soma, (5 10 + ).
# O resultado dessa soma é 15

# A nova expressão fica assim:
"""
x = (A + B) * C
x = A B + C *
x = 5 10 + 3 *
x = 15 3 *
"""
# Então repetiremos o primeiro passo, mas para operação de multiplicação.
# Iremos pegar os dois primeiros valores da expressão e executaremos a operação de multiplicação,
# (15 3 *).
# O resultado dessa multiplicação é 45.
"""
x = (A + B) * C
x = A B + C *
x = 5 10 + 3 *
x = 15 3 *
x = 45
"""

# Como pilhas são utilizadas para a resolução de expressões pós fixa?
# Percebam que resolvemos a expressão da esquerda para a direita, sempre aplicando as operações nos dois últimos números da expressão.
# Dessa forma conseguimos adicionar esses números numa pilha e então aplicamos a operação no primeiro e no segundo item do topo da pilha, até que reste somente um item na pilha(nosso resultado final).
# Considerando a primeira parte da expressão que resolvemos acima 10 5 +, nós iremos adicionar o valor 10 e 5 no topo da pilha e quando lermos o valor + aplicaremos a operação nos dois itens do topo.
# Então adicionamos o resultado no topo da pilha:


""" Implementando uma função que resolve expressões pós fixas """
# (A + b) * C.
# Vamos implementar uma função que receba essa expressão, em formato de string, 'pós fixa' e então calcule o resultado da expressão.
""" expression_solver.py """


"""  --------------------------------------------------------------------------- 
| -> Analogia com o Mundo Real <-   
---------------------------------------------------------------------------  """
# Quais desses itens podemos utilizar o conceito de pilhas para podermos organizá-los?

# - Um monte de roupa jogado no canto;                          ☑
# - Porta moedas;                                               ☑
# - Pessoas esperando a sua vez para serem atendidas no banco;  ❌
# - Carros parados aguardando o semáforo abrir;                 ☑
# - Diversos livros um em cima do outro;                        ☑
# - Roupas dobradas na gaveta.                                  ☑


"""  --------------------------------------------------------------------------- 
| -> E os outros problemas? <-                
---------------------------------------------------------------------------  """
# - A analogia ao mundo real que acabamos de fazer demonstra uma coisa:

# Nem todos os problemas podemos tratar como uma pilha.
# A fila do banco.
# Imagine que você acabou de chegar na fila necessitando atendimento.
# Você espera receber o atendimento imediatamente após as pessoas que chegaram antes de você, certo?
# Se tratarmos isso como uma pilha, a primeira que pessoa que chegou vai ser atendida por último, e provavelmente vai ficar esperando umas 8 horas até o banco fechar, pois a fila continua cheia o dia inteiro.


"""  --------------------------------------------------------------------------- 
| -> Filas <-          
---------------------------------------------------------------------------  """
# - Assim como temos a mentalidade 'First In, Last Out' para problemas que são pilhas, precisamos de outra mentalidade para problemas que são filas: 'First In, First Out'(FIFO).
# Quem chega primeiro recebe atendimento primeiro, nada mais justo.
# Assim, todos serão atendidos com uma demora mais parecida.

# Na computação também temos problemas que requerem a mentalidade FIFO.
# Já parou para pensar como é que um processador com um único núcleo consegue rodar um sistema operacional inteiro, e mais 17 programas ao mesmo tempo?
# Cada programa demanda uma série de operações, e um núcleo só pode executar uma de cada vez; ele coloca as operações em uma fila, e resolve estas operações uma por uma, garantindo assim que todos os programas consigam rodar e prosseguir em suas tarefas.

# Assim como a pilha, o TAD Fila(queue) também pode ser implementada tanto em um array como em uma lista; o importante não é a forma que ela é implementada em código, mas sim a forma que ela se comporta; que métodos ela expõe.
# No caso da fila, as operações devem ser as seguintes:
""" Push """
# Adiciona um elemento no final da fila
""" Pop """
# Remove e retorna o primeiro elemento da fila

# a única diferença da fila é que a remoção(Pop) ocorre no começo, em vez de no final.
# Apenas essa diferença causa um funcionamento totalmente diferente, que soluciona problemas diferentes!
# Fica para você o desafio de implementar a operação Pop() da fila, que é o que a diferencia da Pilha.
""" ??? """


# #####################################
# --------------------------------------------------------------------------- #
# - > CONTEÚDO do dia - 37.2 - <--- / FIM ---------------------------------- //
# #####################################
# - > AULA ao VIVO - 37.2 ----- <--- / INICIO ------------------------------ //
# --------------------------------------------------------------------------- #

# Foco de hoje
# ... Pilhas e Filas

''' First in, first out | Lastin, last out '''

'''  QUEUE (fila) '''
# Filas - Operações
# - Operações de Fila

# Push | Insere no Fim 🏌
# Pop  | Remove no início ❌
# Peek | Visualiza no início 👀

# https://visualgo.net/en

# - Peek (Olhadinha)
head = [85, 93, 41, 3, 81, 91]
# if empty return NOT_FOUND
# return head.item
# Retorna o valor armazenado na cabeça: 85.

# - Enqueue (Enfileirar)
head = [85, 93, 41, 3, 81, 91]
v = 57
# vtx = new Vertex(v)
# tail.next = vtx
# tail = vtx
# Agora, a tail aponta para o novo vértice também. 85, 93, 41, 3, 81, 91, 57

# - Dequeue (desenfileirar) ou (furão de fila)
head = [85, 93, 41, 3, 81, 91, 57]
# if empty, do nothing
# temp = head
# head = head.next
# delete temp
# Agora, 93, 41, 3, 81, 91, 57

''' ./fila_deque.py '''

''' ./fila_queue_with_deque.py '''


''' STACK (pilhas) '''
# - o útimo que entra é o primeiro que sai

# Pilhas - Operações
# - Operações de Pilhas

# Push | Insere no Topo 👆
# Pop  | Remove no Topo  ❌👆
# Peek | Visualiza Topo  👀👆

# https://visualgo.net/en

# - Peek (Olhadinha)
header = [60, 31, 65]
# if empty return NOT_FOUND
# return head.item
# Retorna o valor armazenado na header: 60.

# - Push (Empurre)
header = [23, 60, 31, 65]
v = 23
# Vertex vtx = new Vertex(v)
# vtx.next = head
# head = vtx
# Retorna o valor armazenado na header: 23, 60, 31, 65.

# - Pop (excluir)
header = [23, 60, 31, 65]
# if empty do nothing:
#     temp = head
#     head = head.next
# delete temp
# Retorna o valor armazenado na header: 60, 31, 65


''' Problema - Validar parênteses '''
# Criar uma  função chamada is_valid() que receberá uma string formada por (,), [,], { e }.
# A função deve verificar se os "parênteses", são válidos seguindo as regras:
# - Os 'caracteres de abertura' devem possuir os 'caracteres de fechamaneto' correspondente;
# - Os caracteres de abertura devem ser fechados na ordem correta;

# Exemplo:
str = "()"        # True
str = "))(("      # False
str = "()[]{}"    # True
str = "(())"      # True
str = "[]"        # True
str = "(]"        # False
str = "[[]"       # False
str = "[[]]"      # True
str = "{}"        # True
str = "{{}"       # False
str = "([)]"      # False
str = "asdasdasd" # None
str = "34134345"  # None

''' ./pilha_stack.py '''

''' ./pilha_basebal_game.py '''


''' Problema - Jogo de baseball '''
# Criar uma função que receba uma 'lista de string' e calcule o somatório do total da tardida de baseball.
# Cada item da lista consiste em uma rodada da partida para determinado time.
# As regras para se calcular os pontos são as seguintes:
# - Inteiro: Representa os 'pontos' para a rodada;
# - +: Os pontos para a rodada será o 'somatório' das 'duas' útimas rodadas válidas;
# - D: Os pontos para a rodada será igual ao 'dobro' da 'última' rodada válida;
# - C: Representa que os pontos da 'última rodada' válida devem ser removidos;

# Exemplo:
str = ['1', '2', '+', 'D', 'C']
# Rodada 1: Foi feito 1 pontos pelo time
# Rodada 2: Foi feito 2 pontos pelo time
# Rodada 3: Foi feito o somatório entre as duas útimas rodadas, dando o valor de 3 pontos na rodada.
# Rodada 4: Foi dobrado o valor da última rodada válida. Nessa rodada form feitos 6 pontos
# Rodada 5: Foi removido o valor da última rodada válida, nessa rodada o time perdeu os 6 pontos da última rodada
# Rodadas: 1 2 3 4 5
# Saída: 6 pontos(1 + 2 + 3 + 6 - 6)
''' ./pilha_validate_parenteses.py '''














# #####################################
# --------------------------------------------------------------------------- #
# - > AULA ao VIVO - 37.2 ----- <--- / FIM --------------------------------- //
# #####################################
# - > EXERCÍCIO do dia - 37.2 - <--- / INICIO ------------------------------ //
# --------------------------------------------------------------------------- #

""" Agora a prática """

""" Exercício 1: """
# Estenda a classe Stack, que escrevemos durante as explicações do conteúdo, adicionando uma nova função chamada min_value() que irá retornar o menor valor inteiro presente na pilha.
# stack.py
# content_stack.push(1)
# content_stack.push(-2)
# content_stack.push(3)
# print(content_stack.min_value()) # saída: -2
# Fonte: Min Stack
# https://leetcode.com/problems/min-stack/
""" ./ex1.py """

""" Exercício 2: """
# Estenda a classe Stack, que escrevemos durante as explicações do conteúdo, para que ela suporte um limite de itens dentro da pilha.
# Se definirmos que a pilha deve ter o tamanho 2, ela não poderá ter 3 itens.
# stack_limit.py
# content_stack = LimitStack(2)
# content_stack.push(1)
# content_stack.push(-2)
# try:
#     content_stack.push(3)
# except StackOverflow:
#     print("Não é possível adicionar outro item à pilha")
# Dica: Para esse exercício, crie uma nova classe, no mesmo diretório da classe Stack .
""" ./ex2.py """

""" Exercício 3: """
# Um estacionamento comercial possui uma garagem em forma de linha, somente é possível parar os carros enfileirados.
# Para auxiliar as pessoas que trabalham manobrando os veículos, iremos escrever um programa para que eles consigam adicionar novos veículos na garagem e retirar os veículos conforme a solicitação dos clientes.
# Escreva um programa que faça essas duas operações, inserção de veículos e a remoção do veículo desejado pela pessoa.
# Lembrando que os veículos que foram removidos para se chegar no veículo do cliente, ficam parados na rua e depois são adicionados na mesma ordem que estavam no estacionamento.
""" ./ex3.py """

""" Exercício 4: """
# Dada a função que faz a resolução de expressões pós fixas, adicione as operações de subtração e divisão.
# Nota: transforme as expressões em pós fixas e atribua valores.
# Caso seja necessário, faça o cast do valor para ponto flutuante.
# Epressão infixa
# A + B - C / A
# B + (A * C) / C * 2
# A * B - C + 4 * A - B
# (A + C / B) * (A + B)
# 50 * B / 2 * 5 / A
# Lista Expressões
""" ./ex4.py """

""" Exercício 5: """
# Dado uma string, contendo letras e parênteses.
# Crie uma função que irá reverter os caracteres de tal forma que somente os caracteres dentro dos parênteses sejam revertidos.
# A string final não deve conter os parênteses.
# string = 'teste(lagel)'
# resultado = 'testelegal'
# Fonte: Reverse Substrings Between Each Pair of Parentheses
# https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/
""" ./ex5.py """


# #####################################
# --------------------------------------------------------------------------- #
# - > EXERCÍCIO do dia - 37.2 - <--- / FIM --------------------------------- //
# ########################################## Pilhas e Filas
# - Concluído \o/ ------------------------------------------------------------ #


""" Recursos Adicionais """
# Stacks - A Level Computer Science
# https://www.youtube.com/watch?v=zIbQf_yR7-U

# Stack - LeetCode
# https://leetcode.com/tag/stack/

# Stack Data Structure
# https://www.geeksforgeeks.org/stack-data-structure/
