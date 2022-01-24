from socketserver import DatagramRequestHandler, UDPServer


class UDPHandler(DatagramRequestHandler):
    def handle(self):
        self.wfile.write("Olá Cliente\n")

        while True:
            data = self.rfile.readline().strip().decode("UTF-8")
            if not data:
                break

            print(data)



if __name__ == "__main__":
    server_address = ("localhost", 9090)
    with UDPServer(server_address, UDPHandler) as Server:
        print("Server Ativo")
        Server.serve_forever()
