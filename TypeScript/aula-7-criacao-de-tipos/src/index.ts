// Literals são tipos representados por conteúdos específicos
// Variáveis const são automaticamente literals,
// mas variáveis let também podem ser tipadas como literals
 let literal : 'Hello Word'
 let PI : 3.14159


 // Não é possível atribuir nenhum valor a um literal
 literal = 'jhony' //  Da erro
 PI = 455532 // DA erro


 // Unions são tipos que unem diferentes possibilidades de tipos
// Eles são definidos usando o caracter pipe "|"

let option : string | number 

option = 2

option = 'jhony'

option = false // Da erro pois não 

// Ao unirmos Unions com Literals temos um resultado muito interessante
let planet: "Mercúrio" | "Vênus" | "Terra" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno" | "Plutão"

// Com isso o autocompletar da IDE se torna ainda mais poderoso

if (planet === 'Terra') {
    console.log('Terraaaaaaaaaaa')
}

// Uma forma ainda mais flexível de usar os tipos é criando um Alias
// Um Alias é definido usando a palavra type e existe uma convenção de se utilizar PascalCase
type Universe = "Mercúrio" | "Vênus" | "Terra" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno" | "Plutão"


// Um Alias é um nome personalizado para um tipo e pode ser atribuido a outras variáveis

let homePlanet: Universe

homePlanet = 'Terra'

// Também é possível utilizar um Alias para declarar arrays personalizados


let milkWay : Universe[]

console.log(milkWay)


// Repare que usando um Alias temos acesso ao autocompletar
// dentro do escopo da função e temos um código muito mais 
// limpo que se usássemos a definição inteira do tipo


type City = 'Campina Grande' | 'João pessoa' | 'Patos' | 'Cajazeiras'


function citys(city:City) {
    if(city === "Campina Grande") {
        console.log("Eu sou campinense com orgulho")
    }
}


citys("Campina Grande")


// No TypeScript também podemos definir um Alias para uma função
// Podemos fazer isso através da sintaxe de arrow functions
// mencionando os parâmetros e o tipo de retorno

type GreeetingCallback = (name:string ) => void

// A partir disso podemos anotar esse tipo

function greet(callbackfn: GreeetingCallback) {
    const name = 'Jhony'

    callbackfn(name)
}
// E ao definir nosso callback temos acesso às informações
// sobre o seu tipo e retorno para nos auxiliar

greet((name) => {
    console.log(`Olá, ${name}! Essa é uma saudação executada como callback!`)
})

