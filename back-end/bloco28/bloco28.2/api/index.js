const express = require('express');
const multer = require('multer');
const app = express();
const fs = require('fs');

// nome automático na pasta
const getDate = () => {
  const date = new Date;
  return `${date.getDate()}-${(date.getMonth() + 1)}-${date.getFullYear()}`;
}
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

// 1 arquivo
app.post('/files', upload.single('file'), (req, res) => {
  return res.status(201).json({ message: 'Arquivo' })
});17
// vários arquivos
// app.post('/files', upload.array('photos', 17), (req, res) => {
//   return res.status(201).json({message: 'Photos'})
// })

app.listen(3000, () => console.log('Api na porta 3000'));
 