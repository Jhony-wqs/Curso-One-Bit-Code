const path = require("node:path");

const fullPath = path.join(__dirname);
console.log(fullPath);
console.log("-----------------");

const dir = "src";
const file = "app.js";
const pathFull = path.join(".", dir, file);
console.log(pathFull);
console.log("=====================");

const relativePath = "./arquivod/relatorio.pdf";

const absolutePath = path.resolve(__dirname, relativePath);
console.log(absolutePath);
console.log("===================");

const fileName = path.basename(absolutePath);
console.log(fileName);
