list_a = [1, 3, 4, -43, 2, 0]
list_b = [4, 4, 9, 578, 12]

""" Instanciar adicionando itens """
set_a = set()
for item in list_a:
    set_a.add(item)
print(set_a)  # {0, 1, 2, 3, 4, -43}

""" Instanciar direto com listas """
set_a = set(list_a)
print(set_a)  # {0, 1, 2, 3, 4, -43}

set_b = set(list_b)
print(set_b)  # {9, 578, 4, 12}

""" Instanciar com a notação de chaves """
set_b = {-3, 0, 3, 4}
print(set_b)  # {0, 3, 4, -3}

""" Principais operações com set """
print(set_a.union(list_b))  # {0, 1, 2, 3, 4, 578, 9, 12, -43}
print(set_a.intersection(list_b))  # {4}
print(set_a.difference(list_b))  # {0, 1, 2, 3, -43}
print(set_b.difference(set_a))  # {-3}

""" Operadores de comparação """
print(set_a == set_b)  # False
print(set_a > set_b)  # False
print({1, 2, 3, 4} > {2, 3})  # True