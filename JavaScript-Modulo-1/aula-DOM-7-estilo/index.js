function lightBtn(){
    document.body.style.color = "#212529"
    document.body.style.backgroundColor = '#f1f5f9'
}

function darkBtn(){
    document.body.style.color ='#f1f5f9'
    document.body.style.backgroundColor ='#212529'
}

function switchBtn(){
    document.body.classList.toggle('is-ligth')
    document.body.classList.toggle('is-dark')
}





 document.getElementById('lightBtn').addEventListener('click',lightBtn)
 document.getElementById('darkBtn').addEventListener('click',darkBtn)
 document.getElementById('switchBtn').addEventListener('click',switchBtn)




// const switchBtn = document.getElementById('switchBtn').addEventListener('click',() =>  document.body.classList.toggle('is-dark')) nessa forma aqui ele adiciona a dark ficando com 2 classes mais prevalecendo a segunda classe.