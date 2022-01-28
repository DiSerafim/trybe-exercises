"""
Em jogos de tabuleiro que precisam de 2 dados de 6 lados, é
muito comum que quando a soma dos números dá 7 algo especial acontece.
Isso porque 7 é a soma mais provável.

Receba uma lista de números que representam várias jogadas de um dado de 6 lados.
Sua missão é combinar as jogadas que somam 7.
Descubra todas as duplas que é possível formar que somam 7.

Cada jogada só pode ser combinada um única vez com outra dupla
"""

def get_sevens(rolls):
    seen_before = set()
    answer = []

    for roll in rolls:
        if 7-roll in seen_before:
            answer.append((7-roll, roll))
            seen_before.discard(7-roll)
        else:
            seen_before.add(roll)
    return answer

if __name__ == "__main__":
    rolls = [1, 5, 3, 2, 6, 1, 4, 2, 6, 3, 1, 1]

    print(get_sevens(rolls))  # [(5, 2), (1, 6), (3, 4), (1, 6)]


# def get_sevens(rolls):
#     seen_before = {}
#     answer = []

#     for roll in rolls:
#         if 7-roll in seen_before:
#             answer.append((7-roll, roll))
#             del seen_before[7-roll]
#         else:
#             seen_before[roll] = True
#     return answer

# if __name__ == "__main__":
#     rolls = [1, 5, 3, 2, 6, 1, 4, 2, 6, 3, 1, 1]

#     print(get_sevens(rolls))  # [(5, 2), (1, 6), (3, 4), (1, 6)]