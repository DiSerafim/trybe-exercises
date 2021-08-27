const fs = require('fs');

module.exports = (nomeDoArquivo, conteudoDoArquivo) => {
  fs.writeFileSync(`${__dirname}/${nomeDoArquivo}`, conteudoDoArquivo);

  return 'ok';
};
