const express = require("express");
const bodyParser = require('body-parser');
// importa rota
const peopeController = require('./controllers/peopleController');

const app = express();
app.use(bodyParser.json());

// rotas
app.get('/pessoas', peopeController.getALL);
app.get('/pessoas/:id', peopeController.getById);
app.post('/pessoas/', peopeController.create);
app.put('/pessoas/:id', peopeController.update);
app.delete('/pessoas/:id', peopeController.remove);

app.listen(3000, () => console.log(`App ouvindo na porta 3000!`));
