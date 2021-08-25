const peso = 78;
const altura = 1.70;

function indiceMassaCorporal() {
  console.log(`Peso: ${peso}, Altura: ${altura}`);
  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);
  console.log(`IMC: ${imc}`);
}

indiceMassaCorporal();

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/pow

// # Math.pow()
// A função Math.pow() retorna a 'base' elevada ao 'expoente' power, ou seja, baseexpoente.
// - Math.pow(base, expoente)
// base - O número da base.
// expoente - O expoente usado para elevar a base.

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

// # .toFixed()
// formata um número utilizando notação de ponto fixo.
// - numObj.toFixed([dígitos])
// dígitos - O número de dígitos que aparecem depois do ponto decimal; este pode ser um valor entre 0 e 20,