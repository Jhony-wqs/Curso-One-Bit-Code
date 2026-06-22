const express = require("express");
const app = express();
const gamesController = require("./controller/games-controller");

app.use(express.json())

app.get("/", gamesController.index);
app.get("/games", gamesController.allShow);
app.get("/games/:id", gamesController.show);


app.post('/games', gamesController.save)
app.post('/games/:id/genres', gamesController.addGenre)

app.put('/games/:id',gamesController.update)

app.delete('/games/:id',gamesController.delete)
app.delete('/games/:id/genres/:name', gamesController.removeGenre)

const PORT = 3000;

app.listen(PORT, () =>
  console.log(`Servidor iniciado em http://localhost:${PORT}/`),
);
