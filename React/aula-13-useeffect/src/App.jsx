import { useState, useEffect } from "react"

export default function App() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    alert("O efeito colateral foi ativado.")
   }, []) //sempre usar um array vazio de dependência  para não ficar chamando ele a cada montagem do useState. E também usar o useEffect para fazer limpeza de componentes.
  return(
    <div>
      <h1>Conhecendo o useEffect</h1>
      <button onClick={()=> setCounter(count => count + 1)}>Contador :  {counter}</button>
    </div>
  )
}


