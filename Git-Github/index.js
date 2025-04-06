function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function main() {
    console.log("Bem-vindo ao conversor de temperaturas!");
    const tempC = parseFloat(prompt("Digite a temperatura em Celsius: "));
    const tempF = celsiusToFahrenheit(tempC);
    console.log(`${tempC}°C é igual a ${tempF}°F`);

    const tempFInput = parseFloat(prompt("Digite a temperatura em Fahrenheit: "));
    const tempCResult = fahrenheitToCelsius(tempFInput);
    console.log(`${tempFInput}°F é igual a ${tempCResult}°C`);
}

main();