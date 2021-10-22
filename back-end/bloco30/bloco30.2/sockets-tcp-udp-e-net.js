// ============================== NodeJS - Sockets - TCP/UDP & NET
// -- > CONTEÚDO do dia - bloco30.2 -- <---/ INICIO --------------------------------------//
// ==============================

// ### O que são Sockets?
// ### Como isso funciona?
// ### Modelo OSI, TCP e UDP
// ### TCP e UDP
// ### Sockets TCP
// ### Show me the code!

// * Usar o pacote NET do Node.js para criar aplicações que trafeguem mensagens através de sockets .

// **** Conteúdo

// >>>> O que são Sockets?
// - é um mecanismo de comunicação usado normalmente para implementar um sistema de cliente e servidor, sendo o cliente quem requisita um serviço e servidor quem executa esse serviço, assim como as APIs, que permitem a troca de mensagens entre máquinas/aplicações.

// >>>> Como isso funciona?
// - como uma “sala” de chat. Na prática, essa aplicação irá receber uma conexão dos clientes/usuários e, posteriormente, se um cliente enviar uma mensagem, o servidor irá enviá-la para todos os outros clientes para que a mensagem seja exibida para todo mundo.

// De forma geral, sempre haverá um server e um cliente, ou seja, uma aplicação que cria um socket servidor e uma outra aplicação que implementa um cliente. Existem, principalmente, dois tipos de sockets: socket stream , tipicamente implementados via TCP, e socket dgram , tipicamente implementados via UDP.

// >>>> Modelo OSI, TCP e UDP

// # Modelo de camadas OSI
// - (Open System Interconnection) é um modelo de rede de computador, referência da ISO , dividido em camadas de papéis. ISO é uma sigla para International Organization for Standardization , ou Organização Internacional para Padronização, em tradução livre. A ISO é uma entidade de padronização e normalização mundial que garante a qualidade de serviços, produtos, metodologias etc.

// o modelo OSI, que estabelece regras/padrões de comunicação entre dois dispositivos da rede, a serem seguidos independentemente das empresas envolvidas.

// por ser um sistema aberto, ele apresenta características como escalabilidade, interoperabilidade, portabilidade e compatibilidade.

// # Camada 1: Física
// - É a camada que estabelece a comunicação real entre os dois dispositivos por meio físico, seja através do cabo de internet, seja através de onda de radiofrequência, como por exemplo a wifi, dentre outras.

// # Camada 2: Enlace (ligação/link de dados)
// - Faz o controle de fluxo da transmissão dos dados, detectando e corrigindo erros do nível físico como instabilidades, interferências, e recebe/passa tudo para a camada física.

// # Camada 3: Rede
// - Realiza o endereçamento/mapeamento dos dispositivos na rede, ou seja, quais os caminhos que as informações devem percorrer desde a origem até o destino.

// # Camada 4: Transporte
// - A camada de transporte garante a confiança do pacote, o qual chegará na máquina com todos os dados necessários e enviados, sem perdas, erros ou duplicidade, além de obedecerem a uma sequência lógica. A unidade dessa camada é o segmento, e os protocolos de transporte são o TCP e o UDP.

// # Camada 5: Sessão
// - É responsável por manter o controle de quando iniciar, gerenciar e terminar a conexão entre os hosts . Ou seja, é essa camada que controla as duas ou mais máquinas que estão se comunicando.

// # Camada 6: Apresentação
// - Esta camada realiza a conversão dos formatos dos dados, de forma que sejam utilizados na transmissão. Há a compressão e criptografia para que o receptor possa entender os dados.

// # Camada 7: Aplicação
// - É com essa camada, que são os softwares, que nós, desenvolvedores/usuários, interagimos no nosso dia a dia. Essa camada é, basicamente, a interface com que interagimos. É nela que o HTTP, SMTP, FTP etc. atuam.


// # Como funcionam essas camadas?
// - A camada de cima (7) vai passar dados para a de baixo (6), que fará o chamado "encapsulamento" dos dados, acrescentando informações de controle que dizem respeito a ela.

// Assim, vai ocorrendo o encapsulamento dos dados camada a camada, da 7 para a 1. Começamos com dados e terminamos com bits, que serão transmitidos pelo meio físico (camada 1).

// Quando a informação chega ao dispositivo de rede receptor ocorre o processo inverso, conhecido como "desencapsulamento". Os bits recebidos passam de camada para camada até se tornarem dados novamente.

// # TCP/IP
// - a arquitetura TCP/IP é que implementa esse modelo na prática e está em uso hoje em dia, tanto nas redes internas (intranets) quanto na internet.

// A arquitetura TCP/IP é composta por apenas quatro camadas (formando a pilha da estrutura do protocolo). As camadas 5, 6 e 7 do modelo OSI foram mescladas para formar a camada de "Aplicação" do TCP/IP.

// Já as camadas 3 e 4 do modelo OSI são similares às camadas 2 e 3 do TCP/IP, inclusive a camada de transporte do TCP/IP tem o mesmo nome, porém a camada 3 do modelo OSI (rede) no TCP/IP é chamada de "Internet".

// as camadas 1 e 2 do modelo OSI foram mescladas no TCP/IP para formar a camada de acesso aos meios ou acesso à rede.

// # Resumindo
// - O Modelo OSI possui sete camadas;
// - O TCP/IP está dividido em quatro camadas;
// - As camadas 1 e 2 do modelo OSI estão agregadas na camada 1 do TCP/IP ou, como é chamada, camada de Acesso aos Meios;
// - A camada 3 do modelo OSI (Redes) é chamada de Internet no TCP/IP;
// - A camada 4, tanto no modelo OSI como no TCP/IP, é chamada de Camada de Transporte;
// - As camadas 5, 6 e 7 do modelo OSI são agregadas em uma só camada no TCP/IP, a qual é chamada de Camada de Aplicação.

// >>>> TCP e UDP

// # TCP
// - No TCP, no estabelecimento de ligação entre o server e o cliente há um “pré-acordo” entre cliente e servidor denominado de Three Way Handshake ( SYN , SYN-ACK , ACK ).

// é como uma conversa:
Cliente: SYN Quero me conectar!
Servidor: ACK Mensagem recebida!
Servidor: SYN Vamos nos conectar!
Cliente: ACK Mensagem recebida!

// exemplo, queremos transmitir um arquivo que ocupa 500MB. Esse arquivo terá de ser dividido em partes menores de "x" MB ou KB. Usando o protocolo TCP, existe a garantia de que todos os pacotes serão entregues e reordenados (juntados) "no outro lado", sendo a camada de transporte que garante que, do outro lado, os pacotes vão ser reunidos na ordem correta. A cada pacote recebido, a máquina de destino confirma que recebeu essa informação ao emissor e, no caso de falha de algum pacote, a máquina de destino pede ao emissor a retransmissão do(s) pacote(s) em falta.

// # UDP
// - usando UDP, uma máquina emissora envia uma determinada informação e a máquina receptora recebe essa informação, não existindo qualquer confirmação dos pacotes recebidos. Se um pacote se perder não existe solicitação de reenvio, pois o protocolo não foi programado para fazer isso.

// >>>> Sockets TCP
// - Sockets são uma abstração para endereços de comunicação através dos quais as máquinas se comunicam. Cada endereço tem um identificador único, composto pelo endereço da máquina e o identificador local da porta usado pelo processo/software. Ou seja, o endereço é o nosso próprio IP, e a porta é a porta que conhecemos, 127.0.0.1:3000 , ou localhost:3000 .

// O servidor tem uma aplicação que é posta em uma determinada 'porta' e aguarda por conexões nessa 'porta'. O cliente deve saber previamente qual o nome ou IP do servidor e a respectiva 'porta' onde a aplicação foi colocada à espera de conexões. Por fim, o cliente solicita uma conexão ao host (servidor)

// Se nenhum problema ocorrer, o servidor aceita a conexão e gera um socket em uma porta vaga no servidor,

// Tipicamente, o comportamento do servidor é ficar em loop, aguardando novas ligações e “gerando” sockets para atender às solicitações de clientes.

// >>>> Show me the code!
// Nesta sessão veremos o básico sobre a implementação e transferência de dados via TCP usando o Node.js .

// documentação do pacote net
https://nodejs.org/api/net.html#net_event_close_1

// close
// - "hadError": boolean | true , se o socket tiver um erro de transmissão;
// - Emitido quando o soquete estiver totalmente fechado. O argumento "hadError" é um booleano que indica se o soquete foi fechado devido a um erro de transmissão.

// connect
// - Emitido quando uma conexão de soquete é estabelecida com sucesso.

// data
// - Buffer | string ;
// - Emitido quando os dados são recebidos. O argumento "data" será um Buffer ou String. A codificação de dados é definida por socket.setEncoding() ;
// - Os dados serão perdidos se não houver um ouvinte quando um socket emitir um "data" evento.

// drain
// - Emitido quando o buffer de gravação fica vazio. Pode ser usado para acelerar envios;
// - Consulte também: os valores de retorno de socket.write() .

// end
// - Emitido quando a outra extremidade do socket envia um pacote "FIN", finalizando assim o lado legível do socket.
// - Por padrão (allowHalfOpen é false), o socket envia um pacote FIN de volta e destrói seu descritor de arquivo depois de gravar sua fila de gravação pendente. No entanto, se allowHalfOpen estiver definido como true, o socket não terá automaticamente o "end()", seu lado gravável, permitindo que o usuário grave quantidades arbitrárias de dados. O usuário deve ligar o end() explicitamente para fechar a conexão (isto é, enviar um pacote FIN de volta).

// error
// - Erro ;
// - Emitido quando ocorre um erro. O evento "close" será chamado diretamente após esse evento.

// lookup
// - Emitido após resolver o nome do host, mas antes de conectar. Não aplicável a sockets Unix;
// - "err": Erro | nulo é o objeto de erro;
// - "address": string é o endereço IP;
// - "family": string | null é o tipo de endereço;
// - "host": string é o nome do host.

// ready
// - Emitido quando um socket está pronto para ser usado;
// - Disparado imediatamente depois do 'connect'.

// timeout
// - Emitido se o socket exceder o tempo de inatividade. Isso é apenas para notificar que o socket está ocioso. O usuário deve fechar manualmente a conexão.

// mão na massa!

// └─# mkdir tcp-udp-net && cd tcp-udp-net
// └─# npm init -y      

// * tcp-udp-net/server.js

// após termos codificado o "server", vamos agora para o "client". 

// * tcp-udp-net/client.js

// # resultado

// 1º executar o servidor
// └─# node server.js

// 2º executar o cliente
// └─# node client.js         

// - Concluido \o/

// ==============================
// -- > CONTEÚDO do dia - bloco30.2 -- <---/ FIM -----------------------------------------//
// ==============================
// -- > AULA ao VIVO - bloco30.2 ----- <---/ INICIO --------------------------------------//
// ==============================

// ### Construindo um chat
// comunicaçao entre terminais

// └─# mkdir chat-aovivo && cd chat-aovivo
// └─# touch server.js client.js               
// └─# npm init -y   
// └─# npm i nodemon -D

// servidor
// * server.js
// └─# npm start

// cliente 1
// * client.js
// └─# node client.js

// cliente 2
// * client.js
// └─# node client.js

// concluido ...???

// ==============================
// -- > AULA ao VIVO - bloco30.2 ----- <---/ FIM -----------------------------------------//
// ==============================
// -- > EXERCÍCIO do dia - bloco30.2 -- <---/ INICIO --------------------------------------//
// ==============================

// # Agora, a prática


// # Recursos adicionais

// Documentação

// ==============================
// -- > EXERCÍCIO do dia - bloco30.2 -- <---/ FIM -----------------------------------------//
// ============================== NodeJS - Sockets - TCP/UDP & NET
// ...
