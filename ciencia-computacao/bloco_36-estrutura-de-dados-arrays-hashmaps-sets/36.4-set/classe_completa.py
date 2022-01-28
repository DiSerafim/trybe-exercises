# segue o exercicio 5 do conteúdo
from sqlalchemy import false


class Conjunto:
    def __init__(self):
        self.set = [False] * 1001
        self.last_element = 0


    def add(self, item):
        if not self.set[item]:
            self.set[item] = True
        if item > self.last_element:
            self.last_element = item


    def __contains__(self, item):
        return self.set[item]


    def union(self, conjuntoB):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] or conjuntoB.set[index]:
                new_conjunto.add(index)
        return new_conjunto


    def intersection(self, conjuntoB):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] and conjuntoB.set[index]:
                new_conjunto.add(index)
        return new_conjunto


    def difference(self, conjuntoB):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] and not conjuntoB.set[index]:
                new_conjunto.add(index)
        return new_conjunto


    def issubset(self, conjuntoB):
        for index in range(1001):
            if self.set[index] and not conjuntoB.set[index]:
                return False
        return True


    def issuperset(self, conjuntoB):
        for index in range(1001):
            if conjuntoB.set[index] and not self.set[index]:
                return False
        return True



    def __str__(self):
        string = '{'

        for index, is_in_set in enumerate(self.set):
            if is_in_set:
                string += str(index)
                if index < self.last_element:
                    string += ", "
        string += "}"
        return string

        
if __name__ == "__main__":
    conj1 = Conjunto()

    for i in [1, 2, 3]:
        conj1.add(i)

    conj2 = Conjunto()
    for i in  [7, 2, 10]:
        conj2.add(i)

    conj3 = Conjunto()
    conj4 = conj1.union(conj2)

    print(conj1.issubset(conj4))  # True
    print(conj4.issuperset(conj1))  # True
    print(conj3.issubset(conj4))  # True