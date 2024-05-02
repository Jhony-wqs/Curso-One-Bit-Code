import calculate from "./calcular.js"
import { allowedKeys } from "./caracter.js"

const input = document.getElementById('input')//pegando o input do html.

export function handleButtonPress(ev){
    const value = ev.currentTarget.dataset.value
    input.value += value
}

export function handleClearButton(){//pegando o botão  de limpar e colocando um string vazia e colocando foco no input.
    input.value = ''
    input.focus()
}

export function handleType(ev){
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
   
}