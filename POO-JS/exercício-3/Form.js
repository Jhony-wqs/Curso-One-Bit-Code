import { Component } from "./Component.js";

export class Form extends Component {
    constructor(parent, options) {
        super('form', parent, options)// Setando diretamente que a teg vai ser form, segundo parâmetro recebe da instancia onde vai ficar o form.
    }
    
    addChildren(...children) {//Criando um método para adicionar tags dentro do form. 
        children.forEach(child => {
            this.getElement().appendChild(child.getElement( ))// This.getElement representa o form e adiciona os filhos dentro deles com o metodo  appendChild pegando cada elemento que vem da iteração e colocando no form.
        })
    }
}