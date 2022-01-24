# Crie uma função que receba os três lados de um triângulo e informe qual o
# tipo de triângulo formado ou "não é triangulo", caso não seja possível
# formar um triângulo.

#   Três lados formam um triângulo quando a soma de quaisquer dois lados for
# maior que o terceiro;
#   Triângulo Equilátero: três lados iguais;
#   Triângulo Isósceles: quaisquer dois lados iguais;
#   Triângulo Escaleno: três lados diferentes.

def triangulo_tipo(lado1, lado2, lado3):
    triangulo = (
        lado1 + lado2 > lado3 and
        lado2 + lado3 > lado1 and
        lado1 + lado3 > lado2
    )
    if not triangulo:
        return "não é triangulo"
    elif lado1 == lado2 == lado3:
        return "Triângulo Equilátero"
    elif lado1 == lado2 or lado2 == lado3 or lado1 == lado3:
        return "Triângulo Isósceles"
    else:
        return "Triângulo Escaleno"


print(triangulo_tipo(54, 23, 54))  # Triângulo Isósceles
