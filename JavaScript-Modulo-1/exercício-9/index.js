// Escreva um programa em javascript para calcular a área de diferentes formas geométricas. O programa deve iniciar com um menu contendo as diferentes opções de cálculas. As opções devem ser:

// - área do triângulo: base * altura / 2
// - área do retângulo: base * altura
// - área do quadrado: lado²
// - área do trapézio: (base maior + base menor) * altura / 2
// - área do círculo: pi * raio² (considere pi = 3.14)

// Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu.
let opcao = ''

//EXERCÍCIO FEITO COM VÁRIOS TIPOS DE FUNÇÕES , METODOS E PARAMETROS"""""

do{
    opcao = prompt(
    'Calculadora Geométrica'+
    '\nInforme qual a área que vai calcular :'+
    '\n\n1- Área do triângulo :'+
    '\n2- Área do retângulo :'+
    '\n3- Área do quadrado :'+
    '\n4- Área do trapézio :'+
    '\n5- Área do círculo :'+
    '\n6- Sair :')
    switch(opcao){
        case '1':
            function triangulo(base, altura){
              const totalTriangulo = (base * altura)/2
              alert('A área total do triângulo e  ' + totalTriangulo)
                
            }
            const base   = Number(prompt('Informe a base do triângulo ?') )
            const altura = Number(prompt('Informe a altura do triângulo ?'))
            triangulo(base, altura)
           break
        case '2':
            function retangulo(){
              const base   =Number(prompt('Informe a base do retângulo ?'))  
              const altura = Number(prompt("Informe a altura do retângulo ?"))
              const totalRetangulo = base*altura
              alert('A área total do retângulo e  ' + totalRetangulo)

            }
            retangulo()
            
           break
        case '3':
            function quadrado(lado){
                const totalQuadrado = lado
                return totalQuadrado**2
            }

            const lado = Number( prompt('Informe o lado do quadrado ?'))
            alert('A área total do quadrado e  '+ quadrado(lado))
           break 
        case '4':
            function trapezio(base1, base2, alt){
             let totalTrapezio = (base1 + base2)*alt
             return totalTrapezio /2
            }
            const base1 = Number(prompt('Informe a base maior ?'))
            const base2 = Number(prompt("Informe  a base menor ?"))
            let alt= Number( prompt("Informe a altura ?"))
             alert('A área total do trapézio e '+ trapezio(base1, base2, alt))
            
           break
        case '5':
            function areaDoCirculo(raio){
                return 3.14*(raio**2)
            }


            function circulo(raio){
                return areaDoCirculo(raio)
            }
            let raioDocirculo = Number( prompt('Informe a área para calculo do circulo ? '))
            alert('A área total do circulo e '+circulo(raioDocirculo))
           break
        case '6':
           alert('Saindo do programa....')
           break
       default:
            alert('Opção errada tenta outra vez!')
    }

}while(opcao !== '6')
