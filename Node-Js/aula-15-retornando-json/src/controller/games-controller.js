const games = [
  { id: 1, name: "Legend of Mana", genres: ["action-rpg"], year: 1999 },
  { id: 2, name: "World of Warcraft", genres: ["mmorpg"], year: 2004 },
  {
    id: 3,
    name: "Metal Gear Solid",
    genres: ["stealth", "action-adventure"],
    year: 1998,
  },
  { id: 4, name: "Sonic Adventure 2", genres: ["platformer"], year: 2001 },
  {
    id: 5,
    name: "Age of Empires 2",
    genres: ["real-time-strategy"],
    year: 1999,
  },
];

module.exports = {
  index: (req, res) => {
  
    res.json({ message: "Hello word" });

  },

  allShow: (req, res) => {
 
    res.json(games);
  },

  show: (req, res) => {
    const { id } = req.params;
    console.log(id)

    const game = games.find((game) => game.id === +id);

    if (!game) {
      res.status(404);
      res.json({ message: "Game not Found!" });
    } else {
      res.json(game);
    }
  },


  save: (req, res) => {
     const {name, genres, year} = req.body
      const newGame = {
        id: games.length + 1,
        name,
        genres,
        year
      }

      games.push(newGame)

      res.status(201)
      res.json(newGame)
  },

  update: (req, res) =>{
     const {id} = req.params
     const {name, year} = req.body

     const gameIndex = games.findIndex(game => game.id === +id)

     if(gameIndex === -1){
      return res.status(400).json({message:'Game not found!'})
     }

     if(typeof name === 'string'){
      games[gameIndex].name = name
     }

     if(typeof year === "number"){
      games[gameIndex].year = year
     }

     res.json(games[gameIndex])
  },

  addGenre: (req, res) =>{
    const {id} = req.params
    const {genre} = req.body

    const gameIndex = games.findIndex(game => game.id === +id)

    if(gameIndex === -1){
      return res.status(404).json({ message: 'Game not found!'})
    }

    if(typeof  genre !== 'string' || games[gameIndex].genres.includes(genre)){
      return res.status(400).json({message: 'Invalid genre'})
    }

    games[gameIndex].genres.push(genre)
    res.json(games[gameIndex])
  },

  delete: (req, res) =>{
    const {id} = req.params


    const gameIndex = games.findIndex(game => game.id === +id)

    if(gameIndex === -1){
      return res.status(404).json({message:'Game not found!'})
    }

    games.splice(gameIndex, 1)
    res.status(204).end()
  },

  removeGenre: (req, res) =>{
    const {id, name} = req.params

    const indexGame = games.findIndex(game => game.id === +id)
   

    if(indexGame === -1){
      return req.status(404).json({message:'Game não encontrado!'})
    }

    if(!name || typeof name !== 'string' || !games[indexGame].genres.includes(name) ){
      return res.status(400).json({message:'Invalid genre!'})
    }

    games[indexGame].genres = games[indexGame].genres.filter(genre => genre !== name)

    res.status(204).end()
  }
};
