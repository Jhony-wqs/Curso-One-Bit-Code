import calculate from "./calcular.js"
import light from "./light.js"
import copy from "./copy.js"
import { handleButtonPress, handleType } from "./keyHandlers.js"
import { handleClearButton } from "./keyHandlers.js"


document.querySelectorAll('.charKey').forEach(function(charKeyBtn){//pegando todos os valores através do dataset e associando a os botoes clicados e colocando o valores no input.
    charKeyBtn.addEventListener('click',handleButtonPress)
})

document.getElementById('clear').addEventListener('click',handleClearButton)

document.getElementById('input').addEventListener('keydown',handleType)

document.getElementById('equal').addEventListener('click',calculate)//pegando o botão de igual e associando um função.
 document.getElementById('copyToClipboard').addEventListener('click',copy)
 document.getElementById('themeSwitcher').addEventListener('click',light)
