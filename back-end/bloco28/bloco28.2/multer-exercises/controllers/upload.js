const upload = (req, res) => {
  // caso o arquivo seja duplicado vamos retornar 409 Conflict .
  if (req.fileDuplicated)
  return res.status(409).send({ error: { mesage: "File already exists" } })
  // erro quando a extensão do arquivo for inválida.
  if (req.fileValidationError)
    return res.status(403).send({ error: { message: "Extension must be `png`" } });
  return res.send();
}

module.exports = upload;
