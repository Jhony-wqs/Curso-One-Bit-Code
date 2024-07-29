// Métodos static,  são métodos que não depende da instancia da classe para ser acessadas, a forma de acessa-las e usando diretamente o nome da classe.

class Reservation {
    static people = 0
    static baseFee = 150
    static premiumFee = 200
    constructor( guests, room, days) {
        this.guests = guests
        this.room = room
        this.days = days 
        this.total = 0
        Reservation.people += this.guests  // Exemplo de chamada do método static.
        
    }

     set bedroom (typeBedroon) {
        if(typeBedroon === 1) {
            this.total = this.days * Reservation.baseFee //// Exemplo de chamada do método static.
            this.quarto = "basic"
        }else {
            this.total = this.days * Reservation.premiumFee
            this.quarto = 'premium'
        }

    }


}


const r1 = new Reservation( 2 , 1 ,2 )
r1.bedroom = 1
console.log(r1)

const r2 = new Reservation( 4, 2, 6)
r2.bedroom = 2
console.log(r2)
console.log(`Pessoas Hospedadas no hotel ${Reservation.people}`)