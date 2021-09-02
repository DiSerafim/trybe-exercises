// cli.js
const readline = require('readline-sync');
const userModel = require('./userModel');
async function start() {
    const username = readline.question('Digite seu nome de usuário');
    const user = await userModel.getUser(username);
    if (!user) {
        return console.log('Usuário não encontrado');
    }
    console.log('Aqui estão os dados do usuário:');
    console.log(user);
}
start();