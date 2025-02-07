// Função para renderizar um artigo na página
function renderArticle(articleData) {
    // Cria um elemento 'article'
    const article = document.createElement('article')
    // Adiciona a classe 'article' ao elemento
    article.classList.add('article')
    // Define o id do elemento com base no id do artigo
    article.id = `article-${articleData.id}`
  
    // Cria um elemento 'h3' para o título
    const title = document.createElement('h3')
    // Adiciona a classe 'article-title' ao título
    title.classList.add('article-title')
    // Define o texto do título com o título do artigo
    title.textContent = articleData.title
  
    // Cria um elemento 'div' para o conteúdo
    const content = document.createElement('div')
    // Adiciona a classe 'article-content' ao conteúdo
    content.classList.add('article-content')
    // Define o conteúdo HTML do artigo
    content.innerHTML = articleData.content
  
    // Cria um elemento 'div' para o autor
    const author = document.createElement('div')
    // Adiciona a classe 'article-author' ao autor
    author.classList.add('article-author')
    // Define o texto do autor com o nome do autor do artigo
    author.textContent = articleData.author
  
    // Adiciona o título, autor e conteúdo ao elemento 'article'
    article.append(title, author, content)
    // Adiciona o elemento 'article' ao elemento com id 'articles' na página
    document.querySelector('#articles').appendChild(article)
}

// Função assíncrona para buscar artigos do servidor
async function fetchArticles() {
    // Faz uma requisição para obter os artigos e converte a resposta para JSON
    const articles = await fetch("http://localhost:3000/articles").then(res => res.json())
    // Para cada artigo, chama a função renderArticle para renderizá-lo na página
    articles.forEach(renderArticle)
}

// Adiciona um evento para executar quando o conteúdo do DOM for carregado
document.addEventListener('DOMContentLoaded', () => {
    // Chama a função fetchArticles para buscar e renderizar os artigos
    fetchArticles()
})

// Seleciona o elemento 'form' na página
const form = document.querySelector('form')

// Adiciona um evento para executar quando o formulário for submetido
document.addEventListener('submit', async (ev) => {
    // Previne o comportamento padrão de submissão do formulário
    ev.preventDefault()

    // Cria um objeto com os dados do artigo a partir dos valores dos campos do formulário
    const articlesDate = {
        title: document.querySelector('#title').value,
        content: document.querySelector('#content').value,
        author: document.querySelector('#author').value
    }

    // Faz uma requisição POST para enviar os dados do novo artigo ao servidor
    const response = await fetch("http://localhost:3000/articles", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // Converte os dados do artigo para JSON e os envia no corpo da requisição
        body: JSON.stringify(articlesDate)
    })
// Converte a resposta da requisição para JSON e armazena no saveArticle
const saveArticle = await response.json()
// Reseta os campos do formulário
form.reset()
// Renderiza o novo artigo na página
renderArticle(saveArticle)
// Exibe o artigo salvo no console
console.log(saveArticle)
})