"""
Em uma lanchonete no centro de Belém-PA
havia uma fila para comprar pão de queijo.
Uma BARATA apareceu , devido ao pânico geral, a fila foi desfeita!
Para reconstruir a fila, só temos a informação de "quem estava atrás de quem"
Dada uma lista de tuplas que representa a relação de pessoas na fila,
retorne uma lista com as pessoas na ordem correta:

EX: [
    ("Junior", "Diego"),
    ("Serafim", "Junior"),
    ("Diego", "Sousa")
]

Resultado = ["Serafim", "Junior", "Diego", "Sousa"]

Estratégia:
- descobrir quem vem primeiro
- 
"""


def get_order(orders):
    orders_map = {pair[0]: pair[1] for pair in orders}  # O(n)
    orders_map_inv = {pair[1]: pair[0] for pair in orders}  # O(n)

    curr_person = ""
    for pair in orders:  # total do for = O(n)
        # REPETE n vezes
        if pair[0] not in orders_map_inv:  # O(1)
            curr_person = pair[0]  # O(1)
    print(curr_person)

    result = [curr_person]

    while curr_person in orders_map:  # total do while = O(n)
        # REPETE n vezes
        result.append(orders_map[curr_person])  # O(1)
        curr_person = orders_map[curr_person]  # O(1)

    print(result)
    return result


# n + n + n + n = 4 * n = n

o = {
    "fernanda": "rafa",
    "fran": "daniel",
    "mirian": "gabriel",
    "matheus": "yasmin",
    "giovanni": "fernanda",
    "rafa": "fran",
    "daniel": "mirian",
    "gabriel": "matheus",
}

if __name__ == "__main__":

    orders = [
        ("fernanda", "rafa"),
        ("fran", "daniel"),
        ("mirian", "gabriel"),
        ("matheus", "yasmin"),
        ("giovanni", "fernanda"),
        ("rafa", "fran"),
        ("daniel", "mirian"),
        ("gabriel", "matheus"),
    ]
    assert get_order(orders) == [
        "giovanni",
        "fernanda",
        "rafa",
        "fran",
        "daniel",
        "mirian",
        "gabriel",
        "matheus",
        "yasmin",
    ]
