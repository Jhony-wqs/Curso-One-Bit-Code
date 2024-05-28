// src/index.js

let num = document.getElementById('cx');
let sel = document.getElementById('sel');
let res = document.getElementById('res');
let vet = [];

function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, vet)) {
    vet.push(Number(num.value));
    let item = document.createElement('option');
    item.text = `Valor ${num.value} adicionado`;
    sel.appendChild(item);
    res.innerHTML = '';
  } else {
    alert('Valor inválido ou já encontrado na lista.');
  }
  num.value = '';
  num.focus();
}

function isNumero(n) {
  return Number(n) >= 1 && Number(n) <= 100;
}

function inLista(n, l) {
  return l.indexOf(Number(n)) !== -1;
}

function finalizar() {
  if (vet.length == 0) {
    alert('Adicione um valor antes de finalizar!');
  } else {
    let tot = vet.length;
    let maior = vet[0];
    let menor = vet[0];
    let soma = 0;
    for (let pos in vet) {
      soma += vet[pos];
      if (vet[pos] > maior) {
        maior = vet[pos];
      }
      if (vet[pos] < menor) {
        menor = vet[pos];
      }
    }

    res.innerHTML = '';
    res.innerHTML += `Ao todo, temos ${tot} números cadastrados.<br/>`;
    res.innerHTML += `O maior valor informado foi ${maior}.<br/>`;
    res.innerHTML += `O menor valor informado foi ${menor}.<br/>`;
    res.innerHTML += `A soma de todos os valores informados é ${soma}.<br/>`;
    res.innerHTML += `A média dos valores informados é ${(soma / tot).toFixed(2)}.`;
  }
}

// Certifique-se de que o código seja executado após o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
  num = document.getElementById('cx');
  sel = document.getElementById('sel');
  res = document.getElementById('res');
});
