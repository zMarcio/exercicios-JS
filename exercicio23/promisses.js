function aleatorio(min,max){
    min *= 1000;
    max *= 1000
    return Math.floor(Math.random() * (max-min) + min)
}

function esperaAi(msg,tempo){
    return new Promise((resolve,reject) => {
        if(typeof msg != 'string') reject(new Error('ERROR'))
        setTimeout(() =>{
            resolve(msg);
        }, tempo) 
    });
}

console.log(esperaAi('frase 1', aleatorio(1,3)));

esperaAi('frase 1', aleatorio(1,3))
    .then(frase => {
        console.log(frase)
        return esperaAi(23, aleatorio(1,2))
    })
    .then(frase2=>{
        console.log(frase2)
        return esperaAi('frase 3', aleatorio(1,5))
    }).then(frase3=>{
        console.log(frase3)
    })
    .catch(e=>{
        console.log(e)
    })

