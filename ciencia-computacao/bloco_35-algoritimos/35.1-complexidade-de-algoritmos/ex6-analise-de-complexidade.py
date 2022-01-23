# Dado um array de doces candies e um valor inteiro extra_candies, onde o candies[i] representa o número de doces que a enésima criança possui.]
# Para cada criança, verifique se há uma maneira de distribuir doces extras entre as crianças de forma que ela possa ter o maior número de doces entre elas.
# Observe que várias crianças podem ter o maior número de doces.
# Analise o código abaixo para o melhor, pior caso e caso médio.
# Faça a analise de complexidade de espaço também.


# parece que a solução percorre o array somente uma vez,
def kids_with_candies(candies, extra_candies):
    # porém isto é feito duas vezes, uma no `max` e outra para
    # preencher a resposta
    max_candies = max(candies)

    return [candy + extra_candies >= max_candies for candy in candies]


# saída: [True, True, True, False, True]
print(kids_with_candies([2, 3, 5, 1, 3], 3))

""" R= """
# Para os três casos, utilizando a função `max()` do Python, a complexidade será O(n).
# A lista abaixo da função `max()` também é executada em O(n).
# Ou seja, O(n) + O(n) = O(n).
# A complexidade de espaço também é O(n),
# pois quanto mais crianças temos, maior vai ser o tamanho da lista gerada.
# Faça a analise de complexidade de espaço também.
