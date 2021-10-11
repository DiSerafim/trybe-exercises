const connectionFactory = require('./connectionFactory');
const schema = require('./schema');

const create = async (username, email, password, role) => {
  const connection = schema.connection2;
  connectionFactory(connection).execute(
    `INSERT INTO ${connection.database}.users (username, email, password, role) VALUES (?,?,?,?)`,
    [username, email, password, role],
  ); 
};
module.exports = {
  create,
};