// Função que retorna uma Promise que será resolvida após um determinado número de segundos
function waitFor(seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve() // Resolve a Promise após o tempo especificado
        }, seconds * 1000) // Converte segundos para milissegundos
    })
}

// Array de números
const numbers = [2, 4, 6, 8, 10]

// Mapeia o array de números para um novo array de Promises que resolvem para o quadrado de cada número após 2 segundos
const multiplo = numbers.map(async (number) => {
    await waitFor(2) // Espera 2 segundos
    return number * number // Retorna o quadrado do número
})

// Imprime o array de Promises (não os resultados resolvidos)
console.log(multiplo)

// Usa Promise.all para esperar que todas as Promises no array 'multiplo' sejam resolvidas e então imprime os resultados
Promise.all(multiplo).then(result => {
    console.log(result) // Imprime o array de resultados resolvidos (os quadrados dos números)
})

// Exemplo 2 usando o await junto com o método Promise.
async function execute() {
    // Mapeia o array de números para um novo array de Promises que resolvem para o quadrado de cada número após 2 segundos e espera que todas sejam resolvidas
    const squares = await Promise.all(numbers.map(async (number) => {
        await waitFor(2) // Espera 2 segundos
        return number * number // Retorna o quadrado do número
    }))
    console.log(squares) // Imprime o array de resultados resolvidos (os quadrados dos números)
}

// Chama a função execute para executar o exemplo 2
execute()