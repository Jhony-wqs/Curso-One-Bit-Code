const nome = prompt('Nome do piloto:')
let velocidade = 0
 velocidade = prompt('Velocidade inicial '+velocidade+'km/s  aqui velocidade gostaria  de acelerar ?')
const confirme = confirm('Voçê vai acelera a velocidade de '+velocidade+'km/s' )

 if(confirme === false){
    velocidade = 0
 }

 if(confirme === true && velocidade <= 0){
    alert('Nave está parada.Considere partir e aumentar a velocidade')
 }else if(confirme === true && velocidade <= 40){
    alert('Vecê está devagar,podemos aumentar mais...')
 }else if(confirme === true && velocidade <= 80){
    alert('Velocidade alta.Considere diminuir..')
 }else if(confirme === true && velocidade <= 100){
    alert('Velocidade perigosa,controle automático forçado')
 }

 alert('O piloto '+nome+' está com a velocidade do foquete a '+velocidade+'km/s')