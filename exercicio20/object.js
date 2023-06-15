/*
const pessoa = {
    nome:'cavalo',
    sobrenome:'junior'
}


const pessoa1 = new Object();

pessoa1.nome = 'cabalo'
pessoa1.sobrenome = 'junião'
pessoa1.idade = 30
pessoa1.falarNome = function(){
    console.log(this.nome,this.sobrenome)
}

pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade
}

console.log(pessoa1.getDataNascimento());

for(let chave in pessoa1){
    console.log(chave, ' ///')
    console.log(pessoa1[chave])
}
*/
// *factory function* / constructor functions / classes
function criaPessoa(nome,sobrenome){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criaPessoa('Orlando', 'Carvalho')
console.log(p1.nomeCompleto)
console.log(p1)

//constructor
function Pessoa(nome,sobrenome){
    this.nome = nome,
    this.sobrenome = sobrenome;
    Object.freeze(this)
}

const p2 = new Pessoa("carmando","lenvi")
p2.nome = 'carvalho'
delete p2.nome
console.log(p2);







