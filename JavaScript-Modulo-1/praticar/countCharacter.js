const quantidade = require('./database')

function tamanho(){
  return quantidade.characters.length
}

console.log(tamanho())