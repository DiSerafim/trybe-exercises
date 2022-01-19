# ver todos os commits:
# git log

# troca para o commit desejado
# git checkout 7f7850bf0627efd5cfa91ad87d921ddde98c8882

''' Busca binária '''
# git bisect start

# avisa que a master está ruim
# git bisect bad

# aponta o commit bom..
# git log
# git checkout 7f7850bf0627efd5cfa91ad87d921ddde98c8882

# .. e avisa que este commit está bom
# git bisect good
# se repetir o comando ele tocar'de commit novamente e vc poderá confirmar como 'good ou bad'

# mostra o arquivo implementado
# author etc...
# git show

def hello_world():
    print("bug inserido")
    print('Hello world!')