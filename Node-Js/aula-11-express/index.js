const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Servidor Express funcionando \n\n Você está na página inicial.");
});
app.get("/post", (req, res) => {
  res.send("olaaaaaaaaaaa");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor express iniciado em http://localhost:${port}`);
});
