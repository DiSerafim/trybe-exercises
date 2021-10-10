// index.js
const express = require('express');
const { Store, Products } = require('./models');

const app = express();

app.get('/employees', (_req, res) => {
  Store.findAll({
    include: { model: Products, as: "products" }
  })
  .then((dados) => {
    res.status(200).json(dados);
  })
  .catch ((e) => {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;