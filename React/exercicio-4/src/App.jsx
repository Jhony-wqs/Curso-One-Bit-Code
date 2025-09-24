import { useState } from 'react'
import Input from '../components/input'


function App() {

  const [password, setPassword] = useState('')
  const [copyText, setCopyText] = useState('Copiar')
  const [customSize, setCustomSize] = useState(``) 
  const [showInput, setShowInput] = useState(false)

  const passwordSize = showInput ? customSize : 8

  function generate() {
    const caracter = '1234567890-=!@#$%^&*()qwertyuiopasdfghjklzxcvbnm<>?'
    
    
    let newPassword = ''
    for (let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * caracter.length)
      newPassword += caracter[position]
    }
    setPassword(newPassword)
    setCopyText('Copiar')
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(password)
    setCopyText('Copiado!')
  } 
  return (
    <>
      <div className="app">
        <h1>Gerador de senhas</h1>
        <div>
          <label htmlFor="showInput">Customizar senha : </label>
          <input type="checkbox" name="showInput" id="showInput" onChange={() => setShowInput(currentState => !currentState)}/>
        </div>
        {showInput ? (
          <>
          <label htmlFor="passwordSize">Tamanho da senha:</label>
          <Input passwordSize={passwordSize} setPasswordSize={setCustomSize} />        
          </>
        ) : null}
        <button onClick={generate}>Gerar de  { passwordSize } caracteres</button>
        <button onClick={copyToClipboard}>{copyText}</button>
       <p>{password}</p>
      </div>
     
    </>
  )
}


export default App
