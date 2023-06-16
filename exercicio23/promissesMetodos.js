function aleatorio(min,max){
    min *= 1000;
    max *= 1000
    return Math.floor(Math.random() * (max-min) + min)
}

function esperaAi(msg,tempo){
    return new Promise((resolve,reject) => {
        if(typeof msg != 'string'){ 
            reject('cai no error'); 
            return;
        }
        setTimeout(() =>{
            resolve(msg.toUpperCase() + '- Passei na promise');
            return
        }, tempo) 
    });
}

//Promise.all Promise.race Promise.resolve Promise.reject
//Promise.all resolve todas as promise q vc mandou
//Promise.race resolve a primeira e te entrega
//Promise.resolve ele funciona resolvendo, e o reject rejeitando, depois pesquisar para ver melhor isso aqui.
function baixaPagina(){
    const emCache = true;

    if(emCache){
        return Promise.resolve('Página em cache')
    }else{
        return esperaAi('baixei a página', 3000)
    }
}

baixaPagina().then(r=>{console.log(r)}).catch(e=>{console.log(e + 'vtnc')})