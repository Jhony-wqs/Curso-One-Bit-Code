const data = require('./database')



function isAndroid(spicie){
    let names = []
    if(data.species.some((spicieSome) =>spicieSome.name === spicie)){
     let findId = data.species.find((findId)=> findId.name === spicie)
     for(let index = 0;index < data.characters.length;index++){
        if(findId.id === data.characters[index].speciesId){
            names.push(data.characters[index].name)
        }
     }
    }else{
        console.log('Espécie não encontrada')
    }
    return names
}



        
    
    
  


console.log(isAndroid('Saiyans'))