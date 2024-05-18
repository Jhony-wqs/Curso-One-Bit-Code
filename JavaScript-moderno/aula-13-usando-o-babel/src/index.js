const average = (...number) => {//Média aritmética simples com o uso de arrow function.
    const sun = number.reduce((acc,num)=> acc + num,0,)
    return sun / number.length
}
console.log(`A média aritmética simples: ${average(3, 6, 10, 9,)}`)

const weightedAverage = (... entries) =>{//Média ponderada onde vai fazer a multiplicação  do n por seu peso e depois fazer a soma de todos os pesos e dividir pelos pesos que existe.
    const sum = entries.reduce((acc, {number , weight}) => acc + (number * (weight ?? 1)),0)
    const weightSum = entries.reduce((acc, entry) => acc + (entry.weight ?? 1),0)

    return sum / weightSum
}

console.log(`Média Ponderada: ${weightedAverage(
    { number: 9, weight: 3 },
    { number: 7 },
    { number: 10, weight: 1 },
  )}`)

const median = (...numbers) =>{ //Mediana e e quando e encontrado o valor central de uma sequência  de números, caso exista dois números centrais a mediana é calculada pela média simples desses dois  números. 
    const orderedNumbers = [...numbers].sort((a,b)=> a -b)
   console.log(orderedNumbers)
    const middle = Math.floor(orderedNumbers.length / 2)
    console.log(middle)
    if(orderedNumbers.length % 2 == 0){
        const firstMiddle = orderedNumbers[middle -1]
        const secondMiddle = orderedNumbers[middle]
        return average(firstMiddle, secondMiddle)
    }
     return orderedNumbers[middle]
    

}

console.log(`Mediana: ${median(2, 5, 99, 4, 42,7)}`)
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`)

const mode = (...numbers) =>{//Mode pode ser calculado encontrando o valor que mais se repete em um dado conjunto.
        const quantities = numbers.map(num =>[
            num,
            numbers.filter(n => num === n ).length
        ])
        quantities.sort((a, b)=> b[1] - a[1])
        return quantities[0][0]
}
console.log(`Moda: ${mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)