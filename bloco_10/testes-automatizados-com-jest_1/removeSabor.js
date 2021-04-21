// video aula com Gus
// Ex 02
const removeBebida = (array, remover) => {
    array.splice(array.indexOf(`${remover}`), 1);
    return array;
};

module.exports = removeBebida;