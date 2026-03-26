// Escrita de arquivo assíncrono
const fs = require('node:fs')

const data = 'Arquivo criando assíncrono !!'

fs.writeFile('./arquivo.txt',data,'utf8',(error) => {
    if(error) {
        console.log('Erro ao escrever o arquivo.',error.message)
      return
    }

    console.log('arquivo criado com sucesso!!!')

})