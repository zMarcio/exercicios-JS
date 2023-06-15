//camiseta = cor, canetaca = material, esses seriam o que meu comercio vai vender.

function produto(nome,preco){
    this.nome = nome;
    this.preco = preco;
}


produto.prototype.aumento = function(quantia){
    this.preco += quantia;
}

produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
}

function camiseta(nome,preco,cor){
    produto.call(this,nome,preco);
    this.cor = cor
}

function caneca(nome,preco,estilo){
    produto.call(this,nome,preco)
    this.estilo = estilo;

    Object.defineProperty(this,'estoque',{
        enumerable:true,
        configurable: false,
        get : function () {
            return estoque
        },
        set : function (x){
            if(typeof valor != 'number') return;
            estoque = x;
        } 
    })
}

caneca.prototype = Object.create(produto.prototype)
caneca.prototype.constructor = caneca;

caneca.prototype.cancelar = function(x){
    this.preco = this.preco * (100/x);
}

//isso aqui transforma o constructor de camiseta no constructor de produto
camiseta.prototype = Object.create(produto.prototype)
//essa linha abaixo conserta o que a linha a cima fez(obs:concerta é relacionado a opera ou musica, e consetar é relacionado a reforma e refazer.)
camiseta.prototype.constructor = camiseta;

camiseta.prototype.aumento = function(x){
    this.preco = this.preco + (this.preco * (x/100)); 
}

const camisa = new camiseta('regata',7.5,'azul')
const praca = new produto('balinha',1.5)
const caneca1 = new caneca('canequinha', 1,'estilo diamante');

caneca1.cancelar(2);
camisa.aumento(100)
caneca.estoque = 100;
console.log(caneca.estoque, ' aqui é estoque...')



console.log(camisa);
console.log(praca);
console.log(caneca1);