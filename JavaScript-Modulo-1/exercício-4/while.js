const nome   = window.prompt('Informe seu nome ?')
let visita = window.prompt('Voçê ja visitou alguma cidade ?sim/não')

let numeroDeCidades = 0
let cidades = ''
 while (visita === 'sim'){
    let cidade = window.prompt('Qual o nome da cidade ?')
    cidades += ' - ' + cidade + '\n'
    numeroDeCidades++
    visita = window.prompt('Você visitou alguma outra cidade ? sim/não')
 }
 alert(nome + '\n numero de cidades visitadas '+ numeroDeCidades+'\n cidades visitadas'+'\n'+cidades)

