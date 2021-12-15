# Dada uma lista, descubra o menor elemento. Por exemplo,
# [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2.

def menor_valor(numeros):
    numero = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
    menor = numero[0]
    for numero in numeros:
        if numero < menor:
            menor = numero
    return menor


print(menor_valor([5, 9, 3, 19, 70, 8, 100, 1, 35, 27]))  # 1

# ou usando a função 'min' nativa do python


def minimo(numeros):
    return min(numeros)


print(minimo([5, 9, 3, 19, 70, 8, 100, 0, 35, 27]))  # 0

# ou

menor_numero = min

print(menor_numero([5, 9, 3, 19, 70, 8, 100, 76, 35, 27]))  # 3
