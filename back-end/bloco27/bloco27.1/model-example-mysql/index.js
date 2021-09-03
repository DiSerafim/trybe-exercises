// index.js
// 3°
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const Author = require('./models/Author');
// 3°
app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
  const author = await Author.getAll();
  res.status(200).json(author);
});

// 2° video
app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);
  if (!author) return res.status(404).json({ message: 'Not found ;)' });
  res.status(200).json(author);
});

// 3° video
app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;
  if (!Author.isValid(first_name, middle_name, last_name)) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }
  await Author.create(first_name, middle_name, last_name);
  res.status(201).json({ message: 'Autor criado com sucesso! '});
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
