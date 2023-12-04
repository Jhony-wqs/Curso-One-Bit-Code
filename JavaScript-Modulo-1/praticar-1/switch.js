const anoLuz = Number(prompt('Qual a distância em ano-luz quer calcular ?'))
const opcao = prompt('Opções'+
'\n1. Parsec (PC)'+
'\n2.Unidade astronônica (AU)'+
'\n3. Quilômetros (KM)')

switch(opcao){
    case '1':
        alert(anoLuz+' Ano-luz convertido para Parsec e ' + (anoLuz*0.306601)+' Parsec')
        break
    case '2':
        alert(anoLuz+' Ano-luz convertido para Unidade Astrômica e '+(anoLuz*63241.1)+' AU')
        break    
    case '3':
         let novo = (Math.pow(10, 12))*(anoLuz*95)
         alert(anoLuz +' Ano-luz convertido para quilômetros e ' + anoLuz*95*Math.pow(10,12))
        
        break    
    default:
     alert('Distância em Anos-luz '+ anoLuz + 'Unidade não identificada, conversão fora do escopo!')   
}