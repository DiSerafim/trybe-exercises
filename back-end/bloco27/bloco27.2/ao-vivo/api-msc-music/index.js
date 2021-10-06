const express = require('express');
const bodyParse = require('body-parser');
const songController = require('./controllers/songController');

const app = express();
app.use(bodyParse.json());

app.get('/', songController);

app.listen(3000, () => {
  console.log('Aula ao vivo, Api na porta 3000');
});
