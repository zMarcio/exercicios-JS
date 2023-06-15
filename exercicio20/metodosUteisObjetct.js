const produto = {nome: 'caneca', preco: 1.8};
//spread operator, espalha o objeto produta em outraCoisa
// const outraCoisa = {...produto, material:'porcelana'};
// produto.nome = 'canequinha'
// console.log(produto, outraCoisa)
// //copia o objeto
// const caneca = Object.assign({},produto, {material:'procelana'})
// //outro jeito de copiar o objeto
// const caneca1 = {nome:produto.nome, preco:produto.preco}
// //mostra o valor das chaves
// console.log(Object.keys(produto))
// //freeza o produta
// Object.freeze(produto);

//defineProperty e defineProperties ela assegura oq objeto pode ser, como o objeto vai se comporta, e é mais ou menos assim:
// value: 'caneca',
// writable: true,
// enumerable: true,
// configurable: true

Object.defineProperty(produto, 'nome',{
    writable:false,
    configurable:false
})

console.log(Object.getOwnPropertyDescriptor(produto,'nome'))
//pega Somente os valores
console.log(Object.values(produto))

console.log(Object.entries(produto))

for(let [chave,valor] of Object.entries(produto)){
    console.log(chave, valor);
}