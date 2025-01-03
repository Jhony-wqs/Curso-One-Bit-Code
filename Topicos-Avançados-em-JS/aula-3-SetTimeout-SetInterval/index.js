// Exibe a mensagem "Olá, mundo!" no console imediatamente.
console.log('Olá, mundo!');

// Define um temporizador com setTimeout para executar a função depois de 4 segundos.
const id = setTimeout(() => {
	console.log('Olá, mundo! 2 segundos depois');
}, 2000 * 2); // 2000 ms (2 segundos) * 2 = 4000 ms (4 segundos)

// Cancela o temporizador criado acima, antes que ele possa executar a função.
clearTimeout(id);

// Inicializa uma variável "soma" com valor 0.
let soma = 0;

// Cria um intervalo que executa a função repetidamente a cada 1 segundo (1000 ms).
let Interval = setInterval(() => {
    // Incrementa o valor de "soma" em 1 e exibe a mensagem com o valor atualizado.
    console.log(`começou a contagem ${soma += 1}`);
}, 1000);

// Cancela o intervalo criado acima, interrompendo a execução repetida.
clearInterval(Interval);

// Define um intervalo que exibe uma mensagem no console a cada 1 segundo.
const id1 = setInterval(() => {
    console.log("Essa mensagem será repetida...");
}, 1000);

// Define um temporizador que, após 7 segundos, cancela o intervalo "id1".
setTimeout(() => {
    clearInterval(id1); // Cancela o intervalo.
    console.log("Intervalo cancelado!"); // Exibe a mensagem de confirmação do cancelamento.
}, 7000);
