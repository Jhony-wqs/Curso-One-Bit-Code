// Literals são tipos representados por conteúdos específicos
// Variáveis const são automaticamente literals,
// mas variáveis let também podem ser tipadas como literals
let literal;
let PI;
// Não é possível atribuir nenhum valor a um literal
literal = 'jhony'; //  Da erro
PI = 455532; // DA erro
// Unions são tipos que unem diferentes possibilidades de tipos
// Eles são definidos usando o caracter pipe "|"
let option;
option = 2;
option = 'jhony';
option = false; // Da erro pois não 
// Ao unirmos Unions com Literals temos um resultado muito interessante
let planet;
// Com isso o autocompletar da IDE se torna ainda mais poderoso
if (planet === 'Terra') {
    console.log('Terraaaaaaaaaaa');
}
// Um Alias é um nome personalizado para um tipo e pode ser atribuido a outras variáveis
let homePlanet;
homePlanet = 'Terra';
// Também é possível utilizar um Alias para declarar arrays personalizados
let milkWay;
console.log(milkWay);
function citys(city) {
    if (city === "Campina Grande") {
        console.log("Eu sou campinense com orgulho");
    }
}
citys("Campina Grande");
// A partir disso podemos anotar esse tipo
function greet(callbackfn) {
    const name = 'Jhony';
    callbackfn(name);
}
// E ao definir nosso callback temos acesso às informações
// sobre o seu tipo e retorno para nos auxiliar
greet((name) => {
    console.log(`Olá, ${name}! Essa é uma saudação executada como callback!`);
});
