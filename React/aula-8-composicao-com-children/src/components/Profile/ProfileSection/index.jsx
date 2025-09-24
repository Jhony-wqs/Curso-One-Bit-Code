import styles from './styles.module.css'

export default function ProfileSection (props) {
    return (
        // usando operador rest paraments para passar varias propriedades dentro da teg do componente.
        <div {...props} className= {`${styles.wrapper} ${props.className}`}>
       
           {props.children}
        
        </div>

    )
}