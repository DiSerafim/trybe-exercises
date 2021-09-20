const express = require('express');
const multer = require('multer');
const app = express();
// path para trabalhar com barra e contra-barra
var path = require('path');
const fs = require('fs');

// cria a pasta com nome original para cada upload
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const folderName = `./uploads/${getDate()}/`;
    fs.mkdirSync(folderName, { recursive: true });
    return callback(null, folderName)
  },
  filename: (req, file, callback) => {
    return callback(null, file.originalname)
  }
})
// cria um nome padrão para os arquivos
const upload = multer({ storage });
// salva os arquvos com nome aleatório
// const upload = multer({ dest: 'uploads/' })

// coloca o nome do arquivo no navegador para ver o arquivo
// http://localhost:3000/19-9-2021/nome do arquivo.png
app.use(express.static(`${__dirname}/uploads`));

// coloca uma pasta de referência para ver o arquivo
// http://localhost:3000/19-9-2021/nome do arquivo.png
app.use('/arquivos', express.static(path.resolve('uploads')));

console.log(path.resolve('uploads'))

// 1 arquivo
app.post('/files', upload.single('file'), (req, res) => {
  return res.status(201).json({ message: 'Arquivo' })
});17
// vários arquivos
// app.post('/files', upload.array('photos', 17), (req, res) => {
  //   return res.status(201).json({message: 'Photos'})
  // })
  
// nome automático na pasta
const getDate = () => {
  const date = new Date;
  return `${date.getDate()}-${(date.getMonth() + 1)}-${date.getFullYear()}`;
}

app.listen(3000, () => console.log('Api na porta 3000'));
 