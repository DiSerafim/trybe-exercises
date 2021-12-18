import random

# escolhe um número aleatório entre 1 e 10
random_number = random.randint(1, 10)
guess = ""

# loop enquanto não adivinhar o número
while guess != random_number:
    # pergunte a pessoa usuária um número
    guess = int(input("Qual o seu palpite? "))

print("O numero sorteado era: ", guess)
