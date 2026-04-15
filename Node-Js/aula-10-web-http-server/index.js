const http = require("node:http");

const server = http.createServer((request, response) => {
  const path = request.url;

  switch (path) {
    case "/":
      response.writeHead(200);
      response.write("Você está nna página inicial.");
      break;
    case "/artigos":
      response.writeHead(200);
      response.write("Você esta na página de artigos.");
      break;
    default:
      response.writeHead(404);
      response.write("Caminho não encontrado.");
      break;
  }
  response.end();
});

const port = 3000;
server.listen(port, () => {
  console.log(`servidor rodando na porta http://localhost:${port}/`);
});
