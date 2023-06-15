//defineProperty - defineProperties
function produto(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this,'estoque',{
        enumerable:true, //aparece quando chamar
        configurable: false, //não deixa deletar, nem apagar, nem modificar e vc tbm pode colocar outra restrição embaixo para executar se for o valor true
        get:function(){
            return estoquePrivado
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                console.log('bad value')
                return
            }
            estoquePrivado = valor
        }
    })

}
//getter irá normalmente pegar o valor
const p1 = new produto('calça',20,3)
console.log(p1.estoque)
//já o setter tu vai modificar o valor/setar ele
console.log(p1.estoque = 500)
console.log(p1.estoque)


function criando(nome){
    return{
        get nome(){
            return nome;
        },
        set nome(valor){
            nome = valor
        }
    }
}