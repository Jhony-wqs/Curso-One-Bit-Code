class Property { //Classe mãe  ela pode dividir métodos e propriedades com  as classes filhas.
    constructor(area, price){
        this.area = area
        this.price = price
    }
    getpricePerSquareMeter(){
        return this.price / this.area
    }
}

class House extends Property {}//Classe filha herdando com o método extends.

const land = new Property(100, 10000)
const someHouse = new House(200, 20000)
console.log(land)
console.log(someHouse)
console.log(someHouse.getpricePerSquareMeter())// Usando o método da classe mãe.

class Apartment extends Property {
    constructor(number, area, price){
        super(area, price)
        this.number = number
    }
    getFloor(){
        return `Número de andares do Apartamento : ${this.number.slice(0, -2)}`//Usando o método slice para retorna um pedaço da string que esta guardada na variável number.
    }
}
const apt = new Apartment("201", 100, 160000)
console.log(apt)
console.log(apt.getFloor())