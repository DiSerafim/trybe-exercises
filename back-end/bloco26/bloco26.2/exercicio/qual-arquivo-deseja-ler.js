// Importa os módulos: fs/promises e readline
const fs = require('fs').promises;
const readline = require('readline');

// função que utiliza o readline.question, mas retorna uma Promise
function question(message) {
  // usa do readline conforme mostrado na documentação.
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    // ao abrir a pergunta, faz isso dentro de uma Promise.
    rl.question(message, (answer) => {
      rl.close();
      // Dessa forma, quando obtivermos a resposta,
      // resolvemos nossa Promise com a resposta.
      // Assim, quem chama a função não precisa
      // se preocupar com callbacks, e pode obter a resposta
      // através da Promise que retornamos.
      resolve(answer);
    });
  });
}
// Cria a função que será responsável pelo fluxo todo. Vamos chamá-la de start:
async function start() {
  // Como a função `question` retorna uma Promise,
  // podemos utilzar `await` para obter a resposta.
  const fileName = await question('Digite o caminho do arquivo que deseja ler: ');
  try {
    // realiza a leitura do arquivo
    const fileContent = await readFile(fileName, 'utf-8');
    // E exibir seu resultado na tela
    console.log(fileContent);
  } catch (err) {
    // Caso um erro aconteça, exibe a mensagem de erro na tela.
    console.log('Arquivo inexistente');
  }
}

start();
