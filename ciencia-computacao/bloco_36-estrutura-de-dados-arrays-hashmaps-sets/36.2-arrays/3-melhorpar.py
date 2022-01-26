def max_score_sightseeing_spot(array):
    answer = 0
    previous = 0

    for j in range(1, len(array)):
        i = j - 1
        previous = max(previous, array[i] + i)
        answer = max(answer, previous + array[j] - j)

    return answer


def teste_for():
    for x in range(1, 5):
        print(x)


if __name__ == "__main__":
    spots = [8, 1, 5, 2, 6]  # R: ?
    print(max_score_sightseeing_spot(spots))
    # answer =  A[i] + i + A[j] - j
    # answer =  ?    + ? +  ?   - ?

    spots = [4, 1, 5, 2, 6]  # R: 9
    # answer =  A[i] + i + A[j] - j
    # answer =  ?    + ? +  ?   - ?
    print(max_score_sightseeing_spot(spots))


teste_for()


""" Resultado """
# python3 3-melhorpar.py

# 11
# 9
# 1
# 2
# 3
# 4
