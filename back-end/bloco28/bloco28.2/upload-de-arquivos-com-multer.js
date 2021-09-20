// ============================== NodeJS - Upload de arquivos com `multer`
// -- > CONTEÚDO do dia - 28.2 -- <---/ INICIO --------------------------------------//
// ==============================

// Upload de arquivos com multer e Express
// multipart/form-data
// Show me the code

// # Conteúdo

// >>> Upload de arquivos com multer e Express
// - enquanto o body-parser suporta requests nos formatos JSON (Content-Type: application/json) e URL Encoded (Content-Type: application/x-www-form-urlencoded), o multer suporta requests no formato conhecido como Form Data (Content-Type: multipart/form-data).

// >>> multipart/form-data
// - pensado para suportar todas as operações suportadas pela tag <form> do HTML. Sendo assim, pode transmitir dados comuns, como strings, booleans e números, mas também pode transmitir arquivos. Dessa forma, o body de uma request com formato Form Data pode ter vários campos (assim como um JSON), e cada campo pode ter o tipo número, boolean, string, ou arquivo .

// o multer nos fornece, além do req.body , com os campos comuns, uma propriedade req.file (ou req.files , caso sejam múltiplos arquivos na mesma request).o multer nos fornece, além do req.body , com os campos comuns, uma propriedade req.file (ou req.files , caso sejam múltiplos arquivos na mesma request).

// ╰ mkdir exemplo-1 && cd exemplo-1
// ╰ npm install express multer
// ╰ mkdir uploads
// ╰ touch index.js

// index.js
const express = require('express');
const multer = require('multer');

const app = express();
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/');
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

app.get('/ping', (req, res) => {
  res.send('pong');
});
app.post('/upload', upload.single('arquivo'), (req, res) => {
  console.log(req.body, req.file);
  res.send('Ok');
});

const PORT = 3000;

app.listen(PORT, () => console.log('Roda no servidor...'));

// ╰ node index.js

// >>> Show me the code

// Para começar, vamos criar um projeto chamado io-multer . Para isso, em sua pasta de exercícios, execute o comando npm init @tryber/backend io-multer .
// Depois de criada a pasta do projeto, navegue até ela e instale o multer utilizando os seguintes comandos:
// ╰ npm init @tryber/backend io-multer  
// cd io-multer
// ╰ npm i multer
// ╰ npm start

// Agora, basta executar o comando npm start dentro da pasta io-multer para colocar nosso servidor de pé. Se preferir, utilize o comando npm run debug, para que o nodemon reinicie o servidor sempre que você realizar novas alterações.
// Para testar nossa API, disponibilizamos um endpoint chamado /ping. Para fazer uma requisição para essa rota, podemos usar diretamente o browser

// criar uma instância dele e configurá-lo para tornar a pasta uploads como pasta de destino dos uploads realizados. Além disso, vamos também tornar pública essa mesma pasta para que ela possa ser acessada através da nossa API. Assim, poderemos requisitar de volta os arquivos após fazer o upload deles:
// # io-multer/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');

const { PORT } = process.env;

const controllers = require('./controllers');
// const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Definindo nossa pasta pública */
/* `app.use` com apenas um parâmetro quer dizer que
  queremos aplicar esse middleware a todas as rotas, com qualquer método */
/* __dirname + '/uploads' é o caminho da pasta que queremos expor publicamente */
/* Isso quer dizer que, sempre que receber uma request, o express vai primeiro
  verificar se o caminho da request é o nome de um arquivo que existe em `uploads`.
  Se for, o express envia o conteúdo desse arquivo e encerra a response.
  Caso contrário, ele chama `next` e permite que os demais endpoints funcionem */
app.use(express.static(__dirname + '/uploads'));
/* Cria uma instância do`multer`configurada. O`multer`recebe um objeto que,
  nesse caso, contém o destino do arquivo enviado. */
const upload = multer({ dest: 'uploads' });

app.post('/files/upload', upload.single('file'), (req, res) =>
  res.status(200).json({ body: req.body, file: req.file })
);

app.get('/ping', controllers.ping);
// app.use(middlewares.error);
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

// Note que, na rota /files/upload, passamos um middleware criado pelo multer como parâmetro, através da chamada upload.single('file') e depois passamos nosso próprio middleware, que recebe os parâmetros req e res.

// O multer adiciona um objeto body e um objeto file ao objeto request recebido na callback. Os objetos body e file contêm os valores dos campos de texto e o arquivo enviados pelo formulário, respectivamente.

// O parâmetro passado na chamada de upload.single('file') indica o nome do campo que conterá o arquivo. No caso desse exemplo, o nome é file , mas poderia ter outro nome em outros cenários.
<form action="/post" method="post" enctype="multipart/form-data">
  <input type="file" name="post" />
</form>
// Seria necessário especificar o nome do input com upload.single('post'), pois o atributo name do input do tipo file está preenchido com post.

// Além disso, estamos especificando, com o método single , porque queremos apenas um arquivo. Ou seja, qualquer pessoa que nos enviar uma requisição deverá informar uma propriedade chamada file , e só poderá enviar um arquivo por requisição.

// # Exercício de Fixação
// Crie um arquivo que receba arquivos enviados para 'http://localhost:3000/envios' e os armazene na pasta envios.

// ╰ npm init @tryber/backend fixacao
// cd fixacao
// ╰ npm i multer
// ╰ npm start
// mkdir envios

// index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');

const { PORT } = process.env;
const controllers = require('./controllers');
const middlewares = require('./middlewares');
const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/envios'));
const uplooad = multer({ dest: 'envios' });
app.post('/envios', uplooad.single('file'), (req, res) =>
  res.status(200).json({ body: req.body, file: req.file })
)
app.get('/ping', controllers.ping);
app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

// # Axios
// - é uma biblioteca que fornece um cliente HTTP que funciona tanto no browser quanto no NodeJS. Ela consegue interagir tanto com XMLHttpRequest quanto com a interface HTTP nativa do NodeJS. Por isso, uma das vantagens de se usar o Axios é que ele permite que o mesmo código utilizado para fazer requisições Ajax no browser também funcione no servidor. Além disso, as requisições feitas através da biblioteca retornam uma Promise compatível com a versão ES6 do JavaScript.

// o Axios é parecido com o fetch, que você já aprendeu. Porém, é sempre interessante aprender a manipular diferentes bibliotecas, mesmo que elas tenham o mesmo objetivo!

// criar um script para saber se nossa API está de pé. Para isso, vamos criar outra pasta chamada ping, fora da nossa pasta io-multer, e, dentro dela, vamos criar um arquivo chamado ping.js.
// ╰ mkdir ping
// ╰ cd ping
// ╰ npm init -y
// ╰ npm install axios

// ping/ping.js
const axios = require('axios');
/* Faz uma requisição do tipo GET */
axios
  .get('http://localhost:3000/ping/')
  .then((response) => {
    console.log(response.data);
    console.log(response.status);
  })
  .catch((error) => {
    console.log(error);
  });

// rode os arquivos
// terminal-1 /bloco28.2/io-multer
// ╰ npm start
// terminal-2 /bloco28.2/ping
// ╰ node ping.js

// o resultado será
{ message: 'Pong!' }
200

// Explicando melhor o que aconteceu: o axios fez uma requisição HTTP, assim como as que o Postman faz, e assim como as que o browser faz.
// Existem outras formas de se fazer requisições HTTP através do axios:
// # GET
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
// Você pode usar métodos async também
const getUser = async () => {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

// # POST
const body = {
  firstName: 'Fred',
  lastName: 'Flintstone'
};

axios.post('/user', body)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
// Você pode conferir mais exemplos na documentação do axios.
https://github.com/axios/axios

// # Fazendo o upload de arquivos para uma API

// vamos criar mais uma pasta chamada 'send-files'. dentro, criaremos dois arquivos: 'send.js' e 'meu-arquivo.txt'. Dentro de 'meu-arquivo.txt', coloque um texto qualquer. Lembre-se sempre de criar um projeto node com npm init.
// ╰ mkdir send-files
// ╰ cd send-files
// ╰ npm init -y
// ╰ npm i axios form-data

// 'form-data' é uma biblioteca que nos ajudará a montar uma requisição do tipo 'multipart/form-data'. Ela pode ser usada para submeter formulários e fazer upload de arquivos para outras aplicações web. Note que, no navegador, a classe FormData, fornecida por essa biblioteca, já existe por padrão, de forma que o uso do pacote de terceiros só se faz necessário no Node.js.

// send-file/send.js
const FormData = require('form-data');
const axios = require('axios');
const fs = require('fs');
/* Criamos um stream de um arquivo */
const stream = fs.createReadStream('./meu-arquivo.txt');
/* Aqui, criamos um formulário com um campo chamado 'file' que carregará */
/* o stream do nosso arquivo */
const form = new FormData();
form.append('file', stream);
/* Esse arquivo não será enviado no body da requisição como de costume. */
/* Em ambientes NodeJS, é preciso setar o valor de boundary no header */
/* 'Content-Type' chamando o método `getHeaders` */
const formHeaders = form.getHeaders();

axios
  .post('http://localhost:3000/files/upload', form, {
    headers: {
      ...formHeaders,
    },
  })
  .then((response) => {
    console.log(response.status);
  })
  .catch((error) => {
    console.error(error);
  });

// rode os arquivos
// terminal-1 /bloco28.2/io-multer
// ╰ npm start
// terminal-2 bloco28.2/send-files
// ╰ node send.js

// o resultado será
200
// e verifique a pasta io-multer/uploads
// Como podemos fazer para dar um nome a esse arquivo?

// # Dando nome aos "bois" arquivos com multer Storage
// - Dentro no script do nosso servidor, vamos criar um multer Storage. Um storage nos permite ter um controle mais detalhado do upload de nossos arquivos. Podemos extrair o valor do nome original do arquivo enviado pelo formulário através da propriedade originalname:

// io-multer/index.js
// acrescente a cima da 'const upload'

/* destination: destino do nosso arquivo
 filename: nome do nosso arquivo.
 No caso, vamos dar o nome que vem na
 propriedade `originalname`, ou seja,
 o mesmo nome que o arquivo tem no
 computador da pessoa usuária */
 const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads');
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  }
});

const upload = multer({ storage });

// Reinicie novamente o servidor do projeto 'io-multer', com 'node index.js'. Em seguida, execute o script 'send.js', com 'node send.js', várias vezes e confira sua pasta uploads/ na pasta io-multer, no caso, seu servidor.

// # Acessando os arquivos enviados pela API
// - Como já tornamos pública a pasta /uploads, que é onde guardamos os arquivos enviados, não precisamos fazer mais nada para deixá-los disponíveis através da API.

// acessar http://localhost:3000/meu-arquivo.txt, deverá ver o conteúdo do seu arquivo no browser. Que tal testar com outros tipos de arquivo, como uma imagem?

// ==============================
// -- > CONTEÚDO do dia - 28.2 -- <---/ FIM -----------------------------------------//
// ==============================
// -- > AULA ao VIVO - 28.2 ----- <---/ INICIO --------------------------------------//
// ==============================

// # Upload e servindo arquivos

// ╰ mkdir api
// ╰ cd api
// ╰ npm init -y
// ╰ npm install express multer
// ╰ npm install nodemon -D

// api/index.js
const express = require('express');
const multer = require('multer');
const app = express();

const upload = multer({ dest: 'uploads/' })
// 1 arquivo
app.post('/files', upload.single('file'), (req, res) => {
  return res.status(201).json({ message: 'Arquivo' })
});
// vários arquivos
app.post('/files', upload.array('photos', 2), (req, res) => {
  return res.status(201).json({message: 'Photos'})
})
app.listen(3000, () => console.log('Api na porta 3000'));
// script pakage.json/ > npm run dev

// # axios

// ╰ mkdir client && cd client 
// ╰ npm init -y
// ╰ npm install axios form-data
// ╰ touch index.js

// client/index.js
const FormData = require('form-data');
const axios = require('axios');
const fs = require('fs');

const stream = fs.createReadStream('./meu-arquivo.txt');

const formInfo = new FormData();
formInfo.append('file', stream);

const formHeader = formInfo.getHeaders();
const URL = 'http://localhost:3000/files';

axios.post(URL, formInfo, { Headers: { ...formHeader } })
  .then((response) => console.log(response));

// para ver o resultado
// rode 1̣º  'node index.js' da pasta 'api'
// 2º em seguida 'node index.js' da pasta 'client'

// criando uploads para a web

// ╰ mkdir apiParaWeb
// ╰ cd apiParaWeb
// ╰ npm init -y
// ╰ npm install express multer
// ╰ npm install nodemon -D

// apiParaWeb/index.js
const express = require('express');
const multer = require('multer');
const app = express();
const fs = require('fs');

// cria a pasta com nome original para cada upload
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const folderName = `./uploads/${getDate()}/`;
    fs.mkdirSync(folderName, { recursive: true });
    return callback(null, folderName)
  },
  filename: (req, file, callback) => {
    return callback(null, file.originalname)
  }
})
// cria um nome padrão para os arquivos
const upload = multer({ storage });
// salva os arquvos com nome aleatório
// const upload = multer({ dest: 'uploads/' })

// coloca o nome do arquivo no navegador para ver o arquivo
// http://localhost:3000/19-9-2021/nome do arquivo.png
app.use(express.static(`${__dirname}/uploads`));

// coloca uma pasta de referência para ver o arquivo
// http://localhost:3000/19-9-2021/nome do arquivo.png
app.use('/arquivos', express.static(`${__dirname}/uploads`));

// 1 arquivo
app.post('/files', upload.single('file'), (req, res) => {
  return res.status(201).json({ message: 'Arquivo' })
});17
// vários arquivos
// app.post('/files', upload.array('photos', 17), (req, res) => {
  //   return res.status(201).json({message: 'Photos'})
  // })
  
// nome automático na pasta
const getDate = () => {
  const date = new Date;
  return `${date.getDate()}-${(date.getMonth() + 1)}-${date.getFullYear()}`;
}

app.listen(3000, () => console.log('Api na porta 3000'));

// ==============================
// -- > AULA ao VIVO - 28.2 ----- <---/ FIM -----------------------------------------//
// ==============================
// -- > EXERCÍCIO do dia - 28.2 -- <---/ INICIO --------------------------------------//
// ==============================

// # Agora, a prática

// Projeto chamado 'multer-exercises' utilizando o comando npm init @tryber/backend multer-exercises.
// Depois de criar o projeto, instale o multer acessando a pasta e executando o comando npm i multer dentro dela.

// #1 Crie o endpoint POST /upload
// - O endpoint deve receber apenas um arquivo no campo file ;
// - O arquivo deve ser armazenado na pasta uploads ;
// - O arquivo armazenado deve ter o timestamp do upload (obtido com Date.now() ) seguido do nome original do arquivo.
// Exemplo, para o arquivo profile.png , o nome armazenado deve ser algo como 1616691266095-profile.png , já que o timestamp será diferente a cada vez.
// - Retorne status 200 OK se der tudo certo.

// ╰ mkdir multer-exercises && cd multer-exercises
// ╰ npm init -y        
// ╰ npm install express multer
// ╰ npm install nodemon -D

// >>> resultado na pasta
// multer-exercise

// #2 Altere o endpoint POST /upload para que atenda os seguintes critérios:
// - Apenas aceite arquivos cuja extensão seja .png ; Caso o arquivo tenha outro tipo de extensão, retorne o status 403 Forbidden com o JSON a seguir:
{ "error": { "message": "Extension must be `png`" } }
// - Não aceite um arquivo cujo nome (ignorando o timestamp) já exista na pasta uploads . Caso o arquivo já exista, retorne o status 409 Conflict com o seguinte JSON:
{ "error": { "mesage": "File already exists" } }
// Dica: procure sobre fileFilter no multer, pode ajudar.

// >>> resultado na pasta
// multer-exercise

// #3 Torne a pasta uploads pública de forma que seja possível baixar os arquivos enviados anteriormente.

// >>> resultado na pasta
// multer-exercise

// Bônus

// #1 Crie o endpoint POST /multiple
// - Permita o upload de vários arquivos através do campo files ;
// - Salve cada arquivo na pasta /uploads com um nome aleatório, que será gerado pelo multer ;
// - Retorne uma lista dos arquivos enviados juntamente com a URL pela qual cada um está acessível. Exemplo:
[
  { "file": "meuArquivo.txt", "url": "http://localhost:3000/c3f20f8a1a72729883b88a96f405bbd0" },
  { "file": "arquivo1.png", "url": "http://localhost:3000/7c76b101fd872f7fc12705eeba2ddd1c" },
  { "file": "profile.jpg", "url": "http://localhost:3000/0ec57a65a9522aa14f9405060089c6f5" },
  { "file": "tcc.docx", "url": "http://localhost:3000/a7de65196a12ce1c53e8e76927099f12" },
  { "file": "CNH.jpg", "url": "http://localhost:3000/78c948b7b737d9a80b13f52bc6968d75" }
]

// #2 Crie o endpoint POST /profile
// - Receba strings nos campos name , email , password e bio ;
// - Receba um arquivo no campo profilePic ;
// - Armazene o arquivo recebido na pasta /profilePics com o nome aleatório do multer ;
// - Utilize o nome gerado pelo multer como ID para o perfil criado;
// - Armazene as informações do perfil no arquivo profiles.json

// #3 Crie o endpoint GET /profiles/:id
// - Caso exista um perfil com o id informado, retorne as informações desse perfil, conforme salvo no arquivo profiles.json
// - Caso não exista um perfil com o id informado, retorne o status 404 Not Found com o seguinte corpo:
{
    "error": {
        "message": "Perfil não encontrado"
    }
}

// Recursos adicionais

// Documentação do multer
https://github.com/expressjs/multer
// Documentação do Axios
https://github.com/axios/axios
// What is the boundary in multipart/form-data?
https://stackoverflow.com/questions/3508338/what-is-the-boundary-in-multipart-form-data

// ==============================
// -- > EXERCÍCIO do dia - 28.2 -- <---/ FIM -----------------------------------------//
// ============================== NodeJS - Upload de arquivos com `multer`
// ...
