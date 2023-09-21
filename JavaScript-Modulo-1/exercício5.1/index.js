let opcao = ''

do{
    opcao = window.prompt(
        "Seja bbem vindo(a)"+
        "\nEscolha uma das opçãoes"+
        "\n1. Opção"+
        "\n2. Opção"+
        "\n3. Opção"+
        "\n4. Opção"+
        "\n5. Opção")
        switch(opcao){
            case "1":
                alert('Voçê escolheu a opção 1')
                break
            case "2":
                 alert('Voçê escolheu a opção 2')
                 break  
             case "3":
                 alert('Voçê escolheu a opção 3')
                 break
            case "4":
                alert('Voçê escolheu a opção 4')
                break
            case "5":
                 alert('Voçê escolheu encerrar.')
                 alert('Encerrando......')
                 break 
            default:
                alert('Opção inválida ')         


        }
}while(opcao !== '5')