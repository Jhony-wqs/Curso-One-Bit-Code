const path = require("path")// usando o modulo do node para ajudar a na criação de saída criando o arquivo public.
module.exports = {
    entry:{
        main: './src/index.js',
        hello: '.src/hello.js'//especificando que tem mais de um documento de entrada.
    },
    mode: "production",// tem o modo development,production.
    output: {
        path: path.resolve(__dirname, "public"),// criando uma nova pasta com  nome public
        filename: '[name].bundle.min.js'//colocando um nome no arquivo minificado,caso tenha mais de um arquivo de entrada colocar o colchete com o nome name seguido do ponto. 

    }
}