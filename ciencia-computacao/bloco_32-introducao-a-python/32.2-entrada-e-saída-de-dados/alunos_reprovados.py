# Exercício 3: Dado um arquivo contendo estudantes e suas respectivas notas,
# escreva um programa que lê todas essas informações e filtre mantendo somente
# as pessoas que estão reprovadas, e escreva seus nomes em outro arquivo. A
# nota miníma para aprovação é 6.

# Arquivo:
# Marcos 10 | Felipe 4 | José 6 | Ana 10 | Maria 9 | Miguel 5
# Exemplo saída:
# Felipe | Miguel

# 🦜 A função split pode ser utilizada para dividir o nome em uma linha.
# Ex: line.split -> ["Marcos", "10"]

alunos_reprovados = []
# entrada
with open("alunos.txt") as lista_de_alunos:
    for aluno in lista_de_alunos:
        aluno_na_lista = aluno
        aluno_na_lista = aluno_na_lista.split(" ")
        if int(aluno_na_lista[1]) < 6:
            alunos_reprovados.append(aluno_na_lista[0] + "\n")

# saida
with open("alunos_reprovados.txt", mode="w") as alunos_reprovados_file:
    print(alunos_reprovados)
    alunos_reprovados_file.writelines(alunos_reprovados)
