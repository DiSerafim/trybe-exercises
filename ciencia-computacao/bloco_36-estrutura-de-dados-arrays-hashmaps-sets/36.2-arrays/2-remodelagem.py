from sqlalchemy import column


def matrix_reshape(matriz_original, rows, columns):
    new_matriz = [[]]
    row_index = 0
    column_index = 0

    if not matriz_original:
        return matriz_original

    if(rows * columns != len(matriz_original) * len(matriz_original[0])):
        return matriz_original
        
    for row in matriz_original:
        for column in row:
            if column_index == columns:
                new_matriz.append([])
                row_index += 1    
            new_matriz[row_index].append(column)
            column_index += 1
    return new_matriz


if __name__ == "__main__":
    test1 = [[1, 2], [3, 4]]  # formatação apenas para ajudar a visualização
    rows_1 = 1
    columns_1 = 4
    # saída: [
    #           [1 , 2 , 3,4]
    #        ]
    print("Matrix 1", matrix_reshape(test1, rows_1, columns_1))
    # --------------
    test2 = [[1, 2], [3, 4]]
    rows_2 = 2
    columns_2 = 4
    # saída: [
    #     [1, 2],
    #     [3, 4]
    # ]
    print("Matrix 2", matrix_reshape(test2, rows_2, columns_2))
    # --------------
    test3 = []
    rows_3 = 2
    columns_3 = 2
    # saída: []
    print("Matrix 3", matrix_reshape(test3, rows_3, columns_3))


""" Resultado """
# python3 2-remodelagem.py                                                                    1 ⨯ 2 ⚙

# Matrix 1 [[1, 2, 3, 4]]
# Matrix 2 [[1, 2], [3, 4]]
# Matrix 3 []
