// models/AuthorMongo.js
const connection = require('./connectionMongo');
const { ObjectId } = require('mongodb');

// Cria uma string com o nome completo do autor
const getNewAuthor = (authorData) => {
const { id, firstName, middleName, lastName } = authorData;

const fullName = [firstName, middleName, lastName]
  .filter((name) => name)
  .join(' ');

return {
  id,
  firstName,
  middleName,
  lastName,
  name: fullName,
};
};
// Converte o nome dos campos de snake_case para camelCase
const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name});
  
// Busca todos os autores do banco.
const getAll = async () => {
  return connection()
    .then((db) => db.collection('authors').find().toArray())
    .then((authors) => {
      return authors.map(({ _id, firstName, middleName, lastName }) => {
        return getNewAuthor({
          id: _id,
          firstName,
          middleName,
          lastName
        });
      })
    });
};
const findById = async (id) => {
  const authorData = await connection()
    .then((db) => db.collection('authors').findOne(ObjectId(id)))
  if (!authorData) return null;
  const { firstName, middleName, lastName } = authorData;
  return getNewAuthor({
    id,
    firstName,
    middleName,
    lastName
  });
};
const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;
  return true;
}
const create = async (firstName, middleName, lastName) => {
  await connection()
    .then((db) => db.collection('authors').insertOne({ firstName, middleName, lastName }));
}

module.exports = {
  getAll,
  findById,
  isValid,
  create,
};