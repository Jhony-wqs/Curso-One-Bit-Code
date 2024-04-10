const a = 0
const b = null
const c = undefined
const d = NaN
const e = 'test'
const f = 1
 console.log(a || b || c || d || e || f)// O  js converte qualquer valor implicitamente para false e true no caso de cima ele faz o teste entre os valores e o primeiro que de true e retorna que no caso e a string test.

 console.log(a ?? b ?? c ?? d ?? e ?? f)// Já no caso do operador de coalescência ele retorna o primeiro valor que seja diferente de null e undefined.

// Usando o operador de coalescência nula para atribuir valor a uma variável.

let g = 0
let h = a || 42 // O js vai fazer a conversão de valores e como o zero e falso ai vai atribuir o valor 42 a variável.
console.log( {h} )

h = g ?? 42
console.log({h})// No caso do operador de coalescência ele vai atribuir o valor zero pois ele não e um valor nulo ou undefined.



