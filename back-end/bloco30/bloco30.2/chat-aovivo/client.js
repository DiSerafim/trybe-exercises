const net = require('net');
const client = new net.Socket();
const stdin = process.openStdin(); // apitura oquefor digitado

// conecta ao servidor & cria o socket
client.connect(2708, '127.0.0.1', () => {
  stdin.addListener('data', (text) => {
    const message = text.toString().trim(); // trim exclui o 'enter'
    client.write(message);
  });
});

// on, recebe os dados de server
client.on('data', (message) => {
  // console.log(message);
  console.log(message.toString());
});