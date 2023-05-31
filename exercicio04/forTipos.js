const pessoa = {
    nome: 'Lúcio',
    sobrenome: 'Cpanga',
    idade: 22
}
const pessoas = ['lucio','cpanga',22];


//for padrão dificil usar em objetos aqui vc tem q especificar que a const é um objeto, mas geralmente vamos utilizar o for padrão para arraqys
console.log('ESSE AQUI É O FOR PADRÃO COM OBJETO')
for(let i = 0; i < Object.keys(pessoa).length; i++){
    console.log(pessoa[Object.keys(pessoa)[i]])
}
console.log('#################################################')
console.log('ESSE AQUI É O FOR USANDO VETOR')
for(let i = 0; i < pessoas.length; i++){
    console.log(pessoas[i])
}
console.log('#################################################')
//for in esse for o i se comporta de forma q ele pega os elementos do vetor q foi colocado pos o in, no caso aqui, ele vai pegar nome,sobrenome e idade no primeiro momento e depois, lúcio,cpanga e 22 facil em utilizar em objetos e vetor, esse é o completinho
for(let i in pessoa){
  console.log(i, pessoa[i])
}
console.log('#################################################')
//for of esse for aparentemente é bom apenas para usar em vetor, só vai funfar em arrays
for(let i of pessoas){
  console.log(i);
}
console.log('#################################################')
//esse aqui é o for each isso funciona só com array, para funcionar em object teria q transforma o objeto em matriz +- assim: Object.entries(pessoa).forEach(([chave, valor])
pessoas.forEach(function(valor,index,array){
    console.log(valor)
    console.log(index)
    console.log(array)
})