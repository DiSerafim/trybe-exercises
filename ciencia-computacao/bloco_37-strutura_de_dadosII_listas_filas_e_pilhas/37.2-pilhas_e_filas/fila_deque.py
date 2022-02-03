# controle do array
# Deque (furão de fila)
class Deque:
    # Guardião da posição do elemento
    FIRST_ELEMENT = 0

    def __init__(self):
        # iniciando uma classe, local onde armazena a fila
        self._data = []

    def __len__(self):
        # tamanho do Array ou imprimir toda fila
        return len(self._data)

    def __str__(self):
        return (
            # imprimi a fila como string
            "Deque(" + ", ".join(str(x) for x in self._data) + ")"
        )

    # Metodos Universais de Fila Deque

    def push_front(self, value):
        self._data.insert(
            # metodo faz o push da fila no Início
            self.FIRST_ELEMENT, value
        )
    
    # metodo faz o push da fila no Fim
    def push_back(self, value):
        self._data.append(value)

    # remove no Início da fila
    def pop_front(self):
        if self._data:
            return self._data.pop(self.FIRST_ELEMENT)
        return None

    # remove no Fim da fila
    def pop_back(self):
        if self._data:
            return self._data.pop()
        return None

    # 👀 Consulta Início da fila
    def peek_front(self):
        if self._data:
            return self._data[self.FIRST_ELEMENT]
        return None

    # 👀 Consulta Fim da fila
    def peek_back(self):
        if self._data:
            return self._data[len(self) -1]
        return None

    # Limpa a fila
    def clear(self):
        self._data.clear()
