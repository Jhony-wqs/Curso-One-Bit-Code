class Wallet {
    #amount = 9999999 ;
    #username = 'Jhony wuanderson '
    
    constructor() {
        this.#amount = 100.99 * 100
    }

    get amount () {
        console.log(this.#amount)

    }

    set newAmount (value) {
        console.log(this.#amount = value)
    }

    set userName (newName) {
        if (this.#username === newName) {

            console.log(newName)
        }else {
            console.error('Validação de informações incorretas !!!!!')
        }
    }
}

const myWallet = new Wallet()
myWallet.amount // Lendo o valor da variável através do get, sem a presença dos parentasses. 
myWallet.newAmount = 200.99 *100 // Atribuindo um novo valor a variável através do set.
myWallet.userName = 'Jhony wuanderson '