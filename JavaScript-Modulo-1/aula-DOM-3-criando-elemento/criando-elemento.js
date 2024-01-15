function addInput(){
    const ul = document.getElementById('inputs')//pegando a tag ul e colocando em uma variável.

    const newLi = document.createElement('li')//criando uma tag <li></li> 
    newLi.className = 'list-item'//colocando uma classe
    newLi.innerText = 'Texto do Input :'//colocando o nome que vai no input
    

    const newInput = document.createElement('input')//criando um input
    newInput.type = 'text'//escolhendo o atributo do input
    newInput.id = 'input'//colocando um id no input
    

    newLi.appendChild(newInput)//criando o input no html
    ul.appendChild(newLi)//criando o li no html
}