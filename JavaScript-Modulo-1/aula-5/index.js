let idade = Number(window.prompt('Qual sua idade ?'))

if(idade < 18){
    alert('de menor')
}else if (idade < 50){
    alert(' de maior')
}else if(idade < 60){
    alert('melhor idade')
}else{
    alert('idoso')
}