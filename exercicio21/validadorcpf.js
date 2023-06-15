class Validacpf{
    constructor(cpf){
        this.cpf = cpf
        this.LimpezaCpf;
        this.UltimoNum;
        this.SomaCpf = 0;
        this.primeiroNum = 0;
        this.segundoNum = 0;
        this.aux = [];
        this.trueCpf = []
    }

    limpaCpf(){
        this.LimpezaCpf = this.cpf.replace(/\D+/g, '').split("");
        // console.log(this.LimpezaCpf);
        if (this.LimpezaCpf.every((digit) => digit === this.LimpezaCpf[0])) {
            throw console.error("CPF inválido");
        }
        return this.LimpezaCpf
    }

    multCpf(){
        //importa o cpf limpo
        this.limpaCpf();
        //aux e p servem para ajudar no for, lembrando que aqui retira os num final
        let p = 0;
        this.aux = this.LimpezaCpf
        // console.log(this.aux)
        //aux serve para guarda o array quem vem do código acima e p serve para fazer a crescente e entra da num em num
        for(var i = 10; i >= 2; i--){
            this.SomaCpf += (this.aux[p] * i);
            p++
        }
        if(this.primeiroNum > 9){
            this.primeiroNum = 0
        }
        p = 0
        this.primeiroNum = 11 - (this.SomaCpf % 11);
        // console.log('primeiro num>',this.primeiroNum)
        // console.log('repete')
        this.SomaCpf = 0;
        for(var i = 11; i >= 2; i--){
            this.SomaCpf += (this.aux[p] * i);
            p++
        }
        this.segundoNum = 11 - (this.SomaCpf % 11);
        if(this.segundoNum > 9){
            this.segundoNum = 0
        }
        for(var i = 0; i < 9;i++){
            this.trueCpf.push(this.LimpezaCpf[i])
        }
        this.trueCpf.push(this.primeiroNum,this.segundoNum)
        // console.log(this.trueCpf)
        // console.log(this.segundoNum)
        return this.SomaCpf, this.primeiroNum,this.segundoNum,this.trueCpf;
    }
    //isso aqui vai servir para comparar no final se o cpf é correto ou não comparando a transformação no código com a entrada
    confirmCpf(){
        this.multCpf();
        // console.log('primeironum>',this.primeiroNum,this.segundoNum)
        if(this.LimpezaCpf.length === 11){
            this.UltimoNum = (this.LimpezaCpf.slice(9,11));
            if(this.UltimoNum[0] == this.primeiroNum && this.UltimoNum[1] == this.segundoNum){
                console.log('cpf valido')
                return true
            }else{
                console.log('cpf invalido')
                return false
            }
        }else{
            this.LimpezaCpf.push(this.segundoNum)
            console.log(`O final do seu cpf é ${this.primeiroNum} e ${this.segundoNum}, ficando assim ${this.LimpezaCpf.join("")}`)
            return true;
        }
    }
}



const cpf = new Validacpf('')
// cpf.multCpf()
cpf.confirmCpf();
