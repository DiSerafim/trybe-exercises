''' Exercício de fixação '''
# Exercício 1: Fibonacci: Ligue o cronômetro, e faça a medição de quanto tempo você leva para resolver este problema.
# Se demorar mais de 10 minutos, pare! Seu tempo acabou.
# começo = [0, 1]
#  + 1 = 1 -> [0, 1, 1]
#  + 1 = 2 -> [0, 1, 1, 2]
#  + 2 = 3 -> [0, 1, 1, 2, 3]
#  + 2 = 5 -> [0, 1, 1, 2, 3, 5]

def fibonacci(n):
    sequence = [0, 1]
    for x in range(n):
        next = sequence[-1] + sequence[-2]
        sequence.append(next)
        # print(sequence)

    return sequence[-1]


print('caso-1', fibonacci(10))  # 13


# Na forma iterativa, calculamos todos os números da sequência até o número desejado
def fibonaci(m):
    if m < 2:
        return m
    else:
        result = fibonaci(m-1) + fibonaci(m-2)
        # print(result)
        return result


print('caso-2', fibonaci(6))