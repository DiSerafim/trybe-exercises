def list_friends(friends):
    persons_to_friends = {}

    for pessoa_1, pessoa_2 in friends:
        if pessoa_1 not in persons_to_friends:
            persons_to_friends[pessoa_1] = set()

        if pessoa_2 not in persons_to_friends:
            persons_to_friends[pessoa_2] = set()

        persons_to_friends[pessoa_1].add(pessoa_2)
        persons_to_friends[pessoa_2].add(pessoa_1)

    return persons_to_friends


if __name__ == "__main__":
    friends = []
    print(list_friends(friends))
    # saída: {}

    friends = [("a", "c")]
    print(list_friends(friends))
    # saída: {'a': {'c'}, 'c': {'a'}}

    friends = [("a", "c"), ("c", "d"), ("d", "e"), ("d", "a")]
    print(list_friends(friends))
    # {'a': {'d', 'c'}, 'c': {'a', 'd'}, 'd': {'a', 'e', 'c'}, 'e': {'d'}}