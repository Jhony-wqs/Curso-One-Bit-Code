const fs = require('node:fs')

console.log('início')

fs.readFile('./arquivo.txt','utf8',(err, data) =>{
    if(err){
        throw err
    }
    console.log(data)
});

console.log('Fim')