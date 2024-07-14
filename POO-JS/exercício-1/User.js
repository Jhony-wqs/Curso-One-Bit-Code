// um atributo fullname, atribuível na instanciação

// um atributo email, atribuível na instanciação

// um atributo password, atribuível na instanciação

// um método login, que tem como parâmetros um email e uma senha e deve comparar esses parâmetros com o email e a senha do usuário e mostrar uma mensagem no console dizendo se o login foi bem sucedido ou não

 class User {

    constructor(fullname,email,password){
          this.fullname = fullname
          this.email = email
          this.password = password
    }
    validation(login,senha){
       if(login === this.email && senha === this.password){
        this.validit = 'login feito com sucesso'
       }
}
}


const pessoa = new User('Jhony Wuanderson','jhony@.com',12345)
pessoa.validation('jhony@.com',12345)
console.log(pessoa)



















