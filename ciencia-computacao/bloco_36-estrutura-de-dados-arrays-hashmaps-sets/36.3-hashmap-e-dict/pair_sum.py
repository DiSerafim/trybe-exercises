# 0(n log n)
def old_check_sum(numbers, target):
    # True: se existe um par em numbers cuja soma = target
    # False: caso contrário
    left_pointer = 0
    right_pointer = len(numbers) - 1

    while left_pointer < right_pointer:
        test_sum = numbers[left_pointer] + numbers[right_pointer]
        if test_sum == target:
            return True
        elif test_sum < target:
            left_pointer += 1
        else:
            right_pointer -= 1
    return False


# 0(n)
def check_sum(numbers, target):
    seen_before = dict()  # 0(1)

    for num in numbers:  # 0(N)
        # repete N vezes
        complement = target - num  # 0(1)
        if complement in seen_before:  # 0(1)
            return True
        seen_before[num] = True


if __name__ == "__main__":
    assert check_sum([-1, 1, 1, 2, 3, 4], 7)
    assert check_sum([1, 2, 5, 8, 13, 21], 3)
    assert check_sum([1, 2, 5, 8, 13, 21], 22)
    assert not check_sum([1, 1, 2, 4, 4], 7)
    assert not check_sum([1, 2, 3, 4], 9)
    assert not check_sum([1, 20, 300, 4000], 0)


print(check_sum([-1, 1, 1, 2, 3, 4], 7))   # True
print(check_sum([1, 2, 5, 8, 13, 21], 3))  # True
print(check_sum([1, 2, 5, 8, 13, 21], 22)) # True
print(check_sum([1, 1, 2, 4, 4], 7))       # None
print(check_sum([1, 2, 3, 4], 9))          # None
print(check_sum([1, 20, 300, 4000], 0))    # None