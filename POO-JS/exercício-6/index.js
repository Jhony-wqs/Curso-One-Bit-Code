// const App = require('./App')

// App.createUser('jhony@emial.com', 'jhony wuanderson')
// App.createUser('mayara@email.com','mayara dezes')
// App.createUser('holiver@email.com', 'holiver dezes')

// App.deposit('jhony@email.com', 100)

// App.trasnfer('jhony@email.com', 'mayara@email.com', 20)

// App.changeLoanFee(10)
// App.takeLoan('holiver@email.com', 2000, 24)

// console.log(App.findUser('jhony@email.com'))
// console.log(App.findUser('jhony@email.com'))
// console.log(App.findUser('jhony@email.com'))
// console.log(App.findUser('jhony@email.com'))
// console.log(App.findUser('jhony@email.com'))
// console.log(App.findUser('jhony@email.com'))
// console.log(App.findUser('jhony@email.com'))

const App = require("./App")

App.createUser("isaac@email.com", "Isaac Pontes")
App.createUser("lucas@email.com", "Lucas Queiroga")
App.createUser("juliana@email.com", "Juliana Conde")

App.deposit("isaac@email.com", 100)

App.transfer("isaac@email.com", "lucas@email.com", 20)

App.changeLoanFee(10)
App.takeLoan("juliana@email.com", 2000, 24)

console.log(App.findUser("isaac@email.com"))
console.log(App.findUser("isaac@email.com").account)
console.log(App.findUser("lucas@email.com"))
console.log(App.findUser("lucas@email.com").account)
console.log(App.findUser("juliana@email.com"))
console.log(App.findUser("juliana@email.com").account)
console.log(App.findUser("juliana@email.com").account.loans[0].installments)