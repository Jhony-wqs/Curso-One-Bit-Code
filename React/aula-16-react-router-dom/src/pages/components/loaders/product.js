import database from '../../../database.json' // Só cai nesse arquivo caso na rota não existir o parâmetro.

export default function loadProduct({params}) {
     const product = database.find(p => p.id === +params.productId)
    

    if (!product) {
    throw new Response("Oops... Esse produto não foi encontrado =(", { status: 401 })
  }
     
     return product
    
}
 