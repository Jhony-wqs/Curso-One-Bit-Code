export class Component {
       #element = null// Valor declarado privado.
       constructor(tag, parent, options) {//recebe parâmetros de todas as classes. 
        this.tag = tag
        this.parent = parent
        this.options = options
        this.build()// Chama o método
       }

       getElement() {
        return this.#element
       }

       build() {//Método.
        this.#element = document.createElement(this.tag)//Cria a tag.
        Object.assign(this.#element, this.options)// Agrupo na teg todos os seus parâmetros.
        return this// Retorna toda a teg com seus atributos.
       }

       render() {
        if (this.parent instanceof Component) {// Verifica se parent e uma instancia de Component.
          this.parent.getElement().append(this.#element)// Pega o elemento e adiciona dentro do body
        }else {
            document.querySelector(this.parent).append(this.#element)// Se caso o parâmetro for uma string ele procura pelo método query e adiciona o elemento.
        }
       }
}