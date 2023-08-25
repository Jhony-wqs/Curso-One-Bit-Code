function calculateTip(event){
    event.preventDefault()
    let bill = document.getElementById("bill").value
    let serviço = document.getElementById("serviço").value
    let people = document.getElementById("people").value
     if(bill == '' || serviço == 0){
        alert('Por favor ,preencha os valores')
        return
     }

     if(people == 0 || people <= 1){
        people  = 1
        document.getElementById('each').style.display ='none'
     }else{
        document.getElementById('each').style.display ='block'
     }
     let total = (bill * serviço )/ people
     total = total.toFixed(2)
     document.getElementById('tip').innerHTML = total
     document.getElementById('totaltip').style.display = "block"
}
document.getElementById('totaltip').style.display = "none"
document.getElementById('each').style.display = "none" 

document.getElementById('tipsform').addEventListener('submit',calculateTip)