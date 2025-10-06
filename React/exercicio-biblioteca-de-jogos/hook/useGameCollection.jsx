import { useState } from "react";

export default function useGameCollection () {
  
    const [games, setGame] = useState(()=> {
    const storedGames = localStorage.getItem("obc-game-lib");
    if (!storedGames) return [];
    return JSON.parse(storedGames);
  });

  const addGame = ({title, cover}) => {
    const id = Math.floor(Math.random() * 100000);
    const game = { id, title, cover };
    setGame(state =>{ 
      const newState = [...state, game]
      localStorage.setItem("obc-game-lib", JSON.stringify(newState))
      return newState
    })
  }


  const removeGame = (id) => {
    setGame(state => {
      const newState = state.filter((game) => game.id !== id)
      localStorage.setItem("obc-game-lib", JSON.stringify(newState))
      return newState
    });
  }

  return {games, addGame, removeGame}
    
}