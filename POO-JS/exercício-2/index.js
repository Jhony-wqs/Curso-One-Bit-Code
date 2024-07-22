const Author = require("./Author");// Importando a classe e através dela que vai estanciar todas as classes associadas. 

const jhony = new Author('Jhony')// Passando o nome do autor do post.
const post = jhony.writePost("Titulo do post",'blablablablablabla')// Chamando o método da classe Author para passar os parâmetros do titulo e corpo do post junto com o nome do autor.

post.addComment('Pedro','Muito legal !!')// Usando a variável post que esta associada as outras classes através a variável jhony para chamar o método da classe Post.
post.addComment('Holiver', 'Gostei muito !!')

console.log(jhony,post)
