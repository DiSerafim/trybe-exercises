import json


def import_parlamentar(file_path):
    try:
        with open(file_path) as file:
            return json.load(file)
    except json.decoder.JSONDecodeError:
        print("Problema no arquivo!")
        return ""
    except FileNotFoundError:
        print("Arquivo não encontrado")
        return ""
    except TypeError:
        print("Type não encontrado")
        return ""


if __name__ == "__main__":
    parlamento = import_parlamentar("dados/frentes.json")
    print(len(parlamento))  # 1117
    print(parlamento[0])  # imprime o 1°
    print(parlamento[0]["coordenador"])  # imprime os dados de "coordenador"
    print(parlamento[0]["coordenador"]["nome"])  # coordenador
    print(parlamento["coordenador"]["uriPartido"])  # coordenador
