
const input = document.getElementById('input')//pegando o input do html.
import calculate from "./calcular.js"
import {allowedKeys} from "./caracter.js"
import light from "./light.js"
import copy from "./copy.js"


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




 document.getElementById('copyToClipboard').addEventListener('click',copy)


 document.getElementById('themeSwitcher').addEventListener('click',light)
