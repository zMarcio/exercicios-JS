// js tem um negocio chamado arguments que pode pegar todos os argumentos que foi passado pela na função

function funcao(){
    let total = 0;
    for(let argumentos of arguments){
        total += argumentos
    }
    console.log(total);
}

funcao(99,100)

function funcao2(a,b,c){
    let total = 0;
    for(let argumentos of arguments){
        total += argumentos
    }
    console.log(total,a,b,c);
}

funcao2(99,100,1)

function funcao3(a,b,c,d,e,f){
    console.log(a,b,c,d,e,f);
}

funcao3(99,100,1)
//maneira antiga
function funcao4(a,b){
    b=b||0;
    console.log(a + b);
}

funcao4(4)

function funcao4(a,b = 2){
    console.log(a + b);
}

funcao4(4)


function funcao5(a,b = 2,c=23){
    console.log(a + b);
}

funcao4(4,undefined,12)

//desestruturação
function funcao6({nome,sobrenome,idade}){
    console.log(nome,sobrenome,idade);
}

funcao6({nome:'lula',sobrenome:"22", idade: 13})

function funcao7([valor1,valor2]){
    console.log(valor1,valor2);
}

funcao7([1,2])

function funcao8(operador,acumulador,...numeros){
    console.log(operador,acumulador,numeros);
}

funcao8('+',0,20,30,40,50);

//rest operator
function funcao9(operador,acumulador,...numeros){
    for(let numero of numeros){
        if(acumulador === "+") acumulador+=numero
        if(acumulador === "-") acumulador-=numero
        if(acumulador === "/") acumulador/=numero
        if(acumulador === "*") acumulador*=numero
    }
}

funcao9('+',1,20,30,40,50);

