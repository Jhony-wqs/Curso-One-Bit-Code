function addPlayer(){
    const position = document.getElementById("position").value
    const name = document.getElementById('name').value
    const number = document.getElementById('number').value

    const confirmation = confirm('Escalar ' + name + ' como ' + position )
    if(confirmation){
        const teamList = document.getElementById('teamList')
        const teamItem = document.createElement('li')
        teamItem.id = 'player-' + number
        teamItem.innerText = position + ' : ' + name + " ( " + number + " )" 
        teamList.appendChild(teamItem)

        document.getElementById('position').value = ''
        document.getElementById('name').value = ''
        document.getElementById('number').value = ''
    }
}

    function removePlayer(){
      const numberRemove = document.getElementById('numberToRemove').value
      const playerRemove = document.getElementById('player-'+numberRemove)
       
      const confirmation = confirm('Remover o jogador ' + playerRemove.innerText + "?")
      if(confirmation){
        document.getElementById('teamList').removeChild(playerRemove)
        document.getElementById('numberToRemove').value = ''
      }
    }
    