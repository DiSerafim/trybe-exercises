'''
Pedro é zelador de uma escola primária
e todos os dias ele recebe as crianças no portão.
Amanhã é dia de "Dia das Crianças" e ele quer dar um
saquinho de doces para cada um. Ele não sabe quantas crianças
estudam na escola, mas sabe quem é amigo de quem.
Ajude Pedro a descobrir quantos saquinhos de doce ele precisa preparar.
'''

def num_children(friends):
    quantidade_de_criancas = 0
    criancas_unicas = set()

    for x, y in friends:
        criancas_unicas.add(x)
        criancas_unicas.add(y)
    
    quantidade_de_criancas = len(criancas_unicas)

    return quantidade_de_criancas


if __name__ == "__main__":
    friends = []
    print("Tuplas de amigos:", friends)  # Tuplas de amigos: []
    print(num_children(friends))  # 0

    friends = [("a", "c"), ("c", "d"), ("d", "e"), ("d", "a")]
    # a , d , c , e -> 4
    print("Tuplas de amigos:", friends)  # Tuplas de amigos: [('a', 'c'), ('c', 'd'), ('d', 'e'), ('d', 'a')]
    print(num_children(friends))  # 4

    friends = [
        ("d", "a"),
        ("f", "z"),
        ("g", "i"),
        ("f", "r"),
        ("a", "f"),
        ("r", "l"),
        ("g", "h"),
        ("e", "h"),
        ("h", "d"),
        ("z", "g"),
        ("f", "g"),
    ]

    # d , a , f , z , g , i , r, l, h, e,

    print("Tuplas de amigos:", friends)
    # Tuplas de amigos: [('d', 'a'), ('f', 'z'), ('g', 'i'), ('f', 'r'), ('a', 'f'), ('r', 'l'), ('g', 'h'), ('e', 'h'), ('h', 'd'), ('z', 'g'), ('f', 'g')]
    print(num_children(friends))  # 10