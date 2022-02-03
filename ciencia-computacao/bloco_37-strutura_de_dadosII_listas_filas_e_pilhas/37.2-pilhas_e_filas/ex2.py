# Estenda a classe Stack, que escrevemos durante as explicações do conteúdo, para que ela suporte um limite de itens dentro da pilha.
# Se definirmos que a pilha deve ter o tamanho 2, ela não poderá ter 3 itens.
# stack_limit.py
# content_stack = LimitStack(2)
# content_stack.push(1)
# content_stack.push(-2)
# try:
#     content_stack.push(3)
# except StackOverflow:
#     print("Não é possível adicionar outro item à pilha")

from stack import Stack

class StackOverflow(Exception):
    pass


class LimitStack(Stack):
    def __init__(self, limit):
        super().__init__()
        self.limit = limit

    def push(self, value):
        if self.size() + 1 > self.limit:
            raise StackOverflow()
        super().push(value)

stack = LimitStack(2)
stack.push(1)
stack.push(-2)

try:
    stack.push(5)
except StackOverflow:
    print('The stack is full')


""" Resultado """
# python3 ex2.py

# The stack is full