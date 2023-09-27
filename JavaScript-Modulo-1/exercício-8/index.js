let quantidadeImoveis = ''
let opcao = ''
let adicionarImoveis = []
  


do{
    opcao = prompt(
        'Quantidade de Imóveis cadastrado :' +
         quantidadeImoveis.length + 
        '\n1. Adicionar Imóveis'+
        '\n2. Mostrar Imóveis'+
        '\n Sair')
        switch(opcao){
            case '1':
             quantidadeImoveis +=1
             for(let i = 0; i< quantidadeImoveis; i++){
              let nome = prompt('Nome do proprietário ?')
              let quartos = prompt('quantidade de quartos ?')
              let banheiro = prompt('Qauntidade de banheiro ?')
              let garagem = prompt("Tem garagem ?")
             }

              break
            case '2':
              
              
               break            
            case '3':
              alert('Saindo...')
              break
            default:
              alert('Opção inválida')  

        }

}while(opcao !== '3')