let metro = Number(window.prompt('Digite a metragem a ser convertida ?'))
let opçao = Number(window.prompt('1)milímetro (mm) \n2)centímetro (cm) \n3 decímetro (dm)) \n4)decâmetro (dam) \n5) hectômetro (hm) \n6) quilômetro (km)'))

switch(opçao){
    case 1:
      mm = metro * 1000
      alert(metro + 'metros e = ' + mm +' milímitros')  
      break
    case 2:
      cm = metro * 100
      alert(metro + 'metros e = ' + cn + ' centímreto') 
      break
    case 3:
      dm =  metro * 10
      alert(metro + 'metros e = ' + dm + ' decímetro')
      break
    case 4:
      dam = metro / 10
      alert(metro + 'metros e = ' + dam + ' decâmetro')
      break
    case 5:
      hm = metro / 100
      alert(metro + 'metros e = ' + hm + ' ')
      break
    case 6:
      km = metro / 1000
      alert(metro + 'metros e = ' + km + ' quilômetro')
      break
    default:
      alert('OPÇÃO DIGITADA ERRADA VERIFIQUE A UNIDADE DESEJADA !!!!!!')                
}