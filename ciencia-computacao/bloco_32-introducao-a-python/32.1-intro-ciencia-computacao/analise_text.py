from utils import count_upper_letters, count_words


def analyze(text):
    report = f'Numero de palavras = {count_words(text)}\n'
    report += f'Numero de letras maiúsculas = {count_upper_letters(text)}'

    return report


text_to_analize = (
  "Eu criei uma lista com os caracteres de abertura, e outra com os "
  "caracteres de fechamento. Também criei um dicionário contendo os "
  "caracteres de fechamento como chave, e o valor é o respectivo caractere "
  "de abertura. Ou seja, o dicionário é o mesmo"
)

print(analyze(text_to_analize))
