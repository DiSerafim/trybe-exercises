# Estenda a classe Stack, que escrevemos durante as explicações do conteúdo, adicionando uma nova função chamada min_value() que irá retornar o menor valor inteiro presente na pilha.
# stack.py
# content_stack.push(1)
# content_stack.push(-2)
# content_stack.push(3)
# print(content_stack.min_value()) # saída: -2

class Stack():
    def __init__(self):
        self._data = list()

    def size(self):
        return len(self._data)

    def is_empty(self):
        return not bool(self.size())

    def push(self, value):
        self._data.append(value)

    def pop(self):
        if self.is_empty():
            return None

        # -1 se refere ao último objeto da pilha.
        value = self._data[-1]
        del self._data[-1]
        return value

    def peek(self):
        if self.is_empty():
            return None
        value = self._data[-1]
        return value

    # ex1.py
    def min_value(self):
        if self.is_empty():
            return None

        min_value = self._data[0]
        for elem in self._data:
            if elem < min_value:
                min_value = elem
        return min_value

    def clear(self):
        self._data.clear()

    def __str__(self):
        str_items = ""
        for i in range(self.size()):
            value = self._data[i]
            str_items += str(value)
            if i + 1 < self.size():
                str_items += ", "

        return "Stack(" + str_items + ")"


if __name__ == "__main__":
    # elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    elements = [2, 1, 5, 4, 10, 6, 8, 22, 11, 10]
    content_stack = Stack()

    for elem in elements:
        content_stack.push(elem)


    # saída: Stack(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    print(content_stack)
    # saída: 10
    print(content_stack.size())
    # saída: 10
    print(content_stack.peek())
    # saída: 10, pois a função retorna o elemento que está sendo retirado
    print(content_stack.pop())
    # saída: 9, pois, após o 10 ter sido removido, o 9 se tornou o elemento do topo da pilha
    print(content_stack.peek())
    # saída: 9
    print(content_stack.size())
    # saída: None, pois a função não retorna nada!
    print(content_stack.clear())
    # saída: 0
    print(content_stack.size())

    # ex1.py
    print(content_stack.min_value())  #
    content_stack.push(-5)
    print(content_stack.min_value())


""" Resultado """
# python3 ex1.py

# Stack(2, 1, 5, 4, 10, 6, 8, 22, 11, 10)
# 10
# 10
# 10
# 11
# 9
# None
# 0
# None
# -5
