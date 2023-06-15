function calculadora(){
    return{
        display:document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        iniciar(){
            this.cliqueBotoes();
            this.pressionaBackSpace();
            this.pressionarEnter();
        },
        
        pressionarEnter(){
            this.display.addEventListener('keyup', (e)=>{
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            })
        },

        pressionaBackSpace(){
            this.display.addEventListener('keydown', (e)=>{
                if(e.code === 13){
                    e.defaultPrevented();
                    this.clearDisplay();
                }
            })
        },

        realizaConta(){
            let conta = this.display.value
            try{
                conta = eval(conta);

                if(!conta){
                    alert("conta invalida")
                    return;
                }
                this.display.value = String(conta)
            }catch(e){
                alert('conta invalida');
                return;
            }
        },

        clearDisplay(){
            this.display.value = ''
        },

        apagaum(){
            this.display.value = this.display.value.slice(0,-1)
        },
        

        cliqueBotoes(){
            document.addEventListener('click', (e) => {
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay(); 
                }

                if(el.classList.contains('btn-del')){
                    this.apagaum();
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
            });
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        }

    }
}

const calculadora003 = calculadora();
calculadora003.iniciar()