# Dado uma lista "ordenada" de letras do alfabeto, contendo somente letras minúsculas,
# e dado uma letra como alvo, procure o "menor elemento na lista que é maior que o alvo".

""" lógica """
# ordenado => ['a', 'b', 'c', 'f']
# letras do alfabeto
# alvo = 'c'
# saida = 'f'

""" Solução """


def proxima_letra(letra, alvo):
    inicio_array = 0
    array_completo = len(letra)
    meio_array = 0

    while inicio_array < array_completo:
        meio_array = (array_completo + inicio_array) // 2

        if letra[meio_array] <= alvo:
            inicio_array = meio_array + 1
        else:
            array_completo = meio_array

    return letra[inicio_array% len(letra)]


if __name__ == "__main__":
    letras1 = ["c", "f", "j"]
    alvo1 = "c"
    print(f"A saída foi: {proxima_letra(letras1, alvo1)}")
