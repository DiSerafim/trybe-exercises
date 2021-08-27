const fs = require('fs').promises;

async function readFile(fileName) {
  try {
    const fileContent = await fs.readFile(`./${fileName}`, 'utf-8');
    return fileContent;
  } catch {
    return null;
  }
}

module.exports = { readFile }