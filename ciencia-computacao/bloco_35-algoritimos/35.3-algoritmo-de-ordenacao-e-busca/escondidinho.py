class Pessoa:
    def __init__(self, nome):
        self.nome = nome


    def __str__(self):
        return f"\n(Pessoa chamada: {self.nome})"


    def __repr__(self):
        return str(self)


    def __bool__(self):
        if self.nome:
            return True


    def __lt__(self, outra_pessoa):
        if self.nome < outra_pessoa.nome:
            return True
        
        False


if __name__ == "__main__":
    let = Pessoa("Let Sother")
    ser = Pessoa("Serafim")
    di = Pessoa("Diego")
    arl = Pessoa("Arlen Freitas")

    galera = [let, ser, di, arl]

    if let:
        galera.sort()
        print(galera)

# terminal python3

# >>> from escondidinho import Pessoa
# >>> ser = Pessoa("Serafim")
# >>> ser
# Pessoa chamada: Serafim


