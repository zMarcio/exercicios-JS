let button = document.querySelector('.button');

button.addEventListener('click', (e) => {
  e.preventDefault();
  let valor = document.querySelector('#inputNum').value;

  let check1 = document.getElementById('numberOpen');
  let check2 = document.getElementById('letterUp');
  let check3 = document.getElementById('letterLow');
  let check4 = document.getElementById('symbol');

  if (valor != '' && (check1.checked || check2.checked || check3.checked || check4.checked)) {
    document.querySelector('.senha').style.color = 'black';
    document.querySelector('.senha').textContent = randomSenha(valor);
  } else {
    const senha = document.querySelector('.senha');
    senha.style.color = 'red';
    if (valor == '') {
      senha.textContent = 'Digite o número de caracteres da senha.';
    } else {
      senha.textContent = 'Selecione pelo menos uma opção de senha.';
    }
  }
});

function randomSenha(valor) {
  let letra = '';
  let senha = '';

  let check1 = document.getElementById('numberOpen');
  let check2 = document.getElementById('letterUp');
  let check3 = document.getElementById('letterLow');
  let check4 = document.getElementById('symbol');

  if (check1.checked) letra += '0123456789';
  if (check2.checked) letra += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (check3.checked) letra += 'abcdefghijklmnopqrstuvwxyz';
  if (check4.checked) letra += '!@#$%^&*()';

  const letraLength = letra.length;

  for (var i = 0; i < valor; i++) {
    const indexRandom = Math.floor(Math.random() * letraLength);
    senha += letra.charAt(indexRandom);
  }
  return senha;
}
