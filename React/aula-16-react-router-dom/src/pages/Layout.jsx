import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
    return (
        <>
        <Header/>
        <main>
          <p>Esse é o layout principal. Abaixo está o conteúdo dinâmico de cada rota.</p>
          <hr />
        </main>
        { <Outlet/> /*Usando rotas filhas ou sub-rotas. */}
        <hr />
        <footer>
            <p>Feito com React DOM</p>
        </footer>
        </>
    )
}