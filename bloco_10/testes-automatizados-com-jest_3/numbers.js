// Aula ao vivo

function generateRandomNumber(max) {
  const randomNumber = Math.floor(Math.random() * max);

  return randomNumber;
}

module.exports = {
  generateRandomNumber
}