const main = document.querySelector('main')// pegando o main do html.
const root = document.querySelector(':root')//pegando o root do css.
const input = document.getElementById('input')//pegando o input do html.
const resultInput = document.getElementById('result')//pegando o input de resultado.
const allowedKeys =  ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]//criando um array com todos os caracteres que tem na calculadora.

document.querySelectorAll('.charKey').forEach(function(charKeyBtn){//pegando todos os valores através do dataset e associando a os botoes clicados e colocando o valores no input.
    charKeyBtn.addEventListener('click',function(){
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})

document.getElementById('clear').addEventListener('click',function(){//pegando o botão  de limpar e colocando um string vazia e colocando foco no input.
    input.value = ''
    input.focus()
})

input.addEventListener('keydown',function(ev){
    ev.preventDefault()
    if(allowedKeys.includes(ev.key)){// a função includes esta fazendo uma iteração pela array e comparando com o valor digitado pelo teclado se o valor for verdadeiro ele coloca o valor digitado.
        input.value += ev.key
        return
    }
    if(ev.key === 'Backspace'){//pegando a tecla de backspace e para apagar os números digitados com o método slice.
        input.value = input.value.slice(0, -1)
    }

    if(ev.key === 'Enter'){//pegando a tecla enter e colocando uma função associada.
        calculate()
    }
   
})

document.getElementById('equal').addEventListener('click',calculate)//pegando o botão de igual e associando um função.


function calculate(){
    resultInput.value = 'ERROR'//colocado a string erro no input.
    resultInput.classList.add('error')//adicionando a classe error.

     const result = eval(input.value)//usando uma função eval onde ela vai fazer automaticamente o calculo.
     resultInput.value = result//mostrando o resultado no input. 
    
     resultInput.classList.remove('error')//removendo a classe error.
 }


 document.getElementById('copyToClipboard').addEventListener('click',function(ev){//pegando o botão de copiar e colocando um evento que checa se foi clicado e faz uma comparação se ele for pressionado mudar o texto para copiado e se ja estiver copiado retora para copia.
    const button = ev.currentTarget
    if(button.innerText === 'Copy'){
        button.innerText = 'Copied !'
        button.classList.add('success')
        window.navigator.clipboard.writeText(resultInput.value)
    }else{
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
 })


 document.getElementById('themeSwitcher').addEventListener('click',function(){
    //pegando o id do botão e colocando um evento onde vai verificar de o main tem o a data-theme dark, esse tiver vai modificar a cor atrves do root do css.
    if(main.dataset.theme === 'dark'){
        root.style.setProperty('--bg-color','#f1f5f9')
        root.style.setProperty('--border-color','#aaa')
        root.style.setProperty('--font-color','#212529')
        root.style.setProperty('--primary-color','#26834a')
        main.dataset.theme = 'light'
    }else{
        root.style.setProperty('--bg-color','#212529')
        root.style.setProperty('--border-color','#666')
        root.style.setProperty('--font-color','#f1f5f9')
        root.style.setProperty('--primary-color','#4dff91')
        main.dataset.theme = 'dark'
    }

 })

