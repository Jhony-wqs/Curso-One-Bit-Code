let saldo = Number(window.prompt('Informe a quntidade de dinheiro inicial:'))
let opcao = ''


do{
   opcao = window.prompt('Saldo dispoível: R$ '+ saldo +
   '\n1. Adicionar dinheiro'+
   '\n2. Remover dinheiro'+
   '\n3. Sair')
   
   switch(opcao){
    case '1':
        saldo += Number(window.prompt('Informe o valor a ser adicionado:'))
        break
    case '2':
        saldo -= Number(window.prompt('Informe o valor a ser removido:'))
        break 
    case '3':
        alert('Encerrando....') 
        break 
    default:
        alert('Opção invalída!!!!!!!')         

   }
}while(opcao !== '3')