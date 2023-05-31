const paragrafos = document.querySelector('.paragrafos');
const ps = document.querySelectorAll('p')

/*ISSO AQUI PEGA A COR DO BODY
const estilosbody = getComputedStyle(document.body);
const backgroundColorBody = estilosbody.backgroundColor;
*/
//nesse só vai se vc especificar dentro assim ps[i] pq aqui ele vai pegar cada indice dentro ps
for(let i in ps){
    ps[i].style.background = 'red'
    //ps[i].style.color ='white'
    //break
}
//aqui parece que ele transforma o i em um indice de ps
for(let i of ps){
    //i.style.background = 'red'
    i.style.color = "white"
}
