import { Link, useParams } from "react-router-dom"
import database from "../database.json"

export default function Product() {
    const {productId} = useParams() 

    const product = database.find(p => p.id === +productId)
    console.log(database)


    if(!productId){
        return(
            <>
            <Link to="/products"><button>Voltar</button> </Link>
           <h2> Oops... esse produto não foi encontrado :(</h2>
            </>
        )
    }
    return (
        <section>
            <Link to="/products"><button>Voltar</button> </Link>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>$ {product.price}</p>
            <button>Comprar</button>
        </section>
    )
}