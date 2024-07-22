import { Component } from "./Component.js";

export class Label extends Component {
    constructor(text, parent, options) {
        super('label', parent, Object.assign({}, options, { textContent: text}))//Primeiro parâmetro cria diretamente a teg label segundo parâmetro vem da variável form eo terceiro parâmetro recebendo um objeto da instancia e aplicando ao parâmetro text do construtor desse mesma classe.
    }
}