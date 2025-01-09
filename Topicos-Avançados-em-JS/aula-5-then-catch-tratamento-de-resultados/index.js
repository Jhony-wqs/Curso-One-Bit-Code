// Define a função execute que retorna uma nova Promise
function execute(){
    return new Promise((resolve, reject) => {
        
        // Define um temporizador que executa após 1 segundo
        setTimeout(() => {
            
            // Imprime uma mensagem no console
            console.log('Executando promise')
            
            // Resolve a Promise com a mensagem 'Promise resolvida'
            resolve('Promise resolvida')
        }, 1000) // Tempo de espera de 1 segundo
    })
}
// Imprime uma mensagem no console indicando o início da Promise
console.log('Iniciando promise...')
// Chama a função execute e lida com o resultado da Promise
execute().then((result) => {
    // Imprime o resultado da Promise no console
    console.log(`resultado da Promise: ${result}`)
}).catch((error) => {
    // Imprime uma mensagem de erro no console se a Promise for rejeitada
    console.log(`Erro ao executar a Promise: ${error}`)
}).finally(() => {
    // Imprime uma mensagem no console quando a Promise é finalizada, independentemente do resultado
    console.log('Promise totalmente finalizada.')
})