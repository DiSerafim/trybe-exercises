# Exercícios de Fixação 2: Para desembaraçar a sopa de letrinhas que a seção anterior criou.. """./complexidade-quadratica.py""",
# meça o tempo de execução do algoritmo acima e, mudando o tamanho das entradas, veja como, se você aumenta a entrada em n vezes, o tempo de execução aumenta em n² vezes!

def multiply_array(array1, array2):
    result = []
    number_of_iterations = 0
    
    for number1 in array1:
        print(f'Arrai1: {number1}')
        for number2 in array2:
            print(f'Array2: {number2}')
            result.append(number1 * number2)
            number_of_iterations += 1
            
    print(f'{number_of_iterations} iterações!')
    return result


# meu_array = [1, 2, 3, 4, 5]
meu_array = list(range(1, 1000))
multiply_array(meu_array, meu_array)

""" 998001 iterações! """