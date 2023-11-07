const database = require('./database')


function isFighter(){
  database.characters.forEach((character) =>{
     if(character.powers.length === 0){
        character.isFighter = false // o javaScript cria dinamicamente a propriedade com chave e valor no novo array.
     }else{
        character.isFighter = true // o javaScript cria dinamicamente a propriedade com chave e valor no novo array.
     }
  })
   return database.characters
}

console.log(isFighter())