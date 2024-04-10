const user = {
    name:'Jhony',
    email:'jhony@12345.com',
    friends:[{
        name:'Mary',
        address: {
            street:'some Street',
            number:89
        }
    }],
    age:36,
    phone:{
        countryCode:'+55',
        ddd:'22',
        number:'87687558708'
    }
}

 //console.log(user.friends[0].phone.ddd)
 console.log(user?.brothers?.length)//usando o encadeamento opcional para não dar erro no código,quando ler uma propriedade que não existe.

 console.log(user.brothers?.[5].name)//usando  encadeamento opcional o js ignora o erro e colocado a propriedade que não existe como undefined.