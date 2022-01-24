import json
from csv import DictWriter


class SalesReport():
    def __init__(self, export_file):
        self.export_file = export_file + '.json'


    def build(self):
        """ Aqui colocamos a lógica para a entidade 'se criar',
        criar um relatório imprimível. Por simplicidade,
        vamos omitir essa lógica nos exemplos! """
        return [{
            'Coluna 1': 'Dado 1',
            'Coluna 2': 'Dado 2',
            'Coluna 3': 'Dado 3',
        },
        {
            'Coluna 1': 'Dado A',
            'Coluna 2': 'Dado B',
            'Coluna 3': 'Dado C',
        }]


    def serialise(self):
        # Vamos gerar, aqui, o nosso relatório em formato JSON
        with open(self.export_file, 'w') as file:
            json.dump(self.build(), file)

    
    # for csv
    def serialize_csv(self):
        with open('fixacao1.csv', 'w') as file:
            headers = ["Coluna 1", "Coluna 2", "Coluna 3"]
            csv_writer = DictWriter(file, headers)
            csv_writer.writeheader()
            for item in self.build():
                csv_writer.writerow(item)


# resultado
relatorio_de_vendas = SalesReport('fixacao1')
relatorio_de_vendas.serialise()
relatorio_de_vendas.serialize_csv()