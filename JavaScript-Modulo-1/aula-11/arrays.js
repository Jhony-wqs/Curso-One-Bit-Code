 //inicializando uma array
const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)
//Adcionando elementos no no inicio de uma array com o metodo com unshift.
// Ao adicionar um elemento em uma array ela também retorna o novo tamanho da array.
let tamanho = arr.unshift('holiver') //       
tamanho = arr.unshift('bernardo')
tamanho = arr.unshift('matha')
tamanho = arr.unshift('dezes')
console.log(arr)
console.log(tamanho)
//Adcionando elementos no final de uma  array com o metodo push.
// Ao adcionar um elemento em uma array ela também retorna o novo tamanho da array.

tamanho = arr.push('jhony')
tamanho =arr.push('mayara')
tamanho = arr.push('matha')
tamanho = arr.push('dezes')
console.log(arr)
console.log(tamanho)

// Removendo elemento do final de uma array com o metodo pop.
//Ao remover um elemento de uma array ela também retorna o elemento que foi retirado da lista.
let removendo = arr.pop()
console.log(arr)
console.log(removendo)    

// Removendo elemento do inicio de uma array com o metodo shift.
///Ao remover um elemento de uma array ela também retorna o elemento que foi retirado da lista.

removendo = arr.shift()
console.log(arr)
console.log(removendo)

// Pesquisando um elemento em uma array com o metodo includes,passando o elemento que tem que procurar,ele vai retorna um valor booleno

let pesquisa = arr.includes('jhony')
console.log(pesquisa)

//Outro metodo de pesquisa e o indexOf, onde ele faz a pesquisa e retorna o index que o valor se encontra.
 let indice = arr.indexOf('bernardo')
 console.log(indice)


 // Usando o metodo slice para copiar partes de uma array.


 let corte = arr.slice(0,4)//copia a parte da array basiada no numero do index, passando 2 parâmentros de inicio de fim
 console.log(corte)
 corte = arr.slice(-4)//cololando números negativos ele retorna a array de trás para frente
 console.log(corte)

