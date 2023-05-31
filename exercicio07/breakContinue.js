const numeros = [1,2,3,4,5,6,7,8,9];

for(let n of numeros){
    if(n == 3){
        continue;
    }
    console.log(n)
    if(n == 5){
        break;
    }
}