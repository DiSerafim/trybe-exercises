# Imprimir no console toda mensagem recebida (não esqueça de converter também para string).
# Responder com os dados recebidos (como um eco).
# Utilize a porta 8084.
# Dicas:
# todas as dicas do exercício 4 se aplicam
# telnet não funciona com udp -- use netcat

from socketserver import UDPServer, DatagramRequestHandler

ADDRESS = "", 8084

class EchoHandler(DatagramRequestHandler):
    """Responde requisições repetindo o que foi recebido."""
    def handle(self):
        # self.wfile e self.rfile são canais de entrada e saída
        # programados para ter a mesma interface de arquivos!
        for line in self.rfile:
            # esta linha responde o cliente
            self.wfile.write(line)
            # esta linha imprime no console
            print(line.decode("utf-8").strip())


if __name__ == "__main__":
    # usando with nosso TCPServer vai arrumar a casa direitinho quando encerrado
    with UDPServer(ADDRESS, EchoHandler) as server:
        server.serve_forever()