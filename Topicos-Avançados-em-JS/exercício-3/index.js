async function imc(peso, altura) {
    
    if(typeof peso !== 'number' || typeof altura !== 'number') {
        Promise.reject('Os valores inseridos não são números')
    }
    return  peso / (altura * altura);
}

async function classificaIMC(peso, altura) {
   console.log('Chamando a função assíncrona!');
   try {
    const resultado = await imc(peso, altura)
    if (resultado < 18.5) {
        console.log('Abaixo do peso');
    } else if (resultado >= 18.5 && resultado <= 24.9) {
        console.log('Peso normal');
    } else if (resultado >= 25 && resultado <= 29.9) {
        console.log('Sobrepeso');
    } else if (resultado >= 30 && resultado <= 34.9) {
        console.log('Obesidade grau 1');
    } else if (resultado >= 35 && resultado <= 39.9) {
        console.log('Obesidade grau 2');
    } else if( resultado > 39.9) {
        console.log('Obesidade grau 3');
    }

   } catch (error) {
    
   }
        
}


classificaIMC(70, 1.70);

