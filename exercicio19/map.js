const numero = [5,10,11,12,13,154,14,1,418,7989,45,12,3,546,8,9]

const numeroDobro = numero.map(valor => `aumentou ${valor**2}`)

//console.log(numero)
//console.log(numeroDobro)



const pessoas = [
    {nome:'luiz',idade:62},
    {nome:'maria',idade:17},
    {nome:'eduardo',idade:30},
    {nome:'leticia',idade:25},
    {nome:'rosana',idade:60},
    {nome:'wallace',idade:22},
]

const nomes = pessoas.map(x=>x.nome);

const idade = pessoas.map(x => x.idade);

const idadeChave = pessoas.map(x => ({idade:x.idade}));

// const addId = pessoas.map((x,indice) => {
//     x.id = indice
//     return x
// })

const newAddId = pessoas.map((x,indice) => {
    const newX = {...x}
    newX.id = indice
    return newX
})

// console.log(nomes)
// console.log(idade)
// console.log(idadeChave)
// console.log(addId)
console.log(pessoas)
console.log(newAddId)