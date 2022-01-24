# Exercício 3: Modifique o exercício anterior para que as palavras sejam lidas
# de um arquivo. Considere que o arquivo terá cada palavra em uma linha.

import random

PALAVRAS = [
    "Gato",
    "Cachorro",
    "Elefante",
    "Macaco",
    "Cavalo",
    "Pato",
    "Camêlo",
    "Urso",
    "Alce",
    "Galo",
]
TENTATIVAS = 3


# salva o resultado em um arquivo
def salva_resultado(file):
    return [palavra.strip() for palavra in file]


def palavra_secreta(palavras):
    lista = random.choice(palavras)
    embaralha = "".join(random.sample(lista, len(lista)))
    return lista, embaralha


def palpites():
    chances = []
    for tentativa in range(TENTATIVAS):
        chance = input("Tente advinhar o nome do Animal: ")
        chances.append(chance)
    return chances


def resultado(lista, palpites):
    if lista in palpites:
        print(f"você acertou: {lista}")
    else:
        print(f"O correto é: {lista}")


if __name__ == "__main__":
    with open("ex3.txt") as file:
        resposta = salva_resultado(file)
    lista, embaralha = palavra_secreta(PALAVRAS)
    print(f"A plavra secreta é.. {embaralha}")
    chances = palpites()
    resultado(lista, chances)
