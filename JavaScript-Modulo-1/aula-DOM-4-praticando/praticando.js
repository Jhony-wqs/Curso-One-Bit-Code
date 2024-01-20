function addContact(){
    const sectionLists = document.getElementById('contacts-list')

    const h3 = document.createElement('h3')
    h3.innerText = 'Contato'

    const ul = document.createElement('ul')

    const nameLi = document.createElement('li')
    nameLi.innerHTML = '<label for="fullname">Nome :</label>'
    const inputName = document.createElement('input')
    inputName.type = 'text'
    inputName.name = 'fullname'
    inputName.id = 'fullname'
    nameLi.appendChild(inputName)
    ul.appendChild(nameLi)
    ul.appendChild(document.createElement('br'))

    const phoneLi = document.createElement('li')
    phoneLi.innerHTML = '<label for="phone">Telefone :</label>'
    const phoneInput = document.createElement('input')
    phoneInput.type = 'text'
    phoneInput.id = 'phone'
    phoneInput.name = 'phone'
    phoneLi.appendChild(phoneInput)
    ul.appendChild(phoneLi)
    ul.appendChild(document.createElement('br'))

    const addressLi = document.createElement('li')
    addressLi.innerHTML = '<label for="address">Endereço :</label>'
    const addressInput = document.createElement('input')
    addressInput.type = 'text'
    addressInput.name = 'address'
    addressInput.id = 'address'
    addressLi.appendChild(addressInput)
    ul.appendChild(addressLi)
    ul.appendChild(document.createElement('br'))

    sectionLists.append(h3,ul)
}

function removeContact(){
    const sectionLists = document.getElementById('contacts-list')

    const title = document.getElementsByTagName('h3')
    const contact = document.getElementsByTagName('ul')

    sectionLists.removeChild(title[title.length - 1])
    sectionLists.removeChild(contact[contact.length - 1])
}