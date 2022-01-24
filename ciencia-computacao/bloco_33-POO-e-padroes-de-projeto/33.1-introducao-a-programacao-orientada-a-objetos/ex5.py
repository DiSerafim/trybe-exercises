""" modelar uma televisão
encapsular comportamentos como o estado (ligado/desligado),
ou a taxa de variação do volume, que muda de TV para TV etc.

Nome da abstração
Televisão

atributos/estados
- volume
- canal
- taxa de aumento do volume
- tamanho (não pode ser modificado)
- estado (ligada/desligada)

comportamentos
- aumentar volume
- diminuir volume
- modificar canal (novo canal deve ser fornecido)
- ligar/desligar TV (normalmente é um botão só que modifica o estado atual)
"""


class Televisao():
    def __init__(self, tamanho_em_polegadas):
        self.volume = 5
        self.canal = 21
        self.taxa_de_aumento_de_volume = 2
        self.tamanho = tamanho_em_polegadas
        self.ligada = False

    def aumentar_volume(self):
        self.volume += self.taxa_de_aumento_de_volume

    def diminuir_volume(self):
        self.volume -= self.taxa_de_aumento_de_volume

    def modificar_canal(self, novo_canal):
        self.canal = novo_canal

    def ligar_ou_desligar(self):
        self.ligada = not self.ligada


tv_da_sala = Televisao(42)
tv_da_sala.aumentar_volume()
print('Aumentar Volume', tv_da_sala.volume)

tv_da_sala.diminuir_volume()
tv_da_sala.diminuir_volume()
print('Diminuir Volume', tv_da_sala.volume)

tv_da_sala.modificar_canal(42)
print('Mudar Canal', tv_da_sala.canal)

tv_da_sala.ligar_ou_desligar()
print('Ligar/Desligar', tv_da_sala.ligada)
