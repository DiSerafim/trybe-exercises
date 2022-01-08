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

# Exercício 1: 

# --------------------------------------------------------------------------- #
# - > EXERCÍCIO do dia - 34.2 - <--- / FIM --------------------------------- //
# ########################################## redes-de-computadores-ferramentas-e-seguraança
# - Concluído ... ------------------------------------------------------------ #
