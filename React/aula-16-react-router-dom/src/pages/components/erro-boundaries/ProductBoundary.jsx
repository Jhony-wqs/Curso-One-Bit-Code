import { isRouteErrorResponse, useRouteError } from "react-router-dom";


export default function ProductBoundary() {
    const error = useRouteError() // hook que faz o tratamento do erro e dentro dele vem vários parâmetros para se trabalhar como exemplo isRouteErrorResponse, status entre outros.

    if(isRouteErrorResponse(error)) {
        switch (error.status) {
            case 404:
                return <h2> Oops... esse produto não foi encontrado :(</h2>
            case 401:
                return <h2>Você não está autorizado a ver essa página.</h2>
            case 400: 
                return <h2>Parece que deu algo errado na requisição.</h2> 
            case 500:
                return <h2>Erro interno do servidor.</h2>           
        }
    }

    return <h2>Algo deu errado.</h2>
}
