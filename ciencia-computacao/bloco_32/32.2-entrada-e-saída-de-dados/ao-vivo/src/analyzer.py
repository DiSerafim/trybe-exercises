from importer import import_parlamentar


# get palamentares
def get_parlamentares(parlamentares):
    lista_parlamentar = set()  # 'set' para não adicionar valores repetidos
    for nome in parlamentares:
        lista_parlamentar.add(nome["coordenador"]["nome"])
    return lista_parlamentar  # 'Alex Santana'


# get partidos
def get_partidos(parlamentares):
    lista_partidos = set()  # 'set' para não adicionar valores repetidos
    for partido in parlamentares:
        lista_partidos.add(partido["coordenador"]["siglaPartido"])
    return lista_partidos  # 'PR'


# get parlamentares e partidos
def get_parlamentar_e_partido(parlamentares):
    result = {
        nome: ""
        for nome in get_parlamentares(parlamentares)
    }
    # return result  # 'Célio Moura': 'PT',
    for parlamentar in parlamentares:
        partido = parlamentar["coordenador"]["nome"]
        result[partido] = parlamentar["coordenador"]["siglaPartido"]
    return result


if __name__ == "__main__":
    parlamentar = import_parlamentar("dados/frentes.json")
    print(get_parlamentares(parlamentar))  # 'Alex Santana'
    print(get_partidos(parlamentar))  # 'PR'
    print(get_parlamentar_e_partido(parlamentar))  # 'Célio Moura': 'PT',
