function main() {
    console.log("Bem-vindo ao conversor de temperaturas!");
}

main();

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function main() {
    console.log("Bem-vindo ao conversor de temperaturas!");
    const tempC = parseFloat(prompt("Digite a temperatura em Celsius: "));
    const tempF = celsiusToFahrenheit(tempC);
    console.log(`${tempC}°C é igual a ${tempF}°F`);
}

main();