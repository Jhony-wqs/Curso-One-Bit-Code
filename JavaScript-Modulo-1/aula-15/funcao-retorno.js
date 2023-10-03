function calcularMedia(a, b){
   const media =  (a + b) /2

   return media
}

// let resultado = calcularMedia(5,7)

// console.log(resultado)



function produto(nome, valor){
    const produto ={
        nome,
        valor,
        estoque: 1
    }
    return produto
}

//let pc= produto('computador ',2500) uma forma de obter o retorno da função ,colocando o chmado da função em uma variável

//console.log(produto('computador ',2500))//outrda forma de de receber o retorno da função e colocando o chamado junto com os parametros dentro do console.log.





function areaRetangular(base, altura){

    return base * altura
}


function areaquadrada(lado){
      return areaRetangular(lado, lado)
}



//console.log(areaRetangular(4, 5))

console.log(areaquadrada(6)) //chamando uma função dentro de outra função,chamando areaQuadrada passando o parametro  para o retorno areaRetangular onde vai fazer o calculo e retorna o valor!!!!




function ola(){

    let texto = 'textoooo'
    return texto
    texto = 'ola mundo'// a função termina no return oque vem depois dessa palavra não e executada 
    console.log('texto')
}

console.log(ola())

function maiorIdade(idade){

    if(idade >= 18){
        return "maior de idade" // com a ramificações dentro do codigo podemos usar vários returns
    }else{
        return 'menor de idade'

    }
}

console.log(maiorIdade())