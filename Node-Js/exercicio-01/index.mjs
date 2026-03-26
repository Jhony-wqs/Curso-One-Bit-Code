import { createFile, deleteFile, showFile, updateFale } from "./functions.mjs";

createFile("Conteúdo inicial do arquivo \nCriado com o módulo fs do Node.");
showFile();
updateFale("Texto modificado");
deleteFile();
