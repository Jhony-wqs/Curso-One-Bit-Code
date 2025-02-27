// Array para armazenar os usuários buscados
const users = [];
// Função assíncrona para buscar um usuário do Github pelo nome de usuário
async function fetchUser(nameUser) {
    // Faz uma requisição para a API do Github para obter os dados do usuário
    const response = await fetch(`https://api.github.com/users/${nameUser}`);
    // Converte a resposta para um objeto JSON do tipo GithubUserResponse
    const user = await response.json();
    // Verifica se o usuário não foi encontrado
    if (user.message) {
        console.log('Usuário não encontrado.');
    }
    else {
        // Adiciona o usuário ao array de usuários
        users.push(user);
    }
    // Exibe os dados do usuário no console
    console.log(`O usuário ${user.login} foi salvo.\n` +
        `\nid: ${user.id} ` +
        `\nlogin: ${user.login}` +
        `\nNome: ${user.name}` +
        `\nBio: ${user.bio}` +
        `\nRepositórios públicos: ${user.public_repos}`);
}
// Função assíncrona para exibir os dados de um usuário específico
async function showUser(userName) {
    // Encontra o usuário no array de usuários pelo nome de login
    const user = users.find(user => user.login === userName);
    // Verifica se o usuário foi encontrado
    if (typeof user === 'undefined') {
        console.log('Usuário não encontrado.');
    }
    else {
        // Faz uma requisição para a API do Github para obter os repositórios do usuário
        const response = await fetch(user.repos_url);
        // Converte a resposta para um array de objetos JSON do tipo GithubRepoResponse
        const repos = await response.json();
        // Monta uma mensagem com os dados do usuário e seus repositórios
        let message = `id: ${user.id}\n` +
            `\nlogin: ${user.login}` +
            `\nNome: ${user.name}` +
            `\nBio: ${user.bio}` +
            `\nRepositórios públicos: ${user.public_repos}`;
        // Adiciona os dados de cada repositório à mensagem
        repos.forEach(repo => {
            message += `\nNome: ${repo.name}` +
                `\nDescrição: ${repo.description}` +
                `\nEstrelas: ${repo.stargazers_count}` +
                `\nÉ um fork: ${repo.fork ? 'Sim' : 'Não'}\n`;
        });
        // Exibe a mensagem no console
        console.log(message);
    }
}
// Função para exibir todos os usuários armazenados
function showAllUsers() {
    // Monta uma mensagem com os nomes de login de todos os usuários
    let message = 'Usuário: \n';
    // Adiciona cada nome de login à mensagem
    users.forEach(user => {
        message += `\n- ${user.login}`;
    });
    // Exibe a mensagem no console
    console.log(message);
}
// Função para exibir o total de repositórios públicos de todos os usuários
function showReposTotal() {
    // Calcula o total de repositórios públicos somando os repositórios de cada usuário
    const reposTotal = users.reduce((acc, user) => (acc + user.public_repos), 0);
    // Exibe o total de repositórios públicos no console
    console.log(`O grupo possui um total de ${reposTotal} repositórios públicos!`);
}
// Função para exibir os cinco usuários com mais repositórios públicos
function showTopFive() {
    // Ordena os usuários pelo número de repositórios públicos em ordem decrescente e pega os cinco primeiros
    const topFive = users.slice().sort((a, b) => b.public_repos - a.public_repos).slice(0, 5);
    // Monta uma mensagem com os cinco usuários com mais repositórios públicos
    let message = 'Top 5 usuários com mais repositórios públicos:\n';
    topFive.forEach((user, index) => {
        message += `\n${index + 1} - ${user.login}: ${user.public_repos} repositórios`;
    });
    // Exibe a mensagem no console
    console.log(message);
}
// Função principal que executa as operações de busca e exibição de usuários
async function main() {
    // Busca os dados de vários usuários do Github
    await fetchUser('isaacpontes');
    await fetchUser('julianaconde');
    await fetchUser('pcaldass');
    await fetchUser('lucasqueirogaa');
    await fetchUser('frans203');
    await fetchUser('LeDragoX');
    // Exibe os dados de dois usuários específicos
    await showUser('isaacpontes');
    await showUser('julianaconde');
    // Exibe todos os usuários armazenados
    showAllUsers();
    // Exibe o total de repositórios públicos de todos os usuários
    showReposTotal();
    // Exibe os cinco usuários com mais repositórios públicos
    showTopFive();
}
// Chama a função principal para iniciar o programa
main();
