# ############################## Herança, Composição e Interfaces
# --> CONTEÚDO do dia - 33.2 - <--- / INICIO ----------------------------- //
# ############################## Herança, Composição e Interfaces

# 1 - Como estender o meu código?
# 2 - Herança - Especialização de comportamentos
# 3 - Classes Abstratas
# 4 - Interfaces
# 5 - Dicionário de conceitos
# 6 - E quando nem todas as herdeiras vão ter o mesmo comportamento?
# 7 - Composição - Classes feitas de outras classes
# 8 - Métodos de Classe, Métodos Estáticos e Métodos de Instância
# 9 - Composição versus Herança
# 10- Dicionário de conceitos, parte 2
# 11- Os quatro pilares da Programação Orientada a Objetos
# 12- Muita calma nessa hora!

""" ---> OBJETIVO <---
- Descrever, como pilar da Programação Orientada a Objetos, a Herança - a capacidade de herdar, para especializar, os atributos e métodos de uma classe
- Definir Classe Abstrata
- Definir Métodos Abstratos, ou Funções Abstratas
- Definir, em Programação Orientada a Objetos, a Interface de uma classe
- Definir como boa prática utilizar Herança apenas para especializar classes
- Definir como boa prática utilizar Composição para compartilhar um mesmo código entre diferentes classes
- Implementar Métodos de Classe para Classes em Python
"""


# ---> Conteúdos <---

"""  --------------------------------------------------------------------------
| -> Como estender o meu código? <-                                           |
--------------------------------------------------------------------------- """
# Suponha que você precisa criar um software que gera Relatórios de Vendas . Nosso programa tem que conter toda uma lógica para ler dados e criar o relatório e, ao final, vamos gerar um arquivo imprimível com tais dados. Um JSON, por exemplo. Como estamos trabalhando com orientação a objetos, vamos pensar! Qual entidade eu preciso criar para resolver meu problema?

# Vamos, então, criar uma entidade SalesReport e tentar incumbir a ela a responsabilidade de gerar o nosso relatório.
""" ./sales_report.py """
import json
class SalesReport():
    def __init__(self, export_file):
        self.export_file = export_file + '.json'
    def build(self):
        """ Aqui colocamos a lógica para entidade 'se criar', criar um relatório
        imprimível. Por simplicidade, vamos omitir essa lógica nos exemplos! """
        return [{
                'Coluna 1': 'Dado 1',
                'Coluna 2': 'Dado 2',
                'Coluna 3': 'Dado 3'
                },
                {
                'Coluna 1': 'Dado A',
                'Coluna 2': 'Dado B',
                'Coluna 3': 'Dado C'
                }]
    def serialize(self):
        # Vamos gerar, aqui, o nosso relatório em formato JSON
        with open(self.export_file, 'w') as file:
            json.dump(self.build(), file)

# acabamos de criar um objeto e dar a ele a capacidade de responder a mensagens!

# # Classe, crie (em outras palavras, instancie!) uma nova entidade 'Relatório de vendas' para eu usar!
meu_relatorio_de_vendas = SalesReport('meu_relatorio')
# Entidade 'meu_relatorio_de_vendas', que eu acabei de criar, imprima-se!
meu_relatorio_de_vendas.serialize()

# portanto, seguindo direitinho a Orientação a Objeto, certo? Colocamos nosso código em produção, ele funciona, várias pessoas o instanciam, o chamam e enviam mensagens a ele em toda nossa aplicação, pedindo para que se imprima! Agora... algum tempo passou! Te pedem para, além de gerar relatórios JSON, gerar relatórios em CSV também!

""" Exercício de Fixação """
# 1 - Altere o código da classe SalesReport para que ela, além de gerar relatórios em JSON, gere relatórios em CSV também. Defina, primeiro, como você fará a extensão da lógica para depois gerar o CSV mesmo.
""" ./fixacao1.py """

# Feito o exercício, imagine que sua liderança técnica vai fazer uma Code Review do seu código e te faz algumas perguntas:
# 1 Para adicionar a funcionalidade você precisou mudar a assinatura (nome e parâmetros) de alguma função? Se sim, você vai precisar mudar todos os códigos que usam essa função, então não podemos fazer isso sem gerar muito retrabalho! Não podemos fazer a mudança assim.
# 2 Os nomes das suas funções ainda estão coerentes? Por exemplo, se uma se chama serialize_csv , a outra deve se chamar serialize_json . Chamá-la só de serialize é confuso - se temos mais de uma serialização, a serialize é qual delas?!
# 3 Você criou uma nova classe ? Se sim, ela duplicou alguma lógica? Se duplicou, por exemplo, a lógica de construção do relatório, na função build , não rola ❌!
# 4 Você mudou o nome da classe? Se sim, voltamos ao problema de modificar código já existente. Não dá!

# Como fazer isso? Como eu escrevo um código aberto para extensões, mas fechado para modificações?!


"""  --------------------------------------------------------------------------
| -> Herança - Especialização de comportamentos                               |
--------------------------------------------------------------------------  """
# - Herança nada mais é do que especializar o comportamento de uma classe. A classe herdeira é tudo que a classe ascendente é e um pouco mais!

# Não se deve ter medo de criar objetos. Não importa quão pequenos sejam, é a separação de responsabilidades que faz o paradigma brilhar

# Leia o código abaixo! Ele faz a mesma coisa que o código anterior, mas está refatorado.
from abc import ABC, abstractmethod
import json
class SalesReport(ABC):
    def __init__(self, export_file):
        self.export_file = export_file
    def build(self):
        return [{
                'Coluna 1': 'Dado 1',
                'Coluna 2': 'Dado 2',
                'Coluna 3': 'Dado 3'
                },
                {
                'Coluna 1': 'Dado A',
                'Coluna 2': 'Dado B',
                'Coluna 3': 'Dado C'
                }]
    @abstractmethod
    def serialize(self):
        raise NotImplementedError
class SalesReportJSON(SalesReport):
    def serialize(self):
        with open(self.export_file + '.json', 'w') as file:
            json.dump(self.build(), file)
# resultado
relatorio_de_vendas = SalesReportJSON('meu_relatorio')
relatorio_de_vendas.serialize()

# 💡 Como boa prática, cada classe deve ser definida em seu próprio arquivo!

# - Se FileCompressor é a classe ascendente, ZipFileCompressor e TarFileCompressor são classes herdeiras! Ambas são um tipo específico de compressor de arquivos.
# - Se DatabaseConnector é a classe ascendente, MySQLConnector e MongoConnector são as classes herdeiras! Ambas são um tipo específico de conector de banco de dados.
# - Se Model é a classe ascendente, UserModel é a classe herdeira! É um tipo específico de model .
# - Se Service é a classe ascendente, AuthenticationService é a classe herdeira! É um tipo específico de service .

# No Python, definimos uma classe como herdeira da outra na linha que a define, como acima em class SalesReportJSON(SalesReport).
# A lógica é: class MinhaClasseHerdeira(ClasseAscendente)

""" Exercício de Fixação """
# 2 - Implemente uma classe SalesReportCSV que seja herdeira da classe SalesReport , da mesma forma que fizemos com a SalesReportJSON . Para testar seu funcionamento, instancie-a e chame sua função serialize.
""" ./fixacao2.py """


"""  -------------------------------------------------------------------------
| -> Classes Abstratas                                                        |
--------------------------------------------------------------------------  """
# - classe abstrata é a classe que não pode ser instanciada nunca!
# E o método abstrato é... a mesma coisa! É um método que nunca pode ser chamado diretamente.

# A classe "SalesReport" define o método serialize para deixar nítido que todo relatório de vendas deve ter uma forma de se serializar, mas ela mesma, por ser geral, não é serializável.
# Assim sendo, a classe SalesReport precisa definir a assinatura do método (nome e parâmetros), mas ele só será chamado sem erros se uma classe herdeira o implementar.
# No contexto de Programação Orientada a Objetos, pense que coisas abstratas são coisas criadas para serem especializadas por classes herdeiras!

# "Serializar" é o processo de mudar o formato dos seus dados para que possam ser armazenados ou enviados para serem, depois, convertidos de volta à sua forma original
# Fonte: Dicionário de Cambridge
# https://dictionary.cambridge.org/pt/dicionario/ingles/serialization

""" Exercício de Fixação """
# 3 - Defina na classe SalesReport um segundo método abstrato chamado get_length que retorna quantos itens tem no relatório. Tente chamar esse método a partir da classe herdeira que não implementa esse método e veja o erro que você recebe. Tente instanciar a SalesReport também! Depois disso, implemente uma lógica qualquer para esse método em uma das classes herdeiras e verifique que já é possível instanciá-la e até chamar o método!
""" ./fixacao3.py """


"""  --------------------------------------------------------------------------
 -> Interfaces
--------------------------------------------------------------------------- """
# - Um objeto deve ser capaz de receber mensagens. As funções que você chama são as mensagens enviadas a ele. Quando você dá a um objeto uma função você define uma mensagem que ele será capaz de receber e interpretar. Ao conjunto de mensagens que um objeto pode interpretar é dado o nome de Interface !

# quando duas pessoas de países diferentes conversam, muitas vezes não é possível conversarem em seus idiomas nativos. Pode ser que um Japonês e um Brasileiro, por exemplo, só consigam se comunicar em Inglês. Você só é capaz de se comunicar com a outra pessoa se disser algo que ela é capaz de entender . Com objetos, é a mesma coisa: a interface de um objeto representa o conjunto de mensagens que ele é capaz de entender! Para a classe SalesReport , sua interface é composta pelas funções build e serialize .

# uma vantagem da Programação Orientada a Objetos é que só precisamos saber como instanciar um objeto e quais funções ele tem ? Falando a mesma coisa de maneira mais técnica, podemos dizer que a Programação Orientada a Objetos garante interfaces bem definidas para as várias partes do nosso programa se comunicarem sem que se precise saber como, internamente, cada parte funciona . Se suas interfaces tem nomes bons e lógicas bem definidas, fica fácil reusar o código que você escreveu! Não é preciso entender como ele funciona, só como me comunico com ele.


"""  --------------------------------------------------------------------------
 -> Dicionário de conceitos
--------------------------------------------------------------------------- """

# Herança:
# é uma forma de especializar o comportamento de uma classe com outra classe;

# Classe Abstrata:
# uma classe que não pode ser instanciada. Utilizada para definir as funções comuns (nem sempre abstratas) e suas assinaturas;

# Métodos Abstratos:
# um método, ou função, que precisa ser implementado por uma classe herdeira para funcionar corretamente. Criado para definir uma Interface ;

# Interface:
# conjunto de métodos que um determinado objeto "possui" - ou, o conjunto de mensagens que um objeto é capaz de entender e responder para.


"""  --------------------------------------------------------------------------
 -> E quando nem todas as herdeiras vão ter o mesmo comportamento?
--------------------------------------------------------------------------- """

# determina-se que todo relatório deve ser compactado para transitar pelos servidores da empresa! Isso é super importante para economizar rede e disco.
from abc import ABC, abstractmethod
import gzip
import json
class SalesReport(ABC):
    def __init__(self, export_file):
        self.export_file = export_file
    def build(self):
        return [{
                'Coluna 1': 'Dado 1',
                'Coluna 2': 'Dado 2',
                'Coluna 3': 'Dado 3'
                },
                {
                'Coluna 1': 'Dado A',
                'Coluna 2': 'Dado B',
                'Coluna 3': 'Dado C'
                }]
    def compress(self):
        binary_content = json.dumps(self.build()).encode('utf-8')
        with gzip.open(self.export_file + '.gz', 'wb') as compressed_file:
            compressed_file.write(binary_content)
    @abstractmethod
    def serialize(self):
        raise NotImplementedError
class SalesReportJSON(SalesReport):
    def serialize(self):
        with open(self.export_file + '.json', 'w') as file:
            json.dump(self.build(), file)
class SalesReportCSV(SalesReport):
    # Sua implementação vai aqui
    pass

# Repare que adicionamos o comportamento à classe ascendente ! Fazemos isso porque todos os relatórios terão que ser comprimidos. Isso não é um comportamento especializado, é geral! Então faz sentido torná-la parte da interface da classe. E nossa linguagem permite que classes abstratas tenham métodos concretos (ou seja, que fazem coisas de verdade). As classes herdeiras não são obrigadas a re-implementar esses métodos, apenas os abstratos!

# Mas bom! Até aí tudo muito bom. Mas chega, um tempo depois, uma nova demanda! "Nossos relatórios estão fazendo um sucesso incrível e agora precisamos que clientes possam baixá-los, compactados, lógico, e descompactá-los! Mas nossos clientes não tem perfil técnico e não vão saber descompactar um arquivo .gz, então é obrigatório nós compactarmos ele em .zip também!"

""" Exercício de Fixação """
# 4 - Precisamos garantir que todos os relatórios sejam compactados em .zip e em .gz.
""" R= """
# Teria que criar uma infinidade de classes herdeiras com código replicado para resolver o problema , ou mudar nomes e assinaturas, e nada disso a gente pode fazer!


"""  --------------------------------------------------------------------------
 -> Composição - Classes feitas de outras classes
--------------------------------------------------------------------------- """
# Outra forma de compartilhar códigos na Programação Orientada a Objetos. A Composição!

# Nós já sabemos que não podemos criar, na classe mãe, uma função compress_zip para fazer o que precisamos.
# Se fizéssemos isso precisaríamos mudar o nome da função compress para compress_gzip, e como consequência mudar todos os milhares de lugares onde essa função é chamada.

# Fazemos uma SalesReportJSONZip e uma SalesReportJSONGz
""" ./composicao.py """

# Observe o que fizemos: nós criamos classes próprias para nossos compressores e passamos instâncias delas para nosso relatório! Isso, aliado ao nosso uso de parâmetros nomeados, nos permite, sem mudar código existente algum, dar a cada pessoa o poder de usar nossas classes e escolher se quer usar um compressor .gz , .zip , ou qualquer outro que vier no futuro!

# A "Herança" serve para especializar comportamentos, onde toda classe herdeira deve fazer tudo que a classe ascendente faz.
# Quando precisamos reusar código, ou os comportamentos começam a aparecer em somente algumas das classes herdeiras, prefira usar "Composição"!
# Aí quem instância a classe escolhe com qual dependência(no nosso caso, o compressor) quer usá-la.
# O nome disso é "Inversão de Dependência" 😉.
# É uma inversão porque não é o autor da SalesReportJSON que define qual classe o método compress vai usar.
# Quem define é quem cria as instâncias da SalesReportJSON!

""" Composição e Interfaces """

# O grande risco que temos ao fazer composição é a classe que passarmos para a outra não ter o mesmo formato que imaginamos! se o nosso novo compressor não tiver uma função chamada "compress" que receba o mesmo parâmetro que definimos, usá-la dará erro.

# Todo compressor deve ter uma função chamada compress que receba esse parâmetro!
""" ./composicao-compress.py """

# todo compressor que for criado precisa ter uma função compress que receberá esse parâmetro específico para funcionar!

# Você usa uma classe abstrata com um método abstrato para definir uma interface que, através de herança , definirá o comportamento de todos os compressores futuros, assegurando que sua composição sempre funcionará!


"""  --------------------------------------------------------------------------
 -> Métodos de Classe, Métodos Estáticos e Métodos de Instância
--------------------------------------------------------------------------- """

# se o local de criação do arquivo for sempre o mesmo quantos "ZipCompressor" você acha que faz sentido instanciar na sua aplicação?

# Tanto faz se invocamos a função com "minha_instancia_de_zip_compressor.compress()" ou "ZipCompressor.compress()".
# Mas é possível fazer dessa segunda forma? É possível, em suma, invocar um método a partir de uma classe, e não de uma instância dela? Sim! Observe nossa refatoração:

""" ZipCompressor-refatoracao.py """

# métodos de classe são chamados diretamente da classe, sem instâncias, e utilizam algum atributo ou função auxiliar da classe para funcionar!
# Métodos estáticos são chamados diretamente da classe e não utilizam nada dela.


"""  --------------------------------------------------------------------------
 -> Composição versus Herança
--------------------------------------------------------------------------- """
# - reaproveitar códigos

# Utilize herança para especialização e composição para compartilhamento de código.


"""  --------------------------------------------------------------------------
 -> Dicionário de conceitos, parte 2
--------------------------------------------------------------------------- """

""" Herança: """
# é uma forma de especializar o comportamento de uma classe com outra classe;

""" Classe Abstrata: """
# uma classe que não pode ser instanciada.
# Utilizada para definir as funções comuns(nem sempre abstratas) e suas assinaturas;

""" Métodos Abstratos: """
# um método, ou função, que precisa ser implementado por uma classe herdeira para funcionar corretamente.
# Criado para definir uma Interface ;

""" Interface: """
# conjunto de métodos que um determinado objeto "possui" ou, conjunto de mensagens que um objeto é capaz de entender e responder para;

""" Composição: """
# incorporar em um objeto outro objeto, para compartilhar código de maneira eficaz;

""" Métodos de classe: """
# métodos que podem ser chamados diretamente pela classe definida, e não por sua instância, para definirmos quando instanciar um objeto dessa classe for desnecessário!
# Utilizam, obrigatóriamente, atributos ou métodos internos da classe em seu funcionamento;

""" Métodos estáticos: """
# como os métodos de classe, mas não utilizam nada de sua classe em seu funcionamento.

""" E lembre-se: """
# utilize herança para especialização de uma classe geral e composição para compartilhamento de código


"""  --------------------------------------------------------------------------
 -> Os quatro pilares da Programação Orientada a Objetos
--------------------------------------------------------------------------- """
# No bloco anterior foi faldo dobre "Encapsulamento" e "Abstração". 2 dos 4 pilares de POO.

""" Herança """
# A herança, como o próprio nome já diz, é o princípio que define que uma classe deve ser capaz de herdar seus atributos e métodos de outra.
# E embora a classe base possa ter tanto métodos abstratos(que precisam ser implementados) quanto métodos concretos(que já estão implementados), a boa prática diz que a herança deve ser usada apenas para especialização.
# Se você quer apenas compartilhar código, use composição.

""" Polimorfismo """
# Segundo o dicionário, a palavra "polimorfismo" significa "qualidade ou estado de ser capaz de assumir diferentes formas".
# Em POO, o polimorfismo é caracterizado quando duas ou mais classes contêm implementações diferentes para métodos com a mesma interface.
# Nos nossos exemplos de hoje pense, por exemplo, no método serialize, que é definido de forma abstrata na classe Serializer e assume diferentes formas nas classes JSONSerializer e CSVSerializer

""" Os quatro pilares em uma frase """
# Na Programação Orientada a Objetos, você deve criar entidades(Abstração) com as mensagens que escuta bem definidas(Encapsulamento), podendo especializar comportamentos de entidades(Herança) contanto que garanta que a forma de enviar mensagens é consistente(Polimorfismo)


# --------------------------------------------------------------------------- #
# - > CONTEÚDO do dia - 33.2 - <--- / FIM ---------------------------------- //
# #####################################
# - > AULA ao VIVO - 33.2 ----- <--- / INICIO ------------------------------ //
# --------------------------------------------------------------------------- #

# Foco de hoje
# ...Herança, Composição e Interfaces

''' ./bowling_game/frame.py '''
''' ./tests/test_frame.py '''


# --------------------------------------------------------------------------- #
# - > AULA ao VIVO - 33.2 ----- <--- / FIM --------------------------------- //
# #####################################
# - > EXERCÍCIO do dia - 33.2 - <--- / INICIO ------------------------------ //
# --------------------------------------------------------------------------- #

# Agora a prática

''' Exercício 1: '''
# Diagrama de classes da TV
# - Atributos:
# volume - será inicializado com um valor de 50 e só pode estar entre 0 e 99;
# canal - será inicializado com um valor de 1 e só pode estar entre 1 e 99;
# tamanho - será inicializado com o valor do parâmetro;
# ligada - será inicializado com o valor de False, pois está inicialmente desligado.
# Todos os atributos devem ser privados.
# - Métodos:
# aumentar_volume - aumenta o volume de 1 em 1 até o máximo de 99;
# diminuir_volume - diminui o volume de 1 em 1 até o mínimo de 0;
# modificar_canal - altera o canal de acordo com o parâmetro recebido e deve lançar uma exceção ( ValueError ) caso o valor esteja fora dos limites;
# ligar_desligar - alterna o estado da TV entre ligado e desligado ( True / False ).
''' R= ./ex1.py '''

''' Exercício 2: '''
# Defina uma classe Estatistica que calcule média, mediana e moda de uma lista de números.
# 🐦 Dica: Utilize métodos de classe.
# Diagrama de classes da Estatistica
''' R= ./ex2.py '''

''' Exercício 3: '''
# Que tal agora relembrarmos o exercício das figuras geométricas? Implemente o diagrama de classes abaixo.
# Diagrama de classes das figuras geométricas
''' R= ./ex3.py '''

''' Exercício 4: '''
# Implemente um sistemas de logs por nível de severidade, seguindo o diagrama abaixo.
# Diagrama de classes do sistema de logs
# Classe Log
# Atributos:
# manipuladores - Será inicializado com um conjunto de subclasses de ManipuladorDeLog ;
# Métodos:
# adicionar_manipulador - adiciona um manipulador ao conjunto de manipuladores do gerenciamento de logs ( Log );
# info - dispara logs com nível de severidade "INFO" ;
# alerta - dispara logs com nível de severidade "ALERTA" ;
# erro - dispara logs com nível de severidade "ERRO" ;
# debug - dispara logs com nível de severidade "DEBUG" ;
# __log - dispara os logs formatados para todos os manipuladores (invocado para cada nível de severidade, para evitar duplicação de código);
# __formatar - formata os logs de acordo com o padrão "[ERRO - 01/01/2020 13:00:00]: ZeroDivisionError: division by zero";
# A interface de manipulação de logs deve utilizar métodos de classe.
# 🐦 Dica: Você pode utilizar a função print em tela ou em arquivo (que pode ter um nome padrão).
''' R= ./ex4.py '''

''' Exercício 5: '''
# Implemente um gerenciador de quartos de hotel, simplificado, conforme o diagrama a seguir.
# Diagrama de classes do sistema de hoteis
# Classe Quarto
# Atributos:
# numero - número do quarto;
# andar - andar do quarto;
# quantidade_de_hospedes - capacidade de hospedagem do quarto;
# preco - valor da hospedagem;
# reservado - sempre inicializado com False , indica o estado do quarto.
# Classe Hospede
# Atributos:
# nome - nome do hospede;
# cpf - CPF do hospede (para fins de simplificação, não é necessário validar o CPF).
# Classe Reserva
# Atributos:
# quarto - é composto por uma instância de quarto;
# hospede - é composto por uma instância de hospede.
# Classe Hotel
# Atributos:
# nome - nome do hotel;
# quartos - é composto por uma lista de instâncias de quarto;
# reservas - é composto por uma lista de instâncias de reserva;
# Métodos:
# check_in - recebe uma quantidade indefinida de hospedes e busca por um quarto disponível com capacidade suficiente. Se houver um quarto disponível, altera o estado do quarto e cria uma reserva para cada hospede. Caso não haja quartos disponíveis deve lançar a exceção IndexError com a mensagem "Não há quartos disponíveis para essa quantidade de hospedes";
# check_out - recebe uma instância de quarto, alterando seu estado e removendo todas as suas reservas;
# quartos_disponiveis - retorna uma lista de quartos disponíveis que comportam uma quantidade_de_hospedes (passado por parâmetro), priorizada da menor capacidade de hospedes possível para a maior. Lembre-se, para que um quarto esteja disponível, além de respeitar a capacidade, ele não pode estar reservado.
# Observação: considere todos os atributos como sendo públicos para fins de simplificação da implementação.
''' R= ./ex5.py '''


# --------------------------------------------------------------------------- #
# - > EXERCÍCIO do dia - 33.2 - <--- / FIM --------------------------------- //
# ################################ Herança, Composição e Interfaces
# - Concluído \o/ ----------------------------------------------------------- #


""" Recursos adicionais (opcional) """

# O que é UML e Diagramas de Caso de Uso: Introdução Prática à UML
# https://www.devmedia.com.br/o-que-e-uml-e-diagramas-de-caso-de-uso-introducao-pratica-a-uml/23408

# UML - Examples by Types of Diagrams
# https://www.uml-diagrams.org/index-examples.html

# Composition over inheritance - The MurderRobotDog taxonomy problem
# https://medium.com/humans-create-software/the-murderrobotdog-taxonomy-problem-767eb1785731

# RailsConf 2015 - Nothing is Something
# https://www.youtube.com/watch?v=OMPfEXIlTVE

# Live de Python - Composição e métodos mágicos
# https://www.youtube.com/watch?v=MYaXUrmvrho

# Uncle Bob - The Principles of OOD
# http://butunclebob.com/ArticleS.UncleBob.PrinciplesOfOod

# SOLID Object-Oriented Design by Sandi Metz
# https://www.youtube.com/watch?v=v-2yFMzxqwU
