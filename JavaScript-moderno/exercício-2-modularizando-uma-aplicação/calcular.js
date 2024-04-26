export default function calculate(){
     const resultInput = document.getElementById('result')//pegando o input de resultado.
    resultInput.value = 'ERROR'//colocado a string erro no input.
    resultInput.classList.add('error')//adicionando a classe error.

     const result = eval(input.value)//usando uma função eval onde ela vai fazer automaticamente o calculo.
     resultInput.value = result//mostrando o resultado no input. 
    
     resultInput.classList.remove('error')//removendo a classe error.
 }
