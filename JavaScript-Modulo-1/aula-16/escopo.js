var pokemon = 'Charmander'

function evoluir(){

    pokemon = 'Chameleon'
}

//console.log(pokemon)//mostrou o valor guardado nela que e Chramander e depois modificou com o chamado da função onde dentro dela mudou o valor e apresentou o novo valor.
//evoluir()
//console.log(pokemon)


function CriarAnimal(){
    var animal = 'gato'
    //a váriavel de escopo local não e acessada do escopo de fora de uma função.
   

}
 
CriarAnimal()
//console.log(animal)//Não podendo acessar a váriavel de escopo mias interno


function avaliarNota(nota){
    if(nota > 60){
        var aprovado = true
        let situacao = 'Aprovado'
    }else{
        var aprovado = false
        let situacao = 'Reprovado'//Não pode ser acessada de g fora do escopo do IF
    }

    console.log(nota)//mostra a nota estando  dentro de um iF dentro de uma função , mais se caso ela estiver dentro de uma função simples ela não pode ser acessada.
    console.log(aprovado)
    console.log(situacao)
}

//Mais o declaração var não pode ser acesada estando dentro de um escopo de um IF que esta dentro de uma fução.
//avaliarNota(61)

function ola(){
    var texto = 'olá mundo'
}

//console.log(texto)//Não podendo acessar o escopo de uma função!!!!!

console.log(nome)

var nome = 'Isaac'//Isamento de váriaveis, no caso so acontece  com a declaração var onde ele cria a variavel sem o valor, mais depois podendo atribuir um valor a ela e exibila.

console.log(nome)