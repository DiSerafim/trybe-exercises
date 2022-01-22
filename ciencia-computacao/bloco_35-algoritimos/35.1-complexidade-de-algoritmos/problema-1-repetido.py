# - E lemento aparece mais de 25% em um array "ordenado".
# Dado uma coleção de 'números inteiros' 'ordenados' em ordem crescente, 
# tem exatamente um inteiro que corre mais de 25% das vezes.
# analize a ordem de complexidade de tempo e espaço

""" lógica """
# ordenado => 1, 2, 3, ... 
# 25%      => 100 / 4 == "25"
# números inteiros

""" Solução """


def more_than_twenty_five_percent(array):
    twenty_five_percent = len(array) // 4
    sevent_five_percent = len(array) - twenty_five_percent

    for index, element in enumerate(array[:sevent_five_percent]):
        if element == array[index + twenty_five_percent]:
            return element
    return - 1


if __name__ == "__main__":
    test1 = [1, 2, 2, 3, 4, 6, 6, 6, 6, 7, 10]
    print(f"O elemento encontrado para o teste1: {test1}")
    print(f"foi {more_than_twenty_five_percent(test1)}")


""" https://pythontutor.com/visualize.html#mode=display """
# Frames
# Global frame
# more_than_twenty_five_percent	
 
# test1	
 
# more_than_twenty_five_percent
# array	
# twenty_five_percent	2
# sevent_five_percent	9
# index	5
# element	6
# Return
# value	6

# Objects
# function
# more_than_twenty_five_percent(array)
# list
# 0	1	2	3	4	5	6	7	8	9	10
# 1	2	2	3	4	6	6	6	6	7	10
