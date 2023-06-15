falaoi()
//essa é a function padrão
function falaoi(){
    console.log('oi');
}
//uma constante recebe uma função
const functionTeste = function(){
    console.log('oi');
}

functionTeste();
//essa função chama outra função
function executaFuncao(functionTeste){
    functionTeste();
}

executaFuncao();

//arrow function
const funcaoArrow = () => {
    console.log('sou arrow function')
}

funcaoArrow();
//colocar objeto em forma de function
const obj = {
    falar:function(){
        console.log("estou falando...")
    }
}
//essa maneira é mais nova
const obje = {
    falar(){
        console.log("estou falando...")
    }
}