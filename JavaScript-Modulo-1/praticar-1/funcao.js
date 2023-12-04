const spaceShip = prompt('Informe o nome da nave ?:')
let speed = 0


function menu(){

    const opcao = prompt (  'Programa de Bordo'+
                         '\n1. Acelerar a nave em 5km/s'+
                         '\n2. Desacelerar em 5km/s'+
                         '\n3. Imprimir dados de bordo'+
                         '\n4. Sair')
    return opcao                     
}

function acelerar(){
   speed += 5
  
   
   return speed
}

function desacelerar(){
    speed -= 5
    if(speed < 0){
        speed = 0
    }
    return speed
}

function executar(){
    let opcao = ''
    do {
         opcao = menu()
     switch(opcao){
       case '1':
           acelerar()
          break
        case '2':
           desacelerar()
          break
       case '3':
          alert('Dados de bordo'+'\nNome da nave: ' + spaceShip + ' \nVelocidade de voo: ' + speed +'km/s' )
          break
       case '4':
          alert('Saindo...') 
          break  
            
     }
  } while (opcao !=='4');
}

executar()