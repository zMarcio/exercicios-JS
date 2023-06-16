function aleatorio(min=0,max=3){
    min *= 1000;
    max *= 1000
    return Math.floor(Math.random() * (max-min) + min)
}

function esperaAi(msg,tempo){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            if(typeof msg != 'string'){ 
                reject('cai no error'); 
                return;
            }
            resolve(msg.toUpperCase() + '- Passei na promise');
            return
        }, tempo) 
    });
}
//relembrando o que aprendeu...
// esperaAi('fase 1', aleatorio(0,3))
//     .then(valor => {
//         console.log(valor)
//         return esperaAi('fase 2', aleatorio())
//     }).then(f => {
//         console.log(f);
//         return esperaAi('fase 3', aleatorio())
//     }).then(f => {
//         console.log(f)
//     }).then(f => console.log('terminamos nessa fase aqui ', f))
//     .catch (e=> {
//         console.log(e)
//     })

//promise tem 3 fases, pending = pendente, fullfilled = resolvida e a reject rejeitada
async function executa(){
    try{
        const fase1 = await esperaAi('fase 1', aleatorio())
        console.log(fase1)
        const fase2 = await esperaAi(1, aleatorio())
        console.log(fase2)
        const fase3 = await esperaAi('fase 3', aleatorio())
        console.log(fase3)
        
        console.log('terminamos aqui ', fase3)
    }catch(e){
        console.log(e)
    }
}
executa()



