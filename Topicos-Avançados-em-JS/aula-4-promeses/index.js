// const p = new Promise((resolve, reject) => {
//      console.log('Iniciando promise...')
//      setTimeout(()=>{
//         if(true){
//             console.log('resolvendo promise...')    
//             reject('Erro ao resolver promise')
//         }
//         resolve('Promise resolvida')         
//      },1000 * 2)
// })
// console.log(p)
// setTimeout(()=>{
//     console.log(p)
// },1000 * 3);
// Define a função execute que retorna uma nova Promise

function execute(){
    // Retorna uma nova Promise que recebe duas funções: resolve e reject
    return new Promise((resolve,reject) =>{
        // Define um temporizador que executa após 1 segundo (1000 milissegundos)
        setTimeout(() =>{
            // Imprime 'Executando promise' no console
            console.log('Executando promise')
            // Resolve a Promise com a mensagem 'Promise resolvida'
            resolve('Promise resolvida') 
        },1000) 
    })
}
// Imprime 'Iniciando promise...' no console
console.log('Iniciando promise...')

// Chama a função execute e armazena a Promise retornada na constante p
const p = execute()

// Define um temporizador que executa após 2 segundos (1000 * 2 milissegundos)
 setTimeout(() =>{
    // Imprime o estado da Promise p no console
    console.log(p)
 },1000 * 2)