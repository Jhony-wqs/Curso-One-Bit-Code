let transactions = [] // Inicializa um array vazio para armazenar as transações

// Cria um contêiner para uma transação específica
function createTransactionContainer(id) {
    const container = document.createElement('div') // Cria um elemento div
    container.classList.add('transaction') // Adiciona a classe 'transaction' ao contêiner
    container.id = `transaction-${id}` // Define o ID do contêiner com base no ID da transação
    return container // Retorna o contêiner criado
}

// Cria um elemento de título para a transação
function createTransactionTitle(name) {
    const title = document.createElement('span') // Cria um elemento span
    title.classList.add('transaction-title') // Adiciona a classe 'transaction-title' ao título
    title.textContent = name // Define o texto do título como o nome da transação
    return title // Retorna o título criado
}

// Cria um elemento de valor para a transação
function createTransactionAmount(amount) {
    const span = document.createElement('span') // Cria um elemento span
    span.classList.add('transaction-amount') // Adiciona a classe 'transaction-amount' ao span
    const formater = Intl.NumberFormat('pt-BR', {
        compactDisplay: 'long',
        currency: 'BRL',
        style: 'currency',
    }) // Cria um formatador de número para moeda brasileira
    const formatedAmount = formater.format(amount) // Formata o valor da transação
    if (amount > 0) {
        span.textContent = `${formatedAmount} C` // Define o texto do span para valores positivos
        span.classList.add('credit') // Adiciona a classe 'credit' para valores positivos
    } else {
        span.textContent = `${formatedAmount} D` // Define o texto do span para valores negativos
        span.classList.add('debit') // Adiciona a classe 'debit' para valores negativos
    }
    return span // Retorna o span criado
}

// Cria um botão de exclusão para a transação
function createDeleteTransactionButton(id) {
    const deleteBtn = document.createElement('button') // Cria um elemento button
    deleteBtn.classList.add('delete-btn') // Adiciona a classe 'delete-btn' ao botão
    deleteBtn.textContent = 'Excluir' // Define o texto do botão como 'Excluir'
    deleteBtn.addEventListener('click', async () => {
        await fetch(`http://localhost:3000/transactions/${id}`, { method: 'DELETE' }) // Envia uma requisição DELETE para o servidor
        deleteBtn.parentElement.remove() // Remove o elemento pai do botão do DOM
        const indexToRemove = transactions.findIndex((t) => t.id === id) // Encontra o índice da transação a ser removida
        transactions.splice(indexToRemove, 1) // Remove a transação do array
        updateBalance() // Atualiza o saldo
    })
    return deleteBtn // Retorna o botão de exclusão criado
}

// Renderiza uma transação no DOM
function renderTransaction(transaction) {
    const container = createTransactionContainer(transaction.id) // Cria o contêiner da transação
    const title = createTransactionTitle(transaction.name) // Cria o título da transação
    const amount = createTransactionAmount(transaction.amount) // Cria o valor da transação
    const editBtn = createEditTransactionBtn(transaction) // Cria o botão de edição da transação
    const deleteBtn = createDeleteTransactionButton(transaction.id) // Cria o botão de exclusão da transação
    container.append(title, amount, editBtn, deleteBtn) // Adiciona os elementos ao contêiner
    document.querySelector('#transactions').append(container) // Adiciona o contêiner ao elemento pai no DOM
}

// Cria um botão de edição para a transação
function createEditTransactionBtn(transaction) {
    const editBtn = document.createElement('button') // Cria um elemento button
    editBtn.classList.add('edit-btn') // Adiciona a classe 'edit-btn' ao botão
    editBtn.textContent = 'Editar' // Define o texto do botão como 'Editar'
    editBtn.addEventListener('click', () => {
        document.querySelector("#id").value = transaction.id // Preenche o campo de ID do formulário com o ID da transação
        document.querySelector("#name").value = transaction.name // Preenche o campo de nome do formulário com o nome da transação
        document.querySelector("#amount").value = transaction.amount // Preenche o campo de valor do formulário com o valor da transação
    })
    return editBtn // Retorna o botão de edição criado
}

// Salva uma transação (nova ou editada)
async function saveTransection(ev) {
    ev.preventDefault() // Previne o comportamento padrão do formulário
    const id = document.querySelector("#id").value // Obtém o ID da transação do formulário
    const name = document.querySelector('#name').value // Obtém o nome da transação do formulário
    const amount = parseFloat(document.querySelector('#amount').value) // Obtém o valor da transação do formulário e converte para número

    if (id) { // Se o ID existe, atualiza a transação existente
        try {
            const url = `http://localhost:3000/transactions/${id}`; // Define a URL para a requisição PUT//
            const response = await fetch(url, {
                method: "PUT",
                body: JSON.stringify({ name, amount }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }) // Envia uma requisição PUT para atualizar a transação
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            } // Verifica se a resposta é bem-sucedida
            const transaction = await response.json() // Obtém a transação atualizada do servidor
            const indexToRemove = transactions.findIndex((t) => t.id === id) // Encontra o índice da transação a ser atualizada
            transactions.splice(indexToRemove, 1, transaction) // Atualiza a transação no array
        } catch (error) {
            console.error('Erro na requisição PUT:', error) // Exibe um erro no console se a requisição falhar
        }
    } else { // Se o ID não existe, cria uma nova transação
        const response = await fetch('http://localhost:3000/transactions', {
            method: "POST",
            body: JSON.stringify({ name, amount }),
            headers: {
                'Content-Type': 'application/json'
            }
        }) // Envia uma requisição POST para criar uma nova transação
        const transaction = await response.json() // Obtém a nova transação do servidor
        transactions.push(transaction) // Adiciona a nova transação ao array
        renderTransaction(transaction) // Renderiza a nova transação no DOM
    }

    ev.target.reset() // Reseta o formulário
    updateBalance() // Atualiza o saldo
}

// Busca todas as transações do servidor
async function fetchTransiction() {
    return await fetch('http://localhost:3000/transactions').then(res => res.json()) // Faz uma requisição GET e retorna os dados em formato JSON
}

// Atualiza o saldo total das transações
function updateBalance() {
    const balanceSpan = document.querySelector('#balance') // Seleciona o elemento de saldo no DOM
    const balance = transactions.reduce((sum, transaction) => sum + transaction.amount, 0) // Calcula o saldo total somando os valores das transações
    const formater = Intl.NumberFormat('pt-BR', {
        compactDisplay: 'long',
        currency: 'BRL',
        style: 'currency',
    }) // Cria um formatador de número para moeda brasileira
    balanceSpan.textContent = formater.format(balance) // Define o texto do elemento de saldo com o saldo formatado
}

// Configura a aplicação ao carregar o documento
async function setup() {
    const results = await fetchTransiction() // Busca todas as transações do servidor
    transactions.push(...results) // Adiciona as transações ao array
    transactions.forEach(renderTransaction) // Renderiza cada transação no DOM
    updateBalance() // Atualiza o saldo
}

// Adiciona um evento para executar a função setup quando o conteúdo do documento for carregado
document.addEventListener('DOMContentLoaded', setup)
// Adiciona um evento de submissão de formulário para salvar transações
document.querySelector('form').addEventListener('submit', saveTransection)