'''
Encontre o n° mais frequente.
se houver empate, retorna qualquer um.

nums = [3, 2, 5, 4, 1, 2, 3, 1, 3, 4, 1]
resposta: 3
'''


def count(nums):
    count = {}
    most_frequent = nums[0]

    for num in nums:
        if num not in count:
            count[num] = 1
        else:
            count[num] += 1

        if count[num] > count[most_frequent]:
            most_frequent = num

    return most_frequent


nums = [3, 2, 5, 4, 1, 2, 3, 1, 3, 4, 1]

print(count(nums))  # 3