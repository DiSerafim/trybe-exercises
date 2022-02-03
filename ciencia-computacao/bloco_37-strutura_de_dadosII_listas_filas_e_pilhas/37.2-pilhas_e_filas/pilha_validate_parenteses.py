from pilha_stack import Stack


def is_valid(string):
    # "()" True
    if len(string) % 2 != 0:
        return False

    stack = Stack()

    for char in string:
        if char not in ['(', '[', '{', '}', ')', ']']:
            return False
        if char in ['(', '[', '{']:
            stack.push(char)
        elif char == ')' and not stack.is_empty() and stack.peek() == '(':
            stack.pop()
        elif char == ']' and not stack.is_empty() and stack.peek() == '[':
            stack.pop()
        elif char == '}' and not stack.is_empty() and stack.peek() == '{':
            stack.pop()
        else:
            return False
    return stack.is_empty()


print('Entrada: "()"', is_valid("()"))                      # True
print('Entrada: "{)"', is_valid("{)"))                      # False
print('Entrada: "()[]{}"', is_valid("()[]{}"))              # True
print('Entrada: "(]"', is_valid("(]"))                      # False
print('Entrada: "([)]"', is_valid("([)]"))                  # False
print('Entrada: "{()}"', is_valid("{()}"))                  # True
print('Entrada: "{{}[][[[]]]}"', is_valid("{{}[][[[]]]}"))  # True
print('Entrada: "{{({})}}"', is_valid("{{({})}}"))          # True
print('Entrada: "[[[]]]"', is_valid("[[[]]]"))              # True
print('Entrada: "())"', is_valid("())"))                    # False


''' Resultado '''
# python3 pilha_validate_parenteses.py

# Entrada: "()" True
# Entrada: "{)" False
# Entrada: "()[]{}" True
# Entrada: "(]" False
# Entrada: "([)]" False
# Entrada: "{()}" True
# Entrada: "{{}[][[[]]]}" True
# Entrada: "{{({})}}" True
# Entrada: "[[[]]]" True
# Entrada: "())" False