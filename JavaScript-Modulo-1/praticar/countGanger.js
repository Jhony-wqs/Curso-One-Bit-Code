const baseDeDados = require('./database')


function countGender(gender){
   if(gender === 'M' || gender === 'F'){
     return baseDeDados.characters.filter((character)=>{
        return character.gender === gender
      })
   }else{
      console.log('Informação inválida')
   }
   

}

console.log(countGender('m'.toUpperCase()))