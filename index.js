'use strict';

// 1. mudar a cor do botão conforme o click.
// 2. remover a cor do selecionado anteriormente e selecionar o atual.
const selecao = document.querySelectorAll('#slcNum');
selecao.forEach(numberSelec => {
  numberSelec.addEventListener('click', () => {
    const numeroSelecionado = document.querySelector('.selectedNumber');
    numeroSelecionado.classList.remove('selectedNumber');
    numberSelec.classList.add('selectedNumber');
  });
});

// 1.Salvar o numero selecionado para o texto
// 2.Mudar de slide de avaliação para o slide de agradecimento, mostrando o numero selecionado no texto.

const btn = document.querySelector('button');
let text = document.querySelector('.result').textContent;

btn.addEventListener('click', () => {
  let numAtual = document
    .querySelector('.selectedNumber')
    .getAttribute('data-name');
  text = `You selected ${numAtual} out of 5`;
  document.querySelector('.evaluation').classList.remove('show');
  document.querySelector('.evaluation').classList.add('hidden');
  document.querySelector('.thanks').classList.remove('hidden');
  document.querySelector('.thanks').classList.add('show');
  document.querySelector('.result').textContent = text;
});
