import { useState } from "react";
import PropTypes from "prop-types";
import TextInput from "./TextInput";

NewGameForm.prototype = {
    addGame: PropTypes.func
}


export default function NewGameForm ({addGame}) {
  const [title, setTitle] = useState("")
  const [cover, setCover] = useState("")

    const handleSubmit = (event) => {
    event.preventDefault();
    addGame({title, cover});
    setTitle('');
    setCover('');
  }
   return(
    
         <form onSubmit={handleSubmit}>
           
            <TextInput id="title" label="Título" value={title} onChange={(event) => setTitle(event.target.value)} />
            <TextInput id="cover" label="Capa" value={cover} onChange={(event) => setCover(event.target.value)} />
            <button>Adicionar</button>
      </form>
   )
}