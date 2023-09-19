let carro1 = window.prompt('qual e o modelo do primeiro carro ?')
let vel1   = Number(window.prompt('qual a velocidade do primeiro carro ?'))

let carro2 = window.prompt('qual e o modelo do segundo  carro ?')
let vel2   = Number(window.prompt('qual a velocidade do segundo carro ?'))


if(vel1 > vel2){
    alert(carro1 + '\n' + vel1 + ' km/h ' + ' e mais rápido que '+ carro2)
}else if( vel1 < vel2){
    alert(carro2 + '\n'+ vel2 + ' Km/h '+'e mais rápido que '+ carro1)
}else{
    alert(carro1 + ' e ' + carro2 + 'velocidade iguais ')
}