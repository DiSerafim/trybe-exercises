# ############################## Set
# --> CONTEÚDO do dia - 36.4 - <--- / INICIO ----------------------------- //
# ############################## Set

# 1 - Conceito de conjuntos
# 2 - Formas de se representar conjuntos
# 3 - Criando a classe Conjunto
# 4 - A classe Set
# 5 - Resumão + resolução de problemas


""" ---> OBJETIVO <---
- Compreender o conceito de conjunto e suas operações básicas;
- Representar conjuntos de três formas distintas em Python;
- Implementar uma classe Set manualmente;
- Instanciar e utilizar os métodos da classe Set, de Python;
- Identificar e resolver problemas com Set.
"""


# ---> Conteúdos <---


"""  --------------------------------------------------------------------------
| -> Conceito de conjuntos <-                                                 |
--------------------------------------------------------------------------- """
# - Essa definição pode se dar por meio da listagem explícita dos elementos ou por meio da descrição dos elementos que o compõem:

# Listagem explícita:
from sqlalchemy import union
from xcffib import Union


A = {1, 2, 3, 4, 5, 6}

# Descrição dos elementos
# B = {x | x é um número inteiro tal que 0 < x =< 6}
# Ou seja, x, onde x é um número inteiro tal que x menor igual a 6 e maior que
# zero.Ou seja, faz parte desse conjunto números maiores que 0 e menores
# iguais a 6 ({1, 2, 3, 4, 5, 6}).

# conjuntos são iguais se cada elemento de A pertence a B e se cada elemento de B pertence a A.
A = {1, 2, 3}
B = {2, 1, 3}
C = {1, 1, 2, 2, 3, 3}

# A ordem não importa;
# É desnecessário manter cópias do mesmo elemento.
# Tudo o que precisamos que um conjunto descreva são seus elementos únicos.
# As operações de "pertence" e "não pertence" são o que nos permite aplicar esse conceito, de igualdade.
# Essas operações constituem as operações básicas mais importantes de conjuntos que você já deve ter utilizado, em Python, algumas vezes:
# if element in colection:
    # ...

# if element not in colection:
    # ...


""" União """
# Todos os elementos que pertencem a A ou a B
A = {1, 2, 3}
B = {2, 3, 4}
# A U B = {1, 2, 3, 4}

""" Intersecção """
# Todos os elementos que pertencem a A e a B
A = {1, 2, 3}
B = {2, 3, 4}
# A ∩ B = {2, 3} :

""" Diferença """
# Todos os elementos que pertencem a A e não pertencem a B
A = {1, 2, 3}
B = {2, 3, 4}
# A - B = {1} | B - A = {4}

""" Diferença Simétrica """
# Todos os elementos que pertencem exclusivamente a A ou a B
A = {1, 2, 3}
B = {2, 3, 4}
# A ∆ B = {1, 4}

""" Subconjunto """
# Não é uma operação.
# É qualquer conjunto em que todos os seus elementos pertencem ao conjunto maior(superconjunto).
# Conjunto vazio e o próprio conjunto são subconjuntos dele mesmo.
A = {1, 2, 3}
# {}, {2}, {1, 2}, {1, 3}
# {1}, {3}, {2, 3}, {1, 2, 3}


""" Programa Educacional: """
# imagine que, em um programa educacional, temos acesso ao log de quem já entregou a avaliação 1 e de quem já entregou a avaliação 2.
# Queremos saber quem já entregou a 1, mas não a 2.
# Para isso, podemos criar uma função que verifique se uma pessoa consta no log da avaliação 1, mas não consta nos logs da avaliação 2.
# Os nomes dos alunos nos logs formam um conjunto, pois não são duplicados e a ordem das entregas não importa.
# Qual operação sobre conjuntos você utilizaria para responder essa pergunta?

""" SQL: """
# um cenário onde operações sobre conjuntos são pesadamente utilizados são queries em bancos de dados.
# O comando SELECT cria um conjunto e comandos como UNION, INTERSECT e EXCEPT nada mais são do que operações sobre conjuntos.
# O SELECT cria um conjunto com linhas únicas.
# Utilizar um comando de conjuntos sobre os resultados de dois ou mais SELECT implicarão em eliminação de duplicados e desconsideração da ordem.
# Esse artigo da Wikipedia explica melhor e dá exemplos.
# https://pt.wikipedia.org/wiki/Opera%C3%A7%C3%B5es_SET_(SQL)


"""  --------------------------------------------------------------------------
| -> Formas de se representar conjuntos                                       |
--------------------------------------------------------------------------  """
# -Ao implementar um conjunto, temos duas maneiras principais de se representá-lo:
# utilizando "vetores" e utilizando "hashmaps".

#   Vetores                         |    Hash Table - Dict
                                                          # ☑ 0
                                                          # ☑ 1
                                                          # ☑ 2
#     0      1     2     3     4               14      4  # ☑ 3
A = False |True |True |True |False        #⏩  →  ⏩  →  # ☑ 4
#                                                 hash    # ☑ 5
#                                               function  # ☑ 6
                                                          # ☑ 7
                                                          # ☑ 8
                                                          # ☑ 9            

""" Conjuntos representados por vetores """
# Observe que os elementos são números inteiros e pequenos , então podemos fazer uso dos índices de um vetor de booleanos para identificar a presença ou não de cada elemento:
A = {1, 2, 3}
B = {2, 3, 4}

#     0      1     2     3     4
A = False |True |True |True |False

# Para saber se um elemento pertence ao conjunto, basta verificar se A[2] é True.
# O acesso direto aos endereços do vetor, consulta, inserção e remoção, ocorrem em O(1).
""" Vetores - Problemas """
# - Temos que usar valores pequenos
# - Se os números forem muitos esparsos usaemos muita memória(pra nada)
# - Só conseguimos trabalhar com números
""" ./vetores.py """

""" Conjuntos representados por Dict """
# Para os casos em que o vetor não se mostra uma boa solução, contendo chaves sendo strings, podemos utilizar uma hashmap.
# Mapearíamos a string para o quê?
# Poderíamos mapear para qualquer coisa, uma vez que esses valores nunca serão acessados e estariam lá apenas porque a hash exige.
# Então vamos escolher valores booleanos, que ocupam pouco espaço.
A = {1, 2, 3}
# 0: False
# 1: True
# 2: True
# 3: True
# 4: False
# ...

""" Hash Map - Dict """
# Para entender a complexidade das operações, precisamos saber como elas são realizadas;
# Caso a linguagem com a qual estamos trabalhando não tenha uma representação dedicada. Ou seja, a linguagem não atende as nossas necessidades.
# Nesse caso teríamos que implementar as operações manualmente;
# Em entrevistas de algoritmos(whiteboards), se o problema em questão for implementar uma classe Set, é evidente que nós não poderemos utilizar os métodos prontos.
# Teremos que saber implementar do zero.
# Observação: caso a estrutura de dados seja apenas auxiliar, não é necessário implementar do zero.
""" ./hash_map_dict.py """


"""  --------------------------------------------------------------------------
| -> Criando a classe Conjunto                                                |
--------------------------------------------------------------------------  """

# Vamos construir uma classe Conjunto especializada em guardar números inteiros até 1000(o que é considerado pequeno).
# vamos representar nossos dados como listas de booleanos.

""" Exercícios de fixação """

""" Exercício 1: Inicializando a classe e adicionando elementos """
# Crie uma classe chamada Conjunto ;
# Escreva um construtor que defina uma lista do tamanho necessário. Inicialize todos os valores com False , uma vez que ainda não temos valores adicionados;
# Crie um método add(item) que recebe um valor até 1000 e adiciona no conjunto;
# Na main (dentro de: if __name__ == "__main__": ), instancie um objeto do tipo Conjunto e adicione os valores.
# [0, 10, 100, 1000]
""" ./iniciando_a_classe_e_adicionando_elementos.py """


""" Exercício 2: Imprimir """
# Caso tenhamos que imprimir na tela o nosso objeto, o comando print(conjunto) não irá funcionar.
# O que será impresso é o endereço de memória onde o objeto está guardado, e não é isso que queremos.
# Para que o comando print funcione, precisamos que a nossa classe tenha um método chamado __str__ e é o que faremos agora:
# Crie um método com a assinatura abaixo:
# def __str__(self):
#     # retorno: uma string que representa o seu objeto
# Exemplos de entrada e saída:
# A = {1, 2, 3}
# # saída: '{1, 2, 3}'
# B = {7, 2, 10}
# # saída: '{2, 7, 10}'
# C = {}
# # saída: '{}'
# A saída não precisa ser ordenada, até mesmo porque um conjunto não leva a ordem em consideração. A saída pode ser em qualquer ordem, mas provavelmente será mais fácil retornar em ordem. Teste seu método imprimindo os objetos que você criou.
""" ./imprimir.py """


""" Exercício 3: is_in """
# Caso queiramos saber se um elemento faz parte ou não do conjunto usando o operador in precisamos que a nossa classe tenha um método chamado __contains__ e é o que faremos agora:
# Crie um método com a assinatura abaixo:
# def __contains__(self, item):
#     # retorno: True, caso o elemento faça parte. False, caso o elemento não faça parte.
# Exemplos de entrada e saída:
# A = {1, 2, 3}
# entrada: 1
# saída: True
# entrada: 0
# saída: False
""" ./is_in.py """


""" Exercício 4: União """
# União: Todos os elementos que estão em A OU em B
# Crie um método com a assinatura abaixo, que recebe como parâmetro outro objeto da classe Conjunto:
# def union(self, conjuntoB):
#     # retorno: outro objeto Conjunto com união do próprio objeto com o conjuntoB
# Na main, instancie dois objetos do tipo Conjunto.
# Preencha o primeiro com os valores de 1 a 10, e o segundo, com valores de 10 a 20;
# Imprima na tela a união dos dois conjuntos.
""" ./uniao.py """


""" Exercício 5: Intersecção """
# Intersecção: Todos os elementos que estão em A E em B
# Crie um método com a assinatura abaixo, que recebe como parâmetro outro objeto da classe Conjunto:
# def intersection(self, conjuntoB):
    # retorno: outro objeto Conjunto com intersecção do próprio objeto com o conjuntoB
# Exemplos de entrada e saída:
# A = {1, 2, 3}
# B = {3, 4, 5}
# # saída: {3}
# C = {0, 3, 6, 9}
# B = {12, 15, 18}
# # saída: {}
# Pronto, passados todos os exercícios temos nossa primeira classe Conjunto implementada! Existem outras operações que deveríamos implementar para torná-la completa, mas vamos fazer isso nos exercícios do conteúdo. Agora vamos prosseguir com o conteúdo para vermos a sintaxe de Set.
""" ./interseccao.py """


"""  --------------------------------------------------------------------------
 -> A classe Set
--------------------------------------------------------------------------- """
# - Por baixo dos panos, a classe Set é uma modificação da classe Dict e não um vetor de booleanos como fizemos.
# No fundo, o Set, é uma hashmap.
# Mas não é um simples mapeamento da chave para True; a classe Set não guarda valor nenhum, ou seja, não está exatamente replicando uma estrutura do tipo "chave-valor", pois não há valor.
# Por isso, ocupa menos espaço do que um Dict, ao mesmo tempo em que mantém a eficiência das operações.

# Set é uma coleção não ordenada de objetos imutáveis únicos.
# Por não se preocupar com a ordem, set não guarda a ordem de inserção e não é possível indexar elementos com [] como em listas ou Dicts.
# Assim como Dict, só é possível usar objetos imutáveis como chave.
# Mas Dict admite guardar valores, então é possível mapear chaves para Dicts.
# Mas set não guarda valores e é um objeto mutável, então não é possível guardar sets dentro de um set.
# Para resolver isso, existe o frozenset.

""" Frozenset """
# - Frozensets são objetos idênticos a set, porém são imutáveis;
# uma vez instanciados, não é possível adicionar ou remover elementos e todos os métodos que realizam essas duas operações estão indisponíveis no frozenset.
# Todos os demais métodos de set funcionam em um frozenset.
# Para criar sets de set, o elemento de dentro precisa ser um frozenset.

""" Operações básicas """
# A classe Set oferece complexidade O(1) para as operações de inserção, remoção e consulta.
""" ./frozenset.py """

""" Exercícios de fixação """

""" Exercício 6 """
# Escreva uma função que identifique o único número duplicado em uma lista.
# Retorne o número duplicado em O(n).
# Exemplos de entrada e saída:
# entrada = [1, 3, 2, 4, 5, 1]
# # saída: 1
""" ./?? """


""" Operações que envolvem outro conjunto """
# As operações que envolvem outros conjuntos implementam todas as operações matemáticas que se aplicam a conjuntos.
# Vamos listar essas operações aqui mas podem ser consultadas na documentação sempre que necessário.
""" set.isdisjoint(other): """
# retorna True se o set não tem nenhum elemento em comum com other, ou seja, se a intersecção é vazia;
""" set.issubset(other): """
# verifica se set é um subconjunto de other, ou seja, se todo elemento de set está em other;
""" set.issuperset(other): """
# verifica se set é um superconjunto de other, ou seja, se todos os elementos de other estão em set.
# A diferença de um superconjunto e de um subconjunto é que no superconjunto podem haver outros elementos, além dos elementos de other já presentes dentro de set.
# Já no subconjunto não;
""" set == other: """
# verifica se os conjuntos são iguais, ou seja, se todos os elementos de set estão em other e se todos os elementos de other estão em set.
# Lembre-se que a ordem não importa.
# Não existe função dedicada para a comparação de igualdade.
# Os métodos a seguir operam sobre dois ou mais conjuntos por vez.
# Cada uma das operações nessa seção tem a sua versão que modifica o set original com o resultado da operação e não retorna nada.
""" set.union(others): """
# retorna a união entre o set e todos os other passados;
""" set.intersection(others): """
# retorna a intersecção entre set e todos os other passados;
""" set.difference(others): """
# retorna a diferença entre set e todos os other passados;
""" set.symmetric_difference(others): """
# retorna todos os elementos que estejam em um mas não estejam no outro conjunto (opera apenas sobre dois conjuntos)


""" Exercícios de fixação """

""" Exercício 7 """
# Sua trajetória no curso foi um sucesso e agora você está trabalhando para a Trybe!
# Em um determinado módulo, os estudantes precisam entregar dois trabalhos para seguir adiante. Cada vez que um dos trabalhos é entregue, o nome da pessoa fica registrado. Precisamos saber como está o andamento da entrega das listas.
# Para isso, você tem acesso aos nomes das pessoas da turma, bem como ao log de quem já entregou qual lista.
# A partir das listas abaixo, crie quatro funções que respondem às perguntas a seguir.
# estudantes = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
# lista1_entregues = ['a', 'd', 'g', 'c']
# lista2_entregues = ['c', 'a', 'f']
# Quem ainda não entregou a lista1?
# Quem já entregou as duas listas?
# Quem já entregou qualquer uma das duas listas?
# Quem ainda não entregou nenhuma das listas?
""" ?? """


"""  --------------------------------------------------------------------------
 -> Resumão + resolução de problemas
--------------------------------------------------------------------------- """

""" Funções básicas """
""" ./funcoes_basicas.py """

""" Números repetidos """
""" ./numeros_repetidos.py """

""" Dados de sorte """
""" ./dados_de_sorte.py """


# --------------------------------------------------------------------------- #
# - > CONTEÚDO do dia - 36.4 - <--- / FIM ---------------------------------- //
# #####################################
# - > AULA ao VIVO - 36.4 ----- <--- / INICIO ------------------------------ //
# --------------------------------------------------------------------------- #

# Foco de hoje
# ...Set

""" DECLARA Conjunto em python """
meu_conjunto = set()

""" DICT em python """
meu_conjunto = {}
meu_conjunto = {'a': 1, 'b': 3, 'c': 4, 'e': 5}  # chave e valor

""" TUPLA em python """
meu_conjunto = ()
meu_conjunto = set((1, 2, 5))

""" LIST em python """
meu_conjunto = []

''' DECLARA Conjunto carregado '''
meu_conjunto = set([1, 2, 3])
meu_conjunto = set('Oi')
meu_conjunto = set(set('Oi'))
meu_conjunto = {1, 3, 4, 5}  # somente valor
meu_conjunto = set((1, 2, 5))

''' ADICIONA itens em um conjunto '''
meu_conjunto = {1, 2, 3}
meu_conjunto.add(4)

''' REMOVE itens em um conjunto '''
meu_conjunto = {1, 2, 3, 4}
meu_conjunto.pop()    # remove um valor aleatoriamente
meu_conjunto.discard(4)
meu_conjunto.clear()  # apaga tudo

''' Qual a saida ao criar um conjunto com a string "William"? '''
meu_conjunto = set('WILLIAM')  # {'W', 'M', 'L', 'A', 'I'}

''' Como UNIR conjuntos '''
a = {'Arroz', 'Milho'}
b = {'Feijão', 'Alface'}

a.union(b)
a | b

''' Intersessão '''
a = {'Arroz', 'Strogonof', 'Batata'}
b = {'Feijoada', 'Arroz', 'Batata'}

a & b              # {'Batata', 'Arroz'}
a.intersection(b)  # {'Batata', 'Arroz'}

''' Diferença '''
a = {'Arroz', 'Strogonof', 'Batata'}
b = {'Feijoada', 'Arroz', 'Batata'}

a - b            # {'Strogonof'}
a.difference(b)  # {'Strogonof'}

''' Diferença Simétrica '''
a = {'Feijoada', 'Arroz', 'Batata', 'Jiló', 'Sorvete', 'Pimenta'}
b = {'Jiló', 'Sorvete', 'Pimenta', 'Nutella'}

a ^ b                      # {'Batata', 'Arroz', 'Feijoada', 'Nutella'}
a.symmetric_difference(b)  # {'Batata', 'Arroz', 'Feijoada', 'Nutella'}

''' Verifica se contém '''
a = {'Feijoada', 'Arroz', 'Batata', 'Jiló', 'Sorvete', 'Pimenta'}

'Pimenta' in a                 # True
len(a) > len(a - {'Pimenta'})  # True
a - {'Pimenta'} < a            # True

''' SUBCONJUNTO (issubset)'''
alimentos = {'Arroz', 'Maça', 'Goiaba', 'Laranja', 'Feijão'}
frutas = {'Maça', 'Goiaba', 'Laranja'}

frutas.issubset(alimentos)  # True
frutas > alimentos          # False
frutas < alimentos          # True

''' SUPER CONJUNTO (issuperset)'''
alimentos = {'Arroz', 'Maça', 'Goiaba', 'Laranja', 'Feijão'}
frutas = {'Maça', 'Goiaba', 'Laranja'}

alimentos.issuperset(frutas)  # True
alimentos > frutas            # True
alimentos < frutas            # False


''' DESAFIO '''

''' ./1_conjunto_complementar.py '''

''' ./2_amigos_na_escola.py '''

''' ./3_rede_de_amigos.py '''


# --------------------------------------------------------------------------- #
# - > AULA ao VIVO - 36.4 ----- <--- / FIM --------------------------------- //
# #####################################
# - > EXERCÍCIO do dia - 36.4 - <--- / INICIO ------------------------------ //
# --------------------------------------------------------------------------- #

# Agora a prática

''' Exercício 1: '''


# --------------------------------------------------------------------------- #
# - > EXERCÍCIO do dia - 36.4 - <--- / FIM --------------------------------- //
# ################################ Set
# - Concluído ... ----------------------------------------------------------- #

# Recursos adicionais (opcional)
"""  """
