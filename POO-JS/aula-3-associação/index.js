const Address= require('./Address')// importando com o commom js
const Person = require('./Person')



const addr = new Address('Esmeralda Viana da Silva',360,"Portal Sudoesta",'Campina Grande','PB')//Enviando parâmetros e recebendo um objeto da classe Address. 
const Jhony = new Person('Jhony',addr)//Enviando para a classe Person e passando a variável addr.

console.log(Jhony)
console.log(Jhony.address.fullAddress())//Chamando o metodo contido na classe Address.
