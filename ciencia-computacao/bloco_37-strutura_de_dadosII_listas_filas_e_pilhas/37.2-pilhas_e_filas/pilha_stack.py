class Stack:
    def __init__(self):
        # usar estrutura de lista para guardar as informações da nossa pilha
        self._data = list()

    # método push para fazer o empilhamento e adicionar no topo da pilha
    def push(self, value):
        self._data.append(value)

    # remover item da pilha, no caso o último item do topo
    def pop(self):
        # se a pilha estiver vazia temos um tratamento para retornar None
        if self.is_empty():
            return None
        
        # -1 se refere ao último objeto da pilha
        value = self._data[-1]
        # remove o valor do topo de pilha
        del self._data[-1]
        return value

    # 👀 mostra qual o valor do último elemento da pilha
    def peek(self):
        if self.is_empty():
            return None
        value = self._data[-1]
        return value

    # tamanho da minha pilha
    def size(self):
        return len(self._data)

    # indica se a pilha está vazia ou não
    def is_empty(self):
        return not bool(self.size())

    # função que limpa a pilha | será tudo, no caso
    def clear(self):
        self._data.clear()

    # pega a nossa pilha e retorna em formato de string
    def __str__(self):
        str_item = ""
        for i in range(self.size()):
            value = self._data[i]
            str_item += str(value)
            if i + 1 < self.size():
                str_item += ", "

        return "Stack(" + str_item + ")"