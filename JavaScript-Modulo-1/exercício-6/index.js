let n = Number(window.prompt('Informe a tabuada que será mostrada ?'))

let resultados =''
for(let i = 1;i <= 20 ;i++){

    resultados += (n + 'x' + i + '='+n*i+'\n')
    
}
console.log(resultados)
alert(resultados)