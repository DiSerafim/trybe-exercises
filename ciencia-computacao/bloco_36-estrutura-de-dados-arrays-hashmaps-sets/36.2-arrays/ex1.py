# maior repetição seguida
def verify_max_time_ok(colleted_values):
    max_time = 0
    current_time = 0
    for value in colleted_values:
        if value == 1:
            current_time += 1
        else:
            current_time = 0
        if current_time >= max_time:
            max_time = current_time
    return max_time


# 1 - OK
# 0 - Instabilidades

valores_coletados = [0, 1, 1, 1, 0, 0, 1, 1]
print(f"tempo máximo sem instabilidades:", verify_max_time_ok(valores_coletados))  # 3

valores_coletados = [1, 1, 1, 1, 0, 0, 1, 1]
print(f"tempo máximo sem instabilidades:", verify_max_time_ok(valores_coletados))  # 4
