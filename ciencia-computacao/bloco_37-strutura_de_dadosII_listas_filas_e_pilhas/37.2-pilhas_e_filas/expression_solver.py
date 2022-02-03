from stack import Stack

def solve_expression(expr):
    stack = Stack()

    tokens_list = expr.split(' ')
    # Essa quebra dos tokens será importante para decidirmos o que faremos com cada um dos valores que temos na expressão, seja eles números ou operações.

    # iremos percorrer a nossa lista de tokens e executar as operações de 'push' e 'pop' da stack
    for token in tokens_list:
        if token == '+':
            # sum operation
            result = stack.pop() + stack.pop()
            stack.push(result)

        # Agora teremos que executar a operação de multiplicação
        # uma verificação para fazermos a operação de multiplicação e o calculo da multiplicação em si.
        elif token == '*':
            # multiply operation
            result = stack.pop() * stack.pop()
            stack.push(result)

        else:
            # add number operation
            stack.push(int(token))
            # nossa expressão 10 5 + já pode ser executada ⬆

    return stack.pop()


print(solve_expression("5 10 + 3 *"))  # 45
    