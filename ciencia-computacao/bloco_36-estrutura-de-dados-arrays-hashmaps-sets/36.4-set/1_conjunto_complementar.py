def preciso_comprar(figurinhas):
    figurinhas_unicas = set(figurinhas)
    todas_figurinhas = set(range(1, 21))

    # return todas_figurinhas - figurinhas_unicas
    return todas_figurinhas.difference(figurinhas_unicas)


if __name__ == "__main__":
    minhas_figurinhas = [4, 1, 1, 13, 6, 3, 1, 7, 14, 20, 13, 9]
    print("\nminhas_figurinhas", minhas_figurinhas)
    print("preciso_comprar =", preciso_comprar(minhas_figurinhas))
    # preciso_comprar = {2, 5, 8, 10, 11, 12, 15, 16, 17, 18, 19}

    minhas_figurinhas = [1, 2, 3, 3, 3, 3]
    print("\nminhas_figurinhas", minhas_figurinhas)
    print("preciso_comprar =", preciso_comprar(minhas_figurinhas))
    # preciso_comprar = {4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20}

    minhas_figurinhas = [1002, 1004, 1009]
    print("\nminhas_figurinhas", minhas_figurinhas)
    print("preciso_comprar =", preciso_comprar(minhas_figurinhas))
    # preciso_comprar = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20}

    minhas_figurinhas = []
    print("\nminhas_figurinhas", minhas_figurinhas)
    print("preciso_comprar =", preciso_comprar(minhas_figurinhas))
    # preciso_comprar = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20}
