from abc import ABC, abstractmethod
import json


class SalesReport(ABC):
    def __init__(self, export_file):
        self.export_file = export_file


    def build(self):
        return [{
                'Coluna 1': 'Dado 1',
                'Coluna 2': 'Dado 2',
                'Coluna 3': 'Dado 3'
                },
                {
                'Coluna 1': 'Dado A',
                'Coluna 2': 'Dado B',
                'Coluna 3': 'Dado C'
                }]


    @abstractmethod
    def serialize(self):
        raise NotImplementedError


    @abstractmethod
    def get_length(self):
        raise NotImplementedError


class SalesReportJSON(SalesReport):
    def serialize(self):
        with open(self.export_file + '.json', 'w') as file:
            json.dump(self.build(), file)


    def get_length(self):
        return 4  # rola um dado aleatório
        

# resultado

# isso não funcionará
# relatorio_de_vendas = SalesReport()

# isso também não, a não ser que SalesReportJSON defina a função `get_legth`
relatorio_de_compras = SalesReportJSON('fixacao3')
print(relatorio_de_compras.get_length())