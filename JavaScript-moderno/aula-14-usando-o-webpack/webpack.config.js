const path = require('path')

module.exports = {
    entry: {
        index: './src/index.js'// configuração de sa ida, o nome do arquivo.
    },
    mode: "development",
    output:{
        path: path.resolve(__dirname,'public'),
        filename:'bundle.min.js'
    }

}