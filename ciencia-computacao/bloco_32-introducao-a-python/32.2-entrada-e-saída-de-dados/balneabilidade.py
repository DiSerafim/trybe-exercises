import csv

with open("balneabilidade.csv") as file:
    beach_status_reader = csv.reader(file, delimiter=",", quotechar='"')
    header, *data = beach_status_reader

print(data)

# O leitor define como dialeto padrão excel , que significa dizer que o
# delimitador de campos será a " , " e o caractere de citação será aspas
# duplas ( " ).

...
# desempacotamento de valores

a, b = "cd"
print(a)  # c
print(b)  # d

head, *tail = [1, 2, 3]  # Quando um * está presente no desempacotamento, os
# valores são desempacotados em formato de lista.
print(head)  # 1
print(tail)  # [2, 3]

...
# balneabilidade por campanha e salvamos o resultado no formato csv:

# lê os dados
with open("balneabilidade.csv") as file:
    beach_status_reader = csv.reader(file, delimiter=",", quotechar='"')
    header, *data = beach_status_reader

# agrupa campanhas e suas respectivas balneabilidades
bathing_by_campaign = {}
for row in data:
    campaign = row[6]
    bathing = row[2]
    if campaign not in bathing_by_campaign:
        bathing_by_campaign[campaign] = {
            "Própria": 0,
            "Imprópria": 0,
            "Muito Boa": 0,
            "Indisponível": 0,
            "Satisfatória": 0,
        }
    bathing_by_campaign[campaign][bathing] += 1

# escreve o relatorio em csv
# abre um arquivo para escrita
with open("report_por_campanha.csv", "w") as file:
    writer = csv.writer(file)

    # escreve o cabeçalho
    headers = [
        "Campanha",
        "Própria",
        "Imprópria",
        "Muito Boa",
        "Indisponível",
        "Satisfatória",
    ]
    writer.writerow(headers)

    # escreve as linhas de dados
    for campaign, bathing in bathing_by_campaign.items():
        # desempacota os valores de balneabilidade para formar uma linha
        # equivalente a
        # row = [campaign]
        # for value in bathing.values():
        #     row.append(value)
        row = [campaign, *bathing.values()]
        writer.writerow(row)
