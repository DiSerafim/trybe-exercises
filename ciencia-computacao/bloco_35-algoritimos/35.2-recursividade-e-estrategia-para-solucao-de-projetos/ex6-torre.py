# Escreva um algoritmo recursivo que resolva o problema da torre de hanoi, seguindo as instruções:
# - Assim como na imagem abaixo, a torre deve conter 3 discos, e três colunas;
# - Os discos começam alinhados na primeira coluna, e devem ser organizados respeitando a ordem de tamanho, na última coluna.


def torre_hanoi(discos, col1, col2, col3):
    if discos == 1:
        print("Move discos %d de %s para %s" % (discos, col1, col3))
    else:
        torre_hanoi(discos - 1, col1, col3, col2)
        print("Move discos %d de %s para %s" % (discos, col1, col3))
        torre_hanoi(discos -1, col2, col1, col3)


print(torre_hanoi(3, col1 = 'Primeiro', col2 = 'Meio', col3 = 'Fim'))