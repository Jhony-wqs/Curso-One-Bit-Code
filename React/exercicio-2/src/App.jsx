
import Card from './components/Card'
import stwposterImg from './assets/stw.jpg'
import rotjposterImg from './assets/rotj-poster.jpg'
import esbposterImg from './assets/esb-poster.jpg'



function App() {
  

  return (
  //  usando a tag de fragment
    <>
    {/* Mudando o componente Card para receber props e reutilizando ele 3 vezes com diferentes props */}
      <Card title=" Pôster: Star Wars (1977)" posterImg={stwposterImg} />
      <Card title=" Pôster: Empire Stikes Back (1980)" posterImg={rotjposterImg} />
      <Card title=" Pôster: Return of the Jedi (1983)" posterImg={esbposterImg} />
    </>
  )
}

export default App
