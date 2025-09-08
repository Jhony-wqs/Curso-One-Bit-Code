import Title from './components/Title/index.jsx'
import Subtitle from './components/Subtitle.jsx'
import Dinamico from './components/dinamico.jsx'
import styles from './styles/App.module.css'

function App() {
 
  

  return (
    <div className={styles.app}>
      <Title />
      <Subtitle />
      <Dinamico />

    </div>
    
  )
}

export default App
