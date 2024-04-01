const person = {
    name:'Jhony',
    job:'Dev front',
    parents:'Beto , Penha',
    Wife:'Mayara',
    children:["Holiver", "Bernardo"]
}
const name = person.name//pegando um valor da propriedade objeto de forma simples
console.log(name)

const {children, Wife} = person//pegando valores das propriedades através da desestruturação de objetos, onde e possível pegar varias propriedades de uma vez e colocar dentro de uma variável 
console.log(children, Wife)

const [son, child] = children//Desestruturando o array pegando o valor da propriedade children e atribuindo a variáveis com nomes diferentes.

console.log( child)
console.log(son)

function createUser(person) {
    //pegando valore do objeto de formal convencional.
    return{
    
        name:person.name,
        job:person.job,
        parents:person.parents
    }
}

console.log( createUser(person))

function destructure ({name,wife,children}){//usando desestruturação no parâmetro de uma função para pegar os valos de objeto.
    return{
        name,
        wife,
        children
    }
}

console.log(destructure(person))
