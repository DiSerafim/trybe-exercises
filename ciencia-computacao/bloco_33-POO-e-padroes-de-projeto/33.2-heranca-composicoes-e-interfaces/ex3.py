# Implemente o diagrama de classes abaixo.
# Diagrama de classes das figuras geométricas

from abc import ABC, abstractmethod
from math import pi as PI


class FigurasGeometricas(ABC):
    @abstractmethod
    def area(self):
        raise NotImplementedError

    
    @abstractmethod
    def perimetro(self):
        raise NotADirectoryError


class Quadrado(FigurasGeometricas):
    def __init__(self, lado):
        self.lado = lado


    def area(self):
        return self.lado * self.lado


    def perimetro(self):
        return 4 * self.lado


class Retangulo(FigurasGeometricas):
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura


    def area(self):
        return self.base * self.altura


    def perimetro(self):
        return 2 * (self.base + self.altura)


class Circulo(FigurasGeometricas):
    def __init__(self, raio):
        self.raio = raio


    def area(self):
        return PI * self.raio * self.raio


    def perimetro(self):
        return 2 * PI * self.raio
