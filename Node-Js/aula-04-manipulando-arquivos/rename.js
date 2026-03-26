// Renomeando arquivo
const fs = require('node:fs')

fs.rename('./rename.txt','./renamed.csv',(err) =>{
    if(err) {
        console.log('Erro ao renomear o arquivo',err.message)
        return
    }

    console.log('arquivo renomeado com sucesso!!')
})