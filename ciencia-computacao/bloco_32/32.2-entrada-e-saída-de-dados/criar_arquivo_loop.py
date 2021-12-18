# Um arquivo é também um iterável, ou seja, pode ser percorrido em um laço de
# repetição. A cada iteração, uma nova linha é retornada.

# escrita
file = open("arquivo_com_loop.txt", mode="w")
lines = ["Olá\n", "mundo\n", "Serafim\n", "do\n", "Python\n"]
file.writelines(lines)
file.close()

# leitura
file = open("arquivo_com_loop.txt", mode="r")
for line in file:
    print(line)
file.close()

# 💀 💀 💀

# Olá

# mundo

# Serafim

# do

# Python
