//isso aqui transforma em dificil acesso a velocidade.
const _velocidade = Symbol('velocidade')
class carro{
    constructor(nome, year){
        this.nome = nome;
        this.year = year
        this[_velocidade] = 0;
    }
    acelerar(){
        if(this[_velocidade] >= 100) return
        this[_velocidade]++
    }

    freiar(){
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--
    }
}

class mustang extends carro{
    constructor(name,year){
        super(name,year)
        this[_velocidade]
    }

    get nameCar(){
        console.log(this.nome,this.year)
    }
    
    get velocidade(){
        console.log(this[_velocidade])
        // return this[_velocidade]
    }

    set addVelocidade(velocidade){
        if(typeof velocidade !== 'number') return;
        if(velocidade >= 100 || velocidade <=0) return;
        this[_velocidade] = velocidade
    }
}


const c1 = new carro('fusca');

// for(let i = 0; i<=100;i++){
//     c1.acelerar()
// }
//caso isso aqui aconteça, ou seja, um pessoa renomear para um velocidade ou para algo que eu não quero ter a proteção, para n modificar.
c1.velocidade = 1500;

//isso aqui é setter
c1.addVelocidade = 1500 
// console.log(c1.velocidade)

c1.velocidade;

const c2 = new mustang('GT500','1967')
// for(let i = 0; i<=100;i++){
//     c2.acelerar()
// }
c2.addVelocidade = 1500 
c2.velocidade
c2.nameCar

