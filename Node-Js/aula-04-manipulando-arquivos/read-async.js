const fs = require('node:fs')

const filename = 'arquivo.csv'

const exists = fs.existsSync(filename)

if(exists) {
    fs.readFile('./arquivo.txt','utf8',(erro,data)=>{
        if(erro){
            console.log("Erro ao ler o arquivo: ", erro.message)
            return
        }
        console.log(data)
    })
}else{
    console.log('O arquivo não existe!')
}


// Lendo arquivo de forma assíncrona
// fs.readFile(exists,'utf8',(error,data) =>{
//     if(exists){
//         console.log('Erro ao ler o arquivo!')
//     }

//     console.log(data)
// })