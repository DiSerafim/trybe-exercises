from array_example import Array


class Matrix(Array):

    def get(self, row, column):
        return self.data[row][column]

    def set(self, row, column, value):
        """Caso a linha não exista, uma nova linha
        será criada."""
        try:
            self.data[row].insert(column, value)
        except IndexError:
            self.data.insert(row, [value])

    def remove(self, row, column):
        # removeremos o item, retornando-o
        return self.data[row].pop(column)

print('----- Arrays multidimensionais')
array = Matrix()
array.set(0, 0, "Marcos")
array.set(0, 1, 6)
array.set(0, 2, 9)

array.set(1, 0, "Patrícia")
array.set(1, 1, 9)
array.set(1, 2, 6)

print(array)

# remove o índice 2, da primeira linha com o valor 9
array.remove(0, 2)

print(array)


""" Resultado """
# python3 multidimensional_array_example.py

# Felipe
# Shirley
# Miguel
# Ana
# Index: 0 , Nome: Felipe
# Index: 1 , Nome: Ana
# Index: 2 , Nome: Shirley
# Index: 3 , Nome: Miguel
# ----- Arrays multidimensionais
# [['Marcos', 6, 9], ['Patrícia', 9, 6]]
# [['Marcos', 6], ['Patrícia', 9, 6]]
