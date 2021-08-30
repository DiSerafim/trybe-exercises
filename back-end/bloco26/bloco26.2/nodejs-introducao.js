// ============================== Node.js - Fluxo Assíncrono
// -- > CONTEÚDO do dia - 26.2 -- <---/ INICIO --------------------------------------//
// ==============================

// Realizar operações assíncronas utilizando callbacks;
// Realizar operações assíncronas utilizando Promises;
// Ler e escrever arquivos localmente com Node.js;
// Escrever seus próprios scripts que criam e consomem Promises;
// Reescrever código que usa callbacks para que use Promises.


// # Conteúdo

// ### Callbacks
// - tem a ver com "chamar de volta"

// Vamos usar como exemplo a função 'readFile' do módulo 'fs' do Node.js. Ela realiza a leitura de um arquivo e, quando termina, chama uma função de 'callback', passando o resultado:
const fs = require('fs');

fs.readFile('./arquivo.txt', (err, content) => {
  if (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
    return;
  }

  console.log(`Arquivo lido com sucesso. Conteúdo: ${content.toString('utf8')}`);
});
// - veja o que esse código faz:
// # Primeiro, pedimos que o Node.js leia o arquivo, e passamos uma função de callback;
// # Quando a leitura do arquivo é concluída ou um erro acontece, nossa função é chamada;
// # Dentro dela, a primeira coisa que fazemos é verificar se existe um erro. Caso exista, escrevemos ele no console e encerramos a execução com o return;
// # Caso nenhum erro tenha acontecido, sabemos que nosso arquivo foi lido com sucesso e, portanto, seu conteúdo está no segundo parâmetro, que chamamos de content.

// Esse formato de 'callback' que recebe dois parâmetros, 'erro e resultado', não foi utilizado por acaso. Callbacks desse tipo são chamadas de node-style callbacks e são, por convenção, a melhor maneira de se estruturar uma callback. Toda API de módulos nativos do Node.js utiliza esse mesmo formato de callbacks.

// O lado ruim dos callbacks
// - É que o resultado de uma operação só existe dentro daquela callback; ou seja: se precisamos executar uma coisa depois da outra, precisamos colocar uma callback dentro da outra.

// Suponhamos que precisamos ler, sequencialmente, 3 arquivos, e que vamos fazê-lo de forma assíncrona, para não travar nosso servidor. Mais ou menos assim:
const fs = require('fs');

fs.readFile('file1.txt', (err, file1Content) => {
  if (err) return console.log(`Erro ao ler arquivo 1: ${err.message}`);

  console.log(`Lido file1.txt com ${file1Content.byteLength} bytes`);

  fs.readFile('file2.txt', (err, file2Content) => {
    if (err) return console.log(`Erro ao ler o arquivo 2: ${err.message}`);

    console.log(`Lido file2.txt com ${file2Content.byteLength} bytes`);

    fs.readFile('file3.txt', (err, file3Content) => {
      if (err) return console.log(`Erro ao ler o arquivo 3: ${err.message}`);

      console.log(`Lido file3.txt com ${file3Content.byteLength} bytes`);
    });
  });
});
// Com três níveis de indentação, o código começa a ficar menos legível. Como seria se tivéssemos ainda mais níveis de callbacks aninhadas?
// damos o nome de callback hell , que é quando temos uma callback dentro de outra, dentro de outra, dentro da outra etc.

// Uma forma de tentar resolver é quebrar o código em infinitas funções menores, que não fazem nada além de chamar a próxima callback, isso também não é tão simples, organizado, ou mesmo bonito, e acaba por não funcionar. Veja um exemplo:
const fs = require('fs');

const file3Callback = (err, file3Content) => {
  if (err) return console.log(`Erro ao ler o arquivo 3: ${err.message}`);

  console.log(`Lido file3.txt com ${file3Content.byteLength} bytes`);
};

const file2Callback = (err, file2Content) => {
  if (err) return console.log(`Erro ao ler o arquivo 2: ${err.message}`);

  console.log(`Lido file2.txt com ${file2Content.byteLength} bytes`);

  fs.readFile('file3.txt', file3Callback);
};

const file1Callback = (err, file1Content) => {
  if (err) return console.log(`Erro ao ler arquivo 1: ${err.message}`);

  console.log(`Lido file1.txt com ${file1Content.byteLength} bytes`);

  fs.readFile('file2.txt', file2Callback);
};

fs.readFile('file1.txt', file1Callback);

// Depois de uma ou duas funções "aninhadas", fica fácil perder a linha de raciocínio, 
// como resolvemos isso?

// ### Promises
// introduzidas ao JavaScript em 2015 como uma forma de resolver a bagunça trazida pelas callbacks.

// Promise, não é muito diferente da ideia de uma promessa na vida rea

// uma promessa é criada, e dentro dela existe código a ser executado. Se o código é executado sem nenhum problema, a Promise é resolvida através da função 'resolve'.
// Se algo dá errado durante a execução do código, a Promise é rejeitada através da função reject.

// A grande sacada das 'Promises' está em como tratamos o 'sucesso' ou o 'erro'. 
// Com callbacks temos apenas uma função que recebe tanto o 'sucesso' quanto o 'erro'. 
// Com Promises temos uma forma de registrar uma callback para 'sucesso' e outra forma de registrar uma callback para 'erros'.

// podemos registrar vários callbacks de sucesso para serem executados um após o outro, sendo que o próximo callback recebe o resultado do callback anterior. Fazemos isso utilizando vários .then numa mesma Promise.

// As funções que passamos para cada then serão executadas em sequência, e o resultado de uma será passado para a próxima.

// # pasta - PROMISSEEXEMPLO

// - funcaoSemPromise.js
function calcularDivisao(num1, num2) {
  if (num2 == 0) throw new Error('Não pode ser feito uma divisão por zero');
  
  const resultado = num1 / num2;
  return resultado;
}

try {
  const resultado = calcularDivisao(2, 0);
  console.log("resultado: %s", resultado);
} catch (e) {
  console.log("erro: %s", e.message);
}
// erro: Não pode ser feito uma divisão por zero

// - funcaoComPromise.js
function calcularDivisao(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if (num2 == 0) reject(new Error("Não pode dividir um número por zero"));
    const resultado = num1 / num2;
    resolve(resultado);
  });
  return promise;
}

calcularDivisao(2, 200)
  .then((result) => console.log(result))
  .catch(err => console.log("erro: %s", err.message))
// 0.01

// Exemplo realizado no vídeo:

// Exemplo 1: Tratando erros de forma síncrona.
function dividirNumeros(num1, num2) {
  if (num2 == 0) throw new Error("Não pode ser feito uma divisão por zero");
  return num1 / num2;
}
try {
  const resultado = dividirNumeros(2, 1);
  console.log(`resultado: ${resultado}`);
} catch (e) {
  console.log(e.message);
}

// Exemplo 2: Tratando erros de forma assíncrona.
function dividirNumeros(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if (num2 == 0) reject(Error("Não pode ser feito uma divisão por zero"));
    const resultado = num1 / num2;
    resolve(resultado)
  });
  return promise;
}
dividirNumeros(2, 1)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));
// No segundo exemplo, repare que a função dividirNumeros retorna uma 'Promise', ou seja: ela promete que vai dividir os números.
// Caso não consiga realizar a divisão, ela rejeita essa promessa, utilizando a função reject.
// Caso dê tudo certo, ela resolve a promessa, utilizando a função resolve

// 1°
// - Sempre que precisarmos criar uma Promise, invocaremos o construtor através da palavra-chave 'new'. Para esse construtor, devemos passar uma função, que é chamada de 'executor'; é ela quem vai, de fato, tentar cumprir a promessa que estamos fazendo. A função ''executor'' recebe outras duas funções como parâmetros: 'resolve e reject'.
const p = new Promise((resolve, reject) => {

  // Aqui vamos realizar a lógica que precisamos

});

// 2°
// o próximo passo é escrever o código que, de fato, resolve a Promise. Já combinamos que nossa função promete ler um arquivo. Então, agora, vamos colocar dentro da função executor o código que busca resolver essa promessa:
const fs = require('fs');

function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });
  });
}
// Vamos entender o que estamos fazendo aqui:

// - Recebemos, como parâmetro, o nome do arquivo que queremos ler, 'fileName' na função 'readFilePromise(fileName)';
// - Criamos e retornamos uma nova Promise, 'Promise((resolve, reject) => {}';
// - Chamamos o módulo nativo do node, 'fs', para realizar a leitura desse arquivo, 'fs.readFile(fileName, (err, content) => {})' ;
// - Dentro da callback 'fs.readFile(fileName, (err, content) => {})' que passamos para a função 'readFile', verificamos se ocorreu um erro 'if(err)'. Se sim, rejeitamos a Promise e encerramos a execução - 'reject(err)';
// - Caso não tenha acontecido nenhum erro, resolvemos a Promise com o resultado da leitura do arquivo - 'resolve(content)'.

// a Promise só consegue retornar um resultado através da função 'resolve' que ela recebe.

// Vamos a um exemplo de como podemos consumir a Promise que estamos retornando da nossa função logo acima:

// A função me promete que vai ler o arquivo
readFilePromise('./file.txt')
  // Caso ela cumpra o que prometeu
  .then((content) => {
    // Escrevo o resultado no console
    console.log(`Lido arquivo com ${content.byteLength} bytes`);
  })
  // Caso ela não cumpra o que prometeu
  .catch((err) => {
    // Escrevo o erro no console
    console.error(`Erro ao ler arquivo: ${err.message}`);
});

// Essa funcionalidade nos permite criar estruturas de pipeline , em que uma operação recebe como entrada o resultado da operação anterior, e esses resultados todos podem ser compostos e formar um único resultado de forma extremamente fácil!

// vamos reescrever o código que nos levou ao callback hell mas, dessa vez, utilizando Promises:
const fs = require('fs');

function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });
  });
}
// A função me promete que vai ler o arquivo
readFilePromise('file1.txt')
  // Caso arquivo 1 seja lido,
  .then((content) => {
    // Escrevo o resultado no console
    console.log(`Lido file1.txt com ${content.byteLength} bytes`);
    // Chamo novamente a função, que me retorna uma nova Promise
    return readFilePromise('file2.txt');
  })
  // Caso a Promise retornada pelo `then` anterior seja resolvida,
  .then(content => {
    // Escrevemos o resultado no console
    console.log(`Lido file2.txt com ${content.byteLength} bytes`);
    // E chamamos a função novamente, recebendo uma nova promessa
    return readFilePromise('file3.txt');
  })
  // Caso a promessa de leitura do `file3.txt` seja resolvida,
  .then((content) => {
    // Logamos o resultado no console
    console.log(`Lido file3.txt com ${content.byteLength} bytes`);
  })
  // Caso qualquer uma das promessas ao longo do caminho seja rejeitada
  .catch((err) => {
    // Escrevemos o resultado no console
    console.log(`Erro ao ler arquivos: ${err.message}`);
});

// ### Lendo arquivos com métodos síncronos
// - não precisamos ler arquivos "em segundo plano". Podemos fazer isso de forma síncrona, ou seja: parar a execução de todo o programa até que um arquivo seja lido.

// O método disponibilizado pelo módulo 'fs' para leitura 'síncrona' de arquivos é o 'fs.readFileSync'.

// - pasta para nosso projeto, 'io-local'.
// - Iniciaremos nosso projeto Node.js usando o comando 'npm init'. 
// - Vamos criar um arquivo chamado 'readFileSync.js' e colocar código:
const fs = require('fs');

const nomeDoArquivo = 'meu-arquivo.txt';

try {
  const data = fs.readFileSync(nomeDoArquivo, 'utf8');
  console.log(data);
} catch (err) {
  console.error(`Erro ao ler o arquivo: ${err.path}`);
  console.log(err);
}
// Logo após importarmos o módulo 'fs', criamos uma variável chamada 'nomeDoArquivo', contendo o nome (fixo) do arquivo que vamos ler e, em seguida, chamamos o método 'fs.readFileSync'.
// Rode o script com node readFileSync.js . Gerou um erro, certo? Isso aconteceu porque estamos tentando ler um arquivo que não existe!

// # Método 'fs.readFileSync'
// - é responsável por ler arquivos e trazer seu conteúdo para dentro do Node.js. Por ser 'síncrono', ele espera a leitura do arquivo terminar para, só então, atribuir o resultado à constante 'data'.

// 'readFileSync' recebe 2 parâmetros:
// - O nome do arquivo;
// - Um parâmetro opcional que, quando é uma string, define o encoding que será utilizado durante a leitura do arquivo.

// Se ocorrer um erro na leitura do arquivo?

// Com funções síncronas, como 'readFileSync', você deve tratar explicitamente os erros que puderem acontecer.
// Nesse exemplo, usamos um bloco 'try...catch' para capturar quaisquer erros que possam acontecer durante a leitura do arquivo e imprimimos uma mensagem para o usuário no terminal.

// vamos resolver o probleminha que estamos tendo ao tentar ler o arquivo!
// crie um arquivo 'meu-arquivo.txt' com algum conteúdo dentro!

// Ao rodar o script 'readFileSync.js' com o comando 'node readFileSync.js', verá o conteúdo do seu arquivo impresso no terminal.

// e se tivéssemos outras partes do script que não deveriam esperar a leitura do arquivo ser feita? e se tivéssemos que ler vários arquivos ao mesmo tempo?
// Para isso, utilizamos um método assíncrono.

// ### Lendo arquivos com métodos assíncronos
// - O método fornecido pelo módulo 'fs' para leitura 'assíncrona' de arquivos é o 'fs.readFile'. a função 'readFile' aceita um 'callback', que é chamado quando a leitura do arquivo termina.

// crie um arquivo chamado 'readFile.js' dentro da pasta 'io-local'
// coloca nele o código:
const fs = require('fs');

const nomeDoArquivo = 'meu-arquivo.txt';

fs.readFile(nomeDoArquivo, 'utf8', (err, data) => {
  if (err) {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1);
  }
  console.log(`Conteúdo do arquivo: ${data}`);
});

// # Método 'fs.readFile'
// - é responsável por ler arquivos e trazer seu conteúdo para dentro do Node.js.

// 'fs.readFile' recebe 3 parâmetros:
// - O nome do arquivo;
// - Um parâmetro opcional que, quando é uma string, define o encoding que será utilizado durante a leitura do arquivo;
// - Uma callback que permite receber e manipular os dados lidos do arquivo.

// A callback é uma função que recebe 2 parâmetros: 'err e data'

// O tipo de 'encoding' que escolhemos é muito importante. Se não for especificado, por padrão, o arquivo será lido como 'raw buffer', que é um formato muito útil quando estamos enviando dados através de requisições 'HTTP'. No nosso caso, como queremos manipular o conteúdo do arquivo como uma string, então o certo é especificar o encoding.

// O módulo 'fs' possui um segundo modelo de API que, em vez de trabalhar com 'callbacks', retorna 'Promises', muito mais recomendável.

// Para utilizar a interface de Promises do 'fs', precisamos alterar a importação do módulo 'fs', importando ('fs').promises.
// como ficaria o código se utilizarmos Promises:
const fs = require('fs').promises;

const nomeDoArquivo = 'meu-arquivo.txt';

fs.readFile(nomeDoArquivo, 'utf8')
.then((data) => {
  console.log(`Conteúdo do arquivo: ${data}`);
})
.catch((err) => {
  console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
  // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
  process.exit(1);
});

// ### Escrevendo dados em arquivos

// O módulo fs também disponibiliza um método 'writeFile', que funciona utilizando callbacks. Vamos utilizar diretamente o módulo '('fs').promises'.

// io-local/writeFile.js
const fs = require('fs').promises;

fs.writeFile('./meu-arquivo.txt', 'Meu textão')
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });
  // Rode o script com 'node writeFile.js'.
  // Repare que o conteúdo do meu-arquivo.txt foi alterado para "Meu textão".

// ### Utilizando async/await
// - Essas duas palavras-chave foram criadas para trabalhar com 'Promises' como se estivéssemos trabalhando com código 'síncrono'.

// toda função na qual utilizamos async, automaticamente passa a retornar uma Promise, que será rejeitada em caso de erro, e resolvida em caso de sucesso.
const fs = require('fs').promises;

async function main() {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Meu textão');
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}
main();
// para podermos utilizar o async/await, precisamos criar uma função main e colocar nossa lógica dentro dela. O await só pode ser utilizado dentro de funções async 

// não temos mais nenhum .then , e que todo o tratamento de erro e sucesso foi feito com um 'try ... catch'.

// writeFile, você pode especificar algumas opções na escrita de arquivos passando um 3° parâmetro opcional para os métodos 'writeFile' e 'writeFileSync'. 
// A opção 'flag' especifica como o arquivo deve ser aberto e manipulado. O padrão é 'w', que especifica que o arquivo deve ser aberto para escrita.
// Se o arquivo não existir, ele é criado. Caso contrário, ele é reescrito, ou seja, tem seu conteúdo apagado antes de o novo conteúdo ser escrito.
// A flag 'wx', por exemplo, funciona como 'w', mas lança um erro caso o arquivo já exista:
const fs = require('fs').promises;

// A flag wx abre o arquivo para escrita **apenas** caso ele não exista.
fs.writeFile('./meu-arquivo.txt', 'Eu estive aqui :eyes:', { flag: 'wx' })
.then(() => {
  console.log('Arquivo salvo');
})
.catch((err) => {
  // Se o arquivo existir, um erro é retornado
  console.error('err');
});
// No código, mude o nome do arquivo para 'meu-novo-arquivo.txt' e rode novamente o script com 'node writeFileSync.js'. Repare que foi criado um novo arquivo com o nome que utilizamos e com o conteúdo Eu estive aqui :eyes: .

// # Rodando tudo junto

// - Promises são executadas assim que são criadas. 
// - todos os arquivos serão lidos ao mesmo tempo e, não teremos uma forma de saber quando cada um vai terminar de ser lido.
// - e se precisarmos do resultado da leitura dos três arquivos?

// # Promise.all!
// - é um método da Promise que nos permite passar um array de Promises e receber, de volta, uma única Promise.
// Esse método também nos permite utilizar um único catch

// vamos escrever, a soma do tamanho de todos os arquivos. Além disso, vamos utilizar o módulo '('fs').promises'.
const fs = require('fs').promises;

Promise.all([
  fs.readFile('file1.txt'),
  fs.readFile('file2.txt'),
  fs.readFile('file3.txt'),
])
  .then(([file1, file2, file3]) => {
    const fileSizeSum = file1.byteLength + file2.byteLength + file3.byteLength;
    console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);
  })
  .catch((err) => {
    console.error(`Erro ao ler arquivos: ${err.message}`);
  });

// # node promiseAll.js   
// Lidos 3 arquivos totalizando 248 bytes

// -- > CONTEÚDO do dia - 26.2 -- <---/ FIM -----------------------------------------//
// ==============================
// -- > AULA ao VIVO - 26.2 ----- <---/ INICIO --------------------------------------//
// ==============================

 
 
// -- > AULA ao VIVO - 26.2 ----- <---/ FIM -----------------------------------------//
// ==============================
// -- > EXERCÍCIO do dia - 26.2 -- <---/ INICIO --------------------------------------//
// ==============================

// Agora a prática

// 1- Crie uma função que recebe três parâmetros retorna uma Promise.
// - Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números".
// - Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro((a + b) * c).
// - Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// - Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.
// Resolução
// - mkdir exercicio
// - npm init
// - package.json
{
  // ...
  "scripts": {
    "start": "node index.js"
  },
  // ...
}

// - index.js
function doMatch(a, b, c) {
  return new Promise((resolve, reject) => {
    // garante que todos os valores sejam numéricos
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
      //caso não seja 'number', rejeitamos
      reject('Imforme apenas números');
    // faz a soma
    const resultado = (a + b) * c;
    // valida o resultado se for maior que 50
    if (resultado < 50) 
      return reject('Valor muito baixo');
    
    resolve(resultado);
  });
}
// Chama a função nas condições de entrada e verifica sua saída
doMatch(10, 10, 10)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))
// 200
doMatch(1, 1, 'a')
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))
// Imforme apenas números
doMatch(1, 1, 1)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))
  // Valor muito baixo
  
// 2- Escreva um código para consumir a função construída no exercício anterior.
// - Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1) .
// - Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
// - Utilize then e catch para manipular a Promise retornada pela função:
// - Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
// - Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.

// Resolução
// - pasta exercicio
// - package.json
{
  // ...
  "scripts": {
    "index2": "node index2.js"
  },
  // ...
}

// - index2.js
function doMath(a, b, c) {
  return new Promise((resolve, reject) => {
    // garante que todos os valores sejam numéricos
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
      //caso não seja 'number', rejeitamos
      reject('Imforme apenas números');
    // faz a soma
    const resultado = (a + b) * c;
    // valida o resultado se for maior que 50
    if (resultado < 50) 
      return reject('Valor muito baixo');
    
    resolve(resultado);
  });
}
// Chama a função nas condições de entrada e verifica sua saída
doMath(50, 10, 10)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))
// 200
doMath(1, 1, 50)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))
// Imforme apenas números
doMath(1, 50, 1)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))
  // Valor muito baixo

// criar as funções para gerar números aleatórios..
function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

function callDoMath() {
  /* Criamos um novo array de 3 posições
   * e utilizamos o `map` para gerar um número aleatório
   * para cada posição do Array
   */
  const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);
  // .. e chamar doMath
  doMath(...randomNumbers)
   .then(result => console.log(result))
   .catch(err => console.log(err.message))
}

// 3- Reescreva o código do exercício anterior para que utilize async/await .
// - Lembre-se: a palavra chave await só pode ser utilizada dentro de funções async .

// Resolução
// - pasta exercicio
// - package.json
{
  // ...
  "scripts": {
    "index3": "node index3.js"
  },
  // ...
}
// - index3.js
function doMath(a, b, c) {
  return new Promise((resolve, reject) => {
    // garante que todos os valores sejam numéricos
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
      //caso não seja 'number', rejeitamos
      reject('Imforme apenas números');
    // faz a soma
    const resultado = (a + b) * c;
    // valida o resultado se for maior que 50
    if (resultado < 50) 
      return reject('Valor muito baixo');
    
    resolve(resultado);
  });
}
// Chama a função nas condições de entrada e verifica sua saída
doMath(50, 10, 10)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))
// 200
doMath(1, 1, 50)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))
// Imforme apenas números
doMath(1, 50, 1)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))
  // Valor muito baixo

// criar as funções para gerar números aleatórios..
function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}
async function callDoMath() {
  /* Um novo array de 3 posições
   * e utilizamos o `map` para gerar um número aleatório
   * para cada posição do Array
   */
  const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);
  // .. e chamar doMath
  try {
    const resultado = await doMath(...randomNumbers);
    console.log(resultado);
  } catch (err) {
    console.log(err);
  }
}

// 4- simpsons.json Utilize o arquivo, Você pode utilizar then e catch, async/await ou uma mistura dos dois para escrever seu código. Procure não utilizar callbacks.
// - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson .
// - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
// - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
// - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
// - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
// - Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.
// Resolução
// - pasta exercicio
// - package.json
{
  // ...
  "scripts": {
    "simpsons": "node simpsons.js"
  },
  // ...
}
// - npm i readline-sync
// - simpsons.js
const fs = require('fs').promises;

// 1- função que ler todos os dados do arquivo e imprima na tela
fs.readFile('./simpsons.json', 'utf-8')
  .then((fileContent) => {
    // Converter o conteúdo do arquivo de JSON para um Array utilizando JSON.parse
    return JSON.parse(fileContent);
  })
  // Mapear cada objeto do Array para uma string no formato correto
  .then((simpsons) => {
    return simpsons.map(({ id, name }) => `${id} - ${name}`);
  })
  // Exibe as strings na tela
  .then((strings) => {
    strings.forEach((string) => console.log(string));
  });
// resultado
// # node simpsons.js

// 5- Crie uma função que lê e escreve vários arquivos ao mesmo tempo.
// - Utilize o Promise.all para manipular vários arquivos ao mesmo tempo.
// - Dado o seguinte array de strings: ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'] Faça com que sua função crie um arquivo contendo cada string, sendo o nome de cada arquivo igual a file<index + 1>.txt. Por exemplo, para a string "Finalmente", o nome do arquivo é file1.txt.
// - Programe sua função para que ela faça a leitura de todos os arquivos criados no item anterior, armazene essa informação e escreva em um arquivo chamado fileAll.txt.
// - O conteúdo do arquivo fileAll.txt deverá ser Finalmente estou usando Promise.all!!!.

// Resolução
// - package.json
"le-escreve-arquivos": "node le-escreve-arquivos.js"
// le-escreve-arquivos.js
// Importar o módulo fs e criar a função com o Array de strings
const fs = require('fs').promises;

async function arrayToFile() {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']
  // Utiliza a função map para criar um Array de Promises, cada um criando um arquivo
  const createFilePromises = strings.map((string, index) =>
    fs.writeFile(`./file${index + 1}.txt`, string)
  );
  // Utiliza Promise.all para aguardar a escrita de todos os arquivos
  await Promise.all(createFilePromises);
  // Realiza a leitura dos arquivos criados
  const fileNames = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ];
  const fileContents = await Promise.all(
    fileNames.map((fileName) => fs.readFile(fileName, 'utf-8'))
  );
  // Concatena o conteúdo dos arquivos e criar o arquivo novo
  const newFileContent = fileContents.join(' ');
  await fs.writeFile('./fileAll.txt', newFileContent);
}
arrayToFile();

// # Bônus

// 1- Crie um script que mostre na tela o conteúdo de um arquivo escolhido pela pessoa usuária:
// - Pergunte à pessoa usuária qual arquivo ela deseja ler.
// - Leia o arquivo indicado.
// - Caso o arquivo não exista, exiba na tela "Arquivo inexistente" e encerre a execução do script.
// - Caso o arquivo exista, escreva seu conteúdo na tela.

// resolução
// package.js
"qual-arquivo-deseja-ler": "node qual-arquivo-deseja-ler.js"
// qual-arquivo-deseja-ler.js

// teste
// # node qual-arquivo-deseja-ler.js

// 2- Crie um script que substitua uma palavra por outra em um arquivo escolhido pela pessoa usuária:
// - Pergunte à pessoa usuária qual arquivo ela deseja utilizar.
// - Leia o arquivo.
// - Caso o arquivo não exista, exiba um erro na tela e encerre a execução do script.
// - Caso o arquivo exista, solicite a palavra a ser substituída.
// - Solicite a nova palavra, que substituirá a palavra anterior.
// - Imprima na tela o conteúdo do arquivo com as palavras já substituídas.
// - Pergunte o nome do arquivo de destino.
// - Salve o novo arquivo no caminho de destino.
// - Dica: Utilize a classe RegExp do JS para substituir todas as ocorrências da palavra com replace(new RegExp(palavra, 'g'), novaPalavra) .

// Resolução
// # bonus2.js
// - importa os módulos necessários e criando a função question.
const fs = require('fs').promises;
const readline = require('readline');

function question(message) {
  // Realiza o uso do readline conforme mostrado na documentação.
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise((resolve) => {
    // ao abrir a pergunta, faz isso dentro de uma Promise.
    rl.question(message, (answer) => {
      rl.close();
      // Dessa forma, quando obtivermos a resposta,
      // podemos resolver nossa Promise com essa resposta.
      // Assim, quem chama nossa função não precisa
      // se preocupar com callbacks, e pode obter a resposta
      // através da Promise que retornamos.
      resolve(answer);
    });
  });
}
// função start, responsável pelo fluxo, e perguntamos o nome do arquivo a ser lido
// # const fs = require('fs').promises;
// # const readline = require('readline');

function question(message) {
  // Realiz o uso do readline conforme mostrado na documentação.
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    // ao abrirmos a pergunta, faz isso dentro de uma Promise.
    rl.question(message, (answer) => {
      rl.close();
      // Dessa forma, quando obtivermos a resposta,
      // podemos resolver nossa Promise com essa resposta.
      // Assim, quem chama nossa função não precisa
      // se preocupar com callbacks, e pode obter a resposta
      // através da Promise que retornamos.
      resolve(answer);
    });
  });
}
async function start() {
  const fileName = await question('Arquivo a ser lido: ');
  // Realiza a leitura do arquivo, utilizando um catch para tratar erros.
  const originalContent = await fs.readFile(fileName, 'utf-8')
    // Caso aconteça um erro ao ler o arquivo
    .catch(err => {
      // Mostra o erro na tela
      console.error(`Erro ao ler o arquivo: ${err}`);
      // E retorna `false`.
      // O valor retornado aqui do catch é o valor que será armazenado
      // na variável `originalContent`.
      return false;
    })
  // Se `originalContent` estiver vazia ou contiver um valor falso,
  // quer dizer que ocorreu um erro na leitura do arquivo e não devemos prosseguir.
  // Utilizamos o `return` para encerrar a execução
  if (!originalContent) return;
  // Pergunta quais palavras deverão ser substituídas, realizamos a substituição e exibimos o resultado na tela
  const oldWord = await question('Qual palavra deseja substituir? ');
  const newWord = await question('E qual palavra deve ficar em seu lugar? ');
  const newContent = originalContent.replace(new RegExp(oldWord, 'g'), newWord);
  console.log('Resultado da substituição: ');
  console.log(newContent);
  // Por último, perguntamos o nome do arquivo onde salvar o resultado e escrevemos no disco.
  const destinationPath = await question('Onde deseja salvar o resultado? ');
  await fs.writeFile(destinationPath, newContent);

}

start();

// ==============================
// -- > EXERCÍCIO do dia - 26.2 -- <---/ FIM -----------------------------------------//
// ============================== Node.js - Fluxo Assíncrono
// ...