# Bloqueie agora o tráfego de saída para HTTP. Lembre-se, também é utilizado o protocolo tcp e a porta 80 . Para testar sua regra, tente acessar um site pelo navegador que use HTTP .

# └─# iptables -A OUTPUT -p tcp --sport 80 -j REJECT
