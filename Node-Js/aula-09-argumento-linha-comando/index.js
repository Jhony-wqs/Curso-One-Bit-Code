const process = require("node:process");
const arg = process;
const nameArgument = {};

process.argv.slice(2).forEach((arg, index, array) => {
  if (arg.startsWith("--")) {
    const keyName = arg.slice(2);
    const argValue = array[index + 1];
    nameArgument[keyName] = argValue;
  }
});

console.log(nameArgument);
