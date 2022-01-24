import json

# O 'loads' carrega o JSON a partir de um texto e o 'load' carrega o JSON a
# partir de um arquivo.
...
# loads
with open("frentes.json") as file:
    content = file.read()  # ler o arquivo
    # conteúdo transformado em estrutura python equivalente, dicionário.
    parlamentares = json.loads(content)["dados"]
    # acessamos a chave 'dados' que é onde contém nossa lista de pokemons

    print(parlamentares[0])  # imprime o primeiro parlamentar da lista

...
# load
with open("frentes.json") as file:
    parlamentares = json.load(file)["dados"]

print(parlamentares[0])  # imprime o primeiro parlamentar da lista
