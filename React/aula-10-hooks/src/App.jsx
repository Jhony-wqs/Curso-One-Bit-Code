import useCounter from '../hooks/useCounter'
import './App.css'


// 1 regra dos hooks
// so chamar hooks no nivel mais alto do componente
// nao chamar dentro de loops, condicoes ou funcoes aninhadas.

// 2 regra a ordem dos hooks
// sempre chamar na mesma ordem

function App() {
  const counter = useCounter()

  return (
    <>
    
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={counter.increment}>
          count is {counter.count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
