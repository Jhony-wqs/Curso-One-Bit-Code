const express = require("express");
const path = require("node:path");
const router = require("./routes");

const app = express();
const PORT = process.env.PORT || 300;

// Configuração do EJS como view engine.
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Configuração apa ler dados do formulário.
app.use(express.urlencoded({ extended: true }));

// Configuração para servir arquivos estáticos.
app.use(express.static("public"));

// Adiciona as rotas do roteador na aplicação.
app.use(router);

app.listen(PORT, () =>
  console.log(`Servidor iniciado! \nRodando em http://localhost:${PORT}/`),
);
