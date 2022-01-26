class TV:
    def __init(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False


    def aumentar_volume(self):
        if self.__volume <= 99:
            self.__volume += 1

    
    def diminuir_volume(self):
        if self.__volume >= 0:
            self.__volume -= 1


    def modificar_canal(self, canal):
        if canal <= 1 or canal >= 99:
            raise ValueError('Canal indisponível')
        self.__canal = canal


    def ligar_desligar(self):
        self.__ligada = not self.__ligada



# print(TV.aumentar_volume(7))
# print(TV.diminuir_volume(7))
# print(TV.modificar_canal(7))