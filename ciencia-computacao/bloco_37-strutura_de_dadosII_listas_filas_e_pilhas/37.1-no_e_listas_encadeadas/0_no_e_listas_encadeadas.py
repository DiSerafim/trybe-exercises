# ########################################## Nó e Listas Encadeadas
# --> CONTEÚDO do dia - 37.1 - <--- / INICIO ----------------------------- //
# ########################################## Nó e Listas Encadeadas

# Nó
# O que é uma Lista Encadeada?
# Quais as operações mais comuns?
# Encadeamento duplo
# Implementação de um Node
# Implementação de uma LinkedList

""" ---> OBJETIVO <---
- Construir e utilizar um Nó;
- Construir e utilizar uma Lista Encadeada;
"""

# ---> Conteúdos <---

"""  --------------------------------------------------------------------------- 
| -> Nó <-                                                                     |
---------------------------------------------------------------------------  """
# - O Nó(Node) é um TAD responsável por conter pelo menos duas coisas:
# Um valor(qualquer tipo)
# Um ponteiro (para o espaço de memória de outro Nó)

# O Nó, é como uma gaveta com duas partes:
# - em uma delas cabe um valor,
# -e na outra cabe a localização de outra gaveta.

# Esta segunda parte da gaveta que o Nó possui é chamada de ponteiro, pois ele aponta para outro elemento (outro nó).

# Este ponteiro aponta para o endereço de memória onde o próximo Nó se encontra.

# nesta parte da gaveta há o byte exato onde o próximo nó está alocado na memória RAM.

# Note que este segundo nó também terá um ponteiro de outro Nó, e assim sucessivamente quantas vezes quisermos, até que o último Nó terá um ponteiro nulo ( null ), que não aponta para nada.


"""  --------------------------------------------------------------------------- 
| -> O que é uma Lista Encadeada? <-                                           |
---------------------------------------------------------------------------  """
# - Ligando vários nós encadeados através de seus ponteiros, temos uma lista encadeada!

# Lembrando que cada nó contém um valor além do ponteiro, temos assim uma estrutura capaz de conter uma quantidade indefinida de elementos em sequência.

# 'Listas Encadeadas', também conhecidas como 'Listas Ligadas', ou 'linked lists', são um Tipo Abstrato de Dados capaz de armazenar elementos de forma sequencial.

""" Inicialização: """
# Para uma 'lista encadeada', basta criarmos os primeiros elementos.
# Se não forem adicionados mais, a lista não está desperdiçando espaço, e caso precisemos de mais itens, basta criar eles em qualquer lugar da memória e alterar os ponteiros da lista já existente para apontar para os novos elementos, de acordo com a ordem desejada.

""" Busca e Acesso """
# Em uma 'lista encadeada' os elementos estão espalhados.
# para buscar o enésimo número da lista, precisamos percorrer os N números, buscando ponteiros para achar o próximo.
# Esta operação pode ser mais custosa.
# Um detalhe importante é que, para realizar a inserção em uma lista encadeada, também precisaremos buscar esta posição.
# Para saber qual estrutura é melhor em casos de inserção, precisamos somar o custo de busca e de inserção.
# Portanto, para comparar o tempo de inserção em 'arrays' com o tempo de inserção em list'as encadeadas', precisamos levar em consideração também o tempo de busca em cada uma destas estruturas, de forma a termos o custo total da operação.

""" Inserção """
# Para inserir no final, apenas criamos um novo nó em qualquer lugar da memória e fazemos o último nó da lista apontar para este novo nó que foi criado, fazendo com que este passe a ser o último.
# Para inserir no começo, ou no meio, não precisamos mover ninguém de lugar;
# criamos o novo nó e ajustamos os ponteiros.
# Exemplificando: Supondo que temos uma lista com os nós A e C, sendo que A aponta para C(ou seja, A é o primeiro elemento, C é o segundo).
# Se quisermos inserir um nó B entre o A e o C, primeiramente criamos o novo nó B e fazemos ele apontar para o elemento que A aponta(que neste caso é o C).
# Em seguida, fazemos A apontar para B.
# E isto pode ser feito com esta mesma simplicidade em uma lista com milhares de elementos, bastando fazer o novo elemento apontar para o próximo, e o anterior apontar para o novo.

# LinkedLists não tem as restrições de acesso como nas seguintes TADs:
# - FILA - Acessar apenas o primeiro elemento;
# - PILHA Acessar apenas o último elemento;
# - DEQUE Acessar apenas as extremidades - Deque.
# - Ou seja, uma Lista Encadeada possibilita acessar qualquer elemento, sem exceção.


"""  --------------------------------------------------------------------------- 
| -> Quais as operações mais comuns? <-                                        |
---------------------------------------------------------------------------  """
# Ao se manipular uma LinkedList existem algumas operações que são comumente utilizadas:

# - A operação "insert_first" nos permite adicionar um Node no início da lista;             O(1)
# - A operação "insert_last" nos permite adicionar um Node no final da lista;               O(1)
# - A operação "insert_at" nos permite adicionar um Node em qualquer posição da lista;      O(n)
# - A operação "remove_first" nos permite remover um Node do início da lista;               O(1)
# - A operação "remove_last" nos permite remover um Node do final da lista;                 O(1)
# - A operação "remove_at" nos permite remover um Node em qualquer posição da lista;        O(n)
# - A operação "clear" nos permite remover todos os Nodes da lista;                         O(n)
# - A operação "get_element_at" nos permite visualizar o Node em qualquer posição da lista; O(n)
# - A operação "is_empty" nos permite identificar se existe ao menos um Node na lista.      O(1)


"""  --------------------------------------------------------------------------- 
| -> Encadeamento duplo <-                                                     |
---------------------------------------------------------------------------  """
# - As listas encadeadas normais têm seus nós ligados por ponteiros em somente uma direção. Mas e se precisarmos, por algum motivo, percorrer a lista também no sentido oposto? Nada nos impede de criar ponteiros no sentido oposto também, fazendo com que cada nó aponte para o anterior e o próximo ao mesmo tempo!

# A vantagem é termos mais facilidade de percorrer esta lista no sentido oposto.
# A desvantagem é ocuparmos mais espaço de memória, pois temos uma quantidade maior de ponteiros.
# Podemos construir nossos nós com mais de um ponteiro, isso possibilita montarmos estruturas diferentes, como as 'listas duplamente encadeadas', ou 'árvores'.
# O principal motivo da evolução da 'lista encadeada' para a 'lista duplamente encadeada' é a capacidade de otimização em operações nas extremidades.
# Operações a serem realizadas no final como 'insert_last' e 'remove_last' teriam complexidade de O(n).
# Neste caso, como temos uma forma de guardar a primeira e a última posição, podemos obter complexidade O(1), em ambas operações.
# O primeiro nó da lista se chama 'HEAD', a cabeça da lista.
# O último nó da lista se chama 'TAIL', a cauda da lista.
# Assim evitamos confundir a qual ponta da lista estamos nos referindo.


"""  --------------------------------------------------------------------------- 
| -> Implementação de um Node <-                                               |
---------------------------------------------------------------------------  """
# Primeiro declara o construtor da classe Node.
# Em seguida, declararemos a propriedade que indica o próximo elemento(next) como tendo o valor, por default, None:
""" ./node.py """


"""  --------------------------------------------------------------------------- 
| -> Implementação de uma LinkedList <-                                        |
---------------------------------------------------------------------------  """
# - Devemos utilizar a classe criada anteriormente, './node.py' para criar nossa estrutura da LinkedList:

""" ./linked_list_content.py """

# Utilizamos o conceito Literal String Interpolation na função '__str__', caso haja dúvidas, deem uma olhada na doc do pep-0498:
# https://www.python.org/dev/peps/pep-0498/

# Agora vamos implementar as operações do LinkedList para entendermos melhor as funcionalidades dessa estrutura de dados.


""" Inserir no início """
# Devemos informar que o elemento que estamos inserindo seja o novo 'head_value':
""" ./linked_list_content.py """

# Caso optemos por inserir o valor 3, teremos o resultado:
# - LinkedList(len=1 value=Node(value=3 next=None))

# No entanto, seguir essa abordagem faz com que os elementos anteriores sejam sobrepostos pelo novo.
# Devemos indicar que o elemento atual, 'head_value', será o next do elemento que estamos inserindo.
# Resumindo, o next será preenchido com o valor que está atualmente na 'head_value', para que o novo valor, que estamos inserindo no início da lista, seja preenchido na variável 'head_value', se tornando a "cabeça" da lista.
""" ./linked_list_content.py """

# Desta forma, adicionando o valor 3 e posteriormente o valor 1 teremos o resultado:
# - LinkedList(len=2 value=Node(value=1 next=Node(value=3 next=None)))


""" Inserir no final """
# - Devemos informar que o elemento que estamos inserindo seja o último na nossa estrutura de cadeia de Nodes:
""" ./linked_list_content.py """

# Idealmente esta abordagem estaria correta, desde que houvesse ao menos um elemento em nossa estrutura.
# Porém, caso não haja nenhum elemento, o trecho: while current_value.next:
# causaria o erro: AttributeError: 'NoneType' object has no attribute 'next'.
# Isso acontece, pois o 'head_value' ainda não possui valor.
# Para corrigir essa lógica, podemos utilizar a função 'insert_first' escrita previamente.
""" ./linked_list_content.py """

# Desta forma, adicionando o valor 3 e posteriormente o valor 1 teremos o resultado:
# - LinkedList(len=2 value=Node(value=3 next=Node(value=1 next=None)))

# Percebam que usamos a variável auxiliar 'current_value' para percorrer toda a cadeia de Nodes.
# Isto é necessário, pois assim não perdemos a referência para a cabeça da estrutura, 'head_value'.


""" Inserir em qualquer posição """
# - Devemos informar que o elemento que estamos inserindo seja adicionado na posição desejada em nossa estrutura.

# 💡 Lembrem-se: a primeira posição, assim como em arrays , será considerada como 0

# - Se o elemento tem a posição inferior a 1, será adicionado na posição inicial, utilizando a função 'insert_first' ;
# - Se o elemento tem a posição igual ou superior a quantidade de elementos, será adicionado na posição final, utilizando a função 'insert_last' .
""" ./linked_list_content.py """

# Desta forma podemos voltar nossos esforços apenas para a parte que estava "descoberta".
# Voltamos a nossa lógica apenas para as posições do meio da nossa estrutura.
# A lógica é similar ao inserir no final 'insert_last', no entanto, não analisamos se existe um próximo, mas sim, se o próximo é a posição que queremos inserir o novo valor.


""" Remover no início """
# - Devemos fazer com que a nossa estrutura remova a "cabeça", em casos de estrutura vazia, devemos retornar 'None':
""" ./linked_list_content.py """

# Dessa forma, fazemos com que o elemento next passe a ser o primeiro elemento, já que a head_value irá referenciá-lo


""" Remover no final """
# - Devemos informar que o elemento que estamos removendo seja o último da nossa estrutura de cadeia de 'Nodes'.
# Os problemas vistos na sessão Inserir no final também se aplicam aqui.
# Caso tenhamos apenas um elemento em nossa estrutura, invocaremos a função de remoção existente, 'remove_first':
""" ./linked_list_content.py """

# Veja que essa função requer uma atenção especial, pois além de uma variável auxiliar que utilizamos como ponteiro para identificar o 'Node' a ser removido, precisamos ter uma outra variável para indicar o Node anterior.
# Desta forma, indicamos que o Node anterior ao último irá apontar para None como próximo, liberando assim a referência ao anteriormente tido como último em nossa estrutura.


""" Remover em qualquer posição """
# - Devemos informar a posição do elemento que desejamos a remoção de nossa estrutura.

# - Se o elemento tem a posição inferior a 1, será removido na posição inicial, utilizando a função 'remove_first';
# - Se o elemento tem a posição igual ou superior a quantidade de elementos, será removido na posição final, utilizando a função 'remove_last'.
""" ./linked_list_content.py """

# Desta forma podemos voltar nossos esforços apenas para a parte que estava "descoberta".
# Ou seja, voltamos a nossa lógica apenas para as posições do meio da nossa estrutura.
# A lógica é similar ao remover do final remove_last, no entanto, não analisamos se existe um próximo, mas sim, se o próximo é a posição que queremos remover.

""" Obter elemento em qualquer posição """
# - Devemos informar a posição do elemento que desejamos visualizar o conteúdo, esta função deve retornar uma cópia do Node existente em nossa estrutura.

# - Se o elemento tem a posição inferior a 1 , será retornado o conteúdo da posição inicial;
# - Se o elemento tem a posição igual ou superior a quantidade de elementos, será retornado o conteúdo da posição final.
""" ./linked_list_content.py """

# Um ponto de atenção para as verificações constantes presentes no código, elas indicam que:
# - Caso não haja elementos em nossa estrutura será retornado None;
# - Caso a posição seja menor igual a 0, será retornado o primeiro elemento;
# - Caso a posição seja maior igual a N , onde N é o tamanho da lista, será retornado o último elemento.

# Por fim, retornamos um novo Node com o mesmo valor do existente em nossa estrutura.
# Isto é necessário para que retornemos apenas o valor, e não a referência aos demais elementos.


""" Está vazia """
# - Devemos informar se a estrutura está vazia, como possuímos um campo length podemos utilizá-lo como ponto a ser analisado, afinal se o mesmo for 0 nossa estrutura não possui elementos
""" ./linked_list_content.py """

# O uso do not neste contexto nos informa se a estrutura está vazia, já que not 0 == True.


""" Por fim nossa classe ficou assim: """
# Para testar
""" ./linked_list_content_1.py """


""" Implementação de uma lista Duplamente Encadeada """
# - Ela segue os mesmos princípios da implementação que acabamos de fazer, porém utilizando um Nó feito com dois ponteiros: next e previous.

# Lembrando de encadear ambos ao adicionar novos nós na estrutura.
# Isso fará com que as operações relativas ao último elemento da lista sejam mais rápidas e fáceis de implementar.


# #####################################
# --------------------------------------------------------------------------- #
# - > CONTEÚDO do dia - 37.1 - <--- / FIM ---------------------------------- //
# #####################################
# - > AULA ao VIVO - 37.1 ----- <--- / INICIO ------------------------------ //
# --------------------------------------------------------------------------- #

# Foco de hoje
# ... Nó e Listas Encadeadas

# para simulação:
# https://visualgo.net/en/list



# #####################################
# --------------------------------------------------------------------------- #
# - > AULA ao VIVO - 37.1 ----- <--- / FIM --------------------------------- //
# #####################################
# - > EXERCÍCIO do dia - 37.1 - <--- / INICIO ------------------------------ //
# --------------------------------------------------------------------------- #

""" Agora a prática """



# #####################################
# --------------------------------------------------------------------------- #
# - > EXERCÍCIO do dia - 37.1 - <--- / FIM --------------------------------- //
# ########################################## Nó e Listas Encadeadas
# - Concluído  ------------------------------------------------------------ #

""" Recursos Adicionais """
# 