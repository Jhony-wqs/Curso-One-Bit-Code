// Função que calcula o IMC (Índice de Massa Corporal) de forma assíncrona
function imc(peso, altura) {
    return new Promise((resolve, reject) => {
        // Verifica se os parâmetros peso e altura são números
        if (typeof peso === 'number' && typeof altura === 'number') {
            // Calcula o IMC
            const imc = peso / (altura * altura);
            // Resolve a Promise com o valor do IMC
            resolve(imc);
        } else {
            // Rejeita a Promise com uma mensagem de erro
            reject('Os valores inseridos não são números');
        }
    });
}

// Função que classifica o IMC de acordo com os valores fornecidos
function classificaIMC(peso, altura) {
    // Chama a função imc e passa os parâmetros peso e altura
    imc(peso, altura)
        .then((resultado) => {
            // Mensagem indicando que a função assíncrona foi chamada
            console.log('Chamando a função assíncrona!');
            // Classifica o resultado do IMC em diferentes categorias
            if (resultado < 18.5) {
                console.log('Abaixo do peso');
            } else if (resultado >= 18.5 && resultado <= 24.9) {
                console.log('Peso normal');
            } else if (resultado >= 25 && resultado <= 29.9) {
                console.log('Sobrepeso');
            } else if (resultado >= 30 && resultado <= 34.9) {
                console.log('Obesidade grau 1');
            } else if (resultado >= 35 && resultado <= 39.9) {
                console.log('Obesidade grau 2');
            } else {
                console.log('Obesidade grau 3');
            }
        })
        // Captura e exibe qualquer erro que ocorra durante a execução da Promise
        .catch((erro) => {
            console.log(erro);
        });
}

// Chama a função classificaIMC com os valores '70' (peso) e 1.75 (altura)
// Isso resultará em um erro porque o peso é uma string, não um número
classificaIMC('70', 1.75);
