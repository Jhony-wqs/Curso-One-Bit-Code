const data = require('./database')



function information(){
   return data.characters.map((character)=>{
       const specieName = data.species.find((specie)=>{
          return character.speciesId === specie.id
           
       }) 
       return  `${character.name} é da espécie ${specieName.name}`
    })
}

console.log(information())