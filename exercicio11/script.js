//armazena o cronometro
var cronometro;
//script do cronometro
var segundo = 0
var min = 0
var hora = 0
//pegando no html para inserir algumas coisas
var pHour = document.getElementById('hours');
var pMinutes = document.getElementById('minutes');
var pSeconds = document.getElementById('seconds')
//style do botão
var ponto1 = document.getElementById("ponto1")
var ponto2 = document.getElementById("ponto2")
//pega os botões para realizar somente um click
var button1 = document.getElementById('iniciar')
var button2 = document.getElementById('pausar')
//function ao clicar iniciar começa contagem
function iniciar(){
    button1.disabled = true;
    button2.disabled = false;
    ponto1.style.color = 'black'
    ponto2.style.color = 'black'
    pHour.style.color = 'black'
    pMinutes.style.color = 'black'
    pSeconds.style.color = 'black'
    cronometro = setInterval(()=>{
        if(segundo<10){
            pSeconds.innerHTML =`0${segundo}`;
            segundo++
        }else{
            pSeconds.innerHTML =`${segundo}`;
            segundo++;
            if(segundo == 60){
                segundo = 0; 
                if(min<10){
                    pMinutes.innerHTML = `0${min}`
                    min++
                }else{
                    pMinutes.innerHTML = `${min}`
                    min++
                    if(min == 60){
                        min = 0
                        if(hora<10){
                            pHour.innerHTML = `0${hora}`
                            hora++
                        }else{
                            pHour.innerHTML = `${hora}`
                            hora++
                        }
                    }
                } 
            }
        }
        console.log(segundo)
        console.log(min)
        console.log(hora)
    },1000)
}
//zerar a contagem
function zerar(){
    button1.disabled = false;
    button2.disabled = false;
    clearTimeout(cronometro)
    hora = 0;
    min = 0;
    segundo = 0;
    pHour.innerHTML = `00`
    pMinutes.innerHTML = `00`
    pSeconds.innerHTML = `00`
    ponto1.style.color = 'black'
    ponto2.style.color = 'black'
    pHour.style.color = 'black'
    pMinutes.style.color = 'black'
    pSeconds.style.color = 'black'
}
//pausar
function pausar(){
    button1.disabled = false;
    button2.disabled = true;
    clearInterval(cronometro);
    ponto1.style.color = 'red'
    ponto2.style.color = 'red'
    pHour.style.color = 'red'
    pMinutes.style.color = 'red'
    pSeconds.style.color = 'red'
}