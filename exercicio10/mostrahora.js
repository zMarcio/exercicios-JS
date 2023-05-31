function mostraHora(){
    let data = new Date()

    return data.toLocaleTimeString('pt-BR',{
        hour12:false
    })
}

function funcaoInteval(){
    console.log(mostraHora())
}

const timer = setInterval(function(){
    console.log(mostraHora())
}, 1000)

setTimeout(function(){
    clearInterval(timer)
    console.log('VTNC')
}, 2014.1)