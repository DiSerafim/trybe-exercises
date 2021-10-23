// ============================== NodeJS - Sockets.io
// -- > CONTEÚDO do dia - bloco30.3 -- <---/ INICIO --------------------------------------//
// ==============================

// ### O que é o Socket.IO?
// ### Configurando o Socket.io
// ### Escutando e emitindo eventos customizados
// ### Enviando mensagens do back-end para o front-end
// ### Refatorando
// ### Construindo um Chat com Socket.io
// ### Aprofundando no uso de socket.io
// ### Salas
// ### Cheatsheet
// ### Bônus: Como testar as interações com o socket.ioConteúdo

// * Conseguir desenvolver um server socket usando o socket.io ;
// * Emitir eventos personalizados usando o socket.io ;

// **** Conteúdo

// >>>> O que é o Socket.IO?
// - é uma implementação para comunicação via sockets, mas mais importante que isso é ele oferecer a possibilidade de se ter um fallBack : uma feature de contingência para quando seu client/server não estiver disponível.

// Podemos ouvir um evento da nossa conexão e fazer com que, por exemplo, uma função seja acionada quando um novo usuário se conectar ao servidor, ou quando uma mensagem for emitida.

// >>>> Configurando o Socket.io
// - Socket.io, ele também cria um servidor para nós, assim como o Express. Porém, ao invés de rotas, nós temos uma lógica baseada em eventos!

// └─# mkdir configurando-socket-io && cd configurando-socket-io
// └─# npm init -y     
// └─# npm install express
// instalar o socket.io
// └─# npm install socket.io
// └─# npm i cors                   

// * configurando-socket-io/index.js
// * configurando-socket-io/index.html

// * index.js - nosso backend
// # Começamos implementando a instância do socket.io usando a função io e passando dois parâmetros:
// - O objeto http que é um servidor HTTP;
// - O objeto options para definir a regra de CORS para definir que vamos aceitar conexões do cliente que acessar pela URL http://localhost:3000 usando verbos GET e POST.

// trecho de código que chama a função io.on('connection')trecho de código que chama a função io.on('connection') , essa função vai ser executada sempre que um novo client se conectar ao servidor

// callback com um parâmetro socket . Este parâmetro é a representação de uma conexão aberta ao socket-io rodando no nosso back-end.
// No objeto socket temos um atributo id que é uma string aleatória que é gerada a cada nova conexão.

// index.html - nosso frontend
// - Pode ser usado um link provido pelo CDNJS , que nos dá toda a biblioteca do socket.io para uso no front-end.
https://cdnjs.cloudflare.com/ajax/libs/socket.io/3.0.4/socket.io.js

// implementa o script do socket.io dentro do html
<script src="/socket.io/socket.io.js"></script>
<script>
  const socket = io();
</script>

// Esse método por default recebe como parâmetro o mesmo endpoint por onde ele está sendo acessado, ou seja, se estamos na rota http://localhost:3000 , é por aí que ele vai tentar se conectar. 

// Caso você queira se conectar a um servidor num socket específico, basta você informar isso via parâmetro
// const socket = io('http://localhost:5000') .

// >>>> Escutando e emitindo eventos customizados
// - O socket.io possibilita uma comunicação entre cliente-servidor através de eventos. Tanto o cliente como o servidor podem emitir e escutar eventos customizados.

// Implementar um botão que emite um evento PING e fazer com que o back-end escute esse evento.
// * index.js
// ...
// io.on('connection', (socket) => {
// console.log(`Usuário conectado. ID: ${socket.id}`);
socket.on('ping', () => {
  console.log(`${socket.id} emitiu um ping!`);
});
// });
// ...
// criamos sempre os eventos dentro de connection . No código acima estamos criando o evento personalizado da maneira mais simples possível. Basta colocarmos o nome que queremos dentro do método .on() e pronto!

// A função socket.on() cria um listener , ou seja, uma forma de detectar quando algum cliente emitir um evento personalizado para o servidor.
// criamos um listener para o evento ping 

// Por falar em eventos de DOM, vamos agora fazer um 'botão e adicionar um listener' ao evento de clique para enviar o evento ping para o servidor.
// * index.html

// Agora sim, nosso front-end está emitindo um evento para o nosso back-end através da função socket.emit .

// resultado
// └─# node index.js + localhost

// >>>> Enviando mensagens do back-end para o front-end
// - Uma forma de enviarmos uma mensagem do servidor para o cliente é usando o método emit() :
socket.emit('Nome do seu evento', {
  propriedade: 'Do seu objeto',
  enviado: 'Para o cliente da conexão atual',
});

// * index.js
// ...
// io.on('connection', (socket) => {
  socket.emit('ola', 'Que bom que você chegou aqui! Fica mais um cadin, vai ter bolo :)');

  //  socket.on('ping', () => {
  //    console.log(`${socket.id} emitiu um ping!`);
  //  });
});
// ...

// * index.html
// .. configura o recebimento da mensagem

// resultado
// └─# node index.js + localhost

// Vamos modificar para que o listener do evento ping emita um evento pong para todos os clientes.
// * index.js
// ...
// socket.on('ping', () => {
//  console.log(`${socket.id} emitiu um ping!`);
io.emit('pong', `${socket.id} enviou um ping!`); // essa linha envia um aviso para o cliente que o ping chegou.
//  });
// ...

// vamos definir um listener para o evento pong do lado do cliente utilizando o socket.on .
// * index.html
<script>
  // const socket = io();
  // ...
  // Quando o evento `pong` for emitido pelo servidor, vamos pegar a string mensagem enviada e passar para a função `createMessage`
  socket.on('pong', (mensagem) => createMessage(mensagem));
</script>

// resultado
// └─# node index.js + localhost

// Agora, observe que cada vez que você clica no botão PING, uma mensagem de PONG é enviada pelo back-end.

// >>>> Refatorando
// - usando o conceito de inversão de dependência do SOLID. Vamos criar um diretório chamando sockets e adicionar um arquivo chamado ping.js .

// * sockets/ping.js
// E vamos tirar do arquivo index.js todo o código movido e substituir por um require.

// * index.js
// const express = require('express');
// const app = express();
// const http = require('http').createServer(app);
// const io = require('socket.io')(http, {
//   cors: {
//     origin: 'http://localhost:3000', // url aceita pelo cors
//     methods: ['GET', 'POST'], // Métodos aceitos pela url
//   },
// });
require('./sockets/ping')(io);
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });
// http.listen(3000, () => {
//   console.log('Servidor ouvindo na porta 3000');
// });

// Vamos refatorar nosso código HTML.
// Comece criando um arquivo para isolar o javascript do HTML.
// Atente-se a criar o arquivo dentro de um diretório public.
// * public/js/ping.js

// Note que na linha 1, mudamos a chamada da função io() para window.io()

// devemos reorganizar nosso HTML 
// index.html

// Agora só precisamos fazer nosso back-end prover acesso aos arquivos dentro do diretório public adicionando a seguinte linha de código.

// index.js
// ...
app.use(express.static(__dirname + '/public'));
// require('./sockets/ping')(io);
// ...

// resultado
// └─# node index.js + localhost

// >>>> Construindo um Chat com Socket.io
// - vamos construir um exemplo mais próximo do mundo real.

// Dando seguimento a pasta 'configurando-socket-io'             

// para estruturar nossos eventos para o chat e adicionar a sua chamada no index.js.
// * sockets/chat.js

// * index.js
//...
// require('./sockets/ping')(io);
require('./sockets/chat')(io);
// ...

// Crie agora o HTML, CSS e Javascript do cliente.
// * public/chat.html

// * public/css/chat.css

// * public/js/chat.js

// Vamos preparar nosso back-end para receber este evento.
// * sockets/chat.js
// module.exports = (io) => io.on('connection', (socket) => {
  socket.on('clientMessage', (message) => {
    console.log(`Mensagem ${message}`);
  });
// });

// Agora faça, um teste. Abra a nova página pela url localhost:3000/chat.html 
// resultado
// └─# node index.js + localhost:3000/chat.html 

// Vamos emitir um outro evento chamado serverMessage com a mensagem saindo do servidor para todos os clientes que possuírem uma conexão socket aberta.
// * sockets/chat.js
// module.exports = (io) => io.on('connection', (socket) => {
  // socket.on('clientMessage', (message) => {
  //   console.log(`Mensagem ${message}`);
    io.emit('serverMessage', message);
  // });
// });

// listener para capturar o evento serverMessage que é emitido pelo back-end como uma resposta para o evento clientMessage 
// * public/js/chat.js
// ...
//   return false;
// });
const createMessage = (message) => {
  const messagesUl = document.querySelector('#messages');
  const li = document.createElement('li');
  li.innerText = message;
  messagesUl.appendChild(li);
};

socket.on('serverMessage', (message) => createMessage(message));

// Agora, sim, quando o evento serverMessage é disparado pelo back-end, o mesmo é detectado pelo cliente através do sokect.on('serverMessage') que dispara uma callback com o parâmetro message e chama a função createMessage que adiciona um elemento li com o valor da variável message no elemento ul com o id messages .

// >>>> Aprofundando no uso de socket.io

// socket.emit:
// Quando executado do lado do front-end ele envia uma mensagem do front para o back, mas o que acontece se usarmos ele do lado do back-end.

// * sockets/chat.js
// module.exports = (io) => io.on('connection', (socket) => {
  socket.emit('serverMessage', 'Olá, seja bem vindo ao nosso chat público! Use essa página para conversar a vontade.');
  // ...

// Agora teste, depois recarregue novamente apenas uma das páginas. 
// resultado
// └─# node index.js + localhost:3000/chat.html 

// o socket.emit transmite uma mensagem apenas o cliente que disparou o evento connection . 
// o io.emit ; transmite algo para todos os clientes que estão conectados ao socket.

// # Para isso vamos usar o socket.broadcast.emit !
// - para enviar uma mensagem para todos os clientes, exceto o cliente atual.

// # socket.broacast.emit:

// sockets/chat.js
// ...
// socket.emit('serverMessage', 'Olá, seja bem vindo ao nosso chat público! Use essa página para conversar a vontade.');
socket.broadcast.emit('serverMessage', `Iiiiiirraaaa! ${socket.id} acabou de se conectar :D`);
// ...

// resultado
// └─# node index.js + localhost:3000/chat.html 

// # socket.on('disconnect'):
// - Sempre que um cliente fecha ou recarrega a página, a conexão socket é encerrada e o socket.io dispara automaticamente um evento disconnect

// listener para detectar quando uma conexão é encerrada.
// * sockets/chat.js
// module.exports = (io) => io.on('connection', (socket) => {
  // ...
  socket.on('disconnect', () => {
    socket.broadcast.emit('serverMessage', `Xiii! ${socket.id} acabou de se desconectar! :(`);
  });
// });

// resultado
// └─# node index.js + localhost:3000/chat.html 

// para termos uma garantia que o socket vai realmente se desconectar,
// * public/js/chat.js
//...
window.onbeforeunload = function(event) {
  socket.disconnect();
};
// socket.disconnect para fechar uma conexão socket e a partir desse momento essa página não vai conseguir nem emitir, nem escutar eventos.

// # resumo
// - socket.emit : Enviar uma mensagem apenas entre cliente <=> servidor que dispara um evento.
// - io.emit : Enviar uma mensagem para todos os clientes com uma conexão socket aberta. (Só é possível usar do lado do servidor)
// - socket.broadcast.emit : Enviar uma mensagem para todos os clientes exceto o cliente que disparou o evento. (Só é possível usar do lado do servidor)
// - socket.on('eventoCustomizado') : Escutar um evento qualquer.
// - socket.on('disconnect') : Escutar o evento disparado quando um usuário se desconecta.
// - socket.disconnect : Força o encerramento de uma conexão socket.

// >>>> Salas
// - O Socket.io tem um recurso que permite criar chats privados entre um conjunto específico de clientes

// Vamos começar implementando a tela para entrar em uma sala.
// * public/entrar.html

// CSS utilizado nessa página.
// * public/css/login.css

// Essa tela tem um form que faz uma requisição redirecionando para a página room.html enviando dois parâmetros, o username e room que vamos utilizar para poder abrir uma sala e identificar o usuário.
// * public/room.html

// Esta página segue a mesma base que nosso arquivo chat.html , mas estamos adicionando o uso da lib Qs que permite acessar parâmetros via query string do lado do front-end.
// É através dessa lib que vamos conseguir acessar os valores enviados pelo formulário da página entrar.html
// * public/js/rooms.js

// resultado
// └─# node index.js + http://localhost:3000/entrar.html 
// Confira se os valores foram exibidos no console do seu navegador.

// entrar em uma sala específica.
// * public/js/rooms.js

// vamos configurar nosso back-end para receber essa requisição,
// * sockets/rooms.js

// * index.js
// ...
// require('./sockets/chat')(io);
require('./sockets/rooms')(io);
// ...

// socket.join que sinaliza que um usuário se conectou a uma sala específica.
// esse usuário está apto a receber mensagens que forem enviadas para essa sala.

// socket.broadcast.to que envia um evento para uma sala específica.
// as mensagens enviadas nessa tela só chegarão para outros clientes que estiverem conectados na mesma sala.

// ajustando o cliente para emitir um evento quando apertar no botão de enviar.
// * public/js/rooms.js

// do lado do back-end vamos emitir a mensagem para todos os usuários conectados usando io.to.emit :
// * sockets/rooms.js

// agora nosso envio de mensagens já está funcionando para atender um chat privado. Do lado do cliente mandamos a sala como parâmetro e do lado do servidor usar a função 'io.to' para enviar uma mensagem para todos os clientes conectados apenas a essa sala específica do tópico, 

// Resumo
// socket.join : Conecta um cliente a uma sala específica.
// socket.broacast.to(x).emit e io.to(x).emit : Funciona equivalente ao que já vimos anteriormente, porém enviando a mensagem apenas para os clientes que estiverem conectados a sala x .

// >>>> Cheatsheet


































// >>>> Bônus: Como testar as interações com o socket.ioConteúdo





































// - Concluido ... ???

// ==============================
// -- > CONTEÚDO do dia - bloco30.3 -- <---/ FIM -----------------------------------------//
// ==============================
// -- > AULA ao VIVO - bloco30.3 ----- <---/ INICIO --------------------------------------//
// ==============================

// ### 

// concluido ...???

// ==============================
// -- > AULA ao VIVO - bloco30.3 ----- <---/ FIM -----------------------------------------//
// ==============================
// -- > EXERCÍCIO do dia - bloco30.3 -- <---/ INICIO --------------------------------------//
// ==============================

// # Agora, a prática


// # Recursos adicionais

// Documentação

// ==============================
// -- > EXERCÍCIO do dia - bloco30.3 -- <---/ FIM -----------------------------------------//
// ============================== NodeJS - Sockets.io
// ...
