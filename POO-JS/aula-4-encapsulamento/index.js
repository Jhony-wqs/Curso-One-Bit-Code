class Account {
     #password// deixando uma as duas propriedade privada onde só pode ser usada de dentro da classe
     #balance
    constructor(user){
        this.name = user.name
        this.email = user.email
        this.#password = user.password
        this.#balance = `$ ${768}`
    }

    loginAccount(password,email){
        if(this.#password === password && this.email === email){// acessando o método privado e comparando com o parâmetro que vem de fora da classe.
            return `Login efetuado com sucesso 
         saldo da conta $ ${this.#balance}`
        }else{
            return `Senha ou email errado tente novamente..`
        }
    }
}


const user = {
    name : 'Jhony',
    email : 'jhony@.com',
    password : '12345'
}

const myAccount = new Account(user)

myAccount.password = '1111111'// O js por conta de ser uma linguagem dinâmica ele cria a propriedade mais não e a mesma que ja esta lá.
console.log(myAccount)


console.log(myAccount.loginAccount('12345','jhony@.com'))