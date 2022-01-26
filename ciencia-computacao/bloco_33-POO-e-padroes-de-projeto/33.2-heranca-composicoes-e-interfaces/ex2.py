from collections import Counter


class Estatistica:
    @classmethod
    def media(cls, numbers):
        return sum(numbers) / len(numbers)


    @classmethod
    def mediana(cls, numbers):
        numbers.sort()
        index = len(numbers) // 2
        if len(numbers) % 2 == 0:
            return (numbers[index - 1] + numbers[index]) / 2

        return numbers[index]


    @classmethod
    def moda(cls, numbers):
        number, _ = Counter(numbers).most_common()[0]
        return number


print(Estatistica.media([7,2,8,3,9,42]))
print(Estatistica.mediana([7,2,8,3,9,42]))
print(Estatistica.moda([7,2,8,3,9,42]))


''' Resultado '''
# python3 ex2.py

# 11.833333333333334
# 7.5
# 7
