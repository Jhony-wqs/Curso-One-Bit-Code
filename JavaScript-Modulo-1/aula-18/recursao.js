function dobrar(num){

    console.log(num)
    dobrar(num * 2 )//chamando uma função recursiva em loop 
}

//dobrar(2)
function dividir(num){
    console.log(num)
    if(num % 2 === 0){
        dividir(num / 2)
    }else{
        return num 
    
    }
}

//dividir(60)

function fatorial(num){
    console.log(num)
    if (num === 0){
        return 1
    }else if( num === 1){
        return 1
    }else{
        console.log(num + " *!" + (num - 1 ))
        return num * fatorial(num -1)
    }
}

// console.log("\n!5 = " + fatorial(5))



function multiplica(num1, num2){
    if (num1 === 0 || num2 === 0){
        return 0
    }else if( num2 === 1){
        return num1
    }else{
        return num1 + multiplica(num1 , num2 - 1)
    }
}
 
console.log(multiplica(5, 4))