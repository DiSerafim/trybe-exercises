// ============================== NodeJS - Deploy - Gerenciadores de Processos
// -- > CONTEÚDO do dia - 29.2 -- <---/ INICIO --------------------------------------//
// ==============================

// ### O que são gerenciadores de processo?
// ### PM2
// ### Gerenciando Processos
// ### Monitorando Processos
// ### Modo Cluster
// ### Ecosystem file
// ### Auto restart
// ### Assistindo a Alterações
// ### PM2 com outras linguagens
// ### PM2 com Heroku
// ### Para aprofundar mais!
// ### Vendo tudo isso na prática

// ### Objetivos

// - Entender o que são process managers;
// - Entender o porquê de utilizar ferramentas mais sofisticadas em produção;
// - Instalar, utilizar e aproveitar os principais recursos do PM2;
// - Fazer deploy no Heroku aproveitando recursos de um process manager.

// Conteúdo:

// ### O que são gerenciadores de processo?
// - Os 'Process Managers'(PMs) criados para facilitar e tornar mais eficaz o gerenciamento de processos. Os PMs permitem aproveitar melhor os recursos do servidor, nos ajudando a garantir a disponibilidade de nossas aplicações.

// # Algumas vantagens são:
// - Reload automático;
// - Abstração da complexidade de gerenciadores nativos;
// - Gerenciamento de sessões;
// - Facilidade de gerenciamento de múltiplos núcleos de processamento;
// - Responsabilidade do uso de cores delegados ao PM;
// - Gerenciamento de múltiplas aplicações no servidor;
// - Escalonamento dos processos;
// - Balanceamento de carga;
// - Monitoramento;
// - Gerenciamento de logs.

// # Gerenciadores de Processos Populares
// - PM2;
// - StrongLoop's PM; https://strong-pm.io/
// - Forever; https://github.com/foreversd/forever
// - SystemD do Linux.

// ### PM2
// - é um PM popular, principalmente na comunidade Node.js. O PM2 foi feito com o intuito de auxiliar o gerenciamento de aplicações em ambiente de produção, permitindo manter suas aplicações sempre rodando, reiniciando-as quando necessário, sem downtime, e facilitando o gerenciamento dos processos.

// # Instalação
// ╰ npm install pm2@latest -g   
// ╰ pm2 --version

// # Atualização
// ╰ pm2 update 

// ### Gerenciando Processos

// # Start
// ╰ pm2 start index.js

// Podemos utilizar a flag name para nomear o processo.
// ╰ pm2 start index.js --name <NOME_DO_PROCESSO>
// ou
// ╰ pm2 start index.js --name index

// # Stop
// ╰ pm2 stop <NOME_DO_PROCESSO>

// all no lugar do nome do processo. Para parar todos os apps:
// ╰ pm2 stop all

// # Delete
// ╰ pm2 delete <NOME_DO_PROCESSO>

// # Restart
// ╰ pm2 restart <NOME_DO_PROCESSO>

// Reload
// ╰ pm2 reload <NOME_DO_PROCESSO>

// ### Monitorando Processos

// List
// - lista todos os processos que estão sendo gerenciados pelo PM2
// ╰ pm2 list
/* 
┌───┬──────┬───────────┬─────────┬──────┬─────┬────────┬───┬────────┬─────┬─────┬──────┬──────────┐
│id │ name │ namespace │ version │ mode │ pid │ uptime │ ↺ │ status │ cpu │ mem │ user │ watching │
└───┴──────┴───────────┴─────────┴──────┴─────┴────────┴───┴────────┴─────┴─────┴──────┴──────────┘
*/ 
// Perceba que são exibidas informações importantes, como o id e o name de cada processo.
// (version) do seu app. Essa versão é aquela definida em seu package.json.

// O comando list também pode ser executado com ls , l e status
// ╰ pm2 ls

// Caso você queira exibir a lista de processos ordenada, basta passar a flag sort.
// ╰ pm2 list --sort name:desc
 
// # Show
// ╰ pm2 show <NOME_DO_PROCESSO>
// Através dele, é possível ver informações como a localização dos arquivos de logs, o caminho para o arquivo do processo, se aquele processo foi reiniciado etc.

// # Logs
// exibe o histórico de seus apps em tempo real.
// ╰ pm2 logs <NOME_DO_PROCESSO>

// # Monit
// - visualizar um dashboard em tempo real diretamente no seu terminal.
// ╰ pm2 monit

// # Interface Web
// - O Dashboard vai mostrar os processos em execução pelo PM2 em sua máquina. Dito isso, para visualizar as métricas, lembre-se de deixar algum processo rodando.
// Para utilizar o serviço, basta criar uma conta no site oficial.
https://id.keymetrics.io/api/oauth/register
// Após ter a conta criada, basta executar:
// ╰ pm2 plus
// O comando te redirecionará para o navegador para você prosseguir com o login.

// Também é possível assistir aos logs em tempo real, criar métricas personalizadas, acompanhar o desempenho do app (requests ativas, consumos etc.) e mostrar também se houve algum restart ou problemas na aplicação.

// ### Modo Cluster
// Para aplicações Node.js, o PM2 possui um Modo Cluster . Esse modo permite escalar nossa aplicação entre as CPUs disponíveis na máquina, sem a necessidade de modificações no código, aumentando a performance e a disponibilidade de nossa app , de acordo com as CPUs disponíveis.

// Por baixo dos panos, é utilizado o Node.js Cluster Module, que escala a aplicação em processos filhos e automaticamente compartilha portas do servidor.
https://nodejs.org/api/cluster.html#cluster_cluster

// Para utilizar esse recurso, basta optar por instances ou i nos comandos start, reload ou restart, informando o número de processos.
// ╰ pm2 start index.js --instances 2 --name <NOME_DO_PROCESSO>
// serão iniciados dois processos.

// Outra opção é utilizar, no lugar do número de instâncias, a tag max ou 0 . Desse modo, o PM2 vai criar uma instância para cada CPU disponível na máquina.
// ╰ pm2 start index.js -i max --name <NOME_DO_PROCESSO>
// Se executado em uma máquina que possui quatro cores, serão iniciados quatro processos.

// # Scaling

// 1- Informando o total de processos que você quer:
// ╰ pm2 scale <NOME_DO_PROCESSO> 3
// Nesse caso, o número de processos será definido como três. Isso significa que, caso existam menos que três, novos processos serão criados. Se houver mais, serão excluídos processos para totalizar o "três" passado como parâmetro.

// 2- Informando o número de novos processos que você deseja adicionar. Para isso, basta utilizar a flag + junto ao número:
// ╰ pm2 scale <NOME_DO_PROCESSO> +3
// Aqui, serão adicionados três novos processos além dos que já estão em execução.

// # Stateless
// - Ao dizer que uma aplicação é stateless , estamos informando que ela não possui estado. Ou seja, nenhuma informação do usuário é salva em uma sessão para ser utilizada por ele em uma próxima sessão.

// Essa arquitetura permite, principalmente:
// - Escalar horizontalmente suas aplicações de maneira simples em múltiplos servidores;
// - Cachear de forma mais fácil e, consequentemente, tornar suas aplicações mais rápidas;
// - Menos complexidade de storages , já que esse processo é feito de maneira unificada e por uma solução especializada.

// ### Ecosystem file
// - É possível passar um arquivo de configuração para o PM2 executar suas aplicações. Esse arquivo é chamado de ecosystem . Nele você configura comportamentos, opções, variáveis de ambiente e arquivos de logs de cada aplicação.

// O arquivo de configuração pode ser feito nos formatos Javascript, JSON ou YAML.

// Exemplo de utilização:
// ╰ pm2 [start|restart|stop|delete] ecosystem.config.js

// # Javascript
// - arquivo ecosystem em Javascript :
module.exports = {
  apps: [
    {
      name: 'app',
      script: './index.js'
    },
    //...
  ]
};
// especificamos na propriedade apps os processos que teremos. Perceba que a propriedade recebe um array de objetos, o que significa que ela está preparada para receber a configuração de N aplicações.

// No objeto, definimos duas propriedades: 'name e script'. Ao fazer pm2 start em um script, definimos um nome e um arquivo de "index"? Então, esse nome e esse arquivo correspondem a essas propriedades que utilizamos no arquivo ecosystem.

// Um start através desse arquivo ecosystem ficaria assim:
// ╰ pm2 start ecosystem.config.js           
// se não fosse executado com ecosystem, teria a seguinte forma:
// ╰ pm2 start index.js --name <NOME_DO_PROCESSO> 

// # YAML
// - é um formato mais simples e muito comum para a criação de arquivos de configuração e definições. Por exemplo, na aula sobre o Heroku, vimos o Procfile, que é baseado em YAML

// O exemplo tem a mesma função que o exemplo em JavaScript, porém utiliza YAML:
apps:
- name: app
  script: ./index.js

// # Multiaplicativos
// - O ecosystem permite a definição de N aplicações. Para defini-las, basta utilizar a lista em apps. Por exemplo:
apps:
- name: app-1
  script: .app-1/index.js
- name: app-2
  script: .app-2/index.js
- name: app-3
  script: .app-3/index.js

// Ao executar um start apontando para esse arquivo, serão iniciados três processos, pois definimos três aplicações dentro de apps . Caso queira executar uma aplicação específica, é possível utilizando a flag --only.
// ╰ pm2 start ecosystem.config.yml --only app-1
// será iniciado apenas o app de nome "app-1".

// Caso queira executar apenas algumas aplicações, o parâmetro pode ser utilizado separando os apps desejados por vírgula.
// ╰ pm2 start ecosystem.config.yml --only "app-1,app-2"
// serão executados apenas o app-1 e o app-2.

// # Instâncias
// - número de instâncias que aquela aplicação deve ter, utilizando a funcionalidade do modo cluster.
apps:
- name: app
  script: ./index.js
  exec_mode: cluster
  instances: 4
// - Perceba o campo exec_mode . Através dele, habilitamos o modo cluster para esse app.
// - A propriedade instances indica o número de processos que será utilizado pela aplicação.

// # Variáveis de Ambiente
// - Para utilizar variáveis de ambiente, basta definir uma propriedade env_ + nome do ambiente

// para utilizar variáveis distintas para os ambientes de prod e homolog , definimos as propriedades env_prod e env_homolog:
apps:
- name: app
  script: ./index.js
  exec_mode: cluster
  instances: 4
  env_prod:
    ENVIRONMENT: PRODUCTION
  env_homolog:
    ENVIRONMENT: HOMOLOG

// Para executar, basta utilizar a opção env e selecionar quais variáveis serão passadas.
// ╰ pm2 start ecosystem.config.yml --env homolog

// imagine que queremos criar um ambiente de teste. Para isso, vamos criar a propriedade 'env_staging'.
// Vamos executar a aplicação da seguinte forma:
// ╰ pm2 start ecosystem.config.yml --env staging

// ### Auto restart
// - para manter a resiliência dos processos, o PM2 reinicia automaticamente processos que tenham falhado.

// # Memória máxima
// - por limitação de hardware, uma das configurações de auto restart do PM2 é a utilização máxima de RAM que aquele processo pode consumir.

// utilizamos a opção 'max_memory_restart'. Ela pode ser utilizada tanto como propriedade do app, no arquivo 'ecosystem', quanto diretamente no 'start' do CLI:
// ╰ pm2 start index.js --name <NOME_DO_PROCESSO> --max-memory-restart 20M
// Ou
apps:
- name: app
  script: ./index.js
  max_memory_restart: 20M

// o valor recebe a unidade de medida, que pode ser K ilobyte, M egabyte ou G igabyte.

// # Delay de restart
// - permite passar um valor fixo, em milissegundos, para a sua aplicação aguardar antes do PM2 restartá-la em caso de erros.

// Via CLI:
// ╰ pm2 start index.js --name <NOME_DO_PROCESSO> --restart-delay 100       
// o PM2 vai aguardar 100ms para tentar iniciar o processo.
// Também é possível configurá-lo através do arquivo ecosystem:
apps:
- name: app
  script: ./index.js
  restart_delay: 100

// # Estratégias de Backoff
// - configurar sua aplicação para reiniciar de maneira mais inteligente.

// Para configurá-lo, basta adicionar a tag --exp-backoff-restart-delay mais o tempo de delay no start . Você pode fazer isso pelo arquivo ecosystem também:
apps:
- name: app
  script: ./index.js
  exp_backoff_restart_delay: 100

// caso ocorra erros:
// - Vai reiniciar em 100ms;
// - Vai reiniciar em 150ms;
// - Vai reiniciar em 225ms.
// Dessa maneira, o delay entre os restarts vai crescendo em um movimento exponencial, chegando no máximo 15000ms .

// ### Assistindo a Alterações
// - em vez de ficar parando e executando sua aplicação manualmente toda vez, você pode dizer para o PM2 fazer para você quando algum arquivo for modificado.

// Para utilizar esse recurso, basta utilizar o parâmetro '--watch' no comando start:
// ╰ pm2 start index.js --name <NOME_DO_PROCESSO> --watch
// Ou através do ecosystem , especificando quais diretórios deverão ser observados:
apps:
- name: app
  script: ./index.js
  watch: ./

// ### PM2 com outras linguagens
// - Essa relação é feita a partir de uma lista de "interpretadores". Nessa lista, estão presentes a extensão e o respectivo interpretador da linguagem que está sendo utilizada em um projeto. A lista default é:
{
  ".sh": "bash",
  ".py": "python",
  ".rb": "ruby",
  ".coffee" : "coffee",
  ".php": "php",
  ".pl" : "perl",
  ".js" : "node"
}

// - Caso seja necessário executar uma aplicação em um formato diferente dos conhecidos pelo PM2, é possível utilizar a flag --interpreter e passar o interpretador desejado:
// ╰ pm2 start hello-world.py --interpreter=python

// ### PM2 com Heroku
// - O PM2 possui, além do CLI, um módulo para ser utilizado como dependência do seu projeto. Esse módulo é utilizado para usar as vantagens do PM2 dentro de um container.

// Primeiro, devemos adicionar o módulo ao nosso projeto. Estando na raiz do projeto, utilizamos o npm ou o yarn para instalá-lo:
// ╰ npm install pm2

// No Heroku, precisamos definir esse script no package.json , que ficará assim:
// ...
"scripts": {
  "start": "pm2-runtime start ecosystem.config.yml"
}
// ...

// O 'pm2-runtime' tem o objetivo de agrupar seus aplicativos em um ambiente de produção adequado do Node.js. Ele resolve problemas de execução de aplicativos Node.js dentro dos containers, como controle de fluxo de processo, monitoramento automático de aplicativos etc.

// precisamos criar o arquivo ecosystem que estamos referenciando no package.json.
// Para isso, basta criar um arquivo na raiz do projeto. Esse arquivo deve ter o mesmo nome que está no script de start, ou seja, o nome do arquivo da raiz deve ser:
// ecosystem.config.yml

// Em seguida, vamos colocar as configs desejadas.
apps:
- name: app
  script: ./index.js

// ### Para aprofundar mais!

// # Modo Cluster + Heroku
// - Como os Dynos são provisionados com multicores, conseguimos melhorar a resiliência e a performance de nossos apps.

// basta adicionar as propriedades que vimos anteriormente:
apps:
- name: app
  script: ./index.js
  exec_mode: cluster
  instances: max

// # Modo Cluster + Heroku + Dashboard
// - integrar o dashboard do PM2 ao Heroku para, além de ter um bom ambiente, sermos capazes de controlá-lo e monitorá-lo!
// ╰ heroku config:set PM2_PUBLIC_KEY=CHAVE_PUBLICA PM2_SECRET_KEY=CHAVE_PRIVADA PM2_MACHINE_NAME=NOME_DO_SERVER --app NOME_DO_APP_NO_HEROKU

// Temos três variáveis no comando acima: uma chave pública ( PM2_PUBLIC_KEY ), uma privada ( PM2_SECRET_KEY ) e um nome para identificar a máquina ( PM2_MACHINE_NAME ) que você está utilizando.

// ### Vendo tudo isso na prática

// resolução feita na pasta 'heroku-01' da aula anterior
// ╰ npm install pm2 -g
// ╰ pm2 --version
// cria o processo
// ╰ pm2 start index.js 
// para o processo
// ╰ pm2 stop index.js
// Ou, através do id 
// ╰ pm2 stop 0
// cria um nome para identificar o processo
// ╰ pm2 start index.js --name heroku-01
// lista os processos
// ╰ pm2 list
// deleta o processo pode indicar(nome ou Id)
// ╰ pm2 delete index
// restart processo (reinicia) demora um pouco para voltar ao ar
// ╰ pm2 restart 1
// reload - carrega a nova aplicação antes de desligar o processo anterior(RECOMENDADO)
// ╰ pm2 reload 1
// monitorar processos em tempo real
// ╰ pm2 monit
// Ou, mas detalhado
// ╰ pm2 show 1

// ==============================
// -- > CONTEÚDO do dia - 29.2 -- <---/ FIM -----------------------------------------//
// ==============================
// -- > AULA ao VIVO - 29.2 ----- <---/ INICIO --------------------------------------//
// ==============================


// ==============================
// -- > AULA ao VIVO - 29.2 ----- <---/ FIM -----------------------------------------//
// ==============================
// -- > EXERCÍCIO do dia - 29.2 -- <---/ INICIO --------------------------------------//
// ==============================

// # Agora, a prática


// # Recursos adicionais

// Documentação

// ==============================
// -- > EXERCÍCIO do dia - 29.2 -- <---/ FIM -----------------------------------------//
// ============================== NodeJS - Deploy - Gerenciadores de Processos
// ...
