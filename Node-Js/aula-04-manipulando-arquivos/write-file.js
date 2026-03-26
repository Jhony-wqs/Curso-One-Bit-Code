// Escrita de arquivos sincrono
const fs = require('node:fs') 


try {
    fs.writeFileSync('./write-file.txt','Olá mundo','utf8')
    console.log('Arquivo criado com sucesso!!')
} catch (error) {
    console.log('Erro ao escrever o arquivo', error.message)
}