const process = require("node:process");
// process.stdout.write("ola node!\n");
// process.stdout.write("ola mundo");

// process.stdin.on("data", (data) => {
//   process.stdout.write(`Você digitou  : ${data}`);
// });

const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// // // rl.on("lina", (input) => {
// // //   rl.write(`Olá , ${input}!\n`);
// // //   rl.close();
// // // });

// rl.question("Qual e seu nome ? ", (answer) => {
//   rl.write(`Olá , ${answer}`);
//   rl.close();
// });

// // rl.once("close", () => {
// //   rl.write("\n Saindo..");
// //   process.exit();
// // });

rl.on("SIGINT", () => {
  rl.question("Deseja realmente sair ? (s/n) :", (answer) => {
    if (answer.trim().toLowerCase() === "s") {
      process.exit(0);
    }
    rl.write("Você escolheu continuar..");
  });
});
