# Crie um algoritmo não recursivo para contar quantos números pares existem em uma sequência numérica (1 a n).


def conta_numeros_pares(n):
    total_pares = 0
    for num in range(n+1):
        # print('for', num)
        if num % 2 == 0 and num != 0:
            total_pares += 1
            # print('pares', total_pares)
    
    # print('total', total_pares)
    return total_pares


print(conta_numeros_pares(1000))