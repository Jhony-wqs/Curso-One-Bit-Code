// Para construir uma classe
class Carro {

    constructor(model, brand, year){
        this.model = model
        this.brand = brand
        this.year = year

    }

    emplacamento(){
        this.emplacado = 'Emplacado exercício 2024'
    }
}


const gol = new Carro('gol','volkswagen',2008)// instancia da classe Carro.
gol.emplacamento()
console.log(gol)

const fordK = new Carro('ford k','ford',2018)// instancia da classe Carro.
console.log(fordK)

console.log(gol instanceof Carro)// Descobrindo se a instancia gol faz parte da classe Carro.