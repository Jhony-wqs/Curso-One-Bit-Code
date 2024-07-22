const Post = require('./Post')// Importando com common js a classe.

class Author {
    constructor(name){
        this.name = name
        this.posts = []
    }
    writePost (title, body) {
        const post = new Post(title, body, this)// Usando os parâmetros da classe post para forma o array da classe author o terceiro parâmetro this usado refere-se a propria classe author. 
        this.posts.push(post)
        return post
    }
}

module.exports = Author