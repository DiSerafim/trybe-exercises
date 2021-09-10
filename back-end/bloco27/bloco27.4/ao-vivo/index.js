const express = require('express');
const bodyParser = require('body-parser');
const MovieController = require('./controllers/movieController');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.post('/movies', MovieController.create);
app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});
