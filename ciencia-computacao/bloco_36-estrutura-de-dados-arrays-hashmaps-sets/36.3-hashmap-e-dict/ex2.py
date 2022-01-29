""" Desafio """
# Escreva um método que calcule o score de uma determinada pessoa.
# Dica: para saber o score de uma pessoa, você precisa saber o score das pessoas da equipe dela, correto?
# Qual estratégia utiliza a mesma função dentro dela própria?
# Exemplo de subordinados:
# - 1 => 2, 3
# - 2 => 4
# - 3 => sem subordinados
# - 4 => 5, 6
# - 5 => 7
# - 6 => sem subordinados
# - 7 => sem subordinados
# Neste exemplo, o score de cada pessoa é:
# - 1 => 5 (score 2) + 1 (score 3) + 1 (score dele próprio) = 7
# - 2 => 4 (score 4) + 1 (score dele próprio) = 5
# - 3 => 1 (score dele próprio)
# - 4 => 2 (score 5) + 1 (score 6) + 1 (score dele próprio) = 4
# - 5 => 1 (score 7) + 1 (score dele próprio) = 2
# - 6 => 1 (score dele próprio)
# - 7 => 1 (score dele próprio)

""" Solução """
# Precisamos notar que o mapeamento de cada pessoa para seus subordinados pode ser representado como uma hash.
# Precisamos observar que:
# score da pessoa 5 = 1 + score da pessoa 7 (1)
# score da pessoa 7 = 1
# Nos leva à recursividade como estratégia:


def score(subordinates, person):
    this_score = 1

    for subordinate in subordinates[person]:
        this_score += score(subordinates, subordinate)
    return this_score

if __name__ == "__main__":
    subordinates = {
        1: [2, 3],
        2: [4],
        3: [],
        4: [5, 6],
        5: [7],
        6: [],
        7: [],
    }


print(score(subordinates, 1))  # 7
print(score(subordinates, 2))  # 5
print(score(subordinates, 3))  # 1
print(score(subordinates, 4))  # 4
print(score(subordinates, 5))  # 2
print(score(subordinates, 6))  # 1
print(score(subordinates, 7))  # 1