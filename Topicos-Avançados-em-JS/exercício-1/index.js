// Seleciona o formulário com o ID "formId" e armazena em uma variável
const form = document.getElementById('formId'); 

// Adiciona um ouvinte de evento ao formulário. Quando o formulário for enviado (submit), a função será executada.
form.addEventListener('submit', function(ev){
    // Impede o comportamento padrão do formulário (recarregar a página)
    ev.preventDefault();

    // Obtém os valores dos campos do formulário
    const nome = document.getElementById('name').value;
    const email = document.getElementById('e-mail').value;
    const senha = document.getElementById('password').value;

    // Função para validar o formato do email
    function validarEmail(email) {
        // Expressão regular para validar o formato do email
        if (!/^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email)) {
            // Se o email não for válido, lança um erro
            throw new Error('E-mail inválido');
        }
    }

    // Função para validar a senha
    function validarSenha(senha) {
        // Expressão regular para validar a senha (verifique as condições específicas da senha)
        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(senha)) {
            // Se a senha for válida, não faz nada (pode adicionar lógica aqui se precisar)
        } else {
            // Se a senha não for válida, lança um erro
            throw new Error('Senha inválida');
        }
    }

    // Bloco try-catch para tratar possíveis erros
    try {
        // Valida o email e a senha
        validarEmail(email);
        validarSenha(senha);

        // Se não ocorrerem erros, exibe uma mensagem de sucesso
        alert(`Cadastro realizado com sucesso! ${nome}`);
    } catch (error) {
        // Se ocorrer um erro, exibe uma mensagem de erro
        alert(`Verifique os dados inseridos: ${error.message}`);
    }
});