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
