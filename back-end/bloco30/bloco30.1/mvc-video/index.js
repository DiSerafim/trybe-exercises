const express = require('express');
// const bodyParser = require('body-parse');

const authorController = require('./Controller/authorController');

const app = express();
const port = process.env.PORT || 3000;

// app.use(bodyParser.urlencoded({ extended: true }));

// informa ao express que usaremos o 'ejs'
app.set('view engine', 'ejs');
// informa qual pasta ele vai usar
app.set('views', './View');

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Arquitetura MVC!' });
});
app.get('/author', (req, res) => {
  res.send('Hello World!');
});
app.get('/authors', authorController.listAuthors);
app.get('/authors/new', authorController.newAuthor);
app.post('/authors', authorController.createAuthor);

app.listen(port, () => console.log(`\nUP ON PORT: ${port}!`));