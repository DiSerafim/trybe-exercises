// userModel.js
const db = require('./db'); // Arquivo "fictício" que representa a conexão com o banco
async function getUser (username) {
    return db.findOne({ username })
    .then(result => result || null);
}