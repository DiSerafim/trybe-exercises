# Faça um programa que receba um nome e imprima o mesmo na
# vertical em escada invertida. Ex: # PEDRO
# PEDRO
# PEDR
# PED
# PE
# P

def nome_em_vertical(nome):
    for retira_uma_letra in range(len(nome)):
        for i in range(len(nome) - retira_uma_letra):
            print(nome[i], end="")
        print()


if __name__ == "__main__":
    entrada = input("Digite qualquer coisa: ")
    nome_em_vertical(entrada)  # chama a função
