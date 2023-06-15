const nomes = ['maria','joao','eduardo','gabriel','julia']
//push
nomes.splice(nomes.length,0,"luiz")
//unshift
nomes.splice(0,0,'luiz','otavio')

console.log(nomes);





//pop
//const removidos = nomes.splice(-1,1); //Number.MAX_VALUE vai até o  ultimo numero
//shift
//const removidos = nomes.splice(0,1)