from importer import import_parlamentar
from analyzer import get_parlamentar_e_partido
from exporter import export_data

START_MENU = """
1 - Ver Partidos
2 - Sair
"""

if __name__ == "__main__":
    partidos = import_parlamentar("dados/frentes.json")
    option = input(START_MENU)
    if option == "1":
        print(get_parlamentar_e_partido(partidos))  # printa
        export_data(get_parlamentar_e_partido(partidos))  # cria o aquivo .CSV
        print("exporta_data, criou o arquivo.. 'dados/report.csv'")
    elif option == "2":
        print("Saindo")
    else:
        print("Não temos essa opção")
