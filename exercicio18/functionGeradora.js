//cada vez q chama a função vai reetornando o valor se chama 5 vezes vai 1 2 3 4 e 5
function* geradora1(){
    //codigo qualquer ...
    yield 'valor 1';
    //codigo qualquer ...
    yield 'valor 2';
    //codigo qualquer ...
    yield 'valor 3';
    //codigo qualquer ...
    yield 'valor 4';
    //codigo qualquer ...
    yield 'valor 5';
    //codigo qualquer ...
    yield 'valor 6';
}

const g1 = geradora1();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);

function* geradora2(){
    let i = 0;

    while(true){
        yield i;
        i++;
    }
}

const g2 = geradora2();
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)



function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}
function* geradora4(){
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for(let i of g4){
    console.log(i)
}


for(let i of g4){
    console.log(i)
}

function* geradora5(){
    yield function(){
        console.log('vim do y1')
    }

    yield function(){
        console.log('vim do y2')
    }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1()
func2()