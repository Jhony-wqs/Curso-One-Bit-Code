const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ]

  // Map
//   const nomes = []
//    for (let i = 0 ; i < personagens.length; i++){
//     nomes.push(personagens[i].nome) por trás dos panos do método map

//    }


   const nomes = personagens.map(function(personagem){
    return personagem.nome
   })

    ///console.table(nomes)

    // Filter

    // let orcs =[]

    // for (let i = 0; i < personagens.length; i++) {
    //     if(personagens[i].raca === 'Orc'){
    //         orcs.push(personagens[i])
    //     }
        
    // }

    const orcs = personagens.filter(function(personagem){
        return personagem.raca === 'Orc'
    })

    // console.log(orcs)


    // Reduce

    const nivelTotal = personagens.reduce(function(valorAcumulado, personagem){
        return valorAcumulado + personagem.nivel
    },0)
     //console.log(nivelTotal)



     const racas = personagens.reduce(function(valorAcumulado, personagem){
        if(valorAcumulado[personagem.raca]){
            valorAcumulado[personagem.raca].push(personagem)
        }else{
            valorAcumulado[personagem.raca] = [personagem]
        }

        return valorAcumulado
     },{})

     //console.log(racas)




     const repita = personagens.forEach(function(personagem){
         
        console.log(personagem.nivel)
     })
