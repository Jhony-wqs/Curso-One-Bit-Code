document.getElementById('sessionBtn').addEventListener('click',function(){
    const input = document.getElementById('session')
    window.sessionStorage.setItem('info',input.value)
    input.value = ''
})

document.getElementById('readSessaion').addEventListener('click',function(){
    const key = sessionStorage.getItem('info')
    alert('A informação guardada  e ' + key) 
})

document.getElementById('localBtn').addEventListener('click',function(){
    const input = document.getElementById('local')
    window.localStorage.setItem('key',input.value)
    input.value = ''
})

document.getElementById('readLocal').addEventListener('click',function(){
    const key = window.localStorage.getItem('key')
    alert('Local storage esta com o valor ' + key)
})

document.getElementById('cookieBtn').addEventListener('click',() =>{
    const input = document.getElementById('cookie')
    // cookieName=value; expires=UTCStringDate; path=/;
    const name = 'info=' + input.value + ';'
    const expiration = 'expires=' + new Date(2024,9,9) + ';'
    const path = 'path=/;'
    document.cookie = name + expiration + path
    input.value =''
    console.log(document.cookie)
    
})

document.getElementById('cookie2Btn').addEventListener('click',() =>{
    const input = document.getElementById('cookie2')
    // cookieName=value; expires=UTCStringDate; path=/;
    const name = 'text=' + input.value + ';'
    const expiration = 'expires=' + new Date(2024,9,9) + ';'
    const path = 'path=/;'
    document.cookie = name + expiration + path
    input.value =''
    console.log(document.cookie)
    
})