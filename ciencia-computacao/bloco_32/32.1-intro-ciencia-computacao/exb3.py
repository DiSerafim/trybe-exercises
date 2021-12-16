# Crie uma função que receba um número inteiro N e retorne o
# somatório de todos os números de 1 até N . Por exemplo, para N = 5 , o valor
# esperado será 15.

def soma_inteiro(numero):
    total = 0
    for num in range(1, numero + 1):
        total += num
    return total


print(soma_inteiro(8))  # 1+2+3+4+5+6+7+8 = 36

# ou função 'sum' nativa do python


def soma(valor):
    return sum(range(1, valor + 1))


print(soma(7))  # 1+2+3+4+5+6+7 = 28
