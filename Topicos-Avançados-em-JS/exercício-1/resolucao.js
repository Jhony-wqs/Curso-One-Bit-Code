// Validação do e-mail
function validateEmail(email) {
    // Verifica se o e-mail corresponde ao padrão usando regex
    if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
        const err = new Error('E-mail inválido'); // Cria um erro personalizado
        err.input = 'email'; // Atribui o campo relacionado ao erro
        throw err; // Lança o erro para ser capturado
    }
}

// Validação da senha
function validatePassword(password) {
    // Verifica se a senha não atende aos critérios de validação
    if (password.length < 8 ||
        !password.match(/[a-z]/) || // Deve conter pelo menos uma letra minúscula
        !password.match(/[A-Z]/) || // Deve conter pelo menos uma letra maiúscula
        !password.match(/\d/) ||   // Deve conter pelo menos um número
        !password.match(/[^a-zA-Z\s0-9]/) // Deve conter pelo menos um caractere especial
    ) {
        const err = new Error('Senha inválida'); // Cria um erro personalizado
        err.input = 'password'; // Atribui o campo relacionado ao erro
        throw err; // Lança o erro para ser capturado
    }
}

// Redefine os estilos do formulário
function resetFormStyles() {
    // Itera sobre cada entrada do objeto userInput
    Object.entries(userInput).forEach(([key, value]) => {   
       value.classList.remove('success', 'error'); // Remove classes de estilo de sucesso e erro
       document.querySelector(`#${key}-error`).textContent = ''; // Limpa mensagens de erro
    });
}

// Referência aos campos de entrada do formulário
const userInput = {
    name: document.querySelector('#name'), // Campo de nome
    email: document.querySelector('#email'), // Campo de e-mail
    password: document.querySelector('#password') // Campo de senha
};

// Referência ao elemento de formulário
const form = document.querySelector('form');

// Adiciona um manipulador de evento para o envio do formulário
form.addEventListener('submit', (ev) => {
    ev.preventDefault(); // Impede o comportamento padrão de envio do formulário
    resetFormStyles(); // Redefine os estilos do formulário
    try {
        userInput.name.classList.add('success'); // Marca o campo de nome como validado com sucesso
        validateEmail(userInput.email.value); // Valida o campo de e-mail
        userInput.email.classList.add('success'); // Marca o campo de e-mail como validado com sucesso
        validatePassword(userInput.password.value); // Valida o campo de senha
        userInput.password.classList.add('success'); // Marca o campo de senha como validado com sucesso
    } catch (err) {
        userInput[err.input].classList.add('error'); // Marca o campo com erro
        document.querySelector(`#${err.input}-error`).textContent = err.message; // Exibe a mensagem de erro no campo correspondente
    }
});
