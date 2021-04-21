// video aula com Gus
// Ex 01
const numeros = (array) => {
    for (let index = 0; index < Array.length; index += 1) {
        if (typeof array[index] !== 'number') {
            return false;
        }
    }
    return true;
};

module.exports = numeros;