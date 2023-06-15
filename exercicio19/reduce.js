//reduce

// const numero = [5,10,11,12,13,154,14,1,418,7989,45,12,3,546,8,9]

// const total = numero.reduce((acumulador,valor,indice,array) => {
//     //puxar para dentro do array if(valor % 2 === 0) 
//     acumulador.push(valor); 
//     //mult por 2 
//     acumulador.push(valor * 2)
//     //somar todos os pares 
//     if(valor % 2 === 0) acumulador+=valor;
//     //somar todos os valores 
//     acumulador+=valor; 
//     return acumulador;
// },[])

// console.log(total)







const pessoas = [
    {nome:'luiz',idade:62},
    {nome:'maria',idade:17},
    {nome:'eduardo',idade:30},
    {nome:'leticia',idade:25},
    {nome:'rosana',idade:60},
    {nome:'wallace',idade:22},
]

const retornaVelha = pessoas.reduce((acumulador,valor) =>{
    if(acumulador.idade > valor.idade) return acumulador;
    return valor
});

console.log(retornaVelha)
