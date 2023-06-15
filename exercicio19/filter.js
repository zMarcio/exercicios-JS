// filter, map e reduce



const numero = [5,10,11,12,13,154,14,1,418,7989,45,12,3,546,8,9]

// for(let i of numero){
//     if(i>=10){
//         console.log(i)
//     }
// }




// const numerosFiltrador = numero.filter( (valor , indice , array) => {
//     console.log(valor,indice)
//     return valor > 10
// });

const numerosFiltrador = numero.filter(valor => valor > 10)


//console.log(numerosFiltrador)


const pessoas = [
    {nome:'luiz',idade:62},
    {nome:'maria',idade:17},
    {nome:'eduardo',idade:30},
    {nome:'leticia',idade:25},
    {nome:'rosana',idade:60},
    {nome:'wallace',idade:22},
]

const filtrandoNomes = pessoas.filter(valor =>valor.nome.length >= 5)

const filtrandoIdade = pessoas.filter(valor => valor.idade > 50)

const filtrandoUltimaLetra = pessoas.filter(valor => valor.nome.slice(-1) == 'a')

console.log(filtrandoNomes)
console.log(filtrandoIdade)
console.log(filtrandoUltimaLetra)