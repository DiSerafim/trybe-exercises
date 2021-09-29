// ============================== NodeJS - Infraestrutura - Deploy com Heroku
// -- > CONTEÚDO do dia - 29.1 -- <---/ INICIO --------------------------------------//
// ==============================

// ### O que é deploy?
// ### Serviços em Nuvem
// ### Introdução ao Heroku
// ### Utilizando o Heroku
// ### Fazendo deploy
// ### Acompanhando sua aplicação
// ### Vendo tudo isso na prática

// ### Objetivos
// - Conhecer o que é um deploy e os principais serviços utilizados;
// - Publicar aplicações através do Heroku;
// - Visualizar logs das suas aplicações publicadas;
// - Monitorar suas aplicações publicadas;
// - Utilizar variáveis de ambiente dentro do Heroku.


// Conteúdo:

// ### O que é deploy?
// - No nosso caso, nós a utilizamos para representar o processo de publicar uma aplicação em um servidor, tornando-a disponível para ser acessada local ou externamente.

// ### Serviços em Nuvem
// - serviços em nuvem, populares:

// > Heroku;
// > Google GCE;
// > Amazon AWS;
// > Microsoft Azure;
// > IBM Cloud.

// ### Introdução ao Heroku
// - O Heroku executa e gerencia aplicações escritas em Node.js, Ruby, Java, Python, Clojure, Scala, Go e PHP. Por ser uma plataforma "poliglota", ele vai se comportar de maneira similar, independente da linguagem.

// No contexto de deploys , o build é como chamamos todo o processo em que o código é preparado para posteriormente ser executado. Por exemplo, é durante o build que se executa o npm install para instalar as dependências do projeto.

// # Como funciona?
// A partir dessas informações, o Heroku saberá, por exemplo, que é um projeto em Node.js e que, para executá-lo, ele terá que efetuar o comando descrito no campo scripts.start dentro do package.json (mais conhecido por npm start ).

// # Procfile
// É um arquivo que especifica o comando que deve ser executado para iniciar o projeto.
// é definido em um arquivo chamado 'Procfile'(sem extensão) e deve localizar-se na raiz da sua aplicação. 

// A estrutura do arquivo segue o seguinte padrão:
{/*
<process type>: <command>;
<process type> Define o tipo daquele processo. Por exemplo, se é um servidor web ou um job .
<command> É o comando para iniciar o projeto.
*/}

// EX:
// web: node index.js

// O tipo web é especial, pois ele é o único tipo que pode receber tráfego HTTP externo pelas rotas do Heroku. A cada deploy, uma porta é gerada e fica disponível na variável de ambiente PORT

// # Dynos
// - Ao fazer o deploy no Heroku, você estará colocando sua aplicação dentro de um "container". O container é um ambiente isolado e leve que provê os recursos necessário de CPU, memória RAM, um sistema operacional (Linux, no caso do Heroku) e um sistema temporário de arquivos para rodar seu código. No Heroku, os "containers" são chamados de "dynos" .

// # Criando uma conta
// Para utilizarmos os serviços do Heroku, é necessário criar uma conta na plataforma.
https://heroku.com/

// # Instalação do CLI
// - vamos instalar o Heroku CLI (Command Line Interface). Com ele, conseguiremos gerenciar e escalar nossas aplicações, prover add-ons , observar logs e rodar nossos projetos localmente, simulando o servidor 

// Para a instalação no Linux, o CLI está disponível como Snap para diversas distros. Para utilizá-la, seguiremos os seguintes passos:

// 1. Instalando o Snapd.
// ╰ sudo snap install hello-world
// Ou
// ╰ apt-get update && apt-get install snapd

// 2. Instalando o CLI
// ╰ sudo snap install heroku --classic

// 3. Logando no Heroku
// - ⚠️ Atenção: é necessário autenticar o CLI para que os comandos funcionem corretamente.
// ╰ heroku login

// ### Utilizando o Heroku
// - Executando localmente

// # Instalando as dependências em um exemplo NodeJs utilizando o npm.
// ╰ npm install
// ╰ heroku local web

// Recapitulando sobre git…
// Por padrão, o nome deste repositório remoto do git é origin. Para visualizá-lo, basta executar o comando 'git remote -v'

// # Criando um projeto para deploy
// ╰ npx create-react-app meu-primeiro-deploy-heroku
// ╰ snap run code --user-data-dir 

// Normalmente, o CRA já inicia um projeto git, mas, caso isso não aconteça, execute o comando para iniciar o projeto:
// ╰ git init
// ╰ git add .
// ╰ git commit -m ‘Initialize project using Create React App’

// Listando os remotes
// ╰ git remote -v

// Como acabamos de iniciar o projeto git , não temos nenhum remote vinculado à nossa aplicação. Com isso, vá no seu GitHub e crie um repositório meu-primeiro-deploy-heroku .
// Após ter criado o repositório, vá ao terminal e execute o comando para vincular a sua aplicação ao repositório criado no GitHub. Para isso, você pode:
// Utilizar chave ssh:
// ╰ git remote add origin git@github.com:[SEU_USUARIO_GITHUB]/meu-primeiro-deploy-heroku.git
// HTTPS também:
// ╰ git git remote add origin https://github.com/[SEU_USUARIO_GITHUB]/meu-primeiro-deploy-heroku.git

// Por fim, execute novamente o comando git remote -v . Você verá que, dessa vez, aparecerá algo parecido com:
// origin git@github.com:[SEU_USUARIO_GITHUB]/meu-primeiro-deploy-heroku.git (fetch)
// origin git@github.com:[SEU_USUARIO_GITHUB]/meu-primeiro-deploy-heroku.git (push)

// # Heroku remote
// ╰ heroku create

// Nota : Antes de executar novamente o comando heroku create , remova o heroku que já existe no remote da aplicação, caso contrário será criado um novo repositório no Heroku sem a associação a nenhum remote.
// Para excluir um remote:
// ╰ git remote rm heroku

// Para dar um nome específico para o repositório, você pode informá-lo logo após o comando heroku create
// ╰ heroku create meu-primeiro-deploy-2930

// # Nomeação do remote
// -Por padrão, o CLI vai nomear todos os remotes criados como heroku. Porém, podemos criar o nosso remote passando um nome diferente. Isso pode ser feito utilizando a flag --remote:
// ╰ heroku create meu-deploy-de-testes-29302 --remote heroku-homolog

// Podemos, também, renomeá-los utilizando o comando 'git remote rename'. O comando abaixo  vai renomear o remote heroku para heroku-origin.
// ╰ git remote rename heroku heroku-origin

// Vincular um app existente a um novo remote
// - Utilize a sintaxe heroku git:remote -a nome-do-seu-app-heroku --remote nome-do-seu-remote.
// ╰ heroku git:remote -a meu-deploy-de-testes-29302 --remote heroku-test

// # Buildpack
// Com um buildpack, conseguimos fazer facilmente o deploy da nossa aplicação criada em React, mantendo as páginas de "maneira estática" e sem precisar de um back-end server-side. Faremos isso utilizando o buildpack 'mars/create-react-app'. Além disso, ele utilizará 'Nginx', o que vai prover uma otimização da performance e da segurança ao nosso app.
https://elements.heroku.com/buildpacks

// ### Fazendo deploy
// - Para fazer deploy do seu app Heroku, basta você utilizar o comando git push de seu repositório local para a branch master do remote do Heroku;

// Feito isso, caso seu build tenha sido feito com sucesso, no terminal será logada uma mensagem parecida com a seguinte:
[…]
remote: Released v3
remote: https://nome-do-seu-app-123.herokuapp.com/ deployed to Heroku
remote:
remote: Verifying deploy… done.
[…]

// Podemos fazer o push do nosso remote heroku-homolog também! Dessa forma, execute o mesmo comando acima, apenas mudando o nome do remote:
// ╰ git push heroku-homolog master

// Pronto! Acesse a URL e verá que sua aplicação do remote heroku-homolog está no ar!

// Podemos publicar uma versão que não está na branch master local. A versão que queremos publicar, na realidade, está, por exemplo, em uma branch de uma feature nova para a aplicação que você está desenvolvendo. Para isso, crie uma nova branch a partir da master:
// # git checkout -b branch-teste

// Nessa branch, você vai alterar o conteúdo de App.js para:
// # meu-primeiro-deploy-hekoru/src/App.js
import React from ‘react’;
import './App.css’;

function App() {
return (

<div className="App">
Meu primeiro deploy no Heroku!
</div>
);
}

export default App;
// # Em seguida, rode os seguintes comandos do git:
// ╰ git add .
// ╰ git commit -m 'Meu primeiro deploy no Heroku'

// Após ter realizado o commit das alterações, utilize o seguinte comando para realizar o deploy:
// ╰ git push heroku branch-teste:master

// Observe que foi necessário informar, ao final do comando, que o deploy deve ser realizado na branch master do remote heroku . Isto é necessário sempre que você estiver trabalhando em uma branch que não seja a sua master. No exemplo mostrado, estamos trabalhando na branch de nome branch-teste e realizamos o push com destino ao remote heroku .
// Então, caso se tenha um process.env.REACT_APP_API_URL no front-end, e REACT_APP_API_URL tenha o valor "xablau" naquele momento, ele vai apagar process.env.REACT_APP_API_URL e irá substituir por "xablau" . Por esse motivo, na hora de subir o front-end no Heroku , é preciso setar as variáveis de ambiente antes de executar o comando de push , pois é no momento do push que o npm run build é executado e que os process.env.* são convertidos para os valores das variáveis.


// # Lidando com vários deploys
// - É possível iniciar um novo deploy mesmo que um outro, do mesmo app , já esteja executando e ainda não tenha finalizado. Por exemplo, duas pessoas estão contribuindo para o mesmo projeto e executam push de commits diferentes quase ao mesmo tempo. Se isso ocorrer, ambos os processos serão iniciados paralelamente e, conforme os processos forem finalizando, as versões serão publicadas.

// ### Acompanhando sua aplicação

// # Gerenciando seus apps
// - Após o deploy, seu serviço fica disponível em uma URL do Heroku, e o app pode ser gerenciado pelo CLI. Para listar os serviços que você tem em execução, utilize o comando apps :
// ╰ heroku apps
=== diegoserafim1@gmail.com Apps
tranquil-fjord-28295

// Para ver os detalhes de um app específico, utilize o comando apps:info :
// ╰ heroku apps:info nome-do-seu-app-12345

// # Variáveis de ambiente
// - Caso o seu projeto possua variáveis de ambiente, você pode setá-las utilizando o comando config:set.
// ╰ heroku config:set TESTE="texto qualquer" --app nome-do-seu-app-12345

// Para listar as variáveis de ambiente, basta utilizar o comando config.
// ╰ heroku config --app nome-do-seu-app-12345

// # Logs

// Para monitorar os logs dos apps, utilize logs:
// ╰ heroku logs --app nome-do-seu-app-12345

// Por padrão, o comando retorna as últimas 100 linhas de logs. Caso você queira mudar isso, utilize o parâmetro --num our -n:
// ╰ heroku logs -n 200 --app nome-do-seu-app-12345

// O parâmetro --tail ou -t abre uma sessão para mostrar em tempo real os últimos logs. Para retornar ao prompt , basta executar Ctrl+C :
// ╰ heroku logs --tail --app nome-do-seu-app-12345  

// # Removendo um app do Heroku
// - Anteriormente você viu como remover um remote para que ele não aponte mais para um app no Heroku. De maneira semelhante é possível remover também um app que você publicou lá. Para isto utilize o comando heroku destroy através da sintaxe:
// ╰ heroku destroy --app nome-do-app-12345 --confirm nome-do-app-12345

// ### Vendo tudo isso na prática
// - Agora vamos ver tudo isso na prática. Esses dois vídeos mostram como fazer deploy no Heroku de uma API em Express e de um projeto React criado com o CRA.

// ╰ mkdir heroku-01 && cd heroku-01
// ╰ npm init -y
// ╰ npm install --save express
// index.js
// package.js/script - "start": "node index.js",
// inicia o git
// git init
// verifica a versão do heroku
// ╰ heroku --version
heroku/7.59.0 linux-x64 node-v12.21.0

// cria a configuração do heroku
// ╰ heroku create
Creating app... done, ⬢ calm-falls-15231
https://calm-falls-15231.herokuapp.com/ | https://git.heroku.com/calm-falls-15231.git

// não esqueça de criar o arquivo '.gitignore' node_modules

// verificamos os remotes no nosso git gerados com o 'heroku create'
// ╰ git remote -v
heroku	https://git.heroku.com/calm-falls-15231.git (fetch)
heroku	https://git.heroku.com/calm-falls-15231.git (push)

// subindo a aplicação para o heroku
// ╰ git add .
// ╰ git commit -m "Iniciando o heroku-01"
// ╰ git push heroku master
// link da criação
// remote:        https://calm-falls-15231.herokuapp.com/ deployed to Heroku

// o nome da aplicação é 'calm-falls-15231'
// logs da aplicação - 'cmd + nome aplicação + -t', -t para ficar escutando na porta  

// # buildpack
// - Camada interna do Heroku Buildpack para 'create-react-app'
https://elements.heroku.com/buildpacks/mars/create-react-app-buildpack

// ╰ npx create-react-app heroku-react
// ╰ cd heroku-react
// ╰ git init 

// verifique o Quick start do link à cima
// ╰ heroku create -b mars/create-react-app
// assim o nosso heroku vai entender que vai usar esses scripts
Creating app... done, ⬢ desolate-mesa-96040
Setting buildpack to mars/create-react-app... done
https://desolate-mesa-96040.herokuapp.com/ | https://git.heroku.com/desolate-mesa-96040.git

// subindo a aplicação para o heroku
// ╰ git add .
// ╰ git commit -m "Iniciando o heroku-02"
// ╰ git push heroku master
// link da criação
// remote: https://glacial-oasis-30666.herokuapp.com/

// ==============================
// -- > CONTEÚDO do dia - 29.1 -- <---/ FIM -----------------------------------------//
// ==============================
// -- > AULA ao VIVO - 29.1 ----- <---/ INICIO --------------------------------------//
// ==============================


// ==============================
// -- > AULA ao VIVO - 29.1 ----- <---/ FIM -----------------------------------------//
// ==============================
// -- > EXERCÍCIO do dia - 29.1 -- <---/ INICIO --------------------------------------//
// ==============================

// # Agora, a prática


// # Recursos adicionais

// Documentação

// ==============================
// -- > EXERCÍCIO do dia - 29.1 -- <---/ FIM -----------------------------------------//
// ============================== NodeJS - Infraestrutura - Deploy com Heroku
// ...
