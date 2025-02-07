// Função assíncrona para buscar dados de todos os países
async function getCountries() {
    // Faz uma requisição GET para a API de países
    const response = await fetch('https://restcountries.com/v3.1/all')
    // Converte a resposta da requisição para JSON
    const countries =  await response.json()
    // Imprime os dados dos países no console
    console.log(countries)
    // Itera sobre cada país e chama a função para criar o cartão do país
    countries.forEach(creatCountryCard);
}

// Chama a função para buscar e exibir os países
getCountries()

// Função para criar um cartão de apresentação para cada país
function creatCountryCard (country) {
    // Cria um elemento div para o cartão do país
    const card = document.createElement('div')
    // Adiciona a classe CSS 'country' ao div
    card.classList.add('country')

    // Obtém o nome comum do país
    const countryName = country.name.common
    // Cria um elemento h2 para exibir o nome do país
    const name = document.createElement('h2')
    // Define o texto do h2 como o nome do país
    name.textContent = countryName

    // Cria um elemento img para exibir a bandeira do país
    const flag = document.createElement('img')
    // Define a URL da imagem da bandeira
    flag.src = country.flags.svg
    // Define o texto alternativo da imagem como o nome do país
    flag.alt = countryName

    // Adiciona o h2 e a img ao div do cartão
    card.append(name, flag)
    // Adiciona o cartão ao elemento com o ID 'countries' no documento HTML
    document.querySelector('#countries').append(card)
}
