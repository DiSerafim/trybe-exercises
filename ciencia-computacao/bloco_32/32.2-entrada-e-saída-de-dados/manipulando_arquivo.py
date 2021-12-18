# "open" é a responsável por abrir um arquivo
# mode="w" , indica que, estamos abrindo o arquivo para escrita:
characters_file = open("meus-personagens-favoritos.txt", mode="w")

characters_file.write("Tio Patinhas\n")
characters_file.write("Neo\n")
characters_file.write("Homem Aranha\n")
characters_file.write("Hulk\n")

print("Batman\n", file=characters_file)

more_characters = ["Os Simpsons\n", "Jovens Titans\n"]

characters_file.writelines(more_characters)

characters_file.close()
