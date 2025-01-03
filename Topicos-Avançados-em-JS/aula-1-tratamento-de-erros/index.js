function sum(a, b) {
  const fistNumber = Number(a);
  const secondNumber = Number(b);

  if (isNaN(fistNumber)|| isNaN(secondNumber)) { // isNaN verifica se o valor é um número, caso não seja ele lança o erro.
    throw new Error('arguments must be two numbers');
  }

  return fistNumber + secondNumber;
}


try {
    console.log(sum(2, 9));
    console.log(sum(true, 14));
    console.log(sum(undefined, 22));// undefined não e um número então ele lança o erro.
    console.log(sum(18, '0'));
    console.log(sum(39, null));
    console.log(sum(13, 'zero'));//A string zero não é um número então ele lança o erro.

}catch(error) {// É um parâmetro que recebe o erro que foi lançado.
   
    console.log( error.message);// message é uma propriedade que retorna a mensagem do erro.

} finally { // finally é um bloco que sempre será executado, independente se houve erro ou não.
    console.log("Calculations finished");
}