// Exemplo de código síncrono.

function stap(){
    console.log('passo 2')
}

console.log('passo 1')

stap()  
console.log('passo 3')

// Exemplo de código assíncrono.

function stap1(){
    console.log('passo 2')
}

console.log('passo 1')

setTimeout(() => {
    console.log('passo 3')
}, 2000)

stap1() 

console.log('passo 4')


