let nomes = ['1º jhony','2º mayara','3º holiver']
let opcao = ''
do{
    opcao = window.prompt('Fila de espera\n' + nomes +'\n1 - Novo paciente' + '\n2 - Consulta paciente' + "\n3 - Sair")
   switch(opcao){
       case '1':
        let nome = nomes.push(prompt('Informe o nome do paciente a ser adicionado'))
       
         break
       case '2':
          let retirado = nomes.shift()
          alert(retirado)
          
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