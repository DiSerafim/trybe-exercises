import json

with open("superheroes.json") as superheroes_file:
    print(superheroes_file.read()[0])  # [

with open("superheroes.json") as superheroes_file:
    print(json.load(superheroes_file)[0])

with open("superheroes.json") as superheroes_file:
    print(json.load(superheroes_file)[0]["superhero"])  # Batman

with open("superheroes.json") as superheroes_file:
    superheroes_list = json.load(superheroes_file)
    for superhero in superheroes_list:
        print(superhero["alter_ego"])
# Bruce Wayner
# kal-El
# Jay Garrick
# Alan Scott
# Oliver Queen
