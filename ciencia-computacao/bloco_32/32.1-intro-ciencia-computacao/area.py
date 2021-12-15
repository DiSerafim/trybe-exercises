# PI é uma "constante" em nosso módulo
PI = 3.14


def square(side):
    '''Calculate area of square.'''
    return side * side


def rectangle(length, width):
    '''Calculate area of rectangle.'''
    return length * width


def circle(radius):
    '''Calculate area of circle.'''
    return PI * radius * radius


if __name__ == '__main__':
    print('Área do quadrado(square):', square(10))
    # Área do quadrado(square): 100

    print('Área do retângulo(rectangle):', rectangle(3, 5))
    # Área do retângulo(rectangle): 15

    print('Área do círculo(circle):', circle(4))
    # Área do círculo(circle): 50.24
