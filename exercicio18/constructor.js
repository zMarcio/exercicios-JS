function pessoa(nome,sobrenome){
    //já esses são privados
    const id = 123456;

    const metodoInterno = ()=>{
        console.log('tudo será interno')
    }
    //esse metodos q podem usar fora da função são publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = ()=>{
        console.log('sou um metodo', ` e estou chamando ${this.nome}`)
    }
}

let p1 = new pessoa('xabi',"alonso")

let p2 = new pessoa('vini', 'jr')

console.log(p1.nome)
console.log(p2.nome)
// console.log(p1)
// console.log(p2)
p1.metodo()
p2.metodo()