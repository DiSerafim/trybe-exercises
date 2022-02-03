''' Solução
Usar a pilha
percorrer a entrada
    se inteiro:
        push
    se +:
        soma = pop(último) + pop(penúltimo)
        push(último)
        push(penúltimo)
        push(soma)
    se 'D':
        push(peek * 2)
    se 'C':
        pop(-peek)

soma = calculo()
retorna soma
'''

from pilha_stack import Stack


def calculate_points(rounds):
    # Clausula guarda
    if len(rounds) == 1:
        return None
    if rounds[0] in ['D', 'C', '+']:
        return None
    if rounds[1] == '+':
        return None

    stack = Stack()

    for game_round in rounds:
        if game_round == "":
            return None
        if game_round == "+":
            last_round = stack.pop()
            penultimate_round = stack.pop()
            current_round = last_round + penultimate_round
            stack.push(penultimate_round)
            stack.push(last_round)
            stack.push(current_round)
        elif game_round == 'D':
            last_round = stack.peek()
            current_round = last_round * 2
            stack.push(current_round)
        elif game_round == 'C':
            stack.pop()
        else:
            stack.push(int(game_round))

    total = 0
    while not stack.is_empty():
        total += stack.pop()
    return total


print(calculate_points(['1', '2', '+', 'D', 'C']))                  # 6
print(calculate_points(['5', '2', 'C', 'D', '+']))                  # 30
print(calculate_points(['5', '-2', '4', 'C', 'D', '9', '+', '+']))  # 27