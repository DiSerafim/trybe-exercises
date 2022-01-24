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

















"""  --------------------------------------------------------------------------
| -> Herança - Especialização de comportamentos                               |
--------------------------------------------------------------------------  """
# 
"""  -------------------------------------------------------------------------
| -> Classes Abstratas                                                        |
--------------------------------------------------------------------------  """
# 
"""  --------------------------------------------------------------------------
 -> Interfaces
--------------------------------------------------------------------------- """
# 
"""  --------------------------------------------------------------------------
 -> Dicionário de conceitos
--------------------------------------------------------------------------- """
# 
"""  --------------------------------------------------------------------------
 -> E quando nem todas as herdeiras vão ter o mesmo comportamento?
--------------------------------------------------------------------------- """
# 
"""  --------------------------------------------------------------------------
 -> Composição - Classes feitas de outras classes
--------------------------------------------------------------------------- """
# 
"""  --------------------------------------------------------------------------
 -> Métodos de Classe, Métodos Estáticos e Métodos de Instância
--------------------------------------------------------------------------- """
# 
"""  --------------------------------------------------------------------------
 -> Composição versus Herança
--------------------------------------------------------------------------- """
# 
"""  --------------------------------------------------------------------------
 -> Dicionário de conceitos, parte 2
--------------------------------------------------------------------------- """
# 
"""  --------------------------------------------------------------------------
 -> Os quatro pilares da Programação Orientada a Objetos
--------------------------------------------------------------------------- """
# 
"""  --------------------------------------------------------------------------
 -> Muita calma nessa hora!
--------------------------------------------------------------------------- """
# 

# --------------------------------------------------------------------------- #
# - > CONTEÚDO do dia - 33.2 - <--- / FIM ---------------------------------- //
# #####################################
# - > AULA ao VIVO - 33.2 ----- <--- / INICIO ------------------------------ //
# --------------------------------------------------------------------------- #

# Foco de hoje
# ...Herança, Composição e Interfaces
""" teminal python3 """



# --------------------------------------------------------------------------- #
# - > AULA ao VIVO - 33.2 ----- <--- / FIM --------------------------------- //
# #####################################
# - > EXERCÍCIO do dia - 33.2 - <--- / INICIO ------------------------------ //
# --------------------------------------------------------------------------- #

# Agora a prática
"""
Exercício 1: 
"""
# --------------------------------------------------------------------------- #
# - > EXERCÍCIO do dia - 33.2 - <--- / FIM --------------------------------- //
# ################################ Herança, Composição e Interfaces
# - Concluído ... ----------------------------------------------------------- #

# Recursos adicionais (opcional)
"""  """
