import sys


class Array:
    def __init__(self):
        self.data = []

    def __len__(self):
        # quando pedido o tamanho do array
        # retorne o tamanho de data
        return len(self.data)

    def __str__(self):
        # converte para string e exibe os valores de data
        return str(self.data)

    def get(self, index):
        return self.data[index]

    def set(self, index, value):
        self.data.insert(index, value)

    # O código de remoção ficaria assim:
    def remove(self, index):
        # removeremos o item, retornando-o
        return self.data.pop(index)


# vamos inicializar e preencher uma estrutura de dados array
array = Array()

array.set(0, "Marcos")
array.set(1, "Patrícia")
# quando começamos as inserções o valor muda
# sys.getsizeof retorna o tamanho da lista em bytes
array_memory_size = sys.getsizeof(array.data)
print(f'Memória em bytes', array_memory_size)  # 56

# print(array), internamente chama o método array.__str__() que implementamos
print(f'array[0][1]', array)  # saída: ["Marcos", "Patrícia"]

# inserindo no começo do array
array.set(0, "Valeria")
print(f'inserindo no começo', array)  # saída: ["Valeria", "Marcos", "Patrícia"]

# inserindo em uma posição intermediária
array.set(1, "Miguel")
print(f'inserindo intermediária', array) # saída: ['Valeria', 'Miguel', 'Marcos', 'Patrícia']

array.set(2, "Matheus")
array.set(3, "Giovana")

print('Todos antes da remoção', array)

# O código de remoção ficaria assim:
array.remove(1)  # retorna a string "Marcos"
print(f'remoção index[1]', array)  # saída: ['Patrícia']

# # update(self, index, value)
# array.update(array, 0, "value")  # código com erro
# print(f'Atualizando o indice 0', array)

# como um espaço adicional é reservado o valor não é modificado
array_memory_size = sys.getsizeof(array.data)
print(f'Memória em bytes', array_memory_size) # 88

array.set(4, "Alberto")
array.set(5, "Marta")
array.set(6, "Túlio")
array.set(7, "Michelle")
array_memory_size = sys.getsizeof(array.data)
print(f'Memória em bytes', array_memory_size) # 120


# para acessar um elemento do array, utilizamos seu índice
print(array.get(0))  # saída: Felipe
print(array.get(2))  # saída: Shirley
print(array.get(3))  # saida: Miguel
print(array.get(1))  # saida: Ana

# podemos iterar sobre seus elementos da seguinte maneira
index = 0
# enquanto há elementos no array
while index < len(array):
    # recupera o elemento através de um índice
    print("Index:", index, ", Nome:", array.get(index))
    index += 1


""" Resultado """
# python3 array_example.py

# Memória em bytes 88
# Memória em bytes 88
# Memória em bytes 120
# Marcos
# Matheus
# Giovana
# Patrícia
# Index: 0 , Nome: Marcos
# Index: 1 , Nome: Patrícia
# Index: 2 , Nome: Matheus
# Index: 3 , Nome: Giovana
# Index: 4 , Nome: Alberto
# Index: 5 , Nome: Marta
# Index: 6 , Nome: Túlio
# Index: 7 , Nome: Michelle

