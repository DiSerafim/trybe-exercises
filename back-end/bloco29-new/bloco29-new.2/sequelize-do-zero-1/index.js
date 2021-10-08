const express = require('express');
const { Store } = require('./models');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  Store.findAll().the(dados => {
    res.status(200).json(dados)
  }).catch(e => {
    console.log(e.message);
    res.status(500).json({message: 'algo deu errado !'})
  })
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo na porta: ${PORT}`);
});
