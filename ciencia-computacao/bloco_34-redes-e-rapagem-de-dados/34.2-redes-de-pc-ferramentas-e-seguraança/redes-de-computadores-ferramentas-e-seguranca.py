# ########################################## redes-de-computadores-ferramentas-e-seguraança
# --> CONTEÚDO do dia - 34.2 - <--- / INICIO ----------------------------- //
# ########################################## redes-de-computadores-ferramentas-e-seguraança

# Protocolos Seguros
# Firewall e Proxy
# Proxy

""" ---> OBJETIVO <---
- Entender o funcionamento de ataques como o DDoS;
- Entender o que é e como realizar uma conexão segura utilizando SSH;
- Entender o que são certificados e como a criptografia é utilizada na internet;
- Entender o que são proxies;
- Entender o que é e como utilizar um firewall;
- Gerenciar regras no firewall padrão do linux.
"""


# ---> Conteúdos <---

"""  --------------------------------------------------------------------------- 
| -> Protocolos Seguros <-           # HTTPS, SSH, TLS e SSL                   |
---------------------------------------------------------------------------  """

""" SSL/TLS e HTTPS """

# Tanto o "SSL ( Secure Sockets Layer )" quanto o "TLS ( Transport Layer Security )" são protocolos que implementam uma camada (layer) de segurança na rede, sendo o TLS o sucessor do SSL (simplificadamente). 

# "HTTPS (Hyper Text Transfer Protocol Secure)" é o protocolo HTTP, com uma camada adicional de segurança utilizando o protocolo SSL/TLS.


"""  --------------------------------------------------------------------------- 
| -> Firewall e Proxy <-             # DoS / DDoS                              |
---------------------------------------------------------------------------  """

""" DDoS """
# (Distributed Denial of Service), ou ataque distribuído de negação de serviço.
# Esse ataque tem como objetivo tirar o serviço do ar, tornando-o temporariamente indisponível.

""" Brute Force """
# "força bruta", onde indivíduos, robôs ou scripts maliciosos que tentam diversas combinações de usuário e senha, com o objetivo de encontrar as corretas e acessar indevidamente um sistema.

""" firewalls """
# Na maioria dos sistemas operacionais existem subsistemas de filtragem de pacotes e ferramentas para gerenciamento de firewall.

""" Iptables e Netfilter """
# O sistema padrão para filtragem de pacotes do linux é o "Netfilter":
# http://netfilter.org/
# O "Iptables" é, então, o firewall padrão do linux e está presente na maioria das distros.
# - Ele compara o tráfego de rede que recebe ou envia com um conjunto de regras pré estabelecidas. Essas regras definem as características que um pacote deve possuir e a ação que deve ser tomada para esse tipo de pacote. Podemos criar regras por protocolo, porta de origem/destino, endereço IP, entre outros.

#  Iptables é formada por "tabelas". conhecidas como cadeias e cada uma possui tipos de regras específicas. Por exemplo, a cadeia "filter" que possui todas políticas (regras) responsáveis por controlar o tráfego que entra ou sai do computador.

""" Fail2ban """
# é um IPS ( Intrusion Prevention System - Sistema de Prevenção de intrusos).
# - Essa ferramenta, de maneira simples, monitora os logs da rede e, de maneira proativa, ao detectar comportamento suspeito, como diversas requisições de um mesmo IP ou diversas tentativas de login SSH, ele criar regras noiptables , de modo a rejeitar aquele endereço de IP específico por determinado tempo.


"""  --------------------------------------------------------------------------- 
| -> Proxy <-                                                                  |
---------------------------------------------------------------------------  """
# O proxy provém uma camada a mais de controle entre a internet e os dispositivos da rede, e pode ser utilizado para diversos fins.

# Um uso comum dos proxies é como uma espécie de filtro que, através de características de uma conexão, ou tráfego, consegue determinar se esse tráfego deve ser feito ou não.

# para evitar acessos a redes sociais em escritórios o proxy pode ser utilizado para reconhecer palavras chaves em URLs e então recusá-la. Além disso, eles podem impedir que pessoas usuárias acessem sites com conteúdos impróprios ou com potencial de ser uma página maliciosa.


# --------------------------------------------------------------------------- #
# - > CONTEÚDO do dia - 34.2 - <--- / FIM ---------------------------------- //
# #####################################
# - > AULA ao VIVO - 34.2 ----- <--- / INICIO ------------------------------ //
# --------------------------------------------------------------------------- #

# Foco de hoje
# ... redes-de-computadores-ferramentas-e-seguraança

""" Ferramentas: Ping, Traceroute, Proxy, SSH, VPN, Certificado SSL, Firewall, Fail2ban... """

# Ping - Packet Internet Network Group(Agrupador de pacotes da internet)
# - testa se a rota esta funcionando
# └─# ping google.com
# └─# ping -c 4 -s 50 www.google.com

# Traceroute
# - mostra o caminho percorrido até determinado site
# └─# traceroute www.google.com

# Proxy
# - faz o redirecionamento, gerenciamendo de acesso, limitação de acesso

# SSH
# - conecta a outra maquina, via linha de comando
# └─# ssh root@127.168.10.1

# VPN - Virtual Private Network
# - permite criar conexões privadas e mais seguras
# - VPN usa criptografia

# Certificado SSL
# - http (Sem SSL) site vunerável
# - https (Com SSL) site mais seguro

# Firewall
# - controla as requisições, podendo aceitar ou bloquear

# Fail2ban
# - Limita o numero de tentativas de acesso

# Iptables
# - bloquei conexões(local) e ou endereços IP

# Terminal-1, faz o ping
# └─# ping 127.0.0.1

# Terminal-2, cria a regra (-A)
# └─# iptables -A INPUT -p icmp --icmp-type echo-request -j DROP (retorna um aviso)
# └─# iptables -A INPUT -p icmp --icmp-type echo-request -j REJECT (não retorna aviso)
# └─# iptables -A INPUT -p icmp --icmp-type echo-request -m limit --limit 6/minute -j ACCEPT (aceita)
# └─# iptables -A INPUT -p icmp --icmp-type echo-request -j REJECT (rejeia a cada 10seg, de acordo co m a regra acima)

# Terminal-2, deleta a regra (-D)
# └─# iptables -D INPUT -p icmp --icmp-type echo-request -j DROP

# verifica se a regra foi criada e ou deletada
# └─# iptables -L

# Apaga todas as regras
# └─# iptables --flush


# --------------------------------------------------------------------------- #
# - > AULA ao VIVO - 34.2 ----- <--- / FIM --------------------------------- //
# #####################################
# - > EXERCÍCIO do dia - 34.2 - <--- / INICIO ------------------------------ //
# --------------------------------------------------------------------------- #

# Agora a prática

# Exercício 1 : Defina uma regra de firewall utilizando o comando iptables -A , que bloqueie (block ou REJECT/DROP) toda a entrada(in ou INPUT) de pacotes utilizando o protocolo ICMP , impedindo assim que a máquina responda ao comando ping . Lembre-se, você pode executar o comando ping para validar se sua regra está funcionando corretamente: ping 127.0.0.1 (você pode adicionar o parâmetro -O para exibir os pings rejeitados também 😉).
# R = ./bloqueio-firewall.py

# Exercício 2 : Exclua a regra anterior utilizando o parâmetro -D .
# R = ./bloqueio-firewall.py

# Exercício 3 : Agora vamos criar uma regra para bloquear o tráfego HTTPS. Para isso, iremos bloquear a saída de pacotes ( out ou OUTPUT ). Lembre-se, a porta padrão para esse protocolo é a 443 , para especificá-la utilize o parâmetro --sport . Ele utiliza também o protocolo tcp . Para testar sua regra, tente acessar um site pelo navegador que use o protocolo, como o Youtube, o Google ou o Facebook.
# R = ./bloqueia-trafego-https.py

# Exercício 4 : Bloqueie agora o tráfego de saída para HTTP. Lembre-se, também é utilizado o protocolo tcp e a porta 80 . Para testar sua regra, tente acessar um site pelo navegador que use HTTP .
# R = ./bloqueia-trafego-http.py

# Exercício 5 : Para finalizar, vamos limpar todas as regras. Para isso, utilize o comando --flush do iptables (Linux).
# R = ./apaga-todas-as-regras.py

# Exercício 6 : Agora, vamos utilizar um tipo de proxy bem legal que pode ser bastante útil no nosso dia como pessoas desenvolvedoras: o NGROK . Com ele conseguimos criar um túnel para o nosso localhost .
# 6.1 - Crie um servidor HTTP em sua máquina executando na porta 80 , pode ser um front-end ou um back-end criado em aulas anteriores.
# 6.2 - Baixe o ngrok e extraia o arquivo baixado em uma pasta de sua preferência, conforme instruções no site oficial .
# 6.3 - Conforme instruções do site, crie um túnel para a porta 80 de sua máquina.
# 6.4 - Acesse o o link disponibilizado em seu navegador. Utilize ele para acessar de outros dispositivos, como seu smartphone ou outro computador 😎.
# ./criando-proxy.py

# Exercício 7 : No conteúdo vimos o que são os protocolos SSL e TLS. Vamos subir nosso próprio servidor HTTPS, utilizando nosso próprio certificado!
# 7.1 - Vamos utilizar a ferramenta OpenSSL para gerar nossos certificados. Ela já vem instalada na maioria das distros Linux. No Docker, no entanto, você vai precisar executar:
# $ apt-get update && apt-get install python3 openssl
# R = ./cria-servidor-e-certificado.py

# 7.2 - Para gerar nosso próprio certificado auto-assinado, utilize os comandos abaixo. Lembrando que, como nós estamos gerando o certificado, ele não será reconhecido por nenhuma entidade certificadora, de modo que ele só nos servirá para utilizar o protocolo TLS com o HTTPS, não sendo capaz de ser aceito pelo navegador.
# $ openssl genrsa -out key.pem
# $ openssl req -new -key key.pem -out csr.pem
# $ openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
# $ rm csr.pem
# R = ./cria-servidor-e-certificado.py

# 7.3 - Acabamos de gerar dois arquivos, o cert.pem (o certificado) e o key.pem (chave privada). Copie os dois arquivos para um diretório onde iremos criar nosso servidor HTTPS.
# R = ./cria-servidor-e-certificado.py

# 7.4 - Agora vamos escrever um servidor https usando os módulos nativos do python ssl e http.server . Embora esses módulos tenham muitos muitos recursos (muitos mesmo), nós vamos usar apenas alguns. Tente seguir as instruções a seguir:
# 7.4.1 Crie um contexto SSL com a classe SSLContext , usando o protocolo de versão mais alta disponível para servidores. (dica: as opções estão listadas na documentação).
# 7.4.2 Carregue no contexto SSL a cadeia de certificação, passando tanto a o arquivo de certificação quanto a sua chave. (dica: existe um método para isso). 
# 7.4.3 Crie uma instância de HTTPServer . O endereço deve ser uma tupla ('localhost', 8000) e para responder as requisições, use SimpleHTTPRequestHandler . (dica: apesar do exemplo na documentação, não use with .) 
# 7.4.4 Crie um socket server-side usando o método wrap_socket do seu contexto SSL. Passe como parâmetro o socket do servidor ( server.socket ). 
# 7.4.5 Substitua o socket do servidor pelo socket que vc acabou de criar. 
# 7.4.6 Execute o servidor com o método serve_forever .
# R = ./cria-servidor-e-certificado.py

# 7.5 - Acesse o servidor no endereço https://localhost:8000/ utilizando o Firefox (precisa ser o Firefox!). Perceba que ele irá informar que o certificado não é reconhecido por ele, pois não foi assinado por nenhuma autoridade da confiança dele.
# 7.5.1 Chrome e Safari se recusam a acessar um site cujo certificado não está assinado por NENHUMA autoridade certificadora (existem instruções para agir como uma autoridade certificadora mas não precisa seguir por esse caminho).
# R = ./cria-servidor-e-certificado.py

# 7.6 Acesse o servidor novamente, porém, desta vez utilizando cURL (de fora do Docker, se vc estiver usando).
# R = ./cria-servidor-e-certificado.py

# 7.7 Por último, vamos utilizar um recurso do cURL, somente para testes (somente utilize, caso realmente você esteja esperando por aquilo), que é o parâmetro -k ou --insecure . Com ele, falamos para o nosso cURL prosseguir a request mesmo sabendo que a conexão não é "confiável".
# R = ./cria-servidor-e-certificado.py

# --------------------------------------------------------------------------- #
# - > EXERCÍCIO do dia - 34.2 - <--- / FIM --------------------------------- //
# ########################################## redes-de-computadores-ferramentas-e-seguraança
# - Concluído \o/ ------------------------------------------------------------ #
