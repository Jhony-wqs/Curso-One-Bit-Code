function sum (a, b) {
  return a + b
}


function App() {
  const count = 'React'
  const status = true

  return (
    <div>
      <h1>{count} is awesome</h1>
      <h2>It's easy, like 1 + 1 = {1 + 1}</h2>
    { <h2>It's easy, like 1 + 1 = {sum(1, 1)}</h2> /*usando funções para calcular dinamicamente */}
       <h3>Status: {status ? 'Ativo' : 'Inativo'}</h3>{/* o jsx nao reconhece booleanos, por isso a necessidade do operador ternario ou do tipo curto circuito && */}
       <h3>{status && <p>O status é verdadeiro</p>}
      {status || <p>O status é falso</p>}</h3>
      

    </div>
    
  )
}

export default App
