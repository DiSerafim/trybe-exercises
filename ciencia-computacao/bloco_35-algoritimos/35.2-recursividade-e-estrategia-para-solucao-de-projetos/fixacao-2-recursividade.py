''' Exercícios de fixação '''
# Exercício 2: ReverseCorp Ligue seu cronômetro de novo, e tente desenvolver esta solução, utilizando a iteração.
# # "Faça uma função que recebe uma lista, e retorna-a na ordem reversa."


# soluçãoiterativa
def reverse(list):
    reversed_list = []
    for item in list:
        reversed_list.insert(0, item)
        print(reversed_list)
    return reversed_list


print(reverse([1,2,3,4,5,6,7,8,9]))  # [9, 8, 7, 6, 5, 4, 3, 2, 1]


# recursiva
def reversee(list):
    if len(list) < 2:
        return list;
    else:
        return reversee(list[1:]) + [list[0]]


print(reversee([1,2,3,4,5,6,7,8,9]))  # [9, 8, 7, 6, 5, 4, 3, 2, 1]
