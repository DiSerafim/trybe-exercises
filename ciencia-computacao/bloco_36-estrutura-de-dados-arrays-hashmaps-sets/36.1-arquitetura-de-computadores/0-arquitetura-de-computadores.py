# ############################## Arquitetura de Computadores
# --> CONTEÚDO do dia - 36.1 - <--- / INICIO ----------------------------- //
# ############################## Arquitetura de Computadores

# 1 - Um pouco de história!
# 2 - Computadores Modernos
# 3 - Lógica binária
# 4 - Memória Principal - RAM
# 5 - Processador - CPU
# 6 - Barramentos
# 7 - Tipos de Memória
# 8 - Hierarquia das memórias
# 9 - Sistema Operacional
# 10- Sistema Operacional - Gerenciamentos

""" ---> OBJETIVO <---
- Conhecer os principais conceitos da arquitetura básica de computadores;
- Entender o funcionamento básico de uma CPU e suas características;
- Compreender o funcionamento da memória principal do computador;
- Conhecer os tipos de memória e suas diferenças (RAM, HD, SSD, etc.);
- Entender como os sistemas operacionais atuam nas máquinas e seus principais conceitos.
"""


# ---> Conteúdos <---

"""  --------------------------------------------------------------------------
| -> Um pouco de história! <-                                                 |
--------------------------------------------------------------------------- """
# Alan Turing e os primeiros computadores
# - considerado o pai da computação.
# - Alan Turing teve um papel fundamental na história dos computadores, sendo o responsável pelo conceito dos computadores modernos.
# https://youtu.be/wyZPsCQd7Uo


"""  --------------------------------------------------------------------------
| -> Computadores Modernos                                                    |
--------------------------------------------------------------------------  """
# Modelo de Von Neumann

# inventado em 1945 pelo matemático John Von Neumann , o Modelo de Von Neumann . Esse modelo define um computador como uma máquina que possui dois elementos principais: uma memória principal (como a memória RAM), onde podemos registrar e ler instruções e dados, e um processador (CPU), responsável por buscar tais informações, realizar os cálculos e armazenar os resultados novamente na memória.


"""  --------------------------------------------------------------------------
| -> Lógica binária                                                           |
--------------------------------------------------------------------------  """
# O sistema binário foi inventado pelo matemático alemão Gottfried Leibniz, no século 18.

# Os computadores processam informações baseando-se no sistema binário com os que são chamados bits.
# Um bit é a menor unidade em um sistema digital e pode assumir o valor 0 ou 1.
# Eletronicamente esse valor pode ser representado pela presença ou ausência de tensão ou corrente elétrica.

# O bit, que é representado por um "b" (minúsculo) e o agrupamento de 8 bits correspondem à 1 byte, representado por um "B" (maiúsculo).
# 1 byte é capaz de armazenar um valor decimal entre 0 e 255(0000 0000 e 1111 1111).

# - Convencionalmente, a presença de tensão ou corrente elétrica pode ser considerada como verdadeiro, 1, e a ausência como falso, 0;

# - Os dispositivos que podem se comportar como chaves eletrônicas, onde a tensão ou corrente na entrada resulta na presença ou ausência de uma tensão ou corrente na saída, são os transistores;

# - Transistores podem ser agrupados de maneira a formarem as portas lógicas NOT, AND, OR, XOR, dentre outras. Estas portas lógicas apresentam, para uma mesma combinação de valores de entrada(conjunto de fios com ou sem tensão/corrente elétrica 0s e 1s), a mesma saída;

# - Portas lógicas podem formar circuitos de soma de bits. Daí temos adição, subtração, multiplicação, divisão, e assim sucessivamente, sempre seguindo a lógica binária.


"""  --------------------------------------------------------------------------
 -> Memória Principal - RAM
--------------------------------------------------------------------------- """
# - memória principal para armazenamento das instruções e dos dados que serão processados.

""" Uma grande biblioteca """
# A memória principal pode ser vista como uma grande biblioteca, possuindo diversas prateleiras, cada uma com a capacidade de armazenar alguns livros.
# Para organizar e tornar fácil a localização de um livro entre os corredores e seções, cada prateleira possui um identificador único, um endereço, que permite que um livro específico seja facilmente localizado.

""" Células """
# Essas diversas "prateleiras" são as células da memória principal, cada uma sendo capaz de armazenar uma informação(ou um fragmento de uma) e, para localizá-las, são utilizados seus endereços, os chamados ADDRESSES ou ADDR.
# Cada célula pode armazenar diversas informações como dados para serem processados, incluindo endereços de outras células, instruções e resultados de processamentos.
# Essas informações são armazenadas em bits e as células possuem uma capacidade limitada de armazenamento: por exemplo, 8 bits (1 byte) por célula.

# A capacidade total da memória é dada pela quantidade de suas células vezes a capacidade de armazenamento de cada uma. Por exemplo, uma memória com 1024 células de 8 bits (1 byte) tem a capacidade de armazenar 1024 bytes (8192 bits), ou 1KB (você pode imaginar como são formadas aquelas memórias de 4GB ou 8GB).

""" Endereços """
# address ou ADDR, estes são um conjunto de números que, para o computador, é representado por um número binário como todo o resto, ou seja, utilizando somente os dígitos 0 ou 1.


"""  --------------------------------------------------------------------------
 -> Processador - CPU
--------------------------------------------------------------------------- """
# A CPU, unidade central de processamento, funciona em conjunto com a memória principal, lendo e executando as instruções e dados armazenados nela e gravando o resultado de tais processamentos.
# Um de seus componentes é a "ALU"(unidade lógico-aritmética) que é responsável por realizar operações lógicas(como as realizadas pelas portas lógicas AND, OR, etc, e aritméticas.

# O processador possui células internas de memória, chamadas de registradores.
# Neles o processador irá armazenar os dados lidos da memória que está usando no processamento.
# As operações a serem realizadas também são representados como números na memória, e um conjunto delas forma o que chamamos de uma instrução.
# Por exemplo: "realizar uma soma".
# A CPU funciona executando um loop desde sua inicialização, onde ela realiza a leitura de algumas instruções pré-definidas, executa elas e então passa a buscar e consequentemente a executar as instruções na memória.

# A CPU pode ler da memória uma instrução, indicando para definir o valor do endereço #1000 0000 para 1000 1010.
# A partir disso, ela enviará um comando para a memória principal para atribuir o valor 1000 1010 para a célula de endereço #1000 0000.
# Da mesma forma, o processador consegue realizar outras operações matemáticas básicas buscando os dados de entrada e as instruções na memória e, então, salvando os resultados também na memória principal.

# Dessa forma, tudo no computador é sempre tratado como dados e instruções e tudo utilizando números através da representação binária. Pense no que é um monitor de computador: uma matriz de pequenas luzes que chamamos de pixels . Cada pixel é composto por três luzes: uma vermelha ( R ), uma verde ( G ) e uma azul ( B ). Um byte codifica, em oito bits, o quão intensamente cada uma dessas três luzinhas deve se acender. Se quisermos exibir uma imagem em um monitor com resolução de 1280 pixels horizontais por 720 pixels verticais (HD), são necessários 1280 x 720 x 3 = 2.764.800 bytes (quase 3MB)

""" Operações por segundo """
# Para gerenciar todas as atividades e a comunicação entre os componentes do computador existe um componente eletrônico que gera um sinal de "clock". Esse sinal é uma alternância entre tensões altas e baixas a cada fração de tempo, seguindo a mesma ideia de representação de 0 e 1.

# A frequência do clock é medida em hertz (Hz), ciclos por segundo. O número de operações básicas capazes de serem executadas em 1 segundo. O período de um clock é o tempo entre uma operação e outra.

# um computador com um processador com frequência de 1Hz consegue realizar uma operação básica por segundo. Esse número costuma ser muito maior, como 2GHz, o que significa que essa CPU consegue realizar cerca de 2 bilhões de operações básicas (ciclos) por segundo, cada ciclo demorando 0,0000000005 segundos ou 0,5 nanossegundos.

# Um processador não necessariamente consegue executar uma instrução por ciclo. Isto depende de sua arquitetura. Em processadores de computadores Desktop normalmente uma instrução possui de 5 a 10 operações básicas, fazendo com que a execução de uma instrução demore mais do que somente um ciclo.

# Um quad-core (4 núcleos) com 2GHz, por exemplo, pode executar por volta de 1 bilhão de instruções por segundo, com algumas operações básicas cada uma.


"""  --------------------------------------------------------------------------
 -> Barramentos
--------------------------------------------------------------------------- """
#  processador está constantemente buscando por instruções na memória e dados a serem processados e devolvendo os resultados desses processamentos para a memória. E como isso é feito?

# Esses dados são lidos e gravados em registradores do processador, esse processo sendo chamado de load . E a outra operação é quando o processador precisa armazenar dados na memória, como os resultados dos processamentos e das operações que ele realizou durante uma operação, esse processo é chamado de store.

# Essas comunicações dos componentes são realizadas a partir de "vias" que ligam os dois componentes. Essas vias são chamadas de "barramentos", que são, você pode pensar, conjuntos de fios.
# ambos componentes utilizam números binários representados por grandezas elétricas (tensão/corrente), dessa forma, os barramentos conseguem comunicá-los transmitindo essas grandezas.

# Basicamente a memória principal é ligada a CPU por 3 dessas vias:
# - Endereço (ADDR): Indica o endereço da célula de memória para aquela operação;
# - Dados (DATA): Transfere a informação da memória para a CPU e vice-versa.
# - Controle (CTRL): Indica a "direção" dos dados para a operação, ou seja, se os dados serão transferidos da CPU para a memória (escrita) ou da memória para a CPU (leitura).

# um exemplo desse componente com 1 de suas vias, o barramento de endereço:
# - como há um fio responsável por transferir cada bit, tanto o tamanho dos dados como o tamanho do endereço irá respeitar o limite de suas respectivas vias. a memória está recebendo um comando para operar a célula 1011 0001, sendo necessários 8 fios para transmitir esse endereço.

# como fica a arquitetura com os 3 barramentos.
# - as vias de endereço como a de controle são unidirecionais, ou seja, a informação sempre irá ser recebida pela memória. Já a via de dados é bidirecional, sendo definida a direção a partir do valor recebido pela via de controle indicando se é uma "escrita" ou uma "leitura".

# simulando uma operação de leitura e uma de escrita.
# - Quando 1 , temos uma escrita e consequentemente a nova informação, enviada através do barramento de dados. A informação é enviada para a memória e gravada na célula no endereço informado no devido barramento;
# - Quando 0 , temos uma leitura e, então, o barramento de dados retorna com o valor lido na célula de endereço passado.


"""  --------------------------------------------------------------------------
 -> Tipos de Memória
--------------------------------------------------------------------------- """
# Memórias são todos os dispositivos capazes de armazenar dados de maneira temporária ou permanente.

# Na arquitetura de computadores, dividimos as memórias em dois grandes grupos: "memórias primárias" e "memórias secundárias".

""" memórias primárias """
# - os dados e programas em execução são armazenados de maneira temporária para serem processadas pela CPU. São memórias de acesso rápido, com armazenamento de um menor volume de dados, que em geral, não conseguem guardar a informação quando são desligados.

""" memórias secundárias """
# - onde os dados (arquivos) são armazenados. Possuem um acesso mais lento, mas são capazes de armazenar permanentemente grandes volumes de dados.


"""  --------------------------------------------------------------------------
 -> Hierarquia das memórias
--------------------------------------------------------------------------- """
# -Essa hierarquia faz com que os dados que são acessados com mais frequência sejam armazenados em memórias de acesso mais rápido. Por exemplos, os dados que estão sendo trabalhados pela CPU. Enquanto isso, os outros dados acessados com menos frequência são armazenados em memórias mais baratas e lentas como, por exemplo, nossos arquivos no HD.

# Em geral a hierarquia é composta da seguinte maneira:
"""
Registrador
Memória Cache
Memória Principal(RAM e ROM)
Memória Secundária ou de massa(disco rigido, cd/dvd, pendrive)
"""
# Na ponta superior da pirâmide estão os "registradores", utilizados para armazenar um volume pequeno de dados, possuindo altíssima velocidade.

# Na sequência temos os caches L1 , L2 e L3. Esses componentes são de acesso mais rápido do que a memória principal(sendo o L1 o mais rápido, em seguida o L2 e depois o L3) e são integrados à CPU.
# As "memórias cache" são utilizadas para armazenar alguns dados de maneira estratégica, como os dados que são lidos com maior frequência na RAM. Dessa forma, ao terem os dados encontrados nesses dispositivos, não é necessário buscá-la na memória principal, aumentando a performance do computador, tendo em vista que as chamadas a eles são centenas de vezes mais rápidas do que para a RAM.

# Seguindo a hierarquia temos as memórias RAM e as memórias ROM (Read-Only Memory), sendo essa segunda memória somente leitura, que são um tipo de memória que não permite a escrita de dados, porém seus dados não são perdidos quando ela é desligada. Em geral essas memórias são utilizadas para guardar configurações mais básicas do sistema como, por exemplo, os dados para inicializar alguns componentes do computador.

# Por último temos as memórias secundárias, como HDs, SSDs, CD/DVDs, pendrives e afins. Esses dispositivos são mais lentos por fazerem a gravação física das informações nos dispositivos, porém, não perdem informações quando desligados e são capazes de armazenar grande volume de dados.

""" Velocidade versus volatilidade: """
# memórias de escrita e leitura mais rápidas tendem a ser voláteis, ou seja, quando o computador é desligado os dados da memória são apagados ! Nos HDs (não voláteis) isso não acontece. Na memória RAM (volátil) sim.
""" Velocidade versus capacidade: """
# memórias mais rápidas costumam ser mais caras, e por isso costumam ser comercializadas com capacidades menores. Um pente de 8GB de RAM custa aproximadamente o mesmo que um SSD de 240GB ou que um HD de 1TB.


"""  --------------------------------------------------------------------------
 -> Sistema Operacional
--------------------------------------------------------------------------- """
# Eles realizam os complexos processos de interação com o hardware, assim como outros, de forma que possamos nos preocupar somente com a realização da tarefa que desejamos.

# Esse foi o motivo pelo qual os sistemas operacionais impulsionaram a revolução dos computadores, permitindo que usuários comuns, sem prévios conhecimentos de ciência da computação e eletrônica, pudessem utilizar de maneira fácil essas poderosas máquinas.
# https://youtu.be/Vb0iORewZDA


"""  --------------------------------------------------------------------------
 -> Sistema Operacional - Gerenciamentos
--------------------------------------------------------------------------- """
# Windows, MacOS, Linux e outros SOs (como Android, iOS, etc!) possuem vantagens, desvantagens e particularidades.

# os diversos sistemas operacionais compartilham de um conceito principal: realizam a gerência do hardware e sua interação com os softwares, controlando os processos, arquivos, memória, rede e os dispositivos conectados ao computador.

# Dessa forma, ele trabalha como um intermediário, fazendo com que ambos, software e hardware, interajam corretamente e garantindo que todas as partes trabalhem juntas como um "time", agindo como um líder responsável por manter a harmonia entre sistemas de memória, arquivos, processos, dispositivos, etc.

""" Memória """
# - A memória é gerenciada pelo SO: ele realiza a troca de dados com o processador, a memória principal e a memória secundária, buscando por espaços vazios na memória e os preenchendo com dados para o funcionamento de programas e comandos. Esse processo é chamado de alocação.
# Ao longo da evolução dos computadores, esse processo foi evoluindo para se tornar cada vez mais eficiente, utilizando a arquitetura e as características que vimos.
# https://youtu.be/o3pAMI4ZlRY

""" Processos """
# - O SO também decide como será realizada a distribuição dos diversos processos para serem executados pelo "cérebro" do computador, a CPU. A partir daí ele acompanha os estados da execução desses processo realizando os devidos tratamentos, como voltar ou remover o processo da fila de processamentos.

# Executa no terminal
""" ps auxww """
# O que foi exibido no seu terminal são todos os processos que estão sendo gerenciados nesse momento pelo seu SO.
# ps funciona como se fosse uma fotografia dos processos no momento que você o executa

""" top ou htop """
# Perceba que no cabeçalho do comando já é exibido os totais por status dos processos em sua máquina, em seguida temos algumas médias do uso dos recursos e em seguida a listagem dos processos.

""" Arquivos """
# O SO também controla os arquivos do computador, sejam eles arquivos de dados, de programas ou aplicativos instalados. Através da interface do SO, conseguimos navegar entre diretórios armazenados nos diversos dispositivos de memória secundária do nosso computador, seja o HD, um pendrive ou nosso celular que esteja conectado em nossa máquina, sendo possível abrir, criar, deletar, copiar e editar arquivos.


# --------------------------------------------------------------------------- #
# - > CONTEÚDO do dia - 36.1 - <--- / FIM ---------------------------------- //
# #####################################
# - > AULA ao VIVO - 36.1 ----- <--- / INICIO ------------------------------ //
# --------------------------------------------------------------------------- #

# Foco de hoje
# ...Arquitetura de Computadores
""" teminal python3 """



# --------------------------------------------------------------------------- #
# - > AULA ao VIVO - 36.1 ----- <--- / FIM --------------------------------- //
# #####################################
# - > EXERCÍCIO do dia - 36.1 - <--- / INICIO ------------------------------ //
# --------------------------------------------------------------------------- #

# Agora a prática
"""
Exercício 1: 
"""
# --------------------------------------------------------------------------- #
# - > EXERCÍCIO do dia - 36.1 - <--- / FIM --------------------------------- //
# ################################ Arquitetura de Computadores
# - Concluído ... ----------------------------------------------------------- #

# Recursos adicionais (opcional)
"""  """
