def contains_duplicate(nums):
    nums_sorted = sorted(nums)

    for index in range(len(nums_sorted) - 1):
        if nums_sorted[index] == nums_sorted[index + 1]:
            return True
    return False


if __name__ == "__main__":
    test1 = [1, 2, 3, 1]  # TRUE
    test2 = []  # FALSE
    test3 = [1, 2, 3, 4]  # FALSE
    test4 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]  # TRUE
    print(test1, contains_duplicate(test1))
    print(test2, contains_duplicate(test2))
    print(test3, contains_duplicate(test3))
    print(test4, contains_duplicate(test4))


""" Resultado """
# python3 1-duplicado.py

# [1, 2, 3, 1] True
# [] False
# [1, 2, 3, 4] False
# [1, 1, 1, 3, 3, 4, 3, 2, 4, 2] True