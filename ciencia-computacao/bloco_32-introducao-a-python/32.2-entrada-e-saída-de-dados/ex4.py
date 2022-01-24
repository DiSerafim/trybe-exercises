
# Exercício 4: Dado o seguinte arquivo no formato JSON , leia seu conteúdo e
# calcule a porcentagem de livros em cada categoria, em relação ao número
# total de livros. O resultado deve ser escrito em um arquivo no formato CSV
# como o exemplo.
# categoria, porcentagem
# Python,0.23201856148491878
# Java,0.23201856148491878
# PHP,0.23201856148491878

# Bônus

import json
import csv


def get_livros(file):
    return[json.loads(linha) for linha in file]


def conta_livros_por_ctegoria(livros):
    categorias = {}
    for livro in livros:
        for categoria in livro["categories"]:
            if not categorias.get(categoria):
                categorias[categoria] = 0
            categorias[categoria] += 1
    return categorias


def calcula_porcentagem_por_categoria(conta_por_caegoria, total_livros):
    return [
        [categoria, quantidade_livros / total_livros]
        for categoria, quantidade_livros in conta_por_caegoria.items()
    ]


def salva_resultado(file, header, rows):
    grava = csv.writer(file)
    grava.writerow(header)
    grava.writerows(rows)


if __name__ == "__main__":
    # salva o resultado
    with open("ex4.json") as file:
        livros = get_livros(file)

    # conta por categoria
    conta_por_caegoria = conta_livros_por_ctegoria(livros)

    # calcula a porcentagem
    numero_de_livros = len(livros)
    porcetagem_livros = calcula_porcentagem_por_categoria(
        conta_por_caegoria, numero_de_livros
    )

    # grava csv
    header = ["categoria", "porcentagem"]
    with open("ex4.csv", "w") as file:
        salva_resultado(file, header, porcetagem_livros)
