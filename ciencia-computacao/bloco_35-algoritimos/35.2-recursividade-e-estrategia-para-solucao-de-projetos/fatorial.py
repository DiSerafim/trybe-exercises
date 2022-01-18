''' dado um numero N, retorne ofatorial e N.
Fatorial de N = N * (N - 1) * (N - 2) ... * 2 * 1

>> Raciocínio:
Fatorial de 1 = 1  << "Caso base"
Fatorial de 2 = 2 * (Fatorial de 1)
Fatorial de 3 = 3 * (Fatorial de 2)
Fatorial de 4 = 4 * (Fatorial de 3)
Fatorial de 5 = 5 * (Fatorial de 4)

Fatorial de N = N * (Fatorial de N - 1)
 '''

def fatorial(n):
    print("calculando para 'n'", n)
    if n == 1:
         return 1

    result = n * fatorial(n - 1)
    print("calculei", result)
    return result


if __name__ == "__main__":
    # assert fatorial(1) == 1
    assert fatorial(3) == 6
    # assert fatorial(5) == 120
    # assert fatorial(10) == 3628800