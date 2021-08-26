// Exercício 2, 3;
module.export = (numero) => {
  if (typeof numero !== 'number') {
    return 'o parâmetro deve ser um número';
  }
  if (numero > 0) {
    return 'positivo';
  }
  if (numero < 0) {
    return 'negativo';
  }
  return 'neutro';
};
