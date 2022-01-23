# Dado um array de tamanho n ordenado em ordem crescente, encontre um número passado na entrada . É como procurar por um nome numa lista telefônica!
""" Suponha que você quer procurar pelo nome Tintim . """
# - Voce irá escolher uma página do livro para abrir;
# - Percebe que caiu no bloco de letra M;
# - Como M < T na ordem alfabética, então voce deve avançar alguns blocos;
# - Escolhe uma página que está adiante;
# - Percebe que caiu no bloco de letra V ;
# - Como V > T , então voce deve voltar alguns blocos;
# - Repita esse processo até encontrar o nome desejado.

# A estrutura deve estar ordenada para que a busca binária funcione
from matplotlib.pyplot import step


data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

def binary_search_interative(array, element):
    mid = 0
    start = 0
    end = len(array)
    step = 0

    while (start <= end):
        print("Subarray in step {}: {}".format(step, str(array[start: end + 1])))
        step += 1
        mid = (start + end) // 2

        if element == array[mid]:
            return mid
        if element < array[mid]:
            end = mid - 1
        else:
            start = mid + 1
    
    return - 1

print(binary_search_interative(data, 5))
"""
Subarray in step 0: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Subarray in step 1: [1, 2, 3, 4, 5]
Subarray in step 2: [4, 5]
Subarray in step 3: [5]
4
"""
# a cada iteração, o algoritmo de busca binária corta o problema pela metade:
# Quando cortamos a entrada pela metade, a cada iteração, temos um padrão que segue a função matemática de "logaritmo na base dois"!
# Assim, nosso algoritmo é O(log n)

# Um logaritmo em base 2 representa o número de vezes que um valor deve ser dividido pela metade para obter 1.
