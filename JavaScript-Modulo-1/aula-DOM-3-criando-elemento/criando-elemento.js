function addInput(){
    const ul = document.getElementById('inputs')

    const newLi = document.createElement('li')
    newLi.className = 'list-item'
    newLi.innerText = 'Texto do Input :'
    

    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.id = 'input'
    

    newLi.appendChild(newInput)
    ul.appendChild(newLi)
}