let fila = []
let opcao = ''


do{

    let paciente = ''
    for(let i = 0 ; i < fila.length ; i++){
        paciente += (i + 1) + 'º - '+ fila[i] + '\n'
    }
    opcao = window.prompt(
        '--- Pacientes ---\n' 
        + paciente + 
        '\n-- Escolha uma opção --' + 
        '\n1. Novo paciente' + 
        '\n2. Consultar paciente' + 
        '\n3. Sair')
        switch(opcao){
            case '1':
                let novoPaciente = window.prompt('Informe o nome do pacinte?')
                fila.push(novoPaciente)
                break
            case '2':
                let pacinteConsultado = fila.shift()
                if(pacinteConsultado){
                    alert(pacinteConsultado + '  foi retirado da fila !')
                }else{
                    alert('Não a mais pacientes na fila !')
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