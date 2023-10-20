let soma = function (a, b) { // função anônima passando parâmetros
    return a + b;
}

console.log(soma(5,5))

const ola = function(){
    console.log('hello word')
}


ola()


function somar(a,b){return a + b}

const operacao = somar

console.log(operacao(2,2))//usando a variável para guarda uma função e atrvés dela chamar no console a função através da variável os parâmetros e retornando o valor