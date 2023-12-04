const vagas = []

 function listarVagas(){
    const vagasEmTexto = vagas.reduce(function(textoFinal, vaga , indece){
        textoFinal += indece + '. '
        textoFinal += vaga.nome 
        textoFinal += '( ' + vaga.candidatos.length + 'candidatos)\n'
        return textoFinal
    },'')
    alert(vagasEmTexto)
 }

function novaVaga(){
    const nome = prompt('Informe o nome da vaga:')
    const descricao = prompt('Informe uma descrição para vaga:')
    const dataLimmite = prompt('Informe uma data limite para inscrição:')

    const confirme = confirm('Deseja criar a vaga com essas informações ?\n'
    +'Nome: ' + nome + '\nDescrição: ' + descricao + '\nData limite: ' + dataLimmite)

    if(confirme){
        const novaVaga = {nome , descricao, dataLimmite , candidatos:[]}
        vagas.push(novaVaga)
        alert('Vaga criada!')
    }
}

function exibirVaga(){
    const indece = prompt('Informe o índice da vaga que deseja exibir:')
    const vaga = vagas[indece]

    const candidatosEmTexto = vaga.candidatos.reduce(function(textoFinal, candidato){
        return textoFinal + '\n - ' + candidato
    },'')
    alert(
        'Vaga nº ' + indece +
        '\nNome: '+ vaga.nome+
        '\nDescrição:'+vaga.descricao+
        '\nData limite:'+vaga.dataLimmite+
        '\nQuantidade de candidatos;'+vaga.candidatos.length+
        '\nCandidatos inscritos:'+candidatosEmTexto )
}

function inscreverCandidato(){
    const candidato = prompt('Informe o nome do(a) candidato(a):')
    const indice =  prompt('Informe o índice da vaga  a qual o(a) candidato(a) deseja se increver:')
    const vaga = vagas[indice]

    const confirme = confirm('Deseja inscrever o canditado(a) '+ candidato+ 'na vaga '+ indice + '\nNome: '+ vaga.nome +'\nDescrição: '+vaga.descricao + '\nData limite: '+ vaga.dataLimmite)

    if(confirme){
        vaga.candidatos.push(candidato)
        alert('Inscrição realizada!')

    }
}


function excluirVaga(){
    const indice = prompt('Informe o índice da vaga a ser excluida:')
    const vaga = vagas[indice]

    const confirme = confirm('Deseja excluir a vaga '+ indice + '\n '+
    '\nNome: '+ vaga.nome +'\nDescrição: '+vaga.descricao + '\nData limite: '+ vaga.dataLimmite)

    if(confirme){
        vagas.splice(indice, 1)
        alert('Vaga excluida!!')
    }
}



function exibirMenu(){
    const opcao = prompt(
        'Cadastro de vagas de Emprego'+
        '\nEscolha uma das vagas:'+
        '\n1. Listar vagas disponiveis'+
        '\n2. Criar uma nova vaga:'+
        '\n3. Visualizar vaga:'+
        '\n4. Inscrever um(a) canditado(a):'+
        '\n5. Excluir vaga:'+
        '\n6. Sair')
        return opcao
}

function executar(){
    let opcao

    do {
        opcao = exibirMenu()

        switch(opcao){
            case '1':
                listarVagas()
                break
            case '2':
                novaVaga()
                break
            case '3':
                exibirVaga()
                break
            case '4':
                inscreverCandidato()
                break
            case '5':
                excluirVaga()
                break
            case '6':
                alert('Saindo...') 
                break
            default:  
            alert('Opção inválida.')
            break
        }
    } while (opcao!=='6');
}

executar()
