# Calcule a média aritmética dos valores contidos em uma lista.

def media(numeros):
    total = 0
    for num in numeros:
        total += num
    return total / len(numeros)


print(media([5, 6, 9, 3]))  # 5.75
