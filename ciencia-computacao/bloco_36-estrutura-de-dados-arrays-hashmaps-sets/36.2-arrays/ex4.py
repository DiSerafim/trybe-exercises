# entrada e saida da biblioteca
def students_in_instant(arrivals, departures, time_instant):
    answer = 0
    size = len(arrivals)
    for index in range(size):
        if arrivals[index] < time_instant < departures[index]:
            answer += 1
    return answer


entradas = [1, 2, 3]
saídas = [3, 2, 7]
instante_buscado = 4
print(f'resultado:', students_in_instant(entradas, saídas, instante_buscado))  # 1
print(f"O estudante {entradas[0]}, entrou no instante {entradas[0]}, e saiu no {entradas[2]}")
print(f"já o segundo entrou e saiu no {entradas[1]}, e o último foi único a estar presente no instante {instante_buscado}.")


# 2a forma mais Pythonica
def student_in_instant1(arrivals, departures, time_istant):
    return sum(
        arrival < time_istant < departure
        for arrival, departure in zip(arrivals, departures)
    )


print(f'1- resultado:', student_in_instant1(entradas, saídas, instante_buscado))  # 1
print(f"1- O estudante {entradas[0]}, entrou no instante {entradas[0]}, e saiu no {entradas[2]}")
print(f"1- já o segundo entrou e saiu no {entradas[1]}, e o último foi único a estar presente no instante {instante_buscado}.")
