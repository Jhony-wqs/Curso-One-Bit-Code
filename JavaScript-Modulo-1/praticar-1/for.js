 const palavra = prompt('Informe o nome da espaçonave ?')
const letra1 = prompt('Informe o caracter que deseja substituir ?')
const letra2 = prompt('Qual caracter vai ser colocado no lugar do outro ? ')
let novaPalavra = ''

for(let i = 0; i < palavra.length; i++){

    if( letra1 === palavra[i]){
        novaPalavra += letra2

    }else{

        novaPalavra += palavra[i]
    }
}
 alert(novaPalavra)