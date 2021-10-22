const net = require('net');

const port = 2708;

const sockets = [];
let guestId = 0;
// guarda as mensagens
const messages = [];

function broadcast(from, message) {
  messages.push(message);
  sockets.forEach((Socket) => {
    if (Socket.name != from.name) {
      Socket.write(`${from.name} > ${message}`);
    }
  });
}

const server = net.createServer((Socket) => {
  guestId++;
  Socket.name = `Guest ${guestId}`;
  sockets.push(Socket);
  console.log('Novo client online');
  console.log(Socket.name);
  Socket.on('end', () => {
    console.log('cliente desconectado');
  });
  Socket.on('error', (error) => {
    console.log('Erro no socket:', error.message);
  });
  // envia mensagem pro cliente
  Socket.write('Você está dentro \n');
  Socket.write(`Bem vindo usuário ${guestId} \n`);
  // recebe a message vinda do cliente
  Socket.on('data', (message) => {
    console.log(`${Socket.name}:`, message.toString());
    // clientes verão mensagens 1 do outro atraves da função broadcast
    broadcast(Socket, message.toString());
  });
});

server.listen(port, () => console.log(`Ouvindo na porta: ${port}`));