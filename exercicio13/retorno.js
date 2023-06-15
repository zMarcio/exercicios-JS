function queCoisa(n){
    return function(l){
        return n + l + " É o Laion Não tem jeito";
    };
}

const tome = queCoisa(4)

console.log(tome(1))

function pessoa(nome,sobrenome){
    return {nome,sobrenome};
}

console.log(pessoa('Abigail','Alesandra'))

function multiplica(multiplicador){
    return function(ai){
        return multiplicador*ai
    };
}

const mult = multiplica(3)
console.log(mult(5))

