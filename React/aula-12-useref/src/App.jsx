import { useRef, useState } from "react"
import RefExemple from "./RefExample"

export default function App () {
  let variavel = 0
  const [state, setState] = useState(0)
  const ref = useRef(0)

  const showValue = ( ) => {
    alert(`
      Variável: ${variavel}
      Ref: ${ref.current}
      State: ${state}
      `)
  }

  return (
    <div>
      <h1>Exemplo de useRef com o DOM</h1>
      <RefExemple />
      <hr />
      <h1>Conhecendo o UseRef</h1>
      <hr />
      <p>Variável: {variavel}</p> <button onClick={()=> variavel++}>Aumentar valor</button>
      <p>Ref: {ref.current}</p>  <button onClick={() => ref.current++}>Aumentar valor</button>
      <p>useState: {state}</p>  <button onClick={()=> setState(state => state + 1)}>Aumentar valor</button>
      <hr />
      <button onClick={showValue}>Mostrar valor</button>
    </div>
  )
}