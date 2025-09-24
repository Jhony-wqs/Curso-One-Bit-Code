//Componentizando o input e compartilhando o estado via props
//props = propriedades que são passadas para o componente
//nesse caso, estamos passando o estado e a função de setState como props   
{/* input controlando o estado da senha */}
export default function Input (props) {
    return(
        <input type="number"
         id='passwordSize' 
         min={1} 
         value={props.passwordSize}
         onChange={(ev) => props.setPasswordSize(+ev.target.value)}  
          placeholder='Tamanho da senha'
       />
    )
}


//Existem outras formas de compartilhar estado com uma biblioteca PropTypes instalando via npm.