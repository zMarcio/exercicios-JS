//Procurar mais informações sobre isso prototype aprece ser algo muito bom de se utilizar
function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () =>'Original: ' + this.nome + ' ' + this.sobrenome;
}
//prototype linka estouAqui a Pessoa 
Pessoa.prototype.estouAqui = 'tomale'
Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
}

const p1 = new p1 ("lucio", 'O.');
const p2 = new p2 ("albert", 'A.');

const data = new Date();


console.dir(p1)
console.dir(p2)