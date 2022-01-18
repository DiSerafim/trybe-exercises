def somatorio(n):
    if n == 0:
        return 0

    print(n)  # 5 4 3 2 1
    return n + somatorio(n - 1)

print(somatorio(5))  # 15