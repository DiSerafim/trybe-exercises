class AnimalEstimacao():
    def __init__(self, nome, especie, dono):
        self.nome = nome
        self.especie = especie
        self.dono = dono

    def correr(self):
        print('{0} está correndo'.format(self.nome))

    def brincar(self):
        print('{0} está brincando'.format(self.nome))

    def comer(self):
        print('{0} está comendo'.format(self.nome))


animal = AnimalEstimacao('frederico', 'gato', 'Junior')
print(animal.correr())
