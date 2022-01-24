# Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um triângulo retângulo com n asteriscos de base. Por exemplo,
# para n = 5 o triângulo terá 5 asteriscos na base:
# n = 5

# *
# **
# ***
# ****
# *****

def triag_asterist(n):
    for linhas in range(1, n + 1):
        print(linhas * '*')


print(triag_asterist(5))
