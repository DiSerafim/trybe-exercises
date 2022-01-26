# valores que combinam
from numpy import number


def good_pairs(numbers):
    answer = 0
    i = 0
    size = len(numbers)
    for i in range(size):
        for j in range(i + 1, size):
            if numbers[i] == numbers[j]:
                answer += 1
    return answer


# Exemplo 1:
produtos = [1, 3, 1, 1, 2, 3]
print(f"combinações", good_pairs(produtos))  # 4
# Os índices (0, 2), (0, 3), (1, 5), (2, 3) formam combinações.

# Exemplo 2:
produtos = [1, 1, 2, 3]
print(f"combinações", good_pairs(produtos))  # 1
