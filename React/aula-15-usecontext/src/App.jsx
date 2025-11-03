import UserInfo from "../components/UserInfo"
import UserContext from "../context/UseContext"
import Header from "../components/Header"

function App() {
const user = {
  name: 'João',
  email: 'joao@email.com'
}
  return (
    <UserContext.Provider value={user}>
    <>
      <Header/>
      <h1>Aplicação</h1>
     <UserInfo/>
    </>

    </UserContext.Provider>
  )
}

export default App
