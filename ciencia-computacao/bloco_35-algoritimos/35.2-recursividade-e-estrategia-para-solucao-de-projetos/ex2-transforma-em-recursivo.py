# Transforme o algoritmo criado "ex1-conta-numeros-pares.py" em recursivo.
""" def conta_numeros_pares(n):
    total_pares = 0
    for num in range(n+1):
        if num % 2 == 0 and num != 0:
            total_pares += 1
    
    return total_pares


print(conta_numeros_pares(1000)) """


def conta_numeros_pares(n):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + conta_numeros_pares(n-1)
    else:
        return conta_numeros_pares(n-1)


print(conta_numeros_pares(950))  # 475
