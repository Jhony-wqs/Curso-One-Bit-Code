function show(){
    const contactList = document.getElementById('contact-list')
    console.log(contactList)

    const listElement = document.getElementsByTagName('li')
    console.log(listElement)

    const contactInput = document.getElementsByClassName('contact-input')
    console.log(contactInput)

    const contacts = document.querySelectorAll('#contact-list > li > label')
    console.log(contacts)

    const contact1 = document.getElementsByName('contact1')
    console.log(contact1)

    const firstContact = document.querySelector('#contact-list > li > label')
    console.log(firstContact)
}