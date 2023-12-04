

const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]


const naveComMaisTripulantes = hitchedSpaceships.filter((tripulantes) =>{
    return tripulantes[1] >= 9
}).map((tripulantes)=>  tripulantes[0])

const naoEngatada = hitchedSpaceships.findIndex((engatada) =>{
    return engatada[2]  === false
})

const nomeNave = hitchedSpaceships.map((nome) =>{
    return nome[0].toUpperCase()
})


const msg =  'Nave com maior número de tripulantes  '+ naveComMaisTripulantes.join('-') + '\nPlataform com processo de engate: ' + (naoEngatada+1) + '\nEspaçonaves no angar '+nomeNave

alert(msg)