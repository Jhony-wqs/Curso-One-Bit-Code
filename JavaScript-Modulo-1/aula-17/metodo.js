let pessoa ={
    nome:'jhony',
    sobrenome:'wuanderosn',
    idade: 35,
    cpf: 100000000,
    ola(){
        console.log('Olá senhor(a) seja bem vindo '+ this.nome + ' ' + this.sobrenome)
    }
}
console.log(pessoa)// chamando o objeto
pessoa.ola()//chmamando a função dentro do objeto