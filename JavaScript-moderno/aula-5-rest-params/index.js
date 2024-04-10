function sun (...number){// rest params recebe vario parametros de uma vez, quando usa o operador spread automaticamente os paramentros são tranformados em um array, podendo assim usar funções de array.
    return number.reduce((accum, num) => accum + num, 0)//usando o reduce para fazer soma.
}


console.log(sun(1,2,3))
console.log(sun(2,4,5,7))