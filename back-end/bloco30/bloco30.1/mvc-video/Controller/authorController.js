const authorModel = require('../Model/authorModel');

const listAuthors = async (req, res) => {
  const authors = await authorModel.findAllAuthors();
  // res.status(200).json(authors);
  res.status(200).render('./Author/Author', { authors });
};

const newAuthor = (req, res) => {
  res.render('Author/New', { message: null });
};

const createAuthor = async (req, res) => {
  const { firstName, middleName, lastName } = req.body;
  if (!authorModel.isValid(firstName, middleName, lastName)) {
    res.render('Author/New', { message: 'Dados inválidos' });
  };
  await authorModel.create(firstName, middleName, lastName);
  res.redirect('authors');
};

module.exports = {
  listAuthors,
  newAuthor,
  createAuthor,
};