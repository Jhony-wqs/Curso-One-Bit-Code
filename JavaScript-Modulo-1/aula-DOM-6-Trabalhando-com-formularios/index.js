const form = document.getElementById('orderForm')//pegando o formulário.

form.addEventListener('submit',function(ev){//pegando o botão e atribuindo a função a ele.
    ev.preventDefault()// Esse método para o envio do formulário para sua action.
    const name = document.querySelector('input[name="name"]').value//pegando todos os inputs por seu names com seus valores.
    const address = document.querySelector('input[name="address"]').value
    const breadType = document.querySelector('select[name="breadType"]').value
    const main = document.querySelector('input[name="main"]').value
    const observations = document.querySelector('textarea[name="observations"]').value
     
    //Para pegar várias marcações do checkbox usar querySelectorAll e no final usar a palavra checked com 2 pontos.
    var salad = ''
    document.querySelectorAll('input[name="salad"]:checked').forEach(function(item){
       salad += ' - ' + item.value + '\n'
    })

    alert(
        "Pedido Realizado!" +
        "\nNome do cliente: " + name +
        "\nEndereço de entrega: " + address +
        "\nTipo de pão: " + breadType +
        "\nRecheio: \n - " + main + "\n" + salad +
        "Observações: " + observations
      )

})