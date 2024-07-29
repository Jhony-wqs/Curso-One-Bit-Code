class Vehicle {
    move() {
        console.log('O veiculo está se movendo.')
    }
}

class Cer extends Vehicle {
    move() {
        console.log('O carro está se movendo.')
    }
}

class Ship extends Vehicle {
    move() {
        console.log('O navio está navegando.')
    }
}

class Aircraft extends Vehicle {
    move() {
        console.log('A aeronave está voando.')
    }
}

const delorean = new Cer()
const blackpearl =new Ship()
const epoch =new Aircraft()

delorean.move()
blackpearl.move()
epoch.move()

function start(Vehicle) {
    console.log('Iniciando um veículo ....')
    Vehicle.move()
}

start(delorean)
start(blackpearl)
start(epoch)
