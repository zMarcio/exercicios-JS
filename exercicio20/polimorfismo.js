function Conta(agencia,conta,saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor ) {
        console.log(`Saldo insuficiente, esse é seu saldo: ${this.saldo}`)
        return this.verSaldo()
    };

    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.depositar = function(valor){
    this.saldo += valor
    this.verSaldo();
};
Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia}/${this.conta}` + `Saldo: R${this.saldo.toFixed(2)}`)
}


const conta = new Conta(11,22,30)

conta.depositar(100)

conta.sacar(70)

conta.depositar(90)

conta.sacar(150)

conta.verSaldo();


function cc(agencia,conta,saldo,limite){
    Conta.call(this,agencia,conta,saldo);
    this.limite = limite
}

cc.prototype = Object.create(Conta.prototype);
cc.prototype.constructor = cc;

cc.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite) ) {
        console.log(`Saldo insuficiente, esse é seu saldo: ${this.saldo}`)
        return
    };

    this.saldo -= valor;
    this.verSaldo();
};


const CC = new cc(11,22,0,100)
CC.depositar(10)
CC.sacar(90)


function cp(agencia,conta,saldo){
    Conta.call(this,agencia,conta,saldo);
}

cp.prototype = Object.create(Conta.prototype);
cp.prototype.constructor = cc;

cp.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite) ) {
        console.log(`Saldo insuficiente, esse é seu saldo: ${this.saldo}`)
        return
    };

    this.saldo -= valor;
    this.verSaldo();
};


const CP = new cp(11,22,0)
CP.depositar(10)
CP.sacar(10)
