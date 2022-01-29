""" Desafio """
# Escreva uma função que decida quais palavras podem ser formadas com os caracteres da string (cada caractere só pode ser utilizado uma vez).
# Retorne à soma do comprimento das palavras escolhidas.
# Exemplo 1:
# words = ["cat", "bt", "hat", "tree"], chars = "atach"
# # saída: 6
# """Explicação: As palavras que podem ser formadas com os caracteres da string
#                são "cat" (tamanho 3) e "hat" (tamanho 3)."""
# Exemplo 2:
# words = ["hello", "world", "students"], chars = "welldonehoneyr"
# # saída: 10
# """Explicação: As palavras que podem ser formadas com os caracteres da string
#                são "hello" (tamanho 5) e "world" (tamanho 5)."""

""" Solução """
# Para cada palavra da lista, precisamos saber se os caracteres da string são suficientes.
# Para isso, precisamos saber quais e quantas letras a string tem.
# Podemos fazer isso criando uma hash que mapeia a letra para a quantidade.
# Vamos chamar essa hash de "alfabeto".
# Depois, precisamo iterar sobre a lista de palavras decidindo se todas as letras da palavra estão no alfabeto, bem como se a quantidade daquela letra é no máximo a quantidade daquela letra disponível no alfabeto.
# Um dos jeitos de resolver isso seria construir uma hash para a palavra que guarda as quantidades de letras.
# Depois, seria verificar se cada letra da palavra aparece no alfabeto;
# se sim, verificar se a quantidade atende ao requisito.
# Mas não precisamos terminar de montar essa segunda hash pra decidir se a palavra infringiu alguma regra.


def count_words(words, chars):
    answer = 0
    alphabet = {}
    for char in chars:
        if char not in alphabet:
            alphabet[char] = 1
        else:
            alphabet[char] += 1
    print(f"Montamos o alfabeto: {alphabet}")
    
    for word in words:
        print(f"Analisando a palavra '{word}'")
        str_count = {}
        for char in word:
            if char not in alphabet:
                print(f"'{char}' não está no alfabeto. Desconsiderar palavra")
                break

            if char not in str_count:
                str_count[char] = 1
            else:
                str_count[char] +=1

                if str_count[char] > alphabet[char]:
                    print(f"'{char}' ocorre com mais frequência do que no alfabeto. Desconsiderar")
                    break
        else:
            print(f"Considerar *{word}")
            answer += len(word)

    return answer

words = ["cat", "bt", "hat", "tree"]
chars = "atach"
print(f"Resposta final: {count_words(words, chars)}")

print()

words = ["hello", "world", "students"]
chars = "welldonehoneyr"
print(f"Resposta final: {count_words(words, chars)}")


""" Resultado """
# python3 ex1.py

# Montamos o alfabeto: {'a': 2, 't': 1, 'c': 1, 'h': 1}
# Analisando a palavra 'cat'
# Considerar *cat
# Analisando a palavra 'bt'
# 'b' não está no alfabeto. Desconsiderar palavra
# Analisando a palavra 'hat'
# Considerar *hat
# Analisando a palavra 'tree'
# 'r' não está no alfabeto. Desconsiderar palavra
# Resposta final: 6

# Montamos o alfabeto: {'w': 1, 'e': 3, 'l': 2, 'd': 1, 'o': 2, 'n': 2, 'h': 1, 'y': 1, 'r': 1}
# Analisando a palavra 'hello'
# Considerar *hello
# Analisando a palavra 'world'
# Considerar *world
# Analisando a palavra 'students'
# 's' não está no alfabeto. Desconsiderar palavra
# Resposta final: 10
