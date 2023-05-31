const data = new Date();
const diaSemana = data.getDay();
const numDia = data.getDate()
const numMes = data.getMonth();
const numAno = data.getFullYear();
const numHora = data.getHours();
const numMin = data.getMinutes();

function concertoMin(numMin,numHora){
    let hor =  numHora >= 10 ? `0+${numHora}` : `${numHora}`
    let min = numMin >= 10 ? `0+${numMin}` : `${numMin}`
    return hor,min;
}

const doc = document.getElementById('toma');


let nomeMes;

switch(numMes){
    case 0 :
    nomeMes = 'Janeiro'
    break;
    case 1 :
    nomeMes = 'Fevereiro'
    break;
    case 2 :
    nomeMes = 'Março'
    break;
    case 3 :
    nomeMes = 'Abril'
    break;
    case 4 :
    nomeMes = 'Maio'
    break;
    case 5 :
    nomeMes = 'Junho'
    break;
    case 6 :
    nomeMes = 'Julho'
    break;
    case 7 :
    nomeMes = 'Agosto'
    break;
    case 8 :
    nomeMes = 'Setembro'
    break;
    case 9 :
    nomeMes = 'Outubro'
    break;
    case 10 :
    nomeMes = 'Novembro'
    break;
    case 11 :
    nomeMes = 'Dezembro'
    break;
}

switch(diaSemana){
    case 0: 
        console.log("Domingo") 
        doc.textContent = `Domingo, ${numDia} de ${nomeMes} de ${numAno} ${numHora}:${numMin}`
        break;
    case 1:
        console.log("Segunda")
        doc.textContent =`Segunda-Feira, ${numDia} de ${nomeMes} de ${numAno} ${numHora}:${numMin}`
        break;
    case 2: 
        console.log("Terça")
        doc.textContent = `Terça-Feira, ${numDia} de ${nomeMes} de ${numAno} ${numHora}:${numMin}`
        break;
    case 3: 
        console.log("Quarta")
        doc.textContent = `Quarta-Feira, ${numDia} de ${nomeMes} de ${numAno} ${numHora}:${numMin}`
        break;
    case 4: 
        console.log("Quinta")
        doc.textContent = `Quinta-Feira, ${numDia} de ${nomeMes} de ${numAno} ${numHora}:${numMin}`
        break;
    case 5: 
        console.log("Sexta")
        doc.textContent =`Sexta-Feira, ${numDia} de ${nomeMes} de ${numAno} ${numHora}:${numMin}`
        break;
    case 6: 
        console.log("Sábado")
        doc.textContent = `Sábado, ${numDia} de ${nomeMes} de ${numAno} ${numHora}:${numMin}`
        break;
    default: 
        console.log("FODA-SE FDP")
}