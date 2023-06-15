const falando = {
    falar() {
        console.log(`${this.nome} fala`)
    }
}

const beber = {
    beber(){
        console.log(`${this.nome} bebe`)
    }
}

const comer = {
    comer(){
        console.log(`${this.nome} come`)
    } 
}

//qualquer um dos dois funciona para acoplar no criaPessoa as functions
const pessoaPrototype = Object.assign({}, falando,comer,beber)

//pessoaPrototype = {...falando,...beber,...comer};
function criaPessoa(nome,sobrenome){
    return Object.create(pessoaPrototype,{
        nome: {value:nome},
        sobrenome: {value:sobrenome}
    });
}


const p1 = criaPessoa("alou",'pessoa');