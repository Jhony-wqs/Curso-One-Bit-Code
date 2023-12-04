function freio(velocidade,painel){
    const parar = 20
    while(velocidade > 0){
            painel(velocidade)
            velocidade -= parar
    }

    alert('Nave totalmente parada !!!!')
}

let velocidade = 160

freio(velocidade , function(velocidade){
    alert('Reduzindo velocidade ' + velocidade + 'hm/s')
})