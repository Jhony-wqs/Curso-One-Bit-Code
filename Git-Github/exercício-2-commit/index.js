function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function main() {
    while (true) {
        console.log("Bem-vindo ao conversor de temperaturas!");
        const choice = prompt("Digite 'C' para converter Celsius para Fahrenheit ou 'F' para converter Fahrenheit para Celsius (ou 'Q' para sair): ").toUpperCase();

        if (choice === 'C') {
            const tempC = parseFloat(prompt("Digite a temperatura em Celsius: "));
            const tempF = celsiusToFahrenheit(tempC);
            console.log(`${tempC}°C é igual a ${tempF}°F`);
        } else if (choice === 'F') {
            const tempF = parseFloat(prompt("Digite a temperatura em Fahrenheit: "));
            const tempC = fahrenheitToCelsius(tempF);
            console.log(`${tempF}°F é igual a ${tempC}°C`);
        } else if (choice === 'Q') {
            console.log("Saindo do programa...");
            break;
        } else {
            console.log("Escolha inválida. Por favor, escolha 'C', 'F' ou 'Q'.");
        }

        prompt("Pressione Enter para continuar...");
        console.clear();
    }
}

main();