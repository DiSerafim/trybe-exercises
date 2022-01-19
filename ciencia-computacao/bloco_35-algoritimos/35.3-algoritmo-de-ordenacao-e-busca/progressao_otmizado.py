# https://pythontutor.com/live.html#mode=edit
# Problema - É possível criar uma progressão aritmética
#            a partir de uma sequência?
# Pega um número corrente, e vai jogando para a esquerda até sua posição correta


# verifica se ordenou(mudou)
def can_make_arithmetic_progression(nums):
    nums.sort()
    diferenca = nums[1] - nums[0]

    for index in range(1, len(nums)):
        if nums[index] - nums[index - 1] != diferenca:
            return False

    return True

if __name__ == "__main__":
    test1 = [1, 3, 5]  # saída: True
    test2 = [3, 6, 1]  # 1, 3, 6 - saída: False
    test3 = [7, 43, 19, 25, 1, 31, 37, 13]  # 1, 7, 13, 19, 25, 31, 37, 43 saída: True
    test4 = [7, 43, 19, 25, 1, 32, 37, 13]  # saída: False
    test5 = [1, 2]  # saída: True

    print(f"Entrada {test1} -> Saída: {can_make_arithmetic_progression(test1)}.")
    print(f"Entrada {test2} -> Saída: {can_make_arithmetic_progression(test2)}.")
    print(f"Entrada {test3} -> Saída: {can_make_arithmetic_progression(test3)}.")
    print(f"Entrada {test4} -> Saída: {can_make_arithmetic_progression(test4)}.")
    print(f"Entrada {test5} -> Saída: {can_make_arithmetic_progression(test5)}.")