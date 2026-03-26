import fs from "node:fs";
import { text } from "node:stream/consumers";

export function createFile(text) {
  fs.writeFile("meu-arquivo.txt", text, (err) => {
    if (err) {
      console.log("Erro ao escrever o arquivo", err.message);
    } else {
      console.log("Arquivo criando com sucesso!");
    }
  });
}

export function showFile() {
  fs.readFile("meu-arquivo.txt", "utf8", (err, text) => {
    if (err) {
      console.log("Erro ao ler arquivo", err.message);
    } else {
      console.log(text);
    }
  });
}

export function updateFale(newText) {
  fs.writeFile("meu-arquivo.txt", newText, (error) => {
    if (error) {
      console.log("Erro ao modificar arquivo: ", error.message);
    }
  });
}

export function deleteFile() {
  fs.unlink("meu-arquivo.txt", (err) => {
    if (err) {
      console.log("Erro ao excluir arquivo! ", err.message);
    } else {
      console.log("Arquivo excluído com sucesso!");
    }
  });
}
