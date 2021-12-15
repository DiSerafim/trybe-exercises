def count_words(text):
    return len(text.split(' '))


def count_upper_letters(text):
    result = 0
    for char in text:
        if char.isupper():
            result += 1
    return result


if __name__ == '__main__':
    test_string = 'will joao gleison bux'
    print(count_words(test_string))
    print(count_upper_letters(test_string))
