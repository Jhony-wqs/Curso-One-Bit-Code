class Spaceship {
    //No typescript existe 3 tipos de encapsulamento.
   private name // Privado onde so pode ser acessado da classe mãe
   protected captain // protejido onde pode ser acessado tando da classe mãe como filha.
   public speed // Publico onde pode ser acessada de qualquer lugar do código.
    constructor(name: string, captain: string){
        this.name = name
        this.captain = captain
        this.speed = 0
    }

    get getName(){
        return this.name
    }

    set setName(name: string) {
        this.name = name
    }

    accelerate(rate: number, time: number) {
        this.speed = rate * time
    }
}

class Fither extends Spaceship {
    weapons
    constructor(name: string, captain: string, weapons: number) {
        super(name, captain)
        this.weapons = weapons
    }

    shoot() {
        for(let i = 0 ; i < this.weapons; i++) {
            console.log('Pew!')
        }
    }

    erase() {
        //this.name = '' da erro pois não consegue acessar o name da classe mãe.
        this.captain = ''
    }

}

let ship = new Spaceship("USS Enterprise", 'James T. Kirk')

ship.speed = 50
ship.accelerate(54, 30)