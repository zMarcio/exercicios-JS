// const objA = {
//     chaveA:'Ai zé da manga'
// }

// const objB = {
//     chaveB:'Lontrinha'

//     // __proto__; objA
// }

// const objC = new Object();

// objC.chaveC = 'Cavalinho'


// Object.setPrototypeOf(objB,objA)
// Object.setPrototypeOf(objC,objB)

// console.log(objC.chaveB)


function produto(nome,preco){
    this.nome = nome;
    this.preco = preco;
}

produto.prototype.desconto = function(x)  {
    this.preco = this.preco - (this.preco*(x/100));
}


produto.prototype.aumento = function(x) {
    this.preco = this.preco + (this.preco*(x/100));
}


const p1 = new produto('camisa',50);

//como vc fez isso reconstruindo um novo objeto, sem usar o produto, vc tem que settar ele como se fosse produto atraves do prototype.
const p2 = {
    nome: 'caneta',
    preco: 1.50
}
//ficando assim:
Object.setPrototypeOf(p2,produto.prototype);


console.log('esse aqui é a caneta')
p2.aumento(20);
console.log(p2, 'AUMENTO FAZ O LOBINHO');
p2.desconto(25);
console.log(p2, ' DESCONTOU AUUUUUUUU!!!');

console.log('esse aqui é a camiseta')
p1.aumento(100);
console.log(p1, 'AUMENTO FAZ O LOBINHO');
p1.desconto(50);
console.log(p1, ' DESCONTOU AUUUUUUUU!!!');


const p3 = Object.create(produto.prototype,{
    tamanho:{
        writable:true,
        configurable:true,
        enumerable:true,
        value:42
    },
});
// p3.nome = 'camiseta'
// p3.preco = 113

console.log(p3)