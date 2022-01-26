import numpy as np

# define um array vazio de inteiros
myarray = np.array([], dtype=int)

# podemos adicionar alguns valores
myarray = np.insert(myarray, 0, 5)  # na posição 0 o valor 5
myarray = np.insert(myarray, 1, 3)
myarray = np.insert(myarray, 2, 5)
print("Após adicionar alguns valores: ", myarray)

# adicionar em uma posição intermediária
myarray = np.insert(myarray, 1, 4)
print("Após inserção em índice intermediário: ", myarray)


# remover um valor através do índice
myarray = np.delete(myarray, 0)
print("Após remover um valor:", myarray)


""" Resultado """
# python3 numpy_array_example.py                                                            130 ⨯ 1 ⚙

# Após adicionar alguns valores:  [5 3 5]
# Após inserção em índice intermediário:  [5 4 3 5]
# Após remover um valor: [4 3 5]
