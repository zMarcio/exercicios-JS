const nome = ['eduardo','maria','joana']
nome[2] = 'joao'
delete nome[2]
console.log(nome);

//funciona para string,objetos,funções,numeros

const nomes = new Array('eduardo','abestado','aluancio')


const novo = [...nome];
console.log(nomes)
console.log(nome)
console.log(novo)
console.log(novo.length);

novo.pop();
console.log(novo)
novo.push("pequeno");
console.log(novo)
novo.unshift("grandinho");
console.log(novo)
const novo2 = novo.slice(0,3)
console.log(novo2)


const alfa = 'moura lucas doido'

// const alfas = alfa.split(' ');
const alfas = [ 'moura', 'lucas', 'doido' ]
const betas = alfas.join(' ')

console.log(alfas)