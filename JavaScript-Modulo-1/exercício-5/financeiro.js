//exercício feito por mim

var saldo = Number(window.prompt('Qual o valor líquido do saldo da conta ?'))
 do{
    var opção = Number(window.prompt('Saldo disponivel no momento da consulta $'+saldo+'\n OPÇÃO\n1º Saque\n2º Deposito\n3º Sair'))
    switch(opção){
        case 1:
            saldo -= Number(window.prompt(`Qual vai ser o valor do saque `))
           
            break
        case 2:
            saldo += Number(window.prompt(`Qual vai ser o valor do Deposíto ?`))  
            break
        case 3:
            alert('Encerrando Programa!!\nVolte sempre!!')      
            break
        default:
            alert('OPÇÃO INVÁLIDA, TENTE NOVAMENTE.')    
    }
    
    
 }while(opção !== 3)