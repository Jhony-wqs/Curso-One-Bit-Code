const baseDeDados = require('./database')


function getCraracterBySpicie(id){
    return baseDeDados.characters.find((spicie)=>{
        return spicie.speciesId === id
    })
}


console.log(getCraracterBySpicie(1))