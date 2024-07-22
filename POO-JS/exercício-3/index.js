// Exercício feito junto com o professor.

import { Component } from "./Component.js";//importando os módulos.
import { Input } from "./Input.js";
import { Label } from "./Label.js";
import { Form } from "./Form.js";

const title = new Component('h1', 'body', {textContent: 'Ola mundo!'})// Criando a tag, 
console.log(title)
title.render()// Renderiza a teg 

title.tag = 'h3'// Atribui um novo valor
title.build().render()// Chama o método e renderiza

const form = new Form('body')// Criando um formulário, chamando a classe Form e passando como parâmetro onde o formulário vai ser aplicado.

const label = new Label('Name :' ,form, { htmlFor: 'nameInput'})// Criando a label com os parâmetros  de nome, recebendo a variável form e passando a propriedade htmlFor onde vai vincular o nome da label com o nome do input.

const input = new Input(form, { id: 'nameInput', name: 'name'})// Criando um input passando os parâmetros que vem da variável form, e passando um segundo parâmetro como um objeto vai ser criado o id e o nome do input.

form.render()//Chama o método e coloca o formulário no html.
label.render()// Chama o método label.

form.addChildren(input)//Chama o método que adiciona o input dentro do form.
form.addChildren(//Chama o método e cria quebras de linhas e cria uma label com seus atributos e cria um input com todas sua propriedades.
    new Component('br'),
    new Component('br'),
    new Label('Data de Nascimento:', { htmlFor: 'birthdayInput'}),
    new Input(form, { id: 'birthdayInput', name: 'birthday', type: 'date' })
  )