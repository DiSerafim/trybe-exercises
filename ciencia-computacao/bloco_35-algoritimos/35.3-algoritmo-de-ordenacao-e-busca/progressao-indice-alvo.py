# Dado um array ordenado e um número alvo
# retorne o índice caso o alvo seja encontrado,
# se não retorne o índice onde ondeo alvo deve ser inserido.
# você pode assumir que não teremos valores duplicados.
# BUSCA BINÁRIA


# ordena o array
def search_insert(numbers, target):
    low_index = 0
    hight_index = len(numbers)

    while low_index < hight_index:
        midle_index = (low_index + hight_index)  // 2

        if numbers[midle_index] < target:
            low_index = midle_index + 1
        else:
            hight_index = midle_index

    return low_index

if __name__ == "__main__":
    teste1 = [1, 3, 5, 6]
    alvo1 = 5
    # saída: 2
    print(f"Posição a ser inserido {search_insert(teste1, alvo1)}")

    teste2 = [1, 3, 5, 6]
    alvo2 = 2
    # saída: 1
    print(f"Posição a ser inserido {search_insert(teste2, alvo2)}")

    teste3 = [1, 3, 5, 6]
    alvo3 = 7
    # saída: 4
    print(f"Posição a ser inserido {search_insert(teste3, alvo3)}")

    teste4 = [1, 3, 5, 6]
    alvo4 = 0
    # saída: 0
    print(f"Posição a ser inserido {search_insert(teste4, alvo4)}")
