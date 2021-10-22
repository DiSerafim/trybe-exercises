const express = require('express');
const app = express();
const http = require('http').createServer(app);
// adiciona o socket.io ao projeto
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  }});

  // REFATORADO ---
  app.use(express.static(__dirname + '/public'));
  
  require('./sockets/ping')(io);
  require('./sockets/chat')(io);
  require('./sockets/rooms')(io);

io.on('connection', (socket) => {
  console.log(`Usuário conectado. ID: ${socket.id} `);
  socket.emit('ola', 'Que bom que você chegou aqui! Fica mais um cadin, vai ter bolo :)');

  socket.on('ping', () => {
    console.log(`${socket.id} emitiu um ping!`);
    io.emit('pong', `${socket.id} enviou um pong!`); // essa linha envia um aviso para o cliente que o ping chegou.
  });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});