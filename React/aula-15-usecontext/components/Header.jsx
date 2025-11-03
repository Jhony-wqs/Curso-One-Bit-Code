import { useContext } from "react"
import UserContext from "../context/UseContext"

const Header = ()=> {
    const user = useContext(UserContext)

    return (
        <>
          <h3>Bem-vindo, {user.name}</h3>
          <hr />
          
        </>
    )
}

export default Header