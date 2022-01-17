# Exercícios de Fixação 1:
# Qual a Ordem de Complexidade (complexidade de tempo) do algoritmo abaixo? E a complexidade de espaço?

def multiply_array(numbers):
    result = 0
    for number in numbers:
        result *= number
        
    return result

print(multiply_array([7, 3, 8, 5, 6, 2, 3]))  # 0

# R=
# O algoritmo faz uma iteração para cada elemento do array de entrada, o numbers , então, tendo n como o tamanho da entrada o algoritmo tem uma Complexidade de Tempo "O(n)" . O que ele faz a cada iteração, no entanto, é alterar o valor de uma variável, a result . Sendo assim, tenha a entrada um ou cem mil elementos,
# o espaço em memória ocupado será o mesmo.
# a Complexidade de Espaço do algoritmo é O(1)