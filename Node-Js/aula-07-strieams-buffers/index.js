const fs = require("node:fs");

const streamLeitura = fs.createReadStream("arquivo.txt");
const buffer = [];

streamLeitura.on("data", (chunk) => {
  buffer.push(chunk);
  console.log("Um chunk foi processado!");
  const dadosCompletos = Buffer.concat(buffer).toString();
  console.log(dadosCompletos);
});
