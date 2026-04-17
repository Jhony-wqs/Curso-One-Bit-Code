const express = require("express");
const path = require("node:path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  const title = "Homepage";
  const message = "Mensagem dinâmica inserida pelo EJS";

  res.render("index", { title, message });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Iniciando servidor em http://localhost:${port}`);
});
