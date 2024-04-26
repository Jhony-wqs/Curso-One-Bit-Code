 export default (ev) => {//pegando o botão de copiar e colocando um evento que checa se foi clicado e faz uma comparação se ele for pressionado mudar o texto para copiado e se ja estiver copiado retora para copia.
    const resultInput = document.getElementById('result')
    const button = ev.currentTarget
    if(button.innerText === 'Copy'){
        button.innerText = 'Copied !'
        button.classList.add('success')
        window.navigator.clipboard.writeText(resultInput.value)
    }else{
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
 }