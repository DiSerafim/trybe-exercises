# Exercícios de Fixação 3: Faça um algoritmo qualquer com três loops aninhados um dentro do outro. Entenda como ele terá uma complexidade de O(n³) !

def multiply_array(array1, array2, array3):
    result = []
    number_of_iterations = 0
    
    for number1 in array1:
        print(f'Arrai1: {number1}')
        for number2 in array2:
            print(f'Array2: {number2}')
            for number3 in array3:
                print(f'Array3: {number3}')
            result.append(number1 * number2 * number3)
            number_of_iterations += 1
            
    print(f'{number_of_iterations} iterações!')
    return result


meu_array = list(range(1, 1000))
multiply_array(meu_array, meu_array, meu_array)

""" 998001 iterações! """
