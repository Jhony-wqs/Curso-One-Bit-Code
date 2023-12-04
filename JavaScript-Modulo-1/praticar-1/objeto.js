let spaceShip = {
    velocity : 0,
    speedUp : function(acceleraation){
        this.velocity += acceleraation
    }
}


function registerSpaceShip(){
    spaceShip.name = prompt('Informe o nome da nava :')
    spaceShip.type = prompt('Informe o tipo da nava :')
    spaceShip.maxVelocity = Number(prompt('Informe a velocidade máxima da nave (km/s)'))
}

function acelerate(){
         let acceleration = Number(prompt('Quanto você quer acelerar ? (km/s) :'))
         spaceShip.speedUp(acceleration)
         if(spaceShip.velocity > spaceShip.maxVelocity){
            alert('Velocidade máxima ultrapassada!!!'+
            '\nVolicidade da nave: ' +spaceShip.velocity+'km/s'+
            '\nVelocidade máxima da nave: '+ spaceShip.maxVelocity)
         }
}

function stop(){
    alert('Nome:'+ spaceShip.name + 
        '\nTipo: '+ spaceShip.type +
        '\nVelocidade da nave: '+ spaceShip.velocity +
        '\nVelocidade Máxima: '+spaceShip.maxVelocity
        )
        //spaceShip.velocity = 0
}

function showMenu(){
    let choseOption 
    do { 
        choseOption = prompt("Informe uma opçaõ :"+'\n1- Acelerar:'+'\n2 - Parar')
        switch(choseOption){
            case '1':
                acelerate()
                break
            case '2':
                stop()
                break
            default:
                alert("Opção inválida!!!")    
                break
        }
    } while (choseOption !=='2');

}

registerSpaceShip()
showMenu()