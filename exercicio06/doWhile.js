let i = 0;
while(i == 10){
    console.log(i);
    i++;
}

function random(min, max){
    const r = Math.random()*(max-min) + min;
    return Math.floor(r)
}

const min = 1
const max = 50

let rand;
//while ( rand !== 10){
    //rand = random(min,max)
   // console.log(rand)
//}
// do executa primeiro dps vai até atender as exigencias do while, quando atender ele vai executar o while.
do{
    rand = random(min,max)
    console.log(`num funfo ${rand}`)
}while ( rand !== 10){
    //rand = random(min,max)
    console.log(rand)
}


let ii = 0;

do{
    ii++
    console.log('É isso...')
}
while(ii<10){
    console.log(`chegou ${ii}`)
}
