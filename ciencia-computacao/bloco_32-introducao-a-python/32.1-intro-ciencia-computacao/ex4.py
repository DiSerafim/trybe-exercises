# Crie uma função que receba uma lista de nomes e retorne o nome
# com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas",
# "Nádia", "Fernanda", "Cairo", "Joana"] , o retorno deve ser "Fernanda".

def lista(nomes):
    maior_nome = nomes[0]
    for nome in nomes:
        if len(nome) > len(maior_nome):
            maior_nome = nome
    return maior_nome


print(lista(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))
# Fernanda
