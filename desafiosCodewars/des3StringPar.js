function solution(str){
    let guarda = [];
    let letraAtual;
    let letraProx;
    let aux;
    let aux1;
    console.log(str)
    for(var i = 0; i<str.length; i++){
        aux = i
        aux1 = i + 1
        letraAtual = str[aux];
        letraProx = str[aux1];
        // console.log(`esse é o I que vai dps de str[i]: ${aux}, esse aqui é o str[i+1] ${aux1}`)//, esse aqui é a letraAtual ${letraAtual} e esse aqui é a letraProx ${letraProx}`);
        if(str.length % 2 == 0){
            if(aux % 2 == 0 || aux % 2 == 0){
                //AQUI FAZ O PAR
                guarda.push(letraAtual + letraProx);
                // console.log(guarda)
            }
        }else {
            if(aux % 2 == 0 || aux % 2 == 0){
                if(letraProx != null) guarda.push(letraAtual + letraProx);
                else guarda.push(letraAtual + '_')
            }
        }
    }

    console.log(guarda)
    return guarda
}

let pairs2 = solution('ABCDEFGHIJKLMNOPQRSTUVWXY'); //ABCDEFGHIJKLMNOPQRSTUVWXYZ.0,1,2,3,4,5,6,7,8,9,10
console.log(pairs2);
// let test = solution('A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z')

// function solution2(str) {
//     let guarda = str.split(', '); // Divide a string em um array, removendo as vírgulas e espaços em branco

//     console.log(guarda);
// }

// console.log(solution2('A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z'))
