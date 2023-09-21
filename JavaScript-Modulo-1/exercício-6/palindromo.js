const palavra = window.prompt('Informe uma Palavra:!')

let PalavraInvertida = ''


for(let i = palavra.length - 1;i >=0;i--){
    PalavraInvertida += palavra[i]
    
}

if(palavra === PalavraInvertida){
    alert('A palavra e palindrome')
}else{
    alert('Não e palindrome')
}