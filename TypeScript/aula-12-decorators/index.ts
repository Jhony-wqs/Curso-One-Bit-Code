function Decorator() {
    return function(target, key, descriptor) {
        // A função esta pegando o método calculate da classe e esta substituindo  
        // essa função abaixo, o descriptor esta sendo o método calculate e o value esta sendo o parâmetro que vem junto.
       descriptor.value = function(value: number) {
        console.log(`Calculando o ${value} elevado ao quadrado.`)
        return value ** 2
       }
    }
}

class Planet {
    name: string

    constructor(name: string) {
        this.name = name
    }
     
    @Decorator()
    calculate(value: number) {

        return value * 2
    }
}

const planet = new Planet('Terra')

const result = planet.calculate(5)

console.log(`Resultado: ${result}`)