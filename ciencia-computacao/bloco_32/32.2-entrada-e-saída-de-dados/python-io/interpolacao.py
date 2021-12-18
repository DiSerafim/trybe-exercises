x = 5
y = 3
print(f"{x} / {y} = {x / y:.2f}")  # 5 / 2 = 1.67
# {x} é 5
# {y} é 3
# {x / y:.2f} após os dois pontos são formatadores, como nesse
# exemplo, duas casas decimais (.2f).

print(f"{x:.^3}")  # .5.
# . é o caractere utilizado para preencher
# ^ indica que o valor será centralizado
# 3 são o número de caracteres exibidos
