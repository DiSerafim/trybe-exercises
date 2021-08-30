// Importar o módulo fs/promises e realizar a leitura do arquivo
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

// 2- função que recebe o id de um personagem e retorna uma Promise 
// Caso não haja uma personagem com o id informado, rejeite a Promise

// Importar o módulo fs/promises , criar a função e realizar a leitura do arquivo e a conversão do JSON em objeto
// const fs = require('fs').promises;

async function getSimpsonById(id) {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));
  // busca pelo Simpson desejado e, caso não encontrar, disparar um erro
  const chosenSimpson = simpsons.find((simpson) => simpson.id === id);
  if (!chosenSimpson) {
    // `throw` dispara um erro, deve ser tratado por quem chamou na função.
    // a linha abaixo rejeita a Promise da nossa função com o motivo 'id não encontrado'
    throw new Error('id não encontrado');
    // Em funções `async`, utilizar `throw` faz com que a Promise seja rejeitada,
  }
  // Caso a personagem exista, resolver a Promise com suas informações
  /* 
    Da mesma forma que `throw` aciona o fluxo de erro e rejeita a Promise,
    `return` aciona o fluxo de sucesso e resolve a Promise.
    a linha abaixo é equivalente a chamar `resolve(chosenSimpson)`
    dentro do executor de uma Promise.
  */
  return chosenSimpson;
}
getSimpsonById();

// 3- função que altera o arquivo simpsons.json retirando os personagens id 10 e 6.

// Importar o módulo fs/promises, criar a função e realizar a leitura do arquivo e o parsing do JSON
// const fs = require('fs').promises;

async function filterSimpsons() {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));
  // Filtra o array para remover as personagens que devem ser removidas
  const newArray = simpsons.filter(simpson => simpson.id !== '10' && simpson.id !== '6');
  // Escreve no arquivo o novo array filtrado
  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
}
filterSimpsons();
// 4- função que ler 'simpsons.json' e cria um novo arquivo, 'simpsonFamily.json', com id de 1 a 4.

// - Importar o módulo fs/promises , criar a função e realizar a leitura do arquivo e o parsing do JSON
// const fs = require('fs').promises;

async function createSimpsonFamily() {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));
  // Cria um novo array apenas com os membros da família
  const simpsonsFamily = simpsons.filter(simpson => [1, 2, 3, 4].includes(simpson.id));
  // Escreve o novo arquivo no disco
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}
createSimpsonFamily();

// 5- função que adicione ao arquivo simpsonFamily.json o personagem 'Nelson Muntz'.

// - Importar o módulo fs/promises , criar a função e realizar a leitura do arquivo e o parsing do JSON
// const fs = require('fs').promises;

async function addNelsonToFamily() {
  const simpsonsFamily = await fs.readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));
  // Adiciona uma nova pessoa ao array de simpsonsFamily
  simpsonsFamily.push({ "id": "8", "name": "Nelson Muntz" });
  // Escreve o novo conteúdo do arquivo
  await fs.writeFile('./simpsonsFamily.json', simpsonsFamily);
}
addNelsonToFamily();

// 6- função que substitui o personagem 'Nelson Muntz' po 'Maggie Simpson' no arquivo simpsonFamily.json.
// Importamos o módulo de promises do fs
// const fs = require('fs').promises;

function replaceNelson() {
  // Realiza a leitura do arquivo
  return fs.readFile('./simpsonsFamily.json', 'utf-8')
    // Interpreta o conteúdo como JSON
    .then((fileContent) => JSON.parse(fileContent))
    // Filtra o array para remover o personagem Nelson
    .then((simpsons) => simpsons.filter((simpson) => simpson.id !== '8'))
    // Cria um novo Array contendo a personagem Maggie
    .then((simpsonsWithoutNelson) => simpsonsWithoutNelson
      .concat([{ id: '8', name: 'Maggie Simpson' }]))
    // Escreve o novo array no arquivo
    .then((simpsonsWithMaggie) =>
      fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie)));
}
replaceNelson();
