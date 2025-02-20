// Definindo um enum chamado Login com três valores: ADMINISTRADOR, ADVOGADO e DEVELOPER
enum Login {
  ADMINISTRADOR = 1,
  ADVOGADO = 2,
  DEVELOPER = 3
}

// Função que recebe um usuário e exibe um alerta baseado no tipo de usuário
function logar(usuario) {
  // Verifica o valor do usuário passado como argumento
  switch(usuario) {
    case Login.ADMINISTRADOR:
      // Se for ADMINISTRADOR, exibe um alerta com a mensagem 'ADM'
      alert('ADM')
      break
    case Login.ADVOGADO:
      // Se for ADVOGADO, exibe um alerta com a mensagem 'Advogado'
      alert('Advogado')
      break
    case Login.DEVELOPER:
      // Se for DEVELOPER, exibe um alerta com a mensagem 'Desenvolvedor'
      alert('Desenvolvedor')
      break
  }
}

// Chama a função logar passando o valor 1, que corresponde ao ADMINISTRADOR
logar(1)