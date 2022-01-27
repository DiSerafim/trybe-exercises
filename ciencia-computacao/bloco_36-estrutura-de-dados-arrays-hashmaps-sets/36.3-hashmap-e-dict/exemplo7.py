double = {i: i * 2 for i in range(3, 21)}

for key in double.keys():
    if key % 2 != 0:
        double[key] = key * 3

print(double)


''' Resultado '''
# python3 exemplo7.py 

# {
#     3: 9,
#     4: 8,
#     5: 15,
#     6: 12,
#     7: 21,
#     8: 16,
#     9: 27,
#     10: 20,
#     11: 33,
#     12: 24,
#     13: 39,
#     14: 28,
#     15: 45,
#     16: 32,
#     17: 51,
#     18: 36,
#     19: 57,
#     20: 40
# }
