//Matriz bidimensional oque tem várias arrays juntas em uma mesma estrutura 

// let matriz = [
// ['1º nível','2º nível','3º nível'],
// ['1º nível','2º nível','3º nível'],
// ]
// console.table(matriz)


//acessesando as camadas da matriz 
/*const arr = [
    '1/º nível',
    ['2º nível',42,true],
    [
        ['3º\ nível, 1º item','olá mundo'],
        ['3º nível, 2º item','oi mundo'],
    ],
    []
]
console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[1][0])
console.log(arr[2][0][0])
console.log(arr[2][1][1])*/

// como fazer novas linhas e colunas na matriz

const matriz =  [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
  ]
console.table(matriz)
 /* console.table(matriz)

  matriz.push('Nova linha')
  matriz[0].push('Nova coluna')

  console.table(matriz)*/

  for( let i = 0; i < matriz.length; i++){
      for( let j = 0; j < matriz[i].length;j++){
        let elemeno =matriz[i][j]
        console.log("posição (" + i + " ," + j + " ) valor :" + elemeno )

      }

  }

  matriz[0].push('l1, c5')
  console.table(matriz)
  