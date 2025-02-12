// Define a função setPilot que atualiza o piloto da espaçonave
const setPilot = (newPilot: string, spaceship: { name?: string; pilot: string; speed?: number; inMission?: boolean; }) => {
    spaceship.pilot = newPilot; // Atualiza a propriedade pilot da espaçonave com o novo piloto
}

// Define a função accelerate que atualiza a velocidade da espaçonave
const accelerate = (targetSpeed: number, spaceship: { name?: string; pilot?: string; speed: any; inMission?: boolean; }) => {
    spaceship.speed = targetSpeed; // Atualiza a propriedade speed da espaçonave com a velocidade alvo
}

// Define a função sendToMission que define a espaçonave como em missão
const sendToMission = (spaceship: { name?: string; pilot?: string; speed?: number; inMission: any; }) => {
    spaceship.inMission = true; // Define a propriedade inMission da espaçonave como true
}

// Cria um objeto spaceship com propriedades iniciais
const spaceship = {
    name: '', // Nome da espaçonave
    pilot: '', // Piloto da espaçonave
    speed: 0, // Velocidade da espaçonave
    inMission: false, // Indica se a espaçonave está em missão
}

// Define a variável pilot e atualiza a propriedade pilot da espaçonave
const pilot = spaceship.pilot = 'Jhont Wuanderson' // Atribui 'Jhont Wuanderson' como piloto da espaçonave

// Atualiza a propriedade name da espaçonave
spaceship.name = 'Apolo 11' // Define o nome da espaçonave como 'Apolo 11'

// Chama a função setPilot para atualizar o piloto da espaçonave
setPilot(pilot, spaceship)

// Chama a função accelerate para atualizar a velocidade da espaçonave
accelerate(100, spaceship) // Define a velocidade da espaçonave como 100

// Chama a função sendToMission para definir a espaçonave como em missão
sendToMission(spaceship) // Define a espaçonave como em missão

// Imprime o objeto spaceship no console
console.log(spaceship) // Mostra o estado atual da espaçonave