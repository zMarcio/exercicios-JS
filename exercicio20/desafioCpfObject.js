function validaCpf(cpfEnviado){
    Object.defineProperty(this,'cpfLimpo',{
        enumerable:true,
        get: function(){
            return cpfEnviado.replace(/\D+/g, '')
        }
    });
}

validaCpf.prototype.valida = function () {
    if(typeof this.cpfLimpo === undefined) return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false
    const cpfParcial = this.cpfLimpo.slice(0,-2)
    const digito1 = this.criaDigito(cpfParcial)
    const digito2 = this.criaDigito(cpfParcial + digito1)
    const novoCpf = cpfParcial + digito1 + digito2;
    console.log(novoCpf)
    return novoCpf === this.cpfLimpo;
}

validaCpf.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);

    let regressivo = cpfArray.length + 1
    const digito = cpfArray.reduce((ac,val)=>{
        // console.log('isso aqui é val regre e regre*val : ', val, regressivo , regressivo*val)
        ac += (regressivo*Number(val));
        regressivo--;
        return ac;
    }, 0 )

    const total = 11 - (digito % 11)
    console.log(total > 9 ? 0 : total)
    return total > 9 ? '0' : String(total);
}

validaCpf.prototype.isSequencia = function(){
    return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo
}


const cpf = new validaCpf('111.111.111-11');

console.log(cpf.valida())