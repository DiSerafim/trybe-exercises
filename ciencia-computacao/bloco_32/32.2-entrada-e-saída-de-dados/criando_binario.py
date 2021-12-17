# arquivos binários. Eles são arquivos que contêm uma série de bytes e a sua
# leitura pode variar de acordo com o arquivo. Nesse caso, devemos acrescentar
# um b ao parâmetro mode

# Escrita
file = open("binario.dat", mode="wb")

# o prefixo "b" em uma string indica que seu valor está codificado em bytes
file.write(b"C\xc3\xa1ssio 30\n")
file.write(b"Serafim 35")
file.close()

# Leitura
file = open("binario.dat", mode="rb")
content = file.read()
print(content)  # b'C\xc3\xa1ssio 30\nSerafim 35'
file.close()  # fecha o arquivo
