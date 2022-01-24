import sys


if __name__ == "__main__":
    for argument in sys.argv:
        print("Received -> ", argument)


# executa
#  python3 arquivo.py 2 4 "teste"

# saida
# Received ->  arquivo.py
# Received ->  2
# Received ->  4
# Received ->  teste
