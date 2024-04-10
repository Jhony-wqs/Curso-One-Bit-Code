const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

console.log(towns)
console.log(...towns)// usando o spread para espalhar o array.
console.log(...towns[2])//espalhando e pegando so um nome do array.

//mostrando como clonar o array sem usar o principal como referência.
 const townsCopy = towns
 townsCopy.pop()
 townsCopy.pop()
 townsCopy.push('Campina Grande')//No caso qui mesmo apagando alguns nomes o primeiro array pega como referência o segundo e coloca os mesmos nomes.
 console.log({towns,townsCopy})

 const townsClone = [...towns]//Usando o spread faz uma copia do original, podendo fazer modificações na copia sem afetar o original. 
 townsClone.push('João Pessoa')

 console.log({towns,townsCopy,townsClone})

 const townsObj = {...towns}//transformando em um Objeto espalhado.
 const townsObjClone = {...townsObj}//Pegando um clone do objeto sem referência.
 townsObjClone.test = 'Test'

 console.log({townsObj,townsObjClone})



