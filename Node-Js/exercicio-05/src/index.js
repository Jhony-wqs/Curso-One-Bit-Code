const express = require("express");
const path = require("node:path");

const app = express();
// Configuração do EJS como view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware para servir arquivos estáticos na pasta public
app.use(express.static("public"));

// Middleware para decodificar o corpo das requisições
app.use(express.urlencoded({ extended: true }));

// Array para armazenar os e-mails em memória
let emails = [];

// Rota para a página principal
app.get("/", (req, res) => {
  res.render("index");
});

// Rota para lidar com o cadastro de e-mails
app.post("/signup", (req, res) => {
  const { email } = req.body;
  console.log(email);

  if (email) {
    emails.push(email);
    res.redirect("/success");
  } else {
    res.redirect("/");
  }
  console.log(emails);
});

// Rota para a página de sucesso após o cadastro
app.get("/success", (req, res) => {
  res.render("success");
});

app.get("/emails", (req, res) => {
  res.render("emails", { emails: emails });
});

// Rota para excluir um e-mail da lista
app.post("/emails/delete", (req, res) => {
  const { email } = req.body;

  emails = emails.filter((item) => item !== email);
  res.redirect("/emails");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor iniciado....., http://localhost:${port}`);
});
