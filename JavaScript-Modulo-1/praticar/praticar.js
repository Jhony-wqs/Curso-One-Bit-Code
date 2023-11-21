const arrowFunction = (n1 , n2) => n1 * n2 

//console.log(arrowFunction(2, 2))

const array =['GOKU','GOHAN','GOTEM','CHICHI','MESTRE KAME']

// array.forEach(function(person){
//     console.log(`DBZ - ${person}`)
// })


const students = [
    { firstName: 'Robert', lastName: 'Smith', age: 33, techs: ['ReactJS', 'CSS', 'JSX', 'NodeJS'] },
    { firstName: 'Joseph', lastName: 'Smith', age: 19, techs: ['ReactJS', 'HTML', 'NodeJS', 'CSS', 'JSX'] },
    { firstName: 'Jennifer', lastName: 'Ainst', age: 25, techs: ['AngularJS', 'HTML', 'Typescript'] },
    { firstName: 'Will', lastName: 'Hedge', age: 47, techs: ['NodeJS'] },
    { firstName: 'Ross', lastName: 'Grunt', age: 39, techs: ['MongoDB', 'NodeJS'] },
    { firstName: 'Julie', lastName: 'Lee', age: 53, techs: ['AdonisJS', 'Git', 'Javascript', 'Azure', 'Python'] },
  ];



// const nomes = students.map((student)=>{
    
//     const nomeEstudante = `${student.firstName} ${student.lastName}`
//     const conhecimento = `${student.techs.length}`

//     if(conhecimento > 1){
//         return `${nomeEstudante} tem ${student.age} anos e conhece  ${conhecimento} limguagens`
//     }else if(conhecimento == 1){
//         return `${nomeEstudante} tem ${student.age} anos e conhece ${conhecimento} linguagem`
//     }
//         return `${nomeEstudante} não tem tecnologias favoritas :(`
    
    
// })

// //  console.log(nomes)

// const valores = students.reduce((acumulador,valor) => acumulador + valor.age,0)
// //  console.log(valores)


// const products = [
//     { name: "Desinfetante Veja", price: 10, barCode: 98293489238},
//     { name: "Ketchup Hellmann's", price: 8, barCode: 585122289238},
//     { name: "Milho Enlatado Zero-Six", price: 6, barCode: 56862359487},
//     { name: "Cereal Nescal Ball", price: 20, barCode: 19732584692},
//     { name: "Biscoito Trakinas", price: 5, barCode: 16749583215},
//   ];


// //   const soma = products.reduce((acumulador, valor,) => acumulador + valor.price, 0)

// //  console.log(soma)

// const baseObjeto = {
//     produtos:0,
//     totalPreço:0,
// }

// const result = products.reduce((accumulator, valor) =>{
//     accumulator.produtos +=1
//     accumulator.totalPreço += valor.price
//     return accumulator
  
// },baseObjeto)

// // console.log(result)


const OrdenerAlunos = 
students.filter((student) => (student.age <= 30))
.map((student) =>{
    const studentName = `${student.firstName} ${student.lastName}`
    const numberOfFaTach = `${student.techs.length}`

    if(numberOfFaTach > 1 ){
          return `${studentName} ${student.age} e a tecnologia favorita ${numberOfFaTach}.  `
    }else if (numberOfFaTach == 1){
          return `${studentName} ${student.age} tem uma 1 tecnologia favorita.`
    }else{
        return  `${studentName} não tem tecnologi favorita`
    }

})




// console.log(OrdenerAlunos)
const universities = [
    {
      name: 'Universidade de Minas Gerais',
      acronym: 'UFM',
      overallGrade: null,
      address: {
        street: 'Rua Da Universidade MG',
        number: 1170,
        city: 'Belo Horizonte',
        state: 'MG',
        country: 'Brazil'
      },
      courses: [
        {
          course: 'Engineering',
          grade: 3,
          campus: 'City',
          duration: 4,
          mode: 'Full time',
          entryGrade: 770,
        },
        {
          course: 'Computer Science',
          grade: 4,
          campus: 'City',
          duration: 3.5,
          mode: 'Full time',
          entryGrade: 750,
        },
        {
          course: 'Ancient History',
          grade: 2,
          campus: 'City',
          duration: 7,
          mode: 'Part time',
          entryGrade: 600,
        },
      ],
    },
    {
      name: 'Universidade de São Paulo',
      acronym: 'UFSP',
      overallGrade: null,
      address: {
        street: 'Rua Da Universidade SSPU',
        number: 482,
        city: 'São Paulo',
        state: 'SP',
        country: 'Brazil'
      },
      courses: [
        {
          course: 'Engineering',
          grade: 4,
          campus: 'City-1',
          duration: 4,
          mode: 'Full time',
          entryGrade: 800,
        },
        {
          course: 'Computer Science',
          grade: 3,
          campus: 'City-2',
          duration: 3.5,
          mode: 'Full time',
          entryGrade: 710,
        },
        {
          course: 'Ancient History',
          grade: 4,
          campus: 'City-2',
          duration: 8,
          mode: 'Part time',
          entryGrade: 700,
        },
        {
          course: 'Business',
          grade: 4,
          campus: 'City-1',
          duration: 3,
          mode: 'Full time',
          entryGrade: 743,
        },
        {
          course: 'Medicine',
          grade: 5,
          campus: 'Health',
          duration: 5.5,
          mode: 'Full time',
          entryGrade: 835,
        },
      ],
    },
    {
      name: 'Universidade de Palmas',
      acronym: 'UTO',
      overallGrade: null,
      address: {
        street: 'Rua Da Universidade TOUF',
        number: 777,
        city: 'Tocantins',
        state: 'TO',
        country: 'Brazil'
      },
      courses: [
        {
          course: 'Medicine',
          grade: 2.5,
          campus: 'Health+',
          duration: 6,
          mode: 'Full time',
          entryGrade: 710,
        },
        {
          course: 'Computer Science',
          grade: 2,
          campus: 'City',
          duration: 4,
          mode: 'Full time',
          entryGrade: 468,
        },
      ],
    },
    {
      name: 'Universidade Nova São Paulo',
      acronym: 'UNSP',
      overallGrade: null,
      address: {
        street: 'Rua Da Nova Global',
        number: 653,
        city: 'São Paulo',
        state: 'SP',
        country: 'Brazil'
      },
      courses: [
        {
          course: 'Art History',
          grade: 3,
          campus: 'City',
          duration: 3,
          mode: 'Full time',
          entryGrade: 496,
        },
        {
          course: 'Computer Science',
          grade: 2,
          campus: 'City',
          duration: 3.5,
          mode: 'Full time',
          entryGrade: 517,
        },
        {
          course: 'Public Policy',
          grade: 4,
          campus: 'City',
          duration: 6.5,
          mode: 'Part time',
          entryGrade: 580,
        },
      ],
    },
    {
    name: 'Exvort University',
    acronym: 'ExUn',
    overallGrade: null,
    address: {
      street: 'New York Street',
      number: 120,
      city: 'Boston',
      state: 'MA',
      country: 'USA'
    },
    courses: [
      {
        course: 'Art History',
        grade: 5,
        campus: 'City',
        duration: 4,
        mode: 'Full time',
        entryGrade: 760,
      },
    ],
  },
  ];


//   const ordemUniversidades = universities.map((universitie)=> universitie.name).sort()

const endereco = universities.map((universitie)=>{
     const Universidade = universitie.name
     const enderecoUniversidade = universitie.address
      return `${Universidade} ${enderecoUniversidade.street} nº:${enderecoUniversidade.number} cidade:${enderecoUniversidade.city} Estado:${enderecoUniversidade.state} Pais:${enderecoUniversidade.country}`
})

//   console.log(endereco)

const ordemSigla = universities.filter((universitie) => (universitie.address.country === 'Brazil')).map((universitie) =>{
    const sigla = universitie.address.state
    return `Cidade: ${sigla}`
}).sort()

    
//console.log(ordemSigla)



const arrayUniversit = universities.map((universitie) =>{
    const nome = universitie.name
    const sigla = universitie.acronym
    const campus = universitie.courses
    const cursos = universitie.courses

    return `Nome: ${nome}, Sigla: ${sigla} Quantidade de Campus: ${campus.length} Quantidade de Cursos: ${cursos.length}`
})


// console.log(arrayUniversit)

const products = [
  { name: "Desinfetante Veja ", price: 10, barCode: 98293489238, quantity: 1},
  { name: "Ketchup Hellmann's ", price: 8, barCode: 585122289238, quantity: 4},
  { name: "Milho Enlatado Zero-Six ", price: 6, barCode: 56862359487, quantity: 6},
  { name: "Cereal Nescal Ball ", price: 20, barCode: 19732584692, quantity: 2},
  { name: "Biscoito Trakinas ", price: 5, barCode: 16749583215, quantity: 1},
];



const totalPrice = products.reduce((acc,product) => acc + product.price,0)


// console.log(totalPrice)
const obj = {
      comprado: [],
      quantitade:0,
      valorTotal:0,
}
 const SomaProdutos = (products.reduce((acc, product) =>{
     acc.comprado.push(product.name)
     acc.quantitade += product.quantity
     acc.valorTotal += (product.price*product.quantity)
     

     return acc

 },obj)
   
 )
  

 console.log(SomaProdutos)
  

