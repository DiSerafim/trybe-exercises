# Crie um método com a assinatura abaixo:
# def __contains__(self, item):
#     # retorno: True, caso o elemento faça parte. False, caso o elemento não faça parte.
# Exemplos de entrada e saída:
# A = {1, 2, 3}
# entrada: 1
# saída: True
# entrada: 0
# saída: False


# segue o exercicio 1 do conteúdo
class Conjunto:
    def __init__(self):
        self.set = [False] * 1001
        self.last_element = 0


    def add(self, item):
        if not self.set[item]:
            self.set[item] = True
        if item > self.last_element:
            self.last_element = item


    def __str__(self):
        string = '{'

        for index, is_in_set in enumerate(self.set):
            if is_in_set:
                string += str(index)
                if index < self.last_element:
                    string += ", "
        string += "}"
        return string


    def __contains__(self, item):
        return self.set[item]


if __name__ == "__main__":
    conj = Conjunto()

    for i in [0, 10, 100, 1000]:
        conj.add(i)
        print(f"1", conj)

    conj2 = Conjunto()
    for i in [1, 2, 3]:
        conj2.add(i)
        print(f"2", conj2)

    conj3 = Conjunto()
    for i in [7, 2, 10]:
        conj3.add(i)
        print(f"3", conj3)

    conj4 = Conjunto()
    print(f"4", conj4)

    print(i)  # 10
    print(conj)  # {0, 10, 100, 1000}

    print(conj)  # print(f"1", conj)
    print(1 in conj)  # True
    print(0 in conj)  # False