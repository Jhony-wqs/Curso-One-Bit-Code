function register(element){
    const userName = element.children.username.value//através do parâmetro passado ele consegue pegar o elemento filho do pai que vem do html, chamando por parâmetro (element.children.ID.value)
    const password = element.children.password.value
    const passwordConfirmation = element.children.passwordConfirmation.value
  
    if(password === passwordConfirmation){
        alert("Usuário " + userName + " Cadastrado!")
    }else{
        alert("As senhas estão divergindo!")
    }
}