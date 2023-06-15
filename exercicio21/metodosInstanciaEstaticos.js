class controleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0
    }
    //instancia metodos
    aumentarVolume(){
        console.log(this.volume +=2)
    }
    //instancia metodos já os de instancia mexer somente na instacia no caso controle 1 ali.
    diminuirVolume(){
        console.log(this.volume -=2)
    }
    //estatico metodo isso aqui mexe direto na classe
    static trocaPilha(){
        console.log('sua pilha foi trocada')
    }
}

const controle1 = new controleRemoto('Sony')

controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.diminuirVolume();
controleRemoto.trocaPilha();