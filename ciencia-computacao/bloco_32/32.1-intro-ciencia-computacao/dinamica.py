# ...
numero_um = '1'
meu_dict = {numero_um: ['um', 'one', 'uno']}

if numero_um in meu_dict:
    print(meu_dict['1'])

# ['um', 'one', 'uno']

...
lista_dois = ['dois', 'dos', 'two', 2]
tupla_dois = tuple(lista_dois)

for item in tupla_dois:
    # print(len(str(item)))  # cria uma nova string [2 -> '2']
    print(len(item))

# 4
# 3
# 3
# TypeError: object of type 'int' has no len()

...
lista_tres = ['três', 'three', 'tres', '3']
lista_tres.sort()
for item in lista_tres:
    print(int(item))

# 3
# ValueError: invalid literal for int() with base 10: 'three'

...
contador = 10
while contador >= 0:
    print(10 / contador)
    contador -= 1

# 1.0
# 1.1111111111111112
# 1.25
# 1.4285714285714286
# 1.6666666666666667
# 2.0
# 2.5
# 3.3333333333333335
# 5.0
# 10.0
# ZeroDivisionError: division by zero
