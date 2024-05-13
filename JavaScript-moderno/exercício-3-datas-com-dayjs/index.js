const dayjs = require("dayjs")


function birthday (date) {
     const birthday = dayjs(date)
     const today = dayjs()

     const ageYear = today.diff(birthday,'year')
     const nextBirthday = birthday.add(ageYear + 1, 'year')
     const daysToNextBirthday = nextBirthday.diff(today,'day') + 1

     console.log(`Idade: ${ageYear}`)
     console.log(`Próximo aniversário: ${nextBirthday.format("DD/MM/YYYY")}`)
     console.log(`Dias até completar ${ageYear + 1} anos: ${daysToNextBirthday}`)

    }
    
    birthday('1988-02-27')
