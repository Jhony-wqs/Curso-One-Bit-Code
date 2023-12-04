const nameSpaceship = prompt('Informe o nome da espaçonave ?')
const secreto = 'e'

let newSpaceship = ''

for(let i = nameSpaceship.length -1; i >= 0 ; i--){

    if(secreto === nameSpaceship[i]){
        break
    }else{

        newSpaceship += nameSpaceship[i]
    }
}


console.log(newSpaceship)