// Leitura de arquivos sincrono
const fs = require('node:fs')

try {
   const data = fs.readFileSync('./write-file.txt','utf8')
    console.log(data)
} catch (error) {

    console.log('Erro ao ler o arquivo', error.message)
    
}