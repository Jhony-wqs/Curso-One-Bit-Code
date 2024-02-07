function createLabel(text,htmlFor){//função para criar uma label dinamicamente.
    const  label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    return label
}

function createInput(id, value, name, type='text', placeholder = ''){//função para criar o input dinamicamente.
    const input = document.createElement('input')
    input.id = id
    input.value = value
    input.name = name
    input.type =type
    input.placeholder = placeholder
    return input

}

const addTechBtn = document.getElementById('addTechBtn')//pegando o botão
const form = document.getElementById('devForm')//pegando o form
const developers = []//criando um array
let inputRows = 0//criando uma variável com o número de linhas dos inputs

addTechBtn.addEventListener('click',function(ev){
    const stackInputs = document.getElementById('stackInputs')//pegando a ul.
    const newRow = document.createElement('li')//criando um li.
    const rowIndex = inputRows//pegando o numero de linhas de input
    inputRows++//adicionando mais 1 em cada chamado
    newRow.id = 'inputRow'+rowIndex//colocando um id concatenado
    newRow.className = 'inputRow'//colocando uma class

    const techNameLabel = createLabel('Nome :', 'techName-'+rowIndex)//chamado da função label.
    const tecNameInput = createInput('techName-'+rowIndex, null,'techName')//chamado da função input.

    const expLabel = createLabel('Experiência :')//criando a label para nome da seção.
    const id1 = 'expRadio-' + rowIndex + '.1'// criando um id dinâmico.
        //criando um input com a sequencia de id, value, name, type.
    const expRadio1 = createInput(id1,'0-2 anos','techExp-'+rowIndex, 'radio')
        //criando a label onde vai ser associada ao input.
    const expLabel1 = createLabel('0-2 anos', id1)

    const id2 = 'expRadio-' + rowIndex + '.2'
    const expRadio2 = createInput(id2,'3-4 anos','techExp-'+rowIndex, 'radio')
    const expLabel2 = createLabel('3-4 anos', id2)

    const id3 = 'expRadio-' + rowIndex + '.3'
    const expRadio3 = createInput(id3,'5 + anos','techExp-'+rowIndex, 'radio')
    const expLabel3 = createLabel('5 + anos', id3) 

    const removeRowBtn = document.createElement('button')// criando o botão de remover.
    removeRowBtn.type = 'button'
    removeRowBtn.innerText = 'Remover'
    removeRowBtn.addEventListener('click', function(){//criando a função onde remove o filho da ul que no caso ea li.
        stackInputs.removeChild(newRow/*id da li */)
    })


    newRow.append(techNameLabel, tecNameInput,expRadio1,expLabel1,expRadio2,expLabel2,expRadio3,expLabel3,removeRowBtn)

    stackInputs.append(newRow)
})


form.addEventListener('submit', function(ev){
    ev.preventDefault()

    const fullNameInput = document.getElementById('fullName')//pegando o id do html.
    const inputRows = document.querySelectorAll('.inputRow')//pegando todos os inputs dentro da li

    let technologies = []// criando o array. 
    inputRows.forEach(function(row){// criando uma função para pegar os valores dos inputs.
        const techName = document.querySelector('#'+ row.id + ' input[name="techName"]').value//pegando os inputs dos nomes das tecnologias
        const techExp = document.querySelector('#'+row.id + ' input[type="radio"]:checked').value//pegando os inputs radio que estão marcados.
        technologies.push({name:techName, exp: techExp})//fazendo um push em forma de objeto para o array technologies.
    })

    const newDev = {fullname: fullNameInput.value, technologies:technologies}//criando uma variavel para colocar junto no array newDev.
    developers.push(newDev)//enviando pra o array.
    alert('DEV cadastrado com sucesso!!')

    fullNameInput.value = ''//limpando o input do nome do dev.
    inputRows.forEach(function(row){//criando uma função para limpar os inputs radio.
        row.remove()
    })

    console.log(developers)

})