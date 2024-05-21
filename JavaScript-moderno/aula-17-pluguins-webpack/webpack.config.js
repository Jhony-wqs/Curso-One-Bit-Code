const miniCss = require("mini-css-extract-plugin")//importando plugin para criar o arquivo de css separado do js.
module.exports = {
    entry:{
        index: './src/index.js',
       
    },
    mode: 'development',
    module:{//configuraçao do webpack para rodar loaders de css
        rules:[{
            test:/\.css$/,
            use: [miniCss.loader,'css-loader']
        }]
    },
    plugins:[
        new miniCss()
    ]
 
}