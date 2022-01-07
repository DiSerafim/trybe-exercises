# ########################################## Arquitetura de redes
# --> CONTEÚDO do dia - 34.1 - <--- / INICIO ----------------------------- //
# ########################################## Arquitetura de redes

# Internet
# Redes de computadores
# Pacotes
# Protocolos
# Modelo de Rede

""" ---> OBJETIVO <---
- Entender um pouco mais como a internet funciona;
- Conhecer os conceitos básicos de redes de computadores;
- Entender os modelos de cliente-servidor e P2P ;
- Entender como funciona a estrutura de camadas nas redes;
- Conhecer as camadas que formam o principal modelo de rede;
- Aprender o que são os protocolos e como os utilizamos no nosso dia-a-dia.
"""


# ---> Conteúdos <---

"""  --------------------------------------------------------------------------- 
| -> Internet <-                                                               |
---------------------------------------------------------------------------  """
# Veja esse vídeo da TecMundo que conta a história da internet!
# https://www.youtube.com/watch?v=pKxWPo73pX0


"""  --------------------------------------------------------------------------- 
| -> Redes de computadores                                                     |
---------------------------------------------------------------------------  """
# - são conjuntos de software e hardware que permitem a comunicação entre diversos dispositivos como computadores, celulares e impressoras, sendo capazes de compartilhar e transmitir dados uns com os outros.

""" # Existe uma classificação quanto a escala dessa rede, sendo que uma rede de escala menor pode fazer parte de uma rede de escala maior:

- PAN (Personal Area Network): Chamamos de PAN as redes que abrangem uma pequena área física, com dispositivos que se comunicam de forma bem próxima. Como exemplo, temos a rede que permite que seu fone bluetooth se conecte com seu smartphone ou seu mouse sem fio funcione no seu computador.
- LAN (Local Area Network): Rede local de um escritório, casa ou prédio, normalmente abrangendo uma área com algumas salas ou blocos. Interliga computadores, roteadores, smartphones, impressoras, entre outros.
- MAN (Metropolitan Area Network): Interliga diversas redes e dispositivos em uma área metropolitana como, por exemplo, vários locais situados em diversos pontos de uma cidade ou bairro. Outra classificação é a NAN (Neighborhood Area Network), que se restringe a uma área de uma bairro ou vizinhança.
- WAN (Wide Area Network): Rede geograficamente distribuída, interligando redes e dispositivos em âmbito global (estados, países e continentes). A internet é um exemplo de WAN 😎

 """

# As redes são compostas tanto de componentes físicos (hardware) como cabos, roteadores e switches, quanto de softwares que permitem o tráfego de informações.


"""  --------------------------------------------------------------------------- 
| -> Pacotes                                                                   |
---------------------------------------------------------------------------  """
# Para trafegar uma informação em uma rede, essa informação é convertida para binários e então dividida em diversos pedaços, e esses pedaços são os chamados "pacotes" que são enviados pela rede. Os pacotes possuem diversos dados, além da informação em si, como quem está enviando aquele pacote, qual o seu destino e indicações para que o destinatário saiba se alguma parte da informação se perdeu no caminho e se é necessário solicitar um reenvio, dentre outras funções.


"""  --------------------------------------------------------------------------- 
 -> Protocolos                                                                 |
---------------------------------------------------------------------------  """
# são conjuntos de regras que controlam como os dados são trocados. Dessa forma é possível que, ao enviar um dado (pacote) através da rede seguindo esses padrões, tenhamos a garantia de que os demais dispositivos da rede saberão lê-lo.


"""  --------------------------------------------------------------------------- 
 -> Modelo de Rede                                                             |
---------------------------------------------------------------------------  """
# Existem diversos protocolos, cada um responsável por definir as regras para um objetivo específico. 

# Por exemplo, temos protocolos que definem como o dado será trafegado, outros para definir como traduzir os dados recebidos no pacote.

# Dividimos então os protocolos em grupos, agrupando cada tipo no que chamamos de camadas.
# Por exemplo, precisamos de uma camada para identificar quem está enviando a informação e pra quem ela se destina, precisamos de outra camada para traduzir os dados a serem trafegados, etc.

""" Modelo ISO/OSI """
# (Open Systems Interconnection ), foi lançado com o objetivo de ser um padrão entre os diversos dispositivos de comunicação. Esse modelo divide as redes de computadores em 7 camadas:
# 1- Aplicação
# 2- Apresentação
# 3- Sessão
# 4- Transporte
# 5- Rede
# 6- Enlace
# 7- Física

"""
1. Física: Estabelece a comunicação entre os dispositivos no sentido físico. Responsável pelo cabeamento, pelas características elétricas como tensão, ópticas (quando se der por meio óptico) ou eletromagnéticas em uma rede sem fio. Tudo isso garantindo que ocorra a transmissão dos dados pelos meios físicos (hardware), sem perder 0 s e 1 s.

2. Enlace: Também chamada de "link de dados", essa camada é responsável pela detecção e eventualmente pela correção de erros que tenham ocorrido no nível físico. Ela também realiza o controle do fluxo da transmissão entre um dispositivo e outro.

3. Rede: Responsável pelo endereçamento dos dispositivos na rede, assim como pela rota (caminho) que os pacotes deverão percorrer para chegarem da origem até destino.

4. Transporte: Responsável pela detecção e correção de erros que tenham ocorrido nas camadas anteriores, assim como pela ordenação, garantindo que os dados saídos da origem sejam os mesmos no destino. Além disso, ela define a conexão que será usada e como estabelecê-la, assim como controla o fluxo e congestionamento de dados.

5. Sessão: Responsável pela comunicação entre dois processos que estão em máquinas diferentes, controlando o status, definindo quando deve começar, terminar ou reiniciar a comunicação entre origem e destino.

6. Apresentação: Responsável pela conversão entre os formatos de caracteres para que possam ser utilizados na transmissão, também responsável pela compressão e criptografia desses dados.

7. Aplicação: Essa camada é responsável pelo controle da sintaxe e da semântica da mensagem, traduzindo de fato as informações trafegadas.
"""

""" Modelo Internet - TCP/IP """
# é um conjunto de protocolos de comunicação: 
# TCP ( Transmission Control Protocol - Protocolo de Controle de Transmissão)
# IP ( Internet Protocol - Protocolo de Internet).

# O TCP/IP define 4 camadas mesclando as 7 do modelo OSI:
# 1- Aplicação
# 2- Transporte
# 3- Rede
# 4- Interface

"""
"Aplicação"
Contém os protocolos responsáveis por dar significado às informações, sendo a primeira camada passada para a mensagem.
Como exemplos de protocolos dessa camada temos:
- SMTP ( Simple Mail Transfer Protocol - Transmissão de e-mails),
- FTP ( File Transfer Protocol - Transferência de arquivos),
- HTTP ( Hypertext Transfer Protocol - Comunicação WEB).
Tomando como exemplo o HTTP, quando subimos um front-end e temos um servidor capaz de servir páginas web, esse processo é realizado utilizando HTTP. Ao subirmos o servidor, o mesmo ficará aguardando por um pedido, por requisições. Quando acessamos aquele serviço pelo navegador, por exemplo, o navegador está fazendo uma chamada HTTP ao servidor, ou seja: o pedido é feito seguindo os padrões desse protocolo, de modo que o servidor saberá como interpretá-lo, processá-lo e devolver a devida resposta.

"Transporte"
É a camada responsável pela transferência de dados entre diferentes máquinas (seja um servidor ou um computador pessoal). Os principais protocolos dessa camada são o "TCP" e o "UDP" .
Os protocolos possuem diferentes aplicabilidades. Por exemplo, para criarmos um servidor para servir uma página web não podemos ter perda de informações, caso contrário a página não chegará por completo a quem pediu. Da mesma forma que, ao construirmos uma API, temos que garantir que os dados enviados, como o conteúdo de um formulário de cadastro, chegue até o servidor, assim como garantir que os dados respondidos em uma consulta feita ao servidor , por exemplo, sejam entregues por inteiro ao cliente que fez essa solicitação. Nesses casos o "TCP" é o protocolo mais adequado.
Por outro lado, ao assistirmos uma live ou jogarmos algum jogo online, alguns dados podem ser perdidos, por exemplo, parte da transmissão do vídeo, de maneira que perceberemos apenas uma oscilação na transmissão. Nesse caso, o "UDP" é mais indicado, já que com "TCP", caso essa perda de pacote ocorra, será necessário aguardar o reenvio para então ser dado continuidade no processo. Além disso o "UDP" permitirá uma maior velocidade na transmissão e também que o conteúdo seja transmitido para diversos clientes ao mesmo tempo, permitindo que diversas pessoas assistam àquele conteúdo em tempo real.

"Rede"
O principal protocolo utilizado nessa camada é o IP - Internet Protocol
Outras opções de protocolos dessa camada temos o ICMP, NAT, ARP. Todos eles lidam com o endereçamento da comunicação.
Imagine que você vai enviar uma mensagem para alguém através de uma carta. Você então escreve a mensagem em uma folha e a coloca em um envelope. Nesse envelope é necessário que você coloque o endereço para o destinatário a qual você está enviando a mensagem, de modo que seja possível entregá-la. Da mesma maneira você precisa informar o seu endereço para que o destinatário possa enviar uma mensagem de resposta para você.
A camada de rede do TCP/IP é utilizada para isso. Ela irá identificar o remetente e o destinatário para que o pacote possa ser transmitido na rede. Caso queira conhecer um pouco mais sobre o IPv6 assista, como conteúdo extra, ao vídeo: 'Os endereços IP não são todos iguais do NIC.br'

"DNS"
Estamos falando constantemente de endereços IP: que toda máquina possui um para poder se comunicar na rede e ao endereçar um pacote nós o utilizamos. Porém, a realidade é que não costumamos ver muitos esses números ao utilizar a internet e você deve estar se perguntando que, se eles são essenciais para se navegar, onde eles ficam?
Nós utilizamos um sistema de nomes para identificar pontos da rede, ao invés de usar números, já que nomes são mais fáceis de serem utilizados por pessoas. Por exemplo: imagine que, para acessar o google.com fosse necessário digitar no navegador "8.8.8.8", ou para acessar o site da Trybe fosse necessário digitar "34.193.204.92". 
Dessa forma, de maneira bem resumida, conseguimos atribuir um "nome" a um endereço IP específico.

"Interface / Acesso ao Meio
"Por último, mas não menos importante, temos a camada física ou de abstração do hardware, também chamada de camada de interface ou de acesso ao meio.
A principal função dessa camada é realizar a interface do modelo TCP/IP com os diversos modelos de rede, por exemplo o protocolo Ethernet , transmitindo os dados através dos meios físicos, encontrando e transmitindo tudo pelo melhor caminho possível. Esta camada lida com os meios de comunicação, corresponde ao nível de hardware, ou meio físico, que trata dos sinais eletrônicos, conector, pinagem, níveis de tensão, dimensões físicas, características mecânicas e elétricas, etc.

"""


# --------------------------------------------------------------------------- #
# - > CONTEÚDO do dia - 34.1 - <--- / FIM ---------------------------------- //
# #####################################
# - > AULA ao VIVO - 34.1 ----- <--- / INICIO ------------------------------ //
# --------------------------------------------------------------------------- #

# Foco de hoje
# ...

# --------------------------------------------------------------------------- #
# - > AULA ao VIVO - 34.1 ----- <--- / FIM --------------------------------- //
# #####################################
# - > EXERCÍCIO do dia - 34.1 - <--- / INICIO ------------------------------ //
# --------------------------------------------------------------------------- #

# Agora a prática

# Exercício 1: 

# --------------------------------------------------------------------------- #
# - > EXERCÍCIO do dia - 34.1 - <--- / FIM --------------------------------- //
# ########################################## Arquitetura de redes
# - Concluído ... ------------------------------------------------------------ #
