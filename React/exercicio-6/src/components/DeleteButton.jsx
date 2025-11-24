import PropTypes from "prop-types"
import useStock from "../hook/useStock"
import { useNavigate } from "react-router-dom"

DeleteButton.propTypes = {
    itemName: PropTypes.string.isRequired,
    itemId: PropTypes.number.isRequired
}

export default function DeleteButton({itemName,itemId}) {
    const {deleteItem} = useStock()
    const navigation = useNavigate() 
    
    const hundleDelete = () => {
        if(confirm(`Tem certeza que deseja excluir ${itemName}?`)) {
           deleteItem(itemId)
           navigation("/items")
           
        }
     }
    return (
        <button className="button is-danger is-small" onClick={hundleDelete}>
            Excluir
        </button>
    )
}