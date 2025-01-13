//Usando funções async com await.
async function asyncSum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('arguments must be of type number')
    }
    return a + b
}

async function executar() {
    //Podendo usar o bloco try para fazer tratamento de erros que possa vim a ocorrer.
    try {
        const result = await asyncSum(55, 15)// Usando o método await no lugar da método then, mais esse método await so funciona dentro de uma função async.
        console.log(result)
    } catch (error) {
        console.error(error)
    }
}

executar()