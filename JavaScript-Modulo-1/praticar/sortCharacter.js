const baseDeDados = require('./database')


const ordered = baseDeDados.characters.sort((x,y)=> x.name.localeCompare(y.name))

 console.log(ordered)


const array = [1,2,3,4,5,6,7,8,13,14,9,10,11,12]

const ordenarNumerais = array.sort((a,b)=>{
    return a - b
})

 console.log(ordenarNumerais)



const alfabeto = ['b','c','a','d','f','e']

  function alfaOrdenado(){
   return alfabeto.sort()
  }


console.log(alfaOrdenado())