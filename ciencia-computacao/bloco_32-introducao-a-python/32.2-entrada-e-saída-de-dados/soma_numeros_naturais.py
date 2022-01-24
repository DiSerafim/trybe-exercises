# Exercício 2: Escreva um programa que receba vários números naturais e calcule
# a soma desses valores. Caso algum valor da entrada seja inválido, por exemplo
# uma letra, uma mensagem deve ser exibida, na saída de erros, no seguinte
# formato: "Erro ao somar valores, {valor} é um valor inválido". Ao final, você
# deve imprimir a soma dos valores válidos.
# 🦜 Receba os valores em um mesmo input , solicitando à pessoa usuária que
# separe-os com um espaço. Receba os valores no formato str e utilize o método
# split para pegar cada valor separado. O método isdigit , embutido no tipo str
# pode ser utilizado para verificar se a string corresponde a um número natural

numeros = input("Insira numeros, separados por espaço: ")
arr_num = numeros.split(" ")
soma = 0
for numero in arr_num:
    if not numero.isdigit():
        print(f"Erro ao somar valores, {numero} não é um digito.")
    else:
        soma += int(numero)

print(f"A soma dos valores válidos é: {soma}")

# Insira numeros, separados por espaço: 1 2 3 4 5 6 a 8 9 7
# Erro ao somar valores, a não é um digito.
# A soma dos valores válidos é: 45
