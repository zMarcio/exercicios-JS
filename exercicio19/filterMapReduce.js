const numero = [5,10,11,12,13,154,14,1,418,7989,45,12,3,546,8,9]

let arrayPar = []
let arrayDobro = []
let arrayReduce = []
const numeroPares = numero.filter(x => x % 2 == 0).map(x=> x * 2 ).reduce(( x , y ) => x += y);
console.log(numeroPares);
