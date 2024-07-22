const Comment = require('./Comment')// Importação para da classe comment.
class Post {
    constructor(titile, body, author){
        this.titile = titile
        this.body = body
        this.author = author
        this.comments = []
        this.createDate = new Date()
    }
     addComment (username,content) {
        this.comments.push(new Comment(username,content))//Pegando o parâmetro comments que e um array e dando um push no conteúdo que vem da associação da classe comment.
     }
}


module.exports = Post