let name1 = window.prompt('nome do primeiro personagem ?')
let power = Number(window.prompt('poder de ataque ?'))


let name2  = window.prompt('nome do segundo personagem ?')
let life   = Number(window.prompt('pontos de vida  de ? '+ name2))
let defesa = Number(window.prompt('poder de defesa ?'))
let escudo = window.prompt('ele tem escudo de proteção sim/não')

let danoCausado = 0

if(power > defesa && escudo === 'não'){
    danoCausado = power - defesa
}else if( power > defesa && escudo === 'sim'){
    danoCausado = (power - defesa)/2
}else if(power < defesa){
    danoCausado = 0
}else(
    danoCausado = 0
)

life -= danoCausado

alert('O personagem '+ name1 + ' casou um dano de ' + danoCausado + ' no personagem '+name2)
alert(
    name1 + "\n poder de ataque" + power +'\n\n'
    + name2 + ' pontos de vida '+ life + '\n' +
    'Poder de defesa ' + defesa + '\n Possui escudo : ' + escudo)