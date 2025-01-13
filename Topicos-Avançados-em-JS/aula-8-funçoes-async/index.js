// Define uma função assíncrona que soma dois números 
 async function asyncSum(a, b) {
   

       return a + b
   
}

// Define uma função assíncrona que subtrai dois números
async function asyncSubtract(a, b) {
   
    return a - b
}

// Chama uma função assíncrona chamada asyncSum com os argumentos 50 e 33 e armazena o resultado em sumResult
const sumResult = asyncSum(50, 33)

// Chama a função assíncrona asyncSubtract com os argumentos 50 e 34 e armazena o resultado em subtractResult
const subtractResult = asyncSubtract(50, null)

// Usa Promise.all para aguardar a resolução de ambas as promessas (sumResult e subtractResult)
Promise.all([sumResult, subtractResult]).then((result) => {
    // Quando ambas as promessas são resolvidas, imprime o resultado no console
    console.log(result)
}).catch((erro) => {
    // Se qualquer uma das promessas falhar, imprime o erro no console
    console.log(erro)
})