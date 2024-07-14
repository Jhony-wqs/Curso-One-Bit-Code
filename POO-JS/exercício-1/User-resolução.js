class User{
    constructor(fullname,email,password){
        this.fullname = fullname
        this.email = email
        this.password = password
    }
    login(email,password){
        if(this.email === email && this.password === password){
            console.log("Login realizado com sucesso.")
        }else{
            console.log("Falha ao fazer login ! Email ou senha inválida.")
        }
    }
}


const john = new User('jhony','jhony@br',12345)

john.login('jhony@br',12345)

console.log(john)