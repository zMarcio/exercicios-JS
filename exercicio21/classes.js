//class funciona igualmente a função construtora

class Pessoa{
    constructor(nome,sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }


    falar(){
        console.log(`${this.nome} falou`)
    }
    comer(){
        console.log(`${this.nome} comeu`)
    }
    beber(){
        console.log(`${this.nome} bebeu`)
    }
}


const p1 = new Pessoa('carlos', 'o BALA');
console.log(p1)