const express = require('express');
const Book = require('./model/Book');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/books', async (req, res) => {
  const { author_id } = req.query;
  const books = (author_id)
    ? await Book.getByAuthorId(author_id)
    : await Book.getAll();
  res.status(200).json(books);
});

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
