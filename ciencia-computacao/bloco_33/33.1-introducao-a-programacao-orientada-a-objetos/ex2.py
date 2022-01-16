""" modelar algumas partes de um software de geometria.

Nome da abstração
Retangulo

atributos/estados
- base (tamanho)
- altura (tamanho)

comportamentos
- calcular area (lado * altura)
- calcular perímetro (2 * (base + altura)) """


class Retangulo():
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def calcula_area(self):
        return self.base * self.altura

    def calcular_perimetro(self):
        return self.base * 2 + self.altura * 2


retangulo_1 = Retangulo(5)
print(retangulo_1.calcula_area())
print(retangulo_1.calcular_perimetro())
