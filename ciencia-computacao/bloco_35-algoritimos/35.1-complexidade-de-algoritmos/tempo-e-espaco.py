from array import array


def square_array(numbers):
    array_of_squares = []
    for number in numbers:
        array_of_squares.append(number * number)
        
    return array_of_squares

# A sua ordem de complexidade, portanto, é O(n)
# No exemplo acima, o algoritmo povoa e retorna um array de tamanho n
# sendo n o tamanho do array entrado, e o retorna.
print(square_array([1, 8, 7, 3, 5, 6, 8, 9, 2, 3]))  # [1, 64, 49, 9, 25, 36, 64, 81, 4, 9]


