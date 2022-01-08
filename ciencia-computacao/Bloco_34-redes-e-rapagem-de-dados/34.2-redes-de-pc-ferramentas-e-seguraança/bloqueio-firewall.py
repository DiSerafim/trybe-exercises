# Defina uma regra de firewall utilizando o comando iptables -A , que bloqueie (block ou REJECT/DROP) toda a entrada(in ou INPUT) de pacotes utilizando o protocolo ICMP , impedindo assim que a máquina responda ao comando ping . Lembre-se, você pode executar o comando ping para validar se sua regra está funcionando corretamente: ping 127.0.0.1 (você pode adicionar o parâmetro -O para exibir os pings rejeitados também 😉).

# terminal-1
# ping www.google.com

# terminal-2
# cria a regra
# 1 - └─# iptables -A INPUT -p icmp -j REJECT
# verifica se a regra foi criada
# 2 - iptables -L
# exclui a regra
# 3 - └─# iptables -D INPUT -p icmp -j REJECT