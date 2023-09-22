


do{
    
    alert('Menu \n Eacolha a proteina do seu prato\na) Carne \nb) Peixe \nc)Frango \nd)Frutos do Mar\ne) Encerra  ')
     var escolha = window.prompt('Escollha a opção do menu a ser acrecentada no seu prato !!!')
     
     switch(escolha){

        case 'a':
            alert('carne de sol\n Acompanhamento \n - Arroz\n - Feijão\n - Macarrão')
            break
        case 'b':
            alert('Peixe no molho \n Acompanhamento  \n -Arroz \n -Feijão verde')    
            break
        case 'c':
            alert('strogonoff de frango  \n Acompanhamento \n - Arroz \n - Batata palha')    
            break
        case 'd':
            alert('Carangueijo \n Acompanhamento \n - Arroz\n - Farofa')    
            break
        case 'e':
            alert('ENCERRANDO PEDIDO!!') 
            
          
          break 
        default:
            alert('OPÇÃO INVÁLIDA')  
            break

     }
    
}while(escolha !== 'e')
