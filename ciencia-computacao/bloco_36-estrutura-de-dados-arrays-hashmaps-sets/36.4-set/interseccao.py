# Crie um método com a assinatura abaixo, que recebe como parâmetro outro objeto da classe Conjunto :
# def intersection(self, conjuntoB):
#     # retorno: outro objeto Conjunto com intersecção do próprio objeto com o conjuntoB
# Exemplos de entrada e saída:
# A = {1, 2, 3}
# B = {3, 4, 5}
# # saída: {3}
# C = {0, 3, 6, 9}
# B = {12, 15, 18}
# # saída: {}
# Pronto, passados todos os exercícios temos nossa primeira classe Conjunto implementada! Existem outras operações que deveríamos implementar para torná-la completa, mas vamos fazer isso nos exercícios do conteúdo.


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


if __name__ == "__main__":
    conj = Conjunto()

    conj1 = Conjunto()
    for i in [1, 2, 3]:
        conj1.add(i)

    conj2 = Conjunto()
    for i in  [7, 2, 10]:
        conj2.add(i)

    conj3 = conj1.intersection(conj2)

    print(i)  # 10
    print(conj3)  # {2}