# finally
# - Implementação de ações de limpeza, independente da ocorrência de ações.
...
# else
# - Ocorre sempre que todo o try for bem sucedido.

try:
    arquivo = open("finally_ou_else.txt", "r")  # somente leitura
    # arquivo = open("finally_ou_else.txt", mode="w")  # cria o arquivo
except OSError:
    # será executado caso haja uma exceção
    print("arquivo inexistente")
else:
    # será executado se tudo der certo no try
    print("arquivo manipulado e fechado com sucesso")
    arquivo.close()
finally:
    # será sempre executado independente de erro
    print("Tentativa de abrir arquivo")

# arquivo inexistente
# Tentativa de abrir arquivo
