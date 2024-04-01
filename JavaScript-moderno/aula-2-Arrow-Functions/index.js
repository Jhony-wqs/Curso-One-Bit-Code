function normalSun(a,b){// função normal onde e dada um nome a ela.
    return a + b
}

console.log(`a soma normal ${normalSun(2,2)}`)

const anonymousSum = function(a,b){//função anônima quando a função não tem um nome, mais e associada a uma variável.
    return a + b
}

console.log(`soma anônima ${anonymousSum(2,2)}`)

const arrowSum = (a,b)=>{//usando arrow com returno.
      return a + b
}
console.log(`Soma arrow function ${arrowSum(3,4)}`)

const subtract = (a,b)=> a - b //usando arrow sem a palavra return,apenas em uma linha.
console.log(`Subtração em uma arrow ${subtract(5,4)}`)

const double = n => n*2 //usando arrow sem parênteses com apenas um parâmetro.
console.log(`o dobro de 21 e ${double(21)}`)

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

const startTingWithP = towns.filter(town => town[0]=== 'P')//usando arrow function em métodos de array.
console.log(startTingWithP)