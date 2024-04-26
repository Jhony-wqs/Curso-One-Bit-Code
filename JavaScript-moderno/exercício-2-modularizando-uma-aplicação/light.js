const main = document.querySelector('main')// pegando o main do html.
const root = document.querySelector(':root')//pegando o root do css.
  
  function light(){
    //pegando o id do botão e colocando um evento onde vai verificar de o main tem o a data-theme dark, esse tiver vai modificar a cor atrves do root do css.
    if(main.dataset.theme === 'dark'){
        root.style.setProperty('--bg-color','#f1f5f9')
        root.style.setProperty('--border-color','#aaa')
        root.style.setProperty('--font-color','#212529')
        root.style.setProperty('--primary-color','#26834a')
        main.dataset.theme = 'light'
    }else{
        root.style.setProperty('--bg-color','#212529')
        root.style.setProperty('--border-color','#666')
        root.style.setProperty('--font-color','#f1f5f9')
        root.style.setProperty('--primary-color','#4dff91')
        main.dataset.theme = 'dark'
    }

 }

 export default light