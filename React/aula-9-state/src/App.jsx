import { useState } from 'react'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <h1 >Contador: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Diminuir</button>
      <button onClick={() => { setCount(0); alert('Contador zerado!'); }}>Zerar</button>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
     </div>
    </>
  )
}

export default App
