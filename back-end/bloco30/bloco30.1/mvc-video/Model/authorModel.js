const connection = require('./connection');

// Serializa o nome dos campos de snake_kase para camelCase
const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name,
});

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

// const findAllAuthors = async () => {
//   const [authors] = await connection.execute('SELECT * FROM authors');
//   return authors;
// };

const findAllAuthors = async () => {
  const [authors] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');
  return authors.map(serialize).map(getNewAuthor);
};

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;

  return true;
};

const create = async (firstName, middleName, lastName) => {
  connection.execute(
    'INSERT INTO authors(first_name, last_name, middle_name) VALUES (?,?,?)', [firstName, middleName, lastName]
  );
};

module.exports = {
  findAllAuthors,
  isValid,
  create,
}