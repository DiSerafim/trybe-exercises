'''
Quais elementos da lista 'A' também ocorrem na lista 'B'?
Ou seja, qual é a intersecção entre as listas

listaA = [1, 2, 3, 4, 5, 6]
listaB = [4, 5, 6, 7, 8, 9]

resposta: [4, 5, 6]
O(n + m)
'''


def intersection(listaA, listaB):
    # cria dict da listaA
    seen_in_a = {}

    for item in listaA:
        if item not in seen_in_a:
            seen_in_a[item] = True

    # confere com a listaB
    ans = []

    for item in listaB:
        if item in seen_in_a:
            ans.append(item)

    return ans



listaA = [1, 2, 3, 4, 5, 6]
listaB = [4, 5, 6, 7, 8, 9]

print(intersection(listaA, listaB))  # [4, 5, 6]