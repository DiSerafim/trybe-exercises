const dogNames = require('dog-names');
(dogNames.femaleRandom()); // 'Lucy'

// verificando com o console
const dogNames = require('dog-names');
console.log(dogNames.femaleRandom()); // 'Lucy'

// desestruturando
const { femaleRandom } = require('dog-names');
console.log(femaleRandom()); // 'Lucy'

// para ver o resultado
// -- node index.js
