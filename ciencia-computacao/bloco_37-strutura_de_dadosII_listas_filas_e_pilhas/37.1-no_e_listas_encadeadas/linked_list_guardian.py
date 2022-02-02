from node import Node
from rich import print


class LinkedListGuard:
    def __init__(self):
        self. head = None
        self.tail = None
        self.__length = 0

    def __str__(self):
        return f"LinkedListGuard(len={self.__length}, values={self.head})"

    def insert_first(self, value):
        new_node = Node(value)
        new_node.next = self.head
        self.head = new_node

        if not self.__length:
            self.tail = new_node

        self.__length += 1

    def insert_last(self, value):
        if not self.__length:
            return self.insert_first(value)

        new_node = Node(value)
        self.tail.next = new_node
        self.tail = new_node

        self.__length += 1

    def get_head_node(self):
        return Node(self.head.value)


if __name__ == "__main__":
    
    lecture_list = LinkedListGuard()
    print("\nLista Vazia: ", lecture_list)
    print("Cabeça Sentinela: ", lecture_list.head)
    print("Calda  Sentinela: ", lecture_list.tail)

    lecture_list.insert_last(2)
    print("\nApós adicionar 2: ", lecture_list)
    print("Cabeça Sentinela: ", lecture_list.head)
    print("Calda  Sentinela: ", lecture_list.tail)

    lecture_list.insert_last(1)
    print("\nApós adicionar 1: ", lecture_list)
    print("Cabeça Sentinela: ", lecture_list.head)
    print("Calda  Sentinela: ", lecture_list.tail)

    lecture_list.insert_last(3)
    print("\nApós adicionar 3: ", lecture_list)
    print("Cabeça Sentinela: ", lecture_list.head)
    print("Calda  Sentinela: ", lecture_list.tail)

    lecture_list.insert_first(0)
    print("\nApós adicionar 0 no começo: ", lecture_list)
    print("Cabeça Sentinela: ", lecture_list.get_head_node())
    print("Calda  Sentinela: ", lecture_list.tail)

    # print(lecture_list.get_head_node())

    # print("\nLista completa: ", lecture_list)
