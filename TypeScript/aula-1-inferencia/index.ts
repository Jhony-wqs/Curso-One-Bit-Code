const spaceship = {
    name: 'Millennium Falcon', // TypeScript infere que 'name' é do tipo 'string'
    speed: 0 // TypeScript infere que 'speed' é do tipo 'number'
}

function speedUp (spaceship: { name: string; speed: any }) {
   spaceship.name // TypeScript infere que 'spaceship.name' é do tipo 'string'
}

speedUp(spaceship)