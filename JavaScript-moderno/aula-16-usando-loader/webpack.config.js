
module.exports = {
    entry:{
        index: './src/index.js',
       
    },
    mode: 'development',
    module:{//configuraçao do webpack para rodar loaders de css
        rules:[{
            test:/\.css$/,
            use: ['style-loader','css-loader']
        }]
    }
 
}