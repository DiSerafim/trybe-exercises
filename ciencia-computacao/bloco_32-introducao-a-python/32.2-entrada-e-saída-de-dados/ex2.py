# Exercício 2: Jogo da palavra embaralhada. Desenvolva um jogo em que a
# pessoa usuária tenha que adivinhar uma palavra que será mostrada com as
# letras embaralhadas. O programa terá uma lista de palavras e escolherá uma
# aleatoriamente. O jogador terá três tentativas para adivinhar a palavra.
# Ao final a palavra deve ser mostrada na tela, informando se a pessoa ganhou
# ou perdeu o jogo.
# 🦜 Para embaralhar uma palavra faça: scrambled_word = "".join(random.sample
# word, len(word)))
# 🦜 O sorteio de uma palavra aleatória pode ser feito utilizando o método
# choice: random.choice(["word1", "word2", "word3"]) -> "word2".

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
    lista, embaralha = palavra_secreta(PALAVRAS)
    print(f"A plavra secreta é.. {embaralha}")
    chances = palpites()
    resultado(lista, chances)
