# Escreva um algoritmo recursivo que identifica se um número é primo.


def numero_primo(n, i, j):
    if i < j:
        return False
    elif n % i == 0:
        return True
    else:
        print(numero_primo(n, i + 1, j))
        return numero_primo(n, i + 1, j)


def primo(n):
    result = n > 1 and not(numero_primo(n, 2, n - 1))
    return result


print(primo(997))
