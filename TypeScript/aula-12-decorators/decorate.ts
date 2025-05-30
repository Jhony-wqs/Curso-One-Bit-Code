function Log() {
    return function(target, key, descriptor) {
       const originalMethod = descriptor.value

       descriptor.value = function(...args: any[]) {
        console.log('----------------------------')
        console.log(`Chamando o método ${key} com os parâmetros ${JSON.stringify(args)}`)

        const result = originalMethod.apply(this, args)

        console.log(`O método ${key} retornou o valor ${JSON.stringify(result)}`)

        return result
       }
    }
}

class Planets {
    name: string

    constructor(name: string) {
        this.name = name
    }
     
    @Log()
    calculate(value: number) {

        return value * 2
    }

    @Log()
    invertName() {
        return this.name.split('').reverse().join('')
    }
}

const planets = new Planets('Terra')

const results = planets.calculate(5)

console.log(`Resultado: ${results}`)

planets.invertName()