function Pessoa  (idade,cor,tipocabelo,altura,peso){
    this.idade = idade
    this.cor = cor
    this.tipocabelo = tipocabelo
    this.altura = altura
    this.peso = peso

}


const pessoa1 = new Pessoa(23,'parda','liso', 1.70,70.5)

console.log(pessoa1)