/*
705.484.450-52
*/
function cpf(valor){
    if(typeof valor === 'string'){
        try{
            let separaValor = valor.replace(/\D+/g, '');
            let guardaArray = Array.from(separaValor)
            if(guardaArray.length ==  9 || guardaArray.length ==  11){
                let allEqual = guardaArray.every((digit) => digit === guardaArray[0]);
                if (allEqual) {
                    console.log('Não é permitido um CPF com todos os números iguais.');
                    return;
                }
                // console.log(separaValor)
                // console.log(typeof separaValor)
                let resultArray = [];
                let result = 0;
                let p = 0;
                let firstNumberCpf = 0;
                let secondNumberCpf = 0;
                for(var i = 10; i>=2; i--){
                    resultArray.push(guardaArray[p])
                    result += guardaArray[p] * i
                    p++
                    // console.log(`esse aqui é o result: ${result} // esse aqui é o resultArray: ${resultArray}`)
                }
                console.log(`esse aqui é o result: ${result} // esse aqui é o resultArray: ${resultArray}`)
                firstNumberCpf = 11 - (result % 11)
                if(firstNumberCpf > 9){
                    firstNumberCpf = 0;
                }
                resultArray.push(firstNumberCpf)
                // console.log(`esse aqui é o result: ${result} // esse aqui é o resultArray: ${resultArray} // esse aqui é o firstNumberCpf ${firstNumberCpf}`)
                result = 0;
                p = 11;
                for(var i = 0; i < resultArray.length; i++){
                    result += resultArray[i] * p
                    p--
                    // console.log(result)
                }
                secondNumberCpf = 11 - (result % 11);
                if(secondNumberCpf > 9){
                    secondNumberCpf = 0;
                }
                console.log(`esse aqui é o result: ${result} // esse aqui é o resultArray: ${resultArray} // esse aqui é o firstNumberCpf ${firstNumberCpf} // esse aqui é secondNumberCpf ${secondNumberCpf}`)
                resultArray.push(secondNumberCpf)
                valor = resultArray.join('');
                // console.log(resultArray)
                return valor
            }
        } catch (error) {
            console.log('Ocorreu um erro:', error.message);
            return;
        }
    }
}
try {
    console.log(cpf('022.988.557-81'))
    console.log(cpf('705.484.450-52'))
    console.log(cpf('111.111.111-11'))
    console.log(cpf('676.535.548-06'))
    console.log(cpf('554.656.588-86'))
    console.log(cpf('237.712.652-90'))
} catch (error) {
    console.log('Ocorreu um erro:', error.message);
}