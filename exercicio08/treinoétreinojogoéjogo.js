let a = (num) =>{
    switch(num>= 0){
        case num % 3 == 0 && num % 5 == 0:
            console.log(num,'FizzBuzz');
        break;
        case num % 3 == 0:
            console.log(num, 'Fizz');
        break;
        case num % 5 == 0:
            console.log(num,'Buzz');
        break;
    }
}

for(let i = 1; i<=100; i++){
    console.log(i)
    a(i);
}

