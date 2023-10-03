function go(){

    alert('vamos apredender função!!!!!!!!')
}

//go() //chamado da função!!!


function soma(a, b, c, d, e){

    alert('a soma de A + B + C + D + E  ,e = ' + (a + b + c + d + e))
}

 //soma(3, 7, 8 ,4 , 6) //passagem por paramentros

function dobro(x){
    alert('O dobro de ' + x + ' e ' + (x * 2))
}

// dobro()//função com parametro

function nome(nome = 'mundo') {

    alert('Olá , '+ nome + '!')
}
// nome("Isaac")
// nome() passsando um valor padrão caso a função não tenha 





function novoUsuario(nome , email, senha ,tipo= 'adim'){//<= valor padrão){//passando parametros para um objeto , sempre seguir a ordem estabelecida na hora da costrução das referencias, caso tiver um valor padrão ja estabelecido,  coloca-ló no final da refencias para não car erro com as outras
    const usuario = {
        nome,// caso o valor tenha o mesmo nome da chave no caso nome : nome , apenas colocar a palavra apenas uma vez e separar por virgula das outras chaves!!!
        email,
        senha,
        tipo
    }
    console.log(usuario)
 
}

// novoUsuario('jhony','jhony@1234',123, )


function objetoComPrametro(usuarios){

console.log(usuarios)

}


const dadosDoUsuario ={
    nome:'jhony',
    telefone:1234567,
    senha:1234567,
    endereco:'dgm~mrn]émn]émty',
    aniversrio:79686883986


}

objetoComPrametro(dadosDoUsuario)