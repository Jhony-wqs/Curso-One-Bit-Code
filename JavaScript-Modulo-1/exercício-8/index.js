let opcao = ''
let adicionarImoveis = []
 


do{
    opcao = prompt(
        'Quantidade de Imóveis cadastrado :' +
         adicionarImoveis.length + 
        '\n1. Adicionar Imóveis'+
        '\n2. Mostrar Imóveis'+
        '\n Sair')
        switch(opcao){
            case '1':
            const imoveis = {}
              imoveis.proprietario = prompt('Informe o nome do proprietário do Imóvel ?')
              imoveis.quartos = prompt('Informe a quantidade de quartos ?')
              imoveis.banheiro = prompt('Informe a quntidade de banheiro(s) ?')
              imoveis.garagem = prompt('O imóvel tem garagem SIM/NÃO ?')  
               const confirmacao = confirm('Favor verificar os dados se estão corretos ! \nSalvar este imóvel SIM/NÃO ?'+
               '\n\nProprietário :' +imoveis.proprietario + 
               '\nQuantiadade de quartos :' +imoveis.quartos +
               '\nQuantidade de banheiro(s) :' + imoveis.banheiro +
               '\nO imóvel tem garagem ? :'+imoveis.garagem)      
                 
               if(confirmacao){
                adicionarImoveis.push(imoveis)
                alert('Imóvel salvo com sucesso!! ')
               }else{
                alert('Voltando ao menu !!!')
               }
              
            
              break
            case '2':
              for(let i = 0 ; i < adicionarImoveis.length ; i++){
                  alert('Imóvel :'+(i+1)+
                     '\n\nProprietário :'+ adicionarImoveis[i].proprietario+
                     '\nQuartos : '+adicionarImoveis[i].quartos+
                     '\nBanheiros : '+adicionarImoveis[i].banheiro+
                     '\nGaragem : '+adicionarImoveis[i].garagem
                  )
             
              }
               break            
            case '3':
              alert('Saindo...')
              break
            default:
              alert('Opção inválida')  

        }

}while(opcao !== '3')








            