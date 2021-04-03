// Conteudo do dia 24/03 bloco_7 - 7.2

// CONTEUDO NodeJS Assert---------------------------------
// EX-1:
const assert = require('assert'); // Sintaxe para incluir o módulo assert

assert.strictEqual(50, 50); // Sem erros: 50 == 50
assert.strictEqual(50, 70); // AssertionError: 50 == 70

// Ex-2
const assert = require('assert');

function division(x, y) {
  return x / y;
}
const expected = division(9, 3);

assert.strictEqual(expected, 3, 'Nove dividido por três é igual a três');

// Ex-3
const assert = require('assert');
const sum = (num1, num2) => num1 + num2;
const expected = sum(5, 4);

// assert.equal(expected, '9', '5 + 4 é igual a 9'); // == 
// assert.strictEqual(expected, '9', '5 + 4 é igual a 9'); // ===
assert.notStrictEqual(expected, 9, 'Não pode ser isgual a 9');

// Ex-4
const assert = require('assert');

function add(a, b) {
  return a + b;
}
const expected = add(1, 2);
assert.ok(expected === 3, 'Um mais dois é igual a três'); // Checa se o primeiro argumento é verdadeiro
assert.strictEqual(expected, 3, 'Um mais dois é igual a três'); // Checa se o primeiro e segundo argumentos são iguais em valor e tipo (===)
assert.notStrictEqual(expected, 4, 'Um mais dois é igual a três (e não quatro!)'); // Checa se o primeiro e segundo argumentos são diferentes (!==)

// Ex-5
const assert = require('assert');
const list1 = [1, 2, 3, 4, 5];
const list2 = [1, 2, 3, 4, 3];
assert.deepStrictEqual(list1, list2, 'Erro: list1 e list2 não são estritamente iguais');

// Ex-6
const assert = require('assert');
const person1 = { name: 'john', age: 21 };
const person2 = { name: 'john', age: 21 };
assert.deepStrictEqual(person1, person2, 'Erro: person1 e person2 não são estritamente iguais');

// Ex-7
const assert = require('assert');
const person1 = { name: 'john', age: 21 };
const person3 = { name: 'john', age: 19 };
assert.notDeepStrictEqual(person1, person3, 'Erro: os valores dos objetos são estritamente iguais');

// Ex-8
function division(x, y) {
  return x / y;
}
const assert = require('assert');
// declaração da função division, definida anteriormente...
assert.strictEqual(division(10, 2), 5); // OK
assert.strictEqual(division(10, 0), 0, 'deve retornar 10'); // 💣

// Ex-9 throw
const assert = require('assert');
function division(x, y) {
  if (y === 0) throw new Error('parameter y must not be 0');
  return x / y;
}
assert.strictEqual(division(10, 2), 5); // OK
assert.throws(() => { division(10, 0); }, /^Error: parameter y must not be 0$/); // OK

// Ex-10
function division(x, y) {
  // Queremos que o código retorne um erro com uma mensagem específica
  // caso o parâmetro y seja 0. Por isso lançamos uma exceção se essa condição
  // for verdadeira, o que irá interromper a execução da função.
  if (y === 0) throw new Error('parameter y must not be 0');
  return x / y;
}

// Ex-11
const assert = require('assert');
assert.strictEqual(typeof myFunction, 'function');


// AULA AO VIVO ----------------------------------------------------------------------

// TDD (Test Driven Development);

const assert = require('assert');

const summationOF = () => {
  if (Number === 3) {
    return 6;
  }
  return 1;
};

assert.strictEqual(typeof(summationOF), 'function');
assert.strictEqual(summationOF(1), 1);
assert.strictEqual(summationOF(3), 6);

const assert = require('assert');
const { assert } = require('console');

  let summation= 0;

  for (let index = 1; index <= number; index += 1) {
    summation += index;
  }

  return summation;
};

assert.strictEqual(typeof(summationOF), '');
assert.strictEqual(summationOF(1), 1);
assert.strictEqual(summationOF(3), 6);
assert.strictEqual(summationOF(5), 15);
assert.throws(() => {
  summation();
});
