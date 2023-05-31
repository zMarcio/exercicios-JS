/*
try{//e ele tenta rodar o script. da para usar try e catch dentro dos try
    console.log('abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
    try{
        console.log(a)
        console.log('alou')
    }catch(e){
        console.log('erro')
    }
}catch (e) {//ele trata o erro
    console.log('tratando o erro');
}finally{//esse sempre vai ser executado
    console.log('FINALLY : eu sempre sou executado')
}
*/
function retornaHora(data){
    if (data && !(data instanceof Date)){
        throw new TypeError("esperando instancia de date")
    }

    if(!data){
        data = new Date()
    }
    
    return data.toLocaleTimeString('pt-BR',{
        hour:'2-digit',
        minuete: '2-digi',
        second:'2-digi',
        hour12:false
    })
}

try{
    const data = new Date("01-01-1970 12:58:12")
    const hora = retornaHora();
    console.log(hora);
}catch(e){
    //
}finally{
    console.log('tenha um bom dia')
}