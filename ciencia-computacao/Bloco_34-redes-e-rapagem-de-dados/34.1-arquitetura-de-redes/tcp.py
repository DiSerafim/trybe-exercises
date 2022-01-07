from socketserver import StreamRequestHandler, TCPServer


class TCPHandler(StreamRequestHandler):
    def handle(self):
        self.wfile.write("Olá Cliente\n")

        while True:
            data = self.rfile.readline().strip().decode("UTF-8")
            if not data:
                self.wfile.write(b"Cliente desconectado\n")
            print(data)



if __name__ == "__main__":
    server_address = ("localhost", 9080)
    with TCPServer(server_address, TCPHandler) as Server:
        print("Server Ativo")
        Server.serve_forever()
