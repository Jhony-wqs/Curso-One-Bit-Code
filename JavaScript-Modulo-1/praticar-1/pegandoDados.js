alert('Seja bem vindo!!!')
const nome = prompt('Informe seu nome:')
const idade = prompt('Informe sua idade:')

const confirmacao = confirm(' Sua idade esta correta ' + idade +' anos')

if(confirmacao){
    alert('Seu nome e ' + nome + '\nSua idade e ' + idade + '\n a confirmacão da idade '+ confirmacao)
}