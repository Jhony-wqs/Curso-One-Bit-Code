import { createBrowserRouter } from "react-router-dom";
import Admin from "./pages/components/admin/Admin";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Layout from "./pages/Layout";
import Product from "./pages/Product";
import loadProduct from "./pages/components/loaders/product";
import ProductBoundary from "./pages/components/erro-boundaries/ProductBoundary";

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Layout />, 
    children: [
      {
        index: true,
        element: <Home />, 
      },
      {
        path: "products", 
        element: <Products />,
      },
      { 
        path: "products/:productId", 
        element: <Product/>,
        loader: loadProduct,//adicionando loader na rota.`
        errorElement: <ProductBoundary/> //importando o arquivo do tratamento do erro.
      },

      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);

export default router;
