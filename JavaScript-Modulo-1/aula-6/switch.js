let expressão = window.prompt('Qual a resposta correta para a exprssão 7 x 8 ? \na) 45\nb) 56\nc) 60\nd) nenhuma das alternativas')

expressão = expressão.toLocaleLowerCase()

switch(expressão){
    case 'a':
        alert('ERRADO')
        break
    case 'b':
        alert('CORRETA')    
        break
    case 'c':
        alert('ERRADO')
        break
    case 'd':
        alert('ERRADO')    
    default:
     alert('Alternativa incorreta')
       
}