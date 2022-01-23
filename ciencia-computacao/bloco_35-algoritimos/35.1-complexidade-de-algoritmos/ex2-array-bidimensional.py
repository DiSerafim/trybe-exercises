# Suponha que se está escrevendo uma função para um jogo de batalha naval.
# Dado um array bidimensional com n linhas e m colunas, e um par de 
# coordenadas x para linhas e y para colunas, o algoritmo verifica se há um 
# navio na coordenada alvo. Por exemplo:

"""
entrada = [ 0 0 0 0 1
            0 0 0 0 1
            1 1 1 1 1
            0 0 0 1 0 ]

resultado para (0, 4) = True
resultado para (1, 1) = False
"""
# Qual seria a ordem de complexidade da solução para este problema? E a complexidade de espaço?


def battleship(grid, line, column):
    if (grid[line][column] == 1):
        return True
    return False

""" R = """
# Mesmo para um array bidimensional, o acesso a um elemento é "O(1)".
# A complexidade de espaço também é "O(1)",
# pois não consideramos a entrada em seu cálculo.