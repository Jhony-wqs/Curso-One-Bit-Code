"use strict";

// src/index.js

var num = document.getElementById('cx');
var sel = document.getElementById('sel');
var res = document.getElementById('res');
var vet = [];
function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, vet)) {
    vet.push(Number(num.value));
    var item = document.createElement('option');
    item.text = "Valor ".concat(num.value, " adicionado");
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
    var tot = vet.length;
    var maior = vet[0];
    var menor = vet[0];
    var soma = 0;
    for (var pos in vet) {
      soma += vet[pos];
      if (vet[pos] > maior) {
        maior = vet[pos];
      }
      if (vet[pos] < menor) {
        menor = vet[pos];
      }
    }
    res.innerHTML = '';
    res.innerHTML += "Ao todo, temos ".concat(tot, " n\xFAmeros cadastrados.<br/>");
    res.innerHTML += "O maior valor informado foi ".concat(maior, ".<br/>");
    res.innerHTML += "O menor valor informado foi ".concat(menor, ".<br/>");
    res.innerHTML += "A soma de todos os valores informados \xE9 ".concat(soma, ".<br/>");
    res.innerHTML += "A m\xE9dia dos valores informados \xE9 ".concat((soma / tot).toFixed(2), ".");
  }
}

// Certifique-se de que o código seja executado após o carregamento completo da página
document.addEventListener('DOMContentLoaded', function () {
  num = document.getElementById('cx');
  sel = document.getElementById('sel');
  res = document.getElementById('res');
});