function PhoneNumber(phoneNumberString) {// Função construtora PhoneNumber que recebe uma string phoneNumberString como parâmetro.
    const fixedString = phoneNumberString.replace(/[\sa-zA-Z]/g, ''); // Remove espaços e letras da string recebida por parâmetro.
    this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0]// Atribui à propriedade countryCode o valor do primeiro grupo de dígitos após o sinal de +.
    this.areaCode = fixedString.match(/(?<=\()\d+(?=\))/)[0]// Atribui à propriedade areaCode o valor do grupo de dígitos entre parênteses.
    this.number = fixedString.match(/(?<=\)).+/)[0].replace(/-/g,'')// Atribui à propriedade number o valor do grupo de dígitos após o último parêntese, removendo os traços.
    

}


console.log(new PhoneNumber('+55 (11) 99999-9999'));