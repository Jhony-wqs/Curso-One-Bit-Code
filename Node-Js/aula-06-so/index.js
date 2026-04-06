const so = require("node:os");

const plataforma = so.platform();
console.log("Plataforma do SO :", plataforma);

const arquitetura = so.arch();
console.log("Arquitetura do sistema :", arquitetura);

const memoria = so.totalmem();
console.log("Memoria total do sistema :", memoria / 1024 / 1024 / 1024, "GB");

const processador = so.cpus();
console.log("Numero de processadores :", processador.length);

const sistema = so.type();
console.log(sistema);
