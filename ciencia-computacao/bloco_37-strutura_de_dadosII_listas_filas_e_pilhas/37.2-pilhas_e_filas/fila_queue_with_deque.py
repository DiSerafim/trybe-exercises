from fila_deque import Deque


class Queue:
    # faz o push dos elementos da fila
    def __init__(self):
        self._data = Deque()

    def enqueue(self, value):
        self._data.push_back(value)

    def dequeue(self):
        return self._data.pop_front()

    def peek(self):
        return self._data.peek_front()

    def is_empty(self):
        return not self._data

    def clear(self):
        return self._data.clear()


if __name__ == "__main__":
    queue_live = Queue()
    elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    for elem in elements:
        queue_live.enqueue(elem)

    print("Fila:".rjust(18), queue_live._data)
    # Deque(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

    print("Está vazia:".rjust(18), queue_live.is_empty())  # False
    print("Exibe próximo:".rjust(18), queue_live.peek())  # 1
    print("Consome próximo:".rjust(18), queue_live.dequeue())  # 1
    print("")  # 
    print("Fila após dequeue:".rjust(18), queue_live._data)  # 1
    print("Exibe próximo:".rjust(18), queue_live.peek())  # 2
    print("")  # 

    queue_live.clear()
    print("Exibe próximo:".rjust(18), queue_live.peek())  # None
    print("Está vazia:".rjust(18), queue_live.is_empty())  # None
    print("Fila vazia:".rjust(18), queue_live._data)  # True


''' Resultado '''
# python3 queue_with_deque.py


#              Fila: Deque(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
#        Está vazia: False
#     Exibe próximo: 1
#   Consome próximo: 1

# Fila após dequeue: Deque(2, 3, 4, 5, 6, 7, 8, 9, 10)
#     Exibe próximo: 2

#     Exibe próximo: None
#        Está vazia: True
#        Fila vazia: Deque()