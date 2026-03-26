const fs = require('node:fs')

fs.unlink('./write-file.txt',(err) =>{
    if(err) {
        console.log('Erro ao excluir arquivo!',err.message)
        return
    }

    console.log('Arquivo excluído com sucesso!! ')
})