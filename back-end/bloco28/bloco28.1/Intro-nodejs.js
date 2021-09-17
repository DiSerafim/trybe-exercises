// ============================== NodeJS - JWT - (JSON Web Token)
// -- > CONTEÚDO do dia - 28.1 -- <---/ INICIO --------------------------------------//
// ==============================

// O que é o JWT?
// Entendendo o JWT
// Show me the code!
// Implementando JWT

// ### Conteúdos

// >>> O que é o JWT?
// - é um token gerado a partir de dados "pessoais" que pode ser trafegado pela internet ao fazer requisições para APIs e afins. Mas atenção: toda a informação que colocamos no JWT é pública

// - O navegador solicita que o usuário digite seu login e senha.
// - O navegador então envia esse login e senha ao servidor, para verificar que esses dados estão corretos.
// - Uma vez que valida login e senha, o servidor cria dois objetos: um contendo informações sobre o token que será gerado, que chamamos de header, e outro contendo os dados do usuário e as permissões que aquela pessoa têm, ao qual chamamos de payload.
// - O servidor então converte esses dois objetos em JSON, junta-os em uma mesma string e utiliza um algoritmo chamado HMAC para "criptografar" essa string usando um "segredo" que só ele sabe, gerando o que chamamos de assinatura, que nada mais é do que Header + Payload criptografados.
// - Por fim, o servidor combina o header, o payload originais e a assinatura, criando assim o token.
// - O token é enviado ao cliente, que o armazena para utilizá-lo nas próximas requisições.

// # Na próxima requisição...
// - O navegador envia ao servidor os dados para, por exemplo, cadastrar um novo produto. Juntamente a esses dados, o navegador envia o token que recebeu ao realizar o login.
// - Quando recebe os dados, a primeira coisa que o servidor faz é obter o Header e o Payload do token e criptografá-los, gerando, mais uma vez, a assinatura.
// - O servidor, então, compara a nova assinatura com a assinatura que foi enviada pelo client. Se ambas forem iguais, quer dizer que o conteúdo do Header e do Payload não foram modificados desde o login.
// - Agora que já sabe que o token é válido, o servidor continua processando a requisição e, por fim, entrega a resposta para o cliente.

// # Autenticação e Autorização
// - É importante ressaltar que autenticação e autorização são coisas diferentes. Autenticação é usada para atestar que alguém é quem diz ser, verificando sua identidade, comumente feita por meio de informações confidenciais como email e senha. Já a autorização verifica as permissões de uma pessoa para acessar ou executar determinadas operações.

// # O que é HMAC?
// - é um algoritmo para gerar um MAC (código de autenticação de mensagem) criptografado através de algum algoritmo de hash (algoritmos que codificam mensagens), como md5, sha1 ou sha256, a partir de uma chave secreta (uma senha) e de uma mensagem qualquer.

// # A fórmula do HMAC é a seguinte:
// - HMAC(K, m) = hash(K1 + hash(K2 + m))

// - K é a chave secreta;
// - m é a mensagem;
// - hash é a função de hash escolhida (md5, sha1 etc);
// - K1 e K2 são chaves secretas derivadas da chave original K;
// - + é a operação de concatenação de strings.

// >>> Entendendo o JWT
// - O resultado final do JWT dá-se através da assinatura criptográfica de dois blocos de JSON codificados em base64. Esses dois blocos JSON codificados são o header(cabeçalho) e payload(carga) que mencionamos acima. A signature(assinatura) é a junção dos hashes gerados a partir do header e payload.

// # Header
// - O Header contém duas propriedades: o tipo do token, que é JWT, e o tipo do algoritmo de hash , como HMAC-SHA256 ou RSA :
{
  "alg": "HS256",
  "typ": "JWT"
}

// # Payload (dados do usuário)
// - Esta é a segunda parte do token, que contém os "dados". Esses "dados" são declarações sobre uma entidade (geralmente, o usuário):
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}

// # Signature
// - Para gerar a assinatura, você deve usar o header e o payload codificados em base64 , usando o algoritmo definido no header:
import { hmac } from 'bibliotecaDeHmac';

function base64 (string) {
  return Buffer.from(string).toString('base64');
}
const header = JSON.stringify({
  alg: 'HS256',
  type: 'JWT',
});
const payload = JSON.stringify({
  sub: '1234567890',
  name: 'John Doe',
  admin: true,
});
const secret = 'MinhaSenhaMuitoComplexa123';
const assinatura = hmac(`${base64(header)}.${base64(payload)}`, secret);
const token = `${base64(header)}.${base64(payload)}.${base64(assinatura)}`;
// # O resultado terá a seguinte estrutura:
(Header em base64).(Payload em base64).(Signature em base64)

// - Exemplo de resultado:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwiZXhwIjoxNTQ3OTc0MDgyfQ.2Ye5_w1z3zpD4dSGdRp3s98ZipCNQqmsHRB9vioOx54

// - Header: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
// - Payload: eyJ1c2VybmFtZSI6InVzZXIxIiwiZXhwIjoxNTQ3OTc0MDgyfQ
// - Signature: 2Ye5_w1z3zpD4dSGdRp3s98ZipCNQqmsHRB9vioOx54

// # Um exemplo de envio de um JWT via header em uma requisição HTTP:
GET /foo/bar HTTP/1.1
Host: www.exemplo.com
Authorization: Bearer (Header em base64).(Payload em base64).(Signature em base64)

// >>> Show me the code!
// - Nodejs;
// - Express;
// - Postman;
// - MongoDB;
// - JWT.
git clone git@github.com:tryber/nodejs-jwt-base-project.git
cd nodejs-jwt-base-project
npm i
npm run dev
// # Estrutura base do projeto
├── README.md
├── api
│  ├── routes.js
│  └── server.js
├── controllers
│  ├── createUser.js
│  ├── login.js
│  └── posts.js
├── models
│  └── user.js
├── package-lock.json
└── package.json

// # postman

// 1 Para começar a usar a nossa plataforma, precisamos criar um usuário. Para isso, faremos uma requisição POST para o endpoint /api/users, passando um nome de usuário e senha:
// 2 vamos fazer o login. Para isso, fazemos uma requisição POST para o endpoint /api/login, passando o nome de usuário e senha usados no cadastro:
// 3 podemos pegar as postagens do nosso blog! Fazemos uma requisição GET para o endpoint /api/posts/ :

// >>> Implementando JWT
// - vamos instalar o pacote jsonwebtoken . Ele é quem será responsável por gerar e validar os tokens para nós:
npm install jsonwebtoken

// - vamos editar o arquivo controllers/login.js . Lá, vamos trabalhar na geração do nosso JWT e adicionar os seguintes trechos de código:
// const User = require('../models/user');
const jwt = require('jsonwebtoken');

/* Sua chave secreta. É com ela que os dados do seu usuário serão encriptados.
   Em projetos reais, armazene-a numa variável de ambiente e tenha cuidado com ela, pois só quem tem acesso
   a ela poderá criar ou alterar tokens JWT. */
const secret = 'seusecretdetoken';

// module.exports = async (req, res) => {
//   try {
//     const username = req.body.username;
//     const password = req.body.password;

//     if (!username || !password)
//       return res
//         .status(401)
//         .json({ message: 'É necessário usuário e senha para fazer login' });

//     const user = await User.findUser(username);

//     if (!user || user.password !== password)
//       return res
//         .status(401)
//         .json({ message: 'Usuário não existe ou senha inválida' });

    /* Criamos uma config básica para o nosso JWT, onde:
      expiresIn -> significa o tempo pelo qual esse token será válido;
      algorithm -> algoritmo que você usará para assinar sua mensagem
                  (lembra que falamos do HMAC-SHA256 lá no começo?). */

    /* A propriedade expiresIn aceita o tempo de forma bem descritiva. Por exemplo: '7d' = 7 dias. '8h' = 8 horas. */
    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    /*
      Aqui é quando assinamos de fato nossa mensagem com a nossa "chave secreta".
      Mensagem essa que contém dados do seu usuário e/ou demais dados que você
      quiser colocar dentro de "data".
      O resultado dessa função será equivalente a algo como: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjVlNTQ1OTBiYTQ5NDQ4ZjdlNWZhNzNjMCIsInVzZXJuYW1lIjoiaXRhbHNzb2RqIiwicGFzc3dvcmQiOiJzZW5oYTEyMyIsIl9fdiI6MH0sImlhdCI6MTU4MjU4NzMyNywiZXhwIjoxNTg0Nzc0NzE0OTA4fQ.UdSZi7K105aaVnoKSW-dnw-Kv7H3oKMtE9xv4jwyfSM
      */
    const token = jwt.sign({ data: user }, secret, jwtConfig);

    /* Por fim, nós devolvemos essa informação ao usuário. */
    res.status(200).json({ token });
//   } catch (e) {
//     return res.status(500).json({ message: 'Erro interno', error: e });
//   }
// };

// # já podemos nos autenticar de verdade, não é mesmo? Ao fazer uma nova requisição POST para /api/login , passando nome de usuário e senha corretos, obtemos um resultado semelhante ao seguinte:
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjVlYTIyNTU3ODNkNGJjNjExNzNjZDFlNiIsInVzZXJuYW1lIjoidHVsaW9zdGFybGluZyIsInBhc3N3b3JkIjoiMTIzNDU2IiwiX192IjowfSwiaWF0IjoxNTg3Njg1MTAwLCJleHAiOjE1ODk4Nzc1ODU2MTR9.Y0JzzSuSwrl2OXugqDd0UxY7D0g0HpW3gglSLdop4KU"
}
// Eis o nosso token! É ele que vamos ficar transitando pra lá e pra cá, então ele precisa ser guardado! Mas caso ele seja perdido, não se preocupe; é só gerar outro token. 🙂

// # Agora temos que usar esse token de alguma forma, não é mesmo? Para isso, vamos criar uma pasta chamada 'auth' dentro do diretório 'api'; e, dentro dela, um arquivo chamado validateJWT.js.
// - Esse arquivo conterá uma função que será usada como middleware para as nossas requisições, validando todas as rotas em que nós solicitarmos autenticação.

// validateJWT.js
const jwt = require('jsonwebtoken');
const model = require('../../models/user');
/* Mesma chave privada que usamos para criptografar o token.
   Agora, vamos usá-la para descriptografá-lo.
   Numa aplicação real, essa chave jamais ficaria hardcoded no código assim,
   e muitos menos de forma duplicada, mas aqui só estamos interessados em
   ilustrar seu uso ;) */
const segredo = 'seusecretdetoken';
module.exports = async (req, res, next) => {
  /* Aquele token gerado anteriormente virá na requisição através do
     header Authorization em todas as rotas que queremos que
     sejam autenticadas. */
  const token = req.headers['authorization'];
  /* Caso o token não seja informado, simplesmente retornamos
     o código de status 401 - não autorizado. */
  if (!token) {
    return res.status(401).json({ error: 'Token não encontrado' });
  }
  try {
    /* Através o método verify, podemos validar e decodificar o nosso JWT. */
    const decoded = jwt.verify(token, segredo);
    /*
      A variável decoded será um objeto equivalente ao seguinte:
      {
        data: {
          _id: '5e54590ba49448f7e5fa73c0',
          username: 'italssodj',
          password: 'senha123'
        },
        iat: 1582587327,
        exp: 1584774714908
      }
    */
    /* Caso o token esteja expirado, a própria biblioteca irá retornar um erro,
       por isso não é necessário fazer validação do tempo.
       Caso esteja tudo certo, nós então buscamos o usuário na base para obter seus dados atualizados */
    const user = await model.findUser(decoded.data.username);
    /* Não existe um usuário na nossa base com o id informado no token. */
    if (!user) {
      return res
        .status(401)
        .json({ message: 'Erro ao procurar usuário do token.' });
    }
    /* O usuário existe! Colocamos ele em um campo no objeto req.
       Dessa forma, o usuário estará disponível para outros middlewares que
       executem em sequência */
    req.user = user;
    /* Por fim, chamamos o próximo middleware que, no nosso caso,
       é a própria callback da rota. */
    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};

// # No arquivo 'api/server.js', onde definimos as rotas, usamos esse middleware para adicionar autenticação na nossa rota de listagem de posts.
// const express = require('express');
// const bodyParser = require('body-parser');
// const routes = require('./routes');

/* Aqui, importamos nossa função que valida se o usuário está ou não autenticado */
const validateJWT = require('./auth/validateJWT');
// const port = process.env.PORT || 8080;
// const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// const apiRoutes = express.Router();
/* E a usamos como middleware na nossa rota, colocando-a antes do nosso controller. */
   apiRoutes.get('/api/posts', validateJWT, routes.getPosts);
// apiRoutes.post('/api/users', routes.createUsers);
// apiRoutes.post('/api/login', routes.login);
// app.use(apiRoutes);
// app.listen(port);
// console.log('conectado na porta ' + port);

// # Note que não queremos autenticar o login e nem criação de usuários, pois precisamos deles para o processo de autenticação! Se houvesse outras rotas protegidas na nossa aplicação, usaríamos o middleware nelas também!

// vamos mandar o token para a API via Headers , que são informações extras que podemos passar em uma requisição.

// Adicionamos um header chamado Authorization porque é o que nosso middleware espera. Se não se lembra, dê uma olhada de novo no arquivo /api/auth/validateJWT.js .

// Lembra-se de que o middleware de autenticação recupera o usuário do banco de dados e o coloca no req ? Esse objeto é o mesmo que é passado para todos os middlewares e para a callback da rota. Como o middleware de autenticação é executado antes das funções dos controllers, req conterá o usuário logado quando o controller em /controllers/posts for executado, e poderíamos utilizá-lo para fazer uma consulta ao banco de dados que trouxesse somente seus posts. Para confirmar isso, basta colocar um console.log dentro do controller:
module.exports = (req, res, next) => {
  console.log(req.user);
  res.status(200).json({ mockPosts });
};
// # Você deverá ver algo assim, no terminal onde executou a API:
{
  _id: 5ea2255783d4bc61173cd1e6,
  username: 'italssodj',
  password: 'senha123'
}

// ==============================
// -- > CONTEÚDO do dia - 28.1 -- <---/ FIM -----------------------------------------//
// ==============================
// -- > AULA ao VIVO - 28.1 ----- <---/ INICIO --------------------------------------//
// ==============================

//  Oque vamos aprender

// ==============================
// -- > AULA ao VIVO - 28.1 ----- <---/ FIM -----------------------------------------//
// ==============================
// -- > EXERCÍCIO do dia - 28.1 -- <---/ INICIO --------------------------------------//
// ==============================

// Agora a prática

// ==============================
// -- > EXERCÍCIO do dia - 28.1 -- <---/ FIM -----------------------------------------//
// ============================== NodeJS - JWT - (JSON Web Token)
// ...
