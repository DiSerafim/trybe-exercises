# A ideia da função é fazer uma contagem regressiva de 5 até 0.


def countdown(n):  # nome da função e parâmetro
    if n == 0:  # condição de parada
        print('FIM!')
    else:
        print(n)
        countdown(n - 1)  # chamada de si mesma com um novo valor


countdown(5)

# primeira chamada que fazemos à função passamos o parâmetro inicial, no caso o número 5.
# Nas outras vezes que a função for chamada é que vamos suprir a segunda lei da recursão, passando n - 1, sendo n o número passado por parâmetro.
