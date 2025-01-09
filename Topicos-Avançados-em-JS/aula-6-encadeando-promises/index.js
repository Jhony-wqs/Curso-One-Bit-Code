// Define a função checkAge que recebe a idade como parâmetro
function checkAge (age) {
    // Retorna uma nova Promise
    return new Promise((resolve, reject) =>{
        // Verifica se a idade foi informada
        if (age ) {
            // Se a idade foi informada, resolve a Promise com true se a idade for maior que 18
            resolve(age >18)
        } else {
            // Se a idade não foi informada, rejeita a Promise com uma mensagem de erro
            reject('Idade não informada corretamente.')
        }
    })
}

// Define a função getAge que recebe a data de nascimento como parâmetro
function getAge(birthday) {
    // Retorna uma nova Promise
    return new Promise((resolve, reject) => {
        // Verifica se a data de nascimento foi informada
        if (birthday) {
            // Extrai o ano de nascimento a partir da data informada
            const birthYear = new Date(birthday).getFullYear()
            // Obtém o ano atual
            const currentYear = new Date().getFullYear()
            // Resolve a Promise com a diferença entre o ano atual e o ano de nascimento
            resolve(currentYear - birthYear)
        } else {
            // Se a data de nascimento não foi informada, rejeita a Promise com um erro
            reject(new Error('Data errada.'))
        }
    })
}

// Exemplo não recomendado
getAge('1988-02-27').then((age) =>{
    // Chama a função checkAge com a idade obtida
    checkAge(age).then((maior18) =>{
        // Verifica se a pessoa é maior de idade
        if (maior18) {
            console.log('Maior de idade.')
        } else {
            console.log('Menor de idade.')
        }
    }).catch((erro) => {
        // Trata o erro da função checkAge
        console.log(erro.message)
    })
}).catch((erro)=> {
    // Trata o erro da função getAge
    console.log(erro.message)
})

// Exemplo 2 recomendado
getAge('2009-02-02').then((age) =>{
    // Retorna a chamada da função checkAge com a idade obtida
    return checkAge(age)
})
.then((maior18) =>{
    // Verifica se a pessoa é maior de idade
    if (maior18) {
        console.log('Maior de idade.')
    } else {
        console.log('Menor de idade.')
    }
})
.catch((erro) =>{
    // Trata o erro de qualquer uma das Promises
    console.log(erro.message)
}).catch((erro) =>{
    // Trata o erro de qualquer uma das Promises
    console.log(erro.message)
})
