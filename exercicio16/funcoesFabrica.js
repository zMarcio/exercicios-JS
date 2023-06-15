function criaPessoa(nome,sobrenome,assunto){
    return{
        nome,
        sobrenome,
        assunto,
        get fala(){
            return `${this.nome} está ${this.assunto}, ${this.peso}`
        },
        peso:15
    }
}

// const p1 = criaPessoa("tome", "lá", 'talarica');
// console.log(p1);
// console.log(p1.fala)
console.log(criaPessoa("tome", "lá", 'talarica').fala)