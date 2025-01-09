// Define a função asyncSum que retorna uma Promise
function asyncSum(a, b) {
    return new Promise((resolve, reject) => {
        // Verifica se os argumentos são números
        if (typeof a !== 'number' || typeof b !== 'number') {
            // Rejeita a Promise se os argumentos não forem números
            reject('argument must be type number.')
        } else {
            // Resolve a Promise com a soma dos argumentos
            resolve(a + b)
        }
    })
}

// Define a função asyncSubtract que retorna uma Promise
function asyncSubtract(a, b) {
    return new Promise((resolve, reject) => {
        // Verifica se os argumentos são números
        if (typeof a !== 'number' || typeof b !== 'number') {
            // Rejeita a Promise se os argumentos não forem números
            reject('arguments must be of type number.')
        } else {
            // Resolve a Promise com a subtração dos argumentos
            resolve(a - b)
        }
    })
}

// Chama a função asyncSum com os argumentos 50 e 33 e armazena a Promise resultante
const sumResult = asyncSum(50, 33)
// Chama a função asyncSubtract com os argumentos 50 e 34 e armazena a Promise resultante
const subtractResult = asyncSubtract(50, 34)

// Usa Promise.all para aguardar a resolução de ambas as Promises (sumResult e subtractResult)
Promise.all([sumResult, subtractResult]).then((result) => {
    // Imprime o resultado das Promises resolvidas
    console.log(result)
}).catch((erro) => {
    // Imprime o erro se alguma das Promises for rejeitada
    console.log(erro)
})

// Define um array de números
const numbers = [2, 4, 6, 8, 6, 10]

// Define a função asyncSquare que retorna uma Promise
function asyncSquare(n) {
    return new Promise((resolve) => {
        // Resolve a Promise com o quadrado do argumento
        resolve(n * n)
    })
}

// Usa Promise.all para aguardar a resolução de todas as Promises geradas pelo mapeamento do array numbers
Promise.all(numbers.map(number => asyncSquare(number))).then(resolve => console.log(resolve))