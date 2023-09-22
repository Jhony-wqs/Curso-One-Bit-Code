let cartas = ['7 espadas','2 ouro','4 paus','9 copas']
let opcao = ''



do{
    let baralho = ''
    for(let i = 0; i < cartas.length;i++){
        baralho += (cartas[i]) + "\n"
   }
   opcao = window.prompt('-- Baralho --\n'+baralho+ 
   '\n ---- MENU ----'+
    '\n1 - Adicionar Carta'+
    '\n2 - Puxar Carta'+
    '\n3 - Sair')
    
    switch(opcao){
        case '1':
            let colocarTopo = window.prompt('Qual carta você quer adicionar ao baralho?')
            cartas.unshift(colocarTopo)
            break
        case '2':
            if(cartas <= 0){
                alert('Não a mais cartas no Baralho')
            }else{

                let tirarTopo = cartas.shift()
                alert(tirarTopo + " Foi retirada do baralho !")
            }
            break
        case '3':    
            alert('Saindo do programa...')
            alert("Finalizando!!!!!!!!")
            break
          default:
           alert('OPÇÃO INVÁLIDA...')  
           alert('TENTE NOVAMENTE!!')    
    }
 
}while(opcao !== '3')