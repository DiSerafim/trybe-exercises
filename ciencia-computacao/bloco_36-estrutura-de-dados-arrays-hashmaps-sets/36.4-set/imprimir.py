# Crie um método com a assinatura abaixo:
# def __str__(self):
# retorno: uma string que representa o seu objeto
# Exemplos de entrada e saída:
# A = {1, 2, 3}
# # saída: '{1, 2, 3}'
# B = {7, 2, 10}
# # saída: '{2, 7, 10}'
# C = {}
# # saída: '{}'
# A saída não precisa ser ordenada, até mesmo porque um conjunto não leva a ordem em consideração.
# A saída pode ser em qualquer ordem, mas provavelmente será mais fácil retornar em ordem.
# Teste seu método imprimindo os objetos que você criou.


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


""" Resultado """
# python3 imprimir.py

# 1 {0}
# 1 {0, 10}
# 1 {0, 10, 100}
# 1 {0, 10, 100, 1000}
# 2 {1}
# 2 {1, 2}
# 2 {1, 2, 3}
# 3 {7}
# 3 {2, 7}
# 3 {2, 7, 10}
# 4 {}
# 10
# {0, 10, 100, 1000}
