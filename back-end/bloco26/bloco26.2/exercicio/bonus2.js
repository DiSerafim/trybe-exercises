// 2#
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