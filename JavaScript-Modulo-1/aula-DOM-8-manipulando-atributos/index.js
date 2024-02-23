const input = document.getElementById('input')

document.getElementById('value').addEventListener('click',function(){
    //input.value = 'mudando o valor'// mudando o valor dentro do input
    input.value = input.value === '' ? 'conseguio':''//mudando o valor com condição ternaria.
    console.log(input.value)//esse pega o valor dinamicamente colocado no input.
    console.log(input.getAttribute('value'))// já esse pega o valor pre-definido no input do html caso não tenha um value ele retora null.
})

document.getElementById('type').addEventListener('click', function(){
    //input.type = input.type === 'text' ? 'radio': 'text'//mudando o input do tpo texto para radio.
    input.setAttribute('type', 'radio')
})

document.getElementById('placeholder').addEventListener('click',function(){
    input.placeholder = 'olaaaaaaa'
})

document.getElementById('disable').addEventListener('click',()=>input.setAttribute('disabled', input.disabled= 'true'))//desabilitando o input.



document.getElementById('data').addEventListener('click', function(){
    const data = input.dataset.something//esse tribute e usado como se fosse uma variável podendo usar e concatenar seu valor.
    console.log('valor em texto do html !!' + data)
})


