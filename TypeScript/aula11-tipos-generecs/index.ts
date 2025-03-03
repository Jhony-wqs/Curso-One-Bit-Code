function first(array) {
    return array[0]
}

function last<ArrayType>(array:ArrayType[]):ArrayType | undefined {
    return array[array.length -1]
}

const pilots = ['Jhony', 'Mayara', 'Holiver', 'Bernardo']
// Tipo any
const firstPaliot = first(pilots)
// Tipo inferido
const lastPaliot =  last(pilots)


