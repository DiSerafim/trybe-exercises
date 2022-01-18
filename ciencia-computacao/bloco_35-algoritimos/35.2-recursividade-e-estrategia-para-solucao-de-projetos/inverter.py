''' Dada uma lista de elementos, retorne uma versão invertida da lista.

Inverter [0, 1, 2, ... , N] = [N, ... , 2, 1, 0]

>> Raciocínio:
Inverte [1] = [1]
Inverte [1, 9] = [1] + Inverte [1]
Inverte [1, 9, 3] = [1] + Inverte [1, 9]
Inverte [1, 9, 3, 4] = [1] + Inverte [1, 9, 3]
Inverte [1, 9, 3, 4, 5] = [1] + Inverte [1, 9, 3, 4]

Inverter [0, 1, 2, ... , N] = [N, ... , 2, 1, 0]

Inverte LISTA = [LISTA[-1]] + Inverte LISTA[:-1]
 '''

def inverte(lista):
    if not lista or len(lista) == 1:
        return lista
    
    return [lista[-1]] + inverte(lista[:-1])


if __name__ == "__main__":
    assert inverte([0, 1, 2, 3, 4, 5]) == [5, 4, 3, 2, 1, 0]
    assert inverte([7, 1, 8, 4, 8]) == [8, 4, 8, 1, 7]
    assert inverte([970]) == [970]
    assert inverte([]) == []
