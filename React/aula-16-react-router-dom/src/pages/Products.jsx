import databese from "../database.json"
import { Link } from "react-router-dom"

export default function Products() {
    return (
        <section>
            <h2>Todos os produtos</h2>
            <p>Confira todas as ofertas.</p>
            <h3>Processadores entre outros.</h3>
            <ul>
              {databese.map((product) =>(
                <li key={product.id}>
                    <h4>{product.name}</h4>
                    <p>R$ {product.price}</p>
                    <Link to={`/products/${product.id}`}>
                    <button>ver</button>
                    </Link>
                    <button>Comprar</button>
                </li>
              ))}
            </ul>
        </section>
    )
}

