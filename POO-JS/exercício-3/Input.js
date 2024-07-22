import { Component } from "./Component.js";

export class Input extends Component {
   constructor(parent, options) {
    super('input', parent, options)// Instanciando  a classe mãe e passando diretamente o tipo de teg que vai fazer, e recebendo os outros parâmetros diretamente da instancia,
   }
}