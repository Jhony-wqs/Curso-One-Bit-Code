// Classe para cria o objeto comentário.

class Comment {
    constructor(username,content){
        this.username = username
        this.content = content
        this.createDate = new Date()
    }
}

module.exports = Comment