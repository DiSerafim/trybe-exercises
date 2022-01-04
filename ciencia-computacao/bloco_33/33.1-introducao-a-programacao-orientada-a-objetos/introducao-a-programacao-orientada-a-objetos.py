# ########################################## introducao-a-programacao-orientada-a-objetos
# --> CONTEÚDO do dia - 33.1 - <--- / INICIO ----------------------------- //
# ########################################## introducao-a-programacao-orientada-a-objetos

# Exemplo: recuperação de senha
# Organizando a sua lógica em entidades
# User, nossa primeira entidade
# Enviar emails - onde coloco essa lógica?
# Dicionário de conceitos
# Mailer - Criando mais entidades
# Dicionário de conceitos, parte dois
# O que vem por aí

""" ---> OBJETIVO <---
- Definir Programação Orientada a Objetos como um paradigma de programação que é base para inúmeras arquiteturas de software
- Descrever Programação Orientada a Objetos como um paradigma baseado na criação de entidades que interagem entre si através da troca de mensagens
- Definir, em Programação Orientada a Objetos , uma Classe
- Definir, em Programação Orientada a Objetos , um Construtor
- Definir, em Programação Orientada a Objetos , um Objeto
- Definir, em Programação Orientada a Objetos , uma Instância
- Definir, em Programação Orientada a Objetos , um Atributo
- Definir, em Programação Orientada a Objetos , um Método
- Implementar, em Python , Classes , Instâncias , Atributos , Métodos e envio de Mensagens entre Objetos
- Descrever, como pilar da Programação Orientada a Objetos , a Abstração - a criação de entidades que conterão, cada uma, parte da lógica de seu programa
- Descrever, como pilar da Programação Orientada a Objetos , o Encapsulamento - a exposição somente do que é necessário para uso dos objetos de uma classe """


# ---> Conteúdos <---

"""  --------------------------------------------------------------------------- 
| -> Exemplo: recuperação de senha <-                                          |
---------------------------------------------------------------------------  """

# Primeiramente, vamos definir em uma frase qual o problema que queremos resolver: Enquanto pessoa usuária, eu quero recuperar minha senha através de um email que receberei . Por enquanto... parece bom, certo?

# Exercício de Fixação

# Antes de sair escrevendo, pense . Como você acha que faz sentido organizar o código da sua funcionalidade? Desenhe, faça um esqueminha das entidades/arquivos/funções/o que for que você criará!

# Cronometre ⏲️ cinco minutos para pensar e siga adiante!


"""  --------------------------------------------------------------------------- 
| -> Organizando a sua lógica em entidades                                     |
---------------------------------------------------------------------------  """

# Para pensar de forma Orientada a Objetos, faça, para cada problema que se quer resolver, a seguinte pergunta:
""" 
- Quem quer fazer o que e com o que ?
- No nosso caso, um User quer recuperar sua senha com seu email . Se partirmos daí, o que temos?
- Uma entidade User
- Uma ação ou entidade de enviar emails
- Uma ação ou entidade de recuperar senhas
"""


"""  --------------------------------------------------------------------------- 
| -> User, nossa primeira entidade                                             |
---------------------------------------------------------------------------  """
# User - É alguém que quer recuperar uma senha por email.
# Esse alguém, portanto, tem um email e uma senha.
# Para identificarmos a pessoa, vamos dar um nome também. Por enquanto, parece que é só disso que precisamos.

# ./user.py
#  a palavra reservada 'class' é usada, como "Uma entidade user contém um nome, um email e uma senha".

# 'meu_user' uma variável que contém... a 'entidade'! Temos nela os valores, os dados daquela 'entidade'.

""" Objetos no Python """
# - Toda classe capaz de criar objetos deve possuir um método construtor , que será chamado quando o objeto estiver sendo criado.
# o método construtor é, sempre, definido com o nome "__init__" no topo da classe que se está criando.
# ./user.py


"""  --------------------------------------------------------------------------- 
 -> Enviar emails - onde coloco essa lógica?
---------------------------------------------------------------------------  """

# Para uma entidade saber fazer algo, precisamos definir nela uma função que represente essa ação. Algo assim:
# ./user.py

""" 
def reset_password(self):
        print("Envia email de reset de senha")

meu_user.reset_password()
"""
# No código acima, estamos pedindo para meu_user resetar sua senha! Não nos interessa como a ação será feita, só nos interessa que ela será feita!

# Se definimos numa classe uma função, podemos chamar ela a partir do objeto que criamos!
# Quando pedimos para um objeto fazer algo, dizemos que estamos enviando uma mensagem àquele objeto
# Na essência, toda lógica da orientação a objetos parte do envio de mensagens entre objetos.

# 1- O pilar de definir entidades chama-se "ABSTRAÇÂO".
# 2- O pilar de usá-las sem entender como elas funcionam se chama "ENCAPSULAMENTO".


"""  --------------------------------------------------------------------------- 
 -> Dicionário de conceitos
---------------------------------------------------------------------------  """

"""
-> Classe: Entidade "geral" que definimos com base no problema que queremos resolver.
-> Objeto: Entidade "específica", criada a partir das regras definidas pela entidade "geral". Pense que a classe é o molde e o objeto a escultura que o molde faz!
-> Instância: esse é novo! Sabe quando criamos um objeto a partir de uma classe! Então! Dizemos que esse objeto é uma instância dessa classe! Ou, também, dizemos que a classe instanciou um objeto!
-> Atributo: outro novo! Um atributo é uma informação de uma instância que você criou. O nome de um User, por exemplo.
-> Mensagem: Forma com que objetos interagem - chamando funções uns dos outros. Um chamado como esse é um envio de mensagem a outro objeto. "User, resete sua senha!"
-> Abstração: Pilar da Programação Orientada a Objetos. Se refere a sempre criar entidades que farão as ações que resolverão seu problema.
-> Encapsulamento: Pilar da Programação Orientada a Objetos. Se refere a poder instanciar uma entidade e enviar mensagens a ela sem saber como ela funciona por dentro
"""


"""  --------------------------------------------------------------------------- 
 -> Mailer - Criando mais entidades
---------------------------------------------------------------------------  """

# o "ssl" e o "smtplib". Ambos nos permitirão logar num servidor de emails e, de lá, fazer um envio de forma segura através da rede.
# Para conseguirmos fazer isso, precisaremos ter em mãos algumas informações:
# - o email enviador,
# - a senha do email enviador,
# - o email que receberá a mensagem,
# - o assunto e o corpo do email.

# Lembre-se do primeiro pilar de POO, a "Abstração" ! 
# Se uma lógica parece não pertencer a uma entidade, extraia-a para uma outra entidade, ou para uma entidade nova!

# No nosso caso, que tal criamos um enviador de emails?
# O nome faz sentido, não faz? O nome mais literal possível que podemos dar para uma entidade que envia emails é Enviador de Emails .
# Em inglês, Mailer

# ./user.py

# Assim resolvemos o nosso problema com o máximo de lógica encapsulada.
# E ao separarmos as nossas entidades , nós deixamos a entidade Mailer, de quebra, muito mais genérica!
# Ela não precisa enviar só emails de reset de senha agora. Ela pode enviar quaisquer emails! 🤩

""" Mensagens e Métodos """
# - O meu_user.reset_password(), pode ser lido como "Meu user, resete a sua senha!" .
# - Dentro da classe User , definimos a função reset_password que irá conter a lógica de resetar senha.
# - Funções que "respondem mensagens" se chamam "Métodos"
# - Usualmente ela será nomeada com um verbo ( 'Reset your password!' vira reset_password).
# - No contexto de POO, todas as interações são feitas por troca de mensagens! você envia uma mensagem para um objeto ou você não faz nada com ele. O bom Encapsulamento faz com que nós só precisemos saber do nome de uma classe e seus métodos para interagir com ela. 
# No Python, mesmo quando você altera um atributo diretamente, por trás dos panos o que ele faz é enviar uma mensagem de atualização para a classe!


"""  --------------------------------------------------------------------------- 
 -> Dicionário de conceitos, parte dois
---------------------------------------------------------------------------  """

# Outra forma de resolver o problema do dia, com as classes `User`, `Mailer`, `EmailNotFoundError` e `UserService`

# User{ name, email, password}
# Mailer{ from_email, from_password, to_email, subject, message, send_email }
# EmailNotFoundError{ user, mailer, reset_password }
# UserService{ }

""" Classe """
# - Uma classe consiste numa espécie de molde para criação de novos objetos, definindo seus atributos e métodos comuns que serão utilizados por ele.

# User: Representa a entidade que armazenará as informações de uma pessoa usuária;
# Mailer: Representa um gerenciador de envio de emails, que pode ser utilizado em qualquer parte do sistema;
# EmailNotFoundError: Representa uma exceção customizada, que é lançada pelo gerenciador de envio de emails, caso não seja possível fazer este envio devido a algum dos emails não existir;
# UserService: Representa um serviço que implementa as regras de negócio associadas a uma pessoa usuária, como por exemplo, o envio de um email de redefinição de senha para o caso da pessoa ter esquecido sua senha.

""" Objeto/Instância """
# Com a classe criada, podemos instanciar um objeto. Instanciar é o ato de criar um novo objeto/instância a partir da classe definida.

# mailer = Mailer(
#   "app-dev@email.com",
#   "123456",
#   "user@email.com"
# )
# Nesse exemplo criamos uma instância de um gerenciador de email com as informações passadas por parâmetro.

""" Atributo """
# Atributos são onde as informações de uma instância são armazenadas. Eles representam o estado do objeto.

# User: Uma instância de User armazena informações de nome, email e senha de cada pessoa usuária da nossa aplicação;
# Mailer: Uma instância de Mailer armazena as informações de quem envia e quem recebe o email, seu assunto e seu conteúdo;
# EmailNotFoundError: Classes não precisam necessariamente ter atributos. Essa classe por exemplo, apenas representa um tipo de exceção, não definindo nenhum atributo;
# UserService: Atributos não precisam armazenar apenas informações de tipos de dados primitivos, podendo armazenar também instâncias de outras classes, ou até mesmo uma classe em si. Nesse caso, uma instância da classe UserService armazena uma instância de uma pessoa usuária e uma classe de gerenciamento de emails.

""" Método """
# - Métodos são funções que possuem acesso aos dados armazenados em atributos, podendo implementar comportamentos e alterar seus estados.

# Nomes como "redefinir_senha" ou "reset_password" poderiam ser utilizados para um método que implementa o comportamento de redefinição de senha.

""" Construtor """
# É um método especial utilizado para inicializar instâncias de uma classe e que pode receber parâmetros usados para definir as informações armazenadas em seus atributos.

""" Abstração - Pilar da Programação Orientada a Objetos """
# - significa definir uma classe focando nas mensagens que ela responde e nos atributos de que precisa.

""" Encapsulamento - Pilar da Programação Orientada a Objetos """
# - Encapsulamento se trata de esconder parte da implementação de uma classe, exibindo de forma pública somente aquilo que é necessário para que o cliente consuma sua classe e deixando detalhes da implementação protegidos ou privados.


# --------------------------------------------------------------------------- #
# - > CONTEÚDO do dia - 33.1 - <--- / FIM ---------------------------------- //
# #####################################
# - > AULA ao VIVO - 33.1 ----- <--- / INICIO ------------------------------ //
# --------------------------------------------------------------------------- #

# Foco de hoje
# ...

# --------------------------------------------------------------------------- #
# - > AULA ao VIVO - 33.1 ----- <--- / FIM --------------------------------- //
# #####################################
# - > EXERCÍCIO do dia - 33.1 - <--- / INICIO ------------------------------ //
# --------------------------------------------------------------------------- #

# Agora a prática

# Exercício 1: 

# --------------------------------------------------------------------------- #
# - > EXERCÍCIO do dia - 33.1 - <--- / FIM --------------------------------- //
# ########################################## introducao-a-programacao-orientada-a-objetos
# - Concluído ... ------------------------------------------------------------ #
