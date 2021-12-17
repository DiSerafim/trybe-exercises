# string
meu_numero = input("Digite um numero: ")

print(type(meu_numero))  # <class 'str'>

...
# inteiro
meu_numeros = int(input("Digite um numero: "))

print(meu_numeros + 10)  # 17

...
# loop
loop_numero = 0

while loop_numero < 42:
    loop_numero += int(input("Digite qualquer numero para uma soma: "))

print("A soma de seus numeros superou 42!")
