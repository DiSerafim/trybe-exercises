# ############################## Hashmap e Dict
# --> CONTEÚDO do dia - 36.3 - <--- / INICIO ----------------------------- //
# ############################## Hashmap e Dict

# 1 - O que é hashing em computação
# 2 - Hashmap: usando hashing para estruturar dados
# 3 - Quando duas chaves diferentes resultam no mesmo address
# 4 - A classe Dict de Python
# 5 - Resumo do conteúdo e resolução de problemas


""" ---> OBJETIVO <---
- Entender o conceito de hashing e como ele é utilizado para criar estruturas eficientes;
- Implementar uma classe HashMap simples com as principais operações;
- Compreender como as decisões de implementação impactam na eficiência real da estrutura de dados;
- Entender como a classe Dict , de Python, funciona por baixo dos panos.

"""


# ---> Conteúdos <---


"""  --------------------------------------------------------------------------
| -> O que é hashing em computação <-                                         |
--------------------------------------------------------------------------- """
# - Hashing significa transformar um dado em uma representação numérica única.
# É atribuir um id para aquele dado.
# Mas diferente de um id sequencial, a composição do dado influencia diretamente no id gerado.
# Para isso, precisamos submeter o dado a alguma transformação matemática que considere a sua composição.

# A operação matemática se chama hash function e o resultado da operação, no caso da verificação de integridade, é chamado de checksum (soma de verificação).
# ↪ Crip


"""  --------------------------------------------------------------------------
| -> Hashmap: usando hashing para estruturar dados                            |
--------------------------------------------------------------------------  """
# - A estratégia de armazenamento de dados da hashmap é submeter o dado a um procedimento matemático(hash function) para obter um endereço único onde ela será guardada(address).
# Na relação chave-valor, o id numérico da classe Employee é a chave e o objeto Employee inteiro é o valor.
# A hash function vai ler o valor da chave para definir o endereço do objeto como um todo.

# O local de armazenamento é comumente chamado de buckets(baldes), que é onde vamos jogar os dados.

''' Complexidade: '''
# Nesse exemplo, a execução da hash function, bem como a operação de acessar o endereço para leitura ou escrita, tem complexidade O(1).
# Dessa forma, tanto inserção como consulta têm complexidade constante.
# Cada dado que entra na hash function, sai com seu respectivo endereço.
# Por isso, hashmaps também são conhecidas como tabelas de espalhamento.

# usando hashing para estruturar dados

# como funciona a busca?
# ☑ 0
# ☑ 1
# ☑ 2
# ☑ 3
# ☑ 4
# ☑ 5
# ☑ 6
# ☑ 7
# ☑ 8
# ☑ 9

''' class Employee '''
# Para armazenar os dados da pessoa de forma agregada vamos criar a classe Employee :
''' ./employee.py '''

''' Hash Function '''
# Considerando que nossa chave são inteiros, vamos usar a operação mod 10], ou resto da divisão inteira por 10, para definirmos o índice onde o dado vai ser armazenado.
# Cada número que entra, vai resultar em um endereço de 0 a 9.
# O valor 10 foi escolhido por não ser muito grande.
# Tanto a operação mod como o valor 10 são escolhas ilustrativas e são apenas um exemplo.
# Vamos inicializar nossa classe HashMap e definir o método get_address():
''' ./employee.py '''

''' Buckets '''
# Como nossa hash function resulta em endereços de 0 a 9, uma lista com 10 posições é suficiente.
# Vamos inicializar a lista já do tamanho que precisamos, preenchida com None.
# Não podemos preencher com um valor numérico, como por exemplo -1, pois isso causaria ambiguidade: se você quiser guardar o valor -1, como vamos saber se isso é o valor ou um indicativo de que o bucket está vazio?
# A lista buckets, é um atributo da classe HashMap.
''' ./employee.py '''

''' insert '''
# Para povoar nossa hash, recebemos o objeto, computamos o seu address, a partir da chave numérica, e armazenamos no local adequado.
''' ./employee.py '''

''' get_value '''
# Para acessar o dado de interesse, passamos a chave.
# A classe identifica o índice, onde a referência para aquele objeto está armazenada, e retorna o valor que estiver no campo name.
''' ./employee.py '''

''' has '''
# Para consultar se uma determinada chave existe dentro da sua hash map, basta calcular o address.
# Além disso, vamos certificar de que o conteúdo da lista buckets não é None .
''' ./employee.py '''

''' Exercício 1: a) '''
# Se ainda não implementou, implemente a classe que acabamos de construir, seguindo o passo a passo anterior!
''' ./employee.py '''

''' Exercício 1: b) '''
# Use a entrada abaixo para criar objetos Employee :
# employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]

''' Exercício 1: c) '''
# Instancie a sua classe HashMap e use os objetos Employee para povoá-la. Imprima na tela o nome da pessoa de id_num = 23 , acessando a informação a partir da HashMap.

''' Exercício 2: '''
# A pessoa de id_num = 10 está com o nome errado, deveria ser name30 . Implemente um método com a assinatura abaixo, onde id_num é a chave para localizar o registro que queremos alterar e new_name é o nome a ser colocado. Verifique se o seu código está realmente alterando o nome, imprimindo o nome antes e depois da alteração:
# Copiar
# def update_value(self, id_num, new_name):
#     # ...


"""  --------------------------------------------------------------------------
| -> Quando duas chaves diferentes resultam no mesmo address                  |
--------------------------------------------------------------------------  """
# Esse fenômeno é chamado de colisão e existem diversas técnicas para lidar com esse problema.

''' Separate Chaining '''
# - O jeito mais simples de resolver o problema da colisão é cada bucket segurar uma lista.
# Daí, caso um elemento receba o mesmo endereço, basta adicionar na lista.
# Isso faz com cada bucket tenha seu próprio encadeamento de objetos.

# ckets não seria mais uma lista. Seria uma lista de listas. A inserção, ao invés de apenas colocar o objeto no endereço, precisa adicionar à lista que está nesse endereço.
''' ./employee.py '''

''' get_value '''
# Após obter o endereço, vamos iterar sobre a lista até encontrarmos o item com o id_num procurado e retornar o nome.
''' ./employee.py '''

''' Complexidade '''
# As inserções continuam O(1).
# Mas todos os demais métodos agora iteram sobre uma lista de tamanho variado.
# Caso o item de interesse seja a primeira posição(melhor caso), teremos O(1), mas isso raramente vai acontecer na vida real.
# No pior caso, será o último, resultando em uma complexidade proporcional ao tamanho da lista que está naquele endereço, o que é uma performance pior do que O(1).

# Percebemos que a decisão de combinar a hash function, "mod ", com a forma de tratar colisões, "separate chaining", fez com que o acesso à informação não fosse exatamente O(1).
# Isso demonstra como a análise de complexidade na vida real é mais complicada do que a teórica.
# E o mais importante: demonstra como as decisões de implementação de cada estrutura de dados afetam a performance final.

''' Open Addressing com Linear Probing '''
# - O endereço final não é conhecido e o hashcode é utilizado apenas para iniciar a busca.

# Quando essa busca é feita olhando um índice após o outro, é chamada de Linear Probing . Mas existem vários outros métodos de busca pelo espaço vazio, incluindo cálculos matemáticos mais complexos para ir "saltando" de índice em índice.

# Em Python, a classe "Dict" implementa a hashmap.
# Em Java, existem duas classes com decisões diferentes de implementação: HashMap e HashTable.

''' Exercício 3: '''
# Tente descobrir qual técnica de tratamento de colisão é utilizada pelo Dict, de Python e o HashMap, do Java. Em inglês, o termo de busca é "collision resolution".
''' R= '''
# - A classe "Dict" utiliza o Open Addressing e Java utiliza Separate Chaining.

# - A classe "Dict", de Python, utiliza a técnica de tratamento de colisão chamada Open Addressing e busca o próximo espaço vazio em duas fases.
# Ambas as fases utilizam a representação binária da chave e aplicam fórmulas matemáticas para definir o próximo índice a ser visitado.

# - A classe "HashMap", de Java, utiliza a técnica de Separate Chaining, mas quando a lista do bucket começa a ficar grande, Java substitui essa lista por uma Árvore Binária de Busca, uma estrutura de dados diferente, que não veremos no curso, mas já posso adiantar que é mais eficiente do que uma lista para operações de busca.

''' Exercício 4: '''
# Como as diferentes implementações afetam a performance? Quais são os prós e contras da implementação de cada linguagem?
''' R= '''
# A solução do Python determina o próximo índice a ser visitado de maneira relativamente randômica e resulta em uma complexidade assintótica de tempo de O(1).
# Por outro lado, para evitar que o vetor buckets fique rapidamente sem espaço, um Dict é inicializado com uma lista de tamanho 2**15 ints.
# Como em Python cada int ocupa 24 bytes, no mínimo, o uso de memória é considerável.
# Em Java, o tamanho inicial é menor, uma vez que o que tende a crescer são as chains de cada bucket e não a lista de buckets.
# Por outro lado, temos o trade-off com o custo de tempo.
# Para cada consulta, o tempo de busca é proporcional à quantidade de itens naquele bucket que, sendo uma árvore, chega a O(log n), sendo n a quantidade de itens naquele bucket.

# Resumindo: Python tem complexidade mais baixa, mas gasta muito espaço.
# Java utiliza bem melhor a memória, porém tem maior complexidade para consultas.


"""  --------------------------------------------------------------------------
 -> A classe Dict de Python
--------------------------------------------------------------------------- """
# Dicionários(Dict) são estruturas de dados do tipo chave-valor que são implementados como hashmaps por baixo dos panos.
# A combinação de hash functions e tratamento de colisões do Dict garantem uma complexidade assintótica de O(1) para inserção de consulta.
# São estruturas muito eficientes, versáteis e poderosas.
# O Dict considera verificações importantes como a existência de apenas uma chave, bem como fornece diversos métodos convenientes para acesso e manipulação dos dados.

# A sintaxe para utilização do Dict é diferente do que usamos na classe HashMap que construímos.
''' ./employee_registry.py '''

''' Importante! '''
# Apenas objetos imutáveis podem ser utilizados como chave.
# Ou seja, apenas aqueles objetos que depois de instanciados não podem ser alterados. Isso varia de linguagem para linguagem.
# Em Python, os objetos imutáveis são:
# - int;
# - float;
# - string;
# - tuple;
# - range;
# - byte;
# - frozenset.
''' ./operacoes_dict.py '''

''' Outros métodos '''
# Documentação oficial da classe Dict
# https://docs.python.org/3/tutorial/datastructures.html#dictionaries

# Métodos da classe Dict
# https://docs.python.org/3/library/stdtypes.html#dict

''' Exercício 5: '''
# Consulte a forma de se criar um dicionário chamado de dict comprehension e crie um dicionário que mapeia inteiros de 3 a 20 para o seu dobro. Exemplo:
# - 3 deve ser mapeado para 6;
# - 10 deve ser mapeado para 20.
''' R= ./exemplo5.py '''

''' Exercício 6: '''
# Dada uma string, construa um dicionário com a contagem de cada caractere da palavra.
# Utilize o pseudocódigo e o exemplo abaixo para se nortear.
# Para cada char na string:
#     - Se o char não estiver no dicionário, inclua com o valor 1;
#     - Se estiver, incremente o valor.
# # Exemplo:
# str = "bbbbaaaacccaaaaaaddddddddccccccc"
# # saída: {'b': 4, 'a': 10, 'c': 10, 'd': 8}
# str = "coxinha"
# # saída: {'c': 1, 'o': 1, 'x': 1, 'i': 1, 'n': 1, 'h': 1, 'a': 1}
# # Explicação: Nenhuma letra repete em coxinha :)
''' R= ./exemplo6.py '''

''' Exercício 7: '''
# Utilize o dicionário criado no exercício 5. Para as chaves ímpares, não queremos mais mapear para o seu sobro, mas sim, para o seu triplo.
# Consulte o método keys() e atualize o seu dicionário para a nova regra.
''' R= ./exemplo7.py '''


"""  --------------------------------------------------------------------------
 -> Resumo do conteúdo e resolução de problemas
--------------------------------------------------------------------------- """

# Quando usar hashmap
# Casos típicos

# - Guardar registros
# - Contagem de itens
# - Triagem de itens por alguma característica
# - Comparar o conteúdo de 2 listas

# Resumo + Encontrar o número mais frequente num array
''' ./a_count_nums.py '''

# Separar palavras de acordo com a sua letra inicial
''' ./b_word_screening.py '''

# Interseção entre listas
''' ./c_intersection.py '''


# --------------------------------------------------------------------------- #
# - > CONTEÚDO do dia - 36.3 - <--- / FIM ---------------------------------- //
# #####################################
# - > AULA ao VIVO - 36.3 ----- <--- / INICIO ------------------------------ //
# --------------------------------------------------------------------------- #

# Foco de hoje
# ...Hashmap e Dict

""" terminal bpython """
# >>> dicionario = {"BH": ["bux", "gabriel e.", "gleison"],}
# >>> dicionario["BH"]
# ['bux', 'gabriel e.', 'gleison']
# >>> hash("BH")
# -5396900140779277787
# >>> hash("BH") % 100
# 13
# >>> dicionario["AL"] = ['herculano']
# >>> dicionario["PP"] = ['vini', 'tulio', 'joao vitor', 'wolf']
# >>> "BH" in dicionario
# True
# >>> "AL" in dicionario
# True
# >>> "POA" in dicionario
# False

# 0(n) && 0(n log n)
""" ./pair_sum.py """

""" ./compute_order.py """

""" ./hund_thousand_names.py """

""" ./test_compute_order.py """

""" ./thousand_names.py """

# testando o tempo de leitura
# └─# python3 test_compute_order.py   
#   
# > > > tempo entrada pequena: 0.01461611000013363

























# --------------------------------------------------------------------------- #
# - > AULA ao VIVO - 36.3 ----- <--- / FIM --------------------------------- //
# #####################################
# - > EXERCÍCIO do dia - 36.3 - <--- / INICIO ------------------------------ //
# --------------------------------------------------------------------------- #

# Agora a prática

''' Exercício 1: '''


# --------------------------------------------------------------------------- #
# - > EXERCÍCIO do dia - 36.3 - <--- / FIM --------------------------------- //
# ################################ Hashmap e Dict
# - Concluído ... ----------------------------------------------------------- #

# Recursos adicionais (opcional)
"""  """
